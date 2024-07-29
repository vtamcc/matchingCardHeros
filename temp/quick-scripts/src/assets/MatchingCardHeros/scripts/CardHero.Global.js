"use strict";
cc._RF.push(module, '03c11M17HlIsZ+0lARMsnQQ', 'CardHero.Global');
// MatchingCardHeros/scripts/CardHero.Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.totalGold = 2;
    Global.hpChar = 10;
    Global.hpMonster = 10;
    Global.shield = 0;
    Global.dameMonster = 1;
    Global.dameCharSmall = 5;
    Global.dameCharNormal = 10;
    Global.dameCharBig = 15;
    // static priceItemHp = 1;
    // static priceItemAttack = 1;
    Global.priceItem = [1, 1];
    return Global;
}());
exports.Global = Global;

cc._RF.pop();