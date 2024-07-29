import { Global } from "../../../CardHero.Global";
import GameView from "../../CardHero.GameView";
import Level from "../../CardHero.LevelView";
import ShopView from "./CardHero.ShopView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemShop extends cc.Component {

    @property(cc.Node)
    nItem: cc.Node = null;
    @property(cc.Node)
    nMask: cc.Node = null;
    // @property(cc.Label)
    // lbPrice: cc.Label = null;

    idItem = 0;
    price: number = 0;

    onLoad() {}

    setData(id, price) {
        this.idItem = id;
        this.price = price;
        this.loadItemState(); 
        this.nItem.getComponent(cc.Sprite).spriteFrame = ShopView.instance.listSpfItem[id];
        this.updatePrice();
        this.checkBuy();
    }

    updatePrice() {
        this.price = Global.priceItem[this.idItem];
    }

    checkBuy() {
        if (Global.totalGold >= this.price) {
            this.nMask.active = false;
            console.log("xzzzzzzz",this.price)
        } else {
            this.nMask.active = true;
        }
    }

    clickBuy() {
        if (Global.totalGold >= this.price) {
            Global.totalGold -= this.price;
            if (this.idItem == 0) {
                Global.hpChar += 5;
                cc.sys.localStorage.setItem("hpChar", Global.hpChar);
                console.log(`HpChar increased to: ${Global.hpChar}`);
            } else if (this.idItem == 1) {
                Global.dameCharSmall += 3;
                Global.dameCharNormal += 3;
                Global.dameCharBig += 3;
                cc.sys.localStorage.setItem("dameCharSmall", Global.dameCharSmall);
                cc.sys.localStorage.setItem("dameCharNormal", Global.dameCharNormal);
                cc.sys.localStorage.setItem("dameCharBig", Global.dameCharBig);
                console.log(`Damage increased to: Small: ${Global.dameCharSmall}, Normal: ${Global.dameCharNormal}, Big: ${Global.dameCharBig}`);
            }

            Global.priceItem[this.idItem]++;
            this.saveItemState(); // Save item state after purchase
            console.log(`Bought item ${this.idItem}, new price: ${Global.priceItem[this.idItem]}, remaining gold: ${Global.totalGold}`);
            ShopView.instance.updateAllItems(); // Update all items
            ShopView.instance.updatePrices();
            Level.instance.updateGold(); // Update the displayed gold amount
            this.updatePrice(); // Update the price after purchase
        } else {
            console.log("Not enough gold!");
        }
    }

    saveItemState() {
        const itemState = {
            id: this.idItem,
            price: Global.priceItem[this.idItem]
        };
        cc.sys.localStorage.setItem(`item_${this.idItem}`, JSON.stringify(itemState));
        console.log(`Item ${this.idItem} state saved:`, itemState);
    }

    loadItemState() {
        const itemState = cc.sys.localStorage.getItem(`item_${this.idItem}`);
        if (itemState) {
            const parsedState = JSON.parse(itemState);
            Global.priceItem[this.idItem] = parsedState.price;
            this.price = parsedState.price;
            console.log(`Loaded price for item ${this.idItem}: ${this.price}`);
        }
    }

    start() {}

    // update (dt) {}
}