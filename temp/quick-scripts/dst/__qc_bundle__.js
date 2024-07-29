
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
    Global.totalGold = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBYUEsQ0FBQztJQVpVLGdCQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsYUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNaLGdCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsYUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLGtCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLG9CQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLHFCQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLGtCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDdkIsZ0JBQVMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUU1QixhQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5leHBvcnQgY2xhc3MgR2xvYmFsICB7XG4gICAgc3RhdGljIHRvdGFsR29sZCA9IDI7XG4gICAgc3RhdGljIGhwQ2hhciA9IDEwO1xuICAgIHN0YXRpYyBocE1vbnN0ZXIgPSAxMDtcbiAgICBzdGF0aWMgc2hpZWxkID0gMDtcbiAgICBzdGF0aWMgZGFtZU1vbnN0ZXIgPSAxO1xuICAgIHN0YXRpYyBkYW1lQ2hhclNtYWxsID0gNTtcbiAgICBzdGF0aWMgZGFtZUNoYXJOb3JtYWwgPSAxMDtcbiAgICBzdGF0aWMgZGFtZUNoYXJCaWcgPSAxNTtcbiAgICAvLyBzdGF0aWMgcHJpY2VJdGVtSHAgPSAxO1xuICAgIC8vIHN0YXRpYyBwcmljZUl0ZW1BdHRhY2sgPSAxO1xuICAgIHN0YXRpYyBwcmljZUl0ZW0gPSBbMSwxXVxuICAgIC8vc3RhdGljIGRhdGFBdHRhY2sgPSBbe2lkOiAwLH1dXG59XG4iXX0=
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
            var savedItem = this.getSavedItemState(i);
            if (savedItem) {
                item.setData(i, savedItem.price);
            }
            else {
                item.setData(i, CardHero_Global_1.Global.priceItem[i]);
            }
            this.nLayout.addChild(item.node);
        }
    };
    ShopView.prototype.getSavedItemState = function (id) {
        var itemState = cc.sys.localStorage.getItem("item_" + id);
        return itemState ? JSON.parse(itemState) : null;
    };
    ShopView.prototype.updateAllItems = function () {
        console.log("Updating all items...");
        this.nLayout.children.forEach(function (itemNode) {
            var itemComponent = itemNode.getComponent(CardHero_ItemShop_1.default);
            console.log("Updating item:", itemComponent.idItem);
            itemComponent.updatePrice(); // Cập nhật giá trước khi kiểm tra
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvU2hvcC9DYXJkSGVyby5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw0REFBa0Q7QUFDbEQseURBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBbkVFLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQXdEbEIsaUJBQWlCO0lBQ3JCLENBQUM7aUJBdkVvQixRQUFRO0lBaUJ6Qix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsMkJBQVEsQ0FBQyxDQUFDO1lBQy9ELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCxvQ0FBaUIsR0FBakIsVUFBa0IsRUFBRTtRQUNoQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBUSxFQUFJLENBQUMsQ0FBQztRQUM1RCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7SUFHRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDbkMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsa0NBQWtDO1lBQy9ELGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDOztJQWxFWSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1k7SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUU1QjtJQUFELGVBQUM7Q0F2RUQsQUF1RUMsQ0F2RXFDLEVBQUUsQ0FBQyxTQUFTLEdBdUVqRDtrQkF2RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uLy4uL0NhcmRIZXJvLkdsb2JhbFwiO1xuaW1wb3J0IEl0ZW1TaG9wIGZyb20gXCIuL0NhcmRIZXJvLkl0ZW1TaG9wXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaG9wVmlldyA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgcHJmSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkxheW91dDogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICBsaXN0U3BmSXRlbTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgbGJQcmljZUhwOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgIGxiUHJpY2VBdHRhY2s6IGNjLkxhYmVsID0gbnVsbDtcbiAgIGl0ZW1QcmljZXMgPSBbMSwxXTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaG9wVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZEl0ZW0oKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZUhwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2VBdHRhY2soKTtcbiAgICB9XG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGxvYWRJdGVtKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdsb2JhbC5wcmljZUl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZJdGVtKS5nZXRDb21wb25lbnQoSXRlbVNob3ApO1xuICAgICAgICAgICAgbGV0IHNhdmVkSXRlbSA9IHRoaXMuZ2V0U2F2ZWRJdGVtU3RhdGUoaSk7XG4gICAgICAgICAgICBpZiAoc2F2ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKGksIHNhdmVkSXRlbS5wcmljZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0YShpLCBHbG9iYWwucHJpY2VJdGVtW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubkxheW91dC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2F2ZWRJdGVtU3RhdGUoaWQpIHtcbiAgICAgICAgY29uc3QgaXRlbVN0YXRlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtXyR7aWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtU3RhdGUgPyBKU09OLnBhcnNlKGl0ZW1TdGF0ZSkgOiBudWxsO1xuICAgIH1cblxuXG4gICAgdXBkYXRlQWxsSXRlbXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgYWxsIGl0ZW1zLi4uXCIpO1xuICAgICAgICB0aGlzLm5MYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbU5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtQ29tcG9uZW50ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1TaG9wKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgaXRlbTpcIiwgaXRlbUNvbXBvbmVudC5pZEl0ZW0pO1xuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC51cGRhdGVQcmljZSgpOyAvLyBD4bqtcCBuaOG6rXQgZ2nDoSB0csaw4bubYyBraGkga2nhu4NtIHRyYVxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5jaGVja0J1eSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmljZUhwKCkge1xuICAgICAgICB0aGlzLmxiUHJpY2VIcC5zdHJpbmcgPSAnJCAnICsgR2xvYmFsLnByaWNlSXRlbVswXTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmljZUF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5sYlByaWNlQXR0YWNrLnN0cmluZyA9ICckICcgKyBHbG9iYWwucHJpY2VJdGVtWzFdO1xuICAgIH1cbiAgICBcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhEQUFnRDtBQUNoRCxnRUFBOEM7QUFFeEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE0QkM7UUF6QkcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBYyxJQUFJLENBQUM7O1FBc0IvQixpQkFBaUI7SUFDckIsQ0FBQztvQkE1Qm9CLFdBQVc7SUFNNUIsNEJBQU0sR0FBTjtRQUNJLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxnQ0FBZ0M7UUFDaEMsK0JBQStCO1FBRS9CLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7SUF4QmEsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDVztJQUxkLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Qi9CO0lBQUQsa0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QndDLEVBQUUsQ0FBQyxTQUFTLEdBNEJwRDtrQkE1Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXdcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9nYW1lL0NhcmRIZXJvLkxldmVsVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lTWFuYWdlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZHYW1lVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVMZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgb25DbGlja1BsYXkoKSB7XG4gICAgICAgIC8vIGlmKEdhbWVWaWV3Lmluc3RhbmNlICE9IG51bGwpXG4gICAgICAgIC8vICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIGxldCBnYW1lVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZVZpZXcpLmdldENvbXBvbmVudChHYW1lVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVWaWV3Lm5vZGUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tMZXZlbCgpIHtcbiAgICAgICAgbGV0IGxldmVsVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZUxldmVsKS5nZXRDb21wb25lbnQoTGV2ZWwpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxWaWV3Lm5vZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvQ2FyZEhlcm8uR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMERBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWVBLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZTVCO0lBQUQsZUFBQztDQWZELEFBZUMsQ0FmcUMsRUFBRSxDQUFDLFNBQVMsR0FlakQ7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBjbGlja1Jlc3RhcnQoKXtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uub25DbGlja1Jlc3RhcnQoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFDbkMsdURBQXlDO0FBQ3pDLCtEQUFpRDtBQUNqRCx5REFBMkM7QUFFckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5V0M7UUF0V0csYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMs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Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRIZXJvLkNhcmRcIjtcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NhcmRIZXJvLkNoYXJcIjtcbmltcG9ydCBNb25zdGVyIGZyb20gXCIuL0NhcmRIZXJvLk1vbnN0ZXJcIjtcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5HYW1lT3ZlclwiO1xuaW1wb3J0IFBhdXNlIGZyb20gXCIuL3BvcHVwL0NhcmRIZXJvLlBhdXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQ2FyZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk1vbnN0ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Nb250ZXJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuVGFibGVDYXJkczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBDaGFyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBNb25zdGVyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tDbGljazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tMb2FkR2FtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJEYW1lTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZNb25zdGVyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgaXNDbGljayA9IGZhbHNlO1xuICAgIGNvdW50Q2xpY2sgPSAwO1xuICAgIGxpc3RJZENhcmQgPSBbMCwgMCwgMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyXTtcbiAgICBzZWxlY3RlZENhcmRzID0gW107XG4gICAgZGF0YUNhcmQgPSBbXTtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyQXJjaGVyczogQ2hhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhckZpZ2h0ZXI6IENoYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJNYWdpYzogQ2hhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYkRhbWVDaGFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZlBhdXNlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblNoaWVsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2hpZWxkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkRhbWVNb25zdGVyTWlzczogY2MuTm9kZSA9IG51bGw7XG4gICAgbGlzdE1vbnN0ZXJzID0gW107XG4gICAgaWRNb25zdGVyID0gMDtcbiAgICByb3dzID0gNTtcbiAgICBjb2xzID0gNTtcbiAgICBzcGFjaW5nID0gMTA7XG4gICAgcHJpdmF0ZSBzdGFydFg6IG51bWJlciA9IC0zMzc7XG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlciA9IDIxMDtcbiAgICBwcml2YXRlIHRpbGVXaWR0aDogbnVtYmVyID0gMTM1O1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENhcmRzKCk7XG5cbiAgICAgICAgfSwgMSlcbiAgICAgICAgdGhpcy5jcmVhdGVNb25zdGVyKDAsIDEwLCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIcEJhZ0d1eSgpO1xuXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IG51bGxcbiAgICB9XG5cbiAgICBtYXNrTG9hZEdhbWUoKSB7XG4gICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDcpXG4gICAgfVxuXG4gICAgbG9hZENhcmRzKCkge1xuICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKVxuICAgICAgICAvLyAgICAgY2FyZC5zZXREYXRhKHRoaXMubGlzdElkQ2FyZFtpXSlcbiAgICAgICAgLy8gICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgaWRJbmRleCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZEluZGV4ID49IHRoaXMubGlzdElkQ2FyZC5sZW5ndGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgICAgICBjYXJkLnNldERhdGEodGhpcy5saXN0SWRDYXJkW2lkSW5kZXhdKTtcblxuICAgICAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueCA9IHRoaXMuc3RhcnRYICsgaiAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNhcmQubm9kZS55ID0gdGhpcy5zdGFydFkgLSBpICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXVtqXSA9IGNhcmQ7XG4gICAgICAgICAgICAgICAgaWRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjcmVhdGVNb25zdGVyKGlkOiBudW1iZXIsIGhwOiBudW1iZXIsIGRhbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgbW9udGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZNb25zdGVyKS5nZXRDb21wb25lbnQoTW9uc3RlcilcbiAgICAgICAgbW9udGVyLnNldE1vbnN0ZXIoaWQsIGhwLCBkYW1lKTtcbiAgICAgICAgdGhpcy5uTW9udGVycy5hZGRDaGlsZChtb250ZXIubm9kZSk7XG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzLnB1c2gobW9udGVyKTtcbiAgICAgICAgLy8gICB0aGlzLmlkTW9uc3RlcisrO1xuICAgIH1cblxuXG4gICAgYXR0YWNrTW9uc3RlcihkYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RNb25zdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgW21vbnN0ZXJdID0gdGhpcy5saXN0TW9uc3RlcnM7XG4gICAgICAgICAgICBpZiAobW9uc3RlciAmJiBtb25zdGVyLm5vZGUpIHtcbiAgICAgICAgICAgICAgICBtb25zdGVyLnJlY2VpdmVEYW1hZ2UoZGFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IHRoaXMubGlzdE1vbnN0ZXJzLmZpbHRlcihtID0+IG0gIT09IG1vbnN0ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnN0ZXIgXCIsIHRoaXMubGlzdE1vbnN0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuaHBDaGFyID09IDApIHtcbiAgICAgICAgICAgIGxldCBwcmZHYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChHYW1lT3ZlcilcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZHYW1lT3Zlci5ub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tQYXVzZSgpIHtcbiAgICAgICAgbGV0IHByZlBhdXNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZQYXVzZSkuZ2V0Q29tcG9uZW50KFBhdXNlKVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHJmUGF1c2Uubm9kZSk7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tSZXN1bWUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaHVmZmxlQXJyYXkoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0ZWRDYXJkKGNhcmQ6IENhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jaGVja01hdGNoLmJpbmQodGhpcyksIDAuNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoZWNrTWF0Y2goKSB7XG4gICAgICAgIGxldCBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IHRoaXMuc2VsZWN0ZWRDYXJkcztcblxuICAgICAgICBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMCAmJiBzZWNvbmRDYXJkLmlkQ2FyZCA9PT0gMCkge1xuICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hpZWxkIEFjdGl2YXRlZDogXCIsIEdsb2JhbC5zaGllbGQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgfHwgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDEyKSB7XG4gICAgICAgICAgICBsZXQgZG91YmxlRGFtZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbXVsdGlwbGllckNhcmQgPSBmaXJzdENhcmQuaWRDYXJkID09PSAxMiA/IHNlY29uZENhcmQgOiBmaXJzdENhcmQ7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhtdWx0aXBsaWVyQ2FyZC5pZENhcmQsIGRvdWJsZURhbWUpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSBzZWNvbmRDYXJkLmlkQ2FyZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdHRhY2soZmlyc3RDYXJkLmlkQ2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZC0tO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3REYW1lQmFnR3V5TWlzcyh0aGlzLm5EYW1lTW9uc3Rlck1pc3MpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hpZWxkOiBcIiwgR2xvYmFsLnNoaWVsZCk7XG4gICAgICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhci0tO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGFtZUJhZ0d1eSh0aGlzLmxiRGFtZU1vbnN0ZXIsIEdsb2JhbC5kYW1lTW9uc3Rlcik7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIH1cblxuXG4gICAgc2VsZWN0QXR0YWNrKGlkLCBpc0RvdWJsZURhbWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1IG5lIFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZURhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgKz0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VuZyBuaG8gYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0llbSBkYW5oIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyU21hbGwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyBkYW1lO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuOCwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eU1pc3Mobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgZGFtZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB1cGRhdGVIcENoYXIoKSB7XG4gICAgICAgIHRoaXMubGJIcENoYXIuc3RyaW5nID0gR2xvYmFsLmhwQ2hhciArICcgJztcbiAgICB9XG5cbiAgICB1cGRhdGVIcEJhZ0d1eSgpIHtcbiAgICAgICAgdGhpcy5sYkhwTW9uc3Rlci5zdHJpbmcgPSBHbG9iYWwuaHBNb25zdGVyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZVNoaWVsZCgpIHtcbiAgICAgICAgdGhpcy5sYlNoaWVsZC5zdHJpbmcgPSBHbG9iYWwuc2hpZWxkICsgJyAnO1xuICAgIH1cbiAgICBvbkNsaWNrUmVzdGFydCgpIHtcbiAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMTA7XG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLm5Nb250ZXJzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIFNodWZmbGUgYW5kIHJlbG9hZCBjYXJkc1xuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xuICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBtb25zdGVyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9uc3RlcigwLCAxMCwgMSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIHJlc3RhcnRlZFwiKTtcbiAgICB9XG5cbiAgICBkZXN0cm95R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXN0cm95eXkgXCIpXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
            console.log("bat ne ");
            this.scheduleOnce(function () {
                CardHero_GameView_1.default.instance.nMaskClick.active = false;
                console.log("Tat ne ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpRkM7UUE5RUUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7UUFvRVYsWUFBWTtRQUNaLElBQUk7UUFFSixpQkFBaUI7SUFDckIsQ0FBQztJQXZFRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMs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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFQUCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUZ4QjtJQUFELFdBQUM7Q0FqRkQsQUFpRkMsQ0FqRmlDLEVBQUUsQ0FBQyxTQUFTLEdBaUY3QztrQkFqRm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkNhcmRCYWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkNhcmRGcm9udDogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5DYXJkU3BmOiBjYy5Ob2RlID0gbnVsbDtcbiAgIGlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgaWRDYXJkID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuZmxpcFRvQmFjaygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmZsaXBUb2Zyb250LDUpO1xuICAgIH1cbiAgICBzZXREYXRhKGlkKSB7XG4gICAgICAgIHRoaXMuaWRDYXJkID0gaWQ7XG4gICAgICAgIHRoaXMubkNhcmRTcGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0U3BmQ2FyZHNbaWRdO1xuICAgIH1cblxuICAgIG9uQ2xpY2tDYXJkcygpIHtcbiAgICAgICAgaWYodGhpcy5pc0NsaWNrZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZsaXBDYXJkKCk7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmFkZFNlbGVjdGVkQ2FyZCh0aGlzKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljaysrO1xuICAgICAgICBpZihHYW1lVmlldy5pbnN0YW5jZS5jb3VudENsaWNrID09IDIpIHtcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm5NYXNrQ2xpY2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmF0IG5lIFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5uTWFza0NsaWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGF0IG5lIFwiKTtcbiAgICAgICAgICAgIH0sMC41OClcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2sgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FyZHMoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubkNhcmRCYWNrLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSA9ICFhY3RpdmU7XG4gICAgfVxuXG4gICAgZmxpcFRvQmFjayhjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwLjEgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlWDogMSB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGZsaXBUb2Zyb250KCkge1xuICAgICAgICBpZighdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMyx7c2NhbGVYOjB9KVxuICAgICAgICAgICAgLmNhbGwoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDoxfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgLnRvKDAuMyx7c2NhbGVYOiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT57XG4gICAgICAgICAgICBpZighdGhpcy5uQ2FyZEJhY2suYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyh0cnVlKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudG8oMC4zLCB7c2NhbGVYOjF9KS5zdGFydCgpO1xuICAgIH1cbiAgIFxuICAgIC8vIHN0YXJ0KCkge1xuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTGV2ZWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdFQUFrRDtBQUNsRCxzREFBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF1Q0M7UUFqQ0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFhLElBQUksQ0FBQzs7UUE4QnhCLGlCQUFpQjtJQUNyQixDQUFDO2NBdkNvQixLQUFLO0lBU3RCLHNCQUFNLEdBQU47UUFDSSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0Qix3QkFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksd0JBQU0sQ0FBQyxTQUFTLENBQUM7UUFDM0csSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDSSw4QkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQWUsR0FBZjtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFJLHdCQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNuRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGdDQUFnQixHQUFoQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUFqQ0Qsd0JBQXdCO0lBQ1YsY0FBUSxHQUFVLElBQUksQ0FBQztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0s7SUFSUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBdUN6QjtJQUFELFlBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBdUM5QztrQkF2Q29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9DYXJkSGVyby5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0NhcmRIZXJvLkdsb2JhbFwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBMZXZlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgTGV2ZWwuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpLEdsb2JhbC50b3RhbEdvbGQpIHx8IEdsb2JhbC50b3RhbEdvbGQ7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5vbkNsaWNrUGxheSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTaG9wVmlldygpIHtcbiAgICAgICAgbGV0IHNob3BWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTaG9wVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNob3BWaWV3KTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlR29sZCgpIHtcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gJyQnICsgIEdsb2JhbC50b3RhbEdvbGQgKyAnICc7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsR29sZFwiLCBHbG9iYWwudG90YWxHb2xkKTtcbiAgICB9XG4gICAgXG4gICAgY2xpY2tSZW1vdmVDYWNoZSgpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvQ2FyZEhlcm8uUGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMERBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQTRCQSxDQUFDO0lBekJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQVksR0FBWjtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLDJCQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSx1QkFBdUI7UUFDdkIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBekJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNEJ6QjtJQUFELFlBQUM7Q0E1QkQsQUE0QkMsQ0E1QmtDLEVBQUUsQ0FBQyxTQUFTLEdBNEI5QztrQkE1Qm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIGNsaWNrUmVzdGFydCgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uub25DbGlja1Jlc3RhcnQoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgfVxuXG4gICAgY2xpY2tSZXN1bWUoKSB7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm9uQ2xpY2tSZXN1bWUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBjbGlja0hvbWUoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmRlc3Ryb3lHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTW9uc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBNEM7QUFDNUMseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBNERDO1FBekRHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCx3QkFBd0I7UUFDeEIsZUFBUyxHQUFhLElBQUksQ0FBQzs7UUFvRDNCLGlCQUFpQjtJQUNyQixDQUFDO0lBcERHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELDRCQUFVLEdBQVYsVUFBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUk7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckYsd0JBQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwrQkFBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLHdCQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUN6QiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsMkJBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSx3QkFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsd0JBQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCx5QkFBTyxHQUFQO1FBQUEsaUJBY0M7UUFiRyx3Q0FBd0M7UUFDeEMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsSUFBSSxLQUFLLEdBQUcsd0JBQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsY0FBYztZQUNqRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtZQUM3QywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO1FBRUoscUJBQXFCO0lBRXpCLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0ksSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFHRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNPO0lBSFIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTREM0I7SUFBRCxjQUFDO0NBNURELEFBNERDLENBNURvQyxFQUFFLENBQUMsU0FBUyxHQTREaEQ7a0JBNURvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uc3RlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgZGFtZSA9IDE7XG4gICAgbW9uc3RlcklkID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBqdW1wVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2V0TW9uc3Rlckp1bXAoKTtcbiAgICB9XG4gICAgc2V0TW9uc3RlcihpZCwgaHAsIGRhbWUpIHtcbiAgICAgICAgdGhpcy5tb25zdGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZVZpZXcuaW5zdGFuY2UubGlzdFNwZk1vbnN0ZXJbaWRdO1xuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gaHA7XG4gICAgICAgIHRoaXMuZGFtZSA9IGRhbWU7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZURhbWFnZShkYW1lKSB7XG4gICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gZGFtZTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZWZmZWN0RGFtZUJhZ0d1eShHYW1lVmlldy5pbnN0YW5jZS5sYkRhbWVDaGFyLGRhbWUpO1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS51cGRhdGVIcEJhZ0d1eSgpO1xuICAgICAgICBpZiAoR2xvYmFsLmhwTW9uc3RlciA8PSAwKSB7XG4gICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMDtcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgICAgICB0aGlzLm9uRGVhdGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVhdGgoKSB7XG4gICAgICAgIC8vIEThu6tuZyBt4buNaSBow6BuaCDEkeG7mW5nIHRyw6puIG5vZGUgY+G7p2EgcXXDoWlcbiAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBsZXQgbmV3SHAgPSBHbG9iYWwuaHBNb25zdGVyICsgMTU7IC8vIFTEg25nIEhQIG3hu5tpXG4gICAgICAgICAgICBsZXQgbmV3RGFtZSA9IHRoaXMuZGFtZSArIDE7IC8vIFTEg25nIGRhbWUgbeG7m2lcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNyZWF0ZU1vbnN0ZXIodGhpcy5tb25zdGVySWQgKyAxLCBuZXdIcCwgbmV3RGFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hdVwiLCBHbG9iYWwuaHBNb25zdGVyKTtcbiAgICAgICAgfSwyKVxuICAgICAgXG4gICAgICAgIC8vIERlbGF5IG9mIDIgc2Vjb25kc1xuXG4gICAgfVxuICAgIHNldE1vbnN0ZXJKdW1wKCkge1xuICAgICAgICBjb25zdCBqdW1wVXAgPSBjYy50d2VlbigpLnRvKDAuNSwgeyB5OiAxMDAgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KTtcbiAgICAgICAgY29uc3QganVtcERvd24gPSBjYy50d2VlbigpLnRvKDAuMywgeyB5OiAwIH0seyBlYXNpbmc6ICdzaW5lSW4nIH0pO1xuICAgICAgICBjb25zdCBqdW1wU2VxdWVuY2UgPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xuICAgICAgICBjb25zdCByZXBlYXRKdW1wID0gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKGp1bXBTZXF1ZW5jZSk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKHJlcGVhdEp1bXApLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        this.price = price; // Đặt giá của item tại đây
        this.nItem.getComponent(cc.Sprite).spriteFrame = CardHero_ShopView_1.default.instance.listSpfItem[id];
        this.updatePrice();
        this.checkBuy();
    };
    ItemShop.prototype.updatePrice = function () {
        // Cập nhật giá của item
        this.price = CardHero_Global_1.Global.priceItem[this.idItem];
        console.log("Price updated for item " + this.idItem + ": " + this.price);
    };
    ItemShop.prototype.checkBuy = function () {
        if (CardHero_Global_1.Global.totalGold >= this.price) {
            this.nMask.active = false;
            console.log("Tien", this.price);
        }
        else {
            this.nMask.active = true;
        }
    };
    ItemShop.prototype.clickBuy = function () {
        if (CardHero_Global_1.Global.totalGold >= this.price) {
            if (this.idItem == 0) {
                CardHero_Global_1.Global.totalGold -= CardHero_Global_1.Global.priceItem[this.idItem];
                CardHero_Global_1.Global.priceItem[this.idItem]++;
                CardHero_ShopView_1.default.instance.updatePriceHp();
                console.log(this.idItem);
            }
            else if (this.idItem == 1) {
                CardHero_Global_1.Global.totalGold -= CardHero_Global_1.Global.priceItem[this.idItem];
                CardHero_Global_1.Global.priceItem[this.idItem]++;
                CardHero_ShopView_1.default.instance.updatePriceAttack();
            }
            console.log("Gold after purchase:", CardHero_Global_1.Global.totalGold);
            this.checkBuy();
            this.saveItemState(); // Save item state after purchase
            CardHero_ShopView_1.default.instance.updateAllItems(); // Update all items
            CardHero_LevelView_1.default.instance.updateGold(); // Update the displayed gold amount
            this.updatePrice(); // Cập nhật giá sau khi mua
        }
        else {
            console.log("Not enough gold!");
            this.nMask.active = true;
        }
    };
    ItemShop.prototype.saveItemState = function () {
        var itemState = {
            id: this.idItem,
            price: this.price
        };
        cc.sys.localStorage.setItem("item_" + this.idItem, JSON.stringify(itemState));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvU2hvcC9DYXJkSGVyby5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBa0Q7QUFFbEQsK0RBQTZDO0FBQzdDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJFQztRQXhFRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUU1QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUFnRWxCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0RHLHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsMEJBQU8sR0FBUCxVQUFRLEVBQUUsRUFBRSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBRSwyQkFBMkI7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFP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bG9iYWwgfSBmcm9tIFwiLi4vLi4vLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkxldmVsVmlld1wiO1xuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL0NhcmRIZXJvLlNob3BWaWV3XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuSXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAvLyBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpZEl0ZW0gPSAwO1xuICAgIHByaWNlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge31cblxuICAgIHNldERhdGEoaWQsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuaWRJdGVtID0gaWQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTsgIC8vIMSQ4bq3dCBnacOhIGPhu6dhIGl0ZW0gdOG6oWkgxJHDonlcbiAgICAgICAgdGhpcy5uSXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNob3BWaWV3Lmluc3RhbmNlLmxpc3RTcGZJdGVtW2lkXTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSgpO1xuICAgICAgICB0aGlzLmNoZWNrQnV5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UoKSB7XG4gICAgICAgIC8vIEPhuq1wIG5o4bqtdCBnacOhIGPhu6dhIGl0ZW1cbiAgICAgICAgdGhpcy5wcmljZSA9IEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJpY2UgdXBkYXRlZCBmb3IgaXRlbSAke3RoaXMuaWRJdGVtfTogJHt0aGlzLnByaWNlfWApO1xuICAgIH1cblxuICAgIGNoZWNrQnV5KCkge1xuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaWVuXCIgLCB0aGlzLnByaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrQnV5KCkge1xuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XG4gICAgICAgICAgICBpZih0aGlzLmlkSXRlbSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXTtcbiAgICAgICAgICAgICAgICBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXSsrO1xuICAgICAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZVByaWNlSHAoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkSXRlbSk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaWRJdGVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dKys7XG4gICAgICAgICAgICAgICAgU2hvcFZpZXcuaW5zdGFuY2UudXBkYXRlUHJpY2VBdHRhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb2xkIGFmdGVyIHB1cmNoYXNlOlwiLCBHbG9iYWwudG90YWxHb2xkKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1TdGF0ZSgpOyAvLyBTYXZlIGl0ZW0gc3RhdGUgYWZ0ZXIgcHVyY2hhc2VcbiAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZUFsbEl0ZW1zKCk7IC8vIFVwZGF0ZSBhbGwgaXRlbXNcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUdvbGQoKTsgLy8gVXBkYXRlIHRoZSBkaXNwbGF5ZWQgZ29sZCBhbW91bnRcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoKTsgLy8gQ+G6rXAgbmjhuq10IGdpw6Egc2F1IGtoaSBtdWFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGVub3VnaCBnb2xkIVwiKTtcbiAgICAgICAgICAgIHRoaXMubk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIHNhdmVJdGVtU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1TdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkSXRlbSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlXG4gICAgICAgIH07XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbV8ke3RoaXMuaWRJdGVtfWAsIEpTT04uc3RyaW5naWZ5KGl0ZW1TdGF0ZSkpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge31cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59Il19
//------QC-SOURCE-SPLIT------
