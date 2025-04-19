#!/bin/bash

# Default values
DEFAULT_APP_NAME="grabit-next"
DEFAULT_PORT=3000
DEFAULT_DOMAIN="yourdomain.com"

# Get the logged-in user
LOGGED_USER=$(whoami)

# Ensure script is not run as root for deployment tasks
if [ "$LOGGED_USER" == "root" ]; then
    echo "Please do not run this script as root. Use a normal user for deployment tasks."
    exit 1
fi

# Function to prompt user for input with a default value
prompt_with_default() {
    local prompt_message=$1
    local default_value=$2
    local user_input
    read -p "$prompt_message [$default_value]: " user_input
    echo "${user_input:-$default_value}"
}

# Function to check if Node.js and npm are installed
check_node_npm() {
    if command -v node &> /dev/null && command -v npm &> /dev/null; then
        echo "Node.js version: $(node -v)"
        echo "npm version: $(npm -v)"
        return 0
    else
        echo "Node.js and/or npm are not installed globally."
        return 1
    fi
}

# Function to ensure nvm is loaded
ensure_nvm_loaded() {
    if [ ! -d "/home/$LOGGED_USER/.nvm" ]; then
        echo "Error: nvm is not installed for the user $LOGGED_USER. Please install nvm."
        exit 1
    fi

    if [ -z "$NVM_DIR" ]; then
        echo "nvm is not loaded. Sourcing nvm..."
        source "/home/$LOGGED_USER/.nvm/nvm.sh"
    fi
}

# Function to install Node.js using nvm
install_node_with_nvm() {
    read -p "Do you want to install the latest Node.js or specify a version? (latest/version): " node_choice
    if [ "$node_choice" == "latest" ]; then
        nvm install node || { echo "Error: Failed to install the latest Node.js."; exit 1; }
    else
        read -p "Enter the specific version of Node.js to install (e.g., 18.16.0): " node_version
        nvm install "$node_version" || { echo "Error: Failed to install Node.js version $node_version."; exit 1; }
    fi
    echo "Node.js version: $(node -v)"
    echo "npm version: $(npm -v)"
}

# Function to check if sudo is available
check_sudo() {
    if ! command -v sudo &> /dev/null; then
        echo "Error: sudo command not found. You need sudo to configure the web server."
        exit 1
    fi
}

# Prompt for APP_NAME, PORT, and DOMAIN
APP_NAME=$(prompt_with_default "Enter the application name" "$DEFAULT_APP_NAME")
PORT=$(prompt_with_default "Enter the application port" "$DEFAULT_PORT")
DOMAIN=$(prompt_with_default "Enter the application domain" "$DEFAULT_DOMAIN")

echo "Configuration:"
echo "  Application Name: $APP_NAME"
echo "  Port: $PORT"
echo "  Domain: $DOMAIN"

# Step 1: Check for Node.js and npm
if ! check_node_npm; then
    echo "Node.js and npm are not installed. Checking for nvm..."
    ensure_nvm_loaded
    install_node_with_nvm
fi

# Step 2: Install dependencies
read -p "Do you want to install dependencies? (y/n): " proceed_dependencies
if [ "$proceed_dependencies" == "y" ]; then
    echo "Installing dependencies..."
    npm install || { echo "Error: Failed to install dependencies."; exit 1; }
fi

# Step 3: Build the React application (only if src folder exists)
if [ -d "src" ]; then
    read -p "Do you want to build the application? (y/n): " proceed_build
    if [ "$proceed_build" == "y" ]; then
        echo "Building the React application..."
        npm run build || { echo "Error: Failed to build the application."; exit 1; }
    fi
else
    echo "No 'src' directory found. Skipping build step."
fi

# Step 4: Manage PM2 process
read -p "Do you want to manage the PM2 process? (y/n): " proceed_pm2
if [ "$proceed_pm2" == "y" ]; then
    echo "Managing PM2 process..."
    pm2 delete "$APP_NAME" 2>/dev/null
    pm2 start npm --name "$APP_NAME" -- run start || { echo "Error: Failed to start the application with PM2."; exit 1; }
    pm2 save
fi

# Step 5: Configure web server
read -p "Do you want to configure the web server (Do not proceed on shared server)? (y/n): " proceed_server
if [ "$proceed_server" == "y" ]; then
    # Check if sudo is available before proceeding with server configuration
    check_sudo

    read -p "Choose web server to configure (1: Apache, 2: Nginx): " server_choice
    case $server_choice in
        1)
            sudo bash apache-config.sh "$APP_NAME" "$PORT" "$DOMAIN"
            ;;
        2)
            sudo bash nginx-config.sh "$APP_NAME" "$PORT" "$DOMAIN"
            ;;
        *)
            echo "Invalid choice. Skipping server configuration."
            ;;
    esac
fi

echo "Deployment complete!"
