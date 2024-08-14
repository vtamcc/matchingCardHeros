
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
require('./assets/MatchingCardHeros/scripts/game/CardHero.ItemLevel');
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
    Global.shield = 0;
    Global.dameMonster = 1;
    Global.dameCharSmall = 2;
    Global.dameCharNormal = 4;
    Global.dameCharBig = 6;
    // static priceItemHp = 1;
    // static priceItemAttack = 1;
    Global.priceItem = [1, 1];
    Global.levelData = [
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 15, monsters: 1 },
        { dame: 2, hp: 20, monsters: 1 },
        { dame: 3, hp: 25, monsters: 1 },
        { dame: 3, hp: 20, monsters: 1 },
        { dame: 5, hp: 50, monsters: 0, isBoss: true },
        { dame: 1, hp: 10, monsters: 0 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 30, hp: 100, monsters: 0, isBoss: true } // Level 14 - Boss
    ];
    Global.levelMonsterSprites = {
        0: [0, 1],
        1: [1, 2],
        2: [0, 2],
        3: [1, 2,],
        4: [2, 3],
        5: [4],
        6: [4],
        7: [0, 1],
        8: [0, 1],
        9: [0, 1],
        10: [0, 1],
        11: [0, 1],
        12: [0, 1],
        13: [0, 1],
        14: [0, 1],
    };
    Global.selectedLevel = 0;
    Global.levelCount = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBcURBLENBQUM7SUFwRFUsZ0JBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxhQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixhQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEIsb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIscUJBQWMsR0FBRyxDQUFDLENBQUM7SUFDbkIsa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUN2QixnQkFBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWpCLGdCQUFTLEdBQUc7UUFDZixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1FBQzlDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0I7S0FDdEUsQ0FBQztJQUdLLDBCQUFtQixHQUFHO1FBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUU7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNWLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNWLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFYixDQUFDO0lBQ0ssb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIsaUJBQVUsR0FBRyxDQUFDLENBQUM7SUFFMUIsYUFBQztDQXJERCxBQXFEQyxJQUFBO0FBckRZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuZXhwb3J0IGNsYXNzIEdsb2JhbCAge1xuICAgIHN0YXRpYyB0b3RhbEdvbGQgPSAwO1xuICAgIHN0YXRpYyBocENoYXIgPSAxMDtcbiAgICBzdGF0aWMgaHBNb25zdGVyID0gMTA7XG4gICAgc3RhdGljIHNoaWVsZCA9IDA7XG4gICAgc3RhdGljIGRhbWVNb25zdGVyID0gMTtcbiAgICBzdGF0aWMgZGFtZUNoYXJTbWFsbCA9IDI7XG4gICAgc3RhdGljIGRhbWVDaGFyTm9ybWFsID0gNDtcbiAgICBzdGF0aWMgZGFtZUNoYXJCaWcgPSA2O1xuICAgIC8vIHN0YXRpYyBwcmljZUl0ZW1IcCA9IDE7XG4gICAgLy8gc3RhdGljIHByaWNlSXRlbUF0dGFjayA9IDE7XG4gICAgc3RhdGljIHByaWNlSXRlbSA9IFsxLDFdXG5cbiAgICBzdGF0aWMgbGV2ZWxEYXRhID0gW1xuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxMCwgbW9uc3RlcnM6IDEgfSwgLy8gTGV2ZWwgMVxuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxNSwgbW9uc3RlcnM6IDEgfSwgLy8gTGV2ZWwgMlxuICAgICAgICB7IGRhbWU6IDIsIGhwOiAyMCwgbW9uc3RlcnM6IDEgfSwgLy8gTGV2ZWwgM1xuICAgICAgICB7IGRhbWU6IDMsIGhwOiAyNSwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAzLCBocDogMjAsIG1vbnN0ZXJzOiAxIH0sIC8vIExldmVsIDRcbiAgICAgICAgeyBkYW1lOiA1LCBocDogNTAsIG1vbnN0ZXJzOiAwLCBpc0Jvc3M6IHRydWUgfSwgLy8gTGV2ZWwgNSAtIEJvc3NcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAwIH0sXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LFxuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxMCwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAxIH0sXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LFxuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxMCwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAxIH0sXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LFxuICAgICAgICB7IGRhbWU6IDMwLCBocDogMTAwLCBtb25zdGVyczogMCwgaXNCb3NzOiB0cnVlIH0gLy8gTGV2ZWwgMTQgLSBCb3NzXG4gICAgXTtcblxuXG4gICAgc3RhdGljIGxldmVsTW9uc3RlclNwcml0ZXMgPSB7XG4gICAgICAgIDA6IFswLCAxXSwgLy8gTGV2ZWwgMCB1c2VzIHNwcml0ZXMgMCwgMSwgMlxuICAgICAgICAxOiBbMSwyXSwgLy8gTGV2ZWwgMSB1c2VzIHNwcml0ZXMgMywgNCwgNVxuICAgICAgICAyOiBbMCwyXSwgLy8gTGV2ZWwgMiB1c2VzIHNwcml0ZXMgNiwgNywgOFxuICAgICAgICAzOiBbMSwyLF0sIC8vIExldmVsIDMgdXNlcyBzcHJpdGVzIDksIDEwLCAxMVxuICAgICAgICA0OiBbMiwzXSwgLy8gTGV2ZWwgNCB1c2VzIHNwcml0ZXMgMTIsIDEzLCAxNFxuICAgICAgICA1OiBbNF0sIC8vIExldmVsIDUgdXNlcyBzcHJpdGVzIDE1LCAxNiwgMTdcbiAgICAgICAgNjogWzRdLFxuICAgICAgICA3OiBbMCwgMV0sXG4gICAgICAgIDg6IFswLCAxXSxcbiAgICAgICAgOTogWzAsIDFdLFxuICAgICAgICAxMDogWzAsIDFdLFxuICAgICAgICAxMTogWzAsIDFdLFxuICAgICAgICAxMjogWzAsIDFdLFxuICAgICAgICAxMzogWzAsIDFdLFxuICAgICAgICAxNDogWzAsIDFdLFxuICAgICAgICAvLyBBZGQgbW9yZSBsZXZlbHMgYXMgbmVlZGVkXG4gICAgfTtcbiAgICBzdGF0aWMgc2VsZWN0ZWRMZXZlbCA9IDA7XG4gICAgc3RhdGljIGxldmVsQ291bnQgPSAwOyBcbiAgICAvL3N0YXRpYyBkYXRhQXR0YWNrID0gW3tpZDogMCx9XVxufVxuIl19
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
        this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvQ2FyZEhlcm8uUGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMERBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQTRCQSxDQUFDO0lBekJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQVksR0FBWjtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLDJCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQXpCZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTRCekI7SUFBRCxZQUFDO0NBNUJELEFBNEJDLENBNUJrQyxFQUFFLENBQUMsU0FBUyxHQTRCOUM7a0JBNUJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vQ2FyZEhlcm8uR2FtZVZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBjbGlja1Jlc3RhcnQoKSB7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm9uQ2xpY2tSZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIGNsaWNrUmVzdW1lKCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5vbkNsaWNrUmVzdW1lKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgY2xpY2tIb21lKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5kZXN0cm95R2FtZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
var CardHero_Global_1 = require("./CardHero.Global");
var CardHero_GameView_1 = require("./game/CardHero.GameView");
var CardHero_LevelView_1 = require("./game/CardHero.LevelView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGameView = null;
        _this.prfGameLevel = null;
        _this.nChar_1 = null;
        _this.nChar_2 = null;
        _this.nChar_3 = null;
        _this.nPlay = null;
        return _this;
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.instance = this;
        this.effectChar(this.nChar_1);
        this.effectChar(this.nChar_2);
        this.effectChar(this.nChar_3);
        this.effectPlay();
    };
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.onClickPlay = function (level) {
        // if(GameView.instance != null)
        //     GameView.instance = null
        // let gameView = cc.instantiate(this.prfGameView).getComponent(GameView)
        // this.node.addChild(gameView.node);
        CardHero_Global_1.Global.selectedLevel = level;
        cc.sys.localStorage.setItem('selectedLevel', level.toString());
        var gameView = cc.instantiate(this.prfGameView).getComponent(CardHero_GameView_1.default);
        this.node.addChild(gameView.node);
    };
    GameManager.prototype.onClickLevel = function () {
        var levelView = cc.instantiate(this.prfGameLevel).getComponent(CardHero_LevelView_1.default);
        this.node.addChild(levelView.node);
    };
    GameManager.prototype.effectChar = function (node) {
        cc.tween(node)
            .repeatForever(cc.tween()
            .to(0.9, { angle: -1 })
            .to(0.8, { angle: 1 })
            .start()).start();
    };
    GameManager.prototype.effectPlay = function () {
        cc.tween(this.nPlay)
            .repeatForever(cc.tween()
            .to(0.8, { scale: 0.8 })
            .to(0.8, { scale: 1 })
            .start()).start();
    };
    var GameManager_1;
    GameManager.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameView", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameLevel", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nChar_1", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nChar_2", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nChar_3", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nPlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUEyQztBQUMzQyw4REFBZ0Q7QUFDaEQsZ0VBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa0VDO1FBL0RHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBWSxJQUFJLENBQUM7O1FBa0R0QixpQkFBaUI7SUFDckIsQ0FBQztvQkFsRW9CLFdBQVc7SUFnQjVCLDRCQUFNLEdBQU47UUFDSSxhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEtBQWE7UUFDckIsZ0NBQWdDO1FBQ2hDLCtCQUErQjtRQUUvQix5RUFBeUU7UUFDekUscUNBQXFDO1FBQ3JDLHdCQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxJQUFhO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2IsYUFBYSxDQUNiLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNuQixLQUFLLEVBQUUsQ0FDUixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkIsYUFBYSxDQUNYLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDbEIsS0FBSyxFQUFFLENBQ1YsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7O0lBL0RZLG9CQUFRLEdBQWdCLElBQUksQ0FBQztJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDSTtJQWZMLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrRS9CO0lBQUQsa0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRXdDLEVBQUUsQ0FBQyxTQUFTLEdBa0VwRDtrQkFsRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZS9DYXJkSGVyby5HYW1lVmlld1wiO1xuaW1wb3J0IExldmVsIGZyb20gXCIuL2dhbWUvQ2FyZEhlcm8uTGV2ZWxWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVNYW5hZ2VyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZUxldmVsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkNoYXJfMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkNoYXJfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkNoYXJfMzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuUGxheTogY2MuTm9kZSA9IG51bGw7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmVmZmVjdENoYXIodGhpcy5uQ2hhcl8xKTtcbiAgICAgICAgdGhpcy5lZmZlY3RDaGFyKHRoaXMubkNoYXJfMik7XG4gICAgICAgIHRoaXMuZWZmZWN0Q2hhcih0aGlzLm5DaGFyXzMpO1xuICAgICAgICB0aGlzLmVmZmVjdFBsYXkoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrUGxheShsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIC8vIGlmKEdhbWVWaWV3Lmluc3RhbmNlICE9IG51bGwpXG4gICAgICAgIC8vICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBnYW1lVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZVZpZXcpLmdldENvbXBvbmVudChHYW1lVmlldylcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVWaWV3Lm5vZGUpO1xuICAgICAgICBHbG9iYWwuc2VsZWN0ZWRMZXZlbCA9IGxldmVsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTGV2ZWwnLCBsZXZlbC50b1N0cmluZygpKTtcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldykuZ2V0Q29tcG9uZW50KEdhbWVWaWV3KTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVWaWV3Lm5vZGUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNsaWNrTGV2ZWwoKSB7XG4gICAgICAgIGxldCBsZXZlbFZpZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVMZXZlbCkuZ2V0Q29tcG9uZW50KExldmVsKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsVmlldy5ub2RlKTtcbiAgICB9XG5cbiAgICBlZmZlY3RDaGFyKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjYy50d2VlbigpXG4gICAgICAgIC50bygwLjkse2FuZ2xlOiAtMX0pXG4gICAgICAgIC50bygwLjgsIHthbmdsZTogMX0pXG4gICAgICAgIC5zdGFydCgpXG4gICAgICAgKS5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdFBsYXkoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMublBsYXkpXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgIC50bygwLjgse3NjYWxlOjAuOH0pXG4gICAgICAgICAgIC50bygwLjgse3NjYWxlOiAxfSlcbiAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgKS5zdGFydCgpO1xuICAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
var CardHero_LevelView_1 = require("./CardHero.LevelView");
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
        _this.lbLevel = null;
        _this.listMonsters = [];
        _this.idMonster = 0;
        _this.rows = 5;
        _this.cols = 5;
        _this.spacing = 10;
        _this.startX = -337;
        _this.startY = 210;
        _this.tileWidth = 135;
        _this.selectedLevel = 0;
        _this.monstersDefeated = 0;
        _this.isCheck = false;
        _this.countMonsterDie = 0;
        _this.currentMonsterIndex = -1;
        return _this;
        // update (dt) {}
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        var _this = this;
        this.selectedLevel = parseInt(cc.sys.localStorage.getItem('selectedLevel')) || 0;
        CardHero_Global_1.Global.dameCharSmall = parseInt(cc.sys.localStorage.getItem("dameCharSmall")) || CardHero_Global_1.Global.dameCharSmall;
        CardHero_Global_1.Global.dameCharNormal = parseInt(cc.sys.localStorage.getItem("dameCharNormal")) || CardHero_Global_1.Global.dameCharNormal;
        CardHero_Global_1.Global.dameCharBig = parseInt(cc.sys.localStorage.getItem("dameCharBig")) || CardHero_Global_1.Global.dameCharBig;
        CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
        if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
            console.log("vao if");
            this.updateHpChar();
        }
        else {
            CardHero_Global_1.Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.spawnMonster();
        this.updateHpBagGuy();
        this.updateLevelLb();
    };
    GameView.prototype.updateLevelLb = function () {
        this.lbLevel.string = "LV " + (this.selectedLevel + 1);
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
    GameView.prototype.spawnMonster = function () {
        var levelInfo = CardHero_Global_1.Global.levelData[this.selectedLevel];
        console.log("level ", this.selectedLevel);
        if (this.currentMonsterIndex < levelInfo.monsters) {
            this.currentMonsterIndex++;
            var id = this.currentMonsterIndex;
            this.createMonster(id, levelInfo.hp, levelInfo.dame);
            console.log("Quai vat dau tien ", this.currentMonsterIndex);
        }
        else {
            this.completeLevel();
        }
    };
    GameView.prototype.createMonster = function (id, hp, dame) {
        var monster = cc.instantiate(this.prfMonster).getComponent(CardHero_Monster_1.default);
        var spriteIdList = CardHero_Global_1.Global.levelMonsterSprites[this.selectedLevel];
        var spriteId = spriteIdList[id];
        monster.setMonster(spriteId, hp, dame);
        this.nMonters.addChild(monster.node);
        this.listMonsters.push(monster);
    };
    GameView.prototype.attackMonster = function (dame) {
        var _this = this;
        if (this.listMonsters.length > 0) {
            var monster_1 = this.listMonsters[0];
            if (monster_1 && monster_1.node) {
                monster_1.receiveDamage(dame);
                if (CardHero_Global_1.Global.hpMonster <= 0) {
                    this.listMonsters = this.listMonsters.filter(function (m) { return m !== monster_1; });
                    this.monstersDefeated++;
                    this.countMonsterDie++;
                    console.log("Montes die ", this.countMonsterDie);
                    this.scheduleOnce(function () {
                        _this.spawnMonster();
                    }, 0.8);
                    console.log("Monster ", this.listMonsters);
                }
            }
        }
    };
    GameView.prototype.completeLevel = function () {
        var wasCompleted = cc.sys.localStorage.getItem("level_" + this.selectedLevel + "_completed") === 'true';
        if (!wasCompleted) {
            CardHero_Global_1.Global.totalGold += 1;
            CardHero_LevelView_1.default.instance.updateGold();
        }
        cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_completed", 'true');
        console.log("Level " + this.selectedLevel + " \u0111\u00E3 ho\u00E0n th\u00E0nh");
        // Mở khóa level tiếp theo
        var nextLevel = this.selectedLevel + 1;
        if (nextLevel < CardHero_Global_1.Global.levelData.length) {
            cc.sys.localStorage.setItem("level_" + nextLevel + "_unlocked", 'true');
            CardHero_LevelView_1.default.instance.updateLevelStatus(nextLevel);
        }
        console.log("level tiep theo la ", nextLevel);
        if (nextLevel == 5 || nextLevel == 14) {
            cc.sys.localStorage.setItem("level_" + nextLevel + "_isBoss", 'true');
            CardHero_LevelView_1.default.instance.updateLevelStatus(nextLevel);
        }
        if (this.selectedLevel == 5 || this.selectedLevel == 14) {
            cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flagBoss", 'true');
            console.log('co bosss', this.selectedLevel);
            CardHero_LevelView_1.default.instance.updateLevelStatus(this.selectedLevel);
        }
        // Lưu trạng thái lá cờ
        cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flag", 'true');
        CardHero_LevelView_1.default.instance.updateLevelStatus(this.selectedLevel);
        var lastLevel = CardHero_Global_1.Global.levelData.length - 1;
        if (this.selectedLevel >= lastLevel) {
            console.log("Đã hoàn thành tất cả các level, không thể chơi tiếp.");
        }
        this.gameOver(true);
    };
    GameView.prototype.loadNextLevel = function () {
        // Thiết lập lại trạng thái cần thiết cho level mới
        if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
            console.log("vao if");
            this.updateHpChar();
        }
        else {
            CardHero_Global_1.Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        CardHero_Global_1.Global.shield = 0;
        this.monstersDefeated = 0;
        this.currentMonsterIndex = -1;
        this.countMonsterDie = 0;
        this.nShield.active = false;
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
    GameView.prototype.gameOver = function (isWin) {
        // let prfGameOver = cc.instantiate(this.prfGameOver).getComponent(GameOver);
        var _this = this;
        // if (isWin) {
        //     prfGameOver.nStarWin_1.active = true;
        //     prfGameOver.nStarWin_2.active = true;
        //     prfGameOver.nStarWin_3.active = true;
        //     prfGameOver.nBtnNext.getComponent(cc.Button).interactable = true;
        //     prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = false;
        //     prfGameOver.winGame(true);
        //     prfGameOver.nBtnNext.on('click', () => {
        //         this.selectedLevel++;
        //         cc.sys.localStorage.setItem('selectedLevel', this.selectedLevel.toString());
        //         this.loadNextLevel();
        //     }, this);
        //     console.log("Level hoàn thành", this.selectedLevel);
        // } else {
        //     prfGameOver.winGame(false);
        //     prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
        //     prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
        // }
        // this.node.addChild(prfGameOver.node);
        // console.log("Số quái vật trong level: ", Global.levelData[this.selectedLevel].monsters);
        // console.log("Số quái vật đã chết: ", this.countMonsterDie);
        var prfGameOver = cc.instantiate(this.prfGameOver).getComponent(CardHero_GameOver_1.default);
        if (isWin) {
            prfGameOver.nStarWin_1.active = true;
            prfGameOver.nStarWin_2.active = true;
            prfGameOver.nStarWin_3.active = true;
            var lastLevel = CardHero_Global_1.Global.levelData.length - 1;
            if (this.selectedLevel >= lastLevel) {
                prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
                prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
                console.log("Đã hoàn thành tất cả các level, không thể chơi tiếp.");
            }
            else {
                prfGameOver.nBtnNext.getComponent(cc.Button).interactable = true;
                prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = false;
                prfGameOver.nBtnNext.on('click', function () {
                    _this.selectedLevel++;
                    cc.sys.localStorage.setItem('selectedLevel', _this.selectedLevel.toString());
                    _this.loadNextLevel();
                }, this);
            }
            prfGameOver.winGame(true);
            console.log("Level hoàn thành", this.selectedLevel);
        }
        else {
            prfGameOver.winGame(false);
            prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
            prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
        }
        this.node.addChild(prfGameOver.node);
        console.log("Số quái vật trong level: ", CardHero_Global_1.Global.levelData[this.selectedLevel].monsters);
        console.log("Số quái vật đã chết: ", this.countMonsterDie);
    };
    GameView.prototype.onClickPause = function () {
        var prfPause = cc.instantiate(this.prfPause).getComponent(CardHero_Pause_1.default);
        this.node.addChild(prfPause.node);
        this.nTableCards.children.forEach(function (element) {
            element.active = false;
        });
    };
    GameView.prototype.onClickResume = function () {
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
                CardHero_Global_1.Global.hpChar -= CardHero_Global_1.Global.dameMonster;
                this.effectDameBagGuy(this.lbDameMonster, CardHero_Global_1.Global.dameMonster);
                this.updateHpChar();
                if (CardHero_Global_1.Global.hpChar <= 0) {
                    this.gameOver(false); // Gọi hàm gameOver với điều kiện thua
                    return;
                }
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
            case 11:
                var totalDame = CardHero_Global_1.Global.dameCharSmall + CardHero_Global_1.Global.dameCharNormal + CardHero_Global_1.Global.dameCharBig;
                totalDame *= (isDoubleDame) ? 2 : 1;
                this.charMagic.charAttack();
                this.charFighter.charAttack();
                this.charArchers.charAttack();
                this.attackMonster(totalDame);
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
            .to(1, { y: 200 })
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
                .to(1, { y: 200 })
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
        if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
            console.log("vao if");
            this.updateHpChar();
        }
        else {
            CardHero_Global_1.Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        this.monstersDefeated = 0;
        this.currentMonsterIndex = 0;
        this.countMonsterDie = 0;
        console.log("quai chet resart", this.countMonsterDie);
        this.updateHpChar();
        //this.updateHpBagGuy();
        this.maskLoadGame();
        this.nTableCards.removeAllChildren();
        this.nMonters.removeAllChildren();
        this.selectedCards = [];
        this.listMonsters = [];
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        this.createMonster(0, CardHero_Global_1.Global.levelData[this.selectedLevel].hp, 1);
        CardHero_Global_1.Global.shield = 0;
        this.nShield.active = false;
        this.updateShield();
        console.log("Game restarted");
    };
    GameView.prototype.destroyGame = function () {
        console.log("destroyyy ");
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
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbLevel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFDbkMsMkRBQXlDO0FBQ3pDLHVEQUF5QztBQUN6QywrREFBaUQ7QUFDakQseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd2lCQztRQXJpQkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUs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R0F3aUJqRDtrQkF4aUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRIZXJvLkNhcmRcIjtcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NhcmRIZXJvLkNoYXJcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9DYXJkSGVyby5MZXZlbFZpZXdcIjtcbmltcG9ydCBNb25zdGVyIGZyb20gXCIuL0NhcmRIZXJvLk1vbnN0ZXJcIjtcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5HYW1lT3ZlclwiO1xuaW1wb3J0IFBhdXNlIGZyb20gXCIuL3BvcHVwL0NhcmRIZXJvLlBhdXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQ2FyZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk1vbnN0ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Nb250ZXJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuVGFibGVDYXJkczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBDaGFyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBNb25zdGVyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tDbGljazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tMb2FkR2FtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJEYW1lTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZNb25zdGVyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgaXNDbGljayA9IGZhbHNlO1xuICAgIGNvdW50Q2xpY2sgPSAwO1xuICAgIGxpc3RJZENhcmQgPSBbMCwgMCwgMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyXTtcbiAgICBzZWxlY3RlZENhcmRzID0gW107XG4gICAgZGF0YUNhcmQgPSBbXTtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyQXJjaGVyczogQ2hhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhckZpZ2h0ZXI6IENoYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJNYWdpYzogQ2hhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYkRhbWVDaGFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZlBhdXNlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblNoaWVsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2hpZWxkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkRhbWVNb25zdGVyTWlzczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMZXZlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIGxpc3RNb25zdGVycyA9IFtdO1xuICAgIGlkTW9uc3RlciA9IDA7XG4gICAgcm93cyA9IDU7XG4gICAgY29scyA9IDU7XG4gICAgc3BhY2luZyA9IDEwO1xuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXIgPSAtMzM3O1xuICAgIHByaXZhdGUgc3RhcnRZOiBudW1iZXIgPSAyMTA7XG4gICAgcHJpdmF0ZSB0aWxlV2lkdGg6IG51bWJlciA9IDEzNTtcbiAgICBzZWxlY3RlZExldmVsOiBudW1iZXIgPSAwO1xuICAgIG1vbnN0ZXJzRGVmZWF0ZWQgPSAwO1xuXG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIGNvdW50TW9uc3RlckRpZSA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50TW9uc3RlckluZGV4OiBudW1iZXIgPSAtMTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZExldmVsJykpIHx8IDA7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJTbWFsbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyTm9ybWFsXCIpKSB8fCBHbG9iYWwuZGFtZUNoYXJOb3JtYWw7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyQmlnXCIpKSB8fCBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgIGlmKHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhwQ2hhclwiKSkpIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBpZlwiKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFvIGVsc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xuICAgICAgICB0aGlzLm1hc2tMb2FkR2FtZSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xuXG4gICAgICAgIH0sIDEpXG4gICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGV2ZWxMYigpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlTGV2ZWxMYigpIHtcbiAgICAgICAgdGhpcy5sYkxldmVsLnN0cmluZyA9IGBMViAke3RoaXMuc2VsZWN0ZWRMZXZlbCArIDF9YDtcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IG51bGxcbiAgICB9XG5cbiAgICBtYXNrTG9hZEdhbWUoKSB7XG4gICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDcpXG4gICAgfVxuXG4gICAgbG9hZENhcmRzKCkge1xuICAgICAgICBsZXQgaWRJbmRleCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZEluZGV4ID49IHRoaXMubGlzdElkQ2FyZC5sZW5ndGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgICAgICBjYXJkLnNldERhdGEodGhpcy5saXN0SWRDYXJkW2lkSW5kZXhdKTtcblxuICAgICAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueCA9IHRoaXMuc3RhcnRYICsgaiAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNhcmQubm9kZS55ID0gdGhpcy5zdGFydFkgLSBpICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXVtqXSA9IGNhcmQ7XG4gICAgICAgICAgICAgICAgaWRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc3Bhd25Nb25zdGVyKCkge1xuICAgICAgICBjb25zdCBsZXZlbEluZm8gPSBHbG9iYWwubGV2ZWxEYXRhW3RoaXMuc2VsZWN0ZWRMZXZlbF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgXCIsdGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA8IGxldmVsSW5mby5tb25zdGVycykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uc3RlckluZGV4Kys7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmN1cnJlbnRNb25zdGVySW5kZXhcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uc3RlcihpZCwgbGV2ZWxJbmZvLmhwLCBsZXZlbEluZm8uZGFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1YWkgdmF0IGRhdSB0aWVuIFwiLCB0aGlzLmN1cnJlbnRNb25zdGVySW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUxldmVsKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNyZWF0ZU1vbnN0ZXIoaWQ6IG51bWJlciwgaHA6IG51bWJlciwgZGFtZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBtb25zdGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZNb25zdGVyKS5nZXRDb21wb25lbnQoTW9uc3Rlcik7XG4gICAgICAgIGxldCBzcHJpdGVJZExpc3QgPSBHbG9iYWwubGV2ZWxNb25zdGVyU3ByaXRlc1t0aGlzLnNlbGVjdGVkTGV2ZWxdO1xuICAgICAgICBsZXQgc3ByaXRlSWQgPSBzcHJpdGVJZExpc3RbaWRdO1xuICAgICAgICBtb25zdGVyLnNldE1vbnN0ZXIoc3ByaXRlSWQsIGhwLCBkYW1lKTtcbiAgICAgICAgdGhpcy5uTW9udGVycy5hZGRDaGlsZChtb25zdGVyLm5vZGUpO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xuICAgIH1cblxuXG4gICAgYXR0YWNrTW9uc3RlcihkYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RNb25zdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgW21vbnN0ZXJdID0gdGhpcy5saXN0TW9uc3RlcnM7XG4gICAgICAgICAgICBpZiAobW9uc3RlciAmJiBtb25zdGVyLm5vZGUpIHtcbiAgICAgICAgICAgICAgICBtb25zdGVyLnJlY2VpdmVEYW1hZ2UoZGFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IHRoaXMubGlzdE1vbnN0ZXJzLmZpbHRlcihtID0+IG0gIT09IG1vbnN0ZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnN0ZXJzRGVmZWF0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudE1vbnN0ZXJEaWUrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb250ZXMgZGllIFwiLCB0aGlzLmNvdW50TW9uc3RlckRpZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICAgICAgICAgICAgICB9LDAuOClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBcIiwgdGhpcy5saXN0TW9uc3RlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlTGV2ZWwoKSB7XG4gICAgICAgIGxldCB3YXNDb21wbGV0ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7dGhpcy5zZWxlY3RlZExldmVsfV9jb21wbGV0ZWRgKSA9PT0gJ3RydWUnO1xuICAgICAgICBpZiAoIXdhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCArPSAxO1xuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlR29sZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2NvbXBsZXRlZGAsICd0cnVlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBMZXZlbCAke3RoaXMuc2VsZWN0ZWRMZXZlbH0gxJHDoyBob8OgbiB0aMOgbmhgKTtcbiAgICBcbiAgICAgICAgLy8gTeG7nyBraMOzYSBsZXZlbCB0aeG6v3AgdGhlb1xuICAgICAgICBsZXQgbmV4dExldmVsID0gdGhpcy5zZWxlY3RlZExldmVsICsgMTtcbiAgICAgICAgaWYgKG5leHRMZXZlbCA8IEdsb2JhbC5sZXZlbERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxldmVsXyR7bmV4dExldmVsfV91bmxvY2tlZGAsICd0cnVlJyk7XG4gICAgICAgICAgICBMZXZlbC5pbnN0YW5jZS51cGRhdGVMZXZlbFN0YXR1cyhuZXh0TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgdGllcCB0aGVvIGxhIFwiLCBuZXh0TGV2ZWwpO1xuXG4gICAgICAgIGlmKG5leHRMZXZlbCA9PSA1IHx8IG5leHRMZXZlbCA9PSAxNCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke25leHRMZXZlbH1faXNCb3NzYCwgJ3RydWUnKTtcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUxldmVsU3RhdHVzKG5leHRMZXZlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkTGV2ZWwgPT0gNSB8fCB0aGlzLnNlbGVjdGVkTGV2ZWwgPT0gMTQpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2ZsYWdCb3NzYCwgJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbyBib3NzcycsIHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgICAgICAgICBMZXZlbC5pbnN0YW5jZS51cGRhdGVMZXZlbFN0YXR1cyh0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIEzGsHUgdHLhuqFuZyB0aMOhaSBsw6EgY+G7nVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxldmVsXyR7dGhpcy5zZWxlY3RlZExldmVsfV9mbGFnYCwgJ3RydWUnKTtcbiAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlTGV2ZWxTdGF0dXModGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICBcbiAgICAgICAgY29uc3QgbGFzdExldmVsID0gR2xvYmFsLmxldmVsRGF0YS5sZW5ndGggLSAxO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExldmVsID49IGxhc3RMZXZlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLEkMOjIGhvw6BuIHRow6BuaCB04bqldCBj4bqjIGPDoWMgbGV2ZWwsIGtow7RuZyB0aOG7gyBjaMahaSB0aeG6v3AuXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVPdmVyKHRydWUpO1xuICAgIFxuICAgIH1cblxuXG4gICAgbG9hZE5leHRMZXZlbCgpIHtcbiAgICAgICAgLy8gVGhp4bq/dCBs4bqtcCBs4bqhaSB0cuG6oW5nIHRow6FpIGPhuqduIHRoaeG6v3QgY2hvIGxldmVsIG3hu5tpXG4gICAgICAgIGlmKHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhwQ2hhclwiKSkpIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBpZlwiKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFvIGVsc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDA7XG4gICAgICAgIHRoaXMubW9uc3RlcnNEZWZlYXRlZCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmNvdW50TW9uc3RlckRpZSA9IDA7XG4gICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPWZhbHNlO1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMubk1vbnRlcnMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5zcGF3bk1vbnN0ZXIoKTsgXG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGVkIExldmVsICR7dGhpcy5zZWxlY3RlZExldmVsfWApO1xuICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGIoKTtcbiAgICB9XG5cblxuICAgIGdhbWVPdmVyKGlzV2luOiBib29sZWFuKSB7XG4gICAgICAgIC8vIGxldCBwcmZHYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChHYW1lT3Zlcik7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAoaXNXaW4pIHtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgcHJmR2FtZU92ZXIud2luR2FtZSh0cnVlKTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkTGV2ZWwrKztcbiAgICAgICAgLy8gICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTGV2ZWwnLCB0aGlzLnNlbGVjdGVkTGV2ZWwudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5sb2FkTmV4dExldmVsKCk7XG4gICAgICAgIC8vICAgICB9LCB0aGlzKTtcbiAgICBcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgaG/DoG4gdGjDoG5oXCIsIHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBwcmZHYW1lT3Zlci53aW5HYW1lKGZhbHNlKTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQocHJmR2FtZU92ZXIubm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU+G7kSBxdcOhaSB24bqtdCB0cm9uZyBsZXZlbDogXCIsIEdsb2JhbC5sZXZlbERhdGFbdGhpcy5zZWxlY3RlZExldmVsXS5tb25zdGVycyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU+G7kSBxdcOhaSB24bqtdCDEkcOjIGNo4bq/dDogXCIsIHRoaXMuY291bnRNb25zdGVyRGllKTtcblxuICAgICAgICBsZXQgcHJmR2FtZU92ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVPdmVyKS5nZXRDb21wb25lbnQoR2FtZU92ZXIpO1xuICAgIFxuICAgICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzMuYWN0aXZlID0gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMZXZlbCA9IEdsb2JhbC5sZXZlbERhdGEubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGV2ZWwgPj0gbGFzdExldmVsKSB7XG4gICAgICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwixJDDoyBob8OgbiB0aMOgbmggdOG6pXQgY+G6oyBjw6FjIGxldmVsLCBraMO0bmcgdGjhu4MgY2jGoWkgdGnhur9wLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsKys7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VsZWN0ZWRMZXZlbCcsIHRoaXMuc2VsZWN0ZWRMZXZlbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTmV4dExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBwcmZHYW1lT3Zlci53aW5HYW1lKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbCBob8OgbiB0aMOgbmhcIiwgdGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLndpbkdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZHYW1lT3Zlci5ub2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJT4buRIHF1w6FpIHbhuq10IHRyb25nIGxldmVsOiBcIiwgR2xvYmFsLmxldmVsRGF0YVt0aGlzLnNlbGVjdGVkTGV2ZWxdLm1vbnN0ZXJzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJT4buRIHF1w6FpIHbhuq10IMSRw6MgY2jhur90OiBcIiwgdGhpcy5jb3VudE1vbnN0ZXJEaWUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tQYXVzZSgpIHtcbiAgICAgICAgbGV0IHByZlBhdXNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZQYXVzZSkuZ2V0Q29tcG9uZW50KFBhdXNlKVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHJmUGF1c2Uubm9kZSk7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tSZXN1bWUoKSB7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNodWZmbGVBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RlZENhcmQoY2FyZDogQ2FyZCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcmRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrTWF0Y2guYmluZCh0aGlzKSwgMC42KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tNYXRjaCgpIHtcbiAgICAgICAgbGV0IFtmaXJzdENhcmQsIHNlY29uZENhcmRdID0gdGhpcy5zZWxlY3RlZENhcmRzO1xuXG4gICAgICAgIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSAwICYmIHNlY29uZENhcmQuaWRDYXJkID09PSAwKSB7XG4gICAgICAgICAgICBHbG9iYWwuc2hpZWxkID0gMztcbiAgICAgICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGllbGQgQWN0aXZhdGVkOiBcIiwgR2xvYmFsLnNoaWVsZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSAxMiB8fCBzZWNvbmRDYXJkLmlkQ2FyZCA9PT0gMTIpIHtcbiAgICAgICAgICAgIGxldCBkb3VibGVEYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyQ2FyZCA9IGZpcnN0Q2FyZC5pZENhcmQgPT09IDEyID8gc2Vjb25kQ2FyZCA6IGZpcnN0Q2FyZDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QXR0YWNrKG11bHRpcGxpZXJDYXJkLmlkQ2FyZCwgZG91YmxlRGFtZSk7XG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IHNlY29uZENhcmQuaWRDYXJkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhmaXJzdENhcmQuaWRDYXJkLCBmYWxzZSk7XG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkLS07XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXlNaXNzKHRoaXMubkRhbWVNb25zdGVyTWlzcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGllbGQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcbiAgICAgICAgICAgIH0gaWYgKEdsb2JhbC5zaGllbGQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyIC09IEdsb2JhbC5kYW1lTW9uc3RlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXkodGhpcy5sYkRhbWVNb25zdGVyLCBHbG9iYWwuZGFtZU1vbnN0ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocENoYXIgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGZhbHNlKTsgLy8gR+G7jWkgaMOgbSBnYW1lT3ZlciB24bubaSDEkWnhu4F1IGtp4buHbiB0aHVhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIH1cblxuXG4gICAgc2VsZWN0QXR0YWNrKGlkLCBpc0RvdWJsZURhbWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1IG5lIFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZURhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgKz0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VuZyBuaG8gYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0llbSBkYW5oIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyU21hbGwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIGxldCB0b3RhbERhbWUgPSBHbG9iYWwuZGFtZUNoYXJTbWFsbCArIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAgKyBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgICAgICAgICAgdG90YWxEYW1lICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKHRvdGFsRGFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyBkYW1lO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDEsIHsgeTogMjAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLnkgPSAtNzA7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdERhbWVCYWdHdXlNaXNzKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPiAwKSB7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvL25vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIGRhbWU7XG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IDIwMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gLTcwO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH0gaWYgKEdsb2JhbC5zaGllbGQgPT0gMCkge1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHVwZGF0ZUhwQ2hhcigpIHtcbiAgICAgICAgdGhpcy5sYkhwQ2hhci5zdHJpbmcgPSBHbG9iYWwuaHBDaGFyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZUhwQmFnR3V5KCkge1xuICAgICAgICB0aGlzLmxiSHBNb25zdGVyLnN0cmluZyA9IEdsb2JhbC5ocE1vbnN0ZXIgKyAnICc7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpZWxkKCkge1xuICAgICAgICB0aGlzLmxiU2hpZWxkLnN0cmluZyA9IEdsb2JhbC5zaGllbGQgKyAnICc7XG4gICAgfVxuICAgIG9uQ2xpY2tSZXN0YXJ0KCkge1xuICAgICAgICBpZihwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpKSB7XG4gICAgICAgICAgICBHbG9iYWwuaHBDaGFyID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHBDaGFyXCIpKSB8fCBHbG9iYWwuaHBDaGFyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gaWZcIilcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSAxMDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBlbHNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9uc3RlcnNEZWZlYXRlZCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRNb25zdGVyRGllID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWFpIGNoZXQgcmVzYXJ0XCIsIHRoaXMuY291bnRNb25zdGVyRGllKTtcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgLy90aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5uTW9udGVycy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0TW9uc3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNb25zdGVyKDAsIEdsb2JhbC5sZXZlbERhdGFbdGhpcy5zZWxlY3RlZExldmVsXS5ocCwgMSk7XG4gICAgICAgIEdsb2JhbC5zaGllbGQgPSAwO1xuICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSByZXN0YXJ0ZWRcIik7XG4gICAgfVxuXG4gICAgZGVzdHJveUdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveXl5IFwiKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
            .to(0.2, { scaleX: 0 })
            .call(function () {
            if (!_this.nCardBack.active) {
                _this.setCards(true);
            }
            else {
                _this.setCards(false);
            }
        }).to(0.2, { scaleX: 1 }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErRUM7UUE1RUUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7UUFrRVYsWUFBWTtRQUNaLElBQUk7UUFFSixpQkFBaUI7SUFDckIsQ0FBQztJQXJFRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMs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SUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStFeEI7SUFBRCxXQUFDO0NBL0VELEFBK0VDLENBL0VpQyxFQUFFLENBQUMsU0FBUyxHQStFN0M7a0JBL0VvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5DYXJkQmFjazogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5DYXJkRnJvbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICBuQ2FyZFNwZjogY2MuTm9kZSA9IG51bGw7XG4gICBpc0NsaWNrZWQgPSBmYWxzZTtcbiAgIGlkQ2FyZCA9IDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmZsaXBUb0JhY2soKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5mbGlwVG9mcm9udCw1KTtcbiAgICB9XG4gICAgc2V0RGF0YShpZCkge1xuICAgICAgICB0aGlzLmlkQ2FyZCA9IGlkO1xuICAgICAgICB0aGlzLm5DYXJkU3BmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZVZpZXcuaW5zdGFuY2UubGlzdFNwZkNhcmRzW2lkXTtcbiAgICB9XG5cbiAgICBvbkNsaWNrQ2FyZHMoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDbGlja2VkKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGlwQ2FyZCgpO1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5hZGRTZWxlY3RlZENhcmQodGhpcyk7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2srKztcbiAgICAgICAgaWYoR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljayA9PSAyKSB7XG4gICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5uTWFza0NsaWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uubk1hc2tDbGljay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sMC41OClcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2sgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FyZHMoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubkNhcmRCYWNrLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSA9ICFhY3RpdmU7XG4gICAgfVxuXG4gICAgZmxpcFRvQmFjayhjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwLjEgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlWDogMSB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGZsaXBUb2Zyb250KCkge1xuICAgICAgICBpZighdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMyx7c2NhbGVYOjB9KVxuICAgICAgICAgICAgLmNhbGwoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDoxfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgLnRvKDAuMix7c2NhbGVYOiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT57XG4gICAgICAgICAgICBpZighdGhpcy5uQ2FyZEJhY2suYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyh0cnVlKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudG8oMC4yLCB7c2NhbGVYOjF9KS5zdGFydCgpO1xuICAgIH1cbiAgIFxuICAgIC8vIHN0YXJ0KCkge1xuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        CardHero_Global_1.Global.dameMonster = dame;
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
        this.node.stopAllActions();
        this.scheduleOnce(function () {
            _this.node.destroy();
            CardHero_GameView_1.default.instance.monstersDefeated++;
            console.log("mau", CardHero_Global_1.Global.hpMonster);
        }, 0.3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTW9uc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBNEM7QUFDNUMseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBdURDO1FBcERHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCx3QkFBd0I7UUFDeEIsZUFBUyxHQUFhLElBQUksQ0FBQzs7UUErQzNCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0NHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELDRCQUFVLEdBQVYsVUFBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUk7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckYsd0JBQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHdCQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLElBQUk7UUFDZCx3QkFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDekIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsMkJBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksd0JBQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLHdCQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNyQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRU4scUJBQXFCO0lBRXpCLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0ksSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNPO0lBSFIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVEM0I7SUFBRCxjQUFDO0NBdkRELEFBdURDLENBdkRvQyxFQUFFLENBQUMsU0FBUyxHQXVEaEQ7a0JBdkRvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uc3RlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgZGFtZSA9IDE7XG4gICAgbW9uc3RlcklkID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBqdW1wVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2V0TW9uc3Rlckp1bXAoKTtcbiAgICB9XG4gICAgc2V0TW9uc3RlcihpZCwgaHAsIGRhbWUpIHtcbiAgICAgICAgdGhpcy5tb25zdGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZVZpZXcuaW5zdGFuY2UubGlzdFNwZk1vbnN0ZXJbaWRdO1xuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gaHA7XG4gICAgICAgIEdsb2JhbC5kYW1lTW9uc3RlciA9IGRhbWU7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZURhbWFnZShkYW1lKSB7XG4gICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gZGFtZTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZWZmZWN0RGFtZUJhZ0d1eShHYW1lVmlldy5pbnN0YW5jZS5sYkRhbWVDaGFyLGRhbWUpO1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS51cGRhdGVIcEJhZ0d1eSgpO1xuICAgICAgICBpZiAoR2xvYmFsLmhwTW9uc3RlciA8PSAwKSB7XG4gICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMDtcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICB0aGlzLm9uRGVhdGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVhdGgoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UubW9uc3RlcnNEZWZlYXRlZCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXVcIiwgR2xvYmFsLmhwTW9uc3Rlcik7XG4gICAgICAgIH0sMC4zKVxuICAgICAgXG4gICAgICAgIC8vIERlbGF5IG9mIDIgc2Vjb25kc1xuXG4gICAgfVxuICAgIHNldE1vbnN0ZXJKdW1wKCkge1xuICAgICAgICBjb25zdCBqdW1wVXAgPSBjYy50d2VlbigpLnRvKDAuNSwgeyB5OiAxMDAgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KTtcbiAgICAgICAgY29uc3QganVtcERvd24gPSBjYy50d2VlbigpLnRvKDAuMywgeyB5OiAwIH0seyBlYXNpbmc6ICdzaW5lSW4nIH0pO1xuICAgICAgICBjb25zdCBqdW1wU2VxdWVuY2UgPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xuICAgICAgICBjb25zdCByZXBlYXRKdW1wID0gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKGp1bXBTZXF1ZW5jZSk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKHJlcGVhdEp1bXApLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
var CardHero_Global_1 = require("../CardHero.Global");
var CardHero_ItemLevel_1 = require("./CardHero.ItemLevel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfShopView = null;
        _this.lbGold = null;
        _this.prfItemLevel = null;
        _this.nLayout = null;
        _this.levelOrder = [
            [0, 1, 2],
            [5, 4, 3],
            [6, 7, 8],
            [11, 10, 9],
            [12, 13, 14]
        ];
        _this.selectedLevel = null;
        return _this;
        // update (dt) {}
    }
    Level_1 = Level;
    Level.prototype.onLoad = function () {
        Level_1.instance = this;
        CardHero_Global_1.Global.totalGold = parseInt(cc.sys.localStorage.getItem("totalGold"), CardHero_Global_1.Global.totalGold) || CardHero_Global_1.Global.totalGold;
        CardHero_Global_1.Global.levelCount = parseInt(cc.sys.localStorage.getItem("levelCount")) || 0;
        CardHero_Global_1.Global.selectedLevel = parseInt(cc.sys.localStorage.getItem("levelGame")) || CardHero_Global_1.Global.selectedLevel;
        console.log("LevelCount", CardHero_Global_1.Global.levelCount);
        this.updateGold();
        this.loadItemLevel();
        console.log("Tien ", CardHero_Global_1.Global.totalGold);
    };
    Level.prototype.onClickShopView = function () {
        var shopView = cc.instantiate(this.prfShopView);
        this.node.addChild(shopView);
    };
    Level.prototype.onClickBack = function () {
        this.node.destroy();
    };
    Level.prototype.updateGold = function () {
        this.lbGold.string = '$' + CardHero_Global_1.Global.totalGold + ' ';
        cc.sys.localStorage.setItem("totalGold", CardHero_Global_1.Global.totalGold);
    };
    Level.prototype.clickRemoveCache = function () {
        cc.sys.localStorage.clear();
    };
    Level.prototype.loadItemLevel = function () {
        for (var row = 0; row < this.levelOrder.length; row++) {
            for (var col = 0; col < this.levelOrder[row].length; col++) {
                var id = this.levelOrder[row][col];
                var item = cc.instantiate(this.prfItemLevel).getComponent(CardHero_ItemLevel_1.default);
                var completed = cc.sys.localStorage.getItem("level_" + id + "_completed") === 'true';
                var isUnlocked = cc.sys.localStorage.getItem("level_" + id + "_unlocked") === 'true' || id === 0;
                var flag = cc.sys.localStorage.getItem("level_" + id + "_flag") === 'true' || false;
                var isBoss = cc.sys.localStorage.getItem("level_" + id + "_isBoss") === 'true' || false;
                console.log("isBoss", isBoss);
                var flagBoss = cc.sys.localStorage.getItem("level_" + id + "_flagBoss") === 'true';
                item.setData(id, true, isBoss, isUnlocked, flag, flagBoss);
                this.nLayout.addChild(item.node);
            }
        }
    };
    Level.prototype.updateLevelStatus = function (levelId) {
        this.nLayout.children.forEach(function (itemNode) {
            var itemComponent = itemNode.getComponent(CardHero_ItemLevel_1.default);
            if (itemComponent.idLevel === levelId) {
                var completed = cc.sys.localStorage.getItem("level_" + levelId + "_completed") === 'true';
                var isUnlocked = cc.sys.localStorage.getItem("level_" + levelId + "_unlocked") === 'true' || levelId == 0;
                var flag = cc.sys.localStorage.getItem("level_" + levelId + "_flag") === 'true' || false;
                var isBoss = cc.sys.localStorage.getItem("level_" + levelId + "_isBoss") === 'true';
                var flagBoss = cc.sys.localStorage.getItem("level_" + levelId + "_flagBoss") === 'true';
                itemComponent.setData(levelId, completed, isBoss, isUnlocked, flag, flagBoss);
            }
        });
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
    __decorate([
        property(cc.Prefab)
    ], Level.prototype, "prfItemLevel", void 0);
    __decorate([
        property(cc.Node)
    ], Level.prototype, "nLayout", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTGV2ZWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHNEQUE0QztBQUU1QywyREFBaUQ7QUFFM0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEwRkM7UUFwRkcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUc7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDZixDQUFDO1FBRU0sbUJBQWEsR0FBVyxJQUFJLENBQUM7O1FBbUVyQyxpQkFBaUI7SUFDckIsQ0FBQztjQTFGb0IsS0FBSztJQXVCdEIsc0JBQU0sR0FBTjtRQUNJLE9BQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHdCQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUMsd0JB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QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFTLE9BQU8sY0FBVyxDQUFDLEtBQUssTUFBTSxDQUFDO2dCQUNyRixhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxJQUFJLEVBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0U7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUFwRkQsd0JBQXdCO0lBQ1YsY0FBUSxHQUFVLElBQUksQ0FBQztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNNO0lBYlAsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBGekI7SUFBRCxZQUFDO0NBMUZELEFBMEZDLENBMUZrQyxFQUFFLENBQUMsU0FBUyxHQTBGOUM7a0JBMUZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vQ2FyZEhlcm8uR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuaW1wb3J0IEl0ZW1MZXZlbFZpZXcgZnJvbSBcIi4vQ2FyZEhlcm8uSXRlbUxldmVsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBMZXZlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkl0ZW1MZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGxldmVsT3JkZXIgPSBbXG4gICAgICAgIFswLCAxLCAyXSxcbiAgICAgICAgWzUsIDQsIDNdLFxuICAgICAgICBbNiwgNywgOF0sXG4gICAgICAgIFsxMSwgMTAsIDldLFxuICAgICAgICBbMTIsIDEzLCAxNF1cbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RlZExldmVsOiBudW1iZXIgPSBudWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIExldmVsLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgR2xvYmFsLnRvdGFsR29sZCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsR29sZFwiKSxHbG9iYWwudG90YWxHb2xkKSB8fCBHbG9iYWwudG90YWxHb2xkO1xuICAgICAgICBHbG9iYWwubGV2ZWxDb3VudCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsQ291bnRcIikpIHx8IDA7XG4gICAgICAgIEdsb2JhbC5zZWxlY3RlZExldmVsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxHYW1lXCIpKSB8fCBHbG9iYWwuc2VsZWN0ZWRMZXZlbDtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWxDb3VudFwiLEdsb2JhbC5sZXZlbENvdW50KTtcbiAgICAgICAgdGhpcy51cGRhdGVHb2xkKCk7XG4gICAgICAgIHRoaXMubG9hZEl0ZW1MZXZlbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgXG5cbiAgICBvbkNsaWNrU2hvcFZpZXcoKSB7XG4gICAgICAgIGxldCBzaG9wVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2hvcFZpZXcpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzaG9wVmlldyk7XG4gICAgfVxuICAgIFxuICAgIG9uQ2xpY2tCYWNrKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSAnJCcgKyAgR2xvYmFsLnRvdGFsR29sZCArICcgJztcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxHb2xkXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgIGNsaWNrUmVtb3ZlQ2FjaGUoKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBsb2FkSXRlbUxldmVsKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmxldmVsT3JkZXIubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5sZXZlbE9yZGVyW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubGV2ZWxPcmRlcltyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW1MZXZlbCkuZ2V0Q29tcG9uZW50KEl0ZW1MZXZlbFZpZXcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtpZH1fY29tcGxldGVkYCkgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICBjb25zdCBpc1VubG9ja2VkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2lkfV91bmxvY2tlZGApID09PSAndHJ1ZScgfHwgaWQgPT09IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtpZH1fZmxhZ2ApID09PSAndHJ1ZScgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNCb3NzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2lkfV9pc0Jvc3NgKSA9PT0gJ3RydWUnIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNCb3NzXCIsIGlzQm9zcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZ0Jvc3MgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7aWR9X2ZsYWdCb3NzYCkgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoaWQsIHRydWUsaXNCb3NzLGlzVW5sb2NrZWQsZmxhZywgZmxhZ0Jvc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMubkxheW91dC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTGV2ZWxTdGF0dXMobGV2ZWxJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubkxheW91dC5jaGlsZHJlbi5mb3JFYWNoKChpdGVtTm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1Db21wb25lbnQgPSBpdGVtTm9kZS5nZXRDb21wb25lbnQoSXRlbUxldmVsVmlldyk7XG4gICAgICAgICAgICBpZiAoaXRlbUNvbXBvbmVudC5pZExldmVsID09PSBsZXZlbElkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2xldmVsSWR9X2NvbXBsZXRlZGApID09PSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNVbmxvY2tlZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtsZXZlbElkfV91bmxvY2tlZGApID09PSAndHJ1ZScgfHwgbGV2ZWxJZCA9PSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7bGV2ZWxJZH1fZmxhZ2ApID09PSAndHJ1ZScgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNCb3NzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2xldmVsSWR9X2lzQm9zc2ApID09PSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZ0Jvc3MgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7bGV2ZWxJZH1fZmxhZ0Jvc3NgKSA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgICAgIGl0ZW1Db21wb25lbnQuc2V0RGF0YShsZXZlbElkLCBjb21wbGV0ZWQsIGlzQm9zcywgaXNVbmxvY2tlZCxmbGFnLGZsYWdCb3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.ItemLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5f39Q4GE9Gg62M2AkH/oYk', 'CardHero.ItemLevel');
// MatchingCardHeros/scripts/game/CardHero.ItemLevel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemLevelView = /** @class */ (function (_super) {
    __extends(ItemLevelView, _super);
    function ItemLevelView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nBlock = null;
        _this.nLevelActive = null;
        _this.nBossBock = null;
        _this.nBossActive = null;
        _this.nFlag = null;
        _this.nFlagBoss = null;
        _this.idLevel = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {
    // }
    ItemLevelView.prototype.setData = function (id, completed, isBoss, isUnlocked, flag, flagBoss) {
        this.idLevel = id;
        this.nBlock.active = completed;
        switch (id) {
            case 5:
            case 14:
                this.nBossBock.active = completed;
                break;
            default:
                break;
        }
        this.nFlag.active = flag;
        this.nLevelActive.active = isUnlocked;
        this.node.getComponent(cc.Button).interactable = isUnlocked;
        this.nBossActive.active = isBoss;
        this.nFlagBoss.active = flagBoss;
        if (isBoss) {
            this.nFlag.active = false;
            this.nLevelActive.active = false;
            this.nBlock.active = false;
        }
    };
    ItemLevelView.prototype.onClickPlay = function () {
        CardHero_GameManager_1.default.instance.onClickPlay(this.idLevel);
        console.log("Level ", this.idLevel);
    };
    ItemLevelView.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], ItemLevelView.prototype, "nBlock", void 0);
    __decorate([
        property(cc.Node)
    ], ItemLevelView.prototype, "nLevelActive", void 0);
    __decorate([
        property(cc.Node)
    ], ItemLevelView.prototype, "nBossBock", void 0);
    __decorate([
        property(cc.Node)
    ], ItemLevelView.prototype, "nBossActive", void 0);
    __decorate([
        property(cc.Node)
    ], ItemLevelView.prototype, "nFlag", void 0);
    __decorate([
        property(cc.Node)
    ], ItemLevelView.prototype, "nFlagBoss", void 0);
    ItemLevelView = __decorate([
        ccclass
    ], ItemLevelView);
    return ItemLevelView;
}(cc.Component));
exports.default = ItemLevelView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uSXRlbUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdFQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWdFQztRQTdERyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBVSxDQUFDLENBQUM7O1FBNENuQixpQkFBaUI7SUFDckIsQ0FBQztJQTVDRyx3QkFBd0I7SUFHeEIsY0FBYztJQUNkLElBQUk7SUFFSiwrQkFBTyxHQUFQLFVBQVEsRUFBVSxFQUFFLFNBQWtCLEVBQUUsTUFBZSxFQUFFLFVBQW1CLEVBQUMsSUFBYSxFQUFDLFFBQVE7UUFFL0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQy9CLFFBQVEsRUFBRSxFQUFFO1lBQ1IsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUNsQyxNQUFNO1lBRVY7Z0JBQ0ksTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUcsTUFBTSxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFHTCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLDhCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQTFERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQWxCVCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBZ0VqQztJQUFELG9CQUFDO0NBaEVELEFBZ0VDLENBaEUwQyxFQUFFLENBQUMsU0FBUyxHQWdFdEQ7a0JBaEVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vQ2FyZEhlcm8uR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1MZXZlbFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJsb2NrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5MZXZlbEFjdGl2ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQm9zc0JvY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJvc3NBY3RpdmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZsYWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZsYWdCb3NzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpZExldmVsOm51bWJlciA9IDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cblxuICAgIC8vIG9uTG9hZCAoKSB7XG4gICAgLy8gfVxuXG4gICAgc2V0RGF0YShpZDogbnVtYmVyLCBjb21wbGV0ZWQ6IGJvb2xlYW4sIGlzQm9zczogYm9vbGVhbiwgaXNVbmxvY2tlZDogYm9vbGVhbixmbGFnOiBib29sZWFuLGZsYWdCb3NzKSB7XG5cbiAgICAgICAgdGhpcy5pZExldmVsID0gaWQ7XG4gICAgICAgIHRoaXMubkJsb2NrLmFjdGl2ZSA9IGNvbXBsZXRlZDtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICB0aGlzLm5Cb3NzQm9jay5hY3RpdmUgPSBjb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uRmxhZy5hY3RpdmUgPSBmbGFnO1xuICAgICAgICB0aGlzLm5MZXZlbEFjdGl2ZS5hY3RpdmUgPSBpc1VubG9ja2VkO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gaXNVbmxvY2tlZDtcbiAgICAgICAgdGhpcy5uQm9zc0FjdGl2ZS5hY3RpdmUgPSBpc0Jvc3M7XG4gICAgICAgIHRoaXMubkZsYWdCb3NzLmFjdGl2ZSA9IGZsYWdCb3NzO1xuICAgICAgICBpZihpc0Jvc3MpIHtcbiAgICAgICAgICAgIHRoaXMubkZsYWcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5MZXZlbEFjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubkJsb2NrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25DbGlja1BsYXkoKSB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlLm9uQ2xpY2tQbGF5KHRoaXMuaWRMZXZlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgXCIsIHRoaXMuaWRMZXZlbCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.nYouWin = null;
        _this.nYouLose = null;
        _this.nStarWin_1 = null;
        _this.nStarWin_2 = null;
        _this.nStarWin_3 = null;
        _this.nStarLose_1 = null;
        _this.nStarLose_2 = null;
        _this.nStarLose_3 = null;
        _this.nBtnNext = null;
        return _this;
        // update (dt) {}
    }
    GameOver.prototype.start = function () {
    };
    GameOver.prototype.clickRestart = function () {
        CardHero_GameView_1.default.instance.onClickRestart();
        this.node.destroy();
    };
    GameOver.prototype.winGame = function (win) {
        this.nYouWin.active = win;
        this.nYouLose.active = !win;
    };
    GameOver.prototype.nextLevel = function () {
        CardHero_GameView_1.default.instance.loadNextLevel();
        this.node.destroy();
    };
    GameOver.prototype.clickHome = function () {
        this.node.destroy();
        CardHero_GameView_1.default.instance.destroyGame();
    };
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nYouWin", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nYouLose", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarWin_1", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarWin_2", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarWin_3", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarLose_1", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarLose_2", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarLose_3", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nBtnNext", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvQ2FyZEhlcm8uR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMERBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBRUksd0JBQXdCO1FBRjVCLHFFQXNEQztRQWxERyxlQUFlO1FBR2YsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBeUJ6QixpQkFBaUI7SUFDckIsQ0FBQztJQXpCRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsR0FBWTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFFaEMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBNUJSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzRDVCO0lBQUQsZUFBQztDQXRERCxBQXNEQyxDQXREcUMsRUFBRSxDQUFDLFNBQVMsR0FzRGpEO2tCQXREb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Zb3VXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Zb3VMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGFyV2luXzE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGFyV2luXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGFyV2luXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXJMb3NlXzE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXJMb3NlXzI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXJMb3NlXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJ0bk5leHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIGNsaWNrUmVzdGFydCgpe1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5vbkNsaWNrUmVzdGFydCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHdpbkdhbWUod2luOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubllvdVdpbi5hY3RpdmUgPSB3aW47XG4gICAgICAgIHRoaXMubllvdUxvc2UuYWN0aXZlID0gIXdpbjtcblxuICAgIH1cblxuICAgIG5leHRMZXZlbCgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UubG9hZE5leHRMZXZlbCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNsaWNrSG9tZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZGVzdHJveUdhbWUoKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvU2hvcC9DYXJkSGVyby5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw0REFBa0Q7QUFDbEQseURBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBbkVFLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQXdEbEIsaUJBQWlCO0lBQ3JCLENBQUM7aUJBdkVvQixRQUFRO0lBaUJ6Qix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsMkJBQVEsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELG9DQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQ2hCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFRLEVBQUksQ0FBQyxDQUFDO1FBQzFELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDbkMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUFsRVksaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNZO0lBYmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi8uLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBJdGVtU2hvcCBmcm9tIFwiLi9DYXJkSGVyby5JdGVtU2hvcFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2hvcFZpZXcgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgIHByZkl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5MYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgbGlzdFNwZkl0ZW06IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgIGxiUHJpY2VIcDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICBsYlByaWNlQXR0YWNrOiBjYy5MYWJlbCA9IG51bGw7XG4gICBpdGVtUHJpY2VzID0gWzEsMV07XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgU2hvcFZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmxvYWRJdGVtKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2VIcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlQXR0YWNrKCk7XG4gICAgfVxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsb2FkSXRlbSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHbG9iYWwucHJpY2VJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbSkuZ2V0Q29tcG9uZW50KEl0ZW1TaG9wKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YShpLCBHbG9iYWwucHJpY2VJdGVtW2ldKTtcbiAgICAgICAgICAgIHRoaXMubkxheW91dC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2F2ZWRJdGVtU3RhdGUoaWQpIHtcbiAgICAgICAgbGV0IGl0ZW1TdGF0ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbV8ke2lkfWApO1xuICAgICAgICByZXR1cm4gaXRlbVN0YXRlID8gSlNPTi5wYXJzZShpdGVtU3RhdGUpIDogbnVsbDtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmljZXMoKSB7XG4gICAgICAgIHRoaXMubGJQcmljZUhwLnN0cmluZyA9ICckICcgKyBHbG9iYWwucHJpY2VJdGVtWzBdO1xuICAgICAgICB0aGlzLmxiUHJpY2VBdHRhY2suc3RyaW5nID0gJyQgJyArIEdsb2JhbC5wcmljZUl0ZW1bMV07XG4gICAgfVxuXG4gICAgdXBkYXRlQWxsSXRlbXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgYWxsIGl0ZW1zLi4uXCIpO1xuICAgICAgICB0aGlzLm5MYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbU5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtQ29tcG9uZW50ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1TaG9wKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgaXRlbTpcIiwgaXRlbUNvbXBvbmVudC5pZEl0ZW0pO1xuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5sb2FkSXRlbVN0YXRlKCk7XG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50LnVwZGF0ZVByaWNlKCk7XG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50LmNoZWNrQnV5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlSHAoKSB7XG4gICAgICAgIHRoaXMubGJQcmljZUhwLnN0cmluZyA9ICckICcgKyBHbG9iYWwucHJpY2VJdGVtWzBdO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlQXR0YWNrKCkge1xuICAgICAgICB0aGlzLmxiUHJpY2VBdHRhY2suc3RyaW5nID0gJyQgJyArIEdsb2JhbC5wcmljZUl0ZW1bMV07XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvU2hvcC9DYXJkSGVyby5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBa0Q7QUFFbEQsK0RBQTZDO0FBQzdDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVGQztRQXBGRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUU1QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUE0RWxCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0VHLHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsMEJBQU8sR0FBUCxVQUFRLEVBQUUsRUFBRSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMv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RSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLElBQUksQ0FBQyxNQUFNLGtCQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBUSxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixJQUFJLENBQUMsTUFBTSxVQUFLLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVMsQ0FBQztJQWpGVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFMTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUY1QjtJQUFELGVBQUM7Q0F2RkQsQUF1RkMsQ0F2RnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUZqRDtrQkF2Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkxldmVsVmlld1wiO1xuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL0NhcmRIZXJvLlNob3BWaWV3XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuSXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAvLyBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpZEl0ZW0gPSAwO1xuICAgIHByaWNlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge31cblxuICAgIHNldERhdGEoaWQsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuaWRJdGVtID0gaWQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5sb2FkSXRlbVN0YXRlKCk7IFxuICAgICAgICB0aGlzLm5JdGVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2hvcFZpZXcuaW5zdGFuY2UubGlzdFNwZkl0ZW1baWRdO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tCdXkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmljZSgpIHtcbiAgICAgICAgdGhpcy5wcmljZSA9IEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dO1xuICAgIH1cblxuICAgIGNoZWNrQnV5KCkge1xuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4enp6enp6elwiLHRoaXMucHJpY2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja0J1eSgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC50b3RhbEdvbGQgPj0gdGhpcy5wcmljZSkge1xuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSB0aGlzLnByaWNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWRJdGVtID09IDApIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICs9IDU7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaHBDaGFyXCIsIEdsb2JhbC5ocENoYXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBIcENoYXIgaW5jcmVhc2VkIHRvOiAke0dsb2JhbC5ocENoYXJ9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWRJdGVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCArPSAzO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCArPSAzO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyArPSAzO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhbWVDaGFyU21hbGxcIiwgR2xvYmFsLmRhbWVDaGFyU21hbGwpO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhbWVDaGFyTm9ybWFsXCIsIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFtZUNoYXJCaWdcIiwgR2xvYmFsLmRhbWVDaGFyQmlnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGFtYWdlIGluY3JlYXNlZCB0bzogU21hbGw6ICR7R2xvYmFsLmRhbWVDaGFyU21hbGx9LCBOb3JtYWw6ICR7R2xvYmFsLmRhbWVDaGFyTm9ybWFsfSwgQmlnOiAke0dsb2JhbC5kYW1lQ2hhckJpZ31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgR2xvYmFsLnByaWNlSXRlbVt0aGlzLmlkSXRlbV0rKztcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1TdGF0ZSgpOyAvLyBTYXZlIGl0ZW0gc3RhdGUgYWZ0ZXIgcHVyY2hhc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBCb3VnaHQgaXRlbSAke3RoaXMuaWRJdGVtfSwgbmV3IHByaWNlOiAke0dsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dfSwgcmVtYWluaW5nIGdvbGQ6ICR7R2xvYmFsLnRvdGFsR29sZH1gKTtcbiAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZUFsbEl0ZW1zKCk7IC8vIFVwZGF0ZSBhbGwgaXRlbXNcbiAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZVByaWNlcygpO1xuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlR29sZCgpOyAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBnb2xkIGFtb3VudFxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSgpOyAvLyBVcGRhdGUgdGhlIHByaWNlIGFmdGVyIHB1cmNoYXNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZ29sZCFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlSXRlbVN0YXRlKCkge1xuICAgICAgICBjb25zdCBpdGVtU3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZEl0ZW0sXG4gICAgICAgICAgICBwcmljZTogR2xvYmFsLnByaWNlSXRlbVt0aGlzLmlkSXRlbV1cbiAgICAgICAgfTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBpdGVtXyR7dGhpcy5pZEl0ZW19YCwgSlNPTi5zdHJpbmdpZnkoaXRlbVN0YXRlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJdGVtICR7dGhpcy5pZEl0ZW19IHN0YXRlIHNhdmVkOmAsIGl0ZW1TdGF0ZSk7XG4gICAgfVxuXG4gICAgbG9hZEl0ZW1TdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgaXRlbVN0YXRlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtXyR7dGhpcy5pZEl0ZW19YCk7XG4gICAgICAgIGlmIChpdGVtU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFN0YXRlID0gSlNPTi5wYXJzZShpdGVtU3RhdGUpO1xuICAgICAgICAgICAgR2xvYmFsLnByaWNlSXRlbVt0aGlzLmlkSXRlbV0gPSBwYXJzZWRTdGF0ZS5wcmljZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwYXJzZWRTdGF0ZS5wcmljZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgcHJpY2UgZm9yIGl0ZW0gJHt0aGlzLmlkSXRlbX06ICR7dGhpcy5wcmljZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge31cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59Il19
//------QC-SOURCE-SPLIT------
