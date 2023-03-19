let resttime = 3000;
let flashtime = 100;
let digits = 0;

let randomtext = "0";
let typedtext = "";

let corrects = 0;


function bodyload(){

  randomtext = document.getElementById("showtext").innerHTML;
  typedtext = document.getElementById("textinput").value;

  setstuff();
}

function setstuff(){

  resttime = parseInt(document.getElementById("resttime").value)
  flashtime = parseInt(document.getElementById("flashtime").value)
  digits = parseInt(document.getElementById("digits").value)

}

function inputPress(event){

  if(event.keyCode == 13){

    typedtext = document.getElementById("textinput").value;
    document.getElementById("textinput").value = "";

    let correct = typedtext == randomtext;

    console.log(correct);

    if(correct) {

      corrects+=1;
      document.getElementById("showtext").innerHTML = `<span style="color:green">Correct - ${corrects}</span>`;

    }
    else{
      corrects = 0;
      document.getElementById("showtext").innerHTML = `<span style="color:red">${randomtext} | ${typedtext}</span>`;
    }

    console.log(resttime);

    setTimeout(() => {

      document.getElementById("showtext").innerHTML = "...";

      setTimeout(() => {

        randomtext = "";

        for(var i = 0; i < digits; i++) randomtext += Math.floor(Math.random() * 10);

        document.getElementById("showtext").innerHTML = randomtext;
        document.getElementById("textinput").disabled = true;
        
        setTimeout(() => {

          document.getElementById("showtext").innerHTML = "...";
          document.getElementById("textinput").disabled = false;

        }, flashtime)

      }, resttime / 2)




    }, resttime / 2)



  }


}
