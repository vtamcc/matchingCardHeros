
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvQ2FyZEhlcm8uUGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMERBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQTRCQSxDQUFDO0lBekJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQVksR0FBWjtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSx1QkFBdUI7UUFDdkIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBekJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNEJ6QjtJQUFELFlBQUM7Q0E1QkQsQUE0QkMsQ0E1QmtDLEVBQUUsQ0FBQyxTQUFTLEdBNEI5QztrQkE1Qm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIGNsaWNrUmVzdGFydCgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uub25DbGlja1Jlc3RhcnQoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgfVxuXG4gICAgY2xpY2tSZXN1bWUoKSB7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm9uQ2xpY2tSZXN1bWUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBjbGlja0hvbWUoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmRlc3Ryb3lHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==