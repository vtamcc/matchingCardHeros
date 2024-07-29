
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL0NhcmRIZXJvLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUdsRjtJQUFBO0lBYUEsQ0FBQztJQVpVLGdCQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsYUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNaLGdCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsYUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLGtCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLG9CQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLHFCQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLGtCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDdkIsZ0JBQVMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUU1QixhQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5leHBvcnQgY2xhc3MgR2xvYmFsICB7XG4gICAgc3RhdGljIHRvdGFsR29sZCA9IDI7XG4gICAgc3RhdGljIGhwQ2hhciA9IDEwO1xuICAgIHN0YXRpYyBocE1vbnN0ZXIgPSAxMDtcbiAgICBzdGF0aWMgc2hpZWxkID0gMDtcbiAgICBzdGF0aWMgZGFtZU1vbnN0ZXIgPSAxO1xuICAgIHN0YXRpYyBkYW1lQ2hhclNtYWxsID0gNTtcbiAgICBzdGF0aWMgZGFtZUNoYXJOb3JtYWwgPSAxMDtcbiAgICBzdGF0aWMgZGFtZUNoYXJCaWcgPSAxNTtcbiAgICAvLyBzdGF0aWMgcHJpY2VJdGVtSHAgPSAxO1xuICAgIC8vIHN0YXRpYyBwcmljZUl0ZW1BdHRhY2sgPSAxO1xuICAgIHN0YXRpYyBwcmljZUl0ZW0gPSBbMSwxXVxuICAgIC8vc3RhdGljIGRhdGFBdHRhY2sgPSBbe2lkOiAwLH1dXG59XG4iXX0=