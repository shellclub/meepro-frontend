#!/bin/bash

# Get arguments
APP_NAME=$1
PORT=$2
DOMAIN=$3

# Check if all arguments are provided
if [ -z "$APP_NAME" ] || [ -z "$PORT" ] || [ -z "$DOMAIN" ]; then
    echo "Error: Missing arguments. Usage: apache-config.sh <app_name> <port> <domain>"
    exit 1
fi

CONFIG_FILE="/etc/apache2/sites-available/$APP_NAME.conf"
BACKUP_FILE="/etc/apache2/sites-available/$APP_NAME.conf.bak"

# Backup existing configuration
if [ -f "$CONFIG_FILE" ]; then
    echo "Backing up existing Apache configuration to $BACKUP_FILE..."
    cp "$CONFIG_FILE" "$BACKUP_FILE"
fi

# Write new configuration
echo "Creating Apache configuration for $APP_NAME..."
cat <<EOL > "$CONFIG_FILE"
<VirtualHost *:80>
    ServerName $DOMAIN

    ProxyPreserveHost On
    ProxyPass / http://localhost:$PORT/
    ProxyPassReverse / http://localhost:$PORT/
</VirtualHost>
EOL

# Enable site and reload Apache
a2enmod proxy proxy_http
a2ensite "$APP_NAME.conf"
systemctl reload apache2 || { echo "Error: Failed to reload Apache."; exit 1; }

echo "Apache configuration completed successfully!"
