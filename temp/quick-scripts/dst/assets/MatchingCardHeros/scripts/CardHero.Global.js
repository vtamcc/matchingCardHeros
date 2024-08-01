
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBcURBLENBQUM7SUFwRFUsZ0JBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxhQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixhQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEIsb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIscUJBQWMsR0FBRyxDQUFDLENBQUM7SUFDbkIsa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUN2QixnQkFBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWpCLGdCQUFTLEdBQUc7UUFDZixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1FBQzlDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0I7S0FDdEUsQ0FBQztJQUdLLDBCQUFtQixHQUFHO1FBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUU7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNWLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNWLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFYixDQUFDO0lBQ0ssb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIsaUJBQVUsR0FBRyxDQUFDLENBQUM7SUFFMUIsYUFBQztDQXJERCxBQXFEQyxJQUFBO0FBckRZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuZXhwb3J0IGNsYXNzIEdsb2JhbCAge1xuICAgIHN0YXRpYyB0b3RhbEdvbGQgPSAwO1xuICAgIHN0YXRpYyBocENoYXIgPSAxMDtcbiAgICBzdGF0aWMgaHBNb25zdGVyID0gMTA7XG4gICAgc3RhdGljIHNoaWVsZCA9IDA7XG4gICAgc3RhdGljIGRhbWVNb25zdGVyID0gMTtcbiAgICBzdGF0aWMgZGFtZUNoYXJTbWFsbCA9IDI7XG4gICAgc3RhdGljIGRhbWVDaGFyTm9ybWFsID0gNDtcbiAgICBzdGF0aWMgZGFtZUNoYXJCaWcgPSA2O1xuICAgIC8vIHN0YXRpYyBwcmljZUl0ZW1IcCA9IDE7XG4gICAgLy8gc3RhdGljIHByaWNlSXRlbUF0dGFjayA9IDE7XG4gICAgc3RhdGljIHByaWNlSXRlbSA9IFsxLDFdXG5cbiAgICBzdGF0aWMgbGV2ZWxEYXRhID0gW1xuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxMCwgbW9uc3RlcnM6IDEgfSwgLy8gTGV2ZWwgMVxuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxNSwgbW9uc3RlcnM6IDEgfSwgLy8gTGV2ZWwgMlxuICAgICAgICB7IGRhbWU6IDIsIGhwOiAyMCwgbW9uc3RlcnM6IDEgfSwgLy8gTGV2ZWwgM1xuICAgICAgICB7IGRhbWU6IDMsIGhwOiAyNSwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAzLCBocDogMjAsIG1vbnN0ZXJzOiAxIH0sIC8vIExldmVsIDRcbiAgICAgICAgeyBkYW1lOiA1LCBocDogNTAsIG1vbnN0ZXJzOiAwLCBpc0Jvc3M6IHRydWUgfSwgLy8gTGV2ZWwgNSAtIEJvc3NcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAwIH0sXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LFxuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxMCwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAxIH0sXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LFxuICAgICAgICB7IGRhbWU6IDEsIGhwOiAxMCwgbW9uc3RlcnM6IDEgfSxcbiAgICAgICAgeyBkYW1lOiAxLCBocDogMTAsIG1vbnN0ZXJzOiAxIH0sXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LFxuICAgICAgICB7IGRhbWU6IDMwLCBocDogMTAwLCBtb25zdGVyczogMCwgaXNCb3NzOiB0cnVlIH0gLy8gTGV2ZWwgMTQgLSBCb3NzXG4gICAgXTtcblxuXG4gICAgc3RhdGljIGxldmVsTW9uc3RlclNwcml0ZXMgPSB7XG4gICAgICAgIDA6IFswLCAxXSwgLy8gTGV2ZWwgMCB1c2VzIHNwcml0ZXMgMCwgMSwgMlxuICAgICAgICAxOiBbMSwyXSwgLy8gTGV2ZWwgMSB1c2VzIHNwcml0ZXMgMywgNCwgNVxuICAgICAgICAyOiBbMCwyXSwgLy8gTGV2ZWwgMiB1c2VzIHNwcml0ZXMgNiwgNywgOFxuICAgICAgICAzOiBbMSwyLF0sIC8vIExldmVsIDMgdXNlcyBzcHJpdGVzIDksIDEwLCAxMVxuICAgICAgICA0OiBbMiwzXSwgLy8gTGV2ZWwgNCB1c2VzIHNwcml0ZXMgMTIsIDEzLCAxNFxuICAgICAgICA1OiBbNF0sIC8vIExldmVsIDUgdXNlcyBzcHJpdGVzIDE1LCAxNiwgMTdcbiAgICAgICAgNjogWzRdLFxuICAgICAgICA3OiBbMCwgMV0sXG4gICAgICAgIDg6IFswLCAxXSxcbiAgICAgICAgOTogWzAsIDFdLFxuICAgICAgICAxMDogWzAsIDFdLFxuICAgICAgICAxMTogWzAsIDFdLFxuICAgICAgICAxMjogWzAsIDFdLFxuICAgICAgICAxMzogWzAsIDFdLFxuICAgICAgICAxNDogWzAsIDFdLFxuICAgICAgICAvLyBBZGQgbW9yZSBsZXZlbHMgYXMgbmVlZGVkXG4gICAgfTtcbiAgICBzdGF0aWMgc2VsZWN0ZWRMZXZlbCA9IDA7XG4gICAgc3RhdGljIGxldmVsQ291bnQgPSAwOyBcbiAgICAvL3N0YXRpYyBkYXRhQXR0YWNrID0gW3tpZDogMCx9XVxufVxuIl19