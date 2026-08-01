# Deploying this website to Vercel

This project is a static HTML, CSS, and JavaScript website. It does not use Next.js.

## Vercel project settings

Configure the project with these values:

- Framework Preset: `Other`
- Root Directory: the directory containing this `package.json` and `vercel.json`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: leave as the automatic default

If the repository itself is the website project, leave Root Directory blank. If the website is inside a larger repository, select the `Xiangju website` directory.

## Redeploying after changing the settings

1. Open the Vercel project.
2. Go to **Settings → Build and Deployment**.
3. Change **Framework Preset** from `Next.js` to `Other`.
4. Confirm the Root Directory points to this project.
5. Save the settings.
6. Open **Deployments**, select the failed deployment, and choose **Redeploy** without using the previous build cache.

The checked-in `vercel.json` also forces the `Other` framework preset and the correct production output directory for future deployments.
