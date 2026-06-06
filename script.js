// Accessible form handling: prevent submission and announce success
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(!form) return;
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Simple validation (HTML5 handles types/required)
    if(!form.checkValidity()){
      status.textContent = 'Please fill all required fields correctly.';
      status.classList.remove('sr-only');
      return;
    }
    // Normally submit via fetch; here we just show accessible confirmation
    status.textContent = 'Thanks — your message has been received. I will reply soon.';
    status.classList.remove('sr-only');
    form.reset();
    // Move focus to status for screen readers
    status.focus && status.focus();
  });
});
