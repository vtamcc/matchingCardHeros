
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