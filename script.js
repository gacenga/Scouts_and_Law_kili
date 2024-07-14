// List of image URLs to be displayed
var images = ["IMG_9673.JPG", "IMG_9674.JPG", "IMG_9675.JPG", "Miaron_0040.jpg"];
var currentIndex = 0;
var slideInterval = 3000; // Change image every 3 seconds (3000 milliseconds)

function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Reset index if it exceeds the length of images array
  }
  var imgElement = document.getElementById('image1');
  imgElement.src = images[currentIndex];
}

// Initial call to change image
changeImage();

// Set interval to change image periodically
setInterval(changeImage, slideInterval);