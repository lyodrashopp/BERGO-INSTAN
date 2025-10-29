
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('custom-navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }
    }
  });

  // Form submission handling
  const orderForm = document.querySelector('#order form');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const color = document.getElementById('color').value;
      const quantity = document.getElementById('quantity').value;
      
      // Simple validation
      if (!name || !phone || !color) {
        alert('Mohon lengkapi semua field yang wajib diisi.');
        return;
      }
      
      // Create WhatsApp message
      const message = `Saya tertarik dengan HIJAB BERGO INSTAN DAFFI SERIES ORIGINAL\n\nNama: ${name}\nNo. WhatsApp: ${phone}\nWarna: ${color}\nJumlah: ${quantity}\n\nMohon informasi lebih lanjut.`;
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
    });
  }

  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  // Trigger once on load
  animateOnScroll();
});
