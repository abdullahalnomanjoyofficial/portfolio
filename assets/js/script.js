const text =
"Political Activist • Student Leader • AI Visionary";
let i = 0;
function typing(){
    if(i < text.length){
        document.getElementById("typing-text")
        .innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,60);
    }
}
typing();
window.addEventListener("scroll", () => {
    const navbar =
    document.querySelector(".navbar");
    if(window.scrollY > 50){
        navbar.style.background =
        "rgba(0,0,0,0.9)";
    }
    else{
        navbar.style.background =
        "rgba(0,0,0,0.45)";
    }
});