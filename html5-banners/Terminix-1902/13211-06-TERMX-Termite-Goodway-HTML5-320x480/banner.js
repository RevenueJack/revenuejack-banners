var container, exitBtn, legalBtn, tlMain, width=320, height=480;

init = function() { //called from index.html, on pageload
	
	container = document.getElementById('container');
	exitBtn = document.getElementById('exitBtn');
	
	exitBtn.addEventListener('click', click, false);
	exitBtn.addEventListener('mouseover', over, false);
	exitBtn.addEventListener('mouseout', out, false);
	

	// Main timeline
	tlMain = new TimelineLite()
		
		.set('.retina',			{transformOrigin:'0 0', scale:0.5})
		.set('.chair',			{x:-35, y:-257, transformOrigin:'33% 130%'})
		.set('.shadow',			{x:-6, y:203, scaleX:0.58})
		.set('.chairGroup',		{scale:1.4, x:112, y:205})
		.set('.teaTrail',		{left:20, top:130})
		.set('.teaDrip',		{left:20, top:130})
		.set('.teaDrip2',		{left:27, top:170, scaleX:0.7, scaleY:0.8})
		.set('.txt3a',			{transformOrigin:'117px 150px'})
		.set('.txt3b',			{transformOrigin:'202px 150px'})
		.set('.txt3c',			{transformOrigin:'160px 202px'})
		.set('.cta', 			{left:43, top:350, width:236, height:56, backgroundColor:"#ee7600", borderRadius:"4px", overflow:'hidden'})
		.set('.sprite-ctaTxt', 	{left:11, top:15})
		.set('.sprite-sheen', 	{x:-150})
		.set(container,			{alpha:1})

		.add(step1())
		.add(step2(), 5)
		.add(step3(), 9.5)

		.call(function(){ console.log('Total animation time: '+tlMain.totalDuration()); }, null, null, 0)
		// .progress(.4)

	
	function step1() {
		return new TimelineLite()
			.fromTo('.shadow', 			1.8, {rotation:-1}, {rotation:1, scaleX:0.5, x:1, y:202, skewX:-9, repeat:2, yoyo:true, ease:Sine.easeInOut}, 0)
			.fromTo('.chair', 			1.8, {rotation:0}, {rotation:-3, repeat:2, yoyo:true, ease:Sine.easeInOut}, 0)
			.from('.sprite-txt1a',		0.7, {alpha:0, y:12, ease:Power4.easeOut}, 0.6)
			.from('.sprite-txt1b',		0.4, {alpha:0, ease:Power1.easeInOut}, 1.1)
			.from('.sprite-txt1c',		0.6, {alpha:0, y:7}, 1.5)
			.from('.sprite-txt1d',		0.5, {alpha:0, y:5}, 1.75)
	}

	function step2() {
		return new TimelineLite()
			.to('.chairGroup',  		0.9, {scale:0.8, x:-width/4, y:50, ease:Power3.easeInOut}, 0)
			.to('.f1',  				0.9, {scale:0.9, x:-width/2, y:-15, ease:Power3.easeInOut}, 0)
			.to('.f1',  				0.3, {autoAlpha:0, ease:Power1.easeInOut}, 0.25)
			.fromTo('.tea', 			0.9, {x:width, rotation:0.01, scale:1.8, y:-40}, {scale:0.835, x:25, y:35, rotation:0, ease:Power2.easeInOut}, 0)
			.to('.tea',					4.7, {x:25, y:35, scale:0.835, rotation:-0.01, ease:Power1.easeOut}, 0.74)
			.fromTo('.teaTrail',		3.6, {height:226}, {height:302, ease:Power1.easeOut}, 0.8)
			.from('.teaDrip',			3.6, {y:-70, ease:Power1.easeOut}, 0.8)
			.from('.teaDrip2',			3.7, {y:-50, ease:Power0.easeNone}, 0.8)
			.from('.sprite-txt2a',		0.4, {alpha:0, y:5}, 0.6)
			.from('.sprite-txt2b',		0.4, {alpha:0, y:5}, 1.1)
			.from('.sprite-txt2c',		0.6, {alpha:0, y:5}, 1.5)
			.from('.sprite-txt2d',		0.5, {alpha:0, y:5}, 1.8)
	}

	function step3() {
		return new TimelineLite()
			.to('.f2',  				0.3, {autoAlpha:0, ease:Power1.easeInOut}, 0)
			.to('.sprite-footer',		0.3, {y:99, ease:Power2.easeIn}, 0.1)
			.from('.txt3a',				0.2, {alpha:0, scale:2, ease:Back.easeOut}, 0.6)
			.from('.txt3b',				0.2, {alpha:0, scale:2, ease:Back.easeOut}, 0.9)
			.from('.txt3c',				0.2, {alpha:0, scale:2, ease:Power4.easeOut}, 1.3)
			.from('.cta',				0.4, {alpha:0, scale:0.8, rotation:0.01, ease:Power3.easeOut}, 1.4)
			.from('.sprite-sentricon',	0.5, {alpha:0, ease:Power1.easeInOut}, 1.6)
			.call(over, null, null, 2)
			.call(out, null, null, 3)
	}	
	
}


function click(e) {}


function over(e) {
	TweenMax.to('.cta', 0.3, {backgroundColor:"#f7a300"});
	if ( !TweenMax.isTweening('.sprite-sheen') ) TweenMax.fromTo('.sprite-sheen', 0.6, {x:-150},{x:250, ease:Power1.easeOut});
}


function out(e) {
	TweenMax.to('.cta', 0.3, {backgroundColor:"#ee7600"});
}





