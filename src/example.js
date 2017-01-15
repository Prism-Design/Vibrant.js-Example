Vibrant = require('node-vibrant')

console.log('Hello Vibrant');
var palette_generation_time = new Date().getTime();

Vibrant.from('input/yosemite.png').getPalette(function(err, palette) {
  palette_generation_time = new Date().getTime() - palette_generation_time;
  console.log('Palette created: ' + palette_generation_time + ' millisecond');
});
