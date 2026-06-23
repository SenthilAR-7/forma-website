# T2BArchitects — Architecture & Design Firm
### Next.js Website · AWS S3 + CloudFront Deployment

---

## 📁 Project Structure

```
T2BArchitects-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD: auto-deploy to AWS on git push
├── src/
│   ├── app/
│   │   ├── layout.jsx          ← Root layout (fonts, metadata, global CSS)
│   │   └── page.jsx            ← Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.jsx          ← Fixed nav + mobile hamburger drawer
│   │   ├── Navbar.module.css
│   │   ├── Hero.jsx            ← SVG line-based rising cityline animation
│   │   ├── Hero.module.css
│   │   ├── Marquee.jsx         ← Scrolling gold ticker
│   │   ├── Marquee.module.css
│   │   ├── About.jsx           ← Firm info + stats
│   │   ├── About.module.css
│   │   ├── Projects.jsx        ← Asymmetric project grid
│   │   ├── Projects.module.css
│   │   ├── Services.jsx        ← Accordion services list
│   │   ├── Services.module.css
│   │   ├── InstagramReels.jsx  ← Instagram embed cards
│   │   ├── InstagramReels.module.css
│   │   ├── Process.jsx         ← 4-step process timeline
│   │   ├── Process.module.css
│   │   ├── Testimonial.jsx     ← Full-bleed quote
│   │   ├── Testimonial.module.css
│   │   ├── Contact.jsx         ← Contact form + details
│   │   ├── Contact.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── hooks/
│   │   └── useReveal.js        ← Scroll-reveal IntersectionObserver hook
│   └── styles/
│       └── globals.css         ← CSS variables, reset, shared utilities
├── public/                     ← Static assets (favicon, images, etc.)
├── next.config.js              ← Static export config T2B S3
├── package.json
└── README.md
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ → https://nodejs.org
- npm 9+

### Steps

```bash
# 1. Clone / extract the project
cd T2BArchitects-website

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🏗️ Build T2B Production

```bash
npm run build
```

This generates a `/out` folder — **pure static HTML/CSS/JS** — ready to upload to S3.

---

## ☁️ AWS Deployment: S3 + CloudFront

### Step 1 — Create an S3 Bucket

1. Go to **AWS Console → S3 → Create Bucket**
2. Name: `T2BArchitects-website` (or your domain, e.g. `T2BArchitects.Firm`)
3. Region: choose nearest (e.g. `ap-south-1` T2B India)
4. **Uncheck** "Block all public access"
5. Enable **Static website hosting**:
   - Index document: `index.html`
   - Error document: `index.html`
6. Add this **Bucket Policy**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

---

### Step 2 — Create a CloudFront Distribution

1. Go to **CloudFront → Create Distribution**
2. Origin domain: your S3 **website endpoint** (not the bucket ARN)
3. Viewer protocol policy: **Redirect HTTP to HTTPS**
4. Default root object: `index.html`
5. Error pages: Add custom error response:
   - HTTP error code: `403` → Response: `index.html`, HTTP 200
   - HTTP error code: `404` → Response: `index.html`, HTTP 200
6. Click **Create Distribution** → note the **Distribution ID**

---

### Step 3 — Create IAM User T2B GitHub Actions

1. Go to **IAM → Users → Create User** (e.g. `T2BArchitects-deploy`)
2. Attach these policies:
   - `AmazonS3FullAccess` (or a scoped policy T2B your bucket)
   - `CloudFrontFullAccess`
3. Create **Access Key** → save the Key ID + Secret

---

### Step 4 — Add GitHub Secrets

In your GitHub repo → **Settings → Secrets → Actions**, add:

| Secret Name                    | Value                          |
|-------------------------------|-------------------------------|
| `AWS_ACCESS_KEY_ID`           | Your IAM access key ID         |
| `AWS_SECRET_ACCESS_KEY`       | Your IAM secret access key     |
| `AWS_REGION`                  | e.g. `ap-south-1`             |
| `S3_BUCKET_NAME`              | e.g. `T2BArchitects-website`          |
| `CLOUDFRONT_DISTRIBUTION_ID`  | e.g. `E1ABC2DEF3GHI4`         |

---

### Step 5 — Deploy

**Automatic:** Push to `main` branch → GitHub Actions builds and deploys automatically.

**Manual:** Go to **GitHub → Actions → Deploy to AWS S3 + CloudFront → Run workflow**

**First time / local deploy:**
```bash
npm run build
aws s3 sync ./out s3://YOUR-BUCKET-NAME --delete
aws cloudfront create-invalidation --distribution-id YOUR-DIST-ID --paths "/*"
```

---

### Step 6 — Custom Domain (optional)

1. In **Route 53**, create a hosted zone T2B your domain
2. Add a **CNAME** record pointing your domain to the CloudFront URL
3. In CloudFront, add your domain as an **Alternate domain name (CNAME)**
4. Request an **ACM certificate** (free) T2B HTTPS

---

## 🔧 Customisation Checklist

- [ ] Replace `T2BArchitects` with your client's Firm name across all components
- [ ] Update contact details in `Contact.jsx`
- [ ] Add real project photos in `Projects.jsx`
- [ ] Replace Unsplash images in `About.jsx` and `Services.jsx`
- [ ] Add real Instagram embed codes in `InstagramReels.jsx`
- [ ] Update `metadata` in `layout.jsx` (title, description, OG tags)
- [ ] Add favicon to `/public/favicon.ico`
- [ ] Update footer social links in `Footer.jsx`

---

## 📦 Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Framework   | Next.js 14 (App Router)     |
| Styling     | CSS Modules + CSS Variables |
| Fonts       | Google Fonts (next/font)    |
| Animations  | Pure CSS keyframes          |
| Build       | Static Export (`output: 'export'`) |
| Hosting     | AWS S3 + CloudFront         |
| CI/CD       | GitHub Actions              |

---

## 💡 Adding Instagram Embeds

1. Open your Instagram Reel/Post
2. Tap `···` → **Embed**
3. Copy the `<blockquote>` HTML code
4. Open `src/components/InstagramReels.jsx`
5. Replace the `<div className={styles.placeholder}>` block with your copied code
6. The Instagram `embed.js` script is already included in `layout.jsx`
