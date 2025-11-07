/* ================================================================= */
/* COMPONENT: Step Progress Bar JavaScript                           */
/* Component ID: 17-step-progress-bar                                */
/* Version: 1.0.0                                                    */
/* Dependencies: jQuery 3.5.1+                                       */
/* ================================================================= */

/*
INSTRUCTIONS:
1. Copy this entire script before your closing </body> tag
2. Update CONFIGURATION section below to match your setup
3. Ensure jQuery is loaded BEFORE this script
4. Add id="step-1", id="step-2", etc. to your step containers
*/

$(document).ready(function() {
  
  // ===============================================================
  // CONFIGURATION - UPDATE THESE VALUES
  // ===============================================================
  
  const totalSteps = 6; // REQUIRED: Change to your total number of steps
  const $stepSection = $('#step-by-step'); // REQUIRED: Change to your step section ID
  const $finalCTA = $('.final-cta'); // OPTIONAL: Where "Finish" button scrolls to
  
  // Scroll offsets (in pixels)
  const SCROLL_OFFSET = 250; // Distance above step when scrolling to it
  const SHOW_BEFORE = 300;   // Show progress bar this far before step section
  const SHOW_AFTER = 500;    // Keep showing progress bar this far after section
  
  // Animation speeds (in milliseconds)
  const FADE_SPEED = 200;    // Fade in/out duration
  const SCROLL_SPEED = 500;  // Smooth scroll duration
  
  // ===============================================================
  // COMPONENT LOGIC - DO NOT MODIFY BELOW UNLESS CUSTOMIZING
  // ===============================================================
  
  let currentStep = 1;
  const $progressBar = $('.step-progress-bar');
  
  // Check if we're in the step-by-step section
  function isInStepSection() {
    if (!$stepSection.length) return false;
    
    const scrollTop = $(window).scrollTop();
    const sectionTop = $stepSection.offset().top - SHOW_BEFORE;
    const sectionBottom = sectionTop + $stepSection.outerHeight() + SHOW_AFTER;
    
    return scrollTop >= sectionTop && scrollTop <= sectionBottom;
  }
  
  // Show/hide progress bar based on section
  function toggleProgressBar() {
    if (isInStepSection()) {
      $progressBar.fadeIn(FADE_SPEED).css('display', 'block');
    } else {
      $progressBar.fadeOut(FADE_SPEED);
    }
  }
  
  // Update step progress indicators
  function updateStepProgress(stepNumber) {
    currentStep = stepNumber;
    
    // Reset all bubbles
    $('.step-bubble').removeClass('active completed');
    
    // Mark current step as active
    $(`.step-bubble[data-step="${stepNumber}"]`).addClass('active');
    
    // Mark previous steps as completed
    for (let i = 1; i < stepNumber; i++) {
      $(`.step-bubble[data-step="${i}"]`).addClass('completed');
      $(`.step-bubble[data-step="${i}"]`).next('.step-connector').addClass('completed');
    }
    
    // Update progress label
    $('#current-step-label').text(`Step ${stepNumber} of ${totalSteps}`);
    
    // Update navigation button states
    $('#prev-step').prop('disabled', stepNumber === 1);
    $('#next-step').prop('disabled', stepNumber === totalSteps);
    
    // Change "Next" to "Finish" on last step
    if (stepNumber === totalSteps) {
      $('#next-step').html('<span class="d-none d-sm-inline mr-1">Finish</span><i class="fas fa-check"></i>');
    } else {
      $('#next-step').html('<span class="d-none d-sm-inline mr-1">Next</span><i class="fas fa-chevron-right"></i>');
    }
  }
  
  // Smooth scroll to step when bubble clicked
  $('.step-bubble').on('click', function(e) {
    e.preventDefault();
    const stepNumber = parseInt($(this).data('step'));
    const targetId = $(this).attr('href');
    
    if ($(targetId).length) {
      $('html, body').animate({
        scrollTop: $(targetId).offset().top - SCROLL_OFFSET
      }, SCROLL_SPEED);
      
      updateStepProgress(stepNumber);
    }
  });
  
  // Previous button click handler
  $('#prev-step').on('click', function() {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      const $target = $(`#step-${prevStep}`);
      
      if ($target.length) {
        $('html, body').animate({
          scrollTop: $target.offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED);
        
        updateStepProgress(prevStep);
      }
    }
  });
  
  // Next button click handler
  $('#next-step').on('click', function() {
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      const $target = $(`#step-${nextStep}`);
      
      if ($target.length) {
        $('html, body').animate({
          scrollTop: $target.offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED);
        
        updateStepProgress(nextStep);
      }
    } else {
      // Finished all steps - scroll to CTA
      if ($finalCTA.length) {
        $('html, body').animate({
          scrollTop: $finalCTA.offset().top - 100
        }, SCROLL_SPEED);
      }
    }
  });
  
  // Auto-detect which step is in view on scroll
  $(window).on('scroll', function() {
    // Toggle progress bar visibility
    toggleProgressBar();
    
    // Only update step if progress bar is visible
    if (isInStepSection()) {
      let foundStep = false;
      
      $('.step-container').each(function() {
        const stepTop = $(this).offset().top - 300;
        const stepBottom = stepTop + $(this).outerHeight();
        const scrollPos = $(window).scrollTop();
        
        if (scrollPos >= stepTop && scrollPos < stepBottom && !foundStep) {
          const stepId = $(this).attr('id');
          
          if (stepId) {
            // Extract step number from ID (e.g., "step-1" -> 1)
            const stepNumber = parseInt(stepId.split('-')[1]);
            
            if (stepNumber && stepNumber !== currentStep) {
              updateStepProgress(stepNumber);
            }
            foundStep = true;
          }
        }
      });
    }
  });
  
  // ===============================================================
  // INITIALIZATION
  // ===============================================================
  
  // Hide progress bar initially
  $progressBar.hide();
  
  // Set initial step to 1
  updateStepProgress(1);
  
  // Check if we should show progress bar on page load
  toggleProgressBar();
  
  // ===============================================================
  // OPTIONAL: KEYBOARD NAVIGATION
  // ===============================================================
  
  // Uncomment to enable arrow key navigation
  /*
  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      $('#prev-step').click();
    } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
      $('#next-step').click();
    }
  });
  */
  
  // ===============================================================
  // OPTIONAL: ANALYTICS TRACKING
  // ===============================================================
  
  // Uncomment to enable Google Analytics event tracking
  /*
  function trackStepProgress(stepNumber) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'step_progress', {
        'event_category': 'Tutorial Navigation',
        'event_label': 'Step ' + stepNumber,
        'value': stepNumber
      });
    }
  }
  
  // Call trackStepProgress(currentStep) in updateStepProgress()
  */
  
});

/* ================================================================= */
/* DEBUGGING HELPERS                                                 */
/* ================================================================= */

/*
To debug, uncomment and run in browser console:

// Check if jQuery is loaded
console.log('jQuery loaded:', typeof jQuery !== 'undefined');

// Check if step section exists
console.log('Step section found:', $('#step-by-step').length > 0);

// List all step containers
$('.step-container').each(function() {
  console.log('Step container:', $(this).attr('id'));
});

// Check progress bar element
console.log('Progress bar found:', $('.step-progress-bar').length > 0);

// Test visibility function
console.log('In step section:', isInStepSection());
*/
