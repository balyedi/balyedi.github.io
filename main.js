/*setInterval(function(){
    const randomColor = Math.floor(Math.random()*16777215);
    //console.log(randomColor);
    if (randomColor > 4010831) {
        const rainbowtext = document.querySelectorAll(".rainbow") //.style.color = "#" + randomColor;
        for (var i = 0; i < rainbowtext.length; i++) {
            rainbowtext[i].style.color = "#" + randomColor.toString(16);
        }
    }
}, 800);*/
function hslToRgb(h, s, l) { var r, g, b; if (s == 0) { r = g = b = l; } else { var hue2rgb = function hue2rgb(p, q, t) { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; }; var q = l < 0.5 ? l * (1 + s) : l + s - l * s; var p = 2 * l - q; r = hue2rgb(p, q, h + 1 / 3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1 / 3); } return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];}
var i; i = 0;

setInterval(() => {
    const rainbowtext = document.querySelectorAll(".rainbow")
     for (var forloop = 0; forloop < rainbowtext.length; forloop++) {
          rainbowtext[i].style.color = `rgb(${hslToRgb(i, 1, 0.5)[0]},${hslToRgb(i, 1, 0.5)[1]},${hslToRgb(i, 1, 0.5)[2]})`
     }
    //document.getElementById('RainbowText').style.color = `rgb(${hslToRgb(i, 1, 0.5)[0]},${hslToRgb(i, 1, 0.5)[1]},${hslToRgb(i, 1, 0.5)[2]})`
    i += 0.001
    if (i >= 1.000) {
        i = 0.000
    }
}, 8)
