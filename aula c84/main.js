canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTagl.src = backgroundImage;

    roverImgTag = new Image();
    rover.ImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(roverImgTag, roverX, roverY, rover.width, rover.height)
}

window.addEventListener(keyDown, myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38" )
    {
        up();
        console.log("cima")
    }
    if(keyPressed == "40" )
    {
        up();
        console.log("baixo")
    }
    if(keyPressed == "37" )
    {
        up();
        console.log("esquerda")
    }
    if(keyPressed == "39" )
    {
        up();
        console.log("direita")
    }
}

function up()
{
    if(roverY >=0)
    {
        roverY = roverY - 10;
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(roverY >=500)
    {
        roverY = roverY + 10;
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(roverX >= 0)
    {
        roverX = roverX - 10;
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(roverX >=700)
    {
        roverX = roverX + 10;
        uploadBackground();
        uploadrover();
    }
}