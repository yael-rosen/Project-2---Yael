let globalIndex = -1;
let font;

maxWidth = 200;
maxHeight = 200;

maxWidth1 = 350;
maxHeight1 = 75;

let dateArray = ['January 20th', 
                 'Feburary 25th', 
                 'March 5th', 
                 'April 13th', 
                 'May 11th', 
                 'June 17th', 
                 'July 30th', 
                 'August 7th', 
                 'September 5th', 
                 'October 26th']

let stepCount = ['27,656',
                '26,478',
                '35,027',
                '41,156',
                '13,482',
                '18,025',
                '14,609',
                '15,377',
                '15,857',
                '16,332']

let myDescription = ['Weekend trip to Bologna. This is the Two Towers!',
                    'Weekend trip Amsterdam. This is from the Noah Kahan concert I saw there!',
                    'Weekend trip to Prague. This is a view of the city from a tower at the Prague Castle!',
                    'Weekend trip to Paris. This is me looking at the Eiffle Tower!',
                    'Weekend trip to Busch Gardens with my family. This is a sign of the logo in front of the park!',
                    'This is from the first week I worked Sandy Hill Camp. Here is a picture of the schedule!',
                    'This is from mid way through the summer where I worked Sandy Hill Camp. My co workers are grabbing pizza!',
                    'This is from towards the end of the summer where I worked Sandy Hill Camp. My sister is holding up her coffee order!',
                    'One of first weekends out in Blacksburg this semester. This is my best friend and I all dressed up!',
                    'Virginia Tech football game day. It was the Georgia Tech game that we won!']

let myImage = []
function preload(){
  myImage[0] = loadImage('assets/Janurary1.jpg');
  myImage[1] = loadImage('assets/Feburary2.jpg');
  myImage[2] = loadImage('assets/March3.jpg');
  myImage[3] = loadImage('assets/April4.jpg');
  myImage[4] = loadImage('assets/May5.jpg');
  myImage[5] = loadImage('assets/June6.jpg');
  myImage[6] = loadImage('assets/July7.jpg');
  myImage[7] = loadImage('assets/August8.jpg');
  myImage[8] = loadImage('assets/September9.jpg');
  myImage[9] = loadImage('assets/October10.jpg');
  font = loadFont('/assets/SpaceGrotesk-Regular.ttf');
}

function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('sketch-holder');
  rectMode(CENTER);
  
  let button = createButton('Forward');
  button.parent("button-holder");
  button.mousePressed(changeDayforward);
  
  let button2 = createButton('Backward');
  button2.parent("button-holder");
  button2.mousePressed(changeDayback);
  
  let button3 = createButton("See Description");
  button3.parent("button-holder");
  button3.mousePressed(seeDescription);
  
  let button4 = createButton("Random Date");
  button4.parent("button-holder");
  button4.mousePressed(randomDate);
  
  background(191, 217, 224); 
  textFont(font);
  textAlign(CENTER);
  textSize(14);
  text('Use the buttons to interact with my highest step counts from 2024 so far!', width/2, 235, (maxWidth1), (maxHeight1));
  text('You can go forward and backward through the months.', width/2, 285);
  text('You can also see a despriction for each image.', width/2, 335);
  text('Have fun exploring!', width/2, 385);
}

function draw() {
}

function changeDayforward() {
  globalIndex++;
  if(globalIndex > stepCount.length-1) {
    globalIndex = 0;
  }
  background(191, 217, 224);
  textAlign(CENTER);
  textSize(15);
  textFont(font);
  image(myImage[globalIndex], 50,30,300,400);
  text('Date:', width/2, 460);
  text(dateArray[globalIndex], width/2, 480);
  text('Step Count:', width/2, 530);
  text(stepCount[globalIndex], width/2, 550)
}

function changeDayback(){
    globalIndex--;
  if(globalIndex < 0) {
    globalIndex = 9;
  }
  background(191, 217, 224);
  textAlign(CENTER);
  textSize(15);
  textFont(font);
  image(myImage[globalIndex], 50,30,300,400);
  text('Date:', width/2, 460);
  text(dateArray[globalIndex], width/2, 480);
  text('Step Count:', width/2, 530);
  text(stepCount[globalIndex], width/2, 550)
}

function randomDate(){
  let randomDay = int(random(myImage.length));
  globalIndex = randomDay;
  background(191, 217, 224);
  textAlign(CENTER);
  textSize(15);
  image(myImage[globalIndex], 50,30,300,400);
  text('Date:', width/2, 460);
  text(dateArray[globalIndex], width/2, 480);
  text('Step Count:', width/2, 530);
  text(stepCount[globalIndex], width/2, 550)
}

function seeDescription() {
  background(191, 217, 224);
  textFont(font);
  textSize(18);
  text('Description:', width/2, 200);
  text(myDescription[globalIndex], width/2, 275, (maxWidth), (maxHeight));
}