// World constants
let grid = {
  size: 8,
  width: 20,
  height: 18,
  scale: 5
} 

let palette = [
  ex.Color.fromHex("#cecead"), 
  ex.Color.fromHex("#a5a58c"), 
  ex.Color.fromHex("#6b6b52"),
  ex.Color.fromHex("#292919")];

// Create engine instance
let game = new ex.Engine({
  width: grid.size * grid.width * grid.scale,
  height: grid.size * grid.height * grid.scale
});

game.backgroundColor = palette[3];



// Start the engine
game.start();