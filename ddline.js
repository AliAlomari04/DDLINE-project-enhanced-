const testimonials = document.querySelectorAll('.testimonial');
const leftArrow = document.querySelector('.left.arrow');
const rightArrow = document.querySelector('.right.arrow');

  const photoButton = document.getElementById('photoButton');
        const customModal = document.getElementById('customModal');
        const closeBtn = document.querySelector('.close-btn');
        const customToast = document.getElementById('customToast');
        let popupMethod = 'modal'

let currentIndex = 0;

function updateTestiomnial (index){
  for (let i = 0; i < testimonials.length; i++) {
    if (i === index) {
      testimonials[i].classList.add('active');
    } else {
      testimonials[i].classList.remove('active');
    }
  
}
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestiomnial(currentIndex);
    });


rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestiomnial(currentIndex);
});

 photoButton.addEventListener('click', function() {
            // Add clicked class for button animation
            this.classList.add('clicked');
            
            // Remove clicked class after animation
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
 
    switch(popupMethod) {
                case 'alert':
                    // Simple browser alert
                    alert('شايف انها مش كبسة زر! 😄');
                    break;
                    
                case 'modal':
                    // Custom modal
                    customModal.style.display = 'block';
                    break;
                    
                case 'toast':
                    // Bootstrap toast notification
                    showToast();
                    break;
            } 
        } );

         closeBtn.addEventListener('click', function() {
            customModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === customModal) {
                customModal.style.display = 'none';
            }
        });
        
        // Toast functionality
        function showToast() {
            // Show the toast
            customToast.classList.add('show');
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                customToast.classList.remove('show');
            }, 3000);
        }
        
        // Optional: Add keyboard support for modal
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && customModal.style.display === 'block') {
                customModal.style.display = 'none';
            }
        });
        


updateTestiomnial(currentIndex);