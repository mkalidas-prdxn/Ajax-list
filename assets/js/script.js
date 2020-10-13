//Declarations
var cta = document.getElementById("jasonFile");
var btn = document.getElementById("btn");
var info = document.getElementById("info")
var flag = 0;  //To keep track of jason file
var flag2 = 0;
var htmlPara = "";
var ourData;

//Fetch Jason file
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
ourRequest.onload = function() { ourData = JSON.parse(ourRequest.responseText);};
ourRequest.onerror = function() { console.log("Connection error");};
ourRequest.send();

//Display initial 6 items and load button
cta.addEventListener("click", function() { htmlInitialData(ourData); });

function htmlInitialData(ourData){
  //Flag is set to 0 so as to display only once
  if(flag2 == 0){
    for(i = 0; i<6; i++){
      if(flag<= ourData.length){
      htmlPara += "<div><p> Title no "+ (flag+1)  +": " + ourData[flag].title +"</p>" 
      htmlPara += "<p> Description : " + ourData[flag].body +"</p></div>" 
    }
    flag++;
    }
    info.insertAdjacentHTML('beforeend', htmlPara);
    htmlPara = "";
    btn.className="display";
    flag2 = 1;
  }
}

//Display 6 items at a time when clicked on load
btn.addEventListener("click", function(){ htmlData(ourData); })

function htmlData(data){
  for(i = 0; i<6; i++){
    if(flag< data.length){
    htmlPara += "<div><p> Title no "+ (flag+1) +": " + data[flag].title +"</p>" 
    htmlPara += "<p> Description : " + data[flag].body +"</p></div>" 
  }else{
    btn.className="displayNone";
    break;
  }
  flag++;
  }
  info.insertAdjacentHTML('beforeend', htmlPara);
  htmlPara = "";
}























