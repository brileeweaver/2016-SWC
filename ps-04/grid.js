var canvas = document.getElementById('myGrid');
var drawingPad = canvas.getContext('2d');


   drawingPad.fillStyle = "hsla(0,10%,10%,1)";
   drawingPad.fillRect(0, 0, 20, 20);

   var getColor = function(hue, saturation, lightness, alpha) {
     var colorString = "hsla(" +
       hue + ", "
       + saturation + "%,"
       + lightness  + "%,"
       + alpha + ")";
     return colorString;
   };

   var drawSquare = function(x,y,size) {
     drawingPad.fillRect(x * size, y * size, size , size);
     drawingPad.strokeStyle = getColor(0, 0, 100, 0.3);
     drawingPad.strokeRect(x * size, y * size, size, size);
   }

   var size = 50;
   var numX = 10;
   var numY = 10;
   var randomLightness = 0;

   for(var x = 0 ; x < numX; x++) {
     for(var y = 0 ; y < numY; y++) {
       randomLightness = Math.random() * 100;
       drawingPad.fillStyle = getColor(0, 0, randomLightness, 0.5);
       drawSquare(x,y,size);
     }
   }