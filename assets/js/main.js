// Optional: Add any JS behaviors, e.g., floating button animation
// For now, the floating WhatsApp button is static but can animate if needed

// Example: Make WhatsApp button move slightly
const whatsappBtn = document.querySelector('.whatsapp-float');

setInterval(() => {
  whatsappBtn.style.transform = `translateY(${Math.sin(Date.now() * 0.002) * 5}px)`;
}, 100);
