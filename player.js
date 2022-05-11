class Player {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.playerImage = loadImage("/assets/biker.png");
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("blue");
      imageMode(CENTER);
      image(this.playerImage,0, 0, this.width, this.height);
      pop();
    }
  }