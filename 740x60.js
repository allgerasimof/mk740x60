(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.gerb51x71 = function() {
	this.initialize(img.gerb51x71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,71);


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg5zAEsIAApXMBznAAAIAAJXg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAZAkIAAg0IgZAhIAAAAIgZghIAAA0IgMAAIAAhHIALAAIAbAjIAagjIALAAIAABHg");
	this.shape.setTransform(110.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_1.setTransform(101.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgOAhQgIgFgFgIQgFgJAAgLQAAgJAFgJQAEgIAJgGQAIgEAJAAQAJAAAHABQAIADAFAFIgGAKQgFgFgFgBIgLgCQgFAAgGAEQgFADgEAGQgDAFAAAHQAAAIADAGQAEAFAFAEQAGADAHAAQAGgBAFgCQAFgDAEgDIAGAJQgEAFgIAEQgHACgJAAQgKABgJgFg");
	this.shape_2.setTransform(94.2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgTAhQgJgFgFgJQgEgIgBgLQABgKAEgIQAFgJAJgFQAJgEAKAAQALAAAKAEQAIAFAEAJQAGAIgBAKQABALgGAIQgEAJgIAFQgKAEgLAAQgKAAgJgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAHAAAGgDQAFgEADgFQAEgHAAgHQAAgHgEgFQgDgGgFgDQgGgEgHAAQgGAAgGAEg");
	this.shape_3.setTransform(85.7,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_4.setTransform(77,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AATAkIAAg7IglAAIAAA7IgOAAIAAhHIBBAAIAABHg");
	this.shape_5.setTransform(67.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_6.setTransform(59,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_7.setTransform(50.7,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAZAkIAAg0IgZAhIAAAAIgZghIAAA0IgMAAIAAhHIALAAIAbAjIAagjIALAAIAABHg");
	this.shape_8.setTransform(38,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AAbAkIAAhHIANAAIAABHgAgnAkIAAhHIANAAIAAAVIAMAAQALAAAFAEQAGAEADAGQACAEAAAGQAAAHgCAGQgDAGgHADQgFAEgMAAgAgaAYIAJAAQAKAAAEgEQADgDAAgGQAAgHgDgDQgEgDgJABIgKAAg");
	this.shape_9.setTransform(27.8,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgTA0QgJgFgEgKQgEgLgBgNIABgQQABgJADgHQADgJAGgGQAEgGAJgEIAKgEIAJgCIAIgCQADgBADgEIAHALQgDAEgEABIgIAEIgKABQgFABgFADQgHADgEAFQgEAGgBAHIgDAMIABAAQACgDAEgFQAFgDAFgCQAGgCAFAAQALAAAHAFQAIADAEAHQADAJAAAKQAAALgEAIQgFAIgIAGQgJAEgLAAQgLABgIgGgAgKAAQgGACgDAFQgDAEgBAEQAAAOAGAJQAIAIAJAAQAHAAAGgDQAFgEADgFQACgGABgHQAAgHgDgFQgDgGgEgDQgGgCgHAAQgGAAgFACg");
	this.shape_10.setTransform(18.3,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgDAiQgHgFgFgGQgFgIgBgJIgQAAIAAAeIgNAAIAAhHIANAAIAAAdIAQAAQACgJAEgHQAFgHAIgEQAGgDAKAAQALAAAJAEQAIAFAFAJQAEAIAAAKQAAALgEAIQgFAJgJAFQgHAEgMAAQgKAAgHgDgAgBgRQgGAGgBALQABALAGAHQAFAGAKABQALgBAGgGQAGgHABgLQgBgLgGgGQgGgHgLAAQgKAAgFAHg");
	this.shape_11.setTransform(8,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_12.setTransform(-2.9,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAHAAAGgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_13.setTransform(-14.9,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAUAkIAAg7IgnAAIAAA7IgMAAIAAhHIA/AAIAABHg");
	this.shape_14.setTransform(-23.8,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AARAkIAAgYIgNAAIgRAYIgQAAIAVgbQgEgBgDgDQgEgDgCgCQgDgFABgGQAAgGACgGQAEgFAGgEQAHgDALAAIAXAAIAABHgAgGgTQgEADAAAGQAAADACACQACAEADABQADAAADAAIAOAAIAAgXIgMAAQgIAAgDAEg");
	this.shape_15.setTransform(-36,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_16.setTransform(-44.1,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_17.setTransform(-53.1,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAIgGQAJgEALAAQAJAAAIADQAHAFAEAHQAFAIAAAKIAAADIAAAEIg3AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAEAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape_18.setTransform(-61.6,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAnAtIAAgSIhaAAIAAhHIANAAIAAA7IAaAAIAAg7IAMAAIAAA7IAbAAIAAg7IAMAAIAAA7IANAAIAAAeg");
	this.shape_19.setTransform(-71.2,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_20.setTransform(-81.3,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_21.setTransform(-89.1,2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgTA0QgIgFgFgKQgEgLgBgNIABgQQABgJADgHQADgJAGgGQAEgGAJgEIAKgEIAJgCIAIgCQADgBADgEIAHALQgDAEgEABIgJAEIgJABQgFABgFADQgHADgEAFQgEAGgBAHIgDAMIABAAQACgDAEgFQAFgDAGgCQAFgCAFAAQALAAAHAFQAIADADAHQAEAJABAKQgBALgFAIQgEAIgIAGQgJAEgLAAQgKABgJgGgAgKAAQgGACgDAFQgDAEgBAEQAAAOAGAJQAIAIAJAAQAHAAAGgDQAFgEADgFQACgGABgHQAAgHgDgFQgDgGgEgDQgFgCgIAAQgGAAgFACg");
	this.shape_22.setTransform(-98.2,-1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgcAyQgNgHgIgNQgHgNAAgRQAAgPAHgNQAHgOANgHQANgIAQAAQAQABANAGQANAIAHANQAIANAAAQQAAARgIANQgHAMgNAIQgNAHgQAAQgPABgNgIgAgVgmQgKAFgFALQgGAKAAAMQAAANAGAKQAGAKAJAGQAKAGALAAQANgBAJgFQAKgGAFgKQAGgKAAgNQgBgMgFgKQgGgLgJgFQgKgGgMAAQgLAAgKAGg");
	this.shape_23.setTransform(-109.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.6,-13.8,235.2,27.6);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgjA5IAAgTIAOgPIAOgOQAHgIACgHQAEgHABgIQAAgGgDgCQgCgDgFAAQgEAAgDAEIgFAIIgUgJQADgMAIgHQAKgHAOgBQAKABAIAEQAHAEADAHQAEAHAAAIQAAAMgEAKQgFAJgGAHQgHAIgGAGIgIAHIAoAAIAAAXg");
	this.shape.setTransform(54.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgVAyQgIgHgFgNQgEgMAAgSQAAgRAEgNQAFgMAIgHQAJgIAMAAQANAAAIAIQAJAHAEAMQAFANAAARQAAASgFAMQgEANgIAHQgJAHgNAAQgMAAgJgHgAgHgfQgDAEgBAIQgBAHAAAMQAAANABAHQACAJADACQADAEADAAQAFAAADgEQACgCACgJIABgUIgBgUQgCgHgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_1.setTransform(45.9,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_2.setTransform(38.6,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAA4IAAhNIgKAIIgNgUIAegWIARAAIAABvg");
	this.shape_3.setTransform(31.9,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgbA4IAjhXIgsAAIAAgYIBJAAIAAAQIglBfg");
	this.shape_4.setTransform(25.2,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_5.setTransform(18.3,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgVAyQgIgHgFgNQgEgMAAgSQAAgRAEgNQAFgMAIgHQAJgIAMAAQANAAAIAIQAJAHAEAMQAFANAAARQAAASgFAMQgEANgIAHQgJAHgNAAQgMAAgJgHgAgHgfQgDAEgBAIQgBAHAAAMQAAANABAHQACAJADACQADAEADAAQAFAAADgEQACgCACgJIABgUIgBgUQgCgHgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_6.setTransform(11.1,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgVAyQgIgHgFgNQgEgMAAgSQAAgRAEgNQAFgMAIgHQAJgIAMAAQANAAAIAIQAJAHAEAMQAFANAAARQAAASgFAMQgEANgIAHQgJAHgNAAQgMAAgJgHgAgHgfQgDAEgBAIQgBAHAAAMQAAANABAHQACAJADACQADAEADAAQAFAAADgEQACgCACgJIABgUIgBgUQgCgHgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(2.4,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgjA5IAAgTIAOgPIAOgOQAGgIADgHQAFgHAAgIQgBgGgCgCQgCgDgEAAQgGAAgCAEIgFAIIgUgJQADgMAIgHQAKgHAOgBQAKABAHAEQAIAEADAHQAFAHAAAIQgBAMgFAKQgEAJgGAHQgHAIgGAGIgIAHIAoAAIAAAXg");
	this.shape_8.setTransform(-6.2,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_9.setTransform(-13.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgVAyQgIgHgFgNQgEgMAAgSQAAgRAEgNQAFgMAIgHQAJgIAMAAQANAAAIAIQAJAHAEAMQAFANAAARQAAASgFAMQgEANgIAHQgJAHgNAAQgMAAgJgHgAgHgfQgDAEgBAIQgBAHAAAMQAAANABAHQACAJADACQADAEADAAQAFAAADgEQACgCACgJIABgUIgBgUQgCgHgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_10.setTransform(-20.5,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgVAyQgIgHgFgNQgEgMAAgSQAAgRAEgNQAFgMAIgHQAJgIAMAAQANAAAIAIQAJAHAEAMQAFANAAARQAAASgFAMQgEANgIAHQgJAHgNAAQgMAAgJgHgAgHgfQgDAEgBAIQgBAHAAAMQAAANABAHQACAJADACQADAEADAAQAFAAADgEQACgCACgJIABgUIgBgUQgCgHgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_11.setTransform(-29.2,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgUA2QgJgEgFgGQgGgIAAgJQAAgHADgGQACgGAEgEIAIgEIgHgHQgDgDgBgFQgCgGgBgGQABgJAEgHQAGgGAIgEQAIgEAKAAQALAAAIAEQAJAEAEAGQAGAHgBAJQAAAIgDAHQgFAHgIAEIAAABQAFAAAFADQAEAEACAFQADAGAAAHQABALgGAHQgFAIgJADQgKAEgLAAQgLAAgJgEgAgHALQgDACgCADQgCADAAADQAAAFAEADQADAEAHAAQAJAAADgEQADgDgBgFQAAgFgEgEQgDgCgGgBIgBAAIgHABgAgIgeQgDADAAAEQAAAEADADQACADAGAAIABAAQAGAAADgDQACgDAAgEQAAgFgDgDQgDgCgGAAQgGAAgCADg");
	this.shape_12.setTransform(-38.4,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_13.setTransform(-46.1,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgUA2QgJgEgFgGQgFgIgBgJQABgHACgGQACgGAEgEIAIgEIgHgHQgCgDgCgFQgCgGgBgGQABgJAEgHQAFgGAIgEQAJgEAKAAQALAAAIAEQAJAEAEAGQAGAHAAAJQAAAIgFAHQgEAHgIAEIAAABQAFAAAFADQAEAEADAFQACAGAAAHQAAALgFAHQgFAIgJADQgJAEgMAAQgLAAgJgEgAgGALQgEACgCADQgCADAAADQAAAFADADQAEAEAHAAQAJAAADgEQADgDgBgFQAAgFgDgEQgEgCgGgBIgBAAIgGABgAgIgeQgDADAAAEQAAAEADADQACADAGAAIABAAQAFAAAEgDQACgDAAgEQAAgFgDgDQgDgCgGAAQgGAAgCADg");
	this.shape_14.setTransform(-53.9,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-13.8,121.5,27.6);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape.setTransform(106.4,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_1.setTransform(98.7,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAHAAAGgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_2.setTransform(89.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_3.setTransform(81.4,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_4.setTransform(74.1,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_5.setTransform(66.1,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_6.setTransform(57.4,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAIgGQAJgEALAAQAJAAAIADQAHAFAEAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAEAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape_7.setTransform(48.7,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgTA0QgIgFgFgKQgFgLABgNIABgQQABgJACgHQADgJAFgGQAGgGAIgEIAKgEIAKgCIAHgCQAEgBACgEIAHALQgDAEgEABIgIAEIgLABQgEABgGADQgGADgEAFQgEAGgCAHIgCAMIAAAAQADgDAEgFQAFgDAFgCQAGgCAFAAQAKAAAIAFQAHADAFAHQADAJAAAKQAAALgEAIQgFAIgIAGQgIAEgMAAQgKABgJgGgAgKAAQgFACgDAFQgEAEgBAEQAAAOAGAJQAIAIAJAAQAIAAAEgDQAGgEADgFQACgGABgHQAAgHgDgFQgCgGgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_8.setTransform(40,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgZAyIgGgDIAEgKIAEACIAEABQAEAAAEgDQAEgEADgJIACgEIgjhHIAQAAIAVAuIABAFIACAEIAEgKIAQgtIAPAAIgdBHQgFAMgEAHQgEAIgEACQgFADgFAAQgEAAgDgCg");
	this.shape_9.setTransform(31.7,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgeA4IAAhvIA9AAIAAANIgwAAIAABig");
	this.shape_10.setTransform(24.5,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AARAkIAAgYIgOAAIgRAYIgPAAIAVgbQgEgBgDgDQgEgDgCgCQgCgFgBgGQABgGACgGQAEgFAGgEQAIgDALAAIAWAAIAABHgAgGgTQgEADAAAGQAAADACACQACAEADABQADAAACAAIAPAAIAAgXIgMAAQgHAAgEAEg");
	this.shape_11.setTransform(11.9,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_12.setTransform(3.8,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_13.setTransform(-4.9,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQAAgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAHAFAFAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAFAKQgGAFgHADQgHABgIAAQgKABgJgFgAAWgGQgBgIgFgFQgFgGgKAAQgJABgFAFQgHAFAAAIIAqAAIAAAAg");
	this.shape_14.setTransform(-13.7,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_15.setTransform(-21.7,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgLgVQgGADgDAGQgDAFAAAHQAAAHADAHQACAFAHAEQAFADAGAAQAHAAAGgDQAFgEAEgFQADgHAAgHQAAgHgDgFQgEgGgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_16.setTransform(-30.3,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AAdAtIAAgSIg5AAIAAASIgMAAIAAgeIAJAAQAEgEADgLQADgKABgPIABgTIAwAAIAAA7IAMAAIAAAegAgIgUQgBAOgDAIQgDAKgDADIAiAAIAAgvIgXAAg");
	this.shape_17.setTransform(-39.2,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_18.setTransform(-51.5,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgLgVQgGADgDAGQgDAFAAAHQAAAHADAHQACAFAHAEQAFADAGAAQAHAAAGgDQAFgEAEgFQADgHAAgHQAAgHgDgFQgEgGgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_19.setTransform(-60.5,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgFBIIAAgfIgCAAQgMAAgJgEQgJgGgEgIQgFgIAAgLQAAgJAFgJQAEgIAJgGQAIgEANAAIACAAIAAgnIAMAAIAAAnIACAAQAMAAAIAEQAJAGAFAIQAEAJAAAJQAAALgEAIQgEAIgJAGQgJAEgMAAIgCAAIAAAfgAAHAeIABAAQANAAAGgIQAHgHAAgLQAAgGgDgFQgDgHgGgDQgFgDgIgBIgCAAgAgVgRQgGADgDAGQgCAGAAAGQAAAHADAHQADAFAFAEQAGADAJAAIABAAIAAgzIgCAAQgJABgFADg");
	this.shape_20.setTransform(-70.4,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgQAhQgIgFgGgIQgEgJAAgLQgBgJAFgJQAEgIAJgGQAIgEALAAQAJAAAIADQAIAFADAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAGAFAKABQAIAAAFgCQAGgCAEgEIADAKQgFAFgHADQgHABgIAAQgKABgJgFgAAWgGQgBgIgFgFQgFgGgKAAQgIABgHAFQgFAFgCAIIArAAIAAAAg");
	this.shape_21.setTransform(-79.9,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_22.setTransform(-88.7,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAIgGQAJgEALAAQAJAAAIADQAHAFAEAHQAFAIAAAKIAAADIAAAEIg3AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAEAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape_23.setTransform(-96.7,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgFA4IAAhiIgoAAIAAgNIBbAAIAAANIgnAAIAABig");
	this.shape_24.setTransform(-105.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-13.8,224.9,27.6);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAMA4IAAgcIgzAAIAAgJIAthKIAPAAIgrBGIAiAAIAAgeIAMAAIAAAeIAQAAIAAANIgQAAIAAAcg");
	this.shape.setTransform(151.9,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgUA1QgJgFgFgKIAIgJQAFAIAGAEQAHAEAIAAQAJgBAHgFQAFgGAAgIQAAgKgGgFQgHgFgJAAIgIAAIAAgMIAIAAQAEAAAEgCQAFgCACgFQACgEABgGQgBgIgEgFQgFgFgHAAQgJAAgFAEQgGADgEAHIgHgJQAFgIAIgFQAHgFALAAQAOAAAIAIQAIAHAAAOQABAJgFAHQgEAHgJAEIAAAAQAHABAFADQAFAEACAGQACAGABAGQgBAKgEAIQgFAHgHAEQgJADgJAAQgLAAgJgEg");
	this.shape_1.setTransform(143.1,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_2.setTransform(136,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgUAyQgIgIgEgMQgDgNAAgRQAAgQADgNQAEgNAIgHQAIgHAMgBQAMABAJAHQAIAHADANQAEANAAAQQAAARgEANQgDAMgIAIQgIAHgNAAQgLAAgJgHgAgRghQgFANAAAUQAAAWAGAMQAFALALABQAMgBAFgLQAGgMAAgWQAAgVgGgMQgFgLgMAAQgLAAgGALg");
	this.shape_3.setTransform(128.4,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AghA5IAAgLIAPgPQAJgJAIgJQAHgKAFgJQAFgKAAgJQAAgFgCgEQgCgEgEgCQgEgDgFAAQgFAAgEACQgEACgDAEQgDAEgBAGIgLgEQABgJAFgGQAFgFAGgDQAHgEAIAAQAJABAHAEQAHAEADAGQAEAHAAAHQgBAJgDAKQgEAIgGAJIgNAQIgLAMIgIAIIAyAAIAAAMg");
	this.shape_4.setTransform(119.5,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_5.setTransform(112.3,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgVA4IAnhiIgyAAIAAgNIBBAAIAAAJIgoBmg");
	this.shape_6.setTransform(105.3,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAMA4IAAgcIgzAAIAAgJIAthKIAPAAIgrBGIAiAAIAAgeIAMAAIAAAeIAQAAIAAANIgQAAIAAAcg");
	this.shape_7.setTransform(97,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_8.setTransform(84.5,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgVA4IAnhiIgzAAIAAgNIBDAAIAAAJIgpBmg");
	this.shape_9.setTransform(72.5,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgUA1QgJgFgFgKIAIgJQAFAIAGAEQAHAEAIAAQAJgBAGgFQAGgGAAgIQAAgKgGgFQgHgFgJAAIgJAAIAAgMIAJAAQADAAAFgCQAEgCADgFQADgEAAgGQgBgIgEgFQgFgFgIAAQgHAAgGAEQgGADgDAHIgHgJQAEgIAHgFQAIgFALAAQAOAAAIAIQAIAHABAOQAAAJgFAHQgFAHgIAEIAAAAQAHABAFADQAEAEADAGQADAGgBAGQAAAKgEAIQgEAHgJAEQgHADgKAAQgMAAgIgEg");
	this.shape_10.setTransform(64.2,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_11.setTransform(57.1,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgUAyQgIgIgEgMQgDgNAAgRQAAgQADgNQAEgNAIgHQAIgHAMgBQAMABAJAHQAIAHADANQAEANAAAQQAAARgEANQgDAMgIAIQgIAHgNAAQgLAAgJgHgAgRghQgFANAAAUQAAAWAGAMQAFALALABQAMgBAFgLQAGgMAAgWQAAgVgGgMQgFgLgMAAQgLAAgGALg");
	this.shape_12.setTransform(49.5,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AghA5IAAgLIAPgPQAJgJAIgJQAHgKAFgJQAFgKAAgJQAAgFgCgEQgCgEgEgCQgEgDgFAAQgFAAgEACQgEACgDAEQgDAEgBAGIgLgEQABgJAFgGQAFgFAGgDQAHgEAIAAQAJABAHAEQAHAEADAGQAEAHAAAHQgBAJgDAKQgEAIgGAJIgNAQIgLAMIgIAIIAyAAIAAAMg");
	this.shape_13.setTransform(40.6,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_14.setTransform(33.4,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgVA4IAnhiIgzAAIAAgNIBDAAIAAAJIgpBmg");
	this.shape_15.setTransform(26.4,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AAMA4IAAgcIgzAAIAAgJIAuhKIAOAAIgrBGIAiAAIAAgeIANAAIAAAeIAPAAIAAANIgPAAIAAAcg");
	this.shape_16.setTransform(18.1,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgGAiQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDgAgGgVQgCgDAAgEQAAgDACgCQADgDADAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_17.setTransform(7.6,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_18.setTransform(1.3,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgLgVQgGADgDAGQgDAFAAAHQAAAHADAHQACAFAHAEQAFADAGAAQAHAAAGgDQAFgEAEgFQADgHAAgHQAAgHgDgFQgEgGgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_19.setTransform(-7.4,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAPAkIgfgkIAdgjIARAAIgfAjIAiAkgAggAkIAAhHIANAAIAABHg");
	this.shape_20.setTransform(-15.4,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AARAkIAAgYIgOAAIgRAYIgPAAIAVgbQgEgBgEgDQgDgDgCgCQgCgFgBgGQAAgGADgGQAEgFAHgEQAGgDAMAAIAWAAIAABHgAgHgTQgDADAAAGQAAADACACQACAEADABQADAAACAAIAPAAIAAgXIgMAAQgHAAgFAEg");
	this.shape_21.setTransform(-24,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_22.setTransform(-32.1,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgZAyIgGgDIAEgKIAEACIAEABQAEAAAEgDQAEgEADgJIACgEIgjhHIAQAAIAVAuIABAFIACAEIAEgKIAQgtIAPAAIgdBHQgFAMgEAHQgEAIgEACQgFADgFAAQgEAAgDgCg");
	this.shape_23.setTransform(-40,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_24.setTransform(-47.4,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AARAkIAAgYIgNAAIgRAYIgQAAIAVgbQgEgBgEgDQgDgDgCgCQgCgFAAgGQAAgGADgGQACgFAHgEQAIgDAKAAIAXAAIAABHgAgHgTQgDADAAAGQAAADACACQACAEADABQADAAADAAIAOAAIAAgXIgLAAQgIAAgFAEg");
	this.shape_25.setTransform(-58.7,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_26.setTransform(-66.8,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AAdAtIAAgSIg5AAIAAASIgMAAIAAgeIAJAAQAEgEADgLQADgKABgPIABgTIAwAAIAAA7IAMAAIAAAegAgIgUQgBAOgDAIQgDAKgDADIAiAAIAAgvIgXAAg");
	this.shape_27.setTransform(-75.1,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAbAkIAAhHIANAAIAABHgAgnAkIAAhHIANAAIAAAVIAMAAQALAAAFAEQAGAEADAGQACAEAAAGQAAAHgCAGQgDAGgHADQgFAEgMAAgAgaAYIAJAAQAKAAAEgEQADgDAAgGQAAgHgDgDQgEgDgJABIgKAAg");
	this.shape_28.setTransform(-88.1,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_29.setTransform(-97.7,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_30.setTransform(-106.6,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgFBIIAAgfIgCAAQgMAAgJgEQgJgGgEgIQgFgIAAgLQAAgJAFgJQAEgIAJgGQAIgEANAAIACAAIAAgnIAMAAIAAAnIACAAQAMAAAIAEQAJAGAFAIQAEAJAAAJQAAALgEAIQgEAIgJAGQgJAEgMAAIgCAAIAAAfgAAHAeIABAAQANAAAGgIQAHgHAAgLQAAgGgDgFQgDgHgGgDQgFgDgIgBIgCAAgAgVgRQgGADgDAGQgCAGAAAGQAAAHADAHQADAFAFAEQAGADAJAAIABAAIAAgzIgCAAQgJABgFADg");
	this.shape_31.setTransform(-116.6,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAJgGQAIgEALAAQAJAAAIADQAHAFAEAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAHAFAJABQAIAAAFgCQAGgCAEgEIADAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape_32.setTransform(-126,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_33.setTransform(-134.8,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQAAgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAHAFAFAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAFAKQgGAFgHADQgHABgIAAQgKABgJgFgAAWgGQgBgIgFgFQgFgGgKAAQgJABgFAFQgHAFAAAIIAqAAIAAAAg");
	this.shape_34.setTransform(-142.8,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgGA4IAAhiIgnAAIAAgNIBbAAIAAANIgnAAIAABig");
	this.shape_35.setTransform(-151.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-13.8,317.1,27.6);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAjQgFgDgDgFQgDgFAAgIQAAgHADgFQAEgFAFgCQAGgDAHAAIAIABIAGADQAAgGgDgDQgCgDgEAAQgHAAgEABIgIADIgGgSIAMgEQAHgDAHAAQAQABAHAHQAHAJAAAOIAAArIgVAAIAAgHQgDAEgFABQgEADgGAAQgGAAgFgDgAgEAIQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAFgBIAEgCIAAgEIgEgDIgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape.setTransform(140.2,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgUA1QgJgHgEgKQgFgKAAgPQAAgLACgMQADgMAGgIQAGgJAKgEIAMgFIAJgCQAEgBAEgEIANAUQgEAEgEACIgIADIgJACIgIADQgFADgDAFQgDAFgBAGIAAAAQADgDAGgDQAFgDAHgBQAKABAHAEQAHAEAEAHQAEAIAAAKQAAALgFAIQgEAIgJAGQgIAFgMAAQgMAAgJgFgAgHAKQgEADgCAEQAAAFACAEQABAEADACQADAEAEAAQAHAAADgFQADgEAAgFQAAgGgDgEQgDgEgGAAQgEAAgEACg");
	this.shape_1.setTransform(132.2,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAfAkIgTgiIAAAiIgXAAIAAgiIgSAiIgdAAIAWgkIgUgjIAdAAIAQAgIAAggIAXAAIAAAgIARggIAcAAIgVAjIAXAkg");
	this.shape_2.setTransform(122,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgYAyIgHgEIAIgTIACACIAEABQABAAAAAAQABAAABAAQAAgBABAAQAAgBABAAIACgEIACgEIgghHIAdAAIALAhIACAFIABAFIAAgFIACgFIAJghIAbAAIgcBHQgFAMgEAIQgEAGgEADQgFADgFAAQgGAAgEgCg");
	this.shape_3.setTransform(112,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AglAOQAEAAADgDQADgCADgHQACgFAAgKIACgXIA6AAIAABHIgYAAIAAgvIgNAAIAAADQgBASgEAKQgEAKgHAEQgIAEgMAAg");
	this.shape_4.setTransform(103.2,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgPAhQgJgFgFgIQgEgJgBgLQABgJAEgJQAFgJAIgFQAJgFAKAAQAKAAAHACQAIADAFAFIgLATQgEgEgEgBQgDgCgEAAQgEAAgDACQgDACgDADQgCAEAAAEQAAAFACADQADAEADACQADACAEAAQAFAAAEgCIAHgGIAMARQgGAHgHADQgIADgJAAQgLAAgJgFg");
	this.shape_5.setTransform(95.4,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAKAkIAAgSIgFAAIgLASIgbAAIARgYIgFgEIgFgHQgCgDAAgGQAAgIAEgFQAEgGAIgFQAJgDANAAIAYAAIAABHgAAAgLQgCACAAADQAAADACACQACABAEAAIAEAAIAAgOIgEAAQgFAAgBADg");
	this.shape_6.setTransform(83.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgTAjQgFgDgDgFQgDgFAAgIQAAgHADgFQAEgFAFgCQAGgDAHAAIAIABIAGADQAAgGgDgDQgCgDgEAAQgHAAgEABIgIADIgGgSIAMgEQAHgDAHAAQAQABAHAHQAHAJAAAOIAAArIgVAAIAAgHQgDAEgFABQgEADgGAAQgGAAgFgDgAgEAIQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAFgBIAEgCIAAgEIgEgDIgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_7.setTransform(76.3,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAIAkIgWgiIAAAiIgXAAIAAhHIAXAAIAAAiIATgiIAeAAIgYAiIAbAlg");
	this.shape_8.setTransform(68.9,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgPAhQgJgFgFgIQgEgJgBgLQABgJAEgJQAFgJAIgFQAJgFAKAAQAKAAAHACQAIADAFAFIgLATQgEgEgEgBQgDgCgEAAQgFAAgCACQgEACgCADQgCAEAAAEQAAAFACADQACAEAEACQADACAEAAQAFAAAEgCIAHgGIAMARQgFAHgIADQgIADgJAAQgLAAgJgFg");
	this.shape_9.setTransform(60.4,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AglA1IAAhnIAYAAIAAAGQADgEAFgCQAFgCAGAAQAJAAAIAFQAHAFAEAIQAEAIAAALQAAALgFAHQgFAJgIAGQgJAFgLAAIgHgBIgGgBIAAAggAgHgcQgDABgDAEIAAAWIAFABIAGABQAHgBADgDQAFgFAAgHQgBgGgDgEQgEgFgGAAQgDAAgDACg");
	this.shape_10.setTransform(52.1,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgSAhQgJgFgFgIQgEgJAAgLQAAgJAEgJQAFgJAJgFQAJgFALAAQAKAAAHAEQAIAFAFAHQAEAIABAKIAAAGIgBAFIgwAAQACAFAFADQAFACAEAAQAHAAAEgBIAIgEIAHARQgGAEgHACQgHACgIAAQgLAAgJgFgAANgHQAAgEgDgDQgDgDgGAAQgFAAgDACQgDADgCAFIAZAAIAAAAg");
	this.shape_11.setTransform(43.4,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAJAkIAAgVIgHACIgIABQgOgBgGgIQgGgHAAgMIAAgZIAaAAIAAAVQAAAFACACQACADACAAIAFgBIAEgBIAAgdIAYAAIAABHg");
	this.shape_12.setTransform(35,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgLAkIAAgvIgVAAIAAgYIBBAAIAAAYIgVAAIAAAvg");
	this.shape_13.setTransform(27.6,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgSAhQgJgFgFgIQgEgJAAgLQAAgJAEgJQAFgJAJgFQAJgFALAAQAKAAAHAEQAIAFAFAHQAEAIABAKIAAAGIgBAFIgwAAQACAFAFADQAFACAEAAQAHAAAEgBIAIgEIAHARQgGAEgHACQgHACgIAAQgLAAgJgFgAANgHQAAgEgDgDQgDgDgGAAQgFAAgDACQgDADgCAFIAZAAIAAAAg");
	this.shape_14.setTransform(20,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AALAkIAAgwIgVAAIAAAwIgYAAIAAhHIBFAAIAABHg");
	this.shape_15.setTransform(11.4,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgPAhQgJgFgFgIQgEgJgBgLQABgJAEgJQAFgJAIgFQAJgFAKAAQAKAAAHACQAIADAFAFIgLATQgEgEgEgBQgDgCgEAAQgFAAgCACQgEACgCADQgCAEAAAEQAAAFACADQACAEAEACQADACAEAAQAFAAAEgCIAHgGIAMARQgFAHgIADQgIADgJAAQgLAAgJgFg");
	this.shape_16.setTransform(3.2,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AANAkIAAgkIgZAkIgYAAIAAhHIAYAAIAAAkIAZgkIAYAAIAABHg");
	this.shape_17.setTransform(-5.3,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAWAsIAAgQIgrAAIAAAQIgWAAIAAgmIAJAAIAFgIIADgNIABgMIABgQIA4AAIAAAxIAMAAIAAAmgAgCgRQgBAJgCAGIgEAIIARAAIAAgaIgJAAg");
	this.shape_18.setTransform(-14.5,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_19.setTransform(-21.9,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgUAhQgKgFgFgJQgEgIAAgLQAAgKAEgIQAFgJAKgFQAJgFALAAQAMAAAJAFQAJAFAFAJQAFAIAAAKQAAALgFAIQgFAJgJAFQgJAFgMAAQgLAAgJgFgAgJgKQgFADAAAHQAAAHAFAEQAEAEAFABQAGAAAEgFQAEgEAAgHQAAgGgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_20.setTransform(-29.3,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAMAkIAAgZIgXAAIAAAZIgXAAIAAhHIAXAAIAAAZIAXAAIAAgZIAXAAIAABHg");
	this.shape_21.setTransform(-38.2,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AglA1IAAhnIAYAAIAAAGQADgEAFgCQAFgCAGAAQAKAAAHAFQAHAFAEAIQAEAIAAALQAAALgFAHQgEAJgKAGQgIAFgLAAIgHgBIgGgBIAAAggAgHgcQgDABgDAEIAAAWIAFABIAGABQAHgBADgDQAFgFAAgHQAAgGgEgEQgEgFgGAAQgDAAgDACg");
	this.shape_22.setTransform(-47,2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgYAyIgHgEIAIgTIACACIAEABQABAAAAAAQABAAABAAQAAgBABAAQAAgBABAAIACgEIACgEIgghHIAdAAIALAhIACAFIABAFIAAgFIACgFIAJghIAbAAIgcBHQgFAMgEAIQgEAGgEADQgFADgFAAQgGAAgEgCg");
	this.shape_23.setTransform(-55.8,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAfAkIgTgiIAAAiIgXAAIAAgiIgTAiIgcAAIAXgkIgWgjIAeAAIAQAgIAAggIAXAAIAAAgIARggIAcAAIgVAjIAXAkg");
	this.shape_24.setTransform(-65.8,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgSAhQgIgFgGgIQgEgJAAgLQAAgJAEgJQAGgJAIgFQAJgFALAAQAJAAAIAEQAIAFAFAHQAEAIABAKIAAAGIgBAFIgwAAQADAFAEADQAFACAEAAQAGAAAGgBIAHgEIAHARQgGAEgHACQgHACgIAAQgLAAgJgFgAANgHQAAgEgDgDQgDgDgGAAQgFAAgDACQgEADgBAFIAZAAIAAAAg");
	this.shape_25.setTransform(-75.7,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAWAsIAAgQIgrAAIAAAQIgWAAIAAgmIAJAAIAFgIIADgNIABgMIABgQIA4AAIAAAxIAMAAIAAAmgAgCgRQgBAJgCAGIgEAIIARAAIAAgaIgJAAg");
	this.shape_26.setTransform(-84.6,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAKAkIAAgSIgFAAIgLASIgbAAIARgYIgFgEIgFgHQgCgDAAgGQAAgIAEgFQAEgGAIgFQAJgDANAAIAYAAIAABHgAAAgLQgCACAAADQAAADACACQACABAEAAIAEAAIAAgOIgEAAQgFAAgBADg");
	this.shape_27.setTransform(-96.7,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgTAjQgFgDgDgFQgDgFAAgIQAAgHADgFQAEgFAFgCQAGgDAHAAIAIABIAGADQAAgGgDgDQgCgDgEAAQgHAAgEABIgIADIgGgSIAMgEQAHgDAHAAQAQABAHAHQAHAJAAAOIAAArIgVAAIAAgHQgDAEgFABQgEADgGAAQgGAAgFgDgAgEAIQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAFgBIAEgCIAAgEIgEgDIgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_28.setTransform(-104.2,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AALAkIAAgZIgWAAIAAAZIgXAAIAAhHIAXAAIAAAZIAWAAIAAgZIAZAAIAABHg");
	this.shape_29.setTransform(-112.3,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AANAkIAAgkIgZAkIgYAAIAAhHIAYAAIAAAkIAZgkIAYAAIAABHg");
	this.shape_30.setTransform(-121.3,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAWAsIAAgQIgrAAIAAAQIgWAAIAAgmIAJAAIAFgIIADgNIABgMIABgQIA4AAIAAAxIAMAAIAAAmgAgCgRQgBAJgCAGIgEAIIARAAIAAgaIgJAAg");
	this.shape_31.setTransform(-130.5,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AghA4IAAhvIBBAAIAAAYIgnAAIAAATIAjAAIAAAXIgjAAIAAAVIApAAIAAAYg");
	this.shape_32.setTransform(-139.4,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-13.8,292.5,27.6);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAIgGQAJgEALAAQAJAAAIADQAHAFAEAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAEAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape.setTransform(176,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_1.setTransform(168.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgQAhQgJgFgFgIQgEgJAAgLQgBgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAIAFAEAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAGAFAKABQAHAAAGgCQAGgCADgEIAFAKQgGAFgHADQgIABgHAAQgLABgIgFgAAWgGQgBgIgFgFQgGgGgJAAQgJABgFAFQgHAFgBAIIArAAIAAAAg");
	this.shape_2.setTransform(160.7,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_3.setTransform(152.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_4.setTransform(144.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_5.setTransform(135.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_6.setTransform(128,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AATAkIAAg7IglAAIAAA7IgOAAIAAhHIBBAAIAABHg");
	this.shape_7.setTransform(120.1,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_8.setTransform(111.2,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AAaAtIAAgSIg/AAIAAhHIANAAIAAA7IAlAAIAAg7IANAAIAAA7IAMAAIAAAeg");
	this.shape_9.setTransform(102.6,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_10.setTransform(93.1,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_11.setTransform(84.1,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgZAyIgGgDIAEgKIAEACIAEABQAEAAAEgDQAEgEADgJIACgEIgjhHIAQAAIAVAuIABAFIACAEIAEgKIAQgtIAPAAIgdBHQgFAMgEAHQgEAIgEACQgFADgFAAQgEAAgDgCg");
	this.shape_12.setTransform(75.8,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AAZAkIAAg0IgZAhIAAAAIgZghIAAA0IgMAAIAAhHIALAAIAbAjIAagjIAMAAIAABHg");
	this.shape_13.setTransform(66.9,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAZAkIAAg0IgZAhIAAAAIgZghIAAA0IgMAAIAAhHIALAAIAbAjIAagjIALAAIAABHg");
	this.shape_14.setTransform(53.3,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgTAhQgIgFgGgJQgEgIAAgLQAAgKAEgIQAGgJAIgFQAJgEAKAAQALAAAJAEQAJAFAFAJQAEAIAAAKQAAALgEAIQgFAJgJAFQgJAEgLAAQgKAAgJgEgAgLgVQgGADgDAGQgEAFAAAHQAAAHAEAHQACAFAHAEQAFADAGAAQAIAAAFgDQAFgEADgFQAEgHAAgHQAAgHgEgFQgDgGgFgDQgFgEgIAAQgGAAgFAEg");
	this.shape_15.setTransform(43.7,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AAdAtIAAgSIg5AAIAAASIgMAAIAAgeIAJAAQAEgEADgLQADgKABgPIABgTIAwAAIAAA7IAMAAIAAAegAgIgUQgBAOgDAIQgDAKgDADIAiAAIAAgvIgXAAg");
	this.shape_16.setTransform(34.9,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AAkAkIgbgkIAZgjIAQAAIgbAjIAdAkgAgGAkIAAhHIAMAAIAABHgAgzAkIAcgkIgagjIAQAAIAYAjIgbAkg");
	this.shape_17.setTransform(25.2,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_18.setTransform(15.9,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAPAkIgfgkIAdgjIARAAIgfAjIAiAkgAggAkIAAhHIANAAIAABHg");
	this.shape_19.setTransform(8.9,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_20.setTransform(-2.9,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgVA4IAnhiIgzAAIAAgNIBDAAIAAAJIgpBmg");
	this.shape_21.setTransform(-14.5,-1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgfBFIA1iOIAKAEIg0CPg");
	this.shape_22.setTransform(-21.1,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AAMA4IAAgcIgzAAIAAgJIAthKIAPAAIgrBGIAiAAIAAgeIAMAAIAAAeIAQAAIAAANIgQAAIAAAcg");
	this.shape_23.setTransform(-28.2,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AghA5IAAgLIAPgPQAJgJAIgJQAHgKAFgJQAFgKAAgJQAAgFgCgEQgCgEgEgCQgEgDgFAAQgFAAgEACQgEACgDAEQgDAEgBAGIgLgEQABgJAFgGQAFgFAGgDQAHgEAIAAQAJABAHAEQAHAEADAGQAEAHAAAHQgBAJgDAKQgEAIgGAJIgNAQIgLAMIgIAIIAyAAIAAAMg");
	this.shape_24.setTransform(-36.9,-1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgQAhQgJgFgFgIQgEgJgBgLQAAgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAHAFAFAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAFAKQgGAFgHADQgIABgHAAQgKABgJgFgAAWgGQgBgIgFgFQgGgGgJAAQgJABgFAFQgHAFgBAIIArAAIAAAAg");
	this.shape_25.setTransform(-48.7,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_26.setTransform(-56.4,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_27.setTransform(-63.8,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAZAkIAAg0IgZAhIAAAAIgZghIAAA0IgMAAIAAhHIALAAIAbAjIAagjIALAAIAABHg");
	this.shape_28.setTransform(-72.3,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_29.setTransform(-81.5,2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgTAhQgIgFgGgJQgEgIAAgLQAAgKAEgIQAGgJAIgFQAJgEAKAAQAMAAAIAEQAJAFAFAJQAEAIAAAKQAAALgEAIQgFAJgJAFQgIAEgMAAQgKAAgJgEgAgLgVQgGADgDAGQgDAFgBAHQABAHADAHQACAFAHAEQAFADAGAAQAHAAAGgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgGgEgHAAQgGAAgFAEg");
	this.shape_30.setTransform(-90.7,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgFBIIAAgfIgCAAQgMAAgJgEQgJgGgEgIQgFgIAAgLQAAgJAFgJQAEgIAJgGQAIgEANAAIACAAIAAgnIAMAAIAAAnIACAAQAMAAAIAEQAJAGAFAIQAEAJAAAJQAAALgEAIQgEAIgJAGQgJAEgMAAIgCAAIAAAfgAAHAeIABAAQANAAAGgIQAHgHAAgLQAAgGgDgFQgDgHgGgDQgFgDgIgBIgCAAgAgVgRQgGADgDAGQgCAGAAAGQAAAHADAHQADAFAFAEQAGADAJAAIABAAIAAgzIgCAAQgJABgFADg");
	this.shape_31.setTransform(-100.7,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_32.setTransform(-113.4,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgaAkIAAhHIANAAIAAAVIANAAQAKAAAGAEQAGAEADAGQACAEAAAGQAAAHgDAGQgCAGgHADQgHAEgKAAgAgNAYIAKAAQAJAAAEgEQAEgDAAgGQAAgHgEgDQgFgDgIABIgKAAg");
	this.shape_33.setTransform(-124.4,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AAnAtIAAgSIhaAAIAAhHIANAAIAAA7IAaAAIAAg7IAMAAIAAA7IAbAAIAAg7IAMAAIAAA7IANAAIAAAeg");
	this.shape_34.setTransform(-133.7,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAHAAAGgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_35.setTransform(-144.5,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAaAkIAAg0IgZAhIgBAAIgZghIAAA0IgMAAIAAhHIALAAIAbAjIAagjIALAAIAABHg");
	this.shape_36.setTransform(-154,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgTAhQgJgFgFgJQgEgIgBgLQABgKAEgIQAFgJAJgFQAJgEAKAAQALAAAJAEQAJAFAEAJQAGAIgBAKQABALgGAIQgEAJgJAFQgJAEgLAAQgKAAgJgEgAgMgVQgFADgEAGQgDAFAAAHQAAAHADAHQAEAFAFAEQAGADAGAAQAHAAAGgDQAFgEADgFQAEgHAAgHQAAgHgEgFQgDgGgFgDQgGgEgHAAQgGAAgGAEg");
	this.shape_37.setTransform(-163.6,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AAeA4IAAhiIg8AAIAABiIgNAAIAAhvIBXAAIAABvg");
	this.shape_38.setTransform(-174.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.2,-13.8,364.6,27.6);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AARAkIAAgYIgOAAIgRAYIgPAAIAVgbQgEgBgDgDQgEgDgCgCQgCgFgBgGQAAgGADgGQAEgFAGgEQAIgDALAAIAWAAIAABHgAgGgTQgEADAAAGQAAADACACQACAEADABQADAAACAAIAPAAIAAgXIgMAAQgHAAgEAEg");
	this.shape.setTransform(263.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_1.setTransform(255.8,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAaAtIAAgSIg/AAIAAhHIANAAIAAA7IAlAAIAAg7IANAAIAAA7IAMAAIAAAeg");
	this.shape_2.setTransform(247.3,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAQAkIgggkIAdgjIARAAIgeAjIAhAkgAggAkIAAhHIANAAIAABHg");
	this.shape_3.setTransform(238.8,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgQAhQgIgFgGgIQgEgJAAgLQAAgJAEgJQAEgIAJgGQAIgEALAAQAJAAAIADQAIAFADAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAHAFAJABQAIAAAFgCQAGgCAEgEIADAKQgFAFgHADQgHABgIAAQgKABgJgFgAAWgGQAAgIgGgFQgFgGgKAAQgIABgHAFQgFAFgCAIIArAAIAAAAg");
	this.shape_4.setTransform(230.3,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AATAkIAAg7IgmAAIAAA7IgMAAIAAhHIBAAAIAABHg");
	this.shape_5.setTransform(221.7,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgOAhQgIgFgFgIQgFgJAAgLQAAgJAFgJQAEgIAJgGQAIgEAJAAQAJAAAHABQAIADAFAFIgGAKQgFgFgFgBIgLgCQgFAAgGAEQgFADgEAGQgDAFAAAHQAAAIADAGQAEAFAFAEQAGADAHAAQAGgBAFgCQAFgDAEgDIAGAJQgEAFgIAEQgHACgJAAQgKABgJgFg");
	this.shape_6.setTransform(213.4,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_7.setTransform(205,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_8.setTransform(196,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_9.setTransform(186.9,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_10.setTransform(178.5,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAkAkIgbgkIAZgjIAQAAIgaAjIAcAkgAgGAkIAAhHIAMAAIAABHgAgzAkIAcgkIgagjIAPAAIAZAjIgbAkg");
	this.shape_11.setTransform(168.6,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgOAhQgIgFgFgIQgFgJAAgLQAAgJAFgJQAEgIAJgGQAIgEAJAAQAJAAAHABQAIADAFAFIgGAKQgFgFgFgBIgLgCQgFAAgGAEQgFADgEAGQgDAFAAAHQAAAIADAGQAEAFAFAEQAGADAHAAQAGgBAFgCQAFgDAEgDIAGAJQgEAFgIAEQgHACgJAAQgKABgJgFg");
	this.shape_12.setTransform(159.3,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_13.setTransform(150.8,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgeA4IAAhvIA9AAIAAANIgvAAIAABig");
	this.shape_14.setTransform(143,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_15.setTransform(127.4,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgQAhQgIgFgGgIQgEgJAAgLQgBgJAFgJQAEgIAJgGQAIgEALAAQAJAAAIADQAIAFADAHQAFAIABAKIgBADIgBAEIg2AAQABAKAHAGQAGAFAKABQAIAAAFgCQAGgCAEgEIADAKQgFAFgHADQgHABgIAAQgKABgJgFgAAWgGQgBgIgFgFQgGgGgJAAQgIABgHAFQgFAFgCAIIArAAIAAAAg");
	this.shape_16.setTransform(119.8,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgZAyIgGgDIAEgKIAEACIAEABQAEAAAEgDQAEgEADgJIACgEIgjhHIAQAAIAVAuIABAFIACAEIAEgKIAQgtIAPAAIgdBHQgFAMgEAHQgEAIgEACQgFADgFAAQgEAAgDgCg");
	this.shape_17.setTransform(111.7,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_18.setTransform(103.5,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_19.setTransform(94.3,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_20.setTransform(85.2,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIAAgLQAAgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgLgVQgGADgDAGQgDAFAAAHQAAAHADAHQACAFAHAEQAFADAGAAQAHAAAGgDQAFgEAEgFQADgHAAgHQAAgHgDgFQgEgGgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_21.setTransform(76.8,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_22.setTransform(68,2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_23.setTransform(59.8,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_24.setTransform(51.8,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAJgEAKAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgKAAgJgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQADAFAGAEQAGADAGAAQAIAAAFgDQAGgEACgFQAEgHAAgHQAAgHgEgFQgCgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_25.setTransform(42.9,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AAPAkIgfgkIAdgjIARAAIgeAjIAhAkgAggAkIAAhHIANAAIAABHg");
	this.shape_26.setTransform(34.9,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgQAhQgIgFgGgIQgEgJAAgLQgBgJAFgJQAEgIAJgGQAIgEALAAQAJAAAIADQAIAFADAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAGAFAKABQAIAAAFgCQAGgCAEgEIADAKQgFAFgHADQgHABgIAAQgKABgJgFgAAWgGQgBgIgFgFQgFgGgKAAQgIABgHAFQgFAFgCAIIArAAIAAAAg");
	this.shape_27.setTransform(22.7,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_28.setTransform(14,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_29.setTransform(5,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAIgGQAJgEALAAQAJAAAIADQAHAFAEAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAEAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape_30.setTransform(-3.5,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AAnAtIAAgSIhaAAIAAhHIANAAIAAA7IAaAAIAAg7IAMAAIAAA7IAbAAIAAg7IAMAAIAAA7IANAAIAAAeg");
	this.shape_31.setTransform(-13.1,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_32.setTransform(-23.3,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_33.setTransform(-31,2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgTA0QgIgFgFgKQgEgLgBgNIABgQQABgJADgHQADgJAGgGQAEgGAJgEIAKgEIAJgCIAIgCQADgBADgEIAHALQgDAEgEABIgJAEIgJABQgFABgFADQgHADgEAFQgEAGgBAHIgDAMIABAAQACgDAEgFQAFgDAGgCQAFgCAFAAQALAAAHAFQAIADADAHQAEAJABAKQgBALgFAIQgEAIgIAGQgJAEgLAAQgKABgJgGgAgKAAQgGACgDAFQgDAEgBAEQAAAOAGAJQAIAIAJAAQAHAAAGgDQAFgEADgFQACgGABgHQAAgHgDgFQgDgGgEgDQgFgCgIAAQgGAAgFACg");
	this.shape_34.setTransform(-40.1,-1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgcAyQgNgHgIgNQgHgNAAgRQAAgPAHgNQAHgOANgHQANgIAQAAQAQABANAGQANAIAHANQAIANAAAQQAAARgIANQgHAMgNAIQgNAHgQAAQgPABgNgIgAgVgmQgKAFgFALQgGAKAAAMQAAANAGAKQAGAKAJAGQAKAGALAAQANgBAJgFQAKgGAFgKQAGgKAAgNQgBgMgFgKQgGgLgJgFQgKgGgMAAQgLAAgKAGg");
	this.shape_35.setTransform(-51,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-13.8,333.4,27.6);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AgVAiQgGgDgDgGQgDgHAAgKIAAgsIAXAAIAAAnQAAAEADAEQABADAGABIAFgCQADgBADgEIAAgsIAXAAIAABHIgXAAIAAgHQgDADgFADQgEADgIAAQgHAAgFgDg");
	this.shape.setTransform(-23.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgYAlIAAhHIAYAAIAAAFQABgDADgCQAEgCAFAAIAIABIAEACIgJAXIgEgDIgFAAQgDAAgCABIgCAEIAAAtg");
	this.shape_1.setTransform(-30,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AgHANQgDgCgCgEQgCgDAAgEQAAgDACgEQACgDADgCQADgDAEAAQAFAAADADQAEACACADIABAHQABAEgCADQgCAEgEACQgDADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(-35.6,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AALAlIAAgmQAAgGgDgDQgDgDgFAAIgGABIgFAEIAAAtIgXAAIAAhHIAXAAIAAAFQADgDAFgBQADgDAGAAQAJAAAGADQAGADAEAHQAFAHAAALIAAAqg");
	this.shape_3.setTransform(-42.1,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AgVAhQgIgFgFgJQgFgIAAgLQAAgKAFgIQAFgJAIgFQAJgFAMAAQAMAAAJAFQAJAFAFAJQAFAIAAAKQAAALgFAIQgFAJgJAFQgJAFgMAAQgMAAgJgFgAgJgKQgFADAAAHQAAAHAFAEQAEAEAFABQAGAAAEgFQAEgEAAgHQAAgGgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_4.setTransform(-51,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AgLA3IAAhHIAXAAIAABHgAgJgeQgEgDAAgIQAAgGAEgEQAFgDAEAAQAEAAADACQADABACADQACADAAAEQAAAFgCADQgCAEgDABQgDACgEAAQgEAAgFgEg");
	this.shape_5.setTransform(-57.8,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AgUAzQgJgCgEgGQgGgFAAgIQAAgKAGgFQAHgGALgCIgBgCIAAgCIAAgCIABgBQgJgEgEgGQgEgHgBgIQABgHADgHQAEgGAHgEQAHgEAKAAQAEAAAFACQAEABAFACIAWgEIABATIgLACIAAADIABADQAAAHgDAGQgEAGgGAEQgIACgIABIAAABIAAABIAAABIAAACQAKAAAIADQAIACAEAFQAGAGAAAIQAAAIgGAFQgFAGgIACQgJADgJAAQgLAAgJgDgAgNAaQgBAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAACADABIANABIAKgBQAEgBAAgCQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBgBAAAAQgEgBgHAAQgJAAgEABgAgIgfQgDADAAADQAAADADADQACACAFAAQADAAADgCQADgCAAgEQAAgEgDgCQgCgCgEgBQgFABgCACg");
	this.shape_6.setTransform(-64.1,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AgSAhQgIgFgGgIQgEgJAAgLQAAgJAEgJQAGgJAIgFQAJgFALAAQAJAAAIAEQAIAFAFAHQAEAIABAKIAAAGIgBAFIgwAAQADAFAEADQAFACAEAAQAGAAAGgBIAHgEIAHARQgGAEgHACQgHACgIAAQgLAAgJgFgAANgHQAAgEgDgDQgDgDgGAAQgFAAgDACQgEADgBAFIAZAAIAAAAg");
	this.shape_7.setTransform(-72.1,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgYAlIAAhHIAYAAIAAAFQABgDAEgCQACgCAHAAIAHABIAEACIgJAXIgEgDIgFAAQgDAAgCABIgCAEIAAAtg");
	this.shape_8.setTransform(-78.8,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AgTAjQgFgDgDgFQgDgFAAgIQAAgHADgFQAEgFAFgCQAGgDAHAAIAIABIAGADQAAgGgDgDQgCgDgEAAQgHAAgEABIgIADIgGgSIAMgEQAHgDAHAAQAQABAHAHQAHAJAAAOIAAArIgVAAIAAgHQgDAEgFABQgEADgGAAQgGAAgFgDgAgEAIQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAFgBIAEgCIAAgEIgEgDIgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_9.setTransform(-86.1,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AgOA0QgFgGAAgLIAAhbIAXAAIAABRIABAIQABAAAAAAQAAABABAAQAAAAABAAQAAABAAAAIAEgBIACgCIAGASQgEADgFACQgGACgGAAQgIAAgFgFg");
	this.shape_10.setTransform(-91.8,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AgVAiQgGgDgDgGQgDgHAAgKIAAgsIAXAAIAAAnQAAAEADAEQABADAGABIAFgCQADgBADgEIAAgsIAXAAIAABHIgXAAIAAgHQgDADgFADQgEADgIAAQgHAAgFgDg");
	this.shape_11.setTransform(-99,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AgRAnQgGgIABgOIAAg/IAWAAIAAAUIAVAAIAAAXIgVAAIAAAUQAAADACACQAAABABAAQAAABAAAAQABAAAAAAQABABABAAQADgBADgBIAEgDIAIATIgKAGQgHACgHAAQgMAAgFgIg");
	this.shape_12.setTransform(-105.9,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AgHANQgDgCgDgEQgCgDAAgEQAAgDACgEQADgDADgCQAEgDADAAQAFAAAEADQADACACADIACAHQAAAEgCADQgCAEgDACQgEADgFAAQgDAAgEgDg");
	this.shape_13.setTransform(-111.2,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("AgNAkQgGgCgFgEQgFgDgCgCIALgQIAHAFIAIADIAHABIAEgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgDgEgBIgIgDQgGgBgGgCQgFgCgEgEQgEgEAAgJQAAgHAEgGQADgEAHgEQAGgCAIAAQAHAAAGABQAGACAEACIAGAFIgJARIgIgFQgGgCgFAAIgEABIgBACQAAADAEABIAIACIALADQAGADAEADQAEAFAAAIQAAAKgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_14.setTransform(-117.1,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("AgVA0QgIgFgEgIQgEgIAAgLQAAgLAFgJQAFgIAJgFQAJgFALAAIAGABIAGACIAAgpIAYAAIAABvIgYAAIAAgGQgEAEgEACQgEACgGAAQgKAAgHgFgAgDAFQgEACgCAEQgCADAAAFQAAAFACAEQABADADACIAFABQAEAAAEgBIAGgEIAAgWIgGgDIgFAAIgGABg");
	this.shape_15.setTransform(-125.4,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AgSAhQgJgFgEgIQgFgJAAgLQAAgJAFgJQAEgJAJgFQAJgFALAAQAKAAAHAEQAIAFAFAHQAEAIABAKIAAAGIgCAFIgvAAQACAFAFADQAFACAEAAQAGAAAFgBIAIgEIAHARQgGAEgHACQgIACgHAAQgLAAgJgFgAANgHQAAgEgDgDQgDgDgGAAQgFAAgDACQgDADgCAFIAZAAIAAAAg");
	this.shape_16.setTransform(-133.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.8,-13.8,123,27.6);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape.setTransform(106.6,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_1.setTransform(97.6,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_2.setTransform(88.6,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_3.setTransform(80.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AATAkIAAg7IglAAIAAA7IgOAAIAAhHIBBAAIAABHg");
	this.shape_4.setTransform(72.4,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAZAkIAAg0IgYAhIgBAAIgYghIAAA0IgOAAIAAhHIAMAAIAbAjIAagjIAMAAIAABHg");
	this.shape_5.setTransform(63,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQAMAAAJAEQAIAFAEAJQAFAIABAKQgBALgFAIQgEAJgIAFQgJAEgMAAQgLAAgIgEgAgLgVQgGADgEAGQgCAFAAAHQAAAHACAHQAEAFAGAEQAFADAGAAQAHAAAGgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgGgEgHAAQgGAAgFAEg");
	this.shape_6.setTransform(53.5,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAPAkIgfgkIAdgjIARAAIgfAjIAiAkgAggAkIAAhHIANAAIAABHg");
	this.shape_7.setTransform(45.5,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAVA3IAAg2IgpA2IgNAAIAAhHIANAAIAAA0IApg0IANAAIAABHgAgMgiQgFgDgDgFQgCgFAAgHIAMAAQAAAHADAEQADADAFAAQAFAAADgDQADgEAAgHIANAAQgBAHgCAFQgDAFgGADQgFADgHAAQgHAAgGgDg");
	this.shape_8.setTransform(32.9,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAEgIAJgGQAIgEALAAQAJAAAIADQAHAFAEAHQAFAIABAKIgBADIAAAEIg3AAQABAKAHAGQAHAFAJABQAIAAAFgCQAGgCAEgEIADAKQgFAFgHADQgIABgHAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgIABgHAFQgFAFgBAIIAqAAIAAAAg");
	this.shape_9.setTransform(24.3,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAnAtIAAgSIhaAAIAAhHIANAAIAAA7IAaAAIAAg7IAMAAIAAA7IAbAAIAAg7IAMAAIAAA7IANAAIAAAeg");
	this.shape_10.setTransform(14.7,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgDAiQgHgFgGgGQgEgIgBgJIgQAAIAAAeIgNAAIAAhHIANAAIAAAdIAQAAQACgJAEgHQAFgHAIgEQAGgDAKAAQALAAAJAEQAJAFAEAJQAEAIABAKQgBALgEAIQgFAJgJAFQgIAEgLAAQgKAAgHgDgAgBgRQgGAGgBALQABALAGAHQAFAGALABQAKgBAGgGQAGgHAAgLQAAgLgGgGQgGgHgKAAQgLAAgFAHg");
	this.shape_11.setTransform(2.5,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AARAkIAAgYIgNAAIgRAYIgQAAIAVgbQgEgBgEgDQgDgDgCgCQgDgFAAgGQABgGADgGQACgFAIgEQAGgDALAAIAXAAIAABHgAgHgTQgDADAAAGQAAADACACQACAEADABQADAAACAAIAPAAIAAgXIgLAAQgIAAgFAEg");
	this.shape_12.setTransform(-7.9,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_13.setTransform(-16.1,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_14.setTransform(-23.8,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_15.setTransform(-31.7,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_16.setTransform(-39.5,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AATAkIAAg7IglAAIAAA7IgOAAIAAhHIBBAAIAABHg");
	this.shape_17.setTransform(-48.5,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgZAyIgGgDIAEgKIAEACIAEABQAEAAAEgDQAEgEADgJIACgEIgjhHIAQAAIAVAuIABAFIACAEIAEgKIAQgtIAPAAIgdBHQgFAMgEAHQgEAIgEACQgFADgFAAQgEAAgDgCg");
	this.shape_18.setTransform(-56.9,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgOAhQgIgFgFgIQgFgJAAgLQAAgJAFgJQAEgIAJgGQAIgEAJAAQAJAAAHABQAIADAFAFIgGAKQgFgFgFgBIgLgCQgFAAgGAEQgFADgEAGQgDAFAAAHQAAAIADAGQAEAFAFAEQAGADAHAAQAGgBAFgCQAFgDAEgDIAGAJQgEAFgIAEQgHACgJAAQgKABgJgFg");
	this.shape_19.setTransform(-68.2,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgTAhQgJgFgFgJQgEgIgBgLQABgKAEgIQAFgJAJgFQAJgEAKAAQALAAAJAEQAJAFAEAJQAGAIgBAKQABALgGAIQgEAJgJAFQgJAEgLAAQgKAAgJgEgAgMgVQgFADgEAGQgDAFAAAHQAAAHADAHQAEAFAFAEQAGADAGAAQAHAAAGgDQAFgEADgFQAEgHAAgHQAAgHgEgFQgDgGgFgDQgGgEgHAAQgGAAgGAEg");
	this.shape_20.setTransform(-76.7,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_21.setTransform(-85.5,2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AATAkIAAg7IglAAIAAA7IgOAAIAAhHIBBAAIAABHg");
	this.shape_22.setTransform(-94.5,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_23.setTransform(-103.5,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_24.setTransform(-111.8,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAVA3IAAg2IgpA2IgNAAIAAhHIANAAIAAA0IApg0IANAAIAABHgAgMgiQgFgDgDgFQgCgFAAgHIAMAAQAAAHADAEQADADAFAAQAFAAADgDQADgEAAgHIANAAQgBAHgCAFQgDAFgGADQgFADgHAAQgHAAgGgDg");
	this.shape_25.setTransform(-124,-0.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_26.setTransform(-132.4,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AAdAtIAAgSIg5AAIAAASIgMAAIAAgeIAJAAQAEgEADgLQADgKABgPIABgTIAwAAIAAA7IAMAAIAAAegAgIgUQgBAOgDAIQgDAKgDADIAiAAIAAgvIgXAAg");
	this.shape_27.setTransform(-140.2,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_28.setTransform(-148.3,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgPA3QgIgCgGgFQgFgEgDgEIAIgJIAIAHIAKAFQAFACAFAAQAGAAAHgCQAFgDAEgFQACgEAAgIQAAgIgFgFQgGgFgKAAIgMAAIAAgMIALAAQAEAAAFgCQAEgDACgEQADgEABgFQgBgJgFgGQgGgEgIAAQgIAAgGADQgHADgFAGIgHgJQAGgHAIgEQAKgFAJAAQAKAAAHAEQAIAEAEAGQAEAHAAAJQAAAIgEAGQgEAIgIAEIAAABQAGAAAFADQAEAEADAFQADAGAAAHQgBAKgFAIQgFAHgJAEQgIADgKAAQgJABgGgDg");
	this.shape_29.setTransform(-156.7,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.1,-13.8,276.5,27.6);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAVA3IAAg2IgpA2IgNAAIAAhHIANAAIAAA0IApg0IANAAIAABHgAgMgiQgFgDgDgFQgCgFAAgHIAMAAQAAAHADAEQADADAFAAQAFAAADgDQADgEAAgHIANAAQgBAHgCAFQgDAFgGADQgFADgHAAQgHAAgGgDg");
	this.shape.setTransform(190,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgQAhQgJgFgFgIQgEgJAAgLQgBgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAIAFAEAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAGAFALABQAGAAAGgCQAGgCADgEIAFAKQgGAFgHADQgIABgHAAQgLABgIgFgAAWgGQgBgIgFgFQgGgGgJAAQgJABgFAFQgHAFgBAIIArAAIAAAAg");
	this.shape_1.setTransform(181.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_2.setTransform(172.7,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAdAtIAAgSIg5AAIAAASIgMAAIAAgeIAJAAQAEgEADgLQADgKABgPIABgTIAwAAIAAA7IAMAAIAAAegAgIgUQgBAOgDAIQgDAKgDADIAiAAIAAgvIgXAAg");
	this.shape_3.setTransform(163.9,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AghA5IAAgLIAPgPQAJgJAIgJQAHgKAFgJQAFgKAAgJQAAgFgCgEQgCgEgEgCQgEgDgFAAQgFAAgEACQgEACgDAEQgDAEgBAGIgLgEQABgJAFgGQAFgFAGgDQAHgEAIAAQAJABAHAEQAHAEADAGQAEAHAAAHQgBAJgDAKQgEAIgGAJIgNAQIgLAMIgIAIIAyAAIAAAMg");
	this.shape_4.setTransform(151.7,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgFAkIAAg6IgbAAIAAgNIBBAAIAAANIgbAAIAAA6g");
	this.shape_5.setTransform(140.5,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAJgEAKAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgKAAgJgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQADAFAGAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_6.setTransform(132.4,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AARAkIAAgYIgNAAIgRAYIgQAAIAVgbQgEgBgDgDQgEgDgCgCQgDgFABgGQAAgGACgGQAEgFAGgEQAHgDALAAIAXAAIAABHgAgGgTQgEADAAAGQAAADACACQACAEADABQADAAADAAIAOAAIAAgXIgMAAQgIAAgDAEg");
	this.shape_7.setTransform(120.2,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_8.setTransform(112.1,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AAUAkIAAgeIgnAAIAAAeIgNAAIAAhHIANAAIAAAdIAnAAIAAgdIANAAIAABHg");
	this.shape_9.setTransform(103.1,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_10.setTransform(94.8,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_11.setTransform(87.5,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAJgEAKAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgKAAgJgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQADAFAGAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_12.setTransform(78.9,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_13.setTransform(70.1,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_14.setTransform(60.9,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgWAkIAAhHIAtAAIAAAMIggAAIAAA7g");
	this.shape_15.setTransform(54,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgWAgQgGgGAAgLQAAgHAEgFQADgEAGgDQAHgDAHAAIAJABQAEABAEADIgBgMQgBgFgEgDQgDgDgHAAQgFAAgFACIgJADIgDgKIALgFQAGgBAGAAQAPAAAGAHQAHAIgBAOIAAArIgMAAIAAgJQgDAEgFADQgGADgIAAQgKAAgGgFgAgGAEQgEABgCADQgCACAAAFQAAAFADADQADADAHAAQAGAAAEgDQAFgDACgDIAAgJIgHgEIgJgBIgGABg");
	this.shape_16.setTransform(46.8,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgQAhQgJgFgFgIQgEgJAAgLQgBgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAIAFAEAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAGAFAKABQAHAAAGgCQAGgCADgEIAFAKQgGAFgHADQgIABgHAAQgLABgIgFgAAWgGQgBgIgFgFQgGgGgJAAQgJABgFAFQgHAFgBAIIArAAIAAAAg");
	this.shape_17.setTransform(39.2,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_18.setTransform(30.7,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_19.setTransform(17.9,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAPAkIgfgkIAdgjIARAAIgfAjIAiAkgAggAkIAAhHIANAAIAABHg");
	this.shape_20.setTransform(9.9,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgTAhQgJgFgEgJQgFgIgBgLQABgKAFgIQAEgJAJgFQAIgEALAAQALAAAKAEQAIAFAEAJQAGAIAAAKQAAALgGAIQgEAJgIAFQgKAEgLAAQgLAAgIgEgAgMgVQgFADgEAGQgCAFAAAHQAAAHACAHQAEAFAFAEQAGADAGAAQAIAAAFgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgFgEgIAAQgGAAgGAEg");
	this.shape_21.setTransform(0.9,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_22.setTransform(-7.8,2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgSAyQgNgGgGgOQgIgMAAgSQAAgQAHgMQAHgOAMgHQAMgIARAAQALAAAIADQAJADAGAFIgHALQgFgFgGgCQgIgCgIAAQgLAAgJAGQgKAFgFAKQgGAKAAANQAAAOAGAJQAFAKALAGQAJAGAMAAQAIAAAHgCQAIgDAGgFIAFAKQgEAEgFADIgMAEQgHACgHgBQgQABgNgIg");
	this.shape_23.setTransform(-17.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-13.8,221.7,27.6);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgDAcIAXgcIgXgaIAHgIIAeAiIAAABIgdAigAghAcIAXgcIgXgaIAIgIIAdAiIAAABIgdAig");
	this.shape.setTransform(-22.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgZAyIgGgDIAEgKIAEACIAEABQAEAAAEgDQAEgEADgJIACgEIgjhHIAQAAIAVAuIABAFIACAEIAEgKIAQgtIAPAAIgdBHQgFAMgEAHQgEAIgEACQgFADgFAAQgEAAgDgCg");
	this.shape_1.setTransform(-30.9,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAZAkIAAg0IgZAhIAAAAIgZghIAAA0IgNAAIAAhHIAMAAIAbAjIAagjIAMAAIAABHg");
	this.shape_2.setTransform(-39.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAFgIAHgGQAJgEALAAQAJAAAIADQAHAFAFAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAFAKQgGAFgHADQgHABgIAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgJABgFAFQgHAFAAAIIAqAAIAAAAg");
	this.shape_3.setTransform(-48.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AghAYQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQADgBADgEQACgFACgHQACgHABgMIABgWIAxAAIAABHIgMAAIAAg7IgZAAIAAAMQgCAOgCAKQgDAKgEAFQgDAFgFABQgFADgFAAg");
	this.shape_4.setTransform(-57.7,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgTA0QgIgFgFgKQgFgLAAgNIACgQQABgJACgHQADgJAGgGQAEgGAJgEIALgEIAJgCIAHgCQADgBADgEIAHALQgDAEgEABIgJAEIgKABQgEABgFADQgHADgEAFQgEAGgCAHIgCAMIABAAQACgDAFgFQADgDAHgCQAFgCAFAAQAKAAAIAFQAHADAEAHQAFAJAAAKQAAALgGAIQgEAIgIAGQgJAEgKAAQgLABgJgGgAgKAAQgGACgDAFQgDAEgBAEQAAAOAHAJQAGAIAKAAQAIAAAEgDQAGgEADgFQADgGAAgHQAAgHgDgFQgDgGgFgDQgEgCgIAAQgGAAgFACg");
	this.shape_5.setTransform(-66,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgTAhQgIgFgGgJQgEgIAAgLQAAgKAEgIQAGgJAIgFQAJgEAKAAQAMAAAIAEQAJAFAFAJQAEAIAAAKQAAALgEAIQgFAJgJAFQgIAEgMAAQgKAAgJgEgAgLgVQgGADgDAGQgDAFgBAHQABAHADAHQACAFAHAEQAFADAGAAQAHAAAGgDQAGgEADgFQADgHAAgHQAAgHgDgFQgDgGgGgDQgGgEgHAAQgGAAgFAEg");
	this.shape_6.setTransform(-75,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_7.setTransform(-83.7,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAUAkIAAg7IgnAAIAAA7IgMAAIAAhHIA/AAIAABHg");
	this.shape_8.setTransform(-92.8,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_9.setTransform(-105.3,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgtAkIAAhHIANAAIAAA7IAaAAIAAg7IANAAIAAA7IAaAAIAAg7IAMAAIAABHg");
	this.shape_10.setTransform(-115.6,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgQAhQgJgFgEgIQgFgJgBgLQABgJAEgJQAFgIAHgGQAJgEALAAQAJAAAIADQAHAFAFAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAHAFAKABQAGAAAGgCQAGgCADgEIAFAKQgGAFgHADQgHABgIAAQgLABgIgFgAAWgGQAAgIgGgFQgGgGgJAAQgJABgFAFQgHAFAAAIIAqAAIAAAAg");
	this.shape_11.setTransform(-125.4,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgiA4IAAhvIAIAAIALAAIAKAAQAPAAAJAFQAJAFAEAIQADAIAAAJQAAAJgEAIQgEAHgJAFQgJAFgNAAIgIAAIgJgBIAAArgAgVgqIAAAqIAIABIAIAAQAMAAAHgFQAHgGAAgKQAAgLgGgFQgHgGgMAAIgIAAIgJAAg");
	this.shape_12.setTransform(-133.9,-1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgDABIAAgBIAdgiIAJAIIgYAaIAYAcIgJAHgAgiABIAAgBIAfgiIAHAIIgWAaIAWAcIgHAHg");
	this.shape_13.setTransform(-143.5,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgOAhQgIgFgFgIQgFgJAAgLQAAgJAFgJQAEgIAJgGQAIgEAJAAQAJAAAHABQAIADAFAFIgGAKQgFgFgFgBIgLgCQgFAAgGAEQgFADgEAGQgDAFAAAHQAAAIADAGQAEAFAFAEQAGADAHAAQAGgBAFgCQAFgDAEgDIAGAJQgEAFgIAEQgHACgJAAQgKABgJgFg");
	this.shape_14.setTransform(-155.1,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AAVAkIAAg1IgpA1IgNAAIAAhHIANAAIAAA1IApg1IANAAIAABHg");
	this.shape_15.setTransform(-163.6,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgQAkIgNAAIAAhHIAMgBIAOAAQAOABAIAEQAIAEAAAKQAAAGgEAFQgDAEgHACQAJAAAEAFQAEAEAAAHQAAAKgIAFQgJAFgPAAIgOAAgAgQAaIAHAAIAIAAQAIAAAEgCQAFgEAAgFQAAgGgEgCQgFgDgIgBIgPAAgAgQgDIAQAAQAGgBAEgDQAEgCAAgGQAAgFgFgDQgFgCgGgBIgIABIgGAAg");
	this.shape_16.setTransform(-171.9,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgiA1IAAhnIANAAIAAAIQADgEAHgDQAHgDAGAAQAKAAAIAFQAHAEAEAJQAEAIAAALQAAALgEAHQgFAJgIAFQgJAFgKAAIgLgBQgGgBgDgDIAAAkgAgNglQgFADgDAEIAAAjQAEADAFABIAKABQAHAAAFgDQAGgDADgFQADgGAAgIQAAgLgGgHQgGgHgLAAQgGAAgGADg");
	this.shape_17.setTransform(-180.2,2.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgQAhQgJgFgFgIQgEgJAAgLQgBgJAFgJQAFgIAHgGQAJgEALAAQAJAAAIADQAIAFAEAHQAEAIAAAKIAAADIgBAEIg2AAQABAKAHAGQAGAFAKABQAHAAAGgCQAGgCADgEIAFAKQgGAFgHADQgIABgHAAQgLABgIgFgAAWgGQgBgIgFgFQgGgGgJAAQgJABgFAFQgHAFgBAIIArAAIAAAAg");
	this.shape_18.setTransform(-189,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgSAyQgNgGgGgOQgIgMAAgSQAAgQAHgMQAHgOAMgHQAMgIARAAQALAAAIADQAJADAGAFIgHALQgEgFgIgCQgHgCgIAAQgLAAgJAGQgKAFgFAKQgGAKABANQgBAOAGAJQAFAKAKAGQAKAGAMAAQAIAAAHgCQAIgDAGgFIAFAKQgDAEgGADIgMAEQgHACgHgBQgQABgNgIg");
	this.shape_19.setTransform(-198.3,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.7,-13.8,189.5,27.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAMAkIAAgZIgXAAIAAAZIgXAAIAAhHIAXAAIAAAZIAXAAIAAgZIAXAAIAABHg");
	this.shape.setTransform(112.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgVAhQgIgFgFgJQgFgIAAgLQAAgKAFgIQAFgJAIgFQAKgFALAAQAMAAAJAFQAJAFAFAJQAFAIAAAKQAAALgFAIQgFAJgJAFQgJAFgMAAQgLAAgKgFgAgKgKQgEADAAAHQAAAHAEAEQAFAEAFABQAGAAAEgFQAEgEAAgHQAAgGgEgEQgEgFgGAAQgFAAgFAFg");
	this.shape_1.setTransform(103.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AANAkIAAgkIgZAkIgYAAIAAhHIAYAAIAAAkIAZgkIAYAAIAABHg");
	this.shape_2.setTransform(94.1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgYAkIAAhHIAxAAIAAAXIgaAAIAAAwg");
	this.shape_3.setTransform(86.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgSAhQgJgFgFgIQgEgJAAgLQAAgJAEgJQAFgJAJgFQAJgFALAAQAKAAAHAEQAIAFAFAHQAEAIABAKIAAAGIgBAFIgwAAQACAFAFADQAFACAEAAQAHAAAEgBIAIgEIAHARQgGAEgHACQgHACgIAAQgLAAgJgFgAANgHQAAgEgDgDQgDgDgGAAQgFAAgDACQgDADgCAFIAZAAIAAAAg");
	this.shape_4.setTransform(79.4,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AglA1IAAhnIAYAAIAAAGQADgEAFgCQAFgCAGAAQAKAAAHAFQAHAFAEAIQAEAIAAALQAAALgFAHQgEAJgKAGQgIAFgLAAIgHgBIgGgBIAAAggAgHgcQgDABgDAEIAAAWIAFABIAGABQAHgBADgDQAFgFAAgHQAAgGgEgEQgEgFgGAAQgDAAgDACg");
	this.shape_5.setTransform(70.9,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AANA2IAAgmIgZAmIgYAAIAAhHIAYAAIAAAkIAZgkIAYAAIAABHgAgOgdQgHgEgCgGQgDgGAAgHIAVAAQAAAEACACQABADADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBQACgCAAgEIAUAAQAAAHgDAGQgDAGgFAEQgGAEgJAAQgJAAgGgEg");
	this.shape_6.setTransform(58.5,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAXAkIAAhHIAZAAIAABHgAgvAkIAAhHIAYAAIAAARIAIAAQAMAAAGAEQAIADACAGQADAFAAAHQAAAHgDAGQgDAHgHAFQgIAEgMAAgAgXAPIAGAAQAEAAACgCQADgCAAgDQAAgEgCgCQgCgCgFAAIgGAAg");
	this.shape_7.setTransform(48.3,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgLAkIAAgvIgVAAIAAgYIBBAAIAAAYIgVAAIAAAvg");
	this.shape_8.setTransform(39,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAYAkIAAhHIAXAAIAABHgAguAkIAAhHIAXAAIAAARIAIAAQANAAAFAEQAIADADAGQADAFAAAHQAAAHgDAGQgEAHgIAFQgHAEgMAAgAgXAPIAFAAQAFAAADgCQACgCAAgDQAAgEgCgCQgDgCgFAAIgFAAg");
	this.shape_9.setTransform(29.8,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AglA1IAAhnIAYAAIAAAGQADgEAFgCQAFgCAGAAQAJAAAIAFQAHAFAEAIQAEAIAAALQAAALgFAHQgFAJgIAGQgJAFgLAAIgHgBIgGgBIAAAggAgHgcQgDABgDAEIAAAWIAFABIAGABQAHgBADgDQAFgFAAgHQgBgGgDgEQgEgFgGAAQgDAAgDACg");
	this.shape_10.setTransform(19.8,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAIAkIgWgiIAAAiIgXAAIAAhHIAXAAIAAAiIATgiIAeAAIgYAiIAbAlg");
	this.shape_11.setTransform(11.3,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgLAkIAAgvIgVAAIAAgYIBBAAIAAAYIgVAAIAAAvg");
	this.shape_12.setTransform(3,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgdAzQgOgHgIgNQgHgNgBgSQAAgPAIgNQAHgOANgHQAOgIARAAQARAAANAHQAOAHAIANQAHANABARQgBARgHANQgIANgOAHQgNAIgRAAQgQAAgNgHgAgQgdQgHAEgEAIQgFAIAAAJQAAAJAFAJQAFAHAGAEQAIAFAIAAQALAAAHgFQAHgEADgIQAEgHABgKQgBgJgEgIQgFgIgGgEQgIgEgJAAQgIAAgIAEg");
	this.shape_13.setTransform(-7.2,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgDA4IAAhvIAHAAIAABvg");
	this.shape_14.setTransform(-20.2,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("AgVAiQgGgDgDgGQgDgHgBgKIAAgsIAZAAIAAAnQAAAEACAEQACADAFABIAFgCQADgBACgEIAAgsIAZAAIAABHIgZAAIAAgHQgCADgFADQgEADgIAAQgHAAgFgDg");
	this.shape_15.setTransform(-30.3,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AgYAlIAAhHIAYAAIAAAFQABgDADgCQAEgCAFAAIAHABIAFACIgIAXIgFgDIgEAAQgEAAgCABIgCAEIAAAtg");
	this.shape_16.setTransform(-36.9,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AgHANQgEgCgCgEQgCgDAAgEQAAgDACgEQACgDAEgCQAEgDAEAAQAEAAAEADQADACACADIABAHQAAAEgBADQgCAEgDACQgEADgEAAQgEAAgEgDg");
	this.shape_17.setTransform(-42.5,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("AAAA4IAAhNIgKAIIgNgUIAegWIARAAIAABvg");
	this.shape_18.setTransform(-48.5,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AgaA4IAihXIgsAAIAAgYIBJAAIAAAQIglBfg");
	this.shape_19.setTransform(-55.2,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066CC").s().p("AgYAlIAAhHIAYAAIAAAFQABgDAEgCQACgCAHAAIAHABIAEACIgJAXIgEgDIgFAAQgDAAgCABIgCAEIAAAtg");
	this.shape_20.setTransform(-61.7,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("AgUAhQgJgFgGgJQgEgIAAgLQAAgKAEgIQAGgJAJgFQAIgFAMAAQAMAAAJAFQAJAFAFAJQAFAIAAAKQAAALgFAIQgFAJgJAFQgJAFgMAAQgMAAgIgFgAgKgKQgDADAAAHQAAAHADAEQAEAEAGABQAGAAAEgFQAEgEAAgHQAAgGgEgEQgEgFgGAAQgFAAgFAFg");
	this.shape_21.setTransform(-69.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-13.8,194.8,27.6);


(lib.an0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Eg5zgErMBznAAAIAAJXMhznAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// Слой 17
	this.instance = new lib.Анимация12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.4,10);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(524).to({_off:false},0).to({alpha:1},10).wait(66));

	// Слой 16
	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.2,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(451).to({_off:false},0).to({alpha:1},10).to({_off:true},63).wait(76));

	// Слой 15
	this.instance_2 = new lib.Анимация11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.6,-8.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(449).to({_off:false},0).to({x:45.6,alpha:1},10).wait(141));

	// Слой 12
	this.instance_3 = new lib.Анимация9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.4,10);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(374).to({_off:false},0).to({alpha:1},10).to({_off:true},65).wait(151));

	// Слой 13
	this.instance_4 = new lib.Анимация7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167.1,10);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(307).to({_off:false},0).to({alpha:1},10).to({_off:true},57).wait(226));

	// Слой 11
	this.instance_5 = new lib.Анимация8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(141.1,-8.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(299).to({_off:false},0).to({x:131.1,alpha:1},10).to({_off:true},140).wait(151));

	// Слой 9
	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(44.4,10);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(224).to({_off:false},0).to({alpha:1},10).to({_off:true},65).wait(301));

	// Слой 10
	this.instance_7 = new lib.Анимация4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(147.9,10);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(157).to({_off:false},0).to({alpha:1},10).to({_off:true},57).wait(376));

	// Слой 8
	this.instance_8 = new lib.Анимация5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(134.7,-8.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(149).to({_off:false},0).to({x:124.7,alpha:1},10).to({_off:true},140).wait(301));

	// Слой 7
	this.instance_9 = new lib.Анимация3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(9.8,10);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({alpha:1},10).to({_off:true},65).wait(451));

	// Слой 6
	this.instance_10 = new lib.Анимация2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(190.5,10);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({alpha:1},9).to({_off:true},58).wait(526));

	// Слой 5
	this.instance_11 = new lib.Анимация1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(70.9,-8.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:60.9,alpha:1},9).to({_off:true},140).wait(451));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AARAkIAAgtIghAtIgSAAIAAhHIASAAIAAAtIAhgtIASAAIAABHg");
	this.shape_1.setTransform(-64.8,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgjATQADAAADgCQAEgDADgHQACgHABgNIABgXIA2AAIAABHIgTAAIAAg0IgSAAIAAAHQgBAOgDAJQgDAKgEAFQgDAFgGACQgFACgHAAg");
	this.shape_2.setTransform(-73.9,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AARAkIAAgtIghAtIgSAAIAAhHIASAAIAAAtIAhgtIASAAIAABHg");
	this.shape_3.setTransform(-82.5,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgvAkIAAhHIASAAIAAA2IAVAAIAAg2IARAAIAAA2IAVAAIAAg2IASAAIAABHg");
	this.shape_4.setTransform(-92.8,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgRAhQgJgFgEgIQgFgIAAgMQAAgJAFgJQAEgJAIgEQAJgFALgBQAJAAAIAFQAIADAFAIQAEAHAAAKIgBAGIAAADIgzAAQABAJAGAEQAGAEAIAAQAGAAAFgBIAIgFIAGANQgFAFgIABQgHADgHAAQgLgBgJgEgAARgFQAAgIgDgEQgFgEgIgBQgHABgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_5.setTransform(-102.7,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgkA1IAAhnIATAAIAAAHQADgEAGgCQAGgDAGAAQAKABAHAEQAIAFAEAIQAEAIAAALQAAALgFAIQgFAIgIAFQgJAFgKABIgJgBIgIgDIAAAigAgJghQgFADgDADIAAAcIAHAEQAEABAEAAQAFgBAFgCQAEgDADgEQACgEAAgHQAAgIgFgGQgEgFgJgBQgEAAgEACg");
	this.shape_6.setTransform(-111.2,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgYAzIgHgFIAGgNIADABIAEABQAEAAACgCIAFgJIACgEIghhHIAWAAIAQAoIABAEIACAFIABgFIACgFIANgnIAUAAIgcBHIgJAUQgEAHgEADQgEACgGAAQgFAAgDgBg");
	this.shape_7.setTransform(-123.3,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAWAkIAAgrIgVAaIgBAAIgVgaIAAArIgSAAIAAhHIARAAIAXAeIAXgeIAQAAIAABHg");
	this.shape_8.setTransform(-132.4,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgRAhQgIgFgGgIQgEgIAAgMQAAgJAEgJQAFgJAJgEQAIgFALgBQAJAAAIAFQAIADAEAIQAFAHAAAKIAAAGIgBADIgzAAQABAJAGAEQAGAEAHAAQAHAAAGgBIAIgFIAFANQgGAFgGABQgIADgIAAQgKgBgJgEgAASgFQAAgIgFgEQgEgEgIgBQgHABgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_9.setTransform(-141.4,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgjATQADAAAEgCQADgDACgHQAEgHABgNIAAgXIA2AAIAABHIgTAAIAAg0IgRAAIgBAHQgBAOgDAJQgCAKgEAFQgEAFgFACQgGACgIAAg");
	this.shape_10.setTransform(-150.2,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgTA0QgJgGgFgKQgEgKgBgOQAAgMADgKQACgLAGgKQAGgJALgFIAKgDIAIgCIAHgCQADgBADgEIAJAQQgDADgEACIgJADIgJACIgJAEQgHADgEAIQgEAHAAAIIABAAQADgFAHgEQAHgEAGABQAPAAAJAJQAKAIgBARQABAKgGAJQgEAHgJAFQgIAFgLABQgLgBgJgFgAgLAHQgFADgBAGQAAAHACAFQACAGAEADQAEAEAFAAQAGgBAEgCQAEgCADgFQACgEAAgFQAAgJgFgFQgEgGgJABQgHAAgFAEg");
	this.shape_11.setTransform(-158.6,8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgUAhQgJgFgEgIQgFgJAAgLQAAgKAFgJQAEgIAJgFQAJgEALgBQAMABAJAEQAIAFAFAIQAFAJAAAKQAAALgFAJQgFAIgIAFQgJAEgMABQgLgBgJgEgAgJgRQgFACgCAFQgCAFgBAFQABAJAFAGQAGAFAHABQAJgBAFgFQAGgGAAgJQAAgIgGgGQgFgFgJgBQgFABgEACg");
	this.shape_12.setTransform(-167.5,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgkA1IAAhnIATAAIAAAHQADgEAGgCQAGgDAGAAQAKABAHAEQAIAFAEAIQAEAIAAALQAAALgFAIQgFAIgIAFQgJAFgKABIgJgBIgIgDIAAAigAgJghQgFADgDADIAAAcIAHAEQAEABAEAAQAFgBAFgCQAEgDADgEQACgEAAgHQAAgIgFgGQgEgFgJgBQgEAAgEACg");
	this.shape_13.setTransform(-176.3,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAQAkIAAg2IgfAAIAAA2IgSAAIAAhHIBDAAIAABHg");
	this.shape_14.setTransform(-185.3,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgBAiQgIgDgFgIQgFgGgBgJIgNAAIAAAcIgUAAIAAhHIAUAAIAAAaIANAAQADgNAJgHQAJgIAOAAQAMABAJAEQAIAFAFAIQAFAJAAAKQAAALgFAJQgFAIgIAFQgJAEgMABQgKgBgGgDgAADgNQgDAFAAAIQAAAKADAEQAFAFAIABQAIgBAEgFQAFgFAAgJQAAgIgEgFQgFgGgIAAQgIAAgFAGg");
	this.shape_15.setTransform(-199.1,10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgUAhQgIgFgGgIQgEgJAAgLQAAgKAEgJQAGgIAIgFQAJgEALgBQAMABAIAEQAKAFAEAIQAFAJAAAKQAAALgFAJQgEAIgKAFQgIAEgMABQgLgBgJgEgAgJgRQgFACgCAFQgCAFgBAFQABAJAFAGQAGAFAHABQAIgBAGgFQAGgGgBgJQABgIgGgGQgGgFgIgBQgFABgEACg");
	this.shape_16.setTransform(-210,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgMAlIgKgBIgJAAIAAhHIANgBIAQAAQAPAAAIAFQAIAEAAAKQAAAGgDAFQgEAEgGABIAAAAQAIABAEAFQADADAAAHQABALgJAFQgIAGgQAAIgLAAgAgMAWIAFAAIAHAAQAFAAAEgCQAEgDgBgEQAAgEgDgCQgEgCgFAAIgMAAgAgMgVIAAAQIAMAAQAEAAADgCQADgCAAgEQAAgEgDgCQgDgCgEAAIgHAAIgFAAg");
	this.shape_17.setTransform(-218.4,10.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgIAkIAAg0IgYAAIAAgTIBBAAIAAATIgYAAIAAA0g");
	this.shape_18.setTransform(-226.1,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAaAkIAAhHIASAAIAABHgAgrAkIAAhHIASAAIAAAUIAJAAQANAAAFADQAIAEACAFQAEAFAAAGQgBAIgDAGQgDAGgIAEQgGAEgMAAgAgZAUIAIAAQAHAAADgDQAEgCAAgFQAAgGgEgCQgDgDgHAAIgIAAg");
	this.shape_19.setTransform(-238.4,10.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgTA0QgJgGgFgKQgEgKAAgOQgBgMADgKQACgLAGgKQAGgJALgFIAKgDIAIgCIAHgCQADgBADgEIAKAQQgEADgEACIgIADIgJACIgJAEQgIADgEAIQgEAHAAAIIAAAAQAEgFAGgEQAIgEAHABQAPAAAIAJQAJAIAAARQAAAKgEAJQgFAHgJAFQgIAFgMABQgLgBgIgFgAgLAHQgFADgCAGQAAAHACAFQADAGAEADQAEAEAFAAQAGgBAEgCQAEgCACgFQADgEAAgFQAAgJgFgFQgEgGgJABQgHAAgFAEg");
	this.shape_20.setTransform(-248.2,8.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgUAhQgJgFgFgIQgEgJAAgLQAAgKAEgJQAFgIAJgFQAJgEALgBQAMABAIAEQAJAFAGAIQAEAJAAAKQAAALgEAJQgGAIgJAFQgIAEgMABQgLgBgJgEgAgJgRQgEACgDAFQgCAFAAAFQgBAJAGAGQAGAFAHABQAJgBAFgFQAFgGAAgJQAAgIgFgGQgGgFgIgBQgEABgFACg");
	this.shape_21.setTransform(-257.1,10.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgIAkIAAg0IgYAAIAAgTIBBAAIAAATIgYAAIAAA0g");
	this.shape_22.setTransform(-265.1,10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AANAkIAAgZIgIADQgFACgEgBQgOAAgGgHQgGgHAAgNIAAgXIATAAIAAAVQAAAHADADQADADAFAAIAHgBIAGgCIAAgfIASAAIAABHg");
	this.shape_23.setTransform(-272.8,10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgLAOIAFgDIAFgGIABgDIAAgDIgCABIgCAAQgDAAgDgDQgCgCAAgFQAAgFADgDQADgDAGgBQAGAAADAGQAEAEAAAIQAAAKgFAHQgGAHgIACg");
	this.shape_24.setTransform(-62.2,-3.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgUAhQgJgFgEgJQgFgIAAgLQAAgKAFgIQAEgJAJgFQAJgFALAAQAMAAAJAFQAJAFAEAJQAFAIAAAKQAAALgFAIQgEAJgJAFQgJAEgMABQgLgBgJgEgAgJgRQgFADgCAEQgDAFAAAFQAAAJAGAGQAFAGAIgBQAIABAGgGQAFgFABgKQgBgIgFgGQgGgGgIABQgFAAgEACg");
	this.shape_25.setTransform(-68.7,-7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgLAkIgLAAIgIAAIAAhHIAMAAIAQgBQAPAAAIAEQAJAGAAAJQgBAGgEAFQgDAEgGABIAAABQAIAAADAEQAFAFAAAGQAAALgJAFQgIAGgRAAIgJgBgAgMAVIAFABIAHAAQAGAAADgCQAEgDAAgEQAAgEgFgBQgDgCgGAAIgLAAgAgMgUIAAAPIAMAAQAEAAADgCQADgCAAgEQAAgEgDgCQgDgCgFAAIgGAAIgFABg");
	this.shape_26.setTransform(-77.1,-7.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgIAkIAAg1IgYAAIAAgSIBBAAIAAASIgXAAIAAA1g");
	this.shape_27.setTransform(-84.8,-7.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgOAhQgJgFgFgIQgFgJAAgLQAAgJAFgJQAFgIAIgGQAIgFAKAAQAJAAAIACQAHADAFAFIgIAOQgEgEgFgBQgEgBgFAAQgGAAgDACQgFADgCAEQgDAFAAAFQAAAGADAFQADAEAEADQAEADAGgBQAFABAFgDQAFgCADgEIAJAOQgFAGgHADQgIADgJAAQgLgBgIgEg");
	this.shape_28.setTransform(-92.2,-7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgdAkIAAhHIASAAIAAATIAKAAQALABAHAEQAHADADAGQADAEAAAHQAAAGgDAHQgDAGgIAEQgHAEgLAAgAgLAUIAJAAQAGAAADgDQAEgDgBgFQABgEgEgEQgDgBgGAAIgJAAg");
	this.shape_29.setTransform(-99.6,-7.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgjATQADAAADgCQAEgDACgHQADgHACgNIABgXIA1AAIAABHIgSAAIAAg0IgSAAIgBAHQgBAOgDAJQgDAKgEAFQgDAFgGACQgFACgHAAg");
	this.shape_30.setTransform(-108.2,-7.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgRAhQgJgFgEgIQgFgJAAgLQAAgJAFgJQAEgIAIgGQAJgFALAAQAJAAAIAEQAHAFAGAHQAEAIAAAJIgBAFIAAAFIgzAAQABAIAGAEQAGAFAIgBQAGAAAFgCIAIgEIAGANQgFAFgIACQgHACgHAAQgLgBgJgEgAARgGQAAgGgDgFQgFgFgIAAQgHAAgFAFQgEAEgCAHIAiAAIAAAAg");
	this.shape_31.setTransform(-116.3,-7.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgIAkIAAg1IgYAAIAAgSIBBAAIAAASIgYAAIAAA1g");
	this.shape_32.setTransform(-124,-7.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AARAkIAAgsIghAsIgSAAIAAhHIASAAIAAAsIAhgsIASAAIAABHg");
	this.shape_33.setTransform(-132.2,-7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgLAkIgLAAIgIAAIAAhHIAMAAIAQgBQAPAAAIAEQAJAGAAAJQgBAGgEAFQgDAEgGABIAAABQAIAAADAEQAFAFAAAGQAAALgJAFQgIAGgRAAIgJgBgAgMAVIAFABIAHAAQAGAAADgCQAEgDAAgEQAAgEgFgBQgDgCgGAAIgLAAgAgMgUIAAAPIAMAAQAEAAADgCQADgCAAgEQAAgEgDgCQgDgCgFAAIgGAAIgFABg");
	this.shape_34.setTransform(-140.6,-7.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgWAgQgHgGAAgLQAAgHADgFQAEgFAGgCQAGgDAHAAIAIACQAFABADABQAAgJgDgEQgDgFgHAAQgGAAgFABIgIAEIgEgOQAFgCAGgCIANgDQALABAGADQAGADADAIQADAGAAAKIAAAqIgQAAIAAgIQgDAEgGADQgFADgGAAQgLgBgFgFgAgHAGQgDADgBAFQAAADADADQAEACADAAQAGAAADgCIAFgFIAAgHIgGgDIgHAAQgDAAgEABg");
	this.shape_35.setTransform(-148.6,-7.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgkA1IAAhnIATAAIAAAHQADgEAGgDQAGgCAGAAQAKAAAHAFQAIAFAEAIQAEAIAAALQAAALgFAHQgFAJgIAGQgJAFgKAAIgJgBIgIgCIAAAhgAgJggQgFABgDAFIAAAcIAHADQAEABAEgBQAFABAFgDQAEgDADgEQACgFAAgFQAAgKgFgFQgEgGgJABQgEAAgEACg");
	this.shape_36.setTransform(-156.4,-5.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAZA4IAAhcIgxAAIAABcIgUAAIAAhvIBZAAIAABvg");
	this.shape_37.setTransform(-167.1,-9.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgMAkIgKAAIgJAAIAAhHIANAAIAQgBQAPAAAIAEQAJAGAAAJQAAAGgFAFQgDAEgGABIAAABQAIAAAEAEQADAFAAAGQAAALgIAFQgIAGgRAAIgKgBgAgMAVIAGABIAGAAQAGAAADgCQADgDABgEQAAgEgFgBQgDgCgGAAIgLAAgAgMgUIAAAPIAMAAQAEAAADgCQADgCAAgEQAAgEgDgCQgDgCgFAAIgGAAIgFABg");
	this.shape_38.setTransform(-180.4,-7.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAOAkIAAgVIgKAAIgOAVIgVAAIATgaIgHgDQgDgDgCgEQgCgEAAgFQAAgIADgFQAEgGAIgEQAIgDAMAAIAXAAIAABHgAgDgQQgDADAAAFQAAAFADACQADABAEABIAKAAIAAgUIgIAAQgGAAgDADg");
	this.shape_39.setTransform(-192.2,-7.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgOAhQgJgFgFgIQgFgJAAgLQAAgJAFgJQAFgIAIgGQAIgFAKAAQAJAAAIACQAHADAFAFIgIAOQgEgEgFgBQgEgBgFAAQgGAAgDACQgFADgCAEQgDAFAAAFQAAAGADAFQADAEAEADQAEADAGgBQAFABAFgDQAFgCADgEIAJAOQgFAGgHADQgIADgJAAQgLgBgIgEg");
	this.shape_40.setTransform(-199.7,-7.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgdAkIAAhHIASAAIAAATIAKAAQALABAHAEQAHADADAGQADAEAAAHQAAAGgDAHQgDAGgIAEQgHAEgLAAgAgLAUIAJAAQAGAAADgDQAEgDgBgFQABgEgEgEQgDgBgGAAIgJAAg");
	this.shape_41.setTransform(-207.1,-7.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgIAkIAAg1IgYAAIAAgSIBBAAIAAASIgYAAIAAA1g");
	this.shape_42.setTransform(-214.7,-7.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AARAkIAAgsIghAsIgSAAIAAhHIASAAIAAAsIAhgsIASAAIAABHg");
	this.shape_43.setTransform(-222.8,-7.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgIAkIAAg1IgYAAIAAgSIBBAAIAAASIgYAAIAAA1g");
	this.shape_44.setTransform(-230.9,-7.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgXAgQgGgGAAgLQAAgHAEgFQADgFAGgCQAGgDAHAAIAIACQAFABACABQABgJgDgEQgDgFgHAAQgGAAgFABIgHAEIgGgOQAFgCAHgCIANgDQALABAGADQAHADACAIQADAGAAAKIAAAqIgQAAIAAgIQgDAEgGADQgFADgGAAQgKgBgHgFgAgHAGQgEADAAAFQABADADADQACACAFAAQAFAAADgCIAEgFIAAgHIgFgDIgHAAQgDAAgEABg");
	this.shape_45.setTransform(-238.3,-7.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgkA1IAAhnIATAAIAAAHQADgEAGgDQAGgCAGAAQAKAAAHAFQAIAFAEAIQAEAIAAALQAAALgFAHQgFAJgIAGQgJAFgKAAIgJgBIgIgCIAAAhgAgJggQgFABgDAFIAAAcIAHADQAEABAEgBQAFABAFgDQAEgDADgEQACgFAAgFQAAgKgFgFQgEgGgJABQgEAAgEACg");
	this.shape_46.setTransform(-246.1,-5.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgTA0QgJgFgFgKQgEgLAAgOQAAgLACgLQACgMAGgJQAGgJALgFIAKgEIAIgBIAHgCQADgCADgDIAJAPQgDAFgEACIgIACIgJACIgKAEQgHADgEAIQgEAHAAAJIABAAQADgHAHgDQAGgDAIgBQAPAAAIAKQAKAIgBAQQAAALgEAIQgFAIgJAGQgIAFgMAAQgKgBgJgFgAgLAGQgFAFgBAFQAAAHABAGQADAFAEAEQAFACAEAAQAGABAEgDQAFgDACgEQACgFAAgFQAAgHgFgGQgEgFgJgBQgHAAgFAEg");
	this.shape_47.setTransform(-255.2,-9.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgUAhQgJgFgEgJQgFgIAAgLQAAgKAFgIQAEgJAJgFQAJgFALAAQAMAAAJAFQAJAFAEAJQAFAIAAAKQAAALgFAIQgEAJgJAFQgJAEgMABQgLgBgJgEgAgJgRQgFADgCAEQgDAFAAAFQAAAJAGAGQAFAGAIgBQAIABAGgGQAFgFABgKQgBgIgFgGQgGgGgIABQgFAAgEACg");
	this.shape_48.setTransform(-264,-7.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AAMAkIgcgkIAZgjIAYAAIgcAiIAfAlgAgjAkIAAhHIASAAIAABHg");
	this.shape_49.setTransform(-275.6,-7.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgWAgQgHgGAAgLQAAgHADgFQAEgFAGgCQAGgDAHAAIAIACQAFABADABQAAgJgDgEQgDgFgHAAQgGAAgFABIgIAEIgEgOQAFgCAGgCIANgDQALABAGADQAGADADAIQADAGAAAKIAAAqIgQAAIAAgIQgDAEgGADQgFADgGAAQgLgBgFgFgAgHAGQgDADgBAFQAAADADADQAEACADAAQAGAAADgCIAFgFIAAgHIgGgDIgHAAQgDAAgEABg");
	this.shape_50.setTransform(-284,-7.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAUA4Igtg4IAAA4IgTAAIAAhvIATAAIAAA1IAsg1IAXAAIgtA0IAwA7g");
	this.shape_51.setTransform(-292.3,-9.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#999999").ss(1,1,1).p("AAAi/IAAF/");
	this.shape_52.setTransform(-36.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(600));

	// Слой 2
	this.instance_12 = new lib.gerb51x71();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-340,-26,0.686,0.687);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(600));

	// wh
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AhQBRQgigiAAgvQAAgvAigiQAhghAvAAQAwAAAhAhQAiAiAAAvQAAAvgiAiQghAigwAAQgvAAghgig");
	this.shape_53.setTransform(-298.5,-51.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AhRBRQghgiAAgvQAAgvAhgiQAjghAuAAQAwAAAhAhQAiAiAAAvQAAAvgiAiQghAigwAAQguAAgjgig");
	this.shape_54.setTransform(-328.5,-51.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066CC").s().p("AhRBRQghgiAAgvQAAgvAhgiQAjghAuAAQAvAAAiAhQAiAiAAAvQAAAvgiAiQgiAigvAAQguAAgjgig");
	this.shape_55.setTransform(-358.5,-51.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Eg5zAEsIAApXMBznAAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371,-63,742,94);


// stage content:
(lib.mk740x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.stopCycle) == "undefined") {     
		    this.btnMain.addEventListener( "click", function() {
		        window.callClick();
		    } );
		    this.stopCycle = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMain
	this.btnMain = new lib.btnMain();
	this.btnMain.parent = this;
	this.btnMain.setTransform(370,30);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.btnMain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// an0
	this.an0 = new lib.an0();
	this.an0.parent = this;
	this.an0.setTransform(370,30);

	this.timeline.addTween(cjs.Tween.get(this.an0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(369.5,-3,741,93.5);
// library properties:
lib.properties = {
	width: 740,
	height: 60,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/gerb51x71.png", id:"gerb51x71"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;