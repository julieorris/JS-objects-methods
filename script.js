const cat = {
  name: "Linus",
  nickname: "ya-ya",
  age: 12,
  isSleeping: true,
  favoriteToys: ["rubberband", "puzzle pieces", "strings", "balls"],
  pet: function () {
    return "purrrrrrrr";
  },
  play: function () {
    this.isSleeping = false;
    return `${this.nickname} is awake and playing!`;
  }
};

console.log(cat.play());
