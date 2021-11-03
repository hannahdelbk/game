var number = 0;
var color_only = 0;
var color_and_position = 0;
const colors = [-1,-1,-1,-1];
const selection = [-1,-1,-1,-1];
var attempt = 0;
const palette = ["green", "blue","red", "yellow","purple","grey","brown","black"]
var add = -1


function StartGame(){
  location.reload()
}

function select_comb(x) {
  number = number +1
  document.querySelector(".whitedot"+number).style.backgroundColor = palette[x-1];
  selection[number-1]=x-1
}

function Check(){
  for (let i = 0; i < 4; i++) {
    if(selection[i] == colors[i]){
      color_and_position = 1 + color_and_position
    }else if(selection.includes(colors[i])){
      color_only = 1+ color_only
    }
  }
}

function play(){
  
  if(attempt == 0){
    colors[0] = Math.floor(Math.random() * 8)
    for (let i = 1; i < 4; i++) {
      add = Math.floor(Math.random() * 8)
      while(colors.includes(add)){
        add = Math.floor(Math.random() * 8)
      } 
      colors[i] = add
    }
  }
  Check()

  if(attempt == 9){
    document.getElementById("demo3").innerHTML = "YOU LOST..."
  
  }else if(color_and_position != 4){
    attempt = attempt + 1

    for (let i = 0; i < 4; i++) {
      document.querySelector(".dot"+attempt+i).style.backgroundColor = palette[selection[i]];
      document.querySelector(".whitedot"+(i+1)).style.backgroundColor = "rgb(250, 250, 250)";
    }
    document.getElementById("demo"+attempt+"0").innerHTML = "Correct color only: "+color_only+". Correct color and position: "+color_and_position

    number =0;
    color_only = 0;
    color_and_position = 0;
    selection = [-1,-1,-1,-1];

    
  }else{
    document.getElementById("demo3").innerHTML = "YOU WON!!!!!"
  }

}