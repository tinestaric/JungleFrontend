
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon = gdjs.evtsExt__InventoryIconDisplay__InventoryIcon || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon = class InventoryIcon extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Name = objectData.content.Name !== undefined ? objectData.content.Name : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Name !== newObjectData.content.Name)
      this._objectData.Name = newObjectData.content.Name;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getName() {
    return this._objectData.Name !== undefined ? this._objectData.Name : "";
  }
  _setName(newValue) {
    this._objectData.Name = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext = {};
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects2= [];


gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getName(); }}}

}


};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.Name = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDInventoryIconObjectsList = [...runtimeScene.getObjects("InventoryIcon")];
var GDInventoryIconObjects = Hashtable.newFrom({"InventoryIcon": thisGDInventoryIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "InventoryIcon": GDInventoryIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "InventoryIcon": thisGDInventoryIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InventoryIconDisplay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InventoryIconDisplay"),
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

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects2.length = 0;

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext = {};
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects2= [];


gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("InventoryIcon"), gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setName(eventsFunctionContext.getArgument("Value"))
}{for(var i = 0, len = gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetName = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDInventoryIconObjectsList = [...runtimeScene.getObjects("InventoryIcon")];
var GDInventoryIconObjects = Hashtable.newFrom({"InventoryIcon": thisGDInventoryIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "InventoryIcon": GDInventoryIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "InventoryIcon": thisGDInventoryIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InventoryIconDisplay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InventoryIconDisplay"),
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

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects2.length = 0;

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects2.length = 0;


return;
}

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("InventoryIconDisplay::InventoryIcon", gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon);
