// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../CardHero.GameManager";
import { Global } from "../CardHero.Global";
import GameView from "./CardHero.GameView";
import ItemLevelView from "./CardHero.ItemLevel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Level extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:
    public static instance: Level = null;
    @property(cc.Prefab)
    prfShopView: cc.Prefab = null;
    @property(cc.Label)
    lbGold: cc.Label = null;

    @property(cc.Prefab)
    prfItemLevel: cc.Prefab = null;

    @property(cc.Node)
    nLayout: cc.Node = null;
    private levelOrder = [
        [0, 1, 2],
        [5, 4, 3],
        [6, 7, 8],
        [11, 10, 9],
        [12, 13, 14]
    ];
    onLoad () {
        Level.instance = this;
        Global.totalGold = parseInt(cc.sys.localStorage.getItem("totalGold"),Global.totalGold) || Global.totalGold;
        Global.levelCount = parseInt(cc.sys.localStorage.getItem("levelCount")) || 0;
        
        console.log("LevelCount",Global.levelCount);
        this.updateGold();
        this.loadItemLevel();
        console.log("Tien ", Global.totalGold);
    }


    onClickShopView() {
        let shopView = cc.instantiate(this.prfShopView)
        this.node.addChild(shopView);
    }
    
    updateGold() {
        this.lbGold.string = '$' +  Global.totalGold + ' ';
        cc.sys.localStorage.setItem("totalGold", Global.totalGold);
    }

    clickRemoveCache() {
        cc.sys.localStorage.clear();
    }

    loadItemLevel() {
        for (let row = 0; row < this.levelOrder.length; row++) {
            for (let col = 0; col < this.levelOrder[row].length; col++) {
                let id = this.levelOrder[row][col];
                let item = cc.instantiate(this.prfItemLevel).getComponent(ItemLevelView);
                const completed = cc.sys.localStorage.getItem(`level_${id}_completed`) === 'true';
                const isUnlocked = cc.sys.localStorage.getItem(`level_${id}_unlocked`) === 'true' || id === 0;
                const flag = cc.sys.localStorage.getItem(`level_${id}_flag`) === 'true' || false;
                const isBoss = cc.sys.localStorage.getItem(`level_${id}_isBoss`) === 'true' || false;
                console.log("isBoss", isBoss);
                console.log("Completed", completed);
                item.setData(id, true,isBoss,isUnlocked,flag);
                this.nLayout.addChild(item.node);
            }
        }
    }

    updateLevelStatus(levelId: number) {
        this.nLayout.children.forEach((itemNode) => {
            let itemComponent = itemNode.getComponent(ItemLevelView);
            if (itemComponent.idLevel === levelId) {
                const completed = cc.sys.localStorage.getItem(`level_${levelId}_completed`) === 'true';
                const isUnlocked = cc.sys.localStorage.getItem(`level_${levelId}_unlocked`) === 'true' || levelId == 0;
                const flag = cc.sys.localStorage.getItem(`level_${levelId}_flag`) === 'true' || false;
               
                itemComponent.setData(levelId, completed, true, isUnlocked,flag);
            }
        });
    }
    start () {

    }

    // update (dt) {}
}
