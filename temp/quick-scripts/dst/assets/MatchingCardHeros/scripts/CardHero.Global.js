
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBZ0NBLENBQUM7SUEvQlUsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixhQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixhQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEIsb0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDbEIscUJBQWMsR0FBRyxFQUFFLENBQUM7SUFDcEIsa0JBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUN2QixnQkFBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWpCLGdCQUFTLEdBQUc7UUFDZixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNqQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2pDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtRQUMvQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNqQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ2pDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDakMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNqQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1FBQ2xDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7UUFDbEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQWtCO0tBQ3RFLENBQUM7SUFDSyxvQkFBYSxHQUFHLENBQUMsQ0FBQztJQUNsQixpQkFBVSxHQUFHLENBQUMsQ0FBQztJQUUxQixhQUFDO0NBaENELEFBZ0NDLElBQUE7QUFoQ1ksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5leHBvcnQgY2xhc3MgR2xvYmFsICB7XG4gICAgc3RhdGljIHRvdGFsR29sZCA9IDEwO1xuICAgIHN0YXRpYyBocENoYXIgPSAxMDtcbiAgICBzdGF0aWMgaHBNb25zdGVyID0gMTA7XG4gICAgc3RhdGljIHNoaWVsZCA9IDA7XG4gICAgc3RhdGljIGRhbWVNb25zdGVyID0gMTtcbiAgICBzdGF0aWMgZGFtZUNoYXJTbWFsbCA9IDU7XG4gICAgc3RhdGljIGRhbWVDaGFyTm9ybWFsID0gMTA7XG4gICAgc3RhdGljIGRhbWVDaGFyQmlnID0gMTU7XG4gICAgLy8gc3RhdGljIHByaWNlSXRlbUhwID0gMTtcbiAgICAvLyBzdGF0aWMgcHJpY2VJdGVtQXR0YWNrID0gMTtcbiAgICBzdGF0aWMgcHJpY2VJdGVtID0gWzEsMV1cblxuICAgIHN0YXRpYyBsZXZlbERhdGEgPSBbXG4gICAgICAgIHsgZGFtZTogMSwgaHA6IDEwLCBtb25zdGVyczogMSB9LCAvLyBMZXZlbCAxXG4gICAgICAgIHsgZGFtZTogNywgaHA6IDE1LCBtb25zdGVyczogMSB9LCAvLyBMZXZlbCAyXG4gICAgICAgIHsgZGFtZTogMTAsIGhwOiAyMCwgbW9uc3RlcnM6IDIgfSwgLy8gTGV2ZWwgM1xuICAgICAgICB7IGRhbWU6IDEyLCBocDogMjUsIG1vbnN0ZXJzOiA2IH0sIC8vIExldmVsIDRcbiAgICAgICAgeyBkYW1lOiAyMCwgaHA6IDUwLCBtb25zdGVyczogMSwgaXNCb3NzOiB0cnVlIH0sIC8vIExldmVsIDUgLSBCb3NzXG4gICAgICAgIHsgZGFtZTogOCwgaHA6IDE4LCBtb25zdGVyczogNCB9LCAvLyBMZXZlbCA2XG4gICAgICAgIHsgZGFtZTogOSwgaHA6IDIyLCBtb25zdGVyczogNSB9LCAvLyBMZXZlbCA3XG4gICAgICAgIHsgZGFtZTogMTEsIGhwOiAyOCwgbW9uc3RlcnM6IDYgfSwgLy8gTGV2ZWwgOFxuICAgICAgICB7IGRhbWU6IDEzLCBocDogMzAsIG1vbnN0ZXJzOiA3IH0sIC8vIExldmVsIDlcbiAgICAgICAgeyBkYW1lOiAxNSwgaHA6IDM1LCBtb25zdGVyczogOCB9LCAvLyBMZXZlbCAxMFxuICAgICAgICB7IGRhbWU6IDE4LCBocDogNDAsIG1vbnN0ZXJzOiA5IH0sIC8vIExldmVsIDExXG4gICAgICAgIHsgZGFtZTogMjIsIGhwOiA0NSwgbW9uc3RlcnM6IDEwIH0sIC8vIExldmVsIDEyXG4gICAgICAgIHsgZGFtZTogMjUsIGhwOiA1MCwgbW9uc3RlcnM6IDExIH0sIC8vIExldmVsIDEzXG4gICAgICAgIHsgZGFtZTogMzAsIGhwOiAxMDAsIG1vbnN0ZXJzOiAxLCBpc0Jvc3M6IHRydWUgfSAvLyBMZXZlbCAxNCAtIEJvc3NcbiAgICBdO1xuICAgIHN0YXRpYyBzZWxlY3RlZExldmVsID0gMDtcbiAgICBzdGF0aWMgbGV2ZWxDb3VudCA9IDA7IFxuICAgIC8vc3RhdGljIGRhdGFBdHRhY2sgPSBbe2lkOiAwLH1dXG59XG4iXX0=