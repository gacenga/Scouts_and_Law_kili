const images = [
    'url(SnL2.jpg)',
    'url(SnL3.jpg)',
    'url(SnL4.jpg)',
    'url(SnL5.jpg)',
    'url(SnL6.jpg)',
    'url(SnL7.jpg)'
];

let currentIndex = 0;

function changeBackgroundImage() {
    const backgroundContainer = document.getElementById('carousel');
    backgroundContainer.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackgroundImage, 5000);

  // Initial call to set the first image
  changeBackgroundImage();