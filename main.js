class Balloon{
    constructor(){

        this.balloons = document.querySelectorAll("body div");
        console.log(this.balloons);
        this.wrapper = document.querySelector(".wrapper")
        this.startButton = document.querySelector(".button h1");
        this.stopButton = document.querySelector(".button h2");
        this.returnBalloons = document.querySelector(".button h3");
        this.imgs = document.querySelectorAll(".balloon img");
        this.stop;
        
        this.startButton.addEventListener("click", ()=>{
            this.move();
        })
        this.stopButton.addEventListener("click",()=>{
            clearTimeout(this.stop);
        })
        this.returnBalloons.addEventListener("click", ()=>{
            for(const img of this.imgs){
                img.classList.remove("gone");
            }
        })

        this.wrapper.addEventListener("click", (e)=>{
            console.log(e.target);
            if(e.target !== this.startButton && e.target !== this.stopButton && e.target !== this.returnBalloons && e.target !== this.wrapper){
                e.target.classList.add("gone");
            }
        })

    }

     getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
    }
        
        move() {
            
            for(let i = 0; i<31; i++){
                
                let stepTop = this.getRandomIntInclusive(-100, 1000);
                let stepRight = this.getRandomIntInclusive(-200, 1000);
                console.log(stepTop);
                console.log(stepRight);
                this.balloons[i].style.top = stepTop + "px";
                this.balloons[i].style.right = stepRight + "px";

            }
            this.stop = setTimeout(this.move.bind(this), 3500);
    }
    
}
let balloonBalloon = new Balloon;