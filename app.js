let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;


var c = canvas.getContext('2d');



// Draw The Circle
   //c.beginPath();
//c.arc(80, 70, 30, 0, Math.PI * 2, false);
//c.strokeStyle ='green';
//c.stroke();


//Multiply the Circle
//for (var i = 0; i < 10; i++) {
  //  var x = Math.random() * canvas.width;
  //  var y = Math.random() * canvas.height;
//c.beginPath();
//c.arc(x, y, 30, 0, Math.PI * 2, false);
//c.strokeStyle ='green';
//c.stroke();


colorArray = ["black", "blue", "gray", "lightblue"];


function Circle(x,y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();    
    
    }
    
    this.update = function() {
    
    if (this.x + this.radius > canvas.width || this.x - radius < 0) {
    this.dx = -this.dx
    }
    
    if (this.y + this.radius > canvas.height || this.y - radius < 0) {
    this.dy = -this.dy;
    }
    
    this.x += this.dx;
    this.y += this.dy;
    
        
        this.draw();
        
     }
    
    
}






var circleArray = [];

for (var i = 0; i < 200;i++) {
     var radius = 2;
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() - 0.5) ;
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy,               radius));  
}

console.log(circleArray);

//Animate The CIrcle
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);  
    
    for (var i = 0; i < circleArray.length; i++) {
    
        circleArray[i].update();
        
    }
    
}

animate();