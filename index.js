// alert("Ok");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", ()=>{
 notification();
});

function notification(){
    let notify = document.createElement('div');
    notify.classList.add('toast');
    notify.innerText ="Here we 4U :)";
    container.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },3000);
}