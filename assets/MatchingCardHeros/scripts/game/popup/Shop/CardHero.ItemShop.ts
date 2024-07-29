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
        this.price = price;  // Đặt giá của item tại đây
        this.nItem.getComponent(cc.Sprite).spriteFrame = ShopView.instance.listSpfItem[id];
        this.updatePrice();
        this.checkBuy();
    }

    updatePrice() {
        // Cập nhật giá của item
        this.price = Global.priceItem[this.idItem];
        console.log(`Price updated for item ${this.idItem}: ${this.price}`);
    }

    checkBuy() {
        if (Global.totalGold >= this.price) {
            this.nMask.active = false;
            console.log("Tien" , this.price);
        } else {
            this.nMask.active = true;
        }
    }

    clickBuy() {
        if (Global.totalGold >= this.price) {
            if(this.idItem == 0) {
                Global.totalGold -= Global.priceItem[this.idItem];
                Global.priceItem[this.idItem]++;
                ShopView.instance.updatePriceHp();
                console.log(this.idItem);

            }else if(this.idItem == 1) {
                Global.totalGold -= Global.priceItem[this.idItem];
                Global.priceItem[this.idItem]++;
                ShopView.instance.updatePriceAttack();
            }

            console.log("Gold after purchase:", Global.totalGold);
            this.checkBuy();
            this.saveItemState(); // Save item state after purchase
            ShopView.instance.updateAllItems(); // Update all items
            Level.instance.updateGold(); // Update the displayed gold amount
            this.updatePrice(); // Cập nhật giá sau khi mua
        } else {
            console.log("Not enough gold!");
            this.nMask.active = true;
        }
       
    }

    saveItemState() {
        const itemState = {
            id: this.idItem,
            price: this.price
        };
        cc.sys.localStorage.setItem(`item_${this.idItem}`, JSON.stringify(itemState));
    }

    start() {}

    // update (dt) {}
}