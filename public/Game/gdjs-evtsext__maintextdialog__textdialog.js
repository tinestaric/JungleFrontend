
gdjs.evtsExt__MainTextDialog__TextDialog = gdjs.evtsExt__MainTextDialog__TextDialog || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog = class TextDialog extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.MainTextValue = objectData.content.MainTextValue !== undefined ? objectData.content.MainTextValue : "";
    this._objectData.ShowSkipText = objectData.content.ShowSkipText !== undefined ? objectData.content.ShowSkipText : false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.MainTextValue !== newObjectData.content.MainTextValue)
      this._objectData.MainTextValue = newObjectData.content.MainTextValue;
    if (oldObjectData.content.ShowSkipText !== newObjectData.content.ShowSkipText)
      this._objectData.ShowSkipText = newObjectData.content.ShowSkipText;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getMainTextValue() {
    return this._objectData.MainTextValue !== undefined ? this._objectData.MainTextValue : "";
  }
  _setMainTextValue(newValue) {
    this._objectData.MainTextValue = newValue;
  }
  _getShowSkipText() {
    return this._objectData.ShowSkipText !== undefined ? this._objectData.ShowSkipText : false;
  }
  _setShowSkipText(newValue) {
    this._objectData.ShowSkipText = newValue;
  }
  _toggleShowSkipText() {
    this._setShowSkipText(!this._getShowSkipText());
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDContinueTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDContinueTextObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getMainTextValue(); }}}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDContinueTextObjectsList = [...runtimeScene.getObjects("ContinueText")];
var GDContinueTextObjects = Hashtable.newFrom({"ContinueText": thisGDContinueTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "ContinueText": GDContinueTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "ContinueText": thisGDContinueTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MainTextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MainTextDialog"),
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

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDContinueTextObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDContinueTextObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ContinueText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setMainTextValue(eventsFunctionContext.getArgument("Value"))
}{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getMainTextValue());
}
}{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("");
}
}}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDContinueTextObjectsList = [...runtimeScene.getObjects("ContinueText")];
var GDContinueTextObjects = Hashtable.newFrom({"ContinueText": thisGDContinueTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "ContinueText": GDContinueTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "ContinueText": thisGDContinueTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MainTextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MainTextDialog"),
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

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDContinueTextObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDContinueTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDContinueTextObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1[i].SetMainTextValue(eventsFunctionContext.getArgument("TextToShow"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, eventsFunctionContext.getArgument("TimerName"));
}}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayText = function(TextToShow, TimerName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDContinueTextObjectsList = [...runtimeScene.getObjects("ContinueText")];
var GDContinueTextObjects = Hashtable.newFrom({"ContinueText": thisGDContinueTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "ContinueText": GDContinueTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "ContinueText": thisGDContinueTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MainTextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MainTextDialog"),
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
if (argName === "TextToShow") return TextToShow;
if (argName === "TimerName") return TimerName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDContinueTextObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDContinueTextObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDContinueTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDContinueTextObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShowSkipText();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDContinueTextObjectsList = [...runtimeScene.getObjects("ContinueText")];
var GDContinueTextObjects = Hashtable.newFrom({"ContinueText": thisGDContinueTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "ContinueText": GDContinueTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "ContinueText": thisGDContinueTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MainTextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MainTextDialog"),
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

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDContinueTextObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDContinueTextObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ContinueText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShowSkipText(false)
}{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ContinueText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShowSkipText(true)
}{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("Click to continue");
}
}}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipText = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDContinueTextObjectsList = [...runtimeScene.getObjects("ContinueText")];
var GDContinueTextObjects = Hashtable.newFrom({"ContinueText": thisGDContinueTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "ContinueText": GDContinueTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "ContinueText": thisGDContinueTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MainTextDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MainTextDialog"),
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

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDContinueTextObjects2.length = 0;


return;
}

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("MainTextDialog::TextDialog", gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog);
