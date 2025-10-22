
if (typeof gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter !== "undefined") {
  gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter = {};
gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.idToCallbackMap = new Map();


gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.userFunc0x8f8050 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const url = new URL(eventsFunctionContext.getArgument("URL"));
url.searchParams.set(
    eventsFunctionContext.getArgument("param"),
    eventsFunctionContext.getArgument("val")
);
eventsFunctionContext.returnValue = url.toString();

};
gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.userFunc0x8f8050(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.func = function(runtimeScene, URL, param, val, parentEventsFunctionContext) {
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
if (argName === "URL") return URL;
if (argName === "param") return param;
if (argName === "val") return val;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__URLTools__ChangeURLQueryStringParameter.registeredGdjsCallbacks = [];