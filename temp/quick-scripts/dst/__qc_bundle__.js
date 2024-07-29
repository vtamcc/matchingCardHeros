
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
require('./assets/MatchingCardHeros/scripts/game/CardHero.LevelView');
require('./assets/MatchingCardHeros/scripts/game/CardHero.Monster');
require('./assets/MatchingCardHeros/scripts/game/popup/CardHero.GameOver');
require('./assets/MatchingCardHeros/scripts/game/popup/CardHero.Pause');
require('./assets/MatchingCardHeros/scripts/game/popup/Shop/CardHero.ItemShop');
require('./assets/MatchingCardHeros/scripts/game/popup/Shop/CardHero.ShopView');

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
var CardHero_LevelView_1 = require("./game/CardHero.LevelView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGameView = null;
        _this.prfGameLevel = null;
        return _this;
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.instance = this;
    };
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.onClickPlay = function () {
        // if(GameView.instance != null)
        //     GameView.instance = null
        var gameView = cc.instantiate(this.prfGameView).getComponent(CardHero_GameView_1.default);
        this.node.addChild(gameView.node);
    };
    GameManager.prototype.onClickLevel = function () {
        var levelView = cc.instantiate(this.prfGameLevel).getComponent(CardHero_LevelView_1.default);
        this.node.addChild(levelView.node);
    };
    var GameManager_1;
    GameManager.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameView", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameLevel", void 0);
    GameManager = GameManager_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXENhcmRIZXJvLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhEQUFnRDtBQUNoRCxnRUFBOEM7QUFFeEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE0QkM7UUF6QkcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBYyxJQUFJLENBQUM7O1FBc0IvQixpQkFBaUI7SUFDckIsQ0FBQztvQkE1Qm9CLFdBQVc7SUFNNUIsNEJBQU0sR0FBTjtRQUNJLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxnQ0FBZ0M7UUFDaEMsK0JBQStCO1FBRS9CLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7SUF4QmEsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDVztJQUxkLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Qi9CO0lBQUQsa0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QndDLEVBQUUsQ0FBQyxTQUFTLEdBNEJwRDtrQkE1Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZS9DYXJkSGVyby5HYW1lVmlld1wiO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vZ2FtZS9DYXJkSGVyby5MZXZlbFZpZXdcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkdhbWVMZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja1BsYXkoKSB7XHJcbiAgICAgICAgLy8gaWYoR2FtZVZpZXcuaW5zdGFuY2UgIT0gbnVsbClcclxuICAgICAgICAvLyAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSBudWxsXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldykuZ2V0Q29tcG9uZW50KEdhbWVWaWV3KVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lVmlldy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrTGV2ZWwoKSB7XHJcbiAgICAgICAgbGV0IGxldmVsVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZUxldmVsKS5nZXRDb21wb25lbnQoTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbFZpZXcubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
    Global.totalGold = 10;
    Global.hpChar = 10;
    Global.hpMonster = 10;
    Global.shield = 0;
    Global.dameMonster = 1;
    Global.dameCharSmall = 5;
    Global.dameCharNormal = 10;
    Global.dameCharBig = 15;
    // static priceItemHp = 1;
    // static priceItemAttack = 1;
    Global.priceItem = [1, 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXENhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBYUEsQ0FBQztJQVpVLGdCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsYUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNaLGdCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsYUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLGtCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLG9CQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLHFCQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLGtCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDdkIsZ0JBQVMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUU1QixhQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbCAge1xyXG4gICAgc3RhdGljIHRvdGFsR29sZCA9IDEwO1xyXG4gICAgc3RhdGljIGhwQ2hhciA9IDEwO1xyXG4gICAgc3RhdGljIGhwTW9uc3RlciA9IDEwO1xyXG4gICAgc3RhdGljIHNoaWVsZCA9IDA7XHJcbiAgICBzdGF0aWMgZGFtZU1vbnN0ZXIgPSAxO1xyXG4gICAgc3RhdGljIGRhbWVDaGFyU21hbGwgPSA1O1xyXG4gICAgc3RhdGljIGRhbWVDaGFyTm9ybWFsID0gMTA7XHJcbiAgICBzdGF0aWMgZGFtZUNoYXJCaWcgPSAxNTtcclxuICAgIC8vIHN0YXRpYyBwcmljZUl0ZW1IcCA9IDE7XHJcbiAgICAvLyBzdGF0aWMgcHJpY2VJdGVtQXR0YWNrID0gMTtcclxuICAgIHN0YXRpYyBwcmljZUl0ZW0gPSBbMSwxXVxyXG4gICAgLy9zdGF0aWMgZGF0YUF0dGFjayA9IFt7aWQ6IDAsfV1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkNoYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBdUJBLENBQUM7SUF0Qkcsd0JBQXdCO0lBRXhCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUVaLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQscUJBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQUEsaUJBUUM7UUFQRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ25CLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBdEJnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdUJ4QjtJQUFELFdBQUM7Q0F2QkQsQUF1QkMsQ0F2QmlDLEVBQUUsQ0FBQyxTQUFTLEdBdUI3QztrQkF2Qm9CLElBQUk7QUE0QnpCLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gaWRDaGFyOiBudW1iZXIgPSAwXHJcbiAgICAvLyBkYW1lID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuICAgIGNoYXJBdHRhY2soKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAyMDAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBwb3M7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/popup/Shop/CardHero.ItemShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61dcdSfOKhN/qX6CvtUjTg5', 'CardHero.ItemShop');
// MatchingCardHeros/scripts/game/popup/Shop/CardHero.ItemShop.ts

"use strict";
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
var CardHero_Global_1 = require("../../../CardHero.Global");
var CardHero_LevelView_1 = require("../../CardHero.LevelView");
var CardHero_ShopView_1 = require("./CardHero.ShopView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemShop = /** @class */ (function (_super) {
    __extends(ItemShop, _super);
    function ItemShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nItem = null;
        _this.nMask = null;
        // @property(cc.Label)
        // lbPrice: cc.Label = null;
        _this.idItem = 0;
        _this.price = 0;
        return _this;
        // update (dt) {}
    }
    ItemShop.prototype.onLoad = function () { };
    ItemShop.prototype.setData = function (id, price) {
        this.idItem = id;
        this.price = price;
        this.loadItemState();
        this.nItem.getComponent(cc.Sprite).spriteFrame = CardHero_ShopView_1.default.instance.listSpfItem[id];
        this.updatePrice();
        this.checkBuy();
    };
    ItemShop.prototype.updatePrice = function () {
        this.price = CardHero_Global_1.Global.priceItem[this.idItem];
    };
    ItemShop.prototype.checkBuy = function () {
        if (CardHero_Global_1.Global.totalGold >= this.price) {
            this.nMask.active = false;
            console.log("xzzzzzzz", this.price);
        }
        else {
            this.nMask.active = true;
        }
    };
    ItemShop.prototype.clickBuy = function () {
        if (CardHero_Global_1.Global.totalGold >= this.price) {
            CardHero_Global_1.Global.totalGold -= this.price;
            if (this.idItem == 0) {
                CardHero_Global_1.Global.hpChar += 5;
                cc.sys.localStorage.setItem("hpChar", CardHero_Global_1.Global.hpChar);
                console.log("HpChar increased to: " + CardHero_Global_1.Global.hpChar);
            }
            else if (this.idItem == 1) {
                CardHero_Global_1.Global.dameCharSmall += 3;
                CardHero_Global_1.Global.dameCharNormal += 3;
                CardHero_Global_1.Global.dameCharBig += 3;
                cc.sys.localStorage.setItem("dameCharSmall", CardHero_Global_1.Global.dameCharSmall);
                cc.sys.localStorage.setItem("dameCharNormal", CardHero_Global_1.Global.dameCharNormal);
                cc.sys.localStorage.setItem("dameCharBig", CardHero_Global_1.Global.dameCharBig);
                console.log("Damage increased to: Small: " + CardHero_Global_1.Global.dameCharSmall + ", Normal: " + CardHero_Global_1.Global.dameCharNormal + ", Big: " + CardHero_Global_1.Global.dameCharBig);
            }
            CardHero_Global_1.Global.priceItem[this.idItem]++;
            this.saveItemState(); // Save item state after purchase
            console.log("Bought item " + this.idItem + ", new price: " + CardHero_Global_1.Global.priceItem[this.idItem] + ", remaining gold: " + CardHero_Global_1.Global.totalGold);
            CardHero_ShopView_1.default.instance.updateAllItems(); // Update all items
            CardHero_ShopView_1.default.instance.updatePrices();
            CardHero_LevelView_1.default.instance.updateGold(); // Update the displayed gold amount
            this.updatePrice(); // Update the price after purchase
        }
        else {
            console.log("Not enough gold!");
        }
    };
    ItemShop.prototype.saveItemState = function () {
        var itemState = {
            id: this.idItem,
            price: CardHero_Global_1.Global.priceItem[this.idItem]
        };
        cc.sys.localStorage.setItem("item_" + this.idItem, JSON.stringify(itemState));
        console.log("Item " + this.idItem + " state saved:", itemState);
    };
    ItemShop.prototype.loadItemState = function () {
        var itemState = cc.sys.localStorage.getItem("item_" + this.idItem);
        if (itemState) {
            var parsedState = JSON.parse(itemState);
            CardHero_Global_1.Global.priceItem[this.idItem] = parsedState.price;
            this.price = parsedState.price;
            console.log("Loaded price for item " + this.idItem + ": " + this.price);
        }
    };
    ItemShop.prototype.start = function () { };
    __decorate([
        property(cc.Node)
    ], ItemShop.prototype, "nItem", void 0);
    __decorate([
        property(cc.Node)
    ], ItemShop.prototype, "nMask", void 0);
    ItemShop = __decorate([
        ccclass
    ], ItemShop);
    return ItemShop;
}(cc.Component));
exports.default = ItemShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXHBvcHVwXFxTaG9wXFxDYXJkSGVyby5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBa0Q7QUFFbEQsK0RBQTZDO0FBQzdDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVGQztRQXBGRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUU1QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUE0RWxCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0VHLHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsMEJBQU8sR0FBUCxVQUFRLEVBQUUsRUFBRSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FB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QVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLElBQUksQ0FBQyxNQUFNLGtCQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBUSxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixJQUFJLENBQUMsTUFBTSxVQUFLLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVMsQ0FBQztJQWpGVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFMTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUY1QjtJQUFELGVBQUM7Q0F2RkQsQUF1RkMsQ0F2RnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUZqRDtrQkF2Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vLi4vQ2FyZEhlcm8uR2FtZVZpZXdcIjtcclxuaW1wb3J0IExldmVsIGZyb20gXCIuLi8uLi9DYXJkSGVyby5MZXZlbFZpZXdcIjtcclxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL0NhcmRIZXJvLlNob3BWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgaWRJdGVtID0gMDtcclxuICAgIHByaWNlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHt9XHJcblxyXG4gICAgc2V0RGF0YShpZCwgcHJpY2UpIHtcclxuICAgICAgICB0aGlzLmlkSXRlbSA9IGlkO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLmxvYWRJdGVtU3RhdGUoKTsgXHJcbiAgICAgICAgdGhpcy5uSXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNob3BWaWV3Lmluc3RhbmNlLmxpc3RTcGZJdGVtW2lkXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0J1eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByaWNlKCkge1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0J1eSgpIHtcclxuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubk1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHp6enp6enpcIix0aGlzLnByaWNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubk1hc2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tCdXkoKSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbC50b3RhbEdvbGQgPj0gdGhpcy5wcmljZSkge1xyXG4gICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IHRoaXMucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkSXRlbSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICs9IDU7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJocENoYXJcIiwgR2xvYmFsLmhwQ2hhcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSHBDaGFyIGluY3JlYXNlZCB0bzogJHtHbG9iYWwuaHBDaGFyfWApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWRJdGVtID09IDEpIHtcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICs9IDM7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKz0gMztcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyArPSAzO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFtZUNoYXJTbWFsbFwiLCBHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYW1lQ2hhck5vcm1hbFwiLCBHbG9iYWwuZGFtZUNoYXJOb3JtYWwpO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFtZUNoYXJCaWdcIiwgR2xvYmFsLmRhbWVDaGFyQmlnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEYW1hZ2UgaW5jcmVhc2VkIHRvOiBTbWFsbDogJHtHbG9iYWwuZGFtZUNoYXJTbWFsbH0sIE5vcm1hbDogJHtHbG9iYWwuZGFtZUNoYXJOb3JtYWx9LCBCaWc6ICR7R2xvYmFsLmRhbWVDaGFyQmlnfWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXSsrO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVJdGVtU3RhdGUoKTsgLy8gU2F2ZSBpdGVtIHN0YXRlIGFmdGVyIHB1cmNoYXNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBCb3VnaHQgaXRlbSAke3RoaXMuaWRJdGVtfSwgbmV3IHByaWNlOiAke0dsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dfSwgcmVtYWluaW5nIGdvbGQ6ICR7R2xvYmFsLnRvdGFsR29sZH1gKTtcclxuICAgICAgICAgICAgU2hvcFZpZXcuaW5zdGFuY2UudXBkYXRlQWxsSXRlbXMoKTsgLy8gVXBkYXRlIGFsbCBpdGVtc1xyXG4gICAgICAgICAgICBTaG9wVmlldy5pbnN0YW5jZS51cGRhdGVQcmljZXMoKTtcclxuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlR29sZCgpOyAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBnb2xkIGFtb3VudFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCk7IC8vIFVwZGF0ZSB0aGUgcHJpY2UgYWZ0ZXIgcHVyY2hhc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZ29sZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVJdGVtU3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZEl0ZW0sXHJcbiAgICAgICAgICAgIHByaWNlOiBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBpdGVtXyR7dGhpcy5pZEl0ZW19YCwgSlNPTi5zdHJpbmdpZnkoaXRlbVN0YXRlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEl0ZW0gJHt0aGlzLmlkSXRlbX0gc3RhdGUgc2F2ZWQ6YCwgaXRlbVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbVN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1TdGF0ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbV8ke3RoaXMuaWRJdGVtfWApO1xyXG4gICAgICAgIGlmIChpdGVtU3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkU3RhdGUgPSBKU09OLnBhcnNlKGl0ZW1TdGF0ZSk7XHJcbiAgICAgICAgICAgIEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dID0gcGFyc2VkU3RhdGUucHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwYXJzZWRTdGF0ZS5wcmljZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRlZCBwcmljZSBmb3IgaXRlbSAke3RoaXMuaWRJdGVtfTogJHt0aGlzLnByaWNlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufSJdfQ==
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
var CardHero_Monster_1 = require("./CardHero.Monster");
var CardHero_GameOver_1 = require("./popup/CardHero.GameOver");
var CardHero_Pause_1 = require("./popup/CardHero.Pause");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfCard = null;
        _this.prfMonster = null;
        _this.listSpfCards = [];
        _this.nMonters = null;
        _this.nTableCards = null;
        _this.lbHpChar = null;
        _this.lbHpMonster = null;
        _this.nMaskClick = null;
        _this.nMaskLoadGame = null;
        _this.lbDameMonster = null;
        _this.listSpfMonster = [];
        _this.isClick = false;
        _this.countClick = 0;
        _this.listIdCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        _this.selectedCards = [];
        _this.dataCard = [];
        _this.charArchers = null;
        _this.charFighter = null;
        _this.charMagic = null;
        _this.lbDameChar = null;
        _this.prfGameOver = null;
        _this.prfPause = null;
        _this.nShield = null;
        _this.lbShield = null;
        _this.nDameMonsterMiss = null;
        _this.listMonsters = [];
        _this.idMonster = 0;
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
        CardHero_Global_1.Global.dameCharSmall = parseInt(cc.sys.localStorage.getItem("dameCharSmall")) || CardHero_Global_1.Global.dameCharSmall;
        CardHero_Global_1.Global.dameCharNormal = parseInt(cc.sys.localStorage.getItem("dameCharNormal")) || CardHero_Global_1.Global.dameCharNormal;
        CardHero_Global_1.Global.dameCharBig = parseInt(cc.sys.localStorage.getItem("dameCharBig")) || CardHero_Global_1.Global.dameCharBig;
        CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.createMonster(0, 10, 1);
        this.updateHpChar();
        this.updateHpBagGuy();
    };
    GameView.prototype.onDestroy = function () {
        GameView_1.instance = null;
    };
    GameView.prototype.maskLoadGame = function () {
        var _this = this;
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(function () {
            _this.nMaskLoadGame.active = false;
        }, 7);
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
    GameView.prototype.createMonster = function (id, hp, dame) {
        var monter = cc.instantiate(this.prfMonster).getComponent(CardHero_Monster_1.default);
        monter.setMonster(id, hp, dame);
        this.nMonters.addChild(monter.node);
        this.listMonsters.push(monter);
        //   this.idMonster++;
    };
    GameView.prototype.attackMonster = function (dame) {
        if (this.listMonsters.length > 0) {
            var monster_1 = this.listMonsters[0];
            if (monster_1 && monster_1.node) {
                monster_1.receiveDamage(dame);
                if (CardHero_Global_1.Global.hpMonster <= 0) {
                    this.listMonsters = this.listMonsters.filter(function (m) { return m !== monster_1; });
                    console.log("Monster ", this.listMonsters);
                }
            }
        }
    };
    GameView.prototype.gameOver = function () {
        if (CardHero_Global_1.Global.hpChar == 0) {
            var prfGameOver = cc.instantiate(this.prfGameOver).getComponent(CardHero_GameOver_1.default);
            this.node.addChild(prfGameOver.node);
        }
    };
    GameView.prototype.onClickPause = function () {
        var prfPause = cc.instantiate(this.prfPause).getComponent(CardHero_Pause_1.default);
        this.node.addChild(prfPause.node);
        this.nTableCards.children.forEach(function (element) {
            element.active = false;
        });
        cc.director.pause();
    };
    GameView.prototype.onClickResume = function () {
        cc.director.resume();
        this.nTableCards.children.forEach(function (element) {
            element.active = true;
        });
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
                this.scheduleOnce(this.checkMatch.bind(this), 0.6);
            }
        }
    };
    GameView.prototype.checkMatch = function () {
        var _a = this.selectedCards, firstCard = _a[0], secondCard = _a[1];
        if (firstCard.idCard === 0 && secondCard.idCard === 0) {
            CardHero_Global_1.Global.shield = 3;
            this.nShield.active = true;
            console.log("Shield Activated: ", CardHero_Global_1.Global.shield);
            this.updateShield();
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else if (firstCard.idCard === 12 || secondCard.idCard === 12) {
            var doubleDame = true;
            var multiplierCard = firstCard.idCard === 12 ? secondCard : firstCard;
            this.selectAttack(multiplierCard.idCard, doubleDame);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else if (firstCard.idCard === secondCard.idCard) {
            this.selectAttack(firstCard.idCard, false);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else {
            if (CardHero_Global_1.Global.shield > 0) {
                CardHero_Global_1.Global.shield--;
                this.updateShield();
                this.effectDameBagGuyMiss(this.nDameMonsterMiss);
                console.log("Shield: ", CardHero_Global_1.Global.shield);
            }
            if (CardHero_Global_1.Global.shield == 0) {
                this.nShield.active = false;
                CardHero_Global_1.Global.hpChar--;
                this.effectDameBagGuy(this.lbDameMonster, CardHero_Global_1.Global.dameMonster);
                this.updateHpChar();
                this.gameOver();
            }
            firstCard.flipCard();
            secondCard.flipCard();
            firstCard.isClicked = false;
            secondCard.isClicked = false;
        }
        this.selectedCards = [];
    };
    GameView.prototype.selectAttack = function (id, isDoubleDame) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                if (CardHero_Global_1.Global.shield === 0) {
                    CardHero_Global_1.Global.shield = 3;
                }
                CardHero_Global_1.Global.shield *= isDoubleDame ? 2 : 1;
                this.nShield.active = true;
                this.updateShield();
                break;
            case 1:
                console.log("Mau ne ");
                // if (Global.hpChar >= 10) return;
                // else {
                if (isDoubleDame) {
                    CardHero_Global_1.Global.hpChar *= 2;
                }
                else {
                    CardHero_Global_1.Global.hpChar += 5;
                }
                this.updateHpChar();
                //}
                break;
            case 2:
                console.log("Cung nho ban ");
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                this.charArchers.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharSmall);
                break;
            case 3:
                console.log("Cung Tb ban ");
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharNormal);
                this.charArchers.charAttack();
                break;
            case 4:
                this.charArchers.charAttack();
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharBig);
                break;
            case 5:
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharSmall;
                this.charFighter.charAttack();
                break;
            case 6:
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.charFighter.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharNormal);
                break;
            case 7:
                console.log("KIem danh ");
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.charFighter.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharBig);
                break;
            case 8:
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharSmall);
                this.charMagic.charAttack();
                break;
            case 9:
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharNormal);
                this.charMagic.charAttack();
                break;
            case 10:
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.charMagic.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharBig);
                break;
            default:
                break;
        }
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.effectDameBagGuy = function (node, dame) {
        node.active = true;
        node.getComponent(cc.Label).string = "-" + dame;
        cc.tween(node)
            .to(0.8, { y: 200 })
            .call(function () {
            node.active = false;
            node.y = -70;
        }).start();
    };
    GameView.prototype.effectDameBagGuyMiss = function (node) {
        if (CardHero_Global_1.Global.shield > 0) {
            node.active = true;
            //node.getComponent(cc.Label).string = "-" + dame;
            cc.tween(node)
                .to(0.8, { y: 200 })
                .call(function () {
                node.active = false;
                node.y = -70;
            }).start();
        }
        if (CardHero_Global_1.Global.shield == 0) {
            node.active = false;
        }
    };
    GameView.prototype.updateHpChar = function () {
        this.lbHpChar.string = CardHero_Global_1.Global.hpChar + ' ';
    };
    GameView.prototype.updateHpBagGuy = function () {
        this.lbHpMonster.string = CardHero_Global_1.Global.hpMonster + ' ';
    };
    GameView.prototype.updateShield = function () {
        this.lbShield.string = CardHero_Global_1.Global.shield + ' ';
    };
    GameView.prototype.onClickRestart = function () {
        CardHero_Global_1.Global.hpChar = 10;
        CardHero_Global_1.Global.hpMonster = 10;
        this.updateHpChar();
        this.updateHpBagGuy();
        this.updateShield();
        this.nTableCards.removeAllChildren();
        this.nMonters.removeAllChildren();
        this.selectedCards = [];
        this.listMonsters = [];
        // Shuffle and reload cards
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        // Create a new monster
        this.createMonster(0, 10, 1);
        console.log("Game restarted");
    };
    GameView.prototype.destroyGame = function () {
        console.log("destroyyy ");
        this.node.stopAllActions();
        this.node.destroy();
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfCard", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfMonster", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameView.prototype, "listSpfCards", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMonters", void 0);
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
        property(cc.SpriteFrame)
    ], GameView.prototype, "listSpfMonster", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charArchers", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charFighter", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charMagic", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "lbDameChar", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfGameOver", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfPause", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nShield", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbShield", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nDameMonsterMiss", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUE0QztBQUM1QyxpREFBbUM7QUFDbkMsaURBQW1DO0FBQ25DLHVEQUF5QztBQUN6QywrREFBaUQ7QUFDakQseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOFdDO1FBM1dHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBRXBDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxD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QyxRQUFRLENBQUMsdUJBQUksQ0FBQztpREFDVTtJQUV6QjtRQURDLFFBQVEsQ0FBQyx1QkFBSSxDQUFDOytDQUNRO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBbERoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOFc1QjtJQUFELGVBQUM7Q0E5V0QsQUE4V0MsQ0E5V3FDLEVBQUUsQ0FBQyxTQUFTLEdBOFdqRDtrQkE5V29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRIZXJvLkNhcmRcIjtcclxuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2FyZEhlcm8uQ2hhclwiO1xyXG5pbXBvcnQgTW9uc3RlciBmcm9tIFwiLi9DYXJkSGVyby5Nb25zdGVyXCI7XHJcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5HYW1lT3ZlclwiO1xyXG5pbXBvcnQgUGF1c2UgZnJvbSBcIi4vcG9wdXAvQ2FyZEhlcm8uUGF1c2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmQ2FyZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmZNb25zdGVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdFNwZkNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5Nb250ZXJzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgblRhYmxlQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJIcENoYXI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiSHBNb25zdGVyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5NYXNrQ2xpY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTWFza0xvYWRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGJEYW1lTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0U3BmTW9uc3RlcjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgaXNDbGljayA9IGZhbHNlO1xyXG4gICAgY291bnRDbGljayA9IDA7XHJcbiAgICBsaXN0SWRDYXJkID0gWzAsIDAsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDUsIDYsIDYsIDcsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMl07XHJcbiAgICBzZWxlY3RlZENhcmRzID0gW107XHJcbiAgICBkYXRhQ2FyZCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KENoYXIpXHJcbiAgICBjaGFyQXJjaGVyczogQ2hhciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQ2hhcilcclxuICAgIGNoYXJGaWdodGVyOiBDaGFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShDaGFyKVxyXG4gICAgY2hhck1hZ2ljOiBDaGFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxiRGFtZUNoYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmZHYW1lT3ZlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmUGF1c2U6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuU2hpZWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiU2hpZWxkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5EYW1lTW9uc3Rlck1pc3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbGlzdE1vbnN0ZXJzID0gW107XHJcbiAgICBpZE1vbnN0ZXIgPSAwO1xyXG4gICAgcm93cyA9IDU7XHJcbiAgICBjb2xzID0gNTtcclxuICAgIHNwYWNpbmcgPSAxMDtcclxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXIgPSAtMzM3O1xyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlciA9IDIxMDtcclxuICAgIHByaXZhdGUgdGlsZVdpZHRoOiBudW1iZXIgPSAxMzU7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJTbWFsbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyU21hbGw7XHJcbiAgICAgICAgR2xvYmFsLmRhbWVDaGFyTm9ybWFsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJOb3JtYWxcIikpIHx8IEdsb2JhbC5kYW1lQ2hhck5vcm1hbDtcclxuICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYW1lQ2hhckJpZ1wiKSkgfHwgR2xvYmFsLmRhbWVDaGFyQmlnO1xyXG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XHJcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZENhcmRzKCk7XHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb25zdGVyKDAsIDEwLCAxKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG1hc2tMb2FkR2FtZSgpIHtcclxuICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCA3KVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDYXJkcygpIHtcclxuICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQ2FyZCkuZ2V0Q29tcG9uZW50KENhcmQpXHJcbiAgICAgICAgLy8gICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaV0pXHJcbiAgICAgICAgLy8gICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGlkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUNhcmRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkSW5kZXggPj0gdGhpcy5saXN0SWRDYXJkLmxlbmd0aCkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKTtcclxuICAgICAgICAgICAgICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaWRJbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGNhcmQubm9kZS54ID0gdGhpcy5zdGFydFggKyBqICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueSA9IHRoaXMuc3RhcnRZIC0gaSAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXVtqXSA9IGNhcmQ7XHJcbiAgICAgICAgICAgICAgICBpZEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1vbnN0ZXIoaWQ6IG51bWJlciwgaHA6IG51bWJlciwgZGFtZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG1vbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmTW9uc3RlcikuZ2V0Q29tcG9uZW50KE1vbnN0ZXIpXHJcbiAgICAgICAgbW9udGVyLnNldE1vbnN0ZXIoaWQsIGhwLCBkYW1lKTtcclxuICAgICAgICB0aGlzLm5Nb250ZXJzLmFkZENoaWxkKG1vbnRlci5ub2RlKTtcclxuICAgICAgICB0aGlzLmxpc3RNb25zdGVycy5wdXNoKG1vbnRlcik7XHJcbiAgICAgICAgLy8gICB0aGlzLmlkTW9uc3RlcisrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhdHRhY2tNb25zdGVyKGRhbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0TW9uc3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgW21vbnN0ZXJdID0gdGhpcy5saXN0TW9uc3RlcnM7XHJcbiAgICAgICAgICAgIGlmIChtb25zdGVyICYmIG1vbnN0ZXIubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbW9uc3Rlci5yZWNlaXZlRGFtYWdlKGRhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gdGhpcy5saXN0TW9uc3RlcnMuZmlsdGVyKG0gPT4gbSAhPT0gbW9uc3Rlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25zdGVyIFwiLCB0aGlzLmxpc3RNb25zdGVycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoR2xvYmFsLmhwQ2hhciA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmZHYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChHYW1lT3ZlcilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByZkdhbWVPdmVyLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrUGF1c2UoKSB7XHJcbiAgICAgICAgbGV0IHByZlBhdXNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZQYXVzZSkuZ2V0Q29tcG9uZW50KFBhdXNlKVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZQYXVzZS5ub2RlKTtcclxuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrUmVzdW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2h1ZmZsZUFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTZWxlY3RlZENhcmQoY2FyZDogQ2FyZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMucHVzaChjYXJkKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJkcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tNYXRjaC5iaW5kKHRoaXMpLCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjaGVja01hdGNoKCkge1xyXG4gICAgICAgIGxldCBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IHRoaXMuc2VsZWN0ZWRDYXJkcztcclxuXHJcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IDAgJiYgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDApIHtcclxuICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaWVsZCBBY3RpdmF0ZWQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcclxuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgfHwgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIGxldCBkb3VibGVEYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IG11bHRpcGxpZXJDYXJkID0gZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgPyBzZWNvbmRDYXJkIDogZmlyc3RDYXJkO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhtdWx0aXBsaWVyQ2FyZC5pZENhcmQsIGRvdWJsZURhbWUpO1xyXG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSBzZWNvbmRDYXJkLmlkQ2FyZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhmaXJzdENhcmQuaWRDYXJkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3REYW1lQmFnR3V5TWlzcyh0aGlzLm5EYW1lTW9uc3Rlck1pc3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGllbGQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcclxuICAgICAgICAgICAgfSBpZiAoR2xvYmFsLnNoaWVsZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXkodGhpcy5sYkRhbWVNb25zdGVyLCBHbG9iYWwuZGFtZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmlyc3RDYXJkLmZsaXBDYXJkKCk7XHJcbiAgICAgICAgICAgIHNlY29uZENhcmQuZmxpcENhcmQoKTtcclxuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGVjdEF0dGFjayhpZCwgaXNEb3VibGVEYW1lOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdpYXAgbmUgXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkID0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hdSBuZSBcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3VibGVEYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICs9IDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgbmhvIGJhbiBcIik7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdW5nIFRiIGJhbiBcIik7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhclNtYWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhck5vcm1hbCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktJZW0gZGFuaCBcIik7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJNYWdpYy5jaGFyQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyTm9ybWFsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgZGFtZTtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oMC44LCB7IHk6IDIwMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS55ID0gLTcwO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdERhbWVCYWdHdXlNaXNzKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL25vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIGRhbWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHk6IDIwMCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gLTcwO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlSHBDaGFyKCkge1xyXG4gICAgICAgIHRoaXMubGJIcENoYXIuc3RyaW5nID0gR2xvYmFsLmhwQ2hhciArICcgJztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIcEJhZ0d1eSgpIHtcclxuICAgICAgICB0aGlzLmxiSHBNb25zdGVyLnN0cmluZyA9IEdsb2JhbC5ocE1vbnN0ZXIgKyAnICc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hpZWxkKCkge1xyXG4gICAgICAgIHRoaXMubGJTaGllbGQuc3RyaW5nID0gR2xvYmFsLnNoaWVsZCArICcgJztcclxuICAgIH1cclxuICAgIG9uQ2xpY2tSZXN0YXJ0KCkge1xyXG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSAxMDtcclxuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMTA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcclxuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5uTW9udGVycy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gW107XHJcblxyXG4gICAgICAgIC8vIFNodWZmbGUgYW5kIHJlbG9hZCBjYXJkc1xyXG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IG1vbnN0ZXJcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vbnN0ZXIoMCwgMTAsIDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgcmVzdGFydGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lHYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveXl5IFwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
            }, 0.58);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBK0VDO1FBNUVFLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU0sR0FBRyxDQUFDLENBQUM7O1FBa0VWLFlBQVk7UUFDWixJQUFJO1FBRUosaUJBQWlCO0lBQ3JCLENBQUM7SUFyRUcsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxzQkFBTyxHQUFQLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDMUIsSUFBSSxD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QVBQLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErRXhCO0lBQUQsV0FBQztDQS9FRCxBQStFQyxDQS9FaUMsRUFBRSxDQUFDLFNBQVMsR0ErRTdDO2tCQS9Fb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICBuQ2FyZEJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgbkNhcmRGcm9udDogY2MuTm9kZSA9IG51bGw7XHJcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICBuQ2FyZFNwZjogY2MuTm9kZSA9IG51bGw7XHJcbiAgIGlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICBpZENhcmQgPSAwO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmZsaXBUb0JhY2soKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmZsaXBUb2Zyb250LDUpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShpZCkge1xyXG4gICAgICAgIHRoaXMuaWRDYXJkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uQ2FyZFNwZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVWaWV3Lmluc3RhbmNlLmxpc3RTcGZDYXJkc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja0NhcmRzKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNDbGlja2VkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmxpcENhcmQoKTtcclxuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5hZGRTZWxlY3RlZENhcmQodGhpcyk7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljaysrO1xyXG4gICAgICAgIGlmKEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2sgPT0gMikge1xyXG4gICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5uTWFza0NsaWNrLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm5NYXNrQ2xpY2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sMC41OClcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljayA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRzKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubkNhcmRCYWNrLmFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgICB0aGlzLm5DYXJkRnJvbnQuYWN0aXZlID0gIWFjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBmbGlwVG9CYWNrKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwLjEgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZVg6IDEgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmbGlwVG9mcm9udCgpIHtcclxuICAgICAgICBpZighdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjMse3NjYWxlWDowfSlcclxuICAgICAgICAgICAgLmNhbGwoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDoxfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZsaXBDYXJkKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMC4zLHtzY2FsZVg6IDB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+e1xyXG4gICAgICAgICAgICBpZighdGhpcy5uQ2FyZEJhY2suYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRvKDAuMywge3NjYWxlWDoxfSkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgXHJcbiAgICAvLyBzdGFydCgpIHtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.Monster.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97818ABoAtAvIFaaw7xkDg8', 'CardHero.Monster');
// MatchingCardHeros/scripts/game/CardHero.Monster.ts

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
var CardHero_GameView_1 = require("./CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nMonster = null;
        _this.dame = 1;
        _this.monsterId = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.jumpTween = null;
        return _this;
        // update (dt) {}
    }
    Monster.prototype.onLoad = function () {
        this.setMonsterJump();
    };
    Monster.prototype.setMonster = function (id, hp, dame) {
        this.monsterId = id;
        this.node.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listSpfMonster[id];
        CardHero_Global_1.Global.hpMonster = hp;
        this.dame = dame;
        CardHero_GameView_1.default.instance.updateHpBagGuy();
    };
    Monster.prototype.receiveDamage = function (dame) {
        CardHero_Global_1.Global.hpMonster -= dame;
        CardHero_GameView_1.default.instance.effectDameBagGuy(CardHero_GameView_1.default.instance.lbDameChar, dame);
        CardHero_GameView_1.default.instance.updateHpBagGuy();
        if (CardHero_Global_1.Global.hpMonster <= 0) {
            CardHero_Global_1.Global.hpMonster = 0;
            CardHero_GameView_1.default.instance.updateHpBagGuy();
            this.onDeath();
        }
    };
    Monster.prototype.onDeath = function () {
        var _this = this;
        // Dừng mọi hành động trên node của quái
        // this.node.destroy();
        this.node.stopAllActions();
        this.scheduleOnce(function () {
            _this.node.destroy();
            var newHp = CardHero_Global_1.Global.hpMonster + 15; // Tăng HP mới
            var newDame = _this.dame + 1; // Tăng dame mới
            CardHero_GameView_1.default.instance.createMonster(_this.monsterId + 1, newHp, newDame);
            console.log("mau", CardHero_Global_1.Global.hpMonster);
        }, 2);
        // Delay of 2 seconds
    };
    Monster.prototype.setMonsterJump = function () {
        var jumpUp = cc.tween().to(0.5, { y: 100 }, { easing: 'sineOut' });
        var jumpDown = cc.tween().to(0.3, { y: 0 }, { easing: 'sineIn' });
        var jumpSequence = cc.tween().sequence(jumpUp, jumpDown);
        var repeatJump = cc.tween().repeatForever(jumpSequence);
        cc.tween(this.node).then(repeatJump).start();
    };
    Monster.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], Monster.prototype, "nMonster", void 0);
    Monster = __decorate([
        ccclass
    ], Monster);
    return Monster;
}(cc.Component));
exports.default = Monster;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLk1vbnN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTREQztRQXpERyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsd0JBQXdCO1FBQ3hCLGVBQVMsR0FBYSxJQUFJLENBQUM7O1FBb0QzQixpQkFBaUI7SUFDckIsQ0FBQztJQXBERyx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCw0QkFBVSxHQUFWLFVBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLHdCQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLElBQUk7UUFDZCx3QkFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDekIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsMkJBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksd0JBQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLHdCQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNyQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUFBLGlCQWNDO1FBYkcsd0NBQXdDO1FBQ3hDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGNBQWM7WUFDakQsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDN0MsMkJBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUVKLHFCQUFxQjtJQUV6QixDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNJLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBR0QsdUJBQUssR0FBTDtJQUVBLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTztJQUhSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E0RDNCO0lBQUQsY0FBQztDQTVERCxBQTREQyxDQTVEb0MsRUFBRSxDQUFDLFNBQVMsR0E0RGhEO2tCQTVEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uc3RlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBkYW1lID0gMTtcclxuICAgIG1vbnN0ZXJJZCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGp1bXBUd2VlbjogY2MuVHdlZW4gPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0TW9uc3Rlckp1bXAoKTtcclxuICAgIH1cclxuICAgIHNldE1vbnN0ZXIoaWQsIGhwLCBkYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tb25zdGVySWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0U3BmTW9uc3RlcltpZF07XHJcbiAgICAgICAgR2xvYmFsLmhwTW9uc3RlciA9IGhwO1xyXG4gICAgICAgIHRoaXMuZGFtZSA9IGRhbWU7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlSHBCYWdHdXkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRGFtYWdlKGRhbWUpIHtcclxuICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IGRhbWU7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZWZmZWN0RGFtZUJhZ0d1eShHYW1lVmlldy5pbnN0YW5jZS5sYkRhbWVDaGFyLGRhbWUpO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMDtcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlSHBCYWdHdXkoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGgoKSB7XHJcbiAgICAgICAgLy8gROG7q25nIG3hu41pIGjDoG5oIMSR4buZbmcgdHLDqm4gbm9kZSBj4bunYSBxdcOhaVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3SHAgPSBHbG9iYWwuaHBNb25zdGVyICsgMTU7IC8vIFTEg25nIEhQIG3hu5tpXHJcbiAgICAgICAgICAgIGxldCBuZXdEYW1lID0gdGhpcy5kYW1lICsgMTsgLy8gVMSDbmcgZGFtZSBt4bubaVxyXG4gICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5jcmVhdGVNb25zdGVyKHRoaXMubW9uc3RlcklkICsgMSwgbmV3SHAsIG5ld0RhbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hdVwiLCBHbG9iYWwuaHBNb25zdGVyKTtcclxuICAgICAgICB9LDIpXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIERlbGF5IG9mIDIgc2Vjb25kc1xyXG5cclxuICAgIH1cclxuICAgIHNldE1vbnN0ZXJKdW1wKCkge1xyXG4gICAgICAgIGNvbnN0IGp1bXBVcCA9IGNjLnR3ZWVuKCkudG8oMC41LCB7IHk6IDEwMCB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pO1xyXG4gICAgICAgIGNvbnN0IGp1bXBEb3duID0gY2MudHdlZW4oKS50bygwLjMsIHsgeTogMCB9LHsgZWFzaW5nOiAnc2luZUluJyB9KTtcclxuICAgICAgICBjb25zdCBqdW1wU2VxdWVuY2UgPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdEp1bXAgPSBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIoanVtcFNlcXVlbmNlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKHJlcGVhdEp1bXApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/popup/CardHero.GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de8d4/7tgJF0LWGiu41K2vT', 'CardHero.GameOver');
// MatchingCardHeros/scripts/game/popup/CardHero.GameOver.ts

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
var CardHero_GameView_1 = require("../CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameOver.prototype.start = function () {
    };
    GameOver.prototype.clickRestart = function () {
        CardHero_GameView_1.default.instance.onClickRestart();
        this.node.destroy();
    };
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXHBvcHVwXFxDYXJkSGVyby5HYW1lT3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBZUEsQ0FBQztJQWJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksMkJBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBYmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FlNUI7SUFBRCxlQUFDO0NBZkQsQUFlQyxDQWZxQyxFQUFFLENBQUMsU0FBUyxHQWVqRDtrQkFmb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vQ2FyZEhlcm8uR2FtZVZpZXdcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tSZXN0YXJ0KCl7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uub25DbGlja1Jlc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/popup/CardHero.Pause.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbff2xa7BNLAp7JQj6l39uy', 'CardHero.Pause');
// MatchingCardHeros/scripts/game/popup/CardHero.Pause.ts

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
var CardHero_GameView_1 = require("../CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pause = /** @class */ (function (_super) {
    __extends(Pause, _super);
    function Pause() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Pause.prototype.clickRestart = function () {
        CardHero_GameView_1.default.instance.onClickRestart();
        this.node.destroy();
        cc.director.resume();
    };
    Pause.prototype.clickResume = function () {
        CardHero_GameView_1.default.instance.onClickResume();
        this.node.destroy();
    };
    Pause.prototype.clickHome = function () {
        // this.node.destroy();
        CardHero_GameView_1.default.instance.destroyGame();
    };
    Pause.prototype.start = function () {
    };
    Pause = __decorate([
        ccclass
    ], Pause);
    return Pause;
}(cc.Component));
exports.default = Pause;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXHBvcHVwXFxDYXJkSGVyby5QYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7O0lBNEJBLENBQUM7SUF6Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiw0QkFBWSxHQUFaO1FBQ0ksMkJBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBVyxHQUFYO1FBQ0ksMkJBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUJBQVMsR0FBVDtRQUNJLHVCQUF1QjtRQUN2QiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUF6QmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E0QnpCO0lBQUQsWUFBQztDQTVCRCxBQTRCQyxDQTVCa0MsRUFBRSxDQUFDLFNBQVMsR0E0QjlDO2tCQTVCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vQ2FyZEhlcm8uR2FtZVZpZXdcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF1c2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBjbGlja1Jlc3RhcnQoKSB7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uub25DbGlja1Jlc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrUmVzdW1lKCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm9uQ2xpY2tSZXN1bWUoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSG9tZSgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmRlc3Ryb3lHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.LevelView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f2a0tW0utIa6pPN0DBS13j', 'CardHero.LevelView');
// MatchingCardHeros/scripts/game/CardHero.LevelView.ts

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
var CardHero_GameManager_1 = require("../CardHero.GameManager");
var CardHero_Global_1 = require("../CardHero.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfShopView = null;
        _this.lbGold = null;
        return _this;
        // update (dt) {}
    }
    Level_1 = Level;
    Level.prototype.onLoad = function () {
        Level_1.instance = this;
        CardHero_Global_1.Global.totalGold = parseInt(cc.sys.localStorage.getItem("totalGold"), CardHero_Global_1.Global.totalGold) || CardHero_Global_1.Global.totalGold;
        this.updateGold();
        console.log("Tien ", CardHero_Global_1.Global.totalGold);
    };
    Level.prototype.onClickPlay = function () {
        CardHero_GameManager_1.default.instance.onClickPlay();
    };
    Level.prototype.onClickShopView = function () {
        var shopView = cc.instantiate(this.prfShopView);
        this.node.addChild(shopView);
    };
    Level.prototype.updateGold = function () {
        this.lbGold.string = '$' + CardHero_Global_1.Global.totalGold + ' ';
        cc.sys.localStorage.setItem("totalGold", CardHero_Global_1.Global.totalGold);
    };
    Level.prototype.clickRemoveCache = function () {
        cc.sys.localStorage.clear();
    };
    Level.prototype.start = function () {
    };
    var Level_1;
    // LIFE-CYCLE CALLBACKS:
    Level.instance = null;
    __decorate([
        property(cc.Prefab)
    ], Level.prototype, "prfShopView", void 0);
    __decorate([
        property(cc.Label)
    ], Level.prototype, "lbGold", void 0);
    Level = Level_1 = __decorate([
        ccclass
    ], Level);
    return Level;
}(cc.Component));
exports.default = Level;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkxldmVsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBa0Q7QUFDbEQsc0RBQTRDO0FBR3RDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBdUNDO1FBakNHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBYSxJQUFJLENBQUM7O1FBOEJ4QixpQkFBaUI7SUFDckIsQ0FBQztjQXZDb0IsS0FBSztJQVN0QixzQkFBTSxHQUFOO1FBQ0ksT0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsd0JBQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQyx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLHdCQUFNLENBQUMsU0FBUyxDQUFDO1FBQzNHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQkFBVyxHQUFYO1FBQ0ksOEJBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELCtCQUFlLEdBQWY7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMEJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBSSx3QkFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxnQ0FBZ0IsR0FBaEI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7O0lBakNELHdCQUF3QjtJQUNWLGNBQVEsR0FBVSxJQUFJLENBQUM7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNLO0lBUlAsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXVDekI7SUFBRCxZQUFDO0NBdkNELEFBdUNDLENBdkNrQyxFQUFFLENBQUMsU0FBUyxHQXVDOUM7a0JBdkNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9DYXJkSGVyby5HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTGV2ZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZlNob3BWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIExldmVsLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBHbG9iYWwudG90YWxHb2xkID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpLEdsb2JhbC50b3RhbEdvbGQpIHx8IEdsb2JhbC50b3RhbEdvbGQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVHb2xkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaWVuIFwiLCBHbG9iYWwudG90YWxHb2xkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrUGxheSgpIHtcclxuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5vbkNsaWNrUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTaG9wVmlldygpIHtcclxuICAgICAgICBsZXQgc2hvcFZpZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlNob3BWaWV3KVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzaG9wVmlldyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZUdvbGQoKSB7XHJcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gJyQnICsgIEdsb2JhbC50b3RhbEdvbGQgKyAnICc7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxHb2xkXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjbGlja1JlbW92ZUNhY2hlKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/popup/Shop/CardHero.ShopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5bf412FxxNLb5JZfujcl/n', 'CardHero.ShopView');
// MatchingCardHeros/scripts/game/popup/Shop/CardHero.ShopView.ts

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
var CardHero_Global_1 = require("../../../CardHero.Global");
var CardHero_ItemShop_1 = require("./CardHero.ItemShop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopView = /** @class */ (function (_super) {
    __extends(ShopView, _super);
    function ShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfItem = null;
        _this.nLayout = null;
        _this.listSpfItem = [];
        _this.lbPriceHp = null;
        _this.lbPriceAttack = null;
        _this.itemPrices = [1, 1];
        return _this;
        // update (dt) {}
    }
    ShopView_1 = ShopView;
    // LIFE-CYCLE CALLBACKS:
    ShopView.prototype.onLoad = function () {
        ShopView_1.instance = this;
        this.loadItem();
        this.updatePriceHp();
        this.updatePriceAttack();
    };
    ShopView.prototype.onClickClose = function () {
        this.node.destroy();
    };
    ShopView.prototype.loadItem = function () {
        for (var i = 0; i < CardHero_Global_1.Global.priceItem.length; i++) {
            var item = cc.instantiate(this.prfItem).getComponent(CardHero_ItemShop_1.default);
            item.setData(i, CardHero_Global_1.Global.priceItem[i]);
            this.nLayout.addChild(item.node);
        }
    };
    ShopView.prototype.getSavedItemState = function (id) {
        var itemState = cc.sys.localStorage.getItem("item_" + id);
        return itemState ? JSON.parse(itemState) : null;
    };
    ShopView.prototype.updatePrices = function () {
        this.lbPriceHp.string = '$ ' + CardHero_Global_1.Global.priceItem[0];
        this.lbPriceAttack.string = '$ ' + CardHero_Global_1.Global.priceItem[1];
    };
    ShopView.prototype.updateAllItems = function () {
        console.log("Updating all items...");
        this.nLayout.children.forEach(function (itemNode) {
            var itemComponent = itemNode.getComponent(CardHero_ItemShop_1.default);
            console.log("Updating item:", itemComponent.idItem);
            itemComponent.loadItemState();
            itemComponent.updatePrice();
            itemComponent.checkBuy();
        });
    };
    ShopView.prototype.updatePriceHp = function () {
        this.lbPriceHp.string = '$ ' + CardHero_Global_1.Global.priceItem[0];
    };
    ShopView.prototype.updatePriceAttack = function () {
        this.lbPriceAttack.string = '$ ' + CardHero_Global_1.Global.priceItem[1];
    };
    ShopView.prototype.start = function () {
    };
    var ShopView_1;
    ShopView.instance = null;
    __decorate([
        property(cc.Prefab)
    ], ShopView.prototype, "prfItem", void 0);
    __decorate([
        property(cc.Node)
    ], ShopView.prototype, "nLayout", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShopView.prototype, "listSpfItem", void 0);
    __decorate([
        property(cc.Label)
    ], ShopView.prototype, "lbPriceHp", void 0);
    __decorate([
        property(cc.Label)
    ], ShopView.prototype, "lbPriceAttack", void 0);
    ShopView = ShopView_1 = __decorate([
        ccclass
    ], ShopView);
    return ShopView;
}(cc.Component));
exports.default = ShopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXHBvcHVwXFxTaG9wXFxDYXJkSGVyby5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw0REFBa0Q7QUFDbEQseURBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBbkVFLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQXdEbEIsaUJBQWlCO0lBQ3JCLENBQUM7aUJBdkVvQixRQUFRO0lBaUJ6Qix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsMkJBQVEsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELG9DQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQ2hCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFRLEVBQUksQ0FBQyxDQUFDO1FBQzFELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDbkMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUFsRVksaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNZO0lBYmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uLy4uL0NhcmRIZXJvLkdsb2JhbFwiO1xyXG5pbXBvcnQgSXRlbVNob3AgZnJvbSBcIi4vQ2FyZEhlcm8uSXRlbVNob3BcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2hvcFZpZXcgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICBwcmZJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgbkxheW91dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgbGlzdFNwZkl0ZW06IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICBsYlByaWNlSHA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJQcmljZUF0dGFjazogY2MuTGFiZWwgPSBudWxsO1xyXG4gICBpdGVtUHJpY2VzID0gWzEsMV07XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgU2hvcFZpZXcuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubG9hZEl0ZW0oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlSHAoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlQXR0YWNrKCk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdsb2JhbC5wcmljZUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChJdGVtU2hvcCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YShpLCBHbG9iYWwucHJpY2VJdGVtW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5uTGF5b3V0LmFkZENoaWxkKGl0ZW0ubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNhdmVkSXRlbVN0YXRlKGlkKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1TdGF0ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbV8ke2lkfWApO1xyXG4gICAgICAgIHJldHVybiBpdGVtU3RhdGUgPyBKU09OLnBhcnNlKGl0ZW1TdGF0ZSkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByaWNlcygpIHtcclxuICAgICAgICB0aGlzLmxiUHJpY2VIcC5zdHJpbmcgPSAnJCAnICsgR2xvYmFsLnByaWNlSXRlbVswXTtcclxuICAgICAgICB0aGlzLmxiUHJpY2VBdHRhY2suc3RyaW5nID0gJyQgJyArIEdsb2JhbC5wcmljZUl0ZW1bMV07XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWxsSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBhbGwgaXRlbXMuLi5cIik7XHJcbiAgICAgICAgdGhpcy5uTGF5b3V0LmNoaWxkcmVuLmZvckVhY2goKGl0ZW1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ29tcG9uZW50ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1TaG9wKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBpdGVtOlwiLCBpdGVtQ29tcG9uZW50LmlkSXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQubG9hZEl0ZW1TdGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50LnVwZGF0ZVByaWNlKCk7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQuY2hlY2tCdXkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmljZUhwKCkge1xyXG4gICAgICAgIHRoaXMubGJQcmljZUhwLnN0cmluZyA9ICckICcgKyBHbG9iYWwucHJpY2VJdGVtWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByaWNlQXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMubGJQcmljZUF0dGFjay5zdHJpbmcgPSAnJCAnICsgR2xvYmFsLnByaWNlSXRlbVsxXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
