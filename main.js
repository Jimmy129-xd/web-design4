document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  ['year','year-2','year-3','year-4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });
});
