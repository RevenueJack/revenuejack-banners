var htmlOriginal;
var htmlMem;

//////////////////////////////////////////////////////////////////////////////////
function onSplitFrames() {
  // -- called when splitting banner into frames
  show(".banner4 .terms-button");

  show(".banner5 .frame3");
  show(".banner5 .terms");
}

// INIT BANNER ----------------------------------
function init() {
  setBannerSize();

  show(".scene");
  show(".common");

  set(".background", { transformOrigin: "60% 50%" });

  new ImagePreloader(
    ["background.jpg"], 
    frame0);

  htmlOriginal = $("body").innerHTML;
  htmlMem = $(".htmlMem").innerHTML;

  addListeners();
}

function frame0() {
  show(".banner");
  from(".htmlMem", 0.75, { alpha: 0 }, "in", 0);

  frame1();
}

function frame0() {
  show(".banner");
  from(".htmlMem", 0.75, { alpha: 0 }, "in", 0);

  frame1();
}

function frame1() {
  show(".frame1");

  var time = 2.0;
  from(".background", time, { scale: 2 });

  wait(time - 0.5, function() {
    var time = 1;
    to(".background", time, { scale: 1 }, "sineOut");
    to(".cars", time, { scale: 1 }, "sineOut");
  });

  wait(4.0, frame2);
}

function frame2() {
  var currentFrame = 2;
  // hide previous frame
  to(".frame" + (currentFrame - 1), 0.5, { alpha: 0 }, "in");
  // show current farme
  from(".frame" + currentFrame, 0.75, { alpha: 0 }, "in", 0.5);

  wait(3.5, frame3);
}

function frame3() {
  var currentFrame = 3;
  // hide previous frame
  to(".frame" + (currentFrame - 1), 0.5, { alpha: 0 }, "in");
  // show current farme
  from(".frame" + currentFrame, 0.75, { alpha: 0 }, "in", 0.5);

  wait(3.5, frame4);
}

function frame4() {
  var currentFrame = 4;
  // hide previous frame
  to(".frame" + (currentFrame - 1), 0.5, { alpha: 0 }, "in");
  // show current farme
  from(".frame" + currentFrame, 0.75, { alpha: 0 }, "in", 0.5);

  from(".terms-button", 0.5, { alpha: 0 }, "in", 0.5);

  if (banner.loopCount < 1) {
    banner.loopCount++;
    //wait(7, loop)
  }
}

function loop() {
  if (!banner.termsShowing) {
    killAll();
    to(".htmlMem", 0.5, { alpha: 0 }, "in");
    to(".terms-button", 0.5, { alpha: 0 }, "in");
    banner.looping = true;

    wait(0.75, function() {
      killAll();
      set(".htmlMem", { alpha: 1 });
      set(".terms-button", { alpha: 1, display: "none" });
      $(".htmlMem").innerHTML = htmlMem;
      frame0();
      banner.termsShowing = false;
      banner.looping = false;
    });
  }
}

function reset() {
  loop();
}

window.addEventListener("load", init);
