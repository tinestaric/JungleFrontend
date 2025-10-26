
if (typeof gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter !== "undefined") {
  gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter = {};
gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.idToCallbackMap = new Map();


gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.userFunc0xcd7800 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const url = new URL(eventsFunctionContext.getArgument("URL"));
url.searchParams.delete(eventsFunctionContext.getArgument("param"));
eventsFunctionContext.returnValue = url.toString();

};
gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.userFunc0xcd7800(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.func = function(runtimeScene, URL, param, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__URLTools__RemoveURLQueryStringParameter.registeredGdjsCallbacks = [];