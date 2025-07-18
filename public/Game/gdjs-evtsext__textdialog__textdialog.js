
gdjs.evtsExt__TextDialog__TextDialog = gdjs.evtsExt__TextDialog__TextDialog || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__TextDialog__TextDialog.TextDialog = class TextDialog extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.TextPlaceholder = objectData.content.TextPlaceholder !== undefined ? objectData.content.TextPlaceholder : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.TextPlaceholder !== newObjectData.content.TextPlaceholder)
      this._objectData.TextPlaceholder = newObjectData.content.TextPlaceholder;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getTextPlaceholder() {
    return this._objectData.TextPlaceholder !== undefined ? this._objectData.TextPlaceholder : "";
  }
  _setTextPlaceholder(newValue) {
    this._objectData.TextPlaceholder = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext = {};
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDObjectObjects1= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDObjectObjects2= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDBoulder_9595textObjects1= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDBoulder_9595textObjects2= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDTextBackgroundObjects1= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDTextBackgroundObjects2= [];


gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getTextPlaceholder(); }}}

}


};

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholder = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBoulder_9595textObjectsList = [...runtimeScene.getObjects("Boulder_text")];
var GDBoulder_9595textObjects = Hashtable.newFrom({"Boulder_text": thisGDBoulder_9595textObjectsList});
var thisGDTextBackgroundObjectsList = [...runtimeScene.getObjects("TextBackground")];
var GDTextBackgroundObjects = Hashtable.newFrom({"TextBackground": thisGDTextBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Boulder_text": GDBoulder_9595textObjects
, "TextBackground": GDTextBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Boulder_text": thisGDBoulder_9595textObjectsList
, "TextBackground": thisGDTextBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextDialog"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDBoulder_9595textObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDBoulder_9595textObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDTextBackgroundObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDTextBackgroundObjects2.length = 0;

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDBoulder_9595textObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDBoulder_9595textObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDTextBackgroundObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.TextPlaceholderContext.GDTextBackgroundObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext = {};
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDObjectObjects1= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDObjectObjects2= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects1= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects2= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDTextBackgroundObjects1= [];
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDTextBackgroundObjects2= [];


gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Boulder_text"), gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setTextPlaceholder(eventsFunctionContext.getArgument("Value"))
}{for(var i = 0, len = gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getTextPlaceholder());
}
}}

}


};

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholder = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBoulder_9595textObjectsList = [...runtimeScene.getObjects("Boulder_text")];
var GDBoulder_9595textObjects = Hashtable.newFrom({"Boulder_text": thisGDBoulder_9595textObjectsList});
var thisGDTextBackgroundObjectsList = [...runtimeScene.getObjects("TextBackground")];
var GDTextBackgroundObjects = Hashtable.newFrom({"TextBackground": thisGDTextBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Boulder_text": GDBoulder_9595textObjects
, "TextBackground": GDTextBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Boulder_text": thisGDBoulder_9595textObjectsList
, "TextBackground": thisGDTextBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextDialog"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDTextBackgroundObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDTextBackgroundObjects2.length = 0;

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDBoulder_9595textObjects2.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDTextBackgroundObjects1.length = 0;
gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.SetTextPlaceholderContext.GDTextBackgroundObjects2.length = 0;


return;
}

gdjs.evtsExt__TextDialog__TextDialog.TextDialog.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("TextDialog::TextDialog", gdjs.evtsExt__TextDialog__TextDialog.TextDialog);
