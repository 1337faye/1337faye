AOS.init();
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.style.display = 'none';
      document.getElementById('mobile-menu-button').addEventListener('click', function() {
          const mobileMenu = document.getElementById('mobile-menu');
          mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
      });
document.addEventListener('DOMContentLoaded', function() {
const copyEmailButton = document.getElementById('copy-email-button');
const copyPhoneButton = document.getElementById('copy-phone-button');
const emailToCopy = document.getElementById('email-to-copy');
const phoneToCopy = document.getElementById('phone-to-copy');

copyEmailButton.addEventListener('click', function() {
    copyToClipboard(emailToCopy.textContent);
});

copyPhoneButton.addEventListener('click', function() {
    copyToClipboard(phoneToCopy.textContent);
});

function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // Optionally, provide visual feedback to the user
    if (text === emailToCopy.textContent) {
    copyEmailButton.textContent = 'Copied!';
    setTimeout(function() {
        copyEmailButton.textContent = 'Copy Email Address';
    }, 2000); // Reset button text after 2 seconds
    } else if (text === phoneToCopy.textContent) {
    copyPhoneButton.textContent = 'Copied!';
    setTimeout(function() {
        copyPhoneButton.textContent = 'Copy Phone Number';
    }, 2000); // Reset button text after 2 seconds
    }
}
});