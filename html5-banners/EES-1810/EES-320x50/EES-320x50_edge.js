
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x9='rgba(255,255,255,0.00)',x2='5.0.0',x16='cta2',x5='rgba(0,0,0,0)',x11='rgba(255,255,255,0)',e15='${button-hover}',g='image',e22='${cta2}',b='block',cl='clip',x21='rect(0px 185px 50px 185px)',x18='320px',x19='50px',x20='auto',e13='${cta}',d='display',x14='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x12='rgba(255,255,255,1)',m='rect',x17='0px',x3='6.0.0.400',x4='horizontal',x10='solid',i='none';var g8='cta.png',g6='bg.jpg',g7='logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:x4,rI:n,cn:{dom:[{id:'bg',t:g,r:['0px','0px','320px','50px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'logo',t:g,r:['0px','0px','320px','50px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'cta',t:g,r:['0px','0px','320px','50px','auto','auto'],cl:'rect(0px 185px 50px 185px)',f:[x5,im+g8,'0px','0px']},{id:'button_symbol',symbolName:'button_symbol',t:m,r:['0','0','320','50','auto','auto']},{id:'border',t:m,r:['0px','0px','318px','48px','auto','auto'],f:[x9],s:[1,"rgba(204,204,204,1.00)",x10]},{id:'button-hover',v:i,t:m,r:['201px','15px','119px','21px','auto','auto'],f:[x11],s:[0,"rgb(204, 204, 204)",x10]}],style:{'${Stage}':{isStage:true,r:['null','null','320px','50px','auto','auto'],overflow:'hidden',f:[x12]}}},tt:{d:2000,a:y,data:[["eid81",cl,1000,1000,"swing",e13,[0,185,50,185],[0,306,50,185],{vt:x14}],["eid18",d,2000,0,"linear",e15,i,b],["eid87","tr",0,function(e,d){this.eSA(e,d);},['stop','${button_symbol}',[]]]]}},"button_symbol":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{fi:[0.8,0,1,1,0,0,0,0,x5,0,0,0],t:g,filter:[0.8,0,1,1,0,0,0,0,x5,0,0,0],id:x16,r:[x17,x17,x18,x19,x20,x20],cl:x21,f:[x5,im+g8,x17,x17]}],style:{'${symbolSelector}':{r:[_,_,x18,x19]}}},tt:{d:10000,a:y,data:[["eid89",cl,0,250,"swing",e22,[0,185,50,185],[0,306,50,185],{vt:x14}],["eid90",cl,9750,250,"swing",e22,[0,306,50,185],[0,185,50,185],{vt:x14}]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EES-320x50");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${button-hover}","mouseenter",function(sym,e){sym.getSymbol("button_symbol").play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${button-hover}","mouseleave",function(sym,e){sym.getSymbol("button_symbol").play(9750);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'button_symbol'
(function(symbolName){})("button_symbol");
//Edge symbol end:'button_symbol'
})})(AdobeEdge.$,AdobeEdge,"EES-320x50");