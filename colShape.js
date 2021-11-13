
const shapes = [
    {
        id: 0,
        image: 'images/blueSquare.png',
        name: 'Square',
        color: 'Blue'
    },
    {
        id: 1,
        image: 'images/greenSquare.png',
        name: 'Square',
        color: 'Green'
    },
    {
        id: 2,
        image: 'images/redSquare.png',
        name: 'Square',
        color: 'Red'
    },
    {
        id: 3,
        image: 'images/yellowSquare.png',
        name: 'Square',
        color: 'Yellow'
    },
    {
        id: 4,
        image: 'images/blueTriangle.png',
        name: 'Triangle',
        color: 'Blue'
    },
    {
        id: 5,
        image: 'images/greenTriangle.png',
        name: 'Triangle',
        color: 'Green'
    },
    {
        id: 6,
        image: 'images/redTriangle.png',
        name: 'Triangle',
        color: 'Red'
    },
    {
        id: 7,
        image: 'images/yellowTriangle.png',
        name: 'Triangle',
        color: 'Yellow'
    },
    {
        id: 8,
        image: 'images/blueCircle.png',
        name: 'Circle',
        color: 'Blue'
    },
    {
        id: 9,
        image: 'images/greenCircle.png',
        name: 'Circle',
        color: 'Green'
    },
    {
        id: 10,
        image: 'images/redCircle.png',
        name: 'Circle',
        color: 'Red'
    },
    {
        id: 11,
        image: 'images/yellowCircle.png',
        name: 'Circle',
        color: 'Yellow'
    }
];


//what happens when 'Let's Play' button is clicked.
const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button click');
    getRandomInt();
    buttonClick(randomInt);
    console.log('actual button click');
});

//what happens when shape is clicked
const img = document.querySelector('img');
img.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('image click');
    console.log(randomInt);
    shapeClick();
});

//what happens when page initially opens
let randomInt;
let shapeImage;
let shapeColor;
let shapeName;
getRandomInt();
console.log(randomInt);
//initial button click called when form opens
buttonClick(randomInt);

//Display name of the colored shape
console.log(shapeImage);

//Random intiger determines which shape and color to display
function getRandomInt(maxNumber = shapes.length) {
    randomInt = Math.floor(Math.random() * maxNumber);
    return randomInt;
}

//called on opening of page and on click of the 'Let's Play' button
function buttonClick(randomInt){
    shapeImage = shapes.filter(function(shape){
        return shape.id === randomInt;
    }).map(function(shape){
        return shape.image;
    });

    img.src = shapeImage;
    clearShapeText();
}

function clearShapeText() {
    const ans = document.querySelector('h3');
    ans.textContent = '';
}

function getShapeColor() {
    shapeColor = shapes.filter(function(shape){
    return shape.id === randomInt; 
    }).map(function(shape){
    console.log('What is shape color');
    return shape.color;
    })
    console.log(shapeColor);
}

function getShapeName() {
    // //Display color word text as correct color
    // formatShapeColor(shapeColor);

    shapeName = shapes.filter(function(shape){
        return shape.id === randomInt;
    }).map(function(shape){
        return shape.name;
    })
    console.log(shapeName);
}

//When shape image is clicked, display color and name below
function shapeClick(){
    getShapeColor();
    getShapeName();
    getCorrectResponse(shapeColor, shapeName);
    
    // let colorOfText = shapeColor.textContent.toLowerCase();
    // console.log(colorOfText);

    const ans = document.querySelector('h3');
    ans.textContent = correctResponse;
    //ans.color = red;
    //ans.fontcolor = 'red';
    //ans.textContent = correctResponse.toLowerCase();
    console.log(ans);
}

function getCorrectResponse(shapeColor, shapeName) {
    correctResponse = `${shapeColor} ${shapeName}`;
    console.log(correctResponse);
    return correctResponse;
}

// function formatShapeColor(shapeColor) {
//     let colorOfText = shapeColor.toLowerCase();
//     console.log(colorOfText);
//     shapeColor.color = colorOfText;
    
//     return shapeColor;
// }
