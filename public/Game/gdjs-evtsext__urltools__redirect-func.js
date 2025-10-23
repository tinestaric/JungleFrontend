
if (typeof gdjs.evtsExt__URLTools__Redirect !== "undefined") {
  gdjs.evtsExt__URLTools__Redirect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__URLTools__Redirect = {};
gdjs.evtsExt__URLTools__Redirect.idToCallbackMap = new Map();


gdjs.evtsExt__URLTools__Redirect.userFunc0x13ab690 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
location.replace(eventsFunctionContext.getArgument("to"));

};
gdjs.evtsExt__URLTools__Redirect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__URLTools__Redirect.userFunc0x13ab690(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__URLTools__Redirect.func = function(runtimeScene, to, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("URLTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("URLTools"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "to") return to;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__URLTools__Redirect.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__URLTools__Redirect.registeredGdjsCallbacks = [];