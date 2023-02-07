var icon=document.getElementById("mode");
function mode(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode"))
    {
         icon.src="img/sun.png";
    }else
    {
        icon.src="img/moon.png";
    }

    document.getElementById('nav').classList.toggle('ds');    // making nav bar diffrent color
}



document.getElementById("home").onclick=function(){
    location.href="../protfolio/index.html ";
};

document.getElementById("about").onclick=function(){
    location.href="../protfolio/index.html ";
};

document.getElementById("calclu").onclick=function(){
    
   
    location.href="Calculator/calculator.html";
};

document.getElementById("search").onclick=function(){
    location.replace("../protfolio/search.html");
  
};

document.getElementById("portfolio").onclick=function(){
    location.href="../protfolio/index.html";
};

document.getElementById("Count_word").onclick=function(){
    location.href="../protfolio/count_word.html";
}

document.getElementById("DJ").onclick=function(){
    location.href="../protfolio/dj.html";
};


// calculator
let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screeValue= '';
for(item of buttons){
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;
        if(buttonText=='X')
        {
            buttonText='*';
            screeValue += buttonText;
            screen.value =screeValue;
        }
        else if(buttonText=='C')
        {
            screeValue =" ";
            screen.value =screeValue;
        }
        else if(buttonText== '=')
        {
            screen.value=eval(screeValue);
        }
        else{
            screeValue += buttonText;
            screen.value = screeValue;
        }

    })
}


// searching 

function linear(){
    var start=new Date().getTime();
    var num=document.getElementById("item").value;
  var values= document.getElementById("value").value;
//   console.log(values.split(" "));
  var input=values.split(" ");    // split() which convert string into array. 

  for(let i=0;i<input.length;i++)
  {
      if(input[i]==num)
      {
       var result="Index is: "+(i);
       document.getElementById("output").value=result;
       break;
      }
  }
  if(!result)
  {
  document.getElementById("output").value="Index is:-1";
  alert("Not found");
  }

  var end=new Date().getTime();
  var timeconsume=end-start;
      
}




// world counting
function count(){
var text=document.getElementById("count_text").value;
var count= text.split(" ");
var count1= text.split("");  // it convert senetences into array
var length=count.length;
var length1=count1.length;
document.getElementById("result").value="Total words are: "+length;
document.getElementById("result1").value="Total letters are: "+length1;
}



// DJ

window.addEventListener('keydown',function(e)
{
console.log(e);
});
