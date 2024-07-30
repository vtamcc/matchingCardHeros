
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
        this.price = price;
        this.loadItemState();
        this.nItem.getComponent(cc.Sprite).spriteFrame = CardHero_ShopView_1.default.instance.listSpfItem[id];
        this.updatePrice();
        this.checkBuy();
    };
    ItemShop.prototype.updatePrice = function () {
        this.price = CardHero_Global_1.Global.priceItem[this.idItem];
    };
    ItemShop.prototype.checkBuy = function () {
        if (CardHero_Global_1.Global.totalGold >= this.price) {
            this.nMask.active = false;
            console.log("xzzzzzzz", this.price);
        }
        else {
            this.nMask.active = true;
        }
    };
    ItemShop.prototype.clickBuy = function () {
        if (CardHero_Global_1.Global.totalGold >= this.price) {
            CardHero_Global_1.Global.totalGold -= this.price;
            if (this.idItem == 0) {
                CardHero_Global_1.Global.hpChar += 5;
                cc.sys.localStorage.setItem("hpChar", CardHero_Global_1.Global.hpChar);
                console.log("HpChar increased to: " + CardHero_Global_1.Global.hpChar);
            }
            else if (this.idItem == 1) {
                CardHero_Global_1.Global.dameCharSmall += 3;
                CardHero_Global_1.Global.dameCharNormal += 3;
                CardHero_Global_1.Global.dameCharBig += 3;
                cc.sys.localStorage.setItem("dameCharSmall", CardHero_Global_1.Global.dameCharSmall);
                cc.sys.localStorage.setItem("dameCharNormal", CardHero_Global_1.Global.dameCharNormal);
                cc.sys.localStorage.setItem("dameCharBig", CardHero_Global_1.Global.dameCharBig);
                console.log("Damage increased to: Small: " + CardHero_Global_1.Global.dameCharSmall + ", Normal: " + CardHero_Global_1.Global.dameCharNormal + ", Big: " + CardHero_Global_1.Global.dameCharBig);
            }
            CardHero_Global_1.Global.priceItem[this.idItem]++;
            this.saveItemState(); // Save item state after purchase
            console.log("Bought item " + this.idItem + ", new price: " + CardHero_Global_1.Global.priceItem[this.idItem] + ", remaining gold: " + CardHero_Global_1.Global.totalGold);
            CardHero_ShopView_1.default.instance.updateAllItems(); // Update all items
            CardHero_ShopView_1.default.instance.updatePrices();
            CardHero_LevelView_1.default.instance.updateGold(); // Update the displayed gold amount
            this.updatePrice(); // Update the price after purchase
        }
        else {
            console.log("Not enough gold!");
        }
    };
    ItemShop.prototype.saveItemState = function () {
        var itemState = {
            id: this.idItem,
            price: CardHero_Global_1.Global.priceItem[this.idItem]
        };
        cc.sys.localStorage.setItem("item_" + this.idItem, JSON.stringify(itemState));
        console.log("Item " + this.idItem + " state saved:", itemState);
    };
    ItemShop.prototype.loadItemState = function () {
        var itemState = cc.sys.localStorage.getItem("item_" + this.idItem);
        if (itemState) {
            var parsedState = JSON.parse(itemState);
            CardHero_Global_1.Global.priceItem[this.idItem] = parsedState.price;
            this.price = parsedState.price;
            console.log("Loaded price for item " + this.idItem + ": " + this.price);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvU2hvcC9DYXJkSGVyby5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBa0Q7QUFFbEQsK0RBQTZDO0FBQzdDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVGQztRQXBGRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUU1QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUE0RWxCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0VHLHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsMEJBQU8sR0FBUCxVQUFRLEVBQUUsRUFBRSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMv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RSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLElBQUksQ0FBQyxNQUFNLGtCQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBUSxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixJQUFJLENBQUMsTUFBTSxVQUFLLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVMsQ0FBQztJQWpGVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFMTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUY1QjtJQUFELGVBQUM7Q0F2RkQsQUF1RkMsQ0F2RnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUZqRDtrQkF2Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4uLy4uL0NhcmRIZXJvLkxldmVsVmlld1wiO1xuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL0NhcmRIZXJvLlNob3BWaWV3XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuSXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAvLyBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpZEl0ZW0gPSAwO1xuICAgIHByaWNlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge31cblxuICAgIHNldERhdGEoaWQsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuaWRJdGVtID0gaWQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5sb2FkSXRlbVN0YXRlKCk7IFxuICAgICAgICB0aGlzLm5JdGVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2hvcFZpZXcuaW5zdGFuY2UubGlzdFNwZkl0ZW1baWRdO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tCdXkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmljZSgpIHtcbiAgICAgICAgdGhpcy5wcmljZSA9IEdsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dO1xuICAgIH1cblxuICAgIGNoZWNrQnV5KCkge1xuICAgICAgICBpZiAoR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLnByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4enp6enp6elwiLHRoaXMucHJpY2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja0J1eSgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC50b3RhbEdvbGQgPj0gdGhpcy5wcmljZSkge1xuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSB0aGlzLnByaWNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWRJdGVtID09IDApIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICs9IDU7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaHBDaGFyXCIsIEdsb2JhbC5ocENoYXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBIcENoYXIgaW5jcmVhc2VkIHRvOiAke0dsb2JhbC5ocENoYXJ9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWRJdGVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCArPSAzO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCArPSAzO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyArPSAzO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhbWVDaGFyU21hbGxcIiwgR2xvYmFsLmRhbWVDaGFyU21hbGwpO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhbWVDaGFyTm9ybWFsXCIsIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFtZUNoYXJCaWdcIiwgR2xvYmFsLmRhbWVDaGFyQmlnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGFtYWdlIGluY3JlYXNlZCB0bzogU21hbGw6ICR7R2xvYmFsLmRhbWVDaGFyU21hbGx9LCBOb3JtYWw6ICR7R2xvYmFsLmRhbWVDaGFyTm9ybWFsfSwgQmlnOiAke0dsb2JhbC5kYW1lQ2hhckJpZ31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgR2xvYmFsLnByaWNlSXRlbVt0aGlzLmlkSXRlbV0rKztcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1TdGF0ZSgpOyAvLyBTYXZlIGl0ZW0gc3RhdGUgYWZ0ZXIgcHVyY2hhc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBCb3VnaHQgaXRlbSAke3RoaXMuaWRJdGVtfSwgbmV3IHByaWNlOiAke0dsb2JhbC5wcmljZUl0ZW1bdGhpcy5pZEl0ZW1dfSwgcmVtYWluaW5nIGdvbGQ6ICR7R2xvYmFsLnRvdGFsR29sZH1gKTtcbiAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZUFsbEl0ZW1zKCk7IC8vIFVwZGF0ZSBhbGwgaXRlbXNcbiAgICAgICAgICAgIFNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZVByaWNlcygpO1xuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlR29sZCgpOyAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBnb2xkIGFtb3VudFxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSgpOyAvLyBVcGRhdGUgdGhlIHByaWNlIGFmdGVyIHB1cmNoYXNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZ29sZCFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlSXRlbVN0YXRlKCkge1xuICAgICAgICBjb25zdCBpdGVtU3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZEl0ZW0sXG4gICAgICAgICAgICBwcmljZTogR2xvYmFsLnByaWNlSXRlbVt0aGlzLmlkSXRlbV1cbiAgICAgICAgfTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBpdGVtXyR7dGhpcy5pZEl0ZW19YCwgSlNPTi5zdHJpbmdpZnkoaXRlbVN0YXRlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJdGVtICR7dGhpcy5pZEl0ZW19IHN0YXRlIHNhdmVkOmAsIGl0ZW1TdGF0ZSk7XG4gICAgfVxuXG4gICAgbG9hZEl0ZW1TdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgaXRlbVN0YXRlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtXyR7dGhpcy5pZEl0ZW19YCk7XG4gICAgICAgIGlmIChpdGVtU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFN0YXRlID0gSlNPTi5wYXJzZShpdGVtU3RhdGUpO1xuICAgICAgICAgICAgR2xvYmFsLnByaWNlSXRlbVt0aGlzLmlkSXRlbV0gPSBwYXJzZWRTdGF0ZS5wcmljZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwYXJzZWRTdGF0ZS5wcmljZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgcHJpY2UgZm9yIGl0ZW0gJHt0aGlzLmlkSXRlbX06ICR7dGhpcy5wcmljZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge31cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59Il19