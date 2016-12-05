var imageArray = [
    
    "https://images-na.ssl-images-amazon.com/images/I/517VZV4BF8L._SY445_.jpg",
    "http://www.vancouversun.com/cms/binary/7677056.jpg"
];
var currentIndex = 0;

function renderImage(){
    $('#thePhoto').attr('src', imageArray[currentIndex]);
}

renderImage();

function forwardImage(){
    currentIndex++;
    renderImage();
}

function backImage(){
    currentIndex--;
    renderImage();
}


$('#forwardButton').on('click', forwardImage());
$('#backButton').on('click', backImage());