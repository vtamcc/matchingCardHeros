
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
        _this.idLevel = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    ItemLevelView.prototype.onLoad = function () {
    };
    ItemLevelView.prototype.setData = function (id, completed, isBoss, isUnlocked) {
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
        this.nFlag.active = isUnlocked;
        this.nLevelActive.active = isUnlocked;
        this.node.getComponent(cc.Button).interactable = isUnlocked;
        this.nBossActive.active = !isBoss;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uSXRlbUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdFQUFrRDtBQUc1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXFEQztRQWxERyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixhQUFPLEdBQUcsQ0FBQyxDQUFDOztRQW9DWixpQkFBaUI7SUFDckIsQ0FBQztJQXBDRyx3QkFBd0I7SUFHeEIsOEJBQU0sR0FBTjtJQUNBLENBQUM7SUFDRCwrQkFBTyxHQUFQLFVBQVEsRUFBVSxFQUFFLFNBQWtCLEVBQUUsTUFBZSxFQUFDLFVBQW1CO1FBRXZFLElBQUksQ0FBQyxPQUFPLEdBQUUsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMvQixRQUFRLEVBQUUsRUFBRTtZQUNSLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxFQUFFO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDbEMsTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBSSxVQUFVLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFHdEMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSw4QkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkJBQUssR0FBTDtJQUVBLENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBZkwsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXFEakM7SUFBRCxvQkFBQztDQXJERCxBQXFEQyxDQXJEMEMsRUFBRSxDQUFDLFNBQVMsR0FxRHREO2tCQXJEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0NhcmRIZXJvLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUxldmVsVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQmxvY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkxldmVsQWN0aXZlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Cb3NzQm9jazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQm9zc0FjdGl2ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRmxhZzogY2MuTm9kZSA9IG51bGw7XG4gICAgaWRMZXZlbCA9IDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgXG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgICBzZXREYXRhKGlkOiBudW1iZXIsIGNvbXBsZXRlZDogYm9vbGVhbiwgaXNCb3NzOiBib29sZWFuLGlzVW5sb2NrZWQ6IGJvb2xlYW4pIHtcblxuICAgICAgICB0aGlzLmlkTGV2ZWw9IGlkO1xuICAgICAgICB0aGlzLm5CbG9jay5hY3RpdmUgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgdGhpcy5uQm9zc0JvY2suYWN0aXZlID0gY29tcGxldGVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uRmxhZy5hY3RpdmUgPSBpc1VubG9ja2VkO1xuICAgICAgICB0aGlzLm5MZXZlbEFjdGl2ZS5hY3RpdmUgPSAgaXNVbmxvY2tlZDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGlzVW5sb2NrZWQ7XG4gICAgICAgIHRoaXMubkJvc3NBY3RpdmUuYWN0aXZlID0gIWlzQm9zcztcbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBvbkNsaWNrUGxheSgpIHtcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2Uub25DbGlja1BsYXkodGhpcy5pZExldmVsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbCBcIix0aGlzLmlkTGV2ZWwpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=