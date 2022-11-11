function hidekoensite() {
    
}
var notepadopen = 0
var koensiteopen = 1
var moreopen = 0


function more() {
    document.getElementById("koensite").style.visibility = "hidden";
    document.getElementById("page").style.backgroundImage = "none";
    document.getElementById("more").style.visibility = "visible";
    document.getElementById("morebutton").classList.remove('border-slate-800')
    document.getElementById("morebutton").classList.add('border-slate-600')
    document.getElementById("morebutton").classList.add('bg-slate-800')
    document.getElementById("koenbutton").classList.add('border-slate-800')
    document.getElementById("koenbutton").classList.remove('border-slate-600')
    document.getElementById("koenbutton").classList.remove('bg-slate-800')
    koensiteopen = 0
    moreopen = 1
}  
function koen() {
    document.getElementById("more").style.visibility = "hidden";
    document.getElementById("koensite").style.visibility = "visible";
    document.getElementById("page").style.backgroundImage = "url('img/koen/bg.jpg')";
    document.getElementById("koenbutton").classList.remove('border-slate-800')
    document.getElementById("koenbutton").classList.add('border-slate-600')
    document.getElementById("koenbutton").classList.add('bg-slate-800')
    document.getElementById("morebutton").classList.add('border-slate-800')
    document.getElementById("morebutton").classList.remove('border-slate-600')
    document.getElementById("morebutton").classList.remove('bg-slate-800')
    return console.log("Switched tab to Koen's website")

}    

async function notepad() {
    document.getElementById("notepadpage").style.visibility = "visible";
    document.getElementById("notepadpage").classList.remove('hidden')
    document.getElementById("koenbutton").classList.add('hidden')
    document.getElementById("morebutton").classList.add('hidden')
    document.getElementById("koensite").style.visibility = "hidden";
    document.getElementById("page").style.backgroundImage = "none";
    document.getElementById("statusbar").classList.remove('from-slate-900')  
    document.getElementById("statusbar").classList.remove('to-slate-800')
    document.getElementById("statusbar").classList.add('from-yellow-400')  
    document.getElementById("statusbar").classList.add('to-yellow-500') 
    document.getElementById("more").style.visibility = "hidden";
    document.getElementById("notepadpage").classList.remove('duration-500')
    notepadopen = 1

 
    
}



async function browser() {
    document.getElementById("koenbutton").classList.add('border-slate-600')
    document.getElementById("koenbutton").classList.add('bg-slate-800')
    document.getElementById("morebutton").classList.add('border-slate-800')
    document.getElementById("morebutton").classList.remove('border-slate-600')
    document.getElementById("morebutton").classList.remove('bg-slate-800')
    document.getElementById("notepadpage").style.visibility = "hidden";
    document.getElementById("more").style.visibility = "hidden";
    document.getElementById("koensite").style.visibility = "visible";
    document.getElementById("koenbutton").classList.remove('hidden')
    document.getElementById("morebutton").classList.remove('hidden')
    document.getElementById("koensite").style.visibility = "visible";
    document.getElementById("page").style.backgroundImage = "url('img/koen/bg.jpg')";
    document.getElementById("statusbar").classList.add('from-slate-900')  
    document.getElementById("statusbar").classList.add('to-slate-800')
    document.getElementById("statusbar").classList.remove('from-yellow-400')  
    document.getElementById("statusbar").classList.remove('to-yellow-500') 
    await sleepNow(500)
    document.getElementById("notepadpage").classList.remove('duration-500')
    notepadopen = 1
}