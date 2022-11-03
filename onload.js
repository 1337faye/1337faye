console.log("Stop looking at the console, there is nothing to see here, go away - Faye")
const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function loader() {
   document.onreadystatechange = async function() {
    await sleepNow(700)
    console.log("Yes, I know I'm deliberately adding more loading time but it's totally peak UX")
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

loader()