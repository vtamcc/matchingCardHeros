// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


export class Global  {
    static totalGold = 0;
    static hpChar = 10;
    static hpMonster = 10;
    static shield = 0;
    static dameMonster = 1;
    static dameCharSmall = 2;
    static dameCharNormal = 4;
    static dameCharBig = 6;
    // static priceItemHp = 1;
    // static priceItemAttack = 1;
    static priceItem = [1,1]

    static levelData = [
        { dame: 1, hp: 10, monsters: 1 }, // Level 1
        { dame: 1, hp: 15, monsters: 1 }, // Level 2
        { dame: 2, hp: 20, monsters: 1 }, // Level 3
        { dame: 3, hp: 25, monsters: 1 },
        { dame: 3, hp: 20, monsters: 1 }, // Level 4
        { dame: 5, hp: 50, monsters: 0, isBoss: true }, // Level 5 - Boss
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


    static levelMonsterSprites = {
        0: [0, 1], // Level 0 uses sprites 0, 1, 2
        1: [1,2], // Level 1 uses sprites 3, 4, 5
        2: [0,2], // Level 2 uses sprites 6, 7, 8
        3: [1,2,], // Level 3 uses sprites 9, 10, 11
        4: [2,3], // Level 4 uses sprites 12, 13, 14
        5: [4], // Level 5 uses sprites 15, 16, 17
        6: [4],
        7: [0, 1],
        8: [0, 1],
        9: [0, 1],
        10: [0, 1],
        11: [0, 1],
        12: [0, 1],
        13: [0, 1],
        14: [0, 1],
        // Add more levels as needed
    };
    static selectedLevel = 0;
    static levelCount = 0; 
    //static dataAttack = [{id: 0,}]
}
