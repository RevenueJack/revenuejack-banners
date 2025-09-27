var container, exitBtn, legalBtn, tlMain, width=300, height=250;

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
		.set('.teaDrip2',		{left:12, top:70, scaleX:0.8})
		.set('.txt3a',			{transformOrigin:'119px 52px'})
		.set('.txt3b',			{transformOrigin:'182px 52px'})
		.set('.txt3c',			{transformOrigin:'150px 90px'})
		.set('.cta', 			{left:62, top:161, width:178, height:42, backgroundColor:"#ee7600", borderRadius:"4px", overflow:'hidden'})
		.set('.sprite-ctaTxt', 	{left:7,  top:11})
		.set('.sprite-sheen', 	{x:-120})
		.set(container,			{alpha:1})

		.add(step1())
		.add(step2(), 5)
		.add(step3(), 9.5)

		.call(function(){ console.log('Total animation time: '+tlMain.totalDuration()); }, null, null, 0)
		// .progress(.6)

	
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
			.to('.chairGroup',  		0.9, {scale:0.8, x:-width/3, ease:Power3.easeInOut}, 0)
			.to('.f1',  				0.9, {scale:0.9, x:-width/2, ease:Power3.easeInOut}, 0)
			.to('.f1',  				0.3, {autoAlpha:0, ease:Power1.easeInOut}, 0.25)
			.fromTo('.tea', 			0.9, {x:width, rotation:0.01, scale:1, y:-80}, {scale:0.5, x:0, y:0, rotation:0, ease:Power2.easeInOut}, 0)
			.to('.tea',					4.7, {x:-2, y:0, scale:0.5, rotation:-0.01, ease:Power1.easeOut}, 0.74)
			.fromTo('.teaTrail',		3.2, {height:226}, {height:302, ease:Power1.easeOut}, 0.8)
			.from('.teaDrip',			3.2, {y:-70, ease:Power1.easeOut}, 0.8)
			.from('.teaDrip2',			3.2, {y:-50, ease:Power0.easeNone}, 0.8)
			.from('.sprite-txt2a',		0.4, {alpha:0, y:5}, 0.6)
			.from('.sprite-txt2b',		0.4, {alpha:0, y:5}, 1.1)
			.from('.sprite-txt2c',		0.6, {alpha:0, y:5}, 1.5)
			.from('.sprite-txt2d',		0.5, {alpha:0, y:5}, 1.8)
	}

	function step3() {
		return new TimelineLite()
			.to('.f2',  				0.3, {autoAlpha:0, ease:Power1.easeInOut}, 0)
			.to('.sprite-footer',		0.3, {y:30, ease:Power2.easeIn}, 0.1)
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
	if ( !TweenMax.isTweening('.sprite-sheen') ) TweenMax.fromTo('.sprite-sheen', 0.6, {x:-120},{x:200, ease:Power1.easeOut});
}


function out(e) {
	TweenMax.to('.cta', 0.3, {backgroundColor:"#ee7600"});
}





