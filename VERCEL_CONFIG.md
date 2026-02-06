# Vercel Configuration

**Project:** jarvis-os-website  
**Domain:** https://jarvis-os-website.vercel.app  
**GitHub Integration:** Connected (auto-deploy on push to main)  
**Token:** JNxgpo0Rf3U0GKeWmV2RY8QP

## Deployment Flow
1. Push/merge to `main` branch
2. Vercel auto-detects via GitHub webhook
3. Build: `npm run build`
4. Deploy to: jarvis-os-website.vercel.app

## Environment Variables (if needed)
Add to Vercel Dashboard:
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY

## Agent Instructions
Monitor deployment status and report to Discord on every deploy.