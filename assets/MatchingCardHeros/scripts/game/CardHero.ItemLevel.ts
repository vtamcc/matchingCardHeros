// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../CardHero.GameManager";
import { Global } from "../CardHero.Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemLevelView extends cc.Component {

    @property(cc.Node)
    nBlock: cc.Node = null;

    @property(cc.Node)
    nLevelActive: cc.Node = null;

    @property(cc.Node)
    nBossBock: cc.Node = null;

    @property(cc.Node)
    nBossActive: cc.Node = null;

    @property(cc.Node)
    nFlag: cc.Node = null;

    @property(cc.Node)
    nFlagBoss: cc.Node = null;
    idLevel:number = 0;
    // LIFE-CYCLE CALLBACKS:


    // onLoad () {
    // }

    setData(id: number, completed: boolean, isBoss: boolean, isUnlocked: boolean,flag: boolean,flagBoss) {

        this.idLevel = id;
        this.nBlock.active = completed;
        switch (id) {
            case 5:
            case 14:
                this.nBossBock.active = completed;
                break;

            default:
                break;
        }
        this.nFlag.active = flag;
        this.nLevelActive.active = isUnlocked;
        this.node.getComponent(cc.Button).interactable = isUnlocked;
        this.nBossActive.active = isBoss;
        this.nFlagBoss.active = flagBoss;
        if(isBoss) {
            this.nFlag.active = false;
            this.nLevelActive.active = false;
            this.nBlock.active = false;
        }

        
    }

    onClickPlay() {
        GameManager.instance.onClickPlay(this.idLevel);
        console.log("Level ", this.idLevel);
    }

    start() {

    }

    // update (dt) {}
}
