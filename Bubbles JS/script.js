document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';
    let backgroundcolor = 'black' ;

    class Circle{
        constructor(event){
            this.radius = Math.floor(Math.random() *191 + 10);
            this.left = event.clientX - parseInt(this.radius / 2 ) + 'px';
            this.top = event.clientY - parseInt(this.radius / 2 ) + 'px';
        }

        styles() {
            return `<div id= 'container' style=' 
            position:${position};
            top:${this.top};
            left:${this.left}; 
            width:${this.radius}px;
            height:${this.radius}px;
            border-radius:${this.radius}px;
            background-color:${backgroundcolor}'>
            </div>`;
        }
    }
    document.addEventListener('click', function(event) {
        if(!event.target.classList.contains('button')){
           const circle = new Circle(event);
           document.getElementById('container').innerHTML += circle.styles();
        }
    });

    
    document.getElementById('red').addEventListener('click',function(event){
        backgroundcolor = 'red';
        this.style.outline = "5px solid black";
        document.getElementById('yellow').style.outline = 'none';
        document.getElementById('blue').style.outline = 'none';
        document.getElementById('reset').style.outline = 'none';
        
    })
    document.getElementById('yellow').addEventListener('click',function(event){
        backgroundcolor = 'yellow';
        this.style.outline = "5px solid black";
        document.getElementById('red').style.outline = 'none';
        document.getElementById('blue').style.outline = 'none';
        document.getElementById('reset').style.outline = 'none';
        
    })
    document.getElementById('blue').addEventListener('click',function(event){
        backgroundcolor = 'blue';
        this.style.outline = "5px solid black";
        document.getElementById('yellow').style.outline = 'none';
        document.getElementById('red').style.outline = 'none';
        document.getElementById('reset').style.outline = 'none';
        
    })
    document.getElementById('reset').addEventListener('click',function(event){
        document.getElementById('container').innerHTML ='';
        this.style.outline = "5px solid black";
        document.getElementById('yellow').style.outline = 'none';
        document.getElementById('blue').style.outline = 'none';
        document.getElementById('red').style.outline = 'none';
        
    });

    const fade = () =>{
        const circles =document.getElementById('container').children;
        for(const circle of circles){
            let height = parseInt(circle.style.height);
            if (height <=0) {
                circle.remove();
            }
            height --;
            const width = height;
            circle.style.height = `${height}px`;
            circle.style.width = `${width}px`;
        }
    };
    window.setInterval(fade, 100);
})