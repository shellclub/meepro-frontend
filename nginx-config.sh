#!/bin/bash

# Get arguments
APP_NAME=$1
PORT=$2
DOMAIN=$3

# Check if all arguments are provided
if [ -z "$APP_NAME" ] || [ -z "$PORT" ] || [ -z "$DOMAIN" ]; then
    echo "Error: Missing arguments. Usage: nginx-config.sh <app_name> <port> <domain>"
    exit 1
fi

CONFIG_FILE="/etc/nginx/sites-available/$APP_NAME"
BACKUP_FILE="/etc/nginx/sites-available/$APP_NAME.bak"

# Backup existing configuration
if [ -f "$CONFIG_FILE" ]; then
    echo "Backing up existing Nginx configuration to $BACKUP_FILE..."
    cp "$CONFIG_FILE" "$BACKUP_FILE"
fi

# Write new configuration
echo "Creating Nginx configuration for $APP_NAME..."
cat <<EOL > "$CONFIG_FILE"
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:$PORT/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Enable site and reload Nginx
ln -sf "$CONFIG_FILE" "/etc/nginx/sites-enabled/"
nginx -t && systemctl reload nginx || { echo "Error: Failed to test or reload Nginx."; exit 1; }

echo "Nginx configuration completed successfully!"
