
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
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfShopView = null;
        _this.lbGold = null;
        return _this;
        // update (dt) {}
    }
    Level.prototype.onLoad = function () {
        this.updateGold();
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
    };
    Level.prototype.start = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], Level.prototype, "prfShopView", void 0);
    __decorate([
        property(cc.Label)
    ], Level.prototype, "lbGold", void 0);
    Level = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkxldmVsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBa0Q7QUFDbEQsc0RBQTRDO0FBR3RDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBR0ksd0JBQXdCO1FBSDVCLHFFQThCQztRQXhCRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQWEsSUFBSSxDQUFDOztRQXFCeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFyQkcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLDhCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwrQkFBZSxHQUFmO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUksd0JBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0s7SUFSUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBOEJ6QjtJQUFELFlBQUM7Q0E5QkQsQUE4QkMsQ0E5QmtDLEVBQUUsQ0FBQyxTQUFTLEdBOEI5QztrQkE5Qm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0NhcmRIZXJvLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZlNob3BWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tQbGF5KCkge1xyXG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlLm9uQ2xpY2tQbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja1Nob3BWaWV3KCkge1xyXG4gICAgICAgIGxldCBzaG9wVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2hvcFZpZXcpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNob3BWaWV3KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlR29sZCgpIHtcclxuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSAnJCcgKyAgR2xvYmFsLnRvdGFsR29sZCArICcgJztcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=