// ══════════════════════════════════════
// NKY DIGITECH PORTFOLIO — main.js
// ══════════════════════════════════════

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ── NAVBAR SCROLL ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── TYPING ANIMATION (Hero code block) ── */
const codeLines = [
  '# 🚀 Nky Digitech — Deploy Pipeline',
  '',
  '$ terraform init',
  '  ✔ Provider AWS initialized',
  '',
  '$ terraform apply -auto-approve',
  '  ✔ EC2 instance created',
  '  ✔ VPC and subnets provisioned',
  '',
  '$ ansible-playbook site.yml',
  '  ✔ Docker installed',
  '  ✔ Nginx configured',
  '  ✔ App container running',
  '',
  '$ kubectl get pods',
  '  portfolio-pod   1/1   Running   ✔',
  '',
  '# 🌍 Live at nkydigitech.online',
];

const codeEl = document.getElementById('typedCode');
let lineIndex = 0;
let charIndex = 0;
let currentLine = '';

function type() {
  if (lineIndex >= codeLines.length) return;
  const line = codeLines[lineIndex];
  if (charIndex < line.length) {
    currentLine += line[charIndex];
    charIndex++;
    codeEl.textContent = getAllLines() + currentLine + '▋';
    setTimeout(type, charIndex === 1 ? 20 : 22);
  } else {
    codeEl.textContent = getAllLines() + currentLine + '\n▋';
    lineIndex++;
    charIndex = 0;
    currentLine = '';
    setTimeout(type, 80);
  }
}

function getAllLines() {
  return codeLines.slice(0, lineIndex).join('\n') + (lineIndex > 0 ? '\n' : '');
}

// Apply syntax coloring via wrapping in colored spans
function colorizeCode(text) {
  return text
    .replace(/(#.*)/g, '<span style="color:#565d74">$1</span>')
    .replace(/(\$\s\S+)/g, '<span style="color:#00d4aa">$1</span>')
    .replace(/(✔)/g, '<span style="color:#28c840">$1</span>')
    .replace(/(🚀|🌍)/g, '$1');
}

// Start typing after a short delay
setTimeout(type, 1200);

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll(
  '.skill-card, .project-card, .pipe-step, .about-text, .about-image-wrap, .contact-left, .contact-form, .section-title, .section-label'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

reveals.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
  revealObserver.observe(el);
});

/* ── CONTACT FORM (simple, no backend needed yet) ── */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"] span');
  btn.textContent = '✔ Message sent!';
  setTimeout(() => { btn.textContent = 'Send Message'; }, 3000);
  // TODO: wire up to Formspree or EmailJS when ready
  // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(contactForm) })
});

/* ── SMOOTH ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── SKILL BAR ANIMATION ON SCROLL ── */
const skillBars = document.querySelectorAll('.skill-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fillBar 1.5s ease forwards';
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => barObserver.observe(b));

/* ── PIPELINE STEP STAGGER ── */
document.querySelectorAll('.pipe-step').forEach((step, i) => {
  step.style.opacity = '0';
  step.style.transform = 'translateY(20px)';
  step.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`;
});

const pipeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.pipe-step').forEach(step => {
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      });
    }
  });
}, { threshold: 0.2 });

const pipeline = document.querySelector('.pipeline-steps');
if (pipeline) pipeObserver.observe(pipeline);
