
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXHBvcHVwXFxTaG9wXFxDYXJkSGVyby5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw0REFBa0Q7QUFDbEQseURBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBbkVFLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQXdEbEIsaUJBQWlCO0lBQ3JCLENBQUM7aUJBdkVvQixRQUFRO0lBaUJ6Qix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsMkJBQVEsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELG9DQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQ2hCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFRLEVBQUksQ0FBQyxDQUFDO1FBQzFELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDbkMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQywyQkFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUFsRVksaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNZO0lBYmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uLy4uL0NhcmRIZXJvLkdsb2JhbFwiO1xyXG5pbXBvcnQgSXRlbVNob3AgZnJvbSBcIi4vQ2FyZEhlcm8uSXRlbVNob3BcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2hvcFZpZXcgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICBwcmZJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgbkxheW91dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgbGlzdFNwZkl0ZW06IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICBsYlByaWNlSHA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJQcmljZUF0dGFjazogY2MuTGFiZWwgPSBudWxsO1xyXG4gICBpdGVtUHJpY2VzID0gWzEsMV07XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgU2hvcFZpZXcuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubG9hZEl0ZW0oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlSHAoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlQXR0YWNrKCk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdsb2JhbC5wcmljZUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChJdGVtU2hvcCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YShpLCBHbG9iYWwucHJpY2VJdGVtW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5uTGF5b3V0LmFkZENoaWxkKGl0ZW0ubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNhdmVkSXRlbVN0YXRlKGlkKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1TdGF0ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbV8ke2lkfWApO1xyXG4gICAgICAgIHJldHVybiBpdGVtU3RhdGUgPyBKU09OLnBhcnNlKGl0ZW1TdGF0ZSkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByaWNlcygpIHtcclxuICAgICAgICB0aGlzLmxiUHJpY2VIcC5zdHJpbmcgPSAnJCAnICsgR2xvYmFsLnByaWNlSXRlbVswXTtcclxuICAgICAgICB0aGlzLmxiUHJpY2VBdHRhY2suc3RyaW5nID0gJyQgJyArIEdsb2JhbC5wcmljZUl0ZW1bMV07XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWxsSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBhbGwgaXRlbXMuLi5cIik7XHJcbiAgICAgICAgdGhpcy5uTGF5b3V0LmNoaWxkcmVuLmZvckVhY2goKGl0ZW1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ29tcG9uZW50ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1TaG9wKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBpdGVtOlwiLCBpdGVtQ29tcG9uZW50LmlkSXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQubG9hZEl0ZW1TdGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50LnVwZGF0ZVByaWNlKCk7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQuY2hlY2tCdXkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmljZUhwKCkge1xyXG4gICAgICAgIHRoaXMubGJQcmljZUhwLnN0cmluZyA9ICckICcgKyBHbG9iYWwucHJpY2VJdGVtWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByaWNlQXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMubGJQcmljZUF0dGFjay5zdHJpbmcgPSAnJCAnICsgR2xvYmFsLnByaWNlSXRlbVsxXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==