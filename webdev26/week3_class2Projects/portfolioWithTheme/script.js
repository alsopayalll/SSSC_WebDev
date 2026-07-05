let theme = document.getElementById("theme");

theme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(theme.innerHTML=="🔆"){
        theme.innerHTML="🌙";
    }
    else theme.innerHTML="🔆";
});