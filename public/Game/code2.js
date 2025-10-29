gdjs.FinishCode = {};
gdjs.FinishCode.localVariables = [];
gdjs.FinishCode.idToCallbackMap = new Map();
gdjs.FinishCode.GDPlayerObjects1= [];
gdjs.FinishCode.GDPlayerObjects2= [];
gdjs.FinishCode.GDNPCObjects1= [];
gdjs.FinishCode.GDNPCObjects2= [];
gdjs.FinishCode.GDTree1Objects1= [];
gdjs.FinishCode.GDTree1Objects2= [];
gdjs.FinishCode.GDTree2Objects1= [];
gdjs.FinishCode.GDTree2Objects2= [];
gdjs.FinishCode.GDBush1Objects1= [];
gdjs.FinishCode.GDBush1Objects2= [];
gdjs.FinishCode.GDTilemap_9595GroundObjects1= [];
gdjs.FinishCode.GDTilemap_9595GroundObjects2= [];
gdjs.FinishCode.GDNPClvl2Objects1= [];
gdjs.FinishCode.GDNPClvl2Objects2= [];
gdjs.FinishCode.GDTokenObjects1= [];
gdjs.FinishCode.GDTokenObjects2= [];
gdjs.FinishCode.GDSign_95951Objects1= [];
gdjs.FinishCode.GDSign_95951Objects2= [];
gdjs.FinishCode.GDFull_9595BoardObjects1= [];
gdjs.FinishCode.GDFull_9595BoardObjects2= [];
gdjs.FinishCode.GDBoard_9595PanelObjects1= [];
gdjs.FinishCode.GDBoard_9595PanelObjects2= [];
gdjs.FinishCode.GDScoreboardNameObjects1= [];
gdjs.FinishCode.GDScoreboardNameObjects2= [];
gdjs.FinishCode.GDScoreboardTimeObjects1= [];
gdjs.FinishCode.GDScoreboardTimeObjects2= [];
gdjs.FinishCode.GDLeaderboardButtonObjects1= [];
gdjs.FinishCode.GDLeaderboardButtonObjects2= [];
gdjs.FinishCode.GDNewTileMapScoreObjects1= [];
gdjs.FinishCode.GDNewTileMapScoreObjects2= [];
gdjs.FinishCode.GDNewTiledSpriteObjects1= [];
gdjs.FinishCode.GDNewTiledSpriteObjects2= [];
gdjs.FinishCode.GDTinyYellowButtonObjects1= [];
gdjs.FinishCode.GDTinyYellowButtonObjects2= [];
gdjs.FinishCode.GDScoreboardObjects1= [];
gdjs.FinishCode.GDScoreboardObjects2= [];
gdjs.FinishCode.GDScoreboard2Objects1= [];
gdjs.FinishCode.GDScoreboard2Objects2= [];
gdjs.FinishCode.GDScoreboard3Objects1= [];
gdjs.FinishCode.GDScoreboard3Objects2= [];
gdjs.FinishCode.GDTransitionObjects1= [];
gdjs.FinishCode.GDTransitionObjects2= [];


gdjs.FinishCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 60) < 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FinishCode.GDScoreboardTimeObjects1 */
{for(var i = 0, len = gdjs.FinishCode.GDScoreboardTimeObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDScoreboardTimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 60))));
}
}
}

}


};gdjs.FinishCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreboardName"), gdjs.FinishCode.GDScoreboardNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreboardTime"), gdjs.FinishCode.GDScoreboardTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.FinishCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.FinishCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Backward", 0, null);
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
{for(var i = 0, len = gdjs.FinishCode.GDScoreboardNameObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDScoreboardNameObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.FinishCode.GDScoreboardTimeObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDScoreboardTimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 60)) + ":" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 60))));
}
}

{ //Subevents
gdjs.FinishCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.FinishCode.GDLeaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinishCode.GDLeaderboardButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinishCode.GDLeaderboardButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FinishCode.GDLeaderboardButtonObjects1[k] = gdjs.FinishCode.GDLeaderboardButtonObjects1[i];
        ++k;
    }
}
gdjs.FinishCode.GDLeaderboardButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://companial-jungle.vercel.app/leaderboard?sessionId=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), null);
}
}

}


};

gdjs.FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinishCode.GDPlayerObjects1.length = 0;
gdjs.FinishCode.GDPlayerObjects2.length = 0;
gdjs.FinishCode.GDNPCObjects1.length = 0;
gdjs.FinishCode.GDNPCObjects2.length = 0;
gdjs.FinishCode.GDTree1Objects1.length = 0;
gdjs.FinishCode.GDTree1Objects2.length = 0;
gdjs.FinishCode.GDTree2Objects1.length = 0;
gdjs.FinishCode.GDTree2Objects2.length = 0;
gdjs.FinishCode.GDBush1Objects1.length = 0;
gdjs.FinishCode.GDBush1Objects2.length = 0;
gdjs.FinishCode.GDTilemap_9595GroundObjects1.length = 0;
gdjs.FinishCode.GDTilemap_9595GroundObjects2.length = 0;
gdjs.FinishCode.GDNPClvl2Objects1.length = 0;
gdjs.FinishCode.GDNPClvl2Objects2.length = 0;
gdjs.FinishCode.GDTokenObjects1.length = 0;
gdjs.FinishCode.GDTokenObjects2.length = 0;
gdjs.FinishCode.GDSign_95951Objects1.length = 0;
gdjs.FinishCode.GDSign_95951Objects2.length = 0;
gdjs.FinishCode.GDFull_9595BoardObjects1.length = 0;
gdjs.FinishCode.GDFull_9595BoardObjects2.length = 0;
gdjs.FinishCode.GDBoard_9595PanelObjects1.length = 0;
gdjs.FinishCode.GDBoard_9595PanelObjects2.length = 0;
gdjs.FinishCode.GDScoreboardNameObjects1.length = 0;
gdjs.FinishCode.GDScoreboardNameObjects2.length = 0;
gdjs.FinishCode.GDScoreboardTimeObjects1.length = 0;
gdjs.FinishCode.GDScoreboardTimeObjects2.length = 0;
gdjs.FinishCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.FinishCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.FinishCode.GDNewTileMapScoreObjects1.length = 0;
gdjs.FinishCode.GDNewTileMapScoreObjects2.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FinishCode.GDTinyYellowButtonObjects1.length = 0;
gdjs.FinishCode.GDTinyYellowButtonObjects2.length = 0;
gdjs.FinishCode.GDScoreboardObjects1.length = 0;
gdjs.FinishCode.GDScoreboardObjects2.length = 0;
gdjs.FinishCode.GDScoreboard2Objects1.length = 0;
gdjs.FinishCode.GDScoreboard2Objects2.length = 0;
gdjs.FinishCode.GDScoreboard3Objects1.length = 0;
gdjs.FinishCode.GDScoreboard3Objects2.length = 0;
gdjs.FinishCode.GDTransitionObjects1.length = 0;
gdjs.FinishCode.GDTransitionObjects2.length = 0;

gdjs.FinishCode.eventsList1(runtimeScene);
gdjs.FinishCode.GDPlayerObjects1.length = 0;
gdjs.FinishCode.GDPlayerObjects2.length = 0;
gdjs.FinishCode.GDNPCObjects1.length = 0;
gdjs.FinishCode.GDNPCObjects2.length = 0;
gdjs.FinishCode.GDTree1Objects1.length = 0;
gdjs.FinishCode.GDTree1Objects2.length = 0;
gdjs.FinishCode.GDTree2Objects1.length = 0;
gdjs.FinishCode.GDTree2Objects2.length = 0;
gdjs.FinishCode.GDBush1Objects1.length = 0;
gdjs.FinishCode.GDBush1Objects2.length = 0;
gdjs.FinishCode.GDTilemap_9595GroundObjects1.length = 0;
gdjs.FinishCode.GDTilemap_9595GroundObjects2.length = 0;
gdjs.FinishCode.GDNPClvl2Objects1.length = 0;
gdjs.FinishCode.GDNPClvl2Objects2.length = 0;
gdjs.FinishCode.GDTokenObjects1.length = 0;
gdjs.FinishCode.GDTokenObjects2.length = 0;
gdjs.FinishCode.GDSign_95951Objects1.length = 0;
gdjs.FinishCode.GDSign_95951Objects2.length = 0;
gdjs.FinishCode.GDFull_9595BoardObjects1.length = 0;
gdjs.FinishCode.GDFull_9595BoardObjects2.length = 0;
gdjs.FinishCode.GDBoard_9595PanelObjects1.length = 0;
gdjs.FinishCode.GDBoard_9595PanelObjects2.length = 0;
gdjs.FinishCode.GDScoreboardNameObjects1.length = 0;
gdjs.FinishCode.GDScoreboardNameObjects2.length = 0;
gdjs.FinishCode.GDScoreboardTimeObjects1.length = 0;
gdjs.FinishCode.GDScoreboardTimeObjects2.length = 0;
gdjs.FinishCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.FinishCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.FinishCode.GDNewTileMapScoreObjects1.length = 0;
gdjs.FinishCode.GDNewTileMapScoreObjects2.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FinishCode.GDTinyYellowButtonObjects1.length = 0;
gdjs.FinishCode.GDTinyYellowButtonObjects2.length = 0;
gdjs.FinishCode.GDScoreboardObjects1.length = 0;
gdjs.FinishCode.GDScoreboardObjects2.length = 0;
gdjs.FinishCode.GDScoreboard2Objects1.length = 0;
gdjs.FinishCode.GDScoreboard2Objects2.length = 0;
gdjs.FinishCode.GDScoreboard3Objects1.length = 0;
gdjs.FinishCode.GDScoreboard3Objects2.length = 0;
gdjs.FinishCode.GDTransitionObjects1.length = 0;
gdjs.FinishCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['FinishCode'] = gdjs.FinishCode;
