"use strict";
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