gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDintro_9595textObjects1= [];
gdjs.IntroCode.GDintro_9595textObjects2= [];
gdjs.IntroCode.GDNewTiledSpriteObjects1= [];
gdjs.IntroCode.GDNewTiledSpriteObjects2= [];
gdjs.IntroCode.GDIntroTextObjects1= [];
gdjs.IntroCode.GDIntroTextObjects2= [];
gdjs.IntroCode.GDFingerPressObjects1= [];
gdjs.IntroCode.GDFingerPressObjects2= [];
gdjs.IntroCode.GDClickToStartObjects1= [];
gdjs.IntroCode.GDClickToStartObjects2= [];
gdjs.IntroCode.GDTransitionObjects1= [];
gdjs.IntroCode.GDTransitionObjects2= [];


gdjs.IntroCode.asyncCallback20024604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(20024604, gdjs.IntroCode.asyncCallback20024604);
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.IntroCode.asyncCallback20024604(runtimeScene, asyncObjectsList)), 20024604, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.IntroCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTransitionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, null);
}
}

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickToStart"), gdjs.IntroCode.GDClickToStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("FingerPress"), gdjs.IntroCode.GDFingerPressObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ButtonPressDelay");
}
{for(var i = 0, len = gdjs.IntroCode.GDFingerPressObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFingerPressObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.IntroCode.GDClickToStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDClickToStartObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ButtonPressDelay") >= 1.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickToStart"), gdjs.IntroCode.GDClickToStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("FingerPress"), gdjs.IntroCode.GDFingerPressObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDFingerPressObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFingerPressObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDClickToStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDClickToStartObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDintro_9595textObjects1.length = 0;
gdjs.IntroCode.GDintro_9595textObjects2.length = 0;
gdjs.IntroCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.IntroCode.GDIntroTextObjects1.length = 0;
gdjs.IntroCode.GDIntroTextObjects2.length = 0;
gdjs.IntroCode.GDFingerPressObjects1.length = 0;
gdjs.IntroCode.GDFingerPressObjects2.length = 0;
gdjs.IntroCode.GDClickToStartObjects1.length = 0;
gdjs.IntroCode.GDClickToStartObjects2.length = 0;
gdjs.IntroCode.GDTransitionObjects1.length = 0;
gdjs.IntroCode.GDTransitionObjects2.length = 0;

gdjs.IntroCode.eventsList2(runtimeScene);
gdjs.IntroCode.GDintro_9595textObjects1.length = 0;
gdjs.IntroCode.GDintro_9595textObjects2.length = 0;
gdjs.IntroCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.IntroCode.GDIntroTextObjects1.length = 0;
gdjs.IntroCode.GDIntroTextObjects2.length = 0;
gdjs.IntroCode.GDFingerPressObjects1.length = 0;
gdjs.IntroCode.GDFingerPressObjects2.length = 0;
gdjs.IntroCode.GDClickToStartObjects1.length = 0;
gdjs.IntroCode.GDClickToStartObjects2.length = 0;
gdjs.IntroCode.GDTransitionObjects1.length = 0;
gdjs.IntroCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
