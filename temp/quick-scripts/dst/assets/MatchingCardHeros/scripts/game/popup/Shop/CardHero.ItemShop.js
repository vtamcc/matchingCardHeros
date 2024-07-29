
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvU2hvcC9DYXJkSGVyby5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBa0Q7QUFFbEQsK0RBQTZDO0FBQzdDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJFQztRQXhFRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUU1QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUFnRWxCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0RHLHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsMEJBQU8sR0FBUCxVQUFRLEVBQUUsRUFBRSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBRSwyQkFBMkI7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUEwQixJQUFJLENBQUMsTUFBTSxVQUFLLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksd0JBQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksd0JBQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNqQix3QkFBTSxDQUFDLFNBQVMsSUFBSSx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xELHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNoQywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFFNUI7aUJBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDdkIsd0JBQU0sQ0FBQyxTQUFTLElBQUksd0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRCx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsMkJBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN6QztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsd0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1lBQ3ZELDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsbUJBQW1CO1lBQ3ZELDRCQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsbUNBQW1DO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtTQUNsRDthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUVMLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBTSxTQUFTLEdBQUc7WUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFRLElBQUksQ0FBQyxNQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVMsQ0FBQztJQXJFVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFMTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkU1QjtJQUFELGVBQUM7Q0EzRUQsQUEyRUMsQ0EzRXFDLEVBQUUsQ0FBQyxTQUFTLEdBMkVqRDtrQkEzRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkxldmVsVmlld1wiO1xuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL0NhcmRIZXJvLlNob3BWaWV3XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuSXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAvLyBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpZEl0ZW0gPSAwO1xuICAgIHByaWNlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge31cblxuICAgIHNldERhdGEoaWQsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuaWRJdGVtID0gaWQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTsgIC8vIMSQ4bq3dCBnacOhIGPhu6dhIGl0ZW0gdOG6oWkgxJHDonlcbiAgICAgICAgdGhpcy5uSXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNob3BWaWV3Lmluc3RhbmNlLmxpc3RTcGZJdGVtW2lkXTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSgpO1xuICAgICAgICB0aGlzLmNoZWNrQnV5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UoKSB7XG4gICAgICAgIC8vIEPhuq1wIG5o4bqtdCBnacOhIGPhu6dhIGl0ZW1cbiAgICAgICAgdGhpcy5wcmljZSA9IEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJpY2UgdXBkYXRlZCBmb3IgaXRlbSAke3RoaXMuaWRJdGVtfTogJHt0aGlzLnByaWNlfWApO1xuICAgIH1cblxuICAgIGNoZWNrQnV5KCkge1xuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaWVuXCIgLCB0aGlzLnByaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrQnV5KCkge1xuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XG4gICAgICAgICAgICBpZih0aGlzLmlkSXRlbSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXTtcbiAgICAgICAgICAgICAgICBHbG9iYWwucHJpY2VJdGVtW3RoaXMuaWRJdGVtXSsrO1xuICAgICAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZVByaWNlSHAoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkSXRlbSk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaWRJdGVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dKys7XG4gICAgICAgICAgICAgICAgU2hvcFZpZXcuaW5zdGFuY2UudXBkYXRlUHJpY2VBdHRhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb2xkIGFmdGVyIHB1cmNoYXNlOlwiLCBHbG9iYWwudG90YWxHb2xkKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1TdGF0ZSgpOyAvLyBTYXZlIGl0ZW0gc3RhdGUgYWZ0ZXIgcHVyY2hhc2VcbiAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZUFsbEl0ZW1zKCk7IC8vIFVwZGF0ZSBhbGwgaXRlbXNcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUdvbGQoKTsgLy8gVXBkYXRlIHRoZSBkaXNwbGF5ZWQgZ29sZCBhbW91bnRcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoKTsgLy8gQ+G6rXAgbmjhuq10IGdpw6Egc2F1IGtoaSBtdWFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGVub3VnaCBnb2xkIVwiKTtcbiAgICAgICAgICAgIHRoaXMubk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIHNhdmVJdGVtU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1TdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkSXRlbSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlXG4gICAgICAgIH07XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbV8ke3RoaXMuaWRJdGVtfWAsIEpTT04uc3RyaW5naWZ5KGl0ZW1TdGF0ZSkpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge31cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59Il19