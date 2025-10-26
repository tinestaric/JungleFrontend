
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
    this._objectData.MustWait = objectData.content.MustWait !== undefined ? objectData.content.MustWait : false;
    this._objectData.TextIndex = objectData.content.TextIndex !== undefined ? objectData.content.TextIndex : Number("") || 0;
    

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
    if (oldObjectData.content.MustWait !== newObjectData.content.MustWait)
      this._objectData.MustWait = newObjectData.content.MustWait;
    if (oldObjectData.content.TextIndex !== newObjectData.content.TextIndex)
      this._objectData.TextIndex = newObjectData.content.TextIndex;

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
  _getMustWait() {
    return this._objectData.MustWait !== undefined ? this._objectData.MustWait : false;
  }
  _setMustWait(newValue) {
    this._objectData.MustWait = newValue;
  }
  _toggleMustWait() {
    this._setMustWait(!this._getMustWait());
  }
  _getTextIndex() {
    return this._objectData.TextIndex !== undefined ? this._objectData.TextIndex : Number("") || 0;
  }
  _setTextIndex(newValue) {
    this._objectData.TextIndex = newValue;
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
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getMainTextValue();}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MainTextValueContext.GDFingerPressObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FingerPress"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setMainTextValue(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtTools.string.strReplaceAll(eventsFunctionContext.getObjects("Object")[0]._getMainTextValue(), "<br>", gdjs.evtTools.string.newLine()));
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1[i].setVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1[i].getVariables().get("IsDoneTyping"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1[i].SetMustWait(false, eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMainTextValueContext.GDFingerPressObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects3= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1, gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2[i].getVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2[i].getVariables().get("IsDoneTyping"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


};gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTyping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects3.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDMainTextObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDTextBackgroundBlackObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.IsDoneTypingContext.GDFingerPressObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1[i].SetMainTextValue(eventsFunctionContext.getArgument("TextToShow"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, eventsFunctionContext.getArgument("TimerName"));
}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayText = function(TextToShow, TimerName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.DisplayTextContext.GDFingerPressObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, eventsFunctionContext.getArgument("TimerName"));
}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBox = function(TimerName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
if (argName === "TimerName") return TimerName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HideTextBoxContext.GDFingerPressObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects3= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1, gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2[i].getVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2[i].getVariables().get("IsDoneTyping"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects2[i].HideTextBox(eventsFunctionContext.getArgument("TimerName"), eventsFunctionContext);
}
}
}

}


{

/* Reuse gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getVariables().get("IsDoneTyping"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).RestartFromBeginning(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).ShowFullText(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].setVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getVariables().get("IsDoneTyping"), true);
}
}
}

}


};gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects1[i].HideTextBox(eventsFunctionContext.getArgument("TimerName"), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClick = function(TimerName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
if (argName === "TimerName") return TimerName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects3.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDMainTextObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDTextBackgroundBlackObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickContext.GDFingerPressObjects3.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects3= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects3= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1, gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2[i].getVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2[i].getVariables().get("IsDoneTyping"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2[i].SetTextIndex(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2[i].TextIndex(eventsFunctionContext) + (1), eventsFunctionContext);
}
}
}

}


{

/* Reuse gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getVariables().get("IsDoneTyping"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).RestartFromBeginning(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).ShowFullText(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].setVariableBoolean(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getVariables().get("IsDoneTyping"), true);
}
}
}

}


};gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1[i].SetTextIndex(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1[i].TextIndex(eventsFunctionContext) + (1), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MainText"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[k] = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinal = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects3.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDMainTextObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDTextBackgroundBlackObjects3.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.HandleClickFinalContext.GDFingerPressObjects3.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShowSkipText();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.ShowSkipTextContext.GDFingerPressObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FingerPress"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShowSkipText(false)
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FingerPress"), gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShowSkipText(true)
}
{for(var i = 0, len = gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1[i].hide(false);
}
}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipText = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetShowSkipTextContext.GDFingerPressObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getMustWait();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWait = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.MustWaitContext.GDFingerPressObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setMustWait(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setMustWait(true)
}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWait = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetMustWaitContext.GDFingerPressObjects2.length = 0;


return;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getTextIndex();}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndex = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.TextIndexContext.GDFingerPressObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext = {};
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.idToCallbackMap = new Map();
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDObjectObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDMainTextObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDMainTextObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDTextBackgroundBlackObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDTextBackgroundBlackObjects2= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDFingerPressObjects1= [];
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDFingerPressObjects2= [];


gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setTextIndex(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndex = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDMainTextObjectsList = [...runtimeScene.getObjects("MainText")];
var GDMainTextObjects = Hashtable.newFrom({"MainText": thisGDMainTextObjectsList});
var thisGDTextBackgroundBlackObjectsList = [...runtimeScene.getObjects("TextBackgroundBlack")];
var GDTextBackgroundBlackObjects = Hashtable.newFrom({"TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList});
var thisGDFingerPressObjectsList = [...runtimeScene.getObjects("FingerPress")];
var GDFingerPressObjects = Hashtable.newFrom({"FingerPress": thisGDFingerPressObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MainText": GDMainTextObjects
, "TextBackgroundBlack": GDTextBackgroundBlackObjects
, "FingerPress": GDFingerPressObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "MainText": thisGDMainTextObjectsList
, "TextBackgroundBlack": thisGDTextBackgroundBlackObjectsList
, "FingerPress": thisGDFingerPressObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDFingerPressObjects2.length = 0;

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDMainTextObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDMainTextObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDTextBackgroundBlackObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDTextBackgroundBlackObjects2.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDFingerPressObjects1.length = 0;
gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.SetTextIndexContext.GDFingerPressObjects2.length = 0;


return;
}

gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("MainTextDialog::TextDialog", gdjs.evtsExt__MainTextDialog__TextDialog.TextDialog);
