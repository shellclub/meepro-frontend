npm install pm2 -g
npm i
npm run build
pm2 delete "grabit-next"
pm2 start npm --name "grabit-next" -- run start
pm2 save
