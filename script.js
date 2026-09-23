document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
}));

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('cname').value;
  const email = document.getElementById('cemail').value;
  const msg = document.getElementById('cmsg').value;
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(msg + '\n\nFrom: ' + name + ' (' + email + ')');
  window.location.href = 'mailto:youremail@example.com?subject=' + subject + '&body=' + body;
});

document.getElementById('resumeBtn').addEventListener('click', function(e){
  e.preventDefault();
  alert('Add your résumé PDF to the project and link it here — this is a placeholder button.');
});
