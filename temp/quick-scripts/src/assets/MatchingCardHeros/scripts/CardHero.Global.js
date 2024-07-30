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
    Global.totalGold = 10;
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
    Global.levelData = [
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 7, hp: 15, monsters: 1 },
        { dame: 10, hp: 20, monsters: 2 },
        { dame: 12, hp: 25, monsters: 6 },
        { dame: 20, hp: 50, monsters: 1, isBoss: true },
        { dame: 8, hp: 18, monsters: 4 },
        { dame: 9, hp: 22, monsters: 5 },
        { dame: 11, hp: 28, monsters: 6 },
        { dame: 13, hp: 30, monsters: 7 },
        { dame: 15, hp: 35, monsters: 8 },
        { dame: 18, hp: 40, monsters: 9 },
        { dame: 22, hp: 45, monsters: 10 },
        { dame: 25, hp: 50, monsters: 11 },
        { dame: 30, hp: 100, monsters: 1, isBoss: true } // Level 14 - Boss
    ];
    Global.selectedLevel = 0;
    Global.levelCount = 0;
    return Global;
}());
exports.Global = Global;

cc._RF.pop();