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
    Global.totalGold = 0;
    Global.hpChar = 10;
    Global.hpMonster = 10;
    Global.shield = 0;
    Global.dameMonster = 1;
    Global.dameCharSmall = 2;
    Global.dameCharNormal = 4;
    Global.dameCharBig = 6;
    // static priceItemHp = 1;
    // static priceItemAttack = 1;
    Global.priceItem = [1, 1];
    Global.levelData = [
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 15, monsters: 1 },
        { dame: 2, hp: 20, monsters: 1 },
        { dame: 3, hp: 25, monsters: 1 },
        { dame: 3, hp: 20, monsters: 1 },
        { dame: 5, hp: 50, monsters: 0, isBoss: true },
        { dame: 1, hp: 10, monsters: 0 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 1, hp: 10, monsters: 1 },
        { dame: 30, hp: 100, monsters: 0, isBoss: true } // Level 14 - Boss
    ];
    Global.levelMonsterSprites = {
        0: [0, 1],
        1: [1, 2],
        2: [0, 2],
        3: [1, 2,],
        4: [2, 3],
        5: [4],
        6: [4],
        7: [0, 1],
        8: [0, 1],
        9: [0, 1],
        10: [0, 1],
        11: [0, 1],
        12: [0, 1],
        13: [0, 1],
        14: [0, 1],
    };
    Global.selectedLevel = 0;
    Global.levelCount = 0;
    return Global;
}());
exports.Global = Global;

cc._RF.pop();