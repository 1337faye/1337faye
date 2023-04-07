const commandInput = document.getElementById('command-input');
const displayArea = document.getElementById('display-area');
const ipifyApiKey = 'at_eP34NmtPuv2N9A8jJTNjvH7RJhTcT';

// Focus on input field when the page loads
commandInput.focus();

// Focus on input field when it loses focus

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

commandInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = commandInput.value.trim();

    // Clear input value
    commandInput.value = '';

    // Handle commands
    switch (command) {
        case '':
            displayArea.innerHTML += '<p> <span class="text-red-600 font-bold"> Please input a command </span> </p>';
            break;
        case 'clear':
            displayArea.innerHTML = '';
            break;
      case 'socials':
        displayArea.innerHTML += '<br><p>Socials: <br> Instagram : <a class="text-blue-600" href="https://www.instagram.com/1337faye/"> @1337faye </a> <br> YouTube : <a class="text-blue-600" href="https://www.youtube.com/channel/UC0M21QzqgFn-am15zbeIHaQ"> @fayenotfaye </a></p> <br>';
        break;
      case 'help':
        displayArea.innerHTML += '<br><p>Enter "socials" to view socials, "clear" to clear the console, "fiverr" to view my Fiverr profile, "resume" to view my resume, or "ipconfig" to view your IP address. <span class="text-red-600 font-bold">COMMANDS ARE CASE SENSITIVE</span></p>';
        break;
      case 'fiverr':
        displayArea.innerHTML += '<br><p><a class="text-blue-600" href="https://www.fiverr.com/faye1337">My Fiverr profile</a></p>';
        break;
      case 'resume':
        displayArea.innerHTML += '<br><p>Coming soon probably</p>';
        break;
      case 'ipconfig':
        try {
            displayArea.innerHTML +=  '<p> <br> Attempting to fetch IP address, this may take up to 30 seconds depending on API availability </p>'
          const ipAddress = await fetch(`https://api.ipify.org?format=json`).then(response => response.json()).then(data => data.ip);
          displayArea.innerHTML += `<br><p>Your IP address is <span class="text-red-600"> ${ipAddress} </span></p> <br>`;
        } catch (error) {
          displayArea.innerHTML += '<br><p>Failed to retrieve IP address, check your internet connection.</p> <br>';
        }
        break;
      default:
        displayArea.innerHTML += `<p><span class="text-red-600 font-bold">${command}</span>: command not found.</p>`;
    }
  }
});

commandInput.addEventListener('focus', () => {
    commandInput.click();
  });

setInterval(() => {
    commandInput.focus();
  }, 250);
// Add blinking animation to input cursor
commandInput.classList.add('cursor-blink');