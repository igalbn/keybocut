

function preload()
{
  assignColorsValues();
  assignValues();
  loadImages();
  //createCanvas(canvasWidth,canvasHeight);

}

function setup() {
  // put setup code here

  createCanvas(canvasWidth,canvasHeight);

}

function draw() {
//background
  background(backgroundColor);
//
  image(imgYouTube,22,22);
//buttons
  image(imgLeftButton, buttonLeft_X,buttonLeft_Y, buttonsSize,buttonsSize);
  image(imgRightButton, buttonRight_X,buttonRight_Y, buttonsSize,buttonsSize);

  switch (currentShortcutIndex)
  {
    case 1: stringShortcut = "M = mute";
           break;
    case 2: stringShortcut = "F = fullscreen";
           break;
    case 3: stringShortcut = "L = Move forward 10 sec";
           break;
    case 4: stringShortcut = "J = Move backward 10 sec";
           break;
    default:  stringShortcut = "M = mute";
              console.log("vrong value of currentShortcutIndex, = " + currentShortcutIndex);
           break;
  }
//text
  textSize(shortcutTextSize);
  text(stringShortcut, 111,380);



}

function checkMouse()
{
  // check if button pressed

    if ((currentMouseX > buttonLeft_X) && (currentMouseX < buttonLeft_X + buttonsSize) && (currentMouseY > buttonLeft_Y) && (currentMouseY < buttonLeft_Y + buttonsSize) )
    {

      console.log("left button pressed");

      if (currentShortcutIndex > currentShortcutMin)
      {
          currentShortcutIndex--;
          console.log("currentShortcutIndex = " + currentShortcutIndex);
      }
    }

    if ((currentMouseX > buttonRight_X) && (currentMouseX < buttonRight_X + buttonsSize) && (currentMouseY > buttonRight_Y) && (currentMouseY < buttonRight_Y + buttonsSize) )
    {
      console.log("right button pressed");

      if (currentShortcutIndex < currentShortcutMax)
      {
        currentShortcutIndex++;
        console.log("currentShortcutIndex = " + currentShortcutIndex);
      }
    }
}

function mousePressed()
{
  currentMouseX = mouseX;
  currentMouseY = mouseY;
  console.log(currentMouseX);
  checkMouse();
}

function assignValues()
{
//canvas size
  canvasWidth = 1280;
  canvasHeight = 720;

//colors
  backgroundColor = beige;
//buttons
  buttonsSize = 70;
  buttonLeft_X = 0;
  buttonLeft_Y = canvasHeight - buttonsSize;
  buttonRight_X =  canvasWidth - buttonsSize;
  buttonRight_Y = buttonLeft_Y;
//text
  stringShortcut  = "M = mute";
  shortcutTextSize = 62;
  currentShortcutMin = 1;
  currentShortcutMax = 4;
  currentShortcutIndex = currentShortcutMin;
}

function loadImages()
{
  imgYouTube = loadImage("data/images/rest/youtube.png");
//buttons
  imgLeftButton = loadImage("data/images/buttons/left.png");
  imgRightButton = loadImage("data/images/buttons/right.png");

}
