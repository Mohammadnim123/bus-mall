'use strict'

var imgArr = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "tauntaun", "unicorn", "water-can", "wine-glass", "usb", "sweep"];
var clicksArr = [];
var viewsArr = [];
// ---------------------------------------------------------------------------------------

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// --------------------------------------------------------------------------------------------------------

var firstImg = document.getElementById("first");
var secondImg = document.getElementById("second");
var thairdImg = document.getElementById("thaird");
var section = document.getElementById("threeimg");

// -------------------------------------------------------------------------------------------------------------
function Item(name) {
  this.ItemName = name;
  this.imagePath1 = `img/${name}.jpg`;
  this.imagePath2 = `img/${name}.gif`;
  this.imagePath3 = `img/${name}.png`;
  this.clicks = 0;
  this.views = 0;

  Item.all.push(this);
}
Item.all = [];
 console.log(Item.all);

// ---------------------------------------------------------------------------------------------------

for (var i = 0; i < imgArr.length; i++) {
  new Item(imgArr[i]);
}
//console.log(Item.all);
// ------------------------------------------------------------------------------------------------

var firstObj, secondObj, thairdObj;
var a1,a2,a3;
function renderImg(){

 
  do{
a1 = randomNumber(0, Item.all.length - 1);
a2 = randomNumber(0, Item.all.length - 1); 
a3 = randomNumber(0, Item.all.length - 1);
  }while(a1 == a2 || a1 == a3 || a3 == a2 );
  
  
  
  


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

// function photosfill(numImg, numObj) {

//   var a1 = randomNumber(0, Item.all.length - 1);
//   numObj = Item.all[a1];
//   numImg.alt = numObj.ItemName;
//   numImg.title = numObj.ItemName;
//   if (a1 < 18) {
//     numImg.src = numObj.imagePath1;
//   } else if (a1 == 18) {
//     numImg.src = numObj.imagePath2;
//   } else if (a1 == 19) {
//     numImg.src = numObj.imagePath3;
//   }
// }
//photosfill(firstImg, firstObj);
//photosfill(secondImg, secondObj);
//photosfill(thairdImg, thairdObj);

// console.log(firstObj);
// console.log(secondObj);
// console.log(thairdObj);


// --------------------------------------------------------------------------------------------------

function renderResults () {
  var ulList = document.getElementById('result');
  for( var i =0; i<Item.all.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${Item.all[i].ItemName} had ${Item.all[i].clicks} votes and was shown ${Item.all[i].views} times`;
    ulList.append(li);
  }
}
//Banana Slicer had 3 votes and was shown 5 times


// -----------------------------------------------------------------------------------------------------
var totalClicks = 0;

section.addEventListener('click', handleClick);

function handleClick(event) {
 // console.log(event.target)
 localStorage.clear();

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
    renderResults();
    location.reload();

    for (var x = 0 ; x<Item.all.length ; x++){
      clicksArr.push(Item.all[x].clicks);
      viewsArr.push(Item.all[x].views)
    } 
    console.log(clicksArr);
console.log(viewsArr);
chartFillCilcks();
storeAtLocal()

  }
}
     
      
// -------------------------------------------------------------------------------------------------------------------


function chartFillCilcks(){
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

  // -------------------------------------------------------------------------------------------  

  function storeAtLocal() {

    var picArray = JSON.stringify(Item.all);
    var saveClicksArr = JSON.stringify(clicksArr);
    var saveViewsArr = JSON.stringify(viewsArr);
    localStorage.setItem('picArray',picArray);
    localStorage.setItem('saveClicksArr',saveClicksArr);
    localStorage.setItem('saveViewsArr',saveViewsArr);
  }
  
// ------------------------------------------------------------------------------------------

function getValuesFromLocal() {
  // viewsArr = [];
  // clicksArr = [];
  // Item.all = [];
  var picArray = localStorage.getItem('picArray');
  var saveClicksArr = localStorage.getItem('saveClicksArr');
  var saveViewsArr = localStorage.getItem('saveViewsArr');
  
  if(picArray) {
    Item.all = JSON.parse(picArray);
    clicksArr = JSON.parse(saveClicksArr);
    viewsArr = JSON.parse(saveViewsArr);
    chartFillCilcks();
    renderResults ();
  }
}

getValuesFromLocal()    
      
























  













