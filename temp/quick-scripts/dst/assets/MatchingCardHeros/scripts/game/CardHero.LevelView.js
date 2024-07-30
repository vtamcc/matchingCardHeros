
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
                console.log("Completed", completed);
                var isUnlocked = id === 0 || cc.sys.localStorage.getItem("level_" + id + "_completed") === 'true';
                item.setData(id, true, true, isUnlocked);
                this.nLayout.addChild(item.node);
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTGV2ZWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHNEQUE0QztBQUU1QywyREFBaUQ7QUFFM0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFpRUM7UUEzREcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFhLElBQUksQ0FBQztRQU14QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUc7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDZixDQUFDOztRQTJDRixpQkFBaUI7SUFDckIsQ0FBQztjQWpFb0IsS0FBSztJQXNCdEIsc0JBQU0sR0FBTjtRQUNJLE9BQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHdCQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUMsd0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSx3QkFBTSxDQUFDLFNBQVMsQ0FBQztRQUMzRyx3QkFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLHdCQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCwrQkFBZSxHQUFmO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUksd0JBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZ0NBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFDSSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDbkQsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUN4RCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsNEJBQWEsQ0FBQyxDQUFDO2dCQUN6RSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBUyxFQUFFLGVBQVksQ0FBQyxLQUFLLE1BQU0sQ0FBQztnQkFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLElBQU0sVUFBVSxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVMsRUFBRSxlQUFZLENBQUMsS0FBSyxNQUFNLENBQUM7Z0JBQy9GLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUNELHFCQUFLLEdBQUw7SUFFQSxDQUFDOztJQTNERCx3QkFBd0I7SUFDVixjQUFRLEdBQVUsSUFBSSxDQUFDO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ007SUFkUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBaUV6QjtJQUFELFlBQUM7Q0FqRUQsQUFpRUMsQ0FqRWtDLEVBQUUsQ0FBQyxTQUFTLEdBaUU5QztrQkFqRW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9DYXJkSGVyby5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0NhcmRIZXJvLkdsb2JhbFwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5pbXBvcnQgSXRlbUxldmVsVmlldyBmcm9tIFwiLi9DYXJkSGVyby5JdGVtTGV2ZWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IExldmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZlNob3BWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmSXRlbUxldmVsOiBjYy5QcmVmYWI7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGxldmVsT3JkZXIgPSBbXG4gICAgICAgIFswLCAxLCAyXSxcbiAgICAgICAgWzUsIDQsIDNdLFxuICAgICAgICBbNiwgNywgOF0sXG4gICAgICAgIFsxMSwgMTAsIDldLFxuICAgICAgICBbMTIsIDEzLCAxNF1cbiAgICBdO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIExldmVsLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgR2xvYmFsLnRvdGFsR29sZCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsR29sZFwiKSxHbG9iYWwudG90YWxHb2xkKSB8fCBHbG9iYWwudG90YWxHb2xkO1xuICAgICAgICBHbG9iYWwubGV2ZWxDb3VudCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsQ291bnRcIikpIHx8IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWxDb3VudFwiLEdsb2JhbC5sZXZlbENvdW50KTtcbiAgICAgICAgdGhpcy51cGRhdGVHb2xkKCk7XG4gICAgICAgIHRoaXMubG9hZEl0ZW1MZXZlbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuXG4gICAgb25DbGlja1Nob3BWaWV3KCkge1xuICAgICAgICBsZXQgc2hvcFZpZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlNob3BWaWV3KVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hvcFZpZXcpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSAnJCcgKyAgR2xvYmFsLnRvdGFsR29sZCArICcgJztcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxHb2xkXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgIGNsaWNrUmVtb3ZlQ2FjaGUoKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBsb2FkSXRlbUxldmVsKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmxldmVsT3JkZXIubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5sZXZlbE9yZGVyW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubGV2ZWxPcmRlcltyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW1MZXZlbCkuZ2V0Q29tcG9uZW50KEl0ZW1MZXZlbFZpZXcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHtpZH1fY29tcGxldGVkYCkgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZFwiLCBjb21wbGV0ZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVW5sb2NrZWQgPSBpZCA9PT0gMCB8fCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7aWR9X2NvbXBsZXRlZGApID09PSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKGlkLCB0cnVlLHRydWUsaXNVbmxvY2tlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uTGF5b3V0LmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==