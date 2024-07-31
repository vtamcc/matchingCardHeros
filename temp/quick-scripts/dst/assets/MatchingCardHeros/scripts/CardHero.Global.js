
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/CardHero.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        { dame: 10, hp: 20, monsters: 1 },
        { dame: 12, hp: 25, monsters: 1 },
        { dame: 12, hp: 20, monsters: 1 },
        { dame: 20, hp: 50, monsters: 0, isBoss: true },
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
    Global.levelMonsterSprites = {
        0: [0, 1],
        1: [1, 2],
        2: [0, 2],
        3: [1, 2,],
        4: [2, 3],
        5: [4],
    };
    Global.selectedLevel = 0;
    Global.levelCount = 0;
    return Global;
}());
exports.Global = Global;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBNENBLENBQUM7SUEzQ1UsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixhQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixhQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEIsb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIscUJBQWMsR0FBRyxFQUFFLENBQUM7SUFDcEIsa0JBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUN2QixnQkFBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWpCLGdCQUFTLEdBQUc7UUFDZixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNqQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2pDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDakMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1FBQy9DLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2pDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDakMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNqQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2pDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7UUFDbEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtRQUNsQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0I7S0FDdEUsQ0FBQztJQUdLLDBCQUFtQixHQUFHO1FBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUU7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBRVQsQ0FBQztJQUNLLG9CQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLGlCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLGFBQUM7Q0E1Q0QsQUE0Q0MsSUFBQTtBQTVDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmV4cG9ydCBjbGFzcyBHbG9iYWwgIHtcbiAgICBzdGF0aWMgdG90YWxHb2xkID0gMTA7XG4gICAgc3RhdGljIGhwQ2hhciA9IDEwO1xuICAgIHN0YXRpYyBocE1vbnN0ZXIgPSAxMDtcbiAgICBzdGF0aWMgc2hpZWxkID0gMDtcbiAgICBzdGF0aWMgZGFtZU1vbnN0ZXIgPSAxO1xuICAgIHN0YXRpYyBkYW1lQ2hhclNtYWxsID0gNTtcbiAgICBzdGF0aWMgZGFtZUNoYXJOb3JtYWwgPSAxMDtcbiAgICBzdGF0aWMgZGFtZUNoYXJCaWcgPSAxNTtcbiAgICAvLyBzdGF0aWMgcHJpY2VJdGVtSHAgPSAxO1xuICAgIC8vIHN0YXRpYyBwcmljZUl0ZW1BdHRhY2sgPSAxO1xuICAgIHN0YXRpYyBwcmljZUl0ZW0gPSBbMSwxXVxuXG4gICAgc3RhdGljIGxldmVsRGF0YSA9IFtcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAxIH0sIC8vIExldmVsIDFcbiAgICAgICAgeyBkYW1lOiA3LCBocDogMTUsIG1vbnN0ZXJzOiAxIH0sIC8vIExldmVsIDJcbiAgICAgICAgeyBkYW1lOiAxMCwgaHA6IDIwLCBtb25zdGVyczogMSB9LCAvLyBMZXZlbCAzXG4gICAgICAgIHsgZGFtZTogMTIsIGhwOiAyNSwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAxMiwgaHA6IDIwLCBtb25zdGVyczogMSB9LCAvLyBMZXZlbCA0XG4gICAgICAgIHsgZGFtZTogMjAsIGhwOiA1MCwgbW9uc3RlcnM6IDAsIGlzQm9zczogdHJ1ZSB9LCAvLyBMZXZlbCA1IC0gQm9zc1xuICAgICAgICB7IGRhbWU6IDgsIGhwOiAxOCwgbW9uc3RlcnM6IDQgfSwgLy8gTGV2ZWwgNlxuICAgICAgICB7IGRhbWU6IDksIGhwOiAyMiwgbW9uc3RlcnM6IDUgfSwgLy8gTGV2ZWwgN1xuICAgICAgICB7IGRhbWU6IDExLCBocDogMjgsIG1vbnN0ZXJzOiA2IH0sIC8vIExldmVsIDhcbiAgICAgICAgeyBkYW1lOiAxMywgaHA6IDMwLCBtb25zdGVyczogNyB9LCAvLyBMZXZlbCA5XG4gICAgICAgIHsgZGFtZTogMTUsIGhwOiAzNSwgbW9uc3RlcnM6IDggfSwgLy8gTGV2ZWwgMTBcbiAgICAgICAgeyBkYW1lOiAxOCwgaHA6IDQwLCBtb25zdGVyczogOSB9LCAvLyBMZXZlbCAxMVxuICAgICAgICB7IGRhbWU6IDIyLCBocDogNDUsIG1vbnN0ZXJzOiAxMCB9LCAvLyBMZXZlbCAxMlxuICAgICAgICB7IGRhbWU6IDI1LCBocDogNTAsIG1vbnN0ZXJzOiAxMSB9LCAvLyBMZXZlbCAxM1xuICAgICAgICB7IGRhbWU6IDMwLCBocDogMTAwLCBtb25zdGVyczogMSwgaXNCb3NzOiB0cnVlIH0gLy8gTGV2ZWwgMTQgLSBCb3NzXG4gICAgXTtcblxuXG4gICAgc3RhdGljIGxldmVsTW9uc3RlclNwcml0ZXMgPSB7XG4gICAgICAgIDA6IFswLCAxXSwgLy8gTGV2ZWwgMCB1c2VzIHNwcml0ZXMgMCwgMSwgMlxuICAgICAgICAxOiBbMSwyXSwgLy8gTGV2ZWwgMSB1c2VzIHNwcml0ZXMgMywgNCwgNVxuICAgICAgICAyOiBbMCwyXSwgLy8gTGV2ZWwgMiB1c2VzIHNwcml0ZXMgNiwgNywgOFxuICAgICAgICAzOiBbMSwyLF0sIC8vIExldmVsIDMgdXNlcyBzcHJpdGVzIDksIDEwLCAxMVxuICAgICAgICA0OiBbMiwzXSwgLy8gTGV2ZWwgNCB1c2VzIHNwcml0ZXMgMTIsIDEzLCAxNFxuICAgICAgICA1OiBbNF0sIC8vIExldmVsIDUgdXNlcyBzcHJpdGVzIDE1LCAxNiwgMTdcbiAgICAgICAgLy8gQWRkIG1vcmUgbGV2ZWxzIGFzIG5lZWRlZFxuICAgIH07XG4gICAgc3RhdGljIHNlbGVjdGVkTGV2ZWwgPSAwO1xuICAgIHN0YXRpYyBsZXZlbENvdW50ID0gMDsgXG4gICAgLy9zdGF0aWMgZGF0YUF0dGFjayA9IFt7aWQ6IDAsfV1cbn1cbiJdfQ==