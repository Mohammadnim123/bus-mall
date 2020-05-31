'use strict'

var imgArr = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "tauntaun", "unicorn", "water-can", "wine-glass", "usb", "sweep"];

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
function item(name) {
  this.itemName = name;
  this.imagePath1 = `img/${name}.jpg`;
  this.imagePath2 = `img/${name}.gif`;
  this.imagePath3 = `img/${name}.png`;
  this.clicks = 0;
  this.views = 0;

  item.all.push(this);
}
item.all = [];

// ---------------------------------------------------------------------------------------------------

for (var i = 0; i < imgArr.length; i++) {
  new item(imgArr[i]);
}
//console.log(item.all);
// ------------------------------------------------------------------------------------------------

var firstObj, secondObj, thairdObj;

var a1 = randomNumber(0, item.all.length - 1);
  firstObj = item.all[a1];
  firstImg.alt = firstObj.itemName;
  firstImg.title = firstObj.itemName;
  firstObj.views++;
  if (a1 < 18) {
    firstImg.src = firstObj.imagePath1;
  } else if (a1 == 18) {
    firstImg.src = firstObj.imagePath2;
  } else if (a1 == 19) {
    firstImg.src = firstObj.imagePath3;
  }

  var a2 = randomNumber(0, item.all.length - 1);
  secondObj = item.all[a2];
  secondImg.alt = secondObj.itemName;
  secondImg.title = secondObj.itemName;
  secondObj.views++;

  if (a2 < 18) {
    secondImg.src = secondObj.imagePath1;
  } else if (a2 == 18) {
    secondImg.src = secondObj.imagePath2;
  } else if (a2 == 19) {
    secondImg.src = secondObj.imagePath3;
  }

  var a3 = randomNumber(0, item.all.length - 1);
  thairdObj = item.all[a3];
  thairdImg.alt = thairdObj.itemName;
  thairdImg.title = thairdObj.itemName;
  thairdObj.views++;

  if (a3 < 18) {
    thairdImg.src = thairdObj.imagePath1;
  } else if (a3 == 18) {
    thairdImg.src = thairdObj.imagePath2;
  } else if (a3 == 19) {
    thairdImg.src = thairdObj.imagePath3;
  }


// function photosfill(numImg, numObj) {

//   var a1 = randomNumber(0, item.all.length - 1);
//   numObj = item.all[a1];
//   numImg.alt = numObj.itemName;
//   numImg.title = numObj.itemName;
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

console.log(firstObj);
console.log(secondObj);
console.log(thairdObj);


// --------------------------------------------------------------------------------------------------

function renderResults () {
  var ulList = document.getElementById('result');
  for( var i =0; i<item.all.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${item.all[i].itemName} had ${item.all[i].clicks} votes and was shown ${item.all[i].views} times`;
    ulList.append(li);
  }
}
//Banana Slicer had 3 votes and was shown 5 times


// -----------------------------------------------------------------------------------------------------
var totalClicks = 0;

section.addEventListener('click', handleClick);

function handleClick(event) {
 // console.log(event.target)

  if (totalClicks < 5) {
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
     
      
      var a1 = randomNumber(0, item.all.length - 1);
      firstObj = item.all[a1];
      firstImg.alt = firstObj.itemName;
      firstImg.title = firstObj.itemName;
      firstObj.views++;
      if (a1 < 18) {
        firstImg.src = firstObj.imagePath1;
      } else if (a1 == 18) {
        firstImg.src = firstObj.imagePath2;
      } else if (a1 == 19) {
        firstImg.src = firstObj.imagePath3;
      }
    
      var a2 = randomNumber(0, item.all.length - 1);
      secondObj = item.all[a2];
      secondImg.alt = secondObj.itemName;
      secondImg.title = secondObj.itemName;
  secondObj.views++;

      if (a2 < 18) {
        secondImg.src = secondObj.imagePath1;
      } else if (a2 == 18) {
        secondImg.src = secondObj.imagePath2;
      } else if (a2 == 19) {
        secondImg.src = secondObj.imagePath3;
      }
    
      var a3 = randomNumber(0, item.all.length - 1);
      thairdObj = item.all[a3];
      thairdImg.alt = thairdObj.itemName;
      thairdImg.title = thairdObj.itemName;
  thairdObj.views++;

      if (a3 < 18) {
        thairdImg.src = thairdObj.imagePath1;
      } else if (a3 == 18) {
        thairdImg.src = thairdObj.imagePath2;
      } else if (a3 == 19) {
        thairdImg.src = thairdObj.imagePath3;
      }
    
      
      
      
    }
  }else{
    renderResults();
  }
}
// -------------------------------------------------------------------------------------------

















