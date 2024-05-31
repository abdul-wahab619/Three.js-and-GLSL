class PrintBubbles {
  constructor(parent, number) {
    this.parent = parent;
    this.number = number;
  }
  addBubble() {
    for (var i = 1; i <= this.number; i++) {
      var bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.textContent = 66;
      document.querySelector(this.parent).appendChild(bubble);
    }
  }
}

let bubbles = new PrintBubbles(".app", 8);
bubbles.addBubble();
