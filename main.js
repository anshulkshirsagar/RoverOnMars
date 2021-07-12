canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_mars_array = ["Nasa_img1.jpeg", "Nasa_img2.jpeg", "Nasa_img3.jpeg", "Nasa_img4.jpeg", "Nasa_img5.jpeg"];

random_number = Math.floor(Math.random()*5)
console.log(random_number);

rover_width = 100;
rover_height = 90;

background_image = img_mars_array[random_number];
rover_image = "rover.png";

console.log("background_image = "+background_image);

rover_x = 10;
rover_y = 10;

function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadbackground;
    background_image_tag.src = background_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){

        rover_y = rover_y-10;
        console.log("When up arrow is pressed, x = "+rover_x+", y = "+rover_y);

        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){

        rover_y = rover_y+10;
        console.log("When up arrow is pressed, x = "+rover_x+", y = "+rover_y);

        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){

        rover_x = rover_x-10;
        console.log("When up arrow is pressed, x = "+rover_x+", y = "+rover_y);

        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){

        rover_x = rover_x+10;
        console.log("When up arrow is pressed, x = "+rover_x+", y = "+rover_y);

        uploadbackground();
        uploadrover();
    }
}