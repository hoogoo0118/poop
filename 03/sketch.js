let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ['assets/BadApple.mp4'],
    vidLoad
  );

  vid.size(300, 300);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(80);
}
