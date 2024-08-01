
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