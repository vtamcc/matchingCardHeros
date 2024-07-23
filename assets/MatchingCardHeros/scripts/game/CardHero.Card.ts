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

   idCard = 0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    setData(id) {
        this.idCard = id;
        this.nCardSpf.getComponent(cc.Sprite).spriteFrame = GameView.instance.listSpfCards[id];
    }

    onClickCards() {
        console.log("id ", this.idCard);
        this.flipCard();
    }

    flipCard() {
        cc.tween(this.node)
            .to(0.3, { scaleX: 0 })
            .call(() => {
                if (!this.nCardFront.active) {
                    this.nCardFront.active = true;
                    this.nCardBack.active = false;
                } else {
                    this.nCardFront.active = false;
                    this.nCardBack.active = true;
                }
            })
            .to(0.3, { scaleX: 1 })
            .start();
    }

    flipToFront() {
        // Đảm bảo thẻ hiện tại đang ở trạng thái mặt sau
        if (this.nCardFront.active) {
            cc.tween(this.node)
                .to(0.3, { scaleX: 0 })
                .call(() => {
                    this.nCardFront.active = false;
                    this.nCardBack.active = true;
                })
                .to(0.3, { scaleX: 1 })
                .start();
        }
    }

    start() {
        // Khởi tạo trạng thái thẻ (mặt sau)
        this.nCardFront.active = true;
        this.nCardBack.active = false;

        // Lật thẻ trở lại mặt trước sau 3 giây
        this.scheduleOnce(this.flipToFront, 3);
    }

    // update (dt) {}
}
