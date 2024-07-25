
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/MatchingCardHeros/scripts/CardHero.GameManager');
require('./assets/MatchingCardHeros/scripts/CardHero.Global');
require('./assets/MatchingCardHeros/scripts/game/CardHero.Card');
require('./assets/MatchingCardHeros/scripts/game/CardHero.Char');
require('./assets/MatchingCardHeros/scripts/game/CardHero.GameView');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59e726PBpdNqJTecm3LWYt9', 'CardHero.Card');
// MatchingCardHeros/scripts/game/CardHero.Card.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardHero_GameView_1 = require("./CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nCardBack = null;
        _this.nCardFront = null;
        _this.nCardSpf = null;
        _this.isClicked = false;
        _this.idCard = 0;
        return _this;
        // start() {
        // }
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Card.prototype.onLoad = function () {
        this.flipToBack();
        this.scheduleOnce(this.flipTofront, 5);
    };
    Card.prototype.setData = function (id) {
        this.idCard = id;
        this.nCardSpf.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listSpfCards[id];
    };
    Card.prototype.onClickCards = function () {
        if (this.isClicked)
            return;
        this.isClicked = true;
        this.flipCard();
        CardHero_GameView_1.default.instance.addSelectedCard(this);
        CardHero_GameView_1.default.instance.countClick++;
        if (CardHero_GameView_1.default.instance.countClick == 2) {
            CardHero_GameView_1.default.instance.nMaskClick.active = true;
            this.scheduleOnce(function () {
                CardHero_GameView_1.default.instance.nMaskClick.active = false;
            }, 0.6);
            CardHero_GameView_1.default.instance.countClick = 0;
        }
    };
    Card.prototype.setCards = function (active) {
        this.nCardBack.active = active;
        this.nCardFront.active = !active;
    };
    Card.prototype.flipToBack = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        cc.tween(this.node)
            .to(0.3, { scaleX: 0.1 })
            .call(function () {
            _this.setCards(true);
            if (callback)
                callback();
        })
            .to(0.3, { scaleX: 1 }).start();
    };
    Card.prototype.flipTofront = function () {
        var _this = this;
        if (!this.nCardFront.active) {
            cc.tween(this.node)
                .to(0.3, { scaleX: 0 })
                .call(function () {
                _this.setCards(false);
            })
                .to(0.3, { scaleX: 1 })
                .start();
        }
    };
    Card.prototype.flipCard = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.3, { scaleX: 0 })
            .call(function () {
            if (!_this.nCardBack.active) {
                _this.setCards(true);
            }
            else {
                _this.setCards(false);
            }
        }).to(0.3, { scaleX: 1 }).start();
    };
    __decorate([
        property(cc.Node)
    ], Card.prototype, "nCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "nCardFront", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "nCardSpf", void 0);
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErRUM7UUE1RUUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7UUFrRVYsWUFBWTtRQUNaLElBQUk7UUFFSixpQkFBaUI7SUFDckIsQ0FBQztJQXJFRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMs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SUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStFeEI7SUFBRCxXQUFDO0NBL0VELEFBK0VDLENBL0VpQyxFQUFFLENBQUMsU0FBUyxHQStFN0M7a0JBL0VvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5DYXJkQmFjazogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5DYXJkRnJvbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICBuQ2FyZFNwZjogY2MuTm9kZSA9IG51bGw7XG4gICBpc0NsaWNrZWQgPSBmYWxzZTtcbiAgIGlkQ2FyZCA9IDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmZsaXBUb0JhY2soKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5mbGlwVG9mcm9udCw1KTtcbiAgICB9XG4gICAgc2V0RGF0YShpZCkge1xuICAgICAgICB0aGlzLmlkQ2FyZCA9IGlkO1xuICAgICAgICB0aGlzLm5DYXJkU3BmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZVZpZXcuaW5zdGFuY2UubGlzdFNwZkNhcmRzW2lkXTtcbiAgICB9XG5cbiAgICBvbkNsaWNrQ2FyZHMoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDbGlja2VkKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGlwQ2FyZCgpO1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5hZGRTZWxlY3RlZENhcmQodGhpcyk7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2srKztcbiAgICAgICAgaWYoR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljayA9PSAyKSB7XG4gICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5uTWFza0NsaWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uubk1hc2tDbGljay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sMC42KVxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljayA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDYXJkcyhhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5uQ2FyZEJhY2suYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLm5DYXJkRnJvbnQuYWN0aXZlID0gIWFjdGl2ZTtcbiAgICB9XG5cbiAgICBmbGlwVG9CYWNrKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZVg6IDAuMSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyZHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAxIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmxpcFRvZnJvbnQoKSB7XG4gICAgICAgIGlmKCF0aGlzLm5DYXJkRnJvbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4zLHtzY2FsZVg6MH0pXG4gICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7c2NhbGVYOjF9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwQ2FyZCgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAudG8oMC4zLHtzY2FsZVg6IDB9KVxuICAgICAgICAuY2FsbCgoKSA9PntcbiAgICAgICAgICAgIGlmKCF0aGlzLm5DYXJkQmFjay5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKHRydWUpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyZHMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50bygwLjMsIHtzY2FsZVg6MX0pLnN0YXJ0KCk7XG4gICAgfVxuICAgXG4gICAgLy8gc3RhcnQoKSB7XG4gICAgLy8gfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/CardHero.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03c11M17HlIsZ+0lARMsnQQ', 'CardHero.Global');
// MatchingCardHeros/scripts/CardHero.Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.totalGold = 0;
    Global.hpChar = 10;
    Global.hpMonster = 10;
    Global.dameMonster = 1;
    Global.dameCharSmall = 5;
    Global.dameCharNormal = 10;
    Global.dameCharBig = 15;
    return Global;
}());
exports.Global = Global;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBU0EsQ0FBQztJQVJVLGdCQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsYUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNaLGdCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2Ysa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEIsb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIscUJBQWMsR0FBRyxFQUFFLENBQUM7SUFDcEIsa0JBQVcsR0FBRyxFQUFFLENBQUM7SUFFNUIsYUFBQztDQVRELEFBU0MsSUFBQTtBQVRZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuZXhwb3J0IGNsYXNzIEdsb2JhbCAge1xuICAgIHN0YXRpYyB0b3RhbEdvbGQgPSAwO1xuICAgIHN0YXRpYyBocENoYXIgPSAxMDtcbiAgICBzdGF0aWMgaHBNb25zdGVyID0gMTA7XG4gICAgc3RhdGljIGRhbWVNb25zdGVyID0gMTtcbiAgICBzdGF0aWMgZGFtZUNoYXJTbWFsbCA9IDU7XG4gICAgc3RhdGljIGRhbWVDaGFyTm9ybWFsID0gMTA7XG4gICAgc3RhdGljIGRhbWVDaGFyQmlnID0gMTU7XG4gICAgLy9zdGF0aWMgZGF0YUF0dGFjayA9IFt7aWQ6IDAsfV1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fd3cLAkYdOj7WjRM40JxNH', 'CardHero.GameView');
// MatchingCardHeros/scripts/game/CardHero.GameView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardHero_Global_1 = require("../CardHero.Global");
var CardHero_Card_1 = require("./CardHero.Card");
var CardHero_Char_1 = require("./CardHero.Char");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfCard = null;
        _this.listSpfCards = [];
        _this.nTableCards = null;
        _this.lbHpChar = null;
        _this.lbHpMonster = null;
        _this.nMaskClick = null;
        _this.nMaskLoadGame = null;
        _this.lbDameMonster = null;
        _this.isClick = false;
        _this.countClick = 0;
        _this.listIdCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        _this.selectedCards = [];
        _this.dataCard = [];
        _this.charArchers = null;
        _this.charFighter = null;
        _this.charMagic = null;
        _this.rows = 5;
        _this.cols = 5;
        _this.spacing = 10;
        _this.startX = -337;
        _this.startY = 210;
        _this.tileWidth = 135;
        return _this;
        // update (dt) {}
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        var _this = this;
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.updateHpChar();
        this.updateHpBagGuy();
    };
    GameView.prototype.maskLoadGame = function () {
        var _this = this;
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(function () {
            _this.nMaskLoadGame.active = false;
        }, 5);
    };
    GameView.prototype.loadCards = function () {
        // for(let i = 0; i < 25; i++) {
        //     let card = cc.instantiate(this.prfCard).getComponent(Card)
        //     card.setData(this.listIdCard[i])
        //     this.nTableCards.addChild(card.node);
        // }
        var idIndex = 0;
        for (var i = 0; i < this.rows; i++) {
            this.dataCard[i] = [];
            for (var j = 0; j < this.cols; j++) {
                if (idIndex >= this.listIdCard.length)
                    break;
                var card = cc.instantiate(this.prfCard).getComponent(CardHero_Card_1.default);
                card.setData(this.listIdCard[idIndex]);
                this.nTableCards.addChild(card.node);
                card.node.x = this.startX + j * this.tileWidth + this.tileWidth / 2;
                card.node.y = this.startY - i * this.tileWidth + this.tileWidth / 2;
                this.dataCard[i][j] = card;
                idIndex++;
            }
        }
    };
    GameView.prototype.gameOver = function () {
        if (CardHero_Global_1.Global.hpChar == 0) {
            console.log("Thua con me may roiiiiiiii");
        }
    };
    GameView.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    GameView.prototype.addSelectedCard = function (card) {
        if (this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.scheduleOnce(this.checkMatch.bind(this), 0.8);
            }
        }
    };
    GameView.prototype.checkMatch = function () {
        var _a = this.selectedCards, firstCard = _a[0], secondCard = _a[1];
        var doubleDame = false;
        if (firstCard.idCard === 12 || secondCard.idCard === 12) {
            doubleDame = true;
            var multiplierCard = (firstCard.idCard === 12) ? secondCard : firstCard;
            console.log("Id x2 ", multiplierCard.idCard);
            this.selectAttack(multiplierCard.idCard, true);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else if (firstCard.idCard === secondCard.idCard) {
            this.selectAttack(firstCard.idCard, false);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else {
            this.effectDameBagGuy();
            CardHero_Global_1.Global.hpChar--;
            this.updateHpChar();
            firstCard.flipCard();
            secondCard.flipCard();
            firstCard.isClicked = false;
            secondCard.isClicked = false;
            this.gameOver();
        }
        this.selectedCards = [];
    };
    GameView.prototype.selectAttack = function (id, isDoubleDame) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                break;
            case 1:
                console.log("Mau ne ");
                if (CardHero_Global_1.Global.hpChar >= 10)
                    return;
                else {
                    CardHero_Global_1.Global.hpChar += 5;
                    this.updateHpChar();
                }
                break;
            case 2:
                console.log("Cung nho ban ");
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                console.log("dame small ", CardHero_Global_1.Global.dameCharSmall);
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharSmall;
                this.charArchers.charAttack();
                this.updateHpBagGuy();
                break;
            case 3:
                console.log("Cung Tb ban ");
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharNormal;
                this.charArchers.charAttack();
                this.updateHpBagGuy();
                break;
            case 4:
                console.log("Cung To ban ");
                this.charArchers.charAttack();
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharBig;
                this.updateHpBagGuy();
                break;
            case 5:
                console.log("KIem danh ");
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                console.log("dame small ", CardHero_Global_1.Global.dameCharSmall);
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharSmall;
                this.charFighter.charAttack();
                this.updateHpBagGuy();
                break;
            case 6:
                console.log("KIem danh ");
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharNormal;
                this.charFighter.charAttack();
                this.updateHpBagGuy();
                break;
            case 7:
                console.log("KIem danh ");
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharBig;
                this.charFighter.charAttack();
                this.updateHpBagGuy();
                break;
            case 8:
                console.log("KIem danh ");
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharSmall;
                console.log("Phap Su ");
                this.charMagic.charAttack();
                break;
            case 9:
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharNormal;
                console.log("Phap Su ");
                this.charMagic.charAttack();
                this.updateHpBagGuy();
                break;
            case 10:
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharBig;
                console.log("Phap Su ");
                this.charMagic.charAttack();
                this.updateHpBagGuy();
                break;
            default:
                break;
        }
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.effectDameBagGuy = function () {
        var _this = this;
        this.lbDameMonster.active = true;
        this.lbDameMonster.getComponent(cc.Label).string = "-" + CardHero_Global_1.Global.dameMonster;
        cc.tween(this.lbDameMonster)
            .to(0.8, { y: 200 })
            .call(function () {
            _this.lbDameMonster.active = false;
            _this.lbDameMonster.y = -70;
        }).start();
    };
    GameView.prototype.updateHpChar = function () {
        this.lbHpChar.string = CardHero_Global_1.Global.hpChar + ' ';
    };
    GameView.prototype.updateHpBagGuy = function () {
        this.lbHpMonster.string = CardHero_Global_1.Global.hpMonster + ' ';
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfCard", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameView.prototype, "listSpfCards", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nTableCards", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbHpChar", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbHpMonster", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMaskClick", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMaskLoadGame", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "lbDameMonster", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charArchers", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charFighter", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charMagic", void 0);
    GameView = GameView_1 = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpUEM7UUE5T0csYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUs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RCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsd0JBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3JELENBQUM7O0lBNU9hLGlCQUFRLEdBQWEsSUFBSSxDQUFDO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQU85QjtRQURDLFFBQVEsQ0FBQyx1QkFBSSxDQUFDO2lEQUNVO0lBRXpCO1FBREMsUUFBUSxDQUFDLHVCQUFJLENBQUM7aURBQ1U7SUFFekI7UUFEQyxRQUFRLENBQUMsdUJBQUksQ0FBQzsrQ0FDUTtJQTVCTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaVA1QjtJQUFELGVBQUM7Q0FqUEQsQUFpUEMsQ0FqUHFDLEVBQUUsQ0FBQyxTQUFTLEdBaVBqRDtrQkFqUG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0NhcmRIZXJvLkdsb2JhbFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZEhlcm8uQ2FyZFwiO1xuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2FyZEhlcm8uQ2hhclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkNhcmQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UYWJsZUNhcmRzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJIcENoYXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJIcE1vbnN0ZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTWFza0NsaWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTWFza0xvYWRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYkRhbWVNb25zdGVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpc0NsaWNrID0gZmFsc2U7XG4gICAgY291bnRDbGljayA9IDA7XG4gICAgbGlzdElkQ2FyZCA9IFswLCAwLCAxLCAxLCAyLCAyLCAzLCAzLCA0LCA0LCA1LCA1LCA2LCA2LCA3LCA3LCA4LCA4LCA5LCA5LCAxMCwgMTAsIDExLCAxMSwgMTJdO1xuICAgIHNlbGVjdGVkQ2FyZHMgPSBbXTtcbiAgICBkYXRhQ2FyZCA9IFtdO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJBcmNoZXJzOiBDaGFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyRmlnaHRlcjogQ2hhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhck1hZ2ljOiBDaGFyID0gbnVsbDtcbiAgICByb3dzID0gNTtcbiAgICBjb2xzID0gNTtcbiAgICBzcGFjaW5nID0gMTA7XG4gICAgcHJpdmF0ZSBzdGFydFg6IG51bWJlciA9IC0zMzc7XG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlciA9IDIxMDtcbiAgICBwcml2YXRlIHRpbGVXaWR0aDogbnVtYmVyID0gMTM1O1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENhcmRzKCk7XG5cbiAgICAgICAgfSwgMSlcblxuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgfVxuXG4gICAgbWFza0xvYWRHYW1lKCkge1xuICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uTWFza0xvYWRHYW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCA1KVxuICAgIH1cblxuICAgIGxvYWRDYXJkcygpIHtcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICAgICAgLy8gICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZDYXJkKS5nZXRDb21wb25lbnQoQ2FyZClcbiAgICAgICAgLy8gICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaV0pXG4gICAgICAgIC8vICAgICB0aGlzLm5UYWJsZUNhcmRzLmFkZENoaWxkKGNhcmQubm9kZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IGlkSW5kZXggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNhcmRbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRJbmRleCA+PSB0aGlzLmxpc3RJZENhcmQubGVuZ3RoKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZDYXJkKS5nZXRDb21wb25lbnQoQ2FyZCk7XG4gICAgICAgICAgICAgICAgY2FyZC5zZXREYXRhKHRoaXMubGlzdElkQ2FyZFtpZEluZGV4XSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmFkZENoaWxkKGNhcmQubm9kZSk7XG4gICAgICAgICAgICAgICAgY2FyZC5ub2RlLnggPSB0aGlzLnN0YXJ0WCArIGogKiB0aGlzLnRpbGVXaWR0aCArIHRoaXMudGlsZVdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueSA9IHRoaXMuc3RhcnRZIC0gaSAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUNhcmRbaV1bal0gPSBjYXJkO1xuICAgICAgICAgICAgICAgIGlkSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuaHBDaGFyID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGh1YSBjb24gbWUgbWF5IHJvaWlpaWlpaWlcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2h1ZmZsZUFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdGVkQ2FyZChjYXJkOiBDYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcmRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tNYXRjaC5iaW5kKHRoaXMpLCAwLjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGVja01hdGNoKCkge1xuICAgICAgICBsZXQgW2ZpcnN0Q2FyZCwgc2Vjb25kQ2FyZF0gPSB0aGlzLnNlbGVjdGVkQ2FyZHM7XG4gICAgICAgIGxldCBkb3VibGVEYW1lID0gZmFsc2U7XG4gICAgICAgIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSAxMiB8fCBzZWNvbmRDYXJkLmlkQ2FyZCA9PT0gMTIpIHtcbiAgICAgICAgICAgIGRvdWJsZURhbWUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG11bHRpcGxpZXJDYXJkID0gKGZpcnN0Q2FyZC5pZENhcmQgPT09IDEyKSA/IHNlY29uZENhcmQgOiBmaXJzdENhcmQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklkIHgyIFwiLCBtdWx0aXBsaWVyQ2FyZC5pZENhcmQpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdHRhY2sobXVsdGlwbGllckNhcmQuaWRDYXJkLCB0cnVlKVxuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSBzZWNvbmRDYXJkLmlkQ2FyZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdHRhY2soZmlyc3RDYXJkLmlkQ2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0RGFtZUJhZ0d1eSgpXG4gICAgICAgICAgICBHbG9iYWwuaHBDaGFyLS07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLmZsaXBDYXJkKCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLmZsaXBDYXJkKCk7XG4gICAgICAgICAgICBmaXJzdENhcmQuaXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMgPSBbXTtcbiAgICB9XG5cbiAgICBzZWxlY3RBdHRhY2soaWQsIGlzRG91YmxlRGFtZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHaWFwIG5lIFwiKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1IG5lIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICs9IDU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdW5nIG5obyBiYW4gXCIpO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYW1lIHNtYWxsIFwiLCBHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwTW9uc3RlciAtPSBHbG9iYWwuZGFtZUNoYXJTbWFsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhck5vcm1hbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVG8gYmFuIFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhckJpZztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktJZW0gZGFuaCBcIik7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyU21hbGwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhbWUgc21hbGwgXCIsIEdsb2JhbC5kYW1lQ2hhclNtYWxsKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhclNtYWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0llbSBkYW5oIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhck5vcm1hbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktJZW0gZGFuaCBcIik7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwTW9uc3RlciAtPSBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcEJhZ0d1eSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLSWVtIGRhbmggXCIpO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwTW9uc3RlciAtPSBHbG9iYWwuZGFtZUNoYXJTbWFsbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBoYXAgU3UgXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhck5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBoYXAgU3UgXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwTW9uc3RlciAtPSBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQaGFwIFN1IFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJNYWdpYy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcEJhZ0d1eSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eSgpIHtcbiAgICAgICAgdGhpcy5sYkRhbWVNb25zdGVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGJEYW1lTW9uc3Rlci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgR2xvYmFsLmRhbWVNb25zdGVyO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxiRGFtZU1vbnN0ZXIpXG4gICAgICAgICAgICAudG8oMC44LCB7IHk6IDIwMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGJEYW1lTW9uc3Rlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxiRGFtZU1vbnN0ZXIueSA9IC03MDtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIHVwZGF0ZUhwQ2hhcigpIHtcbiAgICAgICAgdGhpcy5sYkhwQ2hhci5zdHJpbmcgPSBHbG9iYWwuaHBDaGFyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZUhwQmFnR3V5KCkge1xuICAgICAgICB0aGlzLmxiSHBNb25zdGVyLnN0cmluZyA9IEdsb2JhbC5ocE1vbnN0ZXIgKyAnICc7XG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/CardHero.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5a465If8ZDQIaV07VsCqlJ', 'CardHero.GameManager');
// MatchingCardHeros/scripts/CardHero.GameManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardHero_GameView_1 = require("./game/CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGameView = null;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.onLoad = function () { };
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.onClickPlay = function () {
        var gameView = cc.instantiate(this.prfGameView).getComponent(CardHero_GameView_1.default);
        this.node.addChild(gameView.node);
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameView", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhEQUFnRDtBQUUxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWdCQztRQWJHLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztRQVk5QixpQkFBaUI7SUFDckIsQ0FBQztJQVpHLDRCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosMkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLDJCQUFRLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQVZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1U7SUFIYixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZ0IvQjtJQUFELGtCQUFDO0NBaEJELEFBZ0JDLENBaEJ3QyxFQUFFLENBQUMsU0FBUyxHQWdCcEQ7a0JBaEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZHYW1lVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgICBsZXQgZ2FtZVZpZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVWaWV3KS5nZXRDb21wb25lbnQoR2FtZVZpZXcpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lVmlldy5ub2RlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.Char.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac3adOm64FKYpJzST+OWLOt', 'CardHero.Char');
// MatchingCardHeros/scripts/game/CardHero.Char.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Char = /** @class */ (function (_super) {
    __extends(Char, _super);
    function Char() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // @property
    // idChar: number = 0
    // dame = 0;
    Char.prototype.start = function () {
    };
    Char.prototype.onLoad = function () {
    };
    Char.prototype.charAttack = function () {
        var _this = this;
        var pos = this.node.x;
        cc.tween(this.node)
            .to(0.5, { x: 200 })
            .call(function () {
            _this.node.x = pos;
        }).start();
    };
    Char = __decorate([
        ccclass
    ], Char);
    return Char;
}(cc.Component));
exports.default = Char;
// update (dt) {}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5Qzs7SUF1QkEsQ0FBQztJQXRCRyx3QkFBd0I7SUFFeEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBRVosb0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxxQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFBQSxpQkFRQztRQVBHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRW5CLENBQUM7SUF0QmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F1QnhCO0lBQUQsV0FBQztDQXZCRCxBQXVCQyxDQXZCaUMsRUFBRSxDQUFDLFNBQVMsR0F1QjdDO2tCQXZCb0IsSUFBSTtBQTRCekIsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIGlkQ2hhcjogbnVtYmVyID0gMFxuICAgIC8vIGRhbWUgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG4gICAgY2hhckF0dGFjaygpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS54O1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IDIwMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gcG9zO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuLy8gdXBkYXRlIChkdCkge31cblxuIl19
//------QC-SOURCE-SPLIT------
