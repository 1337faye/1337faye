function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
console.log("Thanks for checking out my website!")
const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function loader() {
   document.onreadystatechange = async function() {
    await sleepNow(700)
     if (document.readyState !== "complete") {
                    document.querySelector("body").style.visibility = "hidden";
                  document.querySelector("spinner").style.visibility = "visible";
              } else {
                  document.querySelector("spinner").style.opacity = "0%";
                  document.getElementById("load").style.scale = "50%";

                  await sleepNow(1000)
                  document.querySelector("spinner").style.visibility = "hidden";
                  document.querySelector("body").style.visibility = "visible";
              }
            }
}

randint = Math.floor(getRandomArbitrary(1,10))

async function splashscreen() {
    if (randint == 1) {
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Now with extra JavaScript!";
    }
    else if (randint == 2){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Copying data!"; 
    }
    else if (randint == 3){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Browsing Stackoverflow!"; 
    }
    else if (randint == 4){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Uninstalling php!"; 
    }
    else if (randint == 5){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Debugging type errors!"; 
    }
    else if (randint == 6){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Deleting pull requests!"; 
    }
    else if (randint == 7){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Ice cream is overrated!"; 
    }
    else if (randint == 8){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "osu! < beat sabre!"; 
    }
    else if (randint == 9){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "Hosted on Github Pages!"; 
    }
    else if (randint == 10){
        await sleepNow(300)
        document.getElementById("splashscreen").innerHTML = "No added preservatives!"; 
    }
    else{
        console.log("Error")
    }
}

splashscreen()
loader()

