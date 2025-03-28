// var btn = document.querySelector('button')
// var progress = document.getElementById('progress')
// var change = document.getElementById('percent')

// let val = 0
// let rand = Math.floor(Math.random()*100)
// console.log(rand);
// btn.addEventListener('click' , function(){
//     var bar = setInterval(function(){
//         val++
//         change.innerHTML = val + "%"
//         progress.style.width = val + '%'
//     }, rand);
//     setTimeout(function(){
//         clearInterval(bar)
//         btn.innerHTML = "Downloaded"
//         btn.style.opacity = 0.5
        
//     }, rand*100);
    
// })



document.addEventListener("DOMContentLoaded", () => {
    let progressBar = document.getElementById("progress");
    let progressText = document.getElementById("progress-text");
    let downloadBtn = document.getElementById("download-btn");
    let rand = Math.floor(Math.random()*200)
    console.log(rand);
    let progress = 0;
    let interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            downloadBtn.innerText = "Downloaded";
            downloadBtn.disabled = false;
        }
    }, rand*5);
});
