// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


export class Global  {
    static totalGold = 10;
    static hpChar = 10;
    static hpMonster = 10;
    static shield = 0;
    static dameMonster = 1;
    static dameCharSmall = 5;
    static dameCharNormal = 10;
    static dameCharBig = 15;
    // static priceItemHp = 1;
    // static priceItemAttack = 1;
    static priceItem = [1,1]

    static levelData = [
        { dame: 1, hp: 10, monsters: 1 }, // Level 1
        { dame: 7, hp: 15, monsters: 1 }, // Level 2
        { dame: 10, hp: 20, monsters: 2 }, // Level 3
        { dame: 12, hp: 25, monsters: 6 }, // Level 4
        { dame: 20, hp: 50, monsters: 1, isBoss: true }, // Level 5 - Boss
        { dame: 8, hp: 18, monsters: 4 }, // Level 6
        { dame: 9, hp: 22, monsters: 5 }, // Level 7
        { dame: 11, hp: 28, monsters: 6 }, // Level 8
        { dame: 13, hp: 30, monsters: 7 }, // Level 9
        { dame: 15, hp: 35, monsters: 8 }, // Level 10
        { dame: 18, hp: 40, monsters: 9 }, // Level 11
        { dame: 22, hp: 45, monsters: 10 }, // Level 12
        { dame: 25, hp: 50, monsters: 11 }, // Level 13
        { dame: 30, hp: 100, monsters: 1, isBoss: true } // Level 14 - Boss
    ];
    static selectedLevel = 0;
    static levelCount = 0; 
    //static dataAttack = [{id: 0,}]
}
