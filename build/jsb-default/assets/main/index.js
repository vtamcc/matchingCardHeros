window.__require = function e(t, o, r) {
function a(l, c) {
if (!o[l]) {
if (!t[l]) {
var s = l.split("/");
s = s[s.length - 1];
if (!t[s]) {
var i = "function" == typeof __require && __require;
if (!c && i) return i(s, !0);
if (n) return n(s, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = s;
}
var p = o[l] = {
exports: {}
};
t[l][0].call(p.exports, function(e) {
return a(t[l][1][e] || e);
}, p, p.exports, e, t, o, r);
}
return o[l].exports;
}
for (var n = "function" == typeof __require && __require, l = 0; l < r.length; l++) a(r[l]);
return a;
}({
"CardHero.Card": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "59e726PBpdNqJTecm3LWYt9", "CardHero.Card");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("./CardHero.GameView"), c = cc._decorator, s = c.ccclass, i = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nCardBack = null;
t.nCardFront = null;
t.nCardSpf = null;
t.isClicked = !1;
t.idCard = 0;
return t;
}
t.prototype.onLoad = function() {
this.flipToBack();
this.scheduleOnce(this.flipTofront, 5);
};
t.prototype.setData = function(e) {
this.idCard = e;
this.nCardSpf.getComponent(cc.Sprite).spriteFrame = l.default.instance.listSpfCards[e];
};
t.prototype.onClickCards = function() {
if (!this.isClicked) {
this.isClicked = !0;
this.flipCard();
l.default.instance.addSelectedCard(this);
l.default.instance.countClick++;
if (2 == l.default.instance.countClick) {
l.default.instance.nMaskClick.active = !0;
this.scheduleOnce(function() {
l.default.instance.nMaskClick.active = !1;
}, .58);
l.default.instance.countClick = 0;
}
}
};
t.prototype.setCards = function(e) {
this.nCardBack.active = e;
this.nCardFront.active = !e;
};
t.prototype.flipToBack = function(e) {
var t = this;
void 0 === e && (e = null);
cc.tween(this.node).to(.3, {
scaleX: .1
}).call(function() {
t.setCards(!0);
e && e();
}).to(.3, {
scaleX: 1
}).start();
};
t.prototype.flipTofront = function() {
var e = this;
this.nCardFront.active || cc.tween(this.node).to(.3, {
scaleX: 0
}).call(function() {
e.setCards(!1);
}).to(.3, {
scaleX: 1
}).start();
};
t.prototype.flipCard = function() {
var e = this;
cc.tween(this.node).to(.3, {
scaleX: 0
}).call(function() {
e.nCardBack.active ? e.setCards(!1) : e.setCards(!0);
}).to(.3, {
scaleX: 1
}).start();
};
n([ i(cc.Node) ], t.prototype, "nCardBack", void 0);
n([ i(cc.Node) ], t.prototype, "nCardFront", void 0);
n([ i(cc.Node) ], t.prototype, "nCardSpf", void 0);
return n([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./CardHero.GameView": "CardHero.GameView"
} ],
"CardHero.Char": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ac3adOm64FKYpJzST+OWLOt", "CardHero.Char");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, s = (l.property, function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {};
t.prototype.onLoad = function() {};
t.prototype.charAttack = function() {
var e = this, t = this.node.x;
cc.tween(this.node).to(.5, {
x: 200
}).call(function() {
e.node.x = t;
}).start();
};
return n([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
"CardHero.GameManager": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e5a465If8ZDQIaV07VsCqlJ", "CardHero.GameManager");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("./CardHero.Global"), c = e("./game/CardHero.GameView"), s = e("./game/CardHero.LevelView"), i = cc._decorator, p = i.ccclass, d = i.property, h = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.prfGameView = null;
t.prfGameLevel = null;
t.nChar_1 = null;
t.nChar_2 = null;
t.nChar_3 = null;
t.nPlay = null;
return t;
}
o = t;
t.prototype.onLoad = function() {
o.instance = this;
this.effectChar(this.nChar_1);
this.effectChar(this.nChar_2);
this.effectChar(this.nChar_3);
this.effectPlay();
};
t.prototype.start = function() {};
t.prototype.onClickPlay = function(e) {
l.Global.selectedLevel = e;
cc.sys.localStorage.setItem("selectedLevel", e.toString());
var t = cc.instantiate(this.prfGameView).getComponent(c.default);
this.node.addChild(t.node);
};
t.prototype.onClickLevel = function() {
var e = cc.instantiate(this.prfGameLevel).getComponent(s.default);
this.node.addChild(e.node);
};
t.prototype.effectChar = function(e) {
cc.tween(e).repeatForever(cc.tween().to(.9, {
angle: -1
}).to(.8, {
angle: 1
}).start()).start();
};
t.prototype.effectPlay = function() {
cc.tween(this.nPlay).repeatForever(cc.tween().to(.8, {
scale: .8
}).to(.8, {
scale: 1
}).start()).start();
};
var o;
t.instance = null;
n([ d(cc.Prefab) ], t.prototype, "prfGameView", void 0);
n([ d(cc.Prefab) ], t.prototype, "prfGameLevel", void 0);
n([ d(cc.Node) ], t.prototype, "nChar_1", void 0);
n([ d(cc.Node) ], t.prototype, "nChar_2", void 0);
n([ d(cc.Node) ], t.prototype, "nChar_3", void 0);
n([ d(cc.Node) ], t.prototype, "nPlay", void 0);
return o = n([ p ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"./CardHero.Global": "CardHero.Global",
"./game/CardHero.GameView": "CardHero.GameView",
"./game/CardHero.LevelView": "CardHero.LevelView"
} ],
"CardHero.GameOver": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "de8d4/7tgJF0LWGiu41K2vT", "CardHero.GameOver");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../CardHero.GameView"), c = cc._decorator, s = c.ccclass, i = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nYouWin = null;
t.nYouLose = null;
t.nStarWin_1 = null;
t.nStarWin_2 = null;
t.nStarWin_3 = null;
t.nStarLose_1 = null;
t.nStarLose_2 = null;
t.nStarLose_3 = null;
t.nBtnNext = null;
return t;
}
t.prototype.start = function() {};
t.prototype.clickRestart = function() {
l.default.instance.onClickRestart();
this.node.destroy();
};
t.prototype.winGame = function(e) {
this.nYouWin.active = e;
this.nYouLose.active = !e;
};
t.prototype.nextLevel = function() {
l.default.instance.loadNextLevel();
this.node.destroy();
};
t.prototype.clickHome = function() {
this.node.destroy();
l.default.instance.destroyGame();
};
n([ i(cc.Node) ], t.prototype, "nYouWin", void 0);
n([ i(cc.Node) ], t.prototype, "nYouLose", void 0);
n([ i(cc.Node) ], t.prototype, "nStarWin_1", void 0);
n([ i(cc.Node) ], t.prototype, "nStarWin_2", void 0);
n([ i(cc.Node) ], t.prototype, "nStarWin_3", void 0);
n([ i(cc.Node) ], t.prototype, "nStarLose_1", void 0);
n([ i(cc.Node) ], t.prototype, "nStarLose_2", void 0);
n([ i(cc.Node) ], t.prototype, "nStarLose_3", void 0);
n([ i(cc.Node) ], t.prototype, "nBtnNext", void 0);
return n([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../CardHero.GameView": "CardHero.GameView"
} ],
"CardHero.GameView": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8fd3cLAkYdOj7WjRM40JxNH", "CardHero.GameView");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../CardHero.Global"), c = e("./CardHero.Card"), s = e("./CardHero.Char"), i = e("./CardHero.LevelView"), p = e("./CardHero.Monster"), d = e("./popup/CardHero.GameOver"), h = e("./popup/CardHero.Pause"), u = cc._decorator, f = u.ccclass, y = u.property, v = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.prfCard = null;
t.prfMonster = null;
t.listSpfCards = [];
t.nMonters = null;
t.nTableCards = null;
t.lbHpChar = null;
t.lbHpMonster = null;
t.nMaskClick = null;
t.nMaskLoadGame = null;
t.lbDameMonster = null;
t.listSpfMonster = [];
t.isClick = !1;
t.countClick = 0;
t.listIdCard = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ];
t.selectedCards = [];
t.dataCard = [];
t.charArchers = null;
t.charFighter = null;
t.charMagic = null;
t.lbDameChar = null;
t.prfGameOver = null;
t.prfPause = null;
t.nShield = null;
t.lbShield = null;
t.nDameMonsterMiss = null;
t.lbLevel = null;
t.listMonsters = [];
t.idMonster = 0;
t.rows = 5;
t.cols = 5;
t.spacing = 10;
t.startX = -337;
t.startY = 210;
t.tileWidth = 135;
t.selectedLevel = 0;
t.monstersDefeated = 0;
t.isCheck = !1;
t.countMonsterDie = 0;
t.currentMonsterIndex = -1;
return t;
}
o = t;
t.prototype.onLoad = function() {
var e = this;
this.selectedLevel = parseInt(cc.sys.localStorage.getItem("selectedLevel")) || 0;
l.Global.dameCharSmall = parseInt(cc.sys.localStorage.getItem("dameCharSmall")) || l.Global.dameCharSmall;
l.Global.dameCharNormal = parseInt(cc.sys.localStorage.getItem("dameCharNormal")) || l.Global.dameCharNormal;
l.Global.dameCharBig = parseInt(cc.sys.localStorage.getItem("dameCharBig")) || l.Global.dameCharBig;
l.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || l.Global.hpChar;
if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
l.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || l.Global.hpChar;
console.log("vao if");
this.updateHpChar();
} else {
l.Global.hpChar = 10;
this.updateHpChar();
console.log("vao else");
}
o.instance = this;
this.listIdCard = this.shuffleArray(this.listIdCard);
this.maskLoadGame();
this.scheduleOnce(function() {
e.loadCards();
}, 1);
this.spawnMonster();
this.updateHpBagGuy();
this.updateLevelLb();
};
t.prototype.updateLevelLb = function() {
this.lbLevel.string = "LVL " + (this.selectedLevel + 1);
};
t.prototype.onDestroy = function() {
o.instance = null;
};
t.prototype.maskLoadGame = function() {
var e = this;
this.nMaskLoadGame.active = !0;
this.scheduleOnce(function() {
e.nMaskLoadGame.active = !1;
}, 7);
};
t.prototype.loadCards = function() {
for (var e = 0, t = 0; t < this.rows; t++) {
this.dataCard[t] = [];
for (var o = 0; o < this.cols && !(e >= this.listIdCard.length); o++) {
var r = cc.instantiate(this.prfCard).getComponent(c.default);
r.setData(this.listIdCard[e]);
this.nTableCards.addChild(r.node);
r.node.x = this.startX + o * this.tileWidth + this.tileWidth / 2;
r.node.y = this.startY - t * this.tileWidth + this.tileWidth / 2;
this.dataCard[t][o] = r;
e++;
}
}
};
t.prototype.spawnMonster = function() {
var e = l.Global.levelData[this.selectedLevel];
console.log("level ", this.selectedLevel);
if (this.currentMonsterIndex < e.monsters) {
this.currentMonsterIndex++;
var t = this.currentMonsterIndex;
this.createMonster(t, e.hp, e.dame);
console.log("Quai vat dau tien ", this.currentMonsterIndex);
} else this.completeLevel();
};
t.prototype.createMonster = function(e, t, o) {
var r = cc.instantiate(this.prfMonster).getComponent(p.default), a = l.Global.levelMonsterSprites[this.selectedLevel][e];
r.setMonster(a, t, o);
this.nMonters.addChild(r.node);
this.listMonsters.push(r);
};
t.prototype.attackMonster = function(e) {
var t = this;
if (this.listMonsters.length > 0) {
var o = this.listMonsters[0];
if (o && o.node) {
o.receiveDamage(e);
if (l.Global.hpMonster <= 0) {
this.listMonsters = this.listMonsters.filter(function(e) {
return e !== o;
});
this.monstersDefeated++;
this.countMonsterDie++;
console.log("Montes die ", this.countMonsterDie);
this.scheduleOnce(function() {
t.spawnMonster();
}, .8);
console.log("Monster ", this.listMonsters);
}
}
}
};
t.prototype.completeLevel = function() {
if ("true" !== cc.sys.localStorage.getItem("level_" + this.selectedLevel + "_completed")) {
l.Global.totalGold += 1;
i.default.instance.updateGold();
}
cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_completed", "true");
console.log("Level " + this.selectedLevel + " đã hoàn thành");
var e = this.selectedLevel + 1;
if (e < l.Global.levelData.length) {
cc.sys.localStorage.setItem("level_" + e + "_unlocked", "true");
i.default.instance.updateLevelStatus(e);
}
console.log("level tiep theo la ", e);
if (5 == e || 14 == e) {
cc.sys.localStorage.setItem("level_" + e + "_isBoss", "true");
i.default.instance.updateLevelStatus(e);
}
if (5 == this.selectedLevel || 14 == this.selectedLevel) {
cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flagBoss", "true");
console.log("co bosss", this.selectedLevel);
i.default.instance.updateLevelStatus(this.selectedLevel);
}
cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flag", "true");
i.default.instance.updateLevelStatus(this.selectedLevel);
this.gameOver(!0);
};
t.prototype.loadNextLevel = function() {
if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
l.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || l.Global.hpChar;
console.log("vao if");
this.updateHpChar();
} else {
l.Global.hpChar = 10;
this.updateHpChar();
console.log("vao else");
}
l.Global.shield = 0;
this.monstersDefeated = 0;
this.currentMonsterIndex = -1;
this.countMonsterDie = 0;
this.nShield.active = !1;
this.nTableCards.removeAllChildren();
this.nMonters.removeAllChildren();
this.selectedCards = [];
this.listMonsters = [];
this.listIdCard = this.shuffleArray(this.listIdCard);
this.loadCards();
this.spawnMonster();
this.updateHpChar();
this.updateHpBagGuy();
this.maskLoadGame();
console.log("Loaded Level " + this.selectedLevel);
this.updateLevelLb();
};
t.prototype.gameOver = function(e) {
var t = this, o = cc.instantiate(this.prfGameOver).getComponent(d.default);
if (e) {
o.nStarWin_1.active = !0;
o.nStarWin_2.active = !0;
o.nStarWin_3.active = !0;
o.nBtnNext.getComponent(cc.Button).interactable = !0;
o.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = !1;
o.winGame(!0);
o.nBtnNext.on("click", function() {
t.selectedLevel++;
cc.sys.localStorage.setItem("selectedLevel", t.selectedLevel.toString());
t.loadNextLevel();
}, this);
console.log("Level hoàn thành", this.selectedLevel);
} else {
o.winGame(!1);
o.nBtnNext.getComponent(cc.Button).interactable = !1;
o.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = !0;
}
this.node.addChild(o.node);
console.log("Số quái vật trong level: ", l.Global.levelData[this.selectedLevel].monsters);
console.log("Số quái vật đã chết: ", this.countMonsterDie);
};
t.prototype.onClickPause = function() {
var e = cc.instantiate(this.prfPause).getComponent(h.default);
this.node.addChild(e.node);
this.nTableCards.children.forEach(function(e) {
e.active = !1;
});
};
t.prototype.onClickResume = function() {
this.nTableCards.children.forEach(function(e) {
e.active = !0;
});
};
t.prototype.shuffleArray = function(e) {
for (var t, o = e.length - 1; o > 0; o--) {
var r = Math.floor(Math.random() * (o + 1));
t = [ e[r], e[o] ], e[o] = t[0], e[r] = t[1];
}
return e;
};
t.prototype.addSelectedCard = function(e) {
if (this.selectedCards.length < 2) {
this.selectedCards.push(e);
2 === this.selectedCards.length && this.scheduleOnce(this.checkMatch.bind(this), .6);
}
};
t.prototype.checkMatch = function() {
var e = this.selectedCards, t = e[0], o = e[1];
if (0 === t.idCard && 0 === o.idCard) {
l.Global.shield = 3;
this.nShield.active = !0;
console.log("Shield Activated: ", l.Global.shield);
this.updateShield();
t.node.destroy();
o.node.destroy();
} else if (12 === t.idCard || 12 === o.idCard) {
var r = 12 === t.idCard ? o : t;
this.selectAttack(r.idCard, !0);
t.node.destroy();
o.node.destroy();
} else if (t.idCard === o.idCard) {
this.selectAttack(t.idCard, !1);
t.node.destroy();
o.node.destroy();
} else {
if (l.Global.shield > 0) {
l.Global.shield--;
this.updateShield();
this.effectDameBagGuyMiss(this.nDameMonsterMiss);
console.log("Shield: ", l.Global.shield);
}
if (0 == l.Global.shield) {
this.nShield.active = !1;
l.Global.hpChar -= l.Global.dameMonster;
this.effectDameBagGuy(this.lbDameMonster, l.Global.dameMonster);
this.updateHpChar();
if (l.Global.hpChar <= 0) {
this.gameOver(!1);
return;
}
}
t.flipCard();
o.flipCard();
t.isClicked = !1;
o.isClicked = !1;
}
this.selectedCards = [];
};
t.prototype.selectAttack = function(e, t) {
switch (e) {
case 0:
console.log("Giap ne ");
0 === l.Global.shield && (l.Global.shield = 3);
l.Global.shield *= t ? 2 : 1;
this.nShield.active = !0;
this.updateShield();
break;

case 1:
console.log("Mau ne ");
t ? l.Global.hpChar *= 2 : l.Global.hpChar += 5;
this.updateHpChar();
break;

case 2:
console.log("Cung nho ban ");
l.Global.dameCharSmall *= t ? 2 : 1;
this.charArchers.charAttack();
this.attackMonster(l.Global.dameCharSmall);
break;

case 3:
console.log("Cung Tb ban ");
l.Global.dameCharNormal *= t ? 2 : 1;
this.attackMonster(l.Global.dameCharNormal);
this.charArchers.charAttack();
break;

case 4:
this.charArchers.charAttack();
l.Global.dameCharBig *= t ? 2 : 1;
this.attackMonster(l.Global.dameCharBig);
break;

case 5:
l.Global.dameCharSmall *= t ? 2 : 1;
l.Global.hpMonster -= l.Global.dameCharSmall;
this.charFighter.charAttack();
break;

case 6:
l.Global.dameCharNormal *= t ? 2 : 1;
this.charFighter.charAttack();
this.attackMonster(l.Global.dameCharNormal);
break;

case 7:
console.log("KIem danh ");
l.Global.dameCharBig *= t ? 2 : 1;
this.charFighter.charAttack();
this.attackMonster(l.Global.dameCharBig);
break;

case 8:
l.Global.dameCharSmall *= t ? 2 : 1;
this.attackMonster(l.Global.dameCharSmall);
this.charMagic.charAttack();
break;

case 9:
l.Global.dameCharNormal *= t ? 2 : 1;
this.attackMonster(l.Global.dameCharNormal);
this.charMagic.charAttack();
break;

case 10:
l.Global.dameCharBig *= t ? 2 : 1;
this.charMagic.charAttack();
this.attackMonster(l.Global.dameCharBig);
break;

case 11:
var o = l.Global.dameCharSmall + l.Global.dameCharNormal + l.Global.dameCharBig;
o *= t ? 2 : 1;
this.charMagic.charAttack();
this.charFighter.charAttack();
this.charArchers.charAttack();
this.attackMonster(o);
}
};
t.prototype.start = function() {};
t.prototype.effectDameBagGuy = function(e, t) {
e.active = !0;
e.getComponent(cc.Label).string = "-" + t;
cc.tween(e).to(.8, {
y: 200
}).call(function() {
e.active = !1;
e.y = -70;
}).start();
};
t.prototype.effectDameBagGuyMiss = function(e) {
if (l.Global.shield > 0) {
e.active = !0;
cc.tween(e).to(.8, {
y: 200
}).call(function() {
e.active = !1;
e.y = -70;
}).start();
}
0 == l.Global.shield && (e.active = !1);
};
t.prototype.updateHpChar = function() {
this.lbHpChar.string = l.Global.hpChar + " ";
};
t.prototype.updateHpBagGuy = function() {
this.lbHpMonster.string = l.Global.hpMonster + " ";
};
t.prototype.updateShield = function() {
this.lbShield.string = l.Global.shield + " ";
};
t.prototype.onClickRestart = function() {
if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
l.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || l.Global.hpChar;
console.log("vao if");
this.updateHpChar();
} else {
l.Global.hpChar = 10;
this.updateHpChar();
console.log("vao else");
}
this.monstersDefeated = 0;
this.currentMonsterIndex = 0;
this.countMonsterDie = 0;
console.log("quai chet resart", this.countMonsterDie);
this.updateHpChar();
this.updateShield();
this.maskLoadGame();
this.nTableCards.removeAllChildren();
this.nMonters.removeAllChildren();
this.selectedCards = [];
this.listMonsters = [];
this.listIdCard = this.shuffleArray(this.listIdCard);
this.loadCards();
this.createMonster(0, 10, 1);
l.Global.shield = 0;
console.log("Game restarted");
};
t.prototype.destroyGame = function() {
console.log("destroyyy ");
this.node.destroy();
};
var o;
t.instance = null;
n([ y(cc.Prefab) ], t.prototype, "prfCard", void 0);
n([ y(cc.Prefab) ], t.prototype, "prfMonster", void 0);
n([ y(cc.SpriteFrame) ], t.prototype, "listSpfCards", void 0);
n([ y(cc.Node) ], t.prototype, "nMonters", void 0);
n([ y(cc.Node) ], t.prototype, "nTableCards", void 0);
n([ y(cc.Label) ], t.prototype, "lbHpChar", void 0);
n([ y(cc.Label) ], t.prototype, "lbHpMonster", void 0);
n([ y(cc.Node) ], t.prototype, "nMaskClick", void 0);
n([ y(cc.Node) ], t.prototype, "nMaskLoadGame", void 0);
n([ y(cc.Node) ], t.prototype, "lbDameMonster", void 0);
n([ y(cc.SpriteFrame) ], t.prototype, "listSpfMonster", void 0);
n([ y(s.default) ], t.prototype, "charArchers", void 0);
n([ y(s.default) ], t.prototype, "charFighter", void 0);
n([ y(s.default) ], t.prototype, "charMagic", void 0);
n([ y(cc.Node) ], t.prototype, "lbDameChar", void 0);
n([ y(cc.Prefab) ], t.prototype, "prfGameOver", void 0);
n([ y(cc.Prefab) ], t.prototype, "prfPause", void 0);
n([ y(cc.Node) ], t.prototype, "nShield", void 0);
n([ y(cc.Label) ], t.prototype, "lbShield", void 0);
n([ y(cc.Node) ], t.prototype, "nDameMonsterMiss", void 0);
n([ y(cc.Label) ], t.prototype, "lbLevel", void 0);
return o = n([ f ], t);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../CardHero.Global": "CardHero.Global",
"./CardHero.Card": "CardHero.Card",
"./CardHero.Char": "CardHero.Char",
"./CardHero.LevelView": "CardHero.LevelView",
"./CardHero.Monster": "CardHero.Monster",
"./popup/CardHero.GameOver": "CardHero.GameOver",
"./popup/CardHero.Pause": "CardHero.Pause"
} ],
"CardHero.Global": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "03c11M17HlIsZ+0lARMsnQQ", "CardHero.Global");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Global = void 0;
var r = function() {
function e() {}
e.totalGold = 10;
e.hpChar = 10;
e.hpMonster = 10;
e.shield = 0;
e.dameMonster = 1;
e.dameCharSmall = 5;
e.dameCharNormal = 10;
e.dameCharBig = 15;
e.priceItem = [ 1, 1 ];
e.levelData = [ {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 15,
monsters: 1
}, {
dame: 2,
hp: 20,
monsters: 1
}, {
dame: 3,
hp: 25,
monsters: 1
}, {
dame: 3,
hp: 20,
monsters: 1
}, {
dame: 5,
hp: 50,
monsters: 0,
isBoss: !0
}, {
dame: 1,
hp: 10,
monsters: 0
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 1,
hp: 10,
monsters: 1
}, {
dame: 30,
hp: 100,
monsters: 0,
isBoss: !0
} ];
e.levelMonsterSprites = {
0: [ 0, 1 ],
1: [ 1, 2 ],
2: [ 0, 2 ],
3: [ 1, 2 ],
4: [ 2, 3 ],
5: [ 4 ],
6: [ 4 ],
7: [ 0, 1 ],
8: [ 0, 1 ],
9: [ 0, 1 ],
10: [ 0, 1 ],
11: [ 0, 1 ],
12: [ 0, 1 ],
13: [ 0, 1 ],
14: [ 0, 1 ]
};
e.selectedLevel = 0;
e.levelCount = 0;
return e;
}();
o.Global = r;
cc._RF.pop();
}, {} ],
"CardHero.ItemLevel": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e5f39Q4GE9Gg62M2AkH/oYk", "CardHero.ItemLevel");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../CardHero.GameManager"), c = cc._decorator, s = c.ccclass, i = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nBlock = null;
t.nLevelActive = null;
t.nBossBock = null;
t.nBossActive = null;
t.nFlag = null;
t.nFlagBoss = null;
t.idLevel = 0;
return t;
}
t.prototype.setData = function(e, t, o, r, a, n) {
this.idLevel = e;
this.nBlock.active = t;
switch (e) {
case 5:
case 14:
this.nBossBock.active = t;
}
this.nFlag.active = a;
this.nLevelActive.active = r;
this.node.getComponent(cc.Button).interactable = r;
this.nBossActive.active = o;
this.nFlagBoss.active = n;
if (o) {
this.nFlag.active = !1;
this.nLevelActive.active = !1;
this.nBlock.active = !1;
}
};
t.prototype.onClickPlay = function() {
l.default.instance.onClickPlay(this.idLevel);
console.log("Level ", this.idLevel);
};
t.prototype.start = function() {};
n([ i(cc.Node) ], t.prototype, "nBlock", void 0);
n([ i(cc.Node) ], t.prototype, "nLevelActive", void 0);
n([ i(cc.Node) ], t.prototype, "nBossBock", void 0);
n([ i(cc.Node) ], t.prototype, "nBossActive", void 0);
n([ i(cc.Node) ], t.prototype, "nFlag", void 0);
n([ i(cc.Node) ], t.prototype, "nFlagBoss", void 0);
return n([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../CardHero.GameManager": "CardHero.GameManager"
} ],
"CardHero.ItemShop": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "61dcdSfOKhN/qX6CvtUjTg5", "CardHero.ItemShop");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../../../CardHero.Global"), c = e("../../CardHero.LevelView"), s = e("./CardHero.ShopView"), i = cc._decorator, p = i.ccclass, d = i.property, h = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nItem = null;
t.nMask = null;
t.idItem = 0;
t.price = 0;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.setData = function(e, t) {
this.idItem = e;
this.price = t;
this.loadItemState();
this.nItem.getComponent(cc.Sprite).spriteFrame = s.default.instance.listSpfItem[e];
this.updatePrice();
this.checkBuy();
};
t.prototype.updatePrice = function() {
this.price = l.Global.priceItem[this.idItem];
};
t.prototype.checkBuy = function() {
if (l.Global.totalGold >= this.price) {
this.nMask.active = !1;
console.log("xzzzzzzz", this.price);
} else this.nMask.active = !0;
};
t.prototype.clickBuy = function() {
if (l.Global.totalGold >= this.price) {
l.Global.totalGold -= this.price;
if (0 == this.idItem) {
l.Global.hpChar += 5;
cc.sys.localStorage.setItem("hpChar", l.Global.hpChar);
console.log("HpChar increased to: " + l.Global.hpChar);
} else if (1 == this.idItem) {
l.Global.dameCharSmall += 3;
l.Global.dameCharNormal += 3;
l.Global.dameCharBig += 3;
cc.sys.localStorage.setItem("dameCharSmall", l.Global.dameCharSmall);
cc.sys.localStorage.setItem("dameCharNormal", l.Global.dameCharNormal);
cc.sys.localStorage.setItem("dameCharBig", l.Global.dameCharBig);
console.log("Damage increased to: Small: " + l.Global.dameCharSmall + ", Normal: " + l.Global.dameCharNormal + ", Big: " + l.Global.dameCharBig);
}
l.Global.priceItem[this.idItem]++;
this.saveItemState();
console.log("Bought item " + this.idItem + ", new price: " + l.Global.priceItem[this.idItem] + ", remaining gold: " + l.Global.totalGold);
s.default.instance.updateAllItems();
s.default.instance.updatePrices();
c.default.instance.updateGold();
this.updatePrice();
} else console.log("Not enough gold!");
};
t.prototype.saveItemState = function() {
var e = {
id: this.idItem,
price: l.Global.priceItem[this.idItem]
};
cc.sys.localStorage.setItem("item_" + this.idItem, JSON.stringify(e));
console.log("Item " + this.idItem + " state saved:", e);
};
t.prototype.loadItemState = function() {
var e = cc.sys.localStorage.getItem("item_" + this.idItem);
if (e) {
var t = JSON.parse(e);
l.Global.priceItem[this.idItem] = t.price;
this.price = t.price;
console.log("Loaded price for item " + this.idItem + ": " + this.price);
}
};
t.prototype.start = function() {};
n([ d(cc.Node) ], t.prototype, "nItem", void 0);
n([ d(cc.Node) ], t.prototype, "nMask", void 0);
return n([ p ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../CardHero.Global": "CardHero.Global",
"../../CardHero.LevelView": "CardHero.LevelView",
"./CardHero.ShopView": "CardHero.ShopView"
} ],
"CardHero.LevelView": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6f2a0tW0utIa6pPN0DBS13j", "CardHero.LevelView");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../CardHero.Global"), c = e("./CardHero.ItemLevel"), s = cc._decorator, i = s.ccclass, p = s.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.prfShopView = null;
t.lbGold = null;
t.prfItemLevel = null;
t.nLayout = null;
t.levelOrder = [ [ 0, 1, 2 ], [ 5, 4, 3 ], [ 6, 7, 8 ], [ 11, 10, 9 ], [ 12, 13, 14 ] ];
t.selectedLevel = null;
return t;
}
o = t;
t.prototype.onLoad = function() {
o.instance = this;
l.Global.totalGold = parseInt(cc.sys.localStorage.getItem("totalGold"), l.Global.totalGold) || l.Global.totalGold;
l.Global.levelCount = parseInt(cc.sys.localStorage.getItem("levelCount")) || 0;
l.Global.selectedLevel = parseInt(cc.sys.localStorage.getItem("levelGame")) || l.Global.selectedLevel;
console.log("LevelCount", l.Global.levelCount);
this.updateGold();
this.loadItemLevel();
console.log("Tien ", l.Global.totalGold);
};
t.prototype.onClickShopView = function() {
var e = cc.instantiate(this.prfShopView);
this.node.addChild(e);
};
t.prototype.onClickBack = function() {
this.node.destroy();
};
t.prototype.updateGold = function() {
this.lbGold.string = "$" + l.Global.totalGold + " ";
cc.sys.localStorage.setItem("totalGold", l.Global.totalGold);
};
t.prototype.clickRemoveCache = function() {
cc.sys.localStorage.clear();
};
t.prototype.loadItemLevel = function() {
for (var e = 0; e < this.levelOrder.length; e++) for (var t = 0; t < this.levelOrder[e].length; t++) {
var o = this.levelOrder[e][t], r = cc.instantiate(this.prfItemLevel).getComponent(c.default), a = (cc.sys.localStorage.getItem("level_" + o + "_completed"), 
"true" === cc.sys.localStorage.getItem("level_" + o + "_unlocked") || 0 === o), n = "true" === cc.sys.localStorage.getItem("level_" + o + "_flag") || !1, l = "true" === cc.sys.localStorage.getItem("level_" + o + "_isBoss") || !1;
console.log("isBoss", l);
var s = "true" === cc.sys.localStorage.getItem("level_" + o + "_flagBoss");
r.setData(o, !0, l, a, n, s);
this.nLayout.addChild(r.node);
}
};
t.prototype.updateLevelStatus = function(e) {
this.nLayout.children.forEach(function(t) {
var o = t.getComponent(c.default);
if (o.idLevel === e) {
var r = "true" === cc.sys.localStorage.getItem("level_" + e + "_completed"), a = "true" === cc.sys.localStorage.getItem("level_" + e + "_unlocked") || 0 == e, n = "true" === cc.sys.localStorage.getItem("level_" + e + "_flag") || !1, l = "true" === cc.sys.localStorage.getItem("level_" + e + "_isBoss"), s = "true" === cc.sys.localStorage.getItem("level_" + e + "_flagBoss");
o.setData(e, r, l, a, n, s);
}
});
};
t.prototype.start = function() {};
var o;
t.instance = null;
n([ p(cc.Prefab) ], t.prototype, "prfShopView", void 0);
n([ p(cc.Label) ], t.prototype, "lbGold", void 0);
n([ p(cc.Prefab) ], t.prototype, "prfItemLevel", void 0);
n([ p(cc.Node) ], t.prototype, "nLayout", void 0);
return o = n([ i ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../CardHero.Global": "CardHero.Global",
"./CardHero.ItemLevel": "CardHero.ItemLevel"
} ],
"CardHero.Monster": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "97818ABoAtAvIFaaw7xkDg8", "CardHero.Monster");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../CardHero.Global"), c = e("./CardHero.GameView"), s = cc._decorator, i = s.ccclass, p = s.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nMonster = null;
t.dame = 1;
t.monsterId = 0;
t.jumpTween = null;
return t;
}
t.prototype.onLoad = function() {
this.setMonsterJump();
};
t.prototype.setMonster = function(e, t, o) {
this.monsterId = e;
this.node.getComponent(cc.Sprite).spriteFrame = c.default.instance.listSpfMonster[e];
l.Global.hpMonster = t;
l.Global.dameMonster = o;
c.default.instance.updateHpBagGuy();
};
t.prototype.receiveDamage = function(e) {
l.Global.hpMonster -= e;
c.default.instance.effectDameBagGuy(c.default.instance.lbDameChar, e);
c.default.instance.updateHpBagGuy();
if (l.Global.hpMonster <= 0) {
l.Global.hpMonster = 0;
c.default.instance.updateHpBagGuy();
this.onDeath();
}
};
t.prototype.onDeath = function() {
var e = this;
this.node.stopAllActions();
this.scheduleOnce(function() {
e.node.destroy();
c.default.instance.monstersDefeated++;
console.log("mau", l.Global.hpMonster);
}, .3);
};
t.prototype.setMonsterJump = function() {
var e = cc.tween().to(.5, {
y: 100
}, {
easing: "sineOut"
}), t = cc.tween().to(.3, {
y: 0
}, {
easing: "sineIn"
}), o = cc.tween().sequence(e, t), r = cc.tween().repeatForever(o);
cc.tween(this.node).then(r).start();
};
t.prototype.start = function() {};
n([ p(cc.Node) ], t.prototype, "nMonster", void 0);
return n([ i ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../CardHero.Global": "CardHero.Global",
"./CardHero.GameView": "CardHero.GameView"
} ],
"CardHero.Pause": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cbff2xa7BNLAp7JQj6l39uy", "CardHero.Pause");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../CardHero.GameView"), c = cc._decorator, s = c.ccclass, i = (c.property, 
function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.clickRestart = function() {
l.default.instance.onClickRestart();
this.node.destroy();
cc.director.resume();
};
t.prototype.clickResume = function() {
l.default.instance.onClickResume();
this.node.destroy();
};
t.prototype.clickHome = function() {
this.node.destroy();
l.default.instance.destroyGame();
};
t.prototype.start = function() {};
return n([ s ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {
"../CardHero.GameView": "CardHero.GameView"
} ],
"CardHero.ShopView": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d5bf412FxxNLb5JZfujcl/n", "CardHero.ShopView");
var r, a = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), n = this && this.__decorate || function(e, t, o, r) {
var a, n = arguments.length, l = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (l = (n < 3 ? a(l) : n > 3 ? a(t, o, l) : a(t, o)) || l);
return n > 3 && l && Object.defineProperty(t, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../../../CardHero.Global"), c = e("./CardHero.ItemShop"), s = cc._decorator, i = s.ccclass, p = s.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.prfItem = null;
t.nLayout = null;
t.listSpfItem = [];
t.lbPriceHp = null;
t.lbPriceAttack = null;
t.itemPrices = [ 1, 1 ];
return t;
}
o = t;
t.prototype.onLoad = function() {
o.instance = this;
this.loadItem();
this.updatePriceHp();
this.updatePriceAttack();
};
t.prototype.onClickClose = function() {
this.node.destroy();
};
t.prototype.loadItem = function() {
for (var e = 0; e < l.Global.priceItem.length; e++) {
var t = cc.instantiate(this.prfItem).getComponent(c.default);
t.setData(e, l.Global.priceItem[e]);
this.nLayout.addChild(t.node);
}
};
t.prototype.getSavedItemState = function(e) {
var t = cc.sys.localStorage.getItem("item_" + e);
return t ? JSON.parse(t) : null;
};
t.prototype.updatePrices = function() {
this.lbPriceHp.string = "$ " + l.Global.priceItem[0];
this.lbPriceAttack.string = "$ " + l.Global.priceItem[1];
};
t.prototype.updateAllItems = function() {
console.log("Updating all items...");
this.nLayout.children.forEach(function(e) {
var t = e.getComponent(c.default);
console.log("Updating item:", t.idItem);
t.loadItemState();
t.updatePrice();
t.checkBuy();
});
};
t.prototype.updatePriceHp = function() {
this.lbPriceHp.string = "$ " + l.Global.priceItem[0];
};
t.prototype.updatePriceAttack = function() {
this.lbPriceAttack.string = "$ " + l.Global.priceItem[1];
};
t.prototype.start = function() {};
var o;
t.instance = null;
n([ p(cc.Prefab) ], t.prototype, "prfItem", void 0);
n([ p(cc.Node) ], t.prototype, "nLayout", void 0);
n([ p(cc.SpriteFrame) ], t.prototype, "listSpfItem", void 0);
n([ p(cc.Label) ], t.prototype, "lbPriceHp", void 0);
n([ p(cc.Label) ], t.prototype, "lbPriceAttack", void 0);
return o = n([ i ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../CardHero.Global": "CardHero.Global",
"./CardHero.ItemShop": "CardHero.ItemShop"
} ]
}, {}, [ "CardHero.GameManager", "CardHero.Global", "CardHero.Card", "CardHero.Char", "CardHero.GameView", "CardHero.ItemLevel", "CardHero.LevelView", "CardHero.Monster", "CardHero.GameOver", "CardHero.Pause", "CardHero.ItemShop", "CardHero.ShopView" ]);