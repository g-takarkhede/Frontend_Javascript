//Event Bubbling  - child to parent
//Event Capturing/Trickling  - parent to child
//Stop propagation
//immediate propagation
//Prevent default


document.querySelector(".grandparent").addEventListener('click', ()=>{
    console.log("grand parent")
}, false)

document.querySelector(".parent").addEventListener('click', ()=>{
    console.log("parent")
}, false)

document.querySelector(".child").addEventListener('click', (e)=>{
    console.log("child")

    e.stopPropagation();
}, false)
