        //var esphere_Color;

        const body = document.querySelector("body");
        const crearNieve = () => {
            let copo = document.createElement("i");
            let x = innerWidth * Math.random();
            let size = (Math.random() * 8)+2;
            let z = Math.round(Math.random())* 100;
            let delay = Math.random() * 5;
            let anima = (Math.random() * 10) + 5;

            copo.style.left = x + 'px';
            copo.style.width = size + 'px';
            copo.style.height = size + 'px';
            copo.style.zIndex = z;
            copo.style.animationDelay = delay + 's';
            copo.style.animationDuration = anima + 's';

            body.appendChild(copo);

            setTimeout(() => {
                copo.remove();
            }, anima * 1000)
        }

        setInterval(crearNieve, 50);


        //var isRandom = false;
        var intervalId;

        function changeColor(esphere_Color, isRandom) {
            var circles = document.querySelectorAll(".circle");

            if(isRandom){
                esphere_Color = getRandomColor();
            }

            circles.forEach(function(circle) {
                circle.style.backgroundColor = esphere_Color;
            });

            if(audio.paused){
                playsound();
            }

        }

        function playsound(){
            audio.play();
        }

        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";

            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            return color;
        }

        function changeColorRandom() {
            clearInterval(intervalId);
            intervalId = setInterval(function() {
                changeColor(null, true);
            }, 1000);
        }

        function stopChangingColor() {
            clearInterval(intervalId);
        }

        function changeColorAndStop(color){
            changeColor(color, false);
            stopChangingColor();
        }



