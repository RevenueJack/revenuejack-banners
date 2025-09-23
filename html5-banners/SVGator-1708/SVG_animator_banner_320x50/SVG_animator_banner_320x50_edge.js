
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x22='19px',x24='2px 2px',x2='5.0.0',x10='rgba(0,0,0,0)',x13='700',g='image',x30='12px',x15='rgba(44,53,78,1.00)',x20='2px',x29='3px',m='rect',x19='0px',e18='${LEARN_MORE}',i='none',x3='6.0.0.400',p='px',o='opacity',lf='left',x34='36px',x35='21px',e17='${slogan}',x21='90px',x31='CTA_txt',x6='Arial, Helvetica, sans-serif',tp='top',l='normal',x25='CTA_bg_2',x23='auto',x9='24px',x8='break-word',x14='nowrap',x26='rgba(47,142,148,1.00)',x5='14',x33='150px',x28='rgba(62,172,180,1.00)',x7='300',xc='rgba(0,0,0,1)',e16='${logo-animated}',x='text',x27='CTA_bg_1';var g11='logo-animated.svg';var s12="<p style=\"margin: 0px;\">​<span style=\"color: rgb(62, 255, 250); font-weight: 500; font-size: 10px;\">LEARN MORE &gt;</span></p>",s4="<p style=\"margin: 0px; line-height: 16px;\">​<span style=\"color: rgb(255, 255, 255); font-family: Lato, sans-serif; font-weight: 400; font-size: 16px;\">SVG animation</span></p><p style=\"margin: 0px; line-height: 16px;\"><span style=\"color: rgb(255, 255, 255); font-family: Lato, sans-serif; font-weight: 400; font-size: 16px;\"> made easy</span></p>",s32="<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-family: Lato, sans-serif; font-weight: 700; text-transform: uppercase;\">learn more</span></p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={'Lato, sans-serif':'<link href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700,900\" rel=\"stylesheet\">'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'slogan',t:x,r:['78px','8px','173px','44px','auto','auto'],o:'0',text:s4,align:"center",n:[x6,[x5,p],xc,x7,i,"",x8,""],ts:["","",x9,"",""]},{id:'logo-animated',t:g,r:['11px','13px','90px','22px','auto','auto'],o:'1',f:[x10,im+g11,'0px','0px']},{id:'LEARN_MORE',t:x,r:['233px','56px','auto','auto','auto','auto'],o:'1',text:s12,align:"center",n:[x6,[x5,p],xc,x13,i,l,x8,x14],ts:["","","","",i]}],style:{'${Stage}':{isStage:true,r:['null','null','320px','50px','auto','auto'],overflow:'hidden',f:[x15,[270,[['rgba(25,31,53,1.00)',0],['rgba(55,66,91,1.00)',100]]]]}}},tt:{d:10000,a:y,l:{"stop":8000},data:[["eid77",o,9500,500,"easeOutBack",e16,'1','0'],["eid275",lf,1000,0,"linear",e17,'78px','78px'],["eid272",tp,1000,750,"easeOutExpo",e18,'56px','16px'],["eid274",o,9500,500,"easeOutExpo",e18,'1','0'],["eid265",lf,500,0,"easeOutBack",e16,'11px','11px'],["eid2",tp,0,500,"easeOutExpo",e16,'-29px','13px'],["eid5",o,500,500,"linear",e17,'0.000000','1'],["eid78",o,9500,500,"easeOutBack",e17,'1','0'],["eid273",lf,1750,0,"easeOutExpo",e18,'233px','233px']]}},"CTA2":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x19,x20,x21,x22,x23,x23],br:[x20,x20,x20,x24],id:x25,s:[0,xc,i],t:m,f:[x26]},{r:[x19,x19,x21,x22,x23,x23],br:[x20,x20,x20,x24],id:x27,s:[0,xc,i],t:m,f:[x28]},{t:x,r:[x19,x29,x21,x30,x23,x23],align:lf,id:x31,ts:['','','','',i],text:s32,n:[x6,[10,p],xc,x7,i,l,x8,'']}],style:{'${symbolSelector}':{r:[_,_,x33,x34]}}},tt:{d:0,a:y,data:[]}},"CTA_3":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x19,x20,x21,x22,x23,x23],br:[x20,x20,x20,x24],id:x25,s:[0,xc,i],t:m,f:[x26]},{r:[x19,x19,x21,x22,x23,x23],br:[x20,x20,x20,x24],id:x27,s:[0,xc,i],t:m,f:[x28]},{t:x,r:[x19,x29,x21,x30,x23,x23],align:lf,id:x31,ts:['','','','',i],text:s32,n:[x6,[10,p],xc,x7,i,l,x8,'']}],style:{'${symbolSelector}':{r:[_,_,x21,x35]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-27438554");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("numLoops",0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");if(numLoopsHolder>=3){sym.stop("stop");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder<=3){sym.play(0);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'CTA2'
(function(symbolName){})("CTA2");
//Edge symbol end:'CTA2'

//=========================================================

//Edge symbol: 'CTA_3'
(function(symbolName){})("CTA_3");
//Edge symbol end:'CTA_3'
})})(AdobeEdge.$,AdobeEdge,"EDGE-27438554");