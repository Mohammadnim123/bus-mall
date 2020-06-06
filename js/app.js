'use strict'

var imgArr = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "tauntaun", "unicorn", "water-can", "wine-glass", "usb", "sweep"];

// ----------------random number-----------------------------------------------------------------------

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// ------------------Get ids for some tags--------------------------------------------------------------------------------------

var firstImg = document.getElementById("first");
var secondImg = document.getElementById("second");
var thairdImg = document.getElementById("thaird");
var section = document.getElementById("threeimg");

// ---------------------Constructor----------------------------------------------------------------------------------------
Item.all = [];
function Item(name) {
  this.ItemName = name;
  this.imagePath1 = `img/${name}.jpg`;
  this.imagePath2 = `img/${name}.gif`;
  this.imagePath3 = `img/${name}.png`;
  this.clicks = 0;
  this.views = 0;

  Item.all.push(this);
}

 console.log(Item.all);

// --------------------Make the objects-------------------------------------------------------------------------------

for (var i = 0; i < imgArr.length; i++) {
  new Item(imgArr[i]);
}
//console.log(Item.all);
// -----------------------view three img-------------------------------------------------------------------------
var noRepArr = [];
var firstObj, secondObj, thairdObj;
var a1,a2,a3;
function renderImg(){
if(noRepArr.length==0){
  do{
    a1 = randomNumber(0, Item.all.length - 1);
    a2 = randomNumber(0, Item.all.length - 1); 
    a3 = randomNumber(0, Item.all.length - 1);
  }while(a1 == a2 || a1 == a3 || a3 == a2 )
}
  
  function generatTreeNum(){
    while (noRepArr.includes(a1) || noRepArr.includes(a2) || noRepArr.includes(a3)){
      do{
        a1 = randomNumber(0, Item.all.length - 1);
        a2 = randomNumber(0, Item.all.length - 1); 
        a3 = randomNumber(0, Item.all.length - 1);
      }while(a1 == a2 || a1 == a3 || a3 == a2 )
    }
   
}
if(noRepArr.length>=3){
generatTreeNum()
}

 
 
 
 
 noRepArr
  noRepArr = [];
  noRepArr.push(a1 , a2 , a3);
  console.log(noRepArr);

  
  


firstObj = Item.all[a1];
  firstImg.alt = firstObj.ItemName;
  firstImg.title = firstObj.ItemName;
  firstObj.views++;
  if (a1 < 18) {
    firstImg.src = firstObj.imagePath1;
  } else if (a1 == 18) {
    firstImg.src = firstObj.imagePath2;
  } else if (a1 == 19) {
    firstImg.src = firstObj.imagePath3;
  }

  
  secondObj = Item.all[a2];
  secondImg.alt = secondObj.ItemName;
  secondImg.title = secondObj.ItemName;
  secondObj.views++;

  if (a2 < 18) {
    secondImg.src = secondObj.imagePath1;
  } else if (a2 == 18) {
    secondImg.src = secondObj.imagePath2;
  } else if (a2 == 19) {
    secondImg.src = secondObj.imagePath3;
  }

  
  thairdObj = Item.all[a3];
  thairdImg.alt = thairdObj.ItemName;
  thairdImg.title = thairdObj.ItemName;
  thairdObj.views++;

  if (a3 < 18) {
    thairdImg.src = thairdObj.imagePath1;
  } else if (a3 == 18) {
    thairdImg.src = thairdObj.imagePath2;
  } else if (a3 == 19) {
    thairdImg.src = thairdObj.imagePath3;
  }
}
renderImg();




// --------------------------view the results------------------------------------------------------------------------

function renderResults () {
  var ulList = document.getElementById('result');
  for( var i =0; i<Item.all.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${Item.all[i].ItemName} had ${Item.all[i].clicks} votes and was shown ${Item.all[i].views} times`;
    ulList.append(li);
  }
}



// ----------------event lestener to change the photos and store in local storage-------------------------------------------------------------------------------------
var totalClicks = 0;

section.addEventListener('click', handleClick);

function handleClick(event) {
 


  if (totalClicks < 6) {
    if (event.target.id === 'first' || event.target.id === 'second' || event.target.id === 'thaird') {
      totalClicks++;
      if(event.target.id === 'first') {
        firstObj.clicks++;
      }
      if(event.target.id === 'second') {
        secondObj.clicks++;
      }
      if(event.target.id === 'thaird') {
        thairdObj.clicks++;
      }
      renderImg();
      
    }
  }else if (totalClicks === 6){
    totalClicks++;
    document.getElementById('result').innerHTML = ""
    renderResults();
    

   
chartFillCilcks();


storeAtLocal()


  }
}
     
      
// -------------------------print the chart------------------------------------------------------------------------------------------


function chartFillCilcks(){
  var clicksArr = [];
var viewsArr = [];

  for (var x = 0 ; x<Item.all.length ; x++){
    clicksArr.push(Item.all[x].clicks);
    viewsArr.push(Item.all[x].views)
  } 
  console.log(clicksArr);
console.log(viewsArr);




  var canvas = document.getElementById('myChart');
  new Chart(canvas, {
    type: 'horizontalBar',
    data: {
      labels: imgArr,
      datasets: [{
        label: 'Clicks',
        yAxisID: 'A',
        data: clicksArr,
        backgroundColor: 'blue'
      }, {
        label: 'Views',
        yAxisID: 'A',
        data: viewsArr,
        backgroundColor: 'red'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          id: 'A',
          position: 'left'
        }]
      }
    }
  });
}

  // ----------------save to local storage---------------------------------------------------------------------------  

  function storeAtLocal() {
    // localStorage.clear();

    var picArray = JSON.stringify(Item.all);
    
    localStorage.setItem('picArray',picArray);
    
  }
  
// ---------------git value from local storage---------------------------------------------------------------------------

function getValuesFromLocal() {
  
  var picArray = localStorage.getItem('picArray');
  
  if(picArray) {
    Item.all = JSON.parse(picArray);
    
    chartFillCilcks();
    renderResults ();
  }
}

getValuesFromLocal()    
      






















  













