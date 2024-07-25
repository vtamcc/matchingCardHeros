// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameView from "./CardHero.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends cc.Component {

   @property(cc.Node)
   nCardBack: cc.Node = null;
   @property(cc.Node)
   nCardFront: cc.Node = null;
   @property(cc.Node)
   nCardSpf: cc.Node = null;
   isClicked = false;
   idCard = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.flipToBack();
        this.scheduleOnce(this.flipTofront,5);
    }
    setData(id) {
        this.idCard = id;
        this.nCardSpf.getComponent(cc.Sprite).spriteFrame = GameView.instance.listSpfCards[id];
    }

    onClickCards() {
        if(this.isClicked) return;
        this.isClicked = true;
        this.flipCard();
        GameView.instance.addSelectedCard(this);
        GameView.instance.countClick++;
        if(GameView.instance.countClick == 2) {
            GameView.instance.nMaskClick.active = true;
            this.scheduleOnce(() => {
                GameView.instance.nMaskClick.active = false;
            },0.6)
            GameView.instance.countClick = 0;
        }
    }

    setCards(active: boolean) {
        this.nCardBack.active = active;
        this.nCardFront.active = !active;
    }

    flipToBack(callback: Function = null) {
        cc.tween(this.node)
            .to(0.3, { scaleX: 0.1 })
            .call(() => {
                this.setCards(true);
                if (callback) callback();
            })
            .to(0.3, { scaleX: 1 }).start();
    }

    flipTofront() {
        if(!this.nCardFront.active) {
            cc.tween(this.node)
            .to(0.3,{scaleX:0})
            .call(()=> {
                this.setCards(false);
            })
            .to(0.3, {scaleX:1})
            .start();
        }
    }

    flipCard() {
        cc.tween(this.node)
        .to(0.3,{scaleX: 0})
        .call(() =>{
            if(!this.nCardBack.active) {
                this.setCards(true);
            }else {
                this.setCards(false);
            }
        }).to(0.3, {scaleX:1}).start();
    }
   
    // start() {
    // }

    // update (dt) {}
}
