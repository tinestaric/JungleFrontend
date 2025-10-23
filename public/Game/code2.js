gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.IntroCode.eventsList0(runtimeScene);


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
