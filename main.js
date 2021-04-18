setInterval(function(){
    const randomColor = Math.floor(Math.random()*16777215);
    //console.log(randomColor);
    if (randomColor > 4010831) {
        const rainbowtext = document.querySelectorAll(".rainbow") //.style.color = "#" + randomColor;
        for (var i = 0; i < rainbowtext.length; i++) {
            rainbowtext[i].style.color = "#" + randomColor.toString(16);
        }
    }
}, 800);
