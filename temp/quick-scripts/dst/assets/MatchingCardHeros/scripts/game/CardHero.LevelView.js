
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