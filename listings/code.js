<HTML>

<HEAD>
    <META charset=utf-8>
    <STYLE>
        body {
            background-image: url("road.png");
            background-repeat: no-repeat;
            background-position: 200px;
        }

        #car {
            width: 270px;
            height: 270px;
            position: absolute;
            left: 200px;
            bottom: 0px;
            transition: left 500ms;
        }

        #stone {
            width: 270px;
            position: absolute;
            left: 200px;
            top: -270px;
        }

        #beep {
            width: 200px;
            position: absolute;
            right: 50px;
            top: -200px;
            transition: top 500ms;
        }
    </STYLE>
    <SCRIPT>
        window.onload = function () {
            let carLine = 0;
            let stoneLine = 0;
            window.onkeydown = function (event) {
                if (car.src.indexOf("boom.jpg") != -1) return;

                if (event.keyCode == 68 && car.style.left == "500px") {
                    car.style.left = "800px";
                    carLine = 2;
                    return;
                }

                if (event.keyCode == 68 && car.style.left == "200px") {
                    car.style.left = "500px";
                    carLine = 1;
                    return;
                }
                if (event.keyCode == 65 && car.style.left == "800px") {
                    car.style.left = "500px";
                    carLine = 1;
                    return;
                }
                if (event.keyCode == 65 && car.style.left == "500px") {
                    car.style.left = "200px";
                    carLine = 0;
                    return;
                };
            }

            function stoneMove() {
                stone.style.top = parseInt(stone.style.top) + 5 + "px";
                if (parseInt(stone.style.top) > screen.height) {
                    switch (Math.round(Math.random() * 2)) {
                        case 0:
                            stone.style.left = "200px";
                            stoneLine = 0;
                            break;
                        case 1:
                            stone.style.left = "500px";
                            stoneLine = 1;
                            break;
                        case 2:
                            stone.style.left = "800px";
                            stoneLine = 2;
                            break;
                    }
                    stone.style.top = "-270px";;
                }

                let stonePosition = parseInt(stone.style.top)

                if (stoneLine == carLine && stonePosition > (screen.height - 540)) {
                    clearInterval(idStounemove);
                    car.src = "boom.jpg";
                    stone.src = "boom.jpg";
                }
            }
            let idStounemove = setInterval(stoneMove, 10)

            function doBeep() {
                if (Math.random() > 0.9) {
                    beep.style.top = "50px";
                } else {
                    beep.style.top = "-200px";
                };
            }
            let idDoBeep = setInterval(doBeep, 1000);
        }
    </SCRIPT>

<BODY>
<IMG src="car.png" id=car style="left:200px" class="">
<IMG src="stone.png" id=stone style="left:200px; top:-270px;">
<IMG src="beep.jpg" id=beep style="">
</BODY>

</HTML>
