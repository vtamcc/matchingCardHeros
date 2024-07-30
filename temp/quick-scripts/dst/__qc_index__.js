
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/MatchingCardHeros/scripts/CardHero.GameManager');
require('./assets/MatchingCardHeros/scripts/CardHero.Global');
require('./assets/MatchingCardHeros/scripts/game/CardHero.Card');
require('./assets/MatchingCardHeros/scripts/game/CardHero.Char');
require('./assets/MatchingCardHeros/scripts/game/CardHero.GameView');
require('./assets/MatchingCardHeros/scripts/game/CardHero.ItemLevel');
require('./assets/MatchingCardHeros/scripts/game/CardHero.LevelView');
require('./assets/MatchingCardHeros/scripts/game/CardHero.Monster');
require('./assets/MatchingCardHeros/scripts/game/popup/CardHero.GameOver');
require('./assets/MatchingCardHeros/scripts/game/popup/CardHero.Pause');
require('./assets/MatchingCardHeros/scripts/game/popup/Shop/CardHero.ItemShop');
require('./assets/MatchingCardHeros/scripts/game/popup/Shop/CardHero.ShopView');

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