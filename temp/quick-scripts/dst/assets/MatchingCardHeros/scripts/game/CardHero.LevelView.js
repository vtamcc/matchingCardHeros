
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
        return _this;
        // update (dt) {}
    }
    Level_1 = Level;
    Level.prototype.onLoad = function () {
        Level_1.instance = this;
        CardHero_Global_1.Global.totalGold = parseInt(cc.sys.localStorage.getItem("totalGold"), CardHero_Global_1.Global.totalGold) || CardHero_Global_1.Global.totalGold;
        CardHero_Global_1.Global.levelCount = parseInt(cc.sys.localStorage.getItem("levelCount")) || 0;
        console.log("LevelCount", CardHero_Global_1.Global.levelCount);
        this.updateGold();
        this.loadItemLevel();
        console.log("Tien ", CardHero_Global_1.Global.totalGold);
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
                console.log("Completed", completed);
                item.setData(id, true, isBoss, isUnlocked, flag);
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
                itemComponent.setData(levelId, completed, true, isUnlocked, flag);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTGV2ZWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHNEQUE0QztBQUU1QywyREFBaUQ7QUFFM0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFrRkM7UUE1RUcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUc7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDZixDQUFDOztRQTRERixpQkFBaUI7SUFDckIsQ0FBQztjQWxGb0IsS0FBSztJQXNCdEIsc0JBQU0sR0FBTjtRQUNJLE9BQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHdCQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUMsd0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSx3QkFB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Q2EsS0FBSyxDQWtGekI7SUFBRCxZQUFDO0NBbEZELEFBa0ZDLENBbEZrQyxFQUFFLENBQUMsU0FBUyxHQWtGOUM7a0JBbEZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vQ2FyZEhlcm8uR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuaW1wb3J0IEl0ZW1MZXZlbFZpZXcgZnJvbSBcIi4vQ2FyZEhlcm8uSXRlbUxldmVsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBMZXZlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkl0ZW1MZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5MYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgbGV2ZWxPcmRlciA9IFtcbiAgICAgICAgWzAsIDEsIDJdLFxuICAgICAgICBbNSwgNCwgM10sXG4gICAgICAgIFs2LCA3LCA4XSxcbiAgICAgICAgWzExLCAxMCwgOV0sXG4gICAgICAgIFsxMiwgMTMsIDE0XVxuICAgIF07XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgTGV2ZWwuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpLEdsb2JhbC50b3RhbEdvbGQpIHx8IEdsb2JhbC50b3RhbEdvbGQ7XG4gICAgICAgIEdsb2JhbC5sZXZlbENvdW50ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxDb3VudFwiKSkgfHwgMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWxDb3VudFwiLEdsb2JhbC5sZXZlbENvdW50KTtcbiAgICAgICAgdGhpcy51cGRhdGVHb2xkKCk7XG4gICAgICAgIHRoaXMubG9hZEl0ZW1MZXZlbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuXG4gICAgb25DbGlja1Nob3BWaWV3KCkge1xuICAgICAgICBsZXQgc2hvcFZpZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlNob3BWaWV3KVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hvcFZpZXcpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSAnJCcgKyAgR2xvYmFsLnRvdGFsR29sZCArICcgJztcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxHb2xkXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgIGNsaWNrUmVtb3ZlQ2FjaGUoKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBsb2FkSXRlbUxldmVsKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmxldmVsT3JkZXIubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5sZXZlbE9yZGVyW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubGV2ZWxPcmRlcltyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW1MZXZlbCkuZ2V0Q29tcG9uZW50KEl0ZW1MZXZlbFZpZXcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtpZH1fY29tcGxldGVkYCkgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICBjb25zdCBpc1VubG9ja2VkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2lkfV91bmxvY2tlZGApID09PSAndHJ1ZScgfHwgaWQgPT09IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtpZH1fZmxhZ2ApID09PSAndHJ1ZScgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNCb3NzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2lkfV9pc0Jvc3NgKSA9PT0gJ3RydWUnIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNCb3NzXCIsIGlzQm9zcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZWRcIiwgY29tcGxldGVkKTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoaWQsIHRydWUsaXNCb3NzLGlzVW5sb2NrZWQsZmxhZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uTGF5b3V0LmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVMZXZlbFN0YXR1cyhsZXZlbElkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uTGF5b3V0LmNoaWxkcmVuLmZvckVhY2goKGl0ZW1Ob2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbUNvbXBvbmVudCA9IGl0ZW1Ob2RlLmdldENvbXBvbmVudChJdGVtTGV2ZWxWaWV3KTtcbiAgICAgICAgICAgIGlmIChpdGVtQ29tcG9uZW50LmlkTGV2ZWwgPT09IGxldmVsSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7bGV2ZWxJZH1fY29tcGxldGVkYCkgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICBjb25zdCBpc1VubG9ja2VkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke2xldmVsSWR9X3VubG9ja2VkYCkgPT09ICd0cnVlJyB8fCBsZXZlbElkID09IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtsZXZlbElkfV9mbGFnYCkgPT09ICd0cnVlJyB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGl0ZW1Db21wb25lbnQuc2V0RGF0YShsZXZlbElkLCBjb21wbGV0ZWQsIHRydWUsIGlzVW5sb2NrZWQsZmxhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19