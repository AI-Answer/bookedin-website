# Railway deployment notes

- Root directory: bookedin-website
- Build command: npm ci && npm run build
- Start command: npm run start
- Port: Railway sets PORT; start script uses `next start -p $PORT`

Optional:
- Set NODE_ENV=production
- If using custom domain, configure in Railway project settings and add DNS

