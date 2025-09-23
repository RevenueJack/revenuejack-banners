
// ---- SPLIT SEPARATE FRAMES -------------------------
function separateFrames(){
  killAll();

  banner.width = $('.banner').offsetWidth;
  banner.height = $('.banner').offsetHeight;

  var totalFrames = [];
  var htmlCopy = "";

  ArrayFrom($('.frame')).map(function(index, i){
    // Check frames for a number value;

    if( /frame[0-9]/.test(index.className) ){

      totalFrames.push(index);
      htmlCopy += htmlOriginal;
    }

  });
    
  $('body').innerHTML = htmlCopy;
  
  var banners = document.querySelectorAll('.banner');
  var bannerArray = ArrayFrom(banners).map(function(_b, i){
  
    var _i = i+1;
    var b = banners[i];
    b.className += ' banner' + _i

    set(b, {
      position: 'relative',
      margin: '0 15px 30px 15px',
      transform: 'scale(1)',
      display: 'inline-block',
    });

    $('.banner' + _i + " .frame" + _i).style.display = "block";
    banner.expanded = {height: b.getBoundingClientRect().top + banner.height + 50};
    // console.log(banner.expanded)
    
    var _i = i+0;
    var x = b.getBoundingClientRect().left - document.querySelector('.banner1').getBoundingClientRect().left;
    var y = b.getBoundingClientRect().top - document.querySelector('.banner1').getBoundingClientRect().top;

    from(b, 0.3, {x: -x, y: -y, alpha: 0}, 'out');
    // show('.banner' + _i + ' .common');

  });

  onSplitFrames();
}


function resetFrames(){
  killAll();
  var banners = document.querySelectorAll('.banner');
  var bannerArray = ArrayFrom(banners).map(function(_b, i){
    var _i = i+1;
    var x = _b.getBoundingClientRect().left - $('.banner1').getBoundingClientRect().left;
    var y = _b.getBoundingClientRect().top - $('.banner1').getBoundingClientRect().top;
    to(_b, 0.2, {x: -x, y: -y, alpha: 0}, 'in');
  });

  wait(0.2, function(){
    killAll();
    $('body').innerHTML = htmlOriginal;
    show('.banner');
    loop();
  })
}