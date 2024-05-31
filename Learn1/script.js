class PrintBubbles {
  constructor(parent, number) {
    this.parent = parent;
    this.number = number;
  }
  addBubble() {
    console.log(this);
  }
}

let bubbles = new PrintBubbles(".app", 44);
bubbles.addBubble();
