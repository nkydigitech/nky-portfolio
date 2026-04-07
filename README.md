# 🚀 Nky Digitech Portfolio

> Cloud & DevOps Engineer Portfolio — built, containerized, and deployed with a real DevOps pipeline.

## 📁 Project Structure

```
nky-portfolio/
├── index.html              ← Main portfolio page (single-page, scroll sections)
├── Dockerfile              ← Container definition (nginx:alpine)
├── nginx.conf              ← Nginx server config
├── src/
│   ├── css/
│   │   └── style.css       ← All styles (dark terminal aesthetic)
│   ├── js/
│   │   └── main.js         ← Interactions, typing animation, scroll reveals
│   └── images/             ← Add your screenshots here!
│       ├── profile.jpg         ← Your photo (replace placeholder)
│       ├── project-terraform.png
│       ├── project-docker.png
│       ├── project-agent.png
│       └── project-portfolio.png
└── README.md
```

## 🖼️ Adding Your Screenshots

Replace the placeholder divs in `index.html` with real `<img>` tags:

```html
<!-- Before (placeholder) -->
<div class="project-img-placeholder">
  <span class="proj-placeholder-icon">🏗️</span>
  <span>// add terraform screenshot</span>
</div>

<!-- After (real image) -->
<img src="src/images/project-terraform.png" alt="Terraform 3-tier AWS architecture" />
```

For the about section profile photo:
```html
<!-- Replace the about-image-placeholder div with: -->
<img src="src/images/profile.jpg" alt="Nkechi Ahanonye" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" />
```

## 🐳 Run with Docker

```bash
# Build the image
docker build -t nky-portfolio .

# Run locally
docker run -d -p 8080:80 --name portfolio nky-portfolio

# Open in browser
open http://localhost:8080

# Stop
docker stop portfolio && docker rm portfolio
```

## 🏗️ Deploy with Terraform + Ansible

See Phase 3 & 4 of the build guide.

## ☸️ Deploy with Kubernetes (k3s)

See Phase 5 of the build guide — k3s manifest included.

## 📞 Contact

- Email: nahanonye@gmail.com
- GitHub: github.com/nkydigitech
- LinkedIn: linkedin.com/in/nkydigitech
