$(document).ready(function () {
    //easeO
    var rect = document.getElementsByClassName('rect')[0];
    var cir = document.getElementsByClassName('cir')[0];
    var tri1 = document.getElementsByClassName('tri1')[0];
    var tri2 = document.getElementsByClassName('tri2')[0];
    var text = document.getElementsByClassName('text')[0];
    //easeI
    var question = document.getElementsByClassName('question')[0];
    var done = document.getElementsByClassName('done')[0];
    var btn = document.getElementsByClassName('btn');
    var Qq = document.getElementsByClassName('wrap')[0];
    var Qq2 = document.getElementsByClassName('wrap2')[0];
    var Qq3 = document.getElementsByClassName('wrap3')[0];
    var wrap2p = document.getElementsByClassName('wrap2p')[0];
    var wrap3p = document.getElementsByClassName('wrap3p')[0];
    var wrap2btn1 = document.getElementById('wrap2btn1');
    var wrap2btn2 = document.getElementById('wrap2btn2');
    var wrap2btn3 = document.getElementById('wrap2btn3');
    var wrap3btn1 = document.getElementById('wrap3btn1');
    var wrap3btn2 = document.getElementById('wrap3btn2');
    var wrap3btn3 = document.getElementById('wrap3btn3');
    var tag = document.getElementsByClassName('tag')[0];

    var don = document.getElementsByClassName('don')[0];
    var rect1 = document.getElementsByClassName('rect')[1];
    var cir1 = document.getElementsByClassName('cir')[1];
    var tri11 = document.getElementsByClassName('tri1')[1];
    var timer;
    var k = 0;
    var j = 0;
    easeO();

    function Q0Q1() {
        for (i = 0; i < 3; i++) {
            btn[i].onmousedown = function () {
                clearInterval(timer);
                Qq.style.opacity = "0";
                rect1.style.display = "none";
                cir1.style.display = "none";
                tri11.style.display = "none";
                setTimeout(function () {
                    //question.style.width="100%";
                    Qq.style.transform = "translateX(-1000px)";
                    done.style.transform = "translateX(0)";
                    setTimeout(function () {
                        Q1Q2();
                    }, 1000)
                }, 500)
            }
        }
    }

    function Q1Q2() {
        rect1.style.background = "#1469FF";
        done.style.background = "#FF3C82";
        question.style.background = "#0027C8";
        wrap2p.style.color = "#1469FF";
        tri11.style.transform = "rotate(30deg)";
        tri11.style.transform = "translateX(-100px)";
        tri11.style.transform = "translateY(-300px)";
        tri11.style.transform = "scale(2)";
        setTimeout(function () {
            question.style.opacity = "1";
            done.style.transform = "translateX(60%)";
            Qq2.style.transform = "translateY(-900px)";
            rect1.style.display = "block";
            cir1.style.display = "block";
            tri11.style.display = "block";
            setTimeout(function () {
                rect1.style.opacity = "1";
                cir1.style.opacity = "1";
                tri11.style.opacity = "1";
                rect1.style.transform = "translate(0)";
                cir1.style.transform = "translate(0)";
                setTimeout(function () {
                    rect1.style.transition = "all 0.01s";
                    cir1.style.transition = "all 0.01s";
                    tri11.style.transition = "all 0.01s";
                    Q2Q3();
                    timer = setInterval(function () {
                        k += 2;
                        rect1.style.transform = "rotate(" + k + "deg)";
                        tri11.style.transform = "rotate(-" + k + "deg)";
                        if (k == 360) {
                            k = 0;
                        }
                    }, 30)
                }, 4000)
            }, 500)
        }, 1000)
    }

    function Q2Q3() {
        Qq2.style.opacity = "0";
        rect1.style.background = "#0027C8";
        done.style.background = "#1469FF";
        question.style.background = "#FF3C82";
        wrap3p.style.color = "#000000";
        setTimeout(function () {
            question.style.opacity = "1";
            done.style.transform = "translateX(60%)";
            Qq3.style.transform = "translateY(-1850px)";
            tri11.style.transform = "rotate(30deg)";
            tri11.style.transform = "translateX(-100px)";
            tri11.style.transform = "translateY(-300px)";
            tri11.style.transform = "scale(2)";
            rect1.style.display = "block";
            cir1.style.display = "block";
            tri11.style.display = "block";
            setTimeout(function () {
                rect1.style.opacity = "1";
                cir1.style.opacity = "1";
                tri11.style.opacity = "1";
                rect1.style.transform = "translate(0)";
                cir1.style.transform = "translate(0)";
                setTimeout(function () {
                    rect1.style.transition = "all 0.01s";
                    cir1.style.transition = "all 0.01s";
                    tri11.style.transition = "all 0.01s";
                    Q3Q4();
                    timer = setInterval(function () {
                        k += 2;
                        rect1.style.transform = "rotate(" + k + "deg)";
                        tri11.style.transform = "rotate(-" + k + "deg)";
                        if (k == 360) {
                            k = 0;
                        }
                    }, 30)
                }, 4000)
            }, 500)
        }, 1000)
    }

    function Q3Q4() {
        Qq3.style.opacity = "0";
        rect1.style.background = "#0027C8";
        done.style.background = "#0027C8";
        question.style.background = "#0027C8";
        don.style.color = "#ffffff";
        don.style.display = "block";
        don.style.opacity = "1";
        question.style.opacity = "1";
        setTimeout(function () {
            done.style.transform = "translateX(60%)";
            done.style.transform = "translateY(-1850px)";
            rect1.style.display = "none";
            cir1.style.display = "none";
            tri11.style.display = "none";
            setTimeout(function () {
                rect1.style.opacity = "0";
                cir1.style.opacity = "0";
                tri11.style.opacity = "0";
                rect1.style.transform = "translate(0)";
                cir1.style.transform = "translate(0)";
                setTimeout(function () {
                    rect1.style.transition = "all 0.01s";
                    cir1.style.transition = "all 0.01s";
                    tri11.style.transition = "all 0.01s";
                    timer = setInterval(function () {
                        k += 2;
                        rect1.style.transform = "rotate(" + k + "deg)";
                        tri11.style.transform = "rotate(-" + k + "deg)";
                        if (k == 360) {
                            k = 0;
                        }
                    }, 30)
                }, 4000)
            }, 500)
        }, 1000)
    }

    function easeI() {
        setTimeout(function () {
            question.style.opacity = "1";
            done.style.transform = "translateX(60%)";
            setTimeout(function () {
                rect1.style.transform = "translate(0)";
                cir1.style.transform = "translate(0)";
                tri11.style.transform = "translate(0)";
                setTimeout(function () {
                    rect1.style.transition = "all 0.01s";
                    cir1.style.transition = "all 0.01s";
                    tri11.style.transition = "all 0.01s";
                    Q0Q1();
                    timer = setInterval(function () {
                        k += 2;
                        rect1.style.transform = "rotate(" + k + "deg)";
                        tri11.style.transform = "rotate(-" + k + "deg)";
                        if (k == 360) {
                            k = 0;
                        }
                    }, 30);
                }, 4000);
            }, 500);
        }, 1000);
    }

    function easeO() {
        setTimeout(function () {
            rect.style.transform = "rotate(-360deg)";
            cir.style.transform = "scale(1.2) ";
            tri1.style.transform = "rotate(360deg)";
            tri2.style.transform = "rotate(360deg)";
            setTimeout(function () {
                rect.style.transform = "rotate(-360deg)";
                cir.style.transform = "scale(.95) ";
                tri1.style.transform = "rotate(360deg)";
                tri2.style.transform = "rotate(360deg)";
                setTimeout(function () {
                    rect.style.transition = "all .5s";
                    rect.style.transform = "scale(10)";
                    setTimeout(function () {
                        cir.style.transition = "all .5s";
                        cir.style.transform = "scale(10)";
                        setTimeout(function () {
                            tri1.style.transition = "all .5s";
                            tri2.style.transition = "all .5s";
                            tri1.style.transform = "scale(10)";
                            tri2.style.transform = "scale(10)";
                            setTimeout(function () {
                                rect.style.transition = "all 1s";
                                cir.style.transition = "all 1s";
                                tri1.style.transition = "all 1s";
                                tri2.style.transition = "all 1s";

                                //tri1.style.borderTop=" 280px solid #1469FF "
                                //tri2.style.borderTop=" 280px solid #1469FF "
                                rect.style.opacity = "0";
                                cir.style.opacity = "0";
                                tri1.style.opacity = "0";
                                tri2.style.opacity = "0";
                                text.style.opacity = "0";
                                easeI();
                            }, 250)
                        }, 250)
                    }, 250)
                }, 2000)
            }, 2000)
        }, 1000)
    }
})
