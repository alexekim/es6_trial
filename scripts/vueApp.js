var app = new Vue({
  el: "#app",
  data: {
    name: "Alex Kim",
    emojis: [
      {
        id: 1,
        name: "nerd",
        src: "assets/nerd.png"
      },
      {
        id: 2,
        name: "sunglasses",
        src: "assets/sunglasses.png"
      }
    ]
  },
  methods :{
    changeEmoji: ()=>{
      document.getElementById("headerEmoji").src = app.emojis[1].src;
    },
    restoreEmoji: ()=>{
      document.getElementById("headerEmoji").src = app.emojis[0].src;
    }
  }
})
