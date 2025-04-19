This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deployment for React with PM2 On Apache/Nginx
`sudo bash deploy.sh`

## Manual Deploy with PM2 on Server

```bash
npm install pm2 -g

npm run build

pm2 start npm --name "grabit-next" -- run start
```
## Configure with Nginx / Apache 

Nginx
```bash
sudo apt update
sudo apt install nginx
```

`sudo nano /etc/nginx/sites-available/yourdomain.com`

```bash
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Apache
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod rewrite
```

`sudo nano /etc/apache2/sites-available/yourdomain.com.conf`

```bash
<VirtualHost *:80>
    ServerName yourdomain.com

    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

`sudo a2ensite subdomain.yourdomain.com.conf`

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```
