"use strict";
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