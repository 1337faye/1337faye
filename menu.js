let clicked = false
document.getElementById("menubutton").classList.remove('opacity-0');
async function menu1() {
    if (clicked == false) {
        document.getElementById("menubutton").classList.add('opacity-0');
        
        await sleepNow(100)
        document.getElementById("menu").classList.remove('hidden');

        document.getElementById("menubutton").classList.remove('opacity-0');
        document.getElementById("menubutton").classList.remove('fa-bars');


        document.getElementById("menubutton").classList.add('opacity-0');
        document.getElementById("menubutton").classList.add('fa-x')
        await sleepNow(100)
        document.getElementById("menu").classList.add('opacity-100');
        document.getElementById("menu").classList.remove('opacity-0');  
        document.getElementById("menu").classList.remove('-translate-y-12');
        document.getElementById("menu").classList.add('translate-y-0');  
        document.getElementById("menubutton").classList.remove('opacity-0');
        



        clicked = true
    } else {
        document.getElementById("menubutton").classList.add('opacity-0');
        
        await sleepNow(100)
        document.getElementById("menubutton").classList.remove('opacity-0');
        document.getElementById("menubutton").classList.remove('fa-x');

        
        document.getElementById("menubutton").classList.add('opacity-0');
        document.getElementById("menubutton").classList.add('fa-bars')
        await sleepNow(100)
        document.getElementById("menubutton").classList.remove('opacity-0');
  
        document.getElementById("menu").classList.remove('opacity-100');
        document.getElementById("menu").classList.add('opacity-0');  
        document.getElementById("menu").classList.add('-translate-y-12');
        document.getElementById("menu").classList.remove('translate-y-0');  
        document.getElementById("menubutton").classList.remove('opacity-0');

        await sleepNow(200)
        document.getElementById("menu").classList.add('hidden');
        clicked = false 
    }
}

function menu() {
    menu1()
}