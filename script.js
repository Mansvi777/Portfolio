class CanvasCarousel {
  constructor(canvasSelector, imageUrls, interval = 4000) {
    this.canvas = document.querySelector(canvasSelector);
    if (!this.canvas) {
      console.error(`Canvas not found for selector: ${canvasSelector}`);
      return;
    }

    this.ctx = this.canvas.getContext("2d");
    this.images = imageUrls;
    this.index = 0;
    this.intervalTime = interval;

    this.loadImage(this.index);
    this.startCarousel();
  }

  loadImage(index) {
    const img = new Image();
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    };
    img.src = this.images[index];
  }

  startCarousel() {
    setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
      this.loadImage(this.index);
    }, this.intervalTime);
  }
}

// Wait for DOM to be fully loaded
window.onload = function () {
  // Create carousels for both projects
  const project1Images = [
    "Screenshot 2025-05-11 103609.png",
    "Screenshot 2025-05-11 104844.png",
    "Screenshot 2025-05-11 105604.png",
    "Screenshot 2025-05-11 105823.png",
    "Screenshot 2025-05-11 111254.png",
    "Screenshot 2025-05-11 111306.png",
    "Screenshot 2025-05-11 111335.png"
  ];

  const project2Images = [
    "Screenshot 2025-07-01 133518.png",
    "Screenshot 2025-07-01 133631.png"
  ];

  new CanvasCarousel(".project1_img canvas", project1Images);
  new CanvasCarousel(".project2_img canvas", project2Images);
};


// dark mode -----------------------------------------------------------------  
const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Toggle icon
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });