var banner = {
  htmlMem: "",
  loopCount: 0
};

/////////////////////////////////////////////////////////
//
// Listeners
//
/////////////////////////////////////////////////////////
function addListeners() {
  console.log(">> LISTENERS ADDED");
  $(".clickthrough").addEventListener("click", onClickThrough);
  $(".clickthrough").addEventListener("mouseover", onExitOver);
  $(".clickthrough").addEventListener("mouseout", onExitOut);
  $(".terms-button").addEventListener("mouseover", showTerms);
  // $('.replay').addEventListener('click', loop)
}

function onClickThrough() {
  
  // Enabler.exit('Backgrond Clickthrough');
  console.log(">> Clickthrough");
}

function onExitOver() {
  to(".cta", 0.4, { backgroundColor: "#0653b6" }, "out");
}
function onExitOut() {
  to(".cta", 0.4, { backgroundColor: "#1c69d4" }, "out");
}

/////////////////////////////////////////////////////////
//
// Polyfills
//
/////////////////////////////////////////////////////////
ArrayFrom = function(list) {
  var array = [];
  for (i = 0; i < list.length; i++) {
    array.push(list[i]);
  }
  return array;
};

/////////////////////////////////////////////////////////
//
// Query Selectors
//
/////////////////////////////////////////////////////////
function $(el) {
  var elements = ArrayFrom(document.querySelectorAll(el));
  if (elements.length > 1) {
    return elements;
  }
  if (elements.length == 1) {
    return elements[0];
  }
}

function show(el) {
  set(el, { display: "block" });
}
function hide(el) {
  set(el, { display: "none" });
}

/////////////////////////////////////////////////////////
//
// Image Preloader
//
/////////////////////////////////////////////////////////
function ImagePreloader(images, callback) {
  this.images = images;
  this.callback = callback;
  this.imagesLoaded = 0;
  console.log(this);
  var THIS = this;
  this.images.map(function(image, i) {
    THIS.loadImage(image);
  });
}

ImagePreloader.prototype.loadImage = function(src) {
  var THIS = this;
  var newImage = new Image();
  newImage.src = src;
  newImage.onload = function(e) {
    THIS.imagesLoaded++;
    if (THIS.imagesLoaded == THIS.images.length) {
      console.log(">> ALL IMAGES LOADED");
      THIS.callback();
    }
  };
};

////////////////////////////////////////////////////////////////////////
//
// Tween Nano
//
////////////////////////////////////////////////////////////////////////
var tweenLog = [];

tween = function(_functionType, _element, _time, _object, _ease, _delay) {
  if (_element.style) {
    // console.log(_element)
    if (_element.style.display == "none") _element.style.display = "block";
  } else if ($(_element).style) {
    // console.log($(_element))
    if (
      $(_element).style.display != "block" &&
      $(_element).style.display != "inline-block"
    )
      $(_element).style.display = "block";
  }

  var easeType = "Power0.easeIn";
  if (_ease) _ease = _ease.toLowerCase();
  switch (_ease) {
    case "in":
      easeType = "Power2.easeIn";
      break;
    case "out":
      easeType = "Power2.easeOut";
      break;
    case "inout":
      easeType = "Power2.easeInOut";
      break;
    case "sinein":
      easeType = "Sine.easeIn";
      break;
    case "sineout":
      easeType = "Sine.easeOut";
      break;
    case "sineinout":
      easeType = "Sine.easeInOut";
      break;
    case "backin":
      easeType = "Back.easeIn";
      break;
    case "backout":
      easeType = "Back.easeOut";
      break;
    case "backinout":
      easeType = "Back.easeInOut";
      break;
    case "override":
      break; // for custom tweens
    case "":
      break; // for custom tweens
    default:
      break;
  }
  if (_ease != "override") _object.ease = easeType;
  _object.delay = _delay * timeScale;
  _functionType(_element, _time * timeScale, _object);
  tweenLog.push(_element);
};
var timeScale = 1;
function setTweenTime(n) {
  timeScale = n;
}
set = TweenMax.set;
from = function(_element, _time, _object, _ease, _delay) {
  tween(TweenMax.from, _element, _time, _object, _ease, _delay);
};
to = function(_element, _time, _object, _ease, _delay) {
  tween(TweenMax.to, _element, _time, _object, _ease, _delay);
};
wait = function(_time, _function, _params) {
  TweenMax.delayedCall(_time * timeScale, _function, _params);
  tweenLog.push(_function);
};

// Kill specific tween
kill = function(_element) {
  TweenMax.killTweensOf(_element);
};

// Kill all tweens
killAll = function() {
  tweenLog.map(function(tween) {
    TweenMax.killTweensOf(tween);
  });
  tweenLog = [];
  console.log(">> KILLED ALL TWEENS");
};

/////////////////////////////////////////////////////////
//
// META DATA EXTRACTOR
//
/////////////////////////////////////////////////////////
// returns an object with width & height of banner.
function getAdSizeMeta() {
  var content;
  var metaTags = document.getElementsByTagName("meta");
  ArrayFrom(metaTags).map(function(meta) {
    if (meta.name == "rj.creative") {
      content = meta.content.split(",");
    }
  });
  var size = {
    width: 300,
    height: 250
  };
  return size;
}

// SET BANNER SIZE --------------------------------------------
function setBannerSize() {
  // check banner exists.
  if (!window.hasOwnProperty("banner")) window.banner = {};

  banner.width = 300;
  banner.height = 250;
  $(".banner").style.width = banner.width + "px";
  $(".banner").style.height = banner.height + "px";

  document.title = getAdSizeMeta().width + "x" + getAdSizeMeta().height;
}

// -- Animate lines of text in ----------------------
function linesIn(frame, delay) {
  if (!delay) delay = 0;
  show(frame);
  var lines = $(frame + " .line");
  lines.map(function(line, i) {
    from(line, 0.4, { y: 15, alpha: 0 }, "out", delay + i * 0.075);
  });
}
function linesOut(frame, delay, isEndframe) {
  if (!delay) delay = 0;
  var lines = $(frame + " .line");
  lines.map(function(line, i) {
    to(line, 0.4, { x: 25, alpha: 0 }, "in", delay + i * 0.05);
  });
}

// TERMS AND CONTITINOS PANEL --------------------------------------
function showTerms() {
  kill(loop);
  if (!banner.looping) {
    banner.termsShowing = true;

    // remove / add listeners
    $(".terms-button").removeEventListener("mouseover", showTerms);
    wait(0.3, function() {
      $(".terms .hitarea").addEventListener("mouseover", hideTerms);
      $(".terms-close").addEventListener("mouseover", hideTerms);
    });

    // move terms
    to(".terms-button", 0.3, { alpha: 0 }, "in");
    show(".terms");
    set(".terms .panel", { y: "100%" });
    to(".terms .panel", 0.3, { y: "0%" }, "inOut");
    set(".terms", { alpha: 0 });
    to(".terms", 0.3, { alpha: 1 }, "out");
  }
}

function hideTerms() {
  // remove / add listeners

  $(".terms .hitarea").removeEventListener("mouseover", hideTerms);
  $(".terms-close").removeEventListener("mouseover", hideTerms);
  wait(0.3, function() {
    $(".terms-button").addEventListener("mouseover", showTerms);
  });

  // move terms
  banner.termsShowing = false;
  to(".terms-button", 0.3, { alpha: 1 }, "in");
  show(".terms");
  to(".terms", 0.3, { alpha: 0 }, "in");
  to(".terms .panel", 0.3, { y: "100%" }, "inOut");

  wait(0.3, function() {
    hide(".terms");
  });

  wait(4, loop);
}
