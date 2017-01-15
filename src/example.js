Vibrant = require('node-vibrant')

console.log('Hello Vibrant');
var palette_generation_time = new Date().getTime();

Vibrant.from('input/yosemite.png').getPalette(function(err, palette) {
  palette_generation_time = new Date().getTime() - palette_generation_time;
  console.log('Palette created: ' + palette_generation_time + ' millisecond');
});

var image_read_time = new Date().getTime();
var image = new CanvasImage('input/yosemite.png');
image_read_time = new Date().getTime() - image_read_time;
console.log('Image read: ' + image_read_time + ' millisecond');
