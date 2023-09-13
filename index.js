var i = 0;
        var txt = 'Reynier Apurillo'
        var speed = 220
        var isReversing = false;
        var delayBeforeReverse = 5000

        typeWriter();

        function typeWriter() {
            if (!isReversing) {
                if (i < txt.length) {
                    document.getElementById("myName").innerHTML += txt.charAt(i);
                    i++;
                } else {
                    isReversing = true;
                    setTimeout(() => {
                        isReversing = false;
                        i--;
                    }, delayBeforeReverse);
                }
            } else {
                if (i >= 0) {
                    document.getElementById("myName").innerHTML = txt.substring(0, i);
                    i--;
                } else {
                    i = 0;
                }
            }
            setTimeout(typeWriter, speed);
        }

document.getElementById('home-btn').addEventListener('click', (e) => {
    document.getElementById('home-content').style.display = `grid`
    document.getElementById('abt-content').style.display = `none`
    document.getElementById('fam-content').style.display = `none`
    document.getElementById('info-content').style.display = `none`
    document.getElementById('home-btn').style.color = `rgb(255, 255, 255)`
    document.getElementById('home-btn').style.fontSize = `1.4vw`
    document.getElementById('abt-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('abt-btn').style.fontSize = `1.2vw`
    document.getElementById('fam-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('fam-btn').style.fontSize = `1.2vw`
    document.getElementById('im-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('im-btn').style.fontSize = `1.2vw`
})
document.getElementById('abt-btn').addEventListener('click', (e) => {
    document.getElementById('home-content').style.display = `none`
    document.getElementById('abt-content').style.display = `grid`
    document.getElementById('fam-content').style.display = `none`
    document.getElementById('info-content').style.display = `none`
    document.getElementById('home-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('home-btn').style.fontSize = `1.2vw`
    document.getElementById('abt-btn').style.color = `rgb(255, 255, 255)`
    document.getElementById('abt-btn').style.fontSize = `1.4vw`
    document.getElementById('fam-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('fam-btn').style.fontSize = `1.2vw`
    document.getElementById('im-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('im-btn').style.fontSize = `1.2vw`
})
document.getElementById('fam-btn').addEventListener('click', (e) => {
    document.getElementById('home-content').style.display = `none`
    document.getElementById('abt-content').style.display = `none`
    document.getElementById('fam-content').style.display = `block`
    document.getElementById('info-content').style.display = `none`
    document.getElementById('home-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('home-btn').style.fontSize = `1.2vw`
    document.getElementById('abt-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('abt-btn').style.fontSize = `1.2vw`
    document.getElementById('fam-btn').style.color = `rgb(255, 255, 255)`
    document.getElementById('fam-btn').style.fontSize = `1.4vw`
    document.getElementById('im-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('im-btn').style.fontSize = `1.2vw`
})
document.getElementById('im-btn').addEventListener('click', (e) => {
    document.getElementById('home-content').style.display = `none`
    document.getElementById('abt-content').style.display = `none`
    document.getElementById('fam-content').style.display = `none`
    document.getElementById('info-content').style.display = `block`
    document.getElementById('home-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('home-btn').style.fontSize = `1.2vw`
    document.getElementById('abt-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('abt-btn').style.fontSize = `1.2vw`
    document.getElementById('fam-btn').style.color = `rgb(167, 167, 167)`
    document.getElementById('fam-btn').style.fontSize = `1.2vw`
    document.getElementById('im-btn').style.color = `rgb(255, 255, 255)`
    document.getElementById('im-btn').style.fontSize = `1.4vw`
})
