/*
 * Copyright (c) 2014, Yasunobu Imamura
 * This program generated by haXe.
 * So, this program include haXe libraries.
 * haXe-libraries's License is following.
 *
 * Copyright (c) 2005, The haXe Project Contributors
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE HAXE PROJECT CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE HAXE PROJECT CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE.
 */
(function ($hx_exports) { "use strict";
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
IMap.__name__ = true;
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var gv = {};
gv.Gv = function() { };
gv.Gv.__name__ = true;
gv.Gv.newTime = $hx_exports.n = function(time) {
	gv.GvCore.newTime(time);
};
gv.Gv.circle = $hx_exports.c = function(x,y,r) {
	if(r == null) r = 0.5;
	var ret = new gv.GvSnapItem_Circle(x,y,r);
	gv.GvCore.addItem(ret);
	return ret;
};
gv.Gv.text = $hx_exports.t = function(text,x,y,r) {
	if(r == null) r = 0.5;
	var ret = new gv.GvSnapItem_Text(text,x,y,r);
	gv.GvCore.addItem(ret);
	return ret;
};
gv.Gv.polygon = $hx_exports.p = function() {
	var arg = arguments;
	var ret = new gv.GvSnapItem_Polygon();
	var _g1 = 0;
	var _g;
	_g = js.Boot.__cast(arg.length / 2 , Int);
	while(_g1 < _g) {
		var i = _g1++;
		ret.add(arg[i * 2],arg[i * 2 + 1]);
	}
	gv.GvCore.addItem(ret);
	return ret;
};
gv.Gv.line = $hx_exports.l = function(fromX,fromY,toX,toY,r) {
	if(r == null) r = 0.5;
	var ret = new gv.GvSnapItem_Polygon();
	var odx = toX - fromX;
	var ody = toY - fromY;
	var rate = r / Math.sqrt(odx * odx + ody * ody);
	var dx = odx * rate;
	var dy = ody * rate;
	ret.add(toX + dy * (0.05 / (1 + Math.sqrt(2))),toY + dx * (0.05 / (1 + Math.sqrt(2))));
	ret.add(toX - dx * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) - dy * 0.05,toY - dy * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) + dx * 0.05);
	ret.add(fromX + dx * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) - dy * 0.05,fromY + dy * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) + dx * 0.05);
	ret.add(fromX - dy * (0.05 / (1 + Math.sqrt(2))),fromY + dx * (0.05 / (1 + Math.sqrt(2))));
	ret.add(fromX + dy * (0.05 / (1 + Math.sqrt(2))),fromY - dx * (0.05 / (1 + Math.sqrt(2))));
	ret.add(fromX + dx * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) + dy * 0.05,fromY + dy * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) - dx * 0.05);
	ret.add(toX - dx * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) + dy * 0.05,toY - dy * (0.05 * Math.sqrt(2) / (1 + Math.sqrt(2))) - dx * 0.05);
	ret.add(toX + dy * (0.05 / (1 + Math.sqrt(2))),toY - dx * (0.05 / (1 + Math.sqrt(2))));
	gv.GvCore.addItem(ret);
	return ret;
};
gv.Gv.out = $hx_exports.o = function(line) {
	gv.GvCore.addOut(line);
};
gv.Gv.autoMode = $hx_exports.a = function() {
	gv.GvCore.autoMode();
};
gv.GvCore = function() { };
gv.GvCore.__name__ = true;
gv.GvCore.newTime = function(time) {
	if(time == null) gv.GvCore.nowTime = Std["int"](0.1 + Math.max(0,gv.GvCore.maxTime + 1)); else {
		gv.GvCore.maxTime = Std["int"](0.1 + Math.max(gv.GvCore.maxTime,time));
		gv.GvCore.nowTime = time;
	}
};
gv.GvCore.addItem = function(item) {
	if(gv.GvCore.emptyFlag) {
		gv.GvCore.emptyFlag = false;
		gv.GvCore.minX = item.getMinX();
		gv.GvCore.minY = item.getMinY();
		gv.GvCore.maxX = item.getMaxX();
		gv.GvCore.maxY = item.getMaxY();
		gv.GvCore.maxTime = gv.GvCore.nowTime;
	} else {
		gv.GvCore.minX = Math.min(gv.GvCore.minX,item.getMinX());
		gv.GvCore.minY = Math.min(gv.GvCore.minY,item.getMinY());
		gv.GvCore.maxX = Math.max(gv.GvCore.maxX,item.getMaxX());
		gv.GvCore.maxY = Math.max(gv.GvCore.maxY,item.getMaxY());
		gv.GvCore.maxTime = Std["int"](0.1 + Math.max(gv.GvCore.maxTime,gv.GvCore.nowTime));
	}
	if(gv.GvCore.snapMap.exists(gv.GvCore.nowTime)) {
		var snap = gv.GvCore.snapMap.get(gv.GvCore.nowTime);
		snap.addItem(item);
	} else {
		var snap1 = new gv.GvSnap(gv.GvCore.nowTime);
		gv.GvCore.snapMap.set(gv.GvCore.nowTime,snap1);
		snap1.addItem(item);
	}
};
gv.GvCore.addOut = function(line) {
	if(gv.GvCore.outMap.exists(gv.GvCore.nowTime)) {
		var before = gv.GvCore.outMap.get(gv.GvCore.nowTime);
		gv.GvCore.outMap.set(gv.GvCore.nowTime,"" + before + line + "\n");
	} else gv.GvCore.outMap.set(gv.GvCore.nowTime,"" + line + "\n");
};
gv.GvCore.getMinX = function() {
	return gv.GvCore.minX;
};
gv.GvCore.getMinY = function() {
	return gv.GvCore.minY;
};
gv.GvCore.getMaxX = function() {
	return gv.GvCore.maxX;
};
gv.GvCore.getMaxY = function() {
	return gv.GvCore.maxY;
};
gv.GvCore.getTimeList = function() {
	var ret = new Array();
	var $it0 = gv.GvCore.snapMap.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		ret.push(k);
	}
	return ret;
};
gv.GvCore.getSnap = function(time) {
	return gv.GvCore.snapMap.get(time);
};
gv.GvCore.getOut = function(time) {
	if(gv.GvCore.outMap.exists(time)) return gv.GvCore.outMap.get(time); else return "";
};
gv.GvCore.getAutoModeCount = function() {
	return gv.GvCore.autoModeCount;
};
gv.GvCore.sendInput = function(time,x,y) {
	if(gv.GvCore.inputInt_ != null) {
		var func = gv.GvCore.inputInt_;
		gv.GvCore.inputInt_ = null;
		func(time,Math.round(x),Math.round(y));
	} else if(gv.GvCore.inputFloat_ != null) {
		var func1 = gv.GvCore.inputFloat_;
		gv.GvCore.inputFloat_ = null;
		func1(time,x,y);
	}
};
gv.GvCore.gvGetColorFromIndex = function(idx) {
	return gv.GvCore.colors[idx];
};
gv.GvCore.inputInt = function(callback) {
	gv.GvCore.inputInt_ = callback;
	gv.GvCore.inputFloat_ = null;
};
gv.GvCore.inputFloat = function(callback) {
	gv.GvCore.inputFloat_ = callback;
	gv.GvCore.inputInt_ = null;
};
gv.GvCore.setDragModeInt = function(start,move,end) {
	gv.GvCore.dragStartInt_ = start;
	gv.GvCore.dragStartFloat_ = null;
	gv.GvCore.dragMoveInt_ = move;
	gv.GvCore.dragMoveFloat_ = null;
	gv.GvCore.dragEnd_ = end;
};
gv.GvCore.setDragModeFloat = function(start,move,end) {
	gv.GvCore.dragStartInt_ = start;
	gv.GvCore.dragStartFloat_ = null;
	gv.GvCore.dragMoveInt_ = move;
	gv.GvCore.dragMoveFloat_ = null;
	gv.GvCore.dragEnd_ = end;
};
gv.GvCore.isDragMode = function() {
	return gv.GvCore.dragStartInt_ != null || gv.GvCore.dragStartFloat_ != null;
};
gv.GvCore.isNowDrag = function() {
	return gv.GvCore.nowDragFlag;
};
gv.GvCore.sendDragStart = function(time,x,y) {
	gv.GvCore.sendDragEnd();
	if(gv.GvCore.dragStartInt_ != null) {
		var func = gv.GvCore.dragStartInt_;
		gv.GvCore.nowDragFlag = true;
		func(time,Math.round(x),Math.round(y));
	} else if(gv.GvCore.dragStartFloat_ != null) {
		var func1 = gv.GvCore.dragStartFloat_;
		gv.GvCore.nowDragFlag = true;
		func1(time,x,y);
	}
};
gv.GvCore.sendDragMove = function(time,x,y) {
	if(gv.GvCore.nowDragFlag) {
		if(gv.GvCore.dragMoveInt_ != null) {
			var func = gv.GvCore.dragMoveInt_;
			func(Math.round(x),Math.round(y));
		} else if(gv.GvCore.dragMoveFloat_ != null) {
			var func1 = gv.GvCore.dragMoveFloat_;
			func1(x,y);
		}
	}
};
gv.GvCore.sendDragEnd = function() {
	if(gv.GvCore.nowDragFlag) {
		if(gv.GvCore.dragEnd_ != null) {
			var func = gv.GvCore.dragEnd_;
			func();
		}
		gv.GvCore.nowDragFlag = false;
	}
};
gv.GvCore.autoMode = function() {
	++gv.GvCore.autoModeCount;
};
gv.GvCore.rgb = function(r,g,b) {
	return "rgb(" + r * 100 + "%, " + g * 100 + "%, " + b * 100 + "%)";
};
gv.GvMain = function() { };
gv.GvMain.__name__ = true;
gv.GvMain.main = function() {
	window.onload = function(e) {
		gv.GvMain.canvas = window.document.createElement("canvas");
		window.document.body.appendChild(gv.GvMain.canvas);
		gv.GvMain.canvas.style.position = "absolute";
		gv.GvMain.canvas.style.left = "0px";
		gv.GvMain.canvas.style.top = "0px";
		gv.GvMain.canvas.style.width = "100%";
		gv.GvMain.canvas.style.height = "100%";
		gv.GvMain.canvas.width = window.innerWidth;
		gv.GvMain.canvas.height = window.innerHeight;
		gv.GvMain.ctx = gv.GvMain.canvas.getContext("2d");
		gv.GvMain.div = window.document.createElement("pre");
		window.document.body.appendChild(gv.GvMain.div);
		gv.GvMain.div.style.position = "absolute";
		gv.GvMain.div.style.left = "0px";
		gv.GvMain.div.style.bottom = "0px";
		window.onresize = function(e1) {
			gv.GvMain.canvas.width = window.innerWidth;
			gv.GvMain.canvas.height = window.innerHeight;
			gv.GvMain.updateUI();
		};
		window.onkeydown = function(e2) {
			var _g = e2.keyCode;
			switch(_g) {
			case 37:
				gv.GvMain.autoMode = false;
				if(1 <= gv.GvMain.now) {
					--gv.GvMain.now;
					gv.GvMain.updateTime();
				}
				break;
			case 38:
				gv.GvMain.updateSelf(null,false,4,false,false);
				break;
			case 39:
				gv.GvMain.autoMode = false;
				if(gv.GvMain.timeList != null && gv.GvMain.now < gv.GvMain.timeList.length - 1) {
					++gv.GvMain.now;
					gv.GvMain.updateTime();
				}
				break;
			case 40:
				gv.GvMain.updateSelf(null,false,-4,false,false);
				break;
			case 97:
				gv.GvMain.onNumpadKey(-0.7,0.7);
				break;
			case 98:
				gv.GvMain.onNumpadKey(0,1);
				break;
			case 99:
				gv.GvMain.onNumpadKey(0.7,0.7);
				break;
			case 100:
				gv.GvMain.onNumpadKey(-1,0);
				break;
			case 102:
				gv.GvMain.onNumpadKey(1,0);
				break;
			case 103:
				gv.GvMain.onNumpadKey(-0.7,-0.7);
				break;
			case 104:
				gv.GvMain.onNumpadKey(0,-1);
				break;
			case 105:
				gv.GvMain.onNumpadKey(0.7,-0.7);
				break;
			}
		};
		var mouseDownFlag = false;
		window.onmousedown = function(e3) {
			mouseDownFlag = true;
			gv.GvMain.myMouseX = e3.x;
			gv.GvMain.myMouseY = e3.y;
			gv.GvMain.updateSelf(null,false,0,false,e3.shiftKey);
			return false;
		};
		window.onmouseup = function(e4) {
			mouseDownFlag = false;
			gv.GvMain.myMouseX = e4.x;
			gv.GvMain.myMouseY = e4.y;
			gv.GvMain.updateSelf(null,false,0,false,false);
			if(gv.GvCore.isDragMode()) {
				if(gv.GvCore.isNowDrag()) {
					gv.GvCore.sendDragEnd();
					gv.GvMain.updateTimeList();
				}
			}
			return false;
		};
		window.onmousemove = function(e5) {
			gv.GvMain.myMouseX = e5.x;
			gv.GvMain.myMouseY = e5.y;
			gv.GvMain.updateSelf(null,mouseDownFlag,0,false,false);
			return false;
		};
		window.onmousewheel = function(e6) {
			gv.GvMain.myMouseX = e6.x;
			gv.GvMain.myMouseY = e6.y;
			var wheel;
			if(0 < e6.detail) wheel = -1; else if(e6.detail < 0) wheel = 1; else wheel = 0;
			if(wheel == 0) {
				var wheelDelta = e6.wheelDelta;
				if(0 < wheelDelta) wheel = 1; else if(wheelDelta < 0) wheel = -1; else wheel = 0;
			}
			gv.GvMain.updateSelf(null,false,wheel,false,false);
			return false;
		};
		var beforeTouchX = null;
		var beforeTouchY = null;
		var beforeTouchD = null;
		var baseNow = 0;
		var beforeTouchLength = 0;
		var touchK = 12.425134878021496 / Math.log(2);
		var touchIds = new haxe.ds.IntMap();
		var touchFunc = function(e7) {
			if(beforeTouchLength != e7.touches.length) beforeTouchX = null;
			beforeTouchLength = e7.touches.length;
			if(1 <= e7.touches.length) {
				var _g1 = 0;
				var _g2 = e7.touches.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var t = e7.touches.item(i);
					if(!touchIds.exists(t.identifier)) beforeTouchX = null;
				}
				var sumX = 0;
				var sumY = 0;
				var _g11 = 0;
				var _g3 = e7.touches.length;
				while(_g11 < _g3) {
					var i1 = _g11++;
					var t1 = e7.touches.item(i1);
					sumX += t1.pageX;
					sumY += t1.pageY;
				}
				var x = sumX / e7.touches.length;
				var y = sumY / e7.touches.length;
				var sumD = 0;
				var _g12 = 0;
				var _g4 = e7.touches.length;
				while(_g12 < _g4) {
					var i2 = _g12++;
					var t2 = e7.touches.item(i2);
					var dx = t2.pageX - x;
					var dy = t2.pageY - y;
					sumD += Math.sqrt(dx * dx + dy * dy + 0.00001);
				}
				var d = sumD / e7.touches.length;
				if(beforeTouchX != null) {
					if(3 <= e7.touches.length) {
						gv.GvMain.autoMode = false;
						var fPos = 10.0 * (x - beforeTouchX) / gv.GvMain.canvas.width;
						var newNow;
						newNow = baseNow - (0 <= fPos?Math.floor(fPos):Math.ceil(fPos));
						if(newNow != gv.GvMain.now && gv.GvMain.timeList != null && 0 <= newNow && newNow < gv.GvMain.timeList.length) {
							gv.GvMain.now = newNow;
							gv.GvMain.updateTime();
						}
					} else if(2 == e7.touches.length) {
						var wheel1 = Math.log(d / beforeTouchD) * touchK;
						gv.GvMain.myMouseX = x;
						gv.GvMain.myMouseY = y;
						gv.GvMain.updateSelf(null,false,wheel1,false,false);
						beforeTouchX = x;
						beforeTouchY = y;
						beforeTouchD = d;
					} else if(1 == e7.touches.length) {
						gv.GvMain.myMouseX = x;
						gv.GvMain.myMouseY = y;
						gv.GvMain.updateSelf(null,true,0,false,false);
						beforeTouchX = x;
						beforeTouchY = y;
						beforeTouchD = d;
					}
				} else {
					gv.GvMain.myMouseX = x;
					gv.GvMain.myMouseY = y;
					gv.GvMain.updateSelf(null,false,0,false,false);
					beforeTouchX = x;
					beforeTouchY = y;
					beforeTouchD = d;
					baseNow = gv.GvMain.now;
				}
			}
			touchIds = new haxe.ds.IntMap();
			var _g13 = 0;
			var _g5 = e7.touches.length;
			while(_g13 < _g5) {
				var i3 = _g13++;
				var t3 = e7.touches.item(i3);
				touchIds.set(t3.identifier,true);
			}
			e7.preventDefault();
			return false;
		};
		window.ontouchmove = touchFunc;
		var doubleTouchX = null;
		var doubleTouchY = null;
		var doubleTouchTime = null;
		var secondTimeBase = HxOverrides.strDate("2000-01-01 00:00:01").getTime() - HxOverrides.strDate("2000-01-01 00:00:00").getTime();
		window.ontouchstart = function(e8) {
			beforeTouchX = null;
			if(e8.touches.length == 1) {
				var x1 = e8.touches.item(0).pageX;
				var y1 = e8.touches.item(0).pageY;
				var now = new Date().getTime();
				if(doubleTouchTime != null && now - doubleTouchTime <= secondTimeBase * 0.5) {
					var dx1 = x1 - doubleTouchX;
					var dy1 = y1 - doubleTouchY;
					var d1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
					if(d1 <= Math.min(gv.GvMain.canvas.width,gv.GvMain.canvas.height) * 0.05) {
						gv.GvMain.myMouseX = x1;
						gv.GvMain.myMouseY = y1;
						gv.GvMain.updateSelf(null,false,0,false,true);
						e8.preventDefault();
						return false;
					}
				}
				doubleTouchX = x1;
				doubleTouchY = y1;
				doubleTouchTime = now;
			}
			touchFunc(e8);
			return false;
		};
		window.ontouchcancel = function(e9) {
			beforeTouchX = null;
			e9.preventDefault();
			return false;
		};
		window.ontouchend = function(e10) {
			beforeTouchX = null;
			e10.preventDefault();
			if(e10.targetTouches.length == e10.touches.length) {
				if(gv.GvCore.isDragMode()) {
					if(gv.GvCore.isNowDrag()) {
						gv.GvCore.sendDragEnd();
						gv.GvMain.updateTimeList();
					}
				}
			}
			return false;
		};
		gv.GvMain.updateTimeList();
	};
};
gv.GvMain.onNumpadKey = function(dx,dy) {
	var newCx = Math.min(Math.max(-gv.GvMain.mx,gv.GvMain.cx + dx * gv.GvMain.scale * 0.25),gv.GvMain.mx);
	var newCy = Math.min(Math.max(-gv.GvMain.my,gv.GvMain.cy + dy * gv.GvMain.scale * 0.25),gv.GvMain.my);
	if(gv.GvMain.cx != newCx || gv.GvMain.cy != newCy) {
		gv.GvMain.cx = newCx;
		gv.GvMain.cy = newCy;
		gv.GvMain.updateUI();
	}
};
gv.GvMain.updateUI = function() {
	if(gv.GvMain.paintTimer != null) window.clearTimeout(gv.GvMain.paintTimer);
	gv.GvMain.paintTimer = window.setTimeout(gv.GvMain.paintSelf,10);
};
gv.GvMain.paintSelf = function() {
	gv.GvMain.paintTimer = null;
	gv.GvMain.updateSelf(gv.GvMain.ctx,false,0,false,false);
};
gv.GvMain.updateSelf = function(ctx,mouseDown,zoom,zoom2,shiftClick) {
	var width = Math.max(1,gv.GvMain.canvas.width);
	var height = Math.max(1,gv.GvMain.canvas.height);
	var dx = gv.GvCore.getMaxX() - gv.GvCore.getMinX();
	var dy = gv.GvCore.getMaxY() - gv.GvCore.getMinY();
	var maxD = Math.max(dx,dy);
	var scale;
	var sx;
	var sy;
	if(dx * height < dy * width) {
		gv.GvMain.my = (1 - gv.GvMain.scale) * 0.5;
		scale = height / (dy * gv.GvMain.scale);
		if(scale * dx <= width) gv.GvMain.mx = 0; else gv.GvMain.mx = (dx - width / scale) / maxD * 0.5;
	} else {
		gv.GvMain.mx = (1 - gv.GvMain.scale) * 0.5;
		scale = width / (dx * gv.GvMain.scale);
		if(scale * dy <= height) gv.GvMain.my = 0; else gv.GvMain.my = (dy - height / scale) / maxD * 0.5;
	}
	gv.GvMain.updateCenter();
	var beforeCursorX = gv.GvMain.cursorX;
	var beforeCursorY = gv.GvMain.cursorY;
	if(zoom2) {
		gv.GvMain.cx = (gv.GvMain.cursorX - (gv.GvMain.myMouseX - width * 0.5) / scale - dx * 0.5 - gv.GvCore.getMinX()) / maxD;
		gv.GvMain.cy = (gv.GvMain.cursorY - (gv.GvMain.myMouseY - height * 0.5) / scale - dy * 0.5 - gv.GvCore.getMinY()) / maxD;
		gv.GvMain.updateCenter();
		return;
	}
	gv.GvMain.cursorX = (gv.GvMain.myMouseX - width * 0.5) / scale + dx * 0.5 + gv.GvCore.getMinX() + maxD * gv.GvMain.cx;
	gv.GvMain.cursorY = (gv.GvMain.myMouseY - height * 0.5) / scale + dy * 0.5 + gv.GvCore.getMinY() + maxD * gv.GvMain.cy;
	if(gv.GvMain.nowSnap == null) return;
	var time = gv.GvMain.nowSnap.getTime();
	if(mouseDown) {
		if(gv.GvCore.isDragMode()) {
			if(!gv.GvCore.isNowDrag()) gv.GvCore.sendDragStart(time,beforeCursorX,beforeCursorY);
			gv.GvCore.sendDragMove(time,gv.GvMain.cursorX,gv.GvMain.cursorY);
			gv.GvMain.updateTimeList();
		} else {
			var dcx = gv.GvMain.cursorX - beforeCursorX;
			var dcy = gv.GvMain.cursorY - beforeCursorY;
			var oldCx = gv.GvMain.cx;
			var oldCy = gv.GvMain.cy;
			gv.GvMain.cx -= dcx / maxD;
			gv.GvMain.cy -= dcy / maxD;
			gv.GvMain.updateCenter();
			if(oldCx != gv.GvMain.cx || oldCy != gv.GvMain.cy) {
				if(zoom != 0) {
					gv.GvMain.cursorX = (gv.GvMain.myMouseX - width * 0.5) / scale + dx * 0.5 + gv.GvCore.getMinX() + maxD * gv.GvMain.cx;
					gv.GvMain.cursorY = (gv.GvMain.myMouseY - height * 0.5) / scale + dy * 0.5 + gv.GvCore.getMinY() + maxD * gv.GvMain.cy;
					var newScale = Math.min(Math.max(0.01,gv.GvMain.scale * Math.pow(0.5,zoom * 0.080482023721841)),1.0);
					if(gv.GvMain.scale != newScale) {
						gv.GvMain.scale = newScale;
						gv.GvMain.updateSelf(null,false,0,true,false);
					}
				}
				gv.GvMain.updateUI();
				return;
			}
		}
	}
	if(zoom != 0) {
		var newScale1 = Math.min(Math.max(0.01,gv.GvMain.scale * Math.pow(0.5,zoom * 0.080482023721841)),1.0);
		if(gv.GvMain.scale != newScale1) {
			gv.GvMain.scale = newScale1;
			gv.GvMain.updateSelf(null,false,0,true,false);
			gv.GvMain.updateUI();
			return;
		}
	}
	if(shiftClick) {
		gv.GvCore.sendInput(time,gv.GvMain.cursorX,gv.GvMain.cursorY);
		gv.GvMain.updateTimeList();
	}
	var out = gv.GvCore.getOut(time);
	if(0 <= gv.GvMain.myMouseX && 0 <= gv.GvMain.myMouseY && gv.GvCore.getMinX() <= gv.GvMain.cursorX && gv.GvMain.cursorX <= gv.GvCore.getMaxX() && gv.GvCore.getMinY() <= gv.GvMain.cursorY && gv.GvMain.cursorY <= gv.GvCore.getMaxY()) gv.GvMain.div.textContent = "" + out + "time " + time + " ( " + (gv.GvMain.now + 1) + " / " + gv.GvMain.timeList.length + " ) (" + (gv.GvMain.cursorX + 0.5 | 0) + ", " + (gv.GvMain.cursorY + 0.5 | 0) + ") (" + gv.GvMain.cursorX + ", " + gv.GvMain.cursorY + ")"; else gv.GvMain.div.textContent = "" + out + "time " + time + " ( " + (gv.GvMain.now + 1) + " / " + gv.GvMain.timeList.length + " )";
	sx = (width / scale - dx) * 0.5 - gv.GvCore.getMinX() - maxD * gv.GvMain.cx;
	sy = (height / scale - dy) * 0.5 - gv.GvCore.getMinY() - maxD * gv.GvMain.cy;
	if(ctx != null) {
		ctx.clearRect(0,0,width,height);
		ctx.save();
		ctx.scale(scale,scale);
		ctx.translate(sx,sy);
		gv.GvMain.nowSnap.paint(ctx);
		ctx.restore();
	}
};
gv.GvMain.updateCenter = function() {
	gv.GvMain.cx = Math.min(Math.max(-gv.GvMain.mx,gv.GvMain.cx),gv.GvMain.mx);
	gv.GvMain.cy = Math.min(Math.max(-gv.GvMain.my,gv.GvMain.cy),gv.GvMain.my);
};
gv.GvMain.setAutoModeTimer = function() {
	if(gv.GvMain.autoModeTimerId != null) window.clearTimeout(gv.GvMain.autoModeTimerId);
	gv.GvMain.autoModeTimerId = window.setTimeout(gv.GvMain.onAutoModeTimer,200);
};
gv.GvMain.onAutoModeTimer = function() {
	if(gv.GvMain.autoModeTimerId != null) {
		window.clearTimeout(gv.GvMain.autoModeTimerId);
		gv.GvMain.autoModeTimerId = null;
	}
	if(gv.GvMain.timeList != null && gv.GvMain.now < gv.GvMain.timeList.length - 1) {
		++gv.GvMain.now;
		gv.GvMain.updateTime();
		gv.GvMain.setAutoModeTimer();
	}
};
gv.GvMain.updateTime = function() {
	if(gv.GvMain.timeList != null && gv.GvMain.now < gv.GvMain.timeList.length) {
		var time = gv.GvMain.timeList[gv.GvMain.now];
		if(gv.GvMain.now == gv.GvMain.timeList.length - 1) gv.GvMain.autoMode = true;
		gv.GvMain.nowSnap = gv.GvCore.getSnap(time);
		gv.GvMain.nowSnap.output();
		gv.GvMain.updateUI();
		var amc = gv.GvCore.getAutoModeCount();
		if(amc != gv.GvMain.autoModeCount) {
			gv.GvMain.autoModeCount = amc;
			gv.GvMain.autoMode = true;
		}
		if(gv.GvMain.autoMode) gv.GvMain.setAutoModeTimer();
		return;
	}
	gv.GvMain.nowSnap = null;
};
gv.GvMain.updateTimeList = function() {
	var nowTime;
	if(gv.GvMain.timeList != null && gv.GvMain.now < gv.GvMain.timeList.length) nowTime = gv.GvMain.timeList[gv.GvMain.now]; else nowTime = 0.0;
	gv.GvMain.timeList = gv.GvCore.getTimeList();
	if(gv.GvMain.timeList != null && 0 < gv.GvMain.timeList.length) {
		var minDiff = Math.abs(nowTime - gv.GvMain.timeList[0]);
		gv.GvMain.now = 0;
		var _g1 = 1;
		var _g = gv.GvMain.timeList.length;
		while(_g1 < _g) {
			var i = _g1++;
			var diff = Math.abs(nowTime - gv.GvMain.timeList[i]);
			if(diff < minDiff) {
				minDiff = diff;
				gv.GvMain.now = i;
			}
		}
		gv.GvMain.updateTime();
	}
};
gv.GvSnap = function(time) {
	this.time = time;
	this.items = new List();
};
gv.GvSnap.__name__ = true;
gv.GvSnap.prototype = {
	addItem: function(item) {
		this.items.add(item);
	}
	,paint: function(ctx) {
		var $it0 = this.items.iterator();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			item.paint(ctx);
		}
	}
	,output: function() {
		var $it0 = this.items.iterator();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			item.output();
		}
	}
	,getTime: function() {
		return this.time;
	}
	,__class__: gv.GvSnap
};
gv.GvSnapItem = function() { };
gv.GvSnapItem.__name__ = true;
gv.GvSnapItem.prototype = {
	__class__: gv.GvSnapItem
};
gv.GvSnapItem_Circle = function(x_,y_,r_) {
	this.x = x_;
	this.y = y_;
	this.r = r_;
	this.colorR = 0;
	this.colorG = 0;
	this.colorB = 0;
};
gv.GvSnapItem_Circle.__name__ = true;
gv.GvSnapItem_Circle.__interfaces__ = [gv.GvSnapItem];
gv.GvSnapItem_Circle.prototype = {
	rgb: function(r,g,b) {
		this.colorR = r / 255.0;
		this.colorG = g / 255.0;
		this.colorB = b / 255.0;
		return this;
	}
	,color: function(cIdx) {
		var rgb = gv.GvCore.gvGetColorFromIndex(cIdx);
		this.colorR = rgb[0];
		this.colorG = rgb[1];
		this.colorB = rgb[2];
		return this;
	}
	,getMinX: function() {
		return this.x - this.r;
	}
	,getMinY: function() {
		return this.y - this.r;
	}
	,getMaxX: function() {
		return this.x + this.r;
	}
	,getMaxY: function() {
		return this.y + this.r;
	}
	,paint: function(ctx) {
		ctx.fillStyle = gv.GvCore.rgb(this.colorR,this.colorG,this.colorB);
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2 * Math.PI,false);
		ctx.fill();
	}
	,output: function() {
	}
	,__class__: gv.GvSnapItem_Circle
};
gv.GvSnapItem_Polygon = function() {
	this.yVec = new Array();
	this.xVec = new Array();
	this.colorR = 0;
	this.colorG = 0;
	this.colorB = 0;
};
gv.GvSnapItem_Polygon.__name__ = true;
gv.GvSnapItem_Polygon.__interfaces__ = [gv.GvSnapItem];
gv.GvSnapItem_Polygon.prototype = {
	rgb: function(r,g,b) {
		this.colorR = r / 255.0;
		this.colorG = g / 255.0;
		this.colorB = b / 255.0;
		return this;
	}
	,color: function(cIdx) {
		var rgb = gv.GvCore.gvGetColorFromIndex(cIdx);
		this.colorR = rgb[0];
		this.colorG = rgb[1];
		this.colorB = rgb[2];
		return this;
	}
	,add: function(x,y) {
		this.xVec.push(x);
		this.yVec.push(y);
		return this;
	}
	,getMinX: function() {
		var v = Math.POSITIVE_INFINITY;
		var _g = 0;
		var _g1 = this.xVec;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			v = Math.min(v,x);
		}
		return v;
	}
	,getMinY: function() {
		var v = Math.POSITIVE_INFINITY;
		var _g = 0;
		var _g1 = this.yVec;
		while(_g < _g1.length) {
			var y = _g1[_g];
			++_g;
			v = Math.min(v,y);
		}
		return v;
	}
	,getMaxX: function() {
		var v = Math.NEGATIVE_INFINITY;
		var _g = 0;
		var _g1 = this.xVec;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			v = Math.max(v,x);
		}
		return v;
	}
	,getMaxY: function() {
		var v = Math.NEGATIVE_INFINITY;
		var _g = 0;
		var _g1 = this.yVec;
		while(_g < _g1.length) {
			var y = _g1[_g];
			++_g;
			v = Math.max(v,y);
		}
		return v;
	}
	,paint: function(ctx) {
		var n = this.xVec.length;
		if(0 < n) {
			ctx.fillStyle = gv.GvCore.rgb(this.colorR,this.colorG,this.colorB);
			ctx.beginPath();
			ctx.moveTo(this.xVec[n - 1],this.yVec[n - 1]);
			var _g = 0;
			while(_g < n) {
				var i = _g++;
				ctx.lineTo(this.xVec[i],this.yVec[i]);
			}
			ctx.fill();
		}
	}
	,output: function() {
	}
	,__class__: gv.GvSnapItem_Polygon
};
gv.GvSnapItem_Text = function(text_,x_,y_,r_) {
	this.x = x_;
	this.y = y_;
	this.r = r_;
	this.text = text_;
	this.colorR = 0;
	this.colorG = 0;
	this.colorB = 0;
};
gv.GvSnapItem_Text.__name__ = true;
gv.GvSnapItem_Text.__interfaces__ = [gv.GvSnapItem];
gv.GvSnapItem_Text.prototype = {
	rgb: function(r,g,b) {
		this.colorR = r / 255.0;
		this.colorG = g / 255.0;
		this.colorB = b / 255.0;
		return this;
	}
	,color: function(cIdx) {
		var rgb = gv.GvCore.gvGetColorFromIndex(cIdx);
		this.colorR = rgb[0];
		this.colorG = rgb[1];
		this.colorB = rgb[2];
		return this;
	}
	,getMinX: function() {
		return this.x - this.r;
	}
	,getMinY: function() {
		return this.y - this.r;
	}
	,getMaxX: function() {
		return this.x + this.r;
	}
	,getMaxY: function() {
		return this.y + this.r;
	}
	,paint: function(ctx) {
		var rate = 0.02 * this.r;
		ctx.save();
		ctx.translate(this.x,this.y);
		ctx.font = "100px hoge";
		ctx.scale(rate,rate);
		ctx.fillStyle = gv.GvCore.rgb(this.colorR,this.colorG,this.colorB);
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(this.text,0,0);
		ctx.restore();
	}
	,output: function() {
	}
	,__class__: gv.GvSnapItem_Text
};
var haxe = {};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
haxe.ds.IntMap.__name__ = true;
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.IntMap
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
gv.GvCore.nowTime = 0;
gv.GvCore.maxTime = 0;
gv.GvCore.minX = 0;
gv.GvCore.minY = 0;
gv.GvCore.maxX = 1;
gv.GvCore.maxY = 1;
gv.GvCore.emptyFlag = true;
gv.GvCore.snapMap = new haxe.ds.IntMap();
gv.GvCore.outMap = new haxe.ds.IntMap();
gv.GvCore.autoModeCount = 0;
gv.GvCore.colors = [[1,0,0],[0,1,0],[0,0,1],[1,1,0],[0,1,1],[1,0,1],[1,0.5,0],[1,0,0.5]];
gv.GvCore.nowDragFlag = false;
gv.GvMain.now = 0;
gv.GvMain.scale = 1.0;
gv.GvMain.cx = 0.0;
gv.GvMain.cy = 0.0;
gv.GvMain.mx = 0.0;
gv.GvMain.my = 0.0;
gv.GvMain.cursorX = 0.0;
gv.GvMain.cursorY = 0.0;
gv.GvMain.myMouseX = 0;
gv.GvMain.myMouseY = 0;
gv.GvMain.autoMode = false;
gv.GvMain.autoModeCount = 0;
gv.GvMain.main();
})(typeof window != "undefined" ? window : exports);
