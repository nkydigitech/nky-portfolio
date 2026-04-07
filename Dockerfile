# ═══════════════════════════════════════
# Nky Digitech Portfolio — Dockerfile
# Nginx serves the static site
# ═══════════════════════════════════════

FROM nginx:alpine

# Copy the portfolio files into nginx's web root
COPY . /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# nginx runs in the foreground
CMD ["nginx", "-g", "daemon off;"]
