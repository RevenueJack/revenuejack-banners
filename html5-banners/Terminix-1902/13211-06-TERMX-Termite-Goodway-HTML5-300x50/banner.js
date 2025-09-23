var container, exitBtn, legalBtn, tlMain, width=300, height=50;

init = function() { //called from index.html, on pageload
	
	container = document.getElementById('container');
	exitBtn = document.getElementById('exitBtn');
	
	exitBtn.addEventListener('click', click, false);
	exitBtn.addEventListener('mouseover', over, false);
	exitBtn.addEventListener('mouseout', out, false);
	

	// Main timeline
	tlMain = new TimelineLite()
		
		.set('.retina',			{transformOrigin:'0 0', scale:0.5})
		.set('.txt3a',			{transformOrigin:'30px 25px'})
		.set('.txt3b',			{transformOrigin:'70px 25px'})
		.set('.txt3c',			{transformOrigin:'147px 25px'})
		.set('.cta', 			{left:210, top:8, width:82, height:19, backgroundColor:"#ee7600", borderRadius:"4px", overflow:'hidden'})
		.set('.sprite-ctaTxt', 	{left:4, top:5})
		.set('.sprite-sheen', 	{x:-150})
		.set(container,			{alpha:1})

		.add(step1(), 0.1)
		.add(step2(), 5)
		.add(step3(), 9.5)

		.call(function(){ console.log('Total animation time: '+tlMain.totalDuration()); }, null, null, 0)
		// .progress(.9)

	
	function step1() {
		return new TimelineLite()
			.from('.sprite-txt1a',		0.6, {alpha:0, y:7, ease:Power4.easeOut}, 0.1)
			.from('.sprite-txt1b',		0.4, {alpha:0, ease:Power1.easeInOut}, 0.5)
			.from('.sprite-txt1c',		0.6, {alpha:0, y:7}, 1.0)
			.from('.sprite-txt1d',		0.5, {alpha:0, y:5}, 1.25)
			.from('.sprite-txt1e',		0.5, {alpha:0, y:5}, 1.45)
	}

	function step2() {
		return new TimelineLite()
			.to('.f1',  				0.9, {scale:0.9, ease:Power3.easeInOut}, 0)
			.to('.f1',  				0.3, {autoAlpha:0, ease:Power1.easeInOut}, 0.25)
			.from('.f2',  				0.3, {alpha:0, ease:Power1.easeInOut}, 0.2)
			.from('.sprite-txt2a',		0.4, {alpha:0, y:5}, 0.6)
			.from('.sprite-txt2b',		0.4, {alpha:0, y:5}, 1.1)
			.from('.sprite-txt2c',		0.6, {alpha:0, y:5}, 1.5)
			.from('.sprite-txt2d',		0.5, {alpha:0, y:5}, 1.8)
	}

	function step3() {
		return new TimelineLite()
			.to('.f2',  				0.3, {autoAlpha:0, ease:Power1.easeInOut}, 0)
			.to('.sprite-footer',		0.3, {x:150, ease:Power2.easeIn}, 0.1)
			.from('.txt3a',				0.2, {alpha:0, scale:2, ease:Back.easeOut}, 0.6)
			.from('.txt3b',				0.2, {alpha:0, scale:2, ease:Back.easeOut}, 0.9)
			.from('.txt3c',				0.2, {alpha:0, scale:2, ease:Power4.easeOut}, 1.3)
			.from('.cta',				0.4, {alpha:0, scale:0.8, rotation:0.01, ease:Power3.easeOut}, 1.4)
			.from('.sprite-sentricon',	0.5, {alpha:0, ease:Power1.easeInOut}, 1.6)
			.call(over, null, null, 2)
			.call(out, null, null, 3)
	}	
	
}


function click(e) {
	window.open(window.clickTag);
}


function over(e) {
	TweenMax.to('.cta', 0.3, {backgroundColor:"#f7a300"});
	if ( !TweenMax.isTweening('.sprite-sheen') ) TweenMax.fromTo('.sprite-sheen', 0.6, {x:-150},{x:99, ease:Power1.easeOut});
}


function out(e) {
	TweenMax.to('.cta', 0.3, {backgroundColor:"#ee7600"});
}





