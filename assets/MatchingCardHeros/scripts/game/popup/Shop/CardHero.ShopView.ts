// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../../../CardHero.Global";
import ItemShop from "./CardHero.ItemShop";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopView extends cc.Component {

   public static instance: ShopView = null;
   @property(cc.Prefab)
   prfItem: cc.Prefab = null;
   @property(cc.Node)
   nLayout: cc.Node = null;
   @property(cc.SpriteFrame)
   listSpfItem: cc.SpriteFrame[] = [];
   @property(cc.Label)
   lbPriceHp: cc.Label = null;

   @property(cc.Label)
   lbPriceAttack: cc.Label = null;
   itemPrices = [1,1];


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        ShopView.instance = this;
        this.loadItem();
        this.updatePriceHp();
        this.updatePriceAttack();
    }
    onClickClose() {
        this.node.destroy();
    }

    loadItem() {
        for (let i = 0; i < Global.priceItem.length; i++) {
            let item = cc.instantiate(this.prfItem).getComponent(ItemShop);
            item.setData(i, Global.priceItem[i]);
            this.nLayout.addChild(item.node);
        }
    }

    getSavedItemState(id) {
        let itemState = cc.sys.localStorage.getItem(`item_${id}`);
        return itemState ? JSON.parse(itemState) : null;
    }

    updatePrices() {
        this.lbPriceHp.string = '$ ' + Global.priceItem[0];
        this.lbPriceAttack.string = '$ ' + Global.priceItem[1];
    }

    updateAllItems() {
        console.log("Updating all items...");
        this.nLayout.children.forEach((itemNode) => {
            let itemComponent = itemNode.getComponent(ItemShop);
            console.log("Updating item:", itemComponent.idItem);
            itemComponent.loadItemState();
            itemComponent.updatePrice();
            itemComponent.checkBuy();
        });
    }

    updatePriceHp() {
        this.lbPriceHp.string = '$ ' + Global.priceItem[0];
    }

    updatePriceAttack() {
        this.lbPriceAttack.string = '$ ' + Global.priceItem[1];
    }
    
    start () {

    }

    // update (dt) {}
}
