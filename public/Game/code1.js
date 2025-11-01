gdjs.OverworldCode = {};
gdjs.OverworldCode.localVariables = [];
gdjs.OverworldCode.idToCallbackMap = new Map();
gdjs.OverworldCode.forEachIndex2 = 0;

gdjs.OverworldCode.forEachIndex3 = 0;

gdjs.OverworldCode.forEachIndex4 = 0;

gdjs.OverworldCode.forEachIndex5 = 0;

gdjs.OverworldCode.forEachObjects2 = [];

gdjs.OverworldCode.forEachObjects3 = [];

gdjs.OverworldCode.forEachObjects4 = [];

gdjs.OverworldCode.forEachObjects5 = [];

gdjs.OverworldCode.forEachTemporary2 = null;

gdjs.OverworldCode.forEachTemporary3 = null;

gdjs.OverworldCode.forEachTemporary4 = null;

gdjs.OverworldCode.forEachTemporary5 = null;

gdjs.OverworldCode.forEachTotalCount2 = 0;

gdjs.OverworldCode.forEachTotalCount3 = 0;

gdjs.OverworldCode.forEachTotalCount4 = 0;

gdjs.OverworldCode.forEachTotalCount5 = 0;

gdjs.OverworldCode.GDTextDialogObjects1= [];
gdjs.OverworldCode.GDTextDialogObjects2= [];
gdjs.OverworldCode.GDTextDialogObjects3= [];
gdjs.OverworldCode.GDTextDialogObjects4= [];
gdjs.OverworldCode.GDTextDialogObjects5= [];
gdjs.OverworldCode.GDTextDialogObjects6= [];
gdjs.OverworldCode.GDTextDialogObjects7= [];
gdjs.OverworldCode.GDPlayerObjects1= [];
gdjs.OverworldCode.GDPlayerObjects2= [];
gdjs.OverworldCode.GDPlayerObjects3= [];
gdjs.OverworldCode.GDPlayerObjects4= [];
gdjs.OverworldCode.GDPlayerObjects5= [];
gdjs.OverworldCode.GDPlayerObjects6= [];
gdjs.OverworldCode.GDPlayerObjects7= [];
gdjs.OverworldCode.GDNPC_95951Objects1= [];
gdjs.OverworldCode.GDNPC_95951Objects2= [];
gdjs.OverworldCode.GDNPC_95951Objects3= [];
gdjs.OverworldCode.GDNPC_95951Objects4= [];
gdjs.OverworldCode.GDNPC_95951Objects5= [];
gdjs.OverworldCode.GDNPC_95951Objects6= [];
gdjs.OverworldCode.GDNPC_95951Objects7= [];
gdjs.OverworldCode.GDTree1Objects1= [];
gdjs.OverworldCode.GDTree1Objects2= [];
gdjs.OverworldCode.GDTree1Objects3= [];
gdjs.OverworldCode.GDTree1Objects4= [];
gdjs.OverworldCode.GDTree1Objects5= [];
gdjs.OverworldCode.GDTree1Objects6= [];
gdjs.OverworldCode.GDTree1Objects7= [];
gdjs.OverworldCode.GDTree2Objects1= [];
gdjs.OverworldCode.GDTree2Objects2= [];
gdjs.OverworldCode.GDTree2Objects3= [];
gdjs.OverworldCode.GDTree2Objects4= [];
gdjs.OverworldCode.GDTree2Objects5= [];
gdjs.OverworldCode.GDTree2Objects6= [];
gdjs.OverworldCode.GDTree2Objects7= [];
gdjs.OverworldCode.GDBush1Objects1= [];
gdjs.OverworldCode.GDBush1Objects2= [];
gdjs.OverworldCode.GDBush1Objects3= [];
gdjs.OverworldCode.GDBush1Objects4= [];
gdjs.OverworldCode.GDBush1Objects5= [];
gdjs.OverworldCode.GDBush1Objects6= [];
gdjs.OverworldCode.GDBush1Objects7= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects1= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects2= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects3= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects4= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects5= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects6= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects7= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects1= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects2= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects3= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects4= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects5= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects6= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects7= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects1= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects2= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects3= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects4= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects5= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects6= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects7= [];
gdjs.OverworldCode.GDNPC_95952Objects1= [];
gdjs.OverworldCode.GDNPC_95952Objects2= [];
gdjs.OverworldCode.GDNPC_95952Objects3= [];
gdjs.OverworldCode.GDNPC_95952Objects4= [];
gdjs.OverworldCode.GDNPC_95952Objects5= [];
gdjs.OverworldCode.GDNPC_95952Objects6= [];
gdjs.OverworldCode.GDNPC_95952Objects7= [];
gdjs.OverworldCode.GDInventorySlotObjects1= [];
gdjs.OverworldCode.GDInventorySlotObjects2= [];
gdjs.OverworldCode.GDInventorySlotObjects3= [];
gdjs.OverworldCode.GDInventorySlotObjects4= [];
gdjs.OverworldCode.GDInventorySlotObjects5= [];
gdjs.OverworldCode.GDInventorySlotObjects6= [];
gdjs.OverworldCode.GDInventorySlotObjects7= [];
gdjs.OverworldCode.GDBootsObjects1= [];
gdjs.OverworldCode.GDBootsObjects2= [];
gdjs.OverworldCode.GDBootsObjects3= [];
gdjs.OverworldCode.GDBootsObjects4= [];
gdjs.OverworldCode.GDBootsObjects5= [];
gdjs.OverworldCode.GDBootsObjects6= [];
gdjs.OverworldCode.GDBootsObjects7= [];
gdjs.OverworldCode.GDHammerObjects1= [];
gdjs.OverworldCode.GDHammerObjects2= [];
gdjs.OverworldCode.GDHammerObjects3= [];
gdjs.OverworldCode.GDHammerObjects4= [];
gdjs.OverworldCode.GDHammerObjects5= [];
gdjs.OverworldCode.GDHammerObjects6= [];
gdjs.OverworldCode.GDHammerObjects7= [];
gdjs.OverworldCode.GDBackpackObjects1= [];
gdjs.OverworldCode.GDBackpackObjects2= [];
gdjs.OverworldCode.GDBackpackObjects3= [];
gdjs.OverworldCode.GDBackpackObjects4= [];
gdjs.OverworldCode.GDBackpackObjects5= [];
gdjs.OverworldCode.GDBackpackObjects6= [];
gdjs.OverworldCode.GDBackpackObjects7= [];
gdjs.OverworldCode.GDInventoryIconObjects1= [];
gdjs.OverworldCode.GDInventoryIconObjects2= [];
gdjs.OverworldCode.GDInventoryIconObjects3= [];
gdjs.OverworldCode.GDInventoryIconObjects4= [];
gdjs.OverworldCode.GDInventoryIconObjects5= [];
gdjs.OverworldCode.GDInventoryIconObjects6= [];
gdjs.OverworldCode.GDInventoryIconObjects7= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects2= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects3= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects4= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects5= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects6= [];
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects7= [];
gdjs.OverworldCode.GDNameTextObjects1= [];
gdjs.OverworldCode.GDNameTextObjects2= [];
gdjs.OverworldCode.GDNameTextObjects3= [];
gdjs.OverworldCode.GDNameTextObjects4= [];
gdjs.OverworldCode.GDNameTextObjects5= [];
gdjs.OverworldCode.GDNameTextObjects6= [];
gdjs.OverworldCode.GDNameTextObjects7= [];
gdjs.OverworldCode.GDTimerObjects1= [];
gdjs.OverworldCode.GDTimerObjects2= [];
gdjs.OverworldCode.GDTimerObjects3= [];
gdjs.OverworldCode.GDTimerObjects4= [];
gdjs.OverworldCode.GDTimerObjects5= [];
gdjs.OverworldCode.GDTimerObjects6= [];
gdjs.OverworldCode.GDTimerObjects7= [];
gdjs.OverworldCode.GDTree3Objects1= [];
gdjs.OverworldCode.GDTree3Objects2= [];
gdjs.OverworldCode.GDTree3Objects3= [];
gdjs.OverworldCode.GDTree3Objects4= [];
gdjs.OverworldCode.GDTree3Objects5= [];
gdjs.OverworldCode.GDTree3Objects6= [];
gdjs.OverworldCode.GDTree3Objects7= [];
gdjs.OverworldCode.GDTree4Objects1= [];
gdjs.OverworldCode.GDTree4Objects2= [];
gdjs.OverworldCode.GDTree4Objects3= [];
gdjs.OverworldCode.GDTree4Objects4= [];
gdjs.OverworldCode.GDTree4Objects5= [];
gdjs.OverworldCode.GDTree4Objects6= [];
gdjs.OverworldCode.GDTree4Objects7= [];
gdjs.OverworldCode.GDSign_9595LeftObjects1= [];
gdjs.OverworldCode.GDSign_9595LeftObjects2= [];
gdjs.OverworldCode.GDSign_9595LeftObjects3= [];
gdjs.OverworldCode.GDSign_9595LeftObjects4= [];
gdjs.OverworldCode.GDSign_9595LeftObjects5= [];
gdjs.OverworldCode.GDSign_9595LeftObjects6= [];
gdjs.OverworldCode.GDSign_9595LeftObjects7= [];
gdjs.OverworldCode.GDSign_9595RightObjects1= [];
gdjs.OverworldCode.GDSign_9595RightObjects2= [];
gdjs.OverworldCode.GDSign_9595RightObjects3= [];
gdjs.OverworldCode.GDSign_9595RightObjects4= [];
gdjs.OverworldCode.GDSign_9595RightObjects5= [];
gdjs.OverworldCode.GDSign_9595RightObjects6= [];
gdjs.OverworldCode.GDSign_9595RightObjects7= [];
gdjs.OverworldCode.GDNPC_95953Objects1= [];
gdjs.OverworldCode.GDNPC_95953Objects2= [];
gdjs.OverworldCode.GDNPC_95953Objects3= [];
gdjs.OverworldCode.GDNPC_95953Objects4= [];
gdjs.OverworldCode.GDNPC_95953Objects5= [];
gdjs.OverworldCode.GDNPC_95953Objects6= [];
gdjs.OverworldCode.GDNPC_95953Objects7= [];
gdjs.OverworldCode.GDServer1Objects1= [];
gdjs.OverworldCode.GDServer1Objects2= [];
gdjs.OverworldCode.GDServer1Objects3= [];
gdjs.OverworldCode.GDServer1Objects4= [];
gdjs.OverworldCode.GDServer1Objects5= [];
gdjs.OverworldCode.GDServer1Objects6= [];
gdjs.OverworldCode.GDServer1Objects7= [];
gdjs.OverworldCode.GDBush2Objects1= [];
gdjs.OverworldCode.GDBush2Objects2= [];
gdjs.OverworldCode.GDBush2Objects3= [];
gdjs.OverworldCode.GDBush2Objects4= [];
gdjs.OverworldCode.GDBush2Objects5= [];
gdjs.OverworldCode.GDBush2Objects6= [];
gdjs.OverworldCode.GDBush2Objects7= [];
gdjs.OverworldCode.GDStone1Objects1= [];
gdjs.OverworldCode.GDStone1Objects2= [];
gdjs.OverworldCode.GDStone1Objects3= [];
gdjs.OverworldCode.GDStone1Objects4= [];
gdjs.OverworldCode.GDStone1Objects5= [];
gdjs.OverworldCode.GDStone1Objects6= [];
gdjs.OverworldCode.GDStone1Objects7= [];
gdjs.OverworldCode.GDStone2Objects1= [];
gdjs.OverworldCode.GDStone2Objects2= [];
gdjs.OverworldCode.GDStone2Objects3= [];
gdjs.OverworldCode.GDStone2Objects4= [];
gdjs.OverworldCode.GDStone2Objects5= [];
gdjs.OverworldCode.GDStone2Objects6= [];
gdjs.OverworldCode.GDStone2Objects7= [];
gdjs.OverworldCode.GDServer2Objects1= [];
gdjs.OverworldCode.GDServer2Objects2= [];
gdjs.OverworldCode.GDServer2Objects3= [];
gdjs.OverworldCode.GDServer2Objects4= [];
gdjs.OverworldCode.GDServer2Objects5= [];
gdjs.OverworldCode.GDServer2Objects6= [];
gdjs.OverworldCode.GDServer2Objects7= [];
gdjs.OverworldCode.GDServer3Objects1= [];
gdjs.OverworldCode.GDServer3Objects2= [];
gdjs.OverworldCode.GDServer3Objects3= [];
gdjs.OverworldCode.GDServer3Objects4= [];
gdjs.OverworldCode.GDServer3Objects5= [];
gdjs.OverworldCode.GDServer3Objects6= [];
gdjs.OverworldCode.GDServer3Objects7= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects1= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects2= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects3= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects4= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects5= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects6= [];
gdjs.OverworldCode.GDAxeSpawnPointObjects7= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects1= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects2= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects3= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects4= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects5= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects6= [];
gdjs.OverworldCode.GDBootsSpawnPointObjects7= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects1= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects2= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects3= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects4= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects5= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects6= [];
gdjs.OverworldCode.GDBackpackSpawnPointObjects7= [];
gdjs.OverworldCode.GDServerSpawnPointObjects1= [];
gdjs.OverworldCode.GDServerSpawnPointObjects2= [];
gdjs.OverworldCode.GDServerSpawnPointObjects3= [];
gdjs.OverworldCode.GDServerSpawnPointObjects4= [];
gdjs.OverworldCode.GDServerSpawnPointObjects5= [];
gdjs.OverworldCode.GDServerSpawnPointObjects6= [];
gdjs.OverworldCode.GDServerSpawnPointObjects7= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects1= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects2= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects3= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects4= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects5= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects6= [];
gdjs.OverworldCode.GDBottleSpawnPointObjects7= [];
gdjs.OverworldCode.GDBottleObjects1= [];
gdjs.OverworldCode.GDBottleObjects2= [];
gdjs.OverworldCode.GDBottleObjects3= [];
gdjs.OverworldCode.GDBottleObjects4= [];
gdjs.OverworldCode.GDBottleObjects5= [];
gdjs.OverworldCode.GDBottleObjects6= [];
gdjs.OverworldCode.GDBottleObjects7= [];
gdjs.OverworldCode.GDBridgeObjects1= [];
gdjs.OverworldCode.GDBridgeObjects2= [];
gdjs.OverworldCode.GDBridgeObjects3= [];
gdjs.OverworldCode.GDBridgeObjects4= [];
gdjs.OverworldCode.GDBridgeObjects5= [];
gdjs.OverworldCode.GDBridgeObjects6= [];
gdjs.OverworldCode.GDBridgeObjects7= [];
gdjs.OverworldCode.GDRuggedTerrainObjects1= [];
gdjs.OverworldCode.GDRuggedTerrainObjects2= [];
gdjs.OverworldCode.GDRuggedTerrainObjects3= [];
gdjs.OverworldCode.GDRuggedTerrainObjects4= [];
gdjs.OverworldCode.GDRuggedTerrainObjects5= [];
gdjs.OverworldCode.GDRuggedTerrainObjects6= [];
gdjs.OverworldCode.GDRuggedTerrainObjects7= [];
gdjs.OverworldCode.GDCableButtonObjects1= [];
gdjs.OverworldCode.GDCableButtonObjects2= [];
gdjs.OverworldCode.GDCableButtonObjects3= [];
gdjs.OverworldCode.GDCableButtonObjects4= [];
gdjs.OverworldCode.GDCableButtonObjects5= [];
gdjs.OverworldCode.GDCableButtonObjects6= [];
gdjs.OverworldCode.GDCableButtonObjects7= [];
gdjs.OverworldCode.GDCableObjects1= [];
gdjs.OverworldCode.GDCableObjects2= [];
gdjs.OverworldCode.GDCableObjects3= [];
gdjs.OverworldCode.GDCableObjects4= [];
gdjs.OverworldCode.GDCableObjects5= [];
gdjs.OverworldCode.GDCableObjects6= [];
gdjs.OverworldCode.GDCableObjects7= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects1= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects2= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects3= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects4= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects5= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects6= [];
gdjs.OverworldCode.GDButtonSpawnpointObjects7= [];
gdjs.OverworldCode.GDBatteriesObjects1= [];
gdjs.OverworldCode.GDBatteriesObjects2= [];
gdjs.OverworldCode.GDBatteriesObjects3= [];
gdjs.OverworldCode.GDBatteriesObjects4= [];
gdjs.OverworldCode.GDBatteriesObjects5= [];
gdjs.OverworldCode.GDBatteriesObjects6= [];
gdjs.OverworldCode.GDBatteriesObjects7= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects1= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects2= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects3= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects4= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects5= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects6= [];
gdjs.OverworldCode.GDBatterySpawnPointObjects7= [];
gdjs.OverworldCode.GDServerButtonObjects1= [];
gdjs.OverworldCode.GDServerButtonObjects2= [];
gdjs.OverworldCode.GDServerButtonObjects3= [];
gdjs.OverworldCode.GDServerButtonObjects4= [];
gdjs.OverworldCode.GDServerButtonObjects5= [];
gdjs.OverworldCode.GDServerButtonObjects6= [];
gdjs.OverworldCode.GDServerButtonObjects7= [];
gdjs.OverworldCode.GDBush3Objects1= [];
gdjs.OverworldCode.GDBush3Objects2= [];
gdjs.OverworldCode.GDBush3Objects3= [];
gdjs.OverworldCode.GDBush3Objects4= [];
gdjs.OverworldCode.GDBush3Objects5= [];
gdjs.OverworldCode.GDBush3Objects6= [];
gdjs.OverworldCode.GDBush3Objects7= [];
gdjs.OverworldCode.GDTree5Objects1= [];
gdjs.OverworldCode.GDTree5Objects2= [];
gdjs.OverworldCode.GDTree5Objects3= [];
gdjs.OverworldCode.GDTree5Objects4= [];
gdjs.OverworldCode.GDTree5Objects5= [];
gdjs.OverworldCode.GDTree5Objects6= [];
gdjs.OverworldCode.GDTree5Objects7= [];
gdjs.OverworldCode.GDTree6Objects1= [];
gdjs.OverworldCode.GDTree6Objects2= [];
gdjs.OverworldCode.GDTree6Objects3= [];
gdjs.OverworldCode.GDTree6Objects4= [];
gdjs.OverworldCode.GDTree6Objects5= [];
gdjs.OverworldCode.GDTree6Objects6= [];
gdjs.OverworldCode.GDTree6Objects7= [];
gdjs.OverworldCode.GDTree7Objects1= [];
gdjs.OverworldCode.GDTree7Objects2= [];
gdjs.OverworldCode.GDTree7Objects3= [];
gdjs.OverworldCode.GDTree7Objects4= [];
gdjs.OverworldCode.GDTree7Objects5= [];
gdjs.OverworldCode.GDTree7Objects6= [];
gdjs.OverworldCode.GDTree7Objects7= [];
gdjs.OverworldCode.GDBush4Objects1= [];
gdjs.OverworldCode.GDBush4Objects2= [];
gdjs.OverworldCode.GDBush4Objects3= [];
gdjs.OverworldCode.GDBush4Objects4= [];
gdjs.OverworldCode.GDBush4Objects5= [];
gdjs.OverworldCode.GDBush4Objects6= [];
gdjs.OverworldCode.GDBush4Objects7= [];
gdjs.OverworldCode.GDSign_9595BottleObjects1= [];
gdjs.OverworldCode.GDSign_9595BottleObjects2= [];
gdjs.OverworldCode.GDSign_9595BottleObjects3= [];
gdjs.OverworldCode.GDSign_9595BottleObjects4= [];
gdjs.OverworldCode.GDSign_9595BottleObjects5= [];
gdjs.OverworldCode.GDSign_9595BottleObjects6= [];
gdjs.OverworldCode.GDSign_9595BottleObjects7= [];
gdjs.OverworldCode.GDSign_9595BootsObjects1= [];
gdjs.OverworldCode.GDSign_9595BootsObjects2= [];
gdjs.OverworldCode.GDSign_9595BootsObjects3= [];
gdjs.OverworldCode.GDSign_9595BootsObjects4= [];
gdjs.OverworldCode.GDSign_9595BootsObjects5= [];
gdjs.OverworldCode.GDSign_9595BootsObjects6= [];
gdjs.OverworldCode.GDSign_9595BootsObjects7= [];
gdjs.OverworldCode.GDSign_9595BagObjects1= [];
gdjs.OverworldCode.GDSign_9595BagObjects2= [];
gdjs.OverworldCode.GDSign_9595BagObjects3= [];
gdjs.OverworldCode.GDSign_9595BagObjects4= [];
gdjs.OverworldCode.GDSign_9595BagObjects5= [];
gdjs.OverworldCode.GDSign_9595BagObjects6= [];
gdjs.OverworldCode.GDSign_9595BagObjects7= [];
gdjs.OverworldCode.GDCorner1Objects1= [];
gdjs.OverworldCode.GDCorner1Objects2= [];
gdjs.OverworldCode.GDCorner1Objects3= [];
gdjs.OverworldCode.GDCorner1Objects4= [];
gdjs.OverworldCode.GDCorner1Objects5= [];
gdjs.OverworldCode.GDCorner1Objects6= [];
gdjs.OverworldCode.GDCorner1Objects7= [];
gdjs.OverworldCode.GDCorner2Objects1= [];
gdjs.OverworldCode.GDCorner2Objects2= [];
gdjs.OverworldCode.GDCorner2Objects3= [];
gdjs.OverworldCode.GDCorner2Objects4= [];
gdjs.OverworldCode.GDCorner2Objects5= [];
gdjs.OverworldCode.GDCorner2Objects6= [];
gdjs.OverworldCode.GDCorner2Objects7= [];
gdjs.OverworldCode.GDCorner3Objects1= [];
gdjs.OverworldCode.GDCorner3Objects2= [];
gdjs.OverworldCode.GDCorner3Objects3= [];
gdjs.OverworldCode.GDCorner3Objects4= [];
gdjs.OverworldCode.GDCorner3Objects5= [];
gdjs.OverworldCode.GDCorner3Objects6= [];
gdjs.OverworldCode.GDCorner3Objects7= [];
gdjs.OverworldCode.GDCorner4Objects1= [];
gdjs.OverworldCode.GDCorner4Objects2= [];
gdjs.OverworldCode.GDCorner4Objects3= [];
gdjs.OverworldCode.GDCorner4Objects4= [];
gdjs.OverworldCode.GDCorner4Objects5= [];
gdjs.OverworldCode.GDCorner4Objects6= [];
gdjs.OverworldCode.GDCorner4Objects7= [];
gdjs.OverworldCode.GDMessageAreaObjects1= [];
gdjs.OverworldCode.GDMessageAreaObjects2= [];
gdjs.OverworldCode.GDMessageAreaObjects3= [];
gdjs.OverworldCode.GDMessageAreaObjects4= [];
gdjs.OverworldCode.GDMessageAreaObjects5= [];
gdjs.OverworldCode.GDMessageAreaObjects6= [];
gdjs.OverworldCode.GDMessageAreaObjects7= [];
gdjs.OverworldCode.GDTransitionObjects1= [];
gdjs.OverworldCode.GDTransitionObjects2= [];
gdjs.OverworldCode.GDTransitionObjects3= [];
gdjs.OverworldCode.GDTransitionObjects4= [];
gdjs.OverworldCode.GDTransitionObjects5= [];
gdjs.OverworldCode.GDTransitionObjects6= [];
gdjs.OverworldCode.GDTransitionObjects7= [];


gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAxeSpawnPointObjects3Objects = Hashtable.newFrom({"AxeSpawnPoint": gdjs.OverworldCode.GDAxeSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDHammerObjects3Objects = Hashtable.newFrom({"Hammer": gdjs.OverworldCode.GDHammerObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBootsSpawnPointObjects3Objects = Hashtable.newFrom({"BootsSpawnPoint": gdjs.OverworldCode.GDBootsSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBootsObjects3Objects = Hashtable.newFrom({"Boots": gdjs.OverworldCode.GDBootsObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackSpawnPointObjects3Objects = Hashtable.newFrom({"BackpackSpawnPoint": gdjs.OverworldCode.GDBackpackSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackObjects3Objects = Hashtable.newFrom({"Backpack": gdjs.OverworldCode.GDBackpackObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBottleSpawnPointObjects3Objects = Hashtable.newFrom({"BottleSpawnPoint": gdjs.OverworldCode.GDBottleSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBottleObjects3Objects = Hashtable.newFrom({"Bottle": gdjs.OverworldCode.GDBottleObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAxeSpawnPointObjects3Objects = Hashtable.newFrom({"AxeSpawnPoint": gdjs.OverworldCode.GDAxeSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBootsSpawnPointObjects3Objects = Hashtable.newFrom({"BootsSpawnPoint": gdjs.OverworldCode.GDBootsSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackSpawnPointObjects3Objects = Hashtable.newFrom({"BackpackSpawnPoint": gdjs.OverworldCode.GDBackpackSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBottleSpawnPointObjects3Objects = Hashtable.newFrom({"BottleSpawnPoint": gdjs.OverworldCode.GDBottleSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerSpawnPointObjects3Objects = Hashtable.newFrom({"ServerSpawnPoint": gdjs.OverworldCode.GDServerSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer1Objects3Objects = Hashtable.newFrom({"Server1": gdjs.OverworldCode.GDServer1Objects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBatteriesObjects5Objects = Hashtable.newFrom({"Batteries": gdjs.OverworldCode.GDBatteriesObjects5});
gdjs.OverworldCode.eventsList0 = function(runtimeScene) {

};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBatterySpawnPointObjects3Objects = Hashtable.newFrom({"BatterySpawnPoint": gdjs.OverworldCode.GDBatterySpawnPointObjects3});
gdjs.OverworldCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BatterySpawnPoint"), gdjs.OverworldCode.GDBatterySpawnPointObjects4);

for (gdjs.OverworldCode.forEachIndex5 = 0;gdjs.OverworldCode.forEachIndex5 < gdjs.OverworldCode.GDBatterySpawnPointObjects4.length;++gdjs.OverworldCode.forEachIndex5) {
gdjs.copyArray(gdjs.OverworldCode.GDServerSpawnPointObjects3, gdjs.OverworldCode.GDServerSpawnPointObjects5);

gdjs.OverworldCode.GDBatteriesObjects5.length = 0;

gdjs.OverworldCode.GDBatterySpawnPointObjects5.length = 0;


gdjs.OverworldCode.forEachTemporary5 = gdjs.OverworldCode.GDBatterySpawnPointObjects4[gdjs.OverworldCode.forEachIndex5];
gdjs.OverworldCode.GDBatterySpawnPointObjects5.push(gdjs.OverworldCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDServerSpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects5[0].getVariables()).getFromIndex(1).getAsNumber() == ((gdjs.OverworldCode.GDBatterySpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDBatterySpawnPointObjects5[0].getVariables()).getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBatteriesObjects5Objects, (( gdjs.OverworldCode.GDBatterySpawnPointObjects5.length === 0 ) ? 0 :gdjs.OverworldCode.GDBatterySpawnPointObjects5[0].getPointX("")), (( gdjs.OverworldCode.GDBatterySpawnPointObjects5.length === 0 ) ? 0 :gdjs.OverworldCode.GDBatterySpawnPointObjects5[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDBatteriesObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDBatteriesObjects5[i].getBehavior("Scale").setScale(0.5);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BatterySpawnPoint"), gdjs.OverworldCode.GDBatterySpawnPointObjects3);
/* Reuse gdjs.OverworldCode.GDServerSpawnPointObjects3 */
{for(var i = 0, len = gdjs.OverworldCode.GDServerSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBatterySpawnPointObjects3Objects);
}
{for(var i = 0, len = gdjs.OverworldCode.GDBatterySpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBatterySpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerSpawnPointObjects3Objects = Hashtable.newFrom({"ServerSpawnPoint": gdjs.OverworldCode.GDServerSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer2Objects3Objects = Hashtable.newFrom({"Server2": gdjs.OverworldCode.GDServer2Objects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCableButtonObjects5Objects = Hashtable.newFrom({"CableButton": gdjs.OverworldCode.GDCableButtonObjects5});
gdjs.OverworldCode.eventsList2 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList3 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonSpawnpoint"), gdjs.OverworldCode.GDButtonSpawnpointObjects4);

for (gdjs.OverworldCode.forEachIndex5 = 0;gdjs.OverworldCode.forEachIndex5 < gdjs.OverworldCode.GDButtonSpawnpointObjects4.length;++gdjs.OverworldCode.forEachIndex5) {
gdjs.copyArray(gdjs.OverworldCode.GDServerSpawnPointObjects3, gdjs.OverworldCode.GDServerSpawnPointObjects5);

gdjs.OverworldCode.GDCableButtonObjects5.length = 0;

gdjs.OverworldCode.GDButtonSpawnpointObjects5.length = 0;


gdjs.OverworldCode.forEachTemporary5 = gdjs.OverworldCode.GDButtonSpawnpointObjects4[gdjs.OverworldCode.forEachIndex5];
gdjs.OverworldCode.GDButtonSpawnpointObjects5.push(gdjs.OverworldCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDServerSpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects5[0].getVariables()).getFromIndex(1).getAsNumber() == ((gdjs.OverworldCode.GDButtonSpawnpointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDButtonSpawnpointObjects5[0].getVariables()).getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCableButtonObjects5Objects, (( gdjs.OverworldCode.GDButtonSpawnpointObjects5.length === 0 ) ? 0 :gdjs.OverworldCode.GDButtonSpawnpointObjects5[0].getPointX("")), (( gdjs.OverworldCode.GDButtonSpawnpointObjects5.length === 0 ) ? 0 :gdjs.OverworldCode.GDButtonSpawnpointObjects5[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDCableButtonObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableButtonObjects5[i].returnVariable(gdjs.OverworldCode.GDCableButtonObjects5[i].getVariables().getFromIndex(1)).setNumber(((gdjs.OverworldCode.GDServerSpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDCableButtonObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableButtonObjects5[i].setZOrder(-(1000));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cable"), gdjs.OverworldCode.GDCableObjects4);

for (gdjs.OverworldCode.forEachIndex5 = 0;gdjs.OverworldCode.forEachIndex5 < gdjs.OverworldCode.GDCableObjects4.length;++gdjs.OverworldCode.forEachIndex5) {
gdjs.copyArray(gdjs.OverworldCode.GDServerSpawnPointObjects3, gdjs.OverworldCode.GDServerSpawnPointObjects5);

gdjs.OverworldCode.GDCableObjects5.length = 0;


gdjs.OverworldCode.forEachTemporary5 = gdjs.OverworldCode.GDCableObjects4[gdjs.OverworldCode.forEachIndex5];
gdjs.OverworldCode.GDCableObjects5.push(gdjs.OverworldCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDCableObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDCableObjects5[0].getVariables()).getFromIndex(1).getAsNumber() == ((gdjs.OverworldCode.GDServerSpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.OverworldCode.GDCableObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableObjects5[i].returnVariable(gdjs.OverworldCode.GDCableObjects5[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.mod(gdjs.OverworldCode.GDCableObjects5[i].getVariables().getFromIndex(0).getAsNumber() + gdjs.randomInRange(1, 3), 4));
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.OverworldCode.GDServerSpawnPointObjects3 */
{for(var i = 0, len = gdjs.OverworldCode.GDServerSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerSpawnPointObjects3Objects = Hashtable.newFrom({"ServerSpawnPoint": gdjs.OverworldCode.GDServerSpawnPointObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer3Objects3Objects = Hashtable.newFrom({"Server3": gdjs.OverworldCode.GDServer3Objects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerButtonObjects5Objects = Hashtable.newFrom({"ServerButton": gdjs.OverworldCode.GDServerButtonObjects5});
gdjs.OverworldCode.eventsList5 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonSpawnpoint"), gdjs.OverworldCode.GDButtonSpawnpointObjects4);

for (gdjs.OverworldCode.forEachIndex5 = 0;gdjs.OverworldCode.forEachIndex5 < gdjs.OverworldCode.GDButtonSpawnpointObjects4.length;++gdjs.OverworldCode.forEachIndex5) {
gdjs.copyArray(gdjs.OverworldCode.GDServerSpawnPointObjects3, gdjs.OverworldCode.GDServerSpawnPointObjects5);

gdjs.OverworldCode.GDServerButtonObjects5.length = 0;

gdjs.OverworldCode.GDButtonSpawnpointObjects5.length = 0;


gdjs.OverworldCode.forEachTemporary5 = gdjs.OverworldCode.GDButtonSpawnpointObjects4[gdjs.OverworldCode.forEachIndex5];
gdjs.OverworldCode.GDButtonSpawnpointObjects5.push(gdjs.OverworldCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDServerSpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects5[0].getVariables()).getFromIndex(1).getAsNumber() == ((gdjs.OverworldCode.GDButtonSpawnpointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDButtonSpawnpointObjects5[0].getVariables()).getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerButtonObjects5Objects, (( gdjs.OverworldCode.GDButtonSpawnpointObjects5.length === 0 ) ? 0 :gdjs.OverworldCode.GDButtonSpawnpointObjects5[0].getPointX("")), (( gdjs.OverworldCode.GDButtonSpawnpointObjects5.length === 0 ) ? 0 :gdjs.OverworldCode.GDButtonSpawnpointObjects5[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDServerButtonObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerButtonObjects5[i].returnVariable(gdjs.OverworldCode.GDServerButtonObjects5[i].getVariables().getFromIndex(1)).setNumber(((gdjs.OverworldCode.GDServerSpawnPointObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDServerButtonObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerButtonObjects5[i].setZOrder(-(1000));
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.OverworldCode.GDServerSpawnPointObjects3 */
{for(var i = 0, len = gdjs.OverworldCode.GDServerSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDButtonSpawnpointObjects3Objects = Hashtable.newFrom({"ButtonSpawnpoint": gdjs.OverworldCode.GDButtonSpawnpointObjects3});
gdjs.OverworldCode.eventsList7 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AxeSpawnPoint"), gdjs.OverworldCode.GDAxeSpawnPointObjects3);
gdjs.copyArray(runtimeScene.getObjects("BackpackSpawnPoint"), gdjs.OverworldCode.GDBackpackSpawnPointObjects3);
gdjs.copyArray(runtimeScene.getObjects("BootsSpawnPoint"), gdjs.OverworldCode.GDBootsSpawnPointObjects3);
gdjs.copyArray(runtimeScene.getObjects("BottleSpawnPoint"), gdjs.OverworldCode.GDBottleSpawnPointObjects3);
gdjs.OverworldCode.GDBackpackObjects3.length = 0;

gdjs.OverworldCode.GDBootsObjects3.length = 0;

gdjs.OverworldCode.GDBottleObjects3.length = 0;

gdjs.OverworldCode.GDHammerObjects3.length = 0;

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAxeSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDHammerObjects3Objects, (( gdjs.OverworldCode.GDAxeSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDAxeSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDAxeSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDAxeSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDHammerObjects3[i].getBehavior("Scale").setScale(0.5);
}
}
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBootsSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBootsObjects3Objects, (( gdjs.OverworldCode.GDBootsSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDBootsSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDBootsSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDBootsSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDBootsObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBootsObjects3[i].getBehavior("Scale").setScale(0.5);
}
}
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackObjects3Objects, (( gdjs.OverworldCode.GDBackpackSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDBackpackSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDBackpackSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDBackpackSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDBackpackObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBackpackObjects3[i].getBehavior("Scale").setScale(0.5);
}
}
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBottleSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBottleObjects3Objects, (( gdjs.OverworldCode.GDBottleSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDBottleSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDBottleSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDBottleSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDBottleObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBottleObjects3[i].getBehavior("Scale").setScale(0.5);
}
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDAxeSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBootsSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBottleSpawnPointObjects3Objects);
}
{for(var i = 0, len = gdjs.OverworldCode.GDAxeSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDAxeSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDBootsSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBootsSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDBackpackSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBackpackSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDBottleSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDBottleSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ServerSpawnPoint"), gdjs.OverworldCode.GDServerSpawnPointObjects3);
gdjs.copyArray(gdjs.OverworldCode.GDServer1Objects1, gdjs.OverworldCode.GDServer1Objects3);

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer1Objects3Objects, (( gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDServer1Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer1Objects3[i].activateBehavior("YSort", true);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ServerSpawnPoint"), gdjs.OverworldCode.GDServerSpawnPointObjects3);
gdjs.copyArray(gdjs.OverworldCode.GDServer2Objects1, gdjs.OverworldCode.GDServer2Objects3);

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer2Objects3Objects, (( gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDServer2Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer2Objects3[i].returnVariable(gdjs.OverworldCode.GDServer2Objects3[i].getVariables().getFromIndex(5)).setNumber(((gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDServer2Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer2Objects3[i].activateBehavior("YSort", true);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ServerSpawnPoint"), gdjs.OverworldCode.GDServerSpawnPointObjects3);
gdjs.copyArray(gdjs.OverworldCode.GDServer3Objects1, gdjs.OverworldCode.GDServer3Objects3);

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerSpawnPointObjects3Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer3Objects3Objects, (( gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDServerSpawnPointObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServerSpawnPointObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.OverworldCode.GDServer3Objects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer3Objects3[i].activateBehavior("YSort", true);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDServerSpawnPointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerSpawnPointObjects3[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonSpawnpoint"), gdjs.OverworldCode.GDButtonSpawnpointObjects3);
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDButtonSpawnpointObjects3Objects);
}
{for(var i = 0, len = gdjs.OverworldCode.GDButtonSpawnpointObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDButtonSpawnpointObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cable"), gdjs.OverworldCode.GDCableObjects3);

for (gdjs.OverworldCode.forEachIndex4 = 0;gdjs.OverworldCode.forEachIndex4 < gdjs.OverworldCode.GDCableObjects3.length;++gdjs.OverworldCode.forEachIndex4) {
gdjs.OverworldCode.GDCableObjects4.length = 0;


gdjs.OverworldCode.forEachTemporary4 = gdjs.OverworldCode.GDCableObjects3[gdjs.OverworldCode.forEachIndex4];
gdjs.OverworldCode.GDCableObjects4.push(gdjs.OverworldCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.OverworldCode.GDCableObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableObjects4[i].getBehavior("Animation").setAnimationIndex(gdjs.OverworldCode.GDCableObjects4[i].getVariables().getFromIndex(0).getAsNumber());
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.OverworldCode.GDBackpackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Batteries"), gdjs.OverworldCode.GDBatteriesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Boots"), gdjs.OverworldCode.GDBootsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bottle"), gdjs.OverworldCode.GDBottleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.OverworldCode.GDHammerObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDBackpackObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBackpackObjects2[i].returnVariable(gdjs.OverworldCode.GDBackpackObjects2[i].getVariables().get("BaseY")).setNumber((gdjs.OverworldCode.GDBackpackObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDHammerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHammerObjects2[i].returnVariable(gdjs.OverworldCode.GDHammerObjects2[i].getVariables().get("BaseY")).setNumber((gdjs.OverworldCode.GDHammerObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDBootsObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBootsObjects2[i].returnVariable(gdjs.OverworldCode.GDBootsObjects2[i].getVariables().get("BaseY")).setNumber((gdjs.OverworldCode.GDBootsObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDBottleObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBottleObjects2[i].returnVariable(gdjs.OverworldCode.GDBottleObjects2[i].getVariables().get("BaseY")).setNumber((gdjs.OverworldCode.GDBottleObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDBatteriesObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBatteriesObjects2[i].returnVariable(gdjs.OverworldCode.GDBatteriesObjects2[i].getVariables().get("BaseY")).setNumber((gdjs.OverworldCode.GDBatteriesObjects2[i].getPointY("")));
}
}
}

}


};gdjs.OverworldCode.eventsList9 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList10 = function(runtimeScene) {

{


gdjs.OverworldCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.OverworldCode.GDInventorySlotObjects1);

for (gdjs.OverworldCode.forEachIndex2 = 0;gdjs.OverworldCode.forEachIndex2 < gdjs.OverworldCode.GDInventorySlotObjects1.length;++gdjs.OverworldCode.forEachIndex2) {
gdjs.OverworldCode.GDInventorySlotObjects2.length = 0;


gdjs.OverworldCode.forEachTemporary2 = gdjs.OverworldCode.GDInventorySlotObjects1[gdjs.OverworldCode.forEachIndex2];
gdjs.OverworldCode.GDInventorySlotObjects2.push(gdjs.OverworldCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild(((gdjs.OverworldCode.GDInventorySlotObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDInventorySlotObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("Name").setString("Empty");
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDTree1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDBush1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNPC_959595951Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTilemap_95959595GroundObjects1ObjectsGDgdjs_9546OverworldCode_9546GDNPC_959595952Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595Left_95959595RightObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTree3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595LeftObjects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595RightObjects1ObjectsGDgdjs_9546OverworldCode_9546GDBush2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDStone1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDStone2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDBridgeObjects1ObjectsGDgdjs_9546OverworldCode_9546GDRuggedTerrainObjects1ObjectsGDgdjs_9546OverworldCode_9546GDNPC_959595953Objects1ObjectsGDgdjs_9546OverworldCode_9546GDServer1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDServer2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDServer3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595BottleObjects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595BootsObjects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595BagObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTree5Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree6Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree7Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner4Objects1Objects = Hashtable.newFrom({"Tree1": gdjs.OverworldCode.GDTree1Objects1, "Bush1": gdjs.OverworldCode.GDBush1Objects1, "Tree2": gdjs.OverworldCode.GDTree2Objects1, "NPC_1": gdjs.OverworldCode.GDNPC_95951Objects1, "Tilemap_Ground": gdjs.OverworldCode.GDTilemap_9595GroundObjects1, "NPC_2": gdjs.OverworldCode.GDNPC_95952Objects1, "Sign_Left_Right": gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1, "Tree3": gdjs.OverworldCode.GDTree3Objects1, "Tree4": gdjs.OverworldCode.GDTree4Objects1, "Sign_Left": gdjs.OverworldCode.GDSign_9595LeftObjects1, "Sign_Right": gdjs.OverworldCode.GDSign_9595RightObjects1, "Bush2": gdjs.OverworldCode.GDBush2Objects1, "Stone1": gdjs.OverworldCode.GDStone1Objects1, "Stone2": gdjs.OverworldCode.GDStone2Objects1, "Bridge": gdjs.OverworldCode.GDBridgeObjects1, "RuggedTerrain": gdjs.OverworldCode.GDRuggedTerrainObjects1, "NPC_3": gdjs.OverworldCode.GDNPC_95953Objects1, "Server1": gdjs.OverworldCode.GDServer1Objects1, "Server2": gdjs.OverworldCode.GDServer2Objects1, "Server3": gdjs.OverworldCode.GDServer3Objects1, "Sign_Bottle": gdjs.OverworldCode.GDSign_9595BottleObjects1, "Sign_Boots": gdjs.OverworldCode.GDSign_9595BootsObjects1, "Sign_Bag": gdjs.OverworldCode.GDSign_9595BagObjects1, "Tree5": gdjs.OverworldCode.GDTree5Objects1, "Tree6": gdjs.OverworldCode.GDTree6Objects1, "Tree7": gdjs.OverworldCode.GDTree7Objects1, "Corner1": gdjs.OverworldCode.GDCorner1Objects1, "Corner2": gdjs.OverworldCode.GDCorner2Objects1, "Corner3": gdjs.OverworldCode.GDCorner3Objects1, "Corner4": gdjs.OverworldCode.GDCorner4Objects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBridgeObjects3ObjectsGDgdjs_9546OverworldCode_9546GDRuggedTerrainObjects3Objects = Hashtable.newFrom({"Bridge": gdjs.OverworldCode.GDBridgeObjects3, "RuggedTerrain": gdjs.OverworldCode.GDRuggedTerrainObjects3});
gdjs.OverworldCode.eventsList11 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.OverworldCode.GDInventorySlotObjects4);

for (gdjs.OverworldCode.forEachIndex5 = 0;gdjs.OverworldCode.forEachIndex5 < gdjs.OverworldCode.GDInventorySlotObjects4.length;++gdjs.OverworldCode.forEachIndex5) {
gdjs.OverworldCode.GDInventorySlotObjects5.length = 0;


gdjs.OverworldCode.forEachTemporary5 = gdjs.OverworldCode.GDInventorySlotObjects4[gdjs.OverworldCode.forEachIndex5];
gdjs.OverworldCode.GDInventorySlotObjects5.push(gdjs.OverworldCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild(((gdjs.OverworldCode.GDInventorySlotObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDInventorySlotObjects5[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("Name").setString("Empty");
}
}
}

}


};gdjs.OverworldCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.OverworldCode.GDBridgeObjects3, gdjs.OverworldCode.GDBridgeObjects4);

gdjs.copyArray(gdjs.OverworldCode.GDRuggedTerrainObjects3, gdjs.OverworldCode.GDRuggedTerrainObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(0).getChild("Name").getAsString() != "Empty");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDBridgeObjects4.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDBridgeObjects4[i].getVariableString(gdjs.OverworldCode.GDBridgeObjects4[i].getVariables().get("ChallengeName")) == "Bridge" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDBridgeObjects4[k] = gdjs.OverworldCode.GDBridgeObjects4[i];
        ++k;
    }
}
gdjs.OverworldCode.GDBridgeObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDRuggedTerrainObjects4.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariableString(gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariables().get("ChallengeName")) == "Bridge" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDRuggedTerrainObjects4[k] = gdjs.OverworldCode.GDRuggedTerrainObjects4[i];
        ++k;
    }
}
gdjs.OverworldCode.GDRuggedTerrainObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBridgeObjects4 */
/* Reuse gdjs.OverworldCode.GDRuggedTerrainObjects4 */
{for(var i = 0, len = gdjs.OverworldCode.GDBridgeObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDBridgeObjects4[i].getBehavior("Animation").setAnimationName("Bridge Animation");
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDBridgeObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDBridgeObjects4[i].returnVariable(gdjs.OverworldCode.GDBridgeObjects4[i].getVariables().get("CanPass")).setBoolean(true);
}
for(var i = 0, len = gdjs.OverworldCode.GDRuggedTerrainObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDRuggedTerrainObjects4[i].returnVariable(gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariables().get("CanPass")).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(gdjs.OverworldCode.GDBridgeObjects3, gdjs.OverworldCode.GDBridgeObjects4);

gdjs.copyArray(gdjs.OverworldCode.GDRuggedTerrainObjects3, gdjs.OverworldCode.GDRuggedTerrainObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(2).getChild("Name").getAsString() != "Empty");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDBridgeObjects4.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDBridgeObjects4[i].getVariableString(gdjs.OverworldCode.GDBridgeObjects4[i].getVariables().get("ChallengeName")) == "Terrain" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDBridgeObjects4[k] = gdjs.OverworldCode.GDBridgeObjects4[i];
        ++k;
    }
}
gdjs.OverworldCode.GDBridgeObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDRuggedTerrainObjects4.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariableString(gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariables().get("ChallengeName")) == "Terrain" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDRuggedTerrainObjects4[k] = gdjs.OverworldCode.GDRuggedTerrainObjects4[i];
        ++k;
    }
}
gdjs.OverworldCode.GDRuggedTerrainObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBridgeObjects4 */
/* Reuse gdjs.OverworldCode.GDRuggedTerrainObjects4 */
{for(var i = 0, len = gdjs.OverworldCode.GDBridgeObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDBridgeObjects4[i].returnVariable(gdjs.OverworldCode.GDBridgeObjects4[i].getVariables().get("CanPass")).setBoolean(true);
}
for(var i = 0, len = gdjs.OverworldCode.GDRuggedTerrainObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDRuggedTerrainObjects4[i].returnVariable(gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariables().get("CanPass")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDRuggedTerrainObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getBehavior("Animation").setAnimationName("Passable");
}
}
}

}


{

gdjs.copyArray(gdjs.OverworldCode.GDBridgeObjects3, gdjs.OverworldCode.GDBridgeObjects4);

gdjs.copyArray(gdjs.OverworldCode.GDRuggedTerrainObjects3, gdjs.OverworldCode.GDRuggedTerrainObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDBridgeObjects4.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDBridgeObjects4[i].getVariableBoolean(gdjs.OverworldCode.GDBridgeObjects4[i].getVariables().get("CanPass"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDBridgeObjects4[k] = gdjs.OverworldCode.GDBridgeObjects4[i];
        ++k;
    }
}
gdjs.OverworldCode.GDBridgeObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDRuggedTerrainObjects4.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariableBoolean(gdjs.OverworldCode.GDRuggedTerrainObjects4[i].getVariables().get("CanPass"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDRuggedTerrainObjects4[k] = gdjs.OverworldCode.GDRuggedTerrainObjects4[i];
        ++k;
    }
}
gdjs.OverworldCode.GDRuggedTerrainObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBridgeObjects4 */
/* Reuse gdjs.OverworldCode.GDRuggedTerrainObjects4 */
{gdjs.OverworldCode.localVariables[0].getFromIndex(0).setString(((gdjs.OverworldCode.GDRuggedTerrainObjects4.length === 0 ) ? ((gdjs.OverworldCode.GDBridgeObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDBridgeObjects4[0].getVariables()) : gdjs.OverworldCode.GDRuggedTerrainObjects4[0].getVariables()).get("CompleteText").getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}

{ //Subevents
gdjs.OverworldCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12230444);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.OverworldCode.GDBridgeObjects3, gdjs.OverworldCode.GDBridgeObjects4);

gdjs.copyArray(gdjs.OverworldCode.GDRuggedTerrainObjects3, gdjs.OverworldCode.GDRuggedTerrainObjects4);

gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects4);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects4[i].DisplayText(gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsString(), "TextDialogTimer", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(((gdjs.OverworldCode.GDRuggedTerrainObjects4.length === 0 ) ? ((gdjs.OverworldCode.GDBridgeObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDBridgeObjects4[0].getVariables()) : gdjs.OverworldCode.GDRuggedTerrainObjects4[0].getVariables()).get("MaxTextTimer").getAsNumber());
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects4.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects4[i].SetMustWait(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextDialogTimer");
}
}

}


};gdjs.OverworldCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bridge"), gdjs.OverworldCode.GDBridgeObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("RuggedTerrain"), gdjs.OverworldCode.GDRuggedTerrainObjects3);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("TextToShow", variable);
}
gdjs.OverworldCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects3Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBridgeObjects3ObjectsGDgdjs_9546OverworldCode_9546GDRuggedTerrainObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDBridgeObjects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDBridgeObjects3[i].getVariableBoolean(gdjs.OverworldCode.GDBridgeObjects3[i].getVariables().get("CanPass"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDBridgeObjects3[k] = gdjs.OverworldCode.GDBridgeObjects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDBridgeObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDRuggedTerrainObjects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDRuggedTerrainObjects3[i].getVariableBoolean(gdjs.OverworldCode.GDRuggedTerrainObjects3[i].getVariables().get("CanPass"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDRuggedTerrainObjects3[k] = gdjs.OverworldCode.GDRuggedTerrainObjects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDRuggedTerrainObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBridgeObjects3 */
/* Reuse gdjs.OverworldCode.GDRuggedTerrainObjects3 */
{gdjs.OverworldCode.localVariables[0].getFromIndex(0).setString(((gdjs.OverworldCode.GDRuggedTerrainObjects3.length === 0 ) ? ((gdjs.OverworldCode.GDBridgeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDBridgeObjects3[0].getVariables()) : gdjs.OverworldCode.GDRuggedTerrainObjects3[0].getVariables()).get("StartText").getAsString());
}

{ //Subevents
gdjs.OverworldCode.eventsList13(runtimeScene);} //End of subevents
}
gdjs.OverworldCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Bridge"), gdjs.OverworldCode.GDBridgeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDBridgeObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDBridgeObjects2[i].getBehavior("Animation").getAnimationName() == "Bridge Animation" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDBridgeObjects2[k] = gdjs.OverworldCode.GDBridgeObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDBridgeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDBridgeObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDBridgeObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDBridgeObjects2[k] = gdjs.OverworldCode.GDBridgeObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDBridgeObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBridgeObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDBridgeObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBridgeObjects2[i].getBehavior("Animation").setAnimationName("Built");
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer1Objects2Objects = Hashtable.newFrom({"Server1": gdjs.OverworldCode.GDServer1Objects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDMessageAreaObjects3Objects = Hashtable.newFrom({"MessageArea": gdjs.OverworldCode.GDMessageAreaObjects3});
gdjs.OverworldCode.eventsList15 = function(runtimeScene) {

};gdjs.OverworldCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MessageArea"), gdjs.OverworldCode.GDMessageAreaObjects3);
gdjs.copyArray(gdjs.OverworldCode.GDServer1Objects2, gdjs.OverworldCode.GDServer1Objects3);

gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects3);
{gdjs.evtTools.object.pickNearestObject(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDMessageAreaObjects3Objects, (( gdjs.OverworldCode.GDServer1Objects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServer1Objects3[0].getPointX("")), (( gdjs.OverworldCode.GDServer1Objects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDServer1Objects3[0].getPointY("")));
}
{for(var i = 0, len = gdjs.OverworldCode.GDMessageAreaObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDMessageAreaObjects3[i].returnVariable(gdjs.OverworldCode.GDMessageAreaObjects3[i].getVariables().getFromIndex(0)).setString(((gdjs.OverworldCode.GDServer1Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServer1Objects3[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects3[i].DisplayText(((gdjs.OverworldCode.GDMessageAreaObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDMessageAreaObjects3[0].getVariables()).getFromIndex(0).getAsString(), "TextDialogTimer", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.OverworldCode.GDInventorySlotObjects2);

for (gdjs.OverworldCode.forEachIndex3 = 0;gdjs.OverworldCode.forEachIndex3 < gdjs.OverworldCode.GDInventorySlotObjects2.length;++gdjs.OverworldCode.forEachIndex3) {
gdjs.OverworldCode.GDInventorySlotObjects3.length = 0;


gdjs.OverworldCode.forEachTemporary3 = gdjs.OverworldCode.GDInventorySlotObjects2[gdjs.OverworldCode.forEachIndex3];
gdjs.OverworldCode.GDInventorySlotObjects3.push(gdjs.OverworldCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild(((gdjs.OverworldCode.GDInventorySlotObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDInventorySlotObjects3[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("Name").setString("Empty");
}
}
}

}


};gdjs.OverworldCode.eventsList17 = function(runtimeScene) {

{

/* Reuse gdjs.OverworldCode.GDServer1Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDServer1Objects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDServer1Objects2[i].getBehavior("Animation").getAnimationName() == "Off" ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDServer1Objects2[k] = gdjs.OverworldCode.GDServer1Objects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDServer1Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(0).getChild("Name").getAsString() != "Empty");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects2);
/* Reuse gdjs.OverworldCode.GDServer1Objects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDServer1Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer1Objects2[i].getBehavior("Animation").setAnimationName("On");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
{for(var i = 0, len = gdjs.OverworldCode.GDNPC_95953Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95953Objects2[i].getBehavior("Animation").setAnimationIndex(gdjs.OverworldCode.GDNPC_95953Objects2[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}

{ //Subevents
gdjs.OverworldCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Server1"), gdjs.OverworldCode.GDServer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects3});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCableButtonObjects3Objects = Hashtable.newFrom({"CableButton": gdjs.OverworldCode.GDCableButtonObjects3});
gdjs.OverworldCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.OverworldCode.GDCableObjects5, gdjs.OverworldCode.GDCableObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDCableObjects6.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDCableObjects6[i].getVariableNumber(gdjs.OverworldCode.GDCableObjects6[i].getVariables().getFromIndex(0)) > 3 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDCableObjects6[k] = gdjs.OverworldCode.GDCableObjects6[i];
        ++k;
    }
}
gdjs.OverworldCode.GDCableObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDCableObjects6 */
{for(var i = 0, len = gdjs.OverworldCode.GDCableObjects6.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableObjects6[i].returnVariable(gdjs.OverworldCode.GDCableObjects6[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.OverworldCode.GDCableObjects5 */
{for(var i = 0, len = gdjs.OverworldCode.GDCableObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableObjects5[i].getBehavior("Animation").setAnimationIndex(gdjs.OverworldCode.GDCableObjects5[i].getVariables().getFromIndex(0).getAsNumber());
}
}
}

}


};gdjs.OverworldCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.OverworldCode.GDCableObjects4, gdjs.OverworldCode.GDCableObjects5);

gdjs.copyArray(runtimeScene.getObjects("Server2"), gdjs.OverworldCode.GDServer2Objects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDCableObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDCableObjects5[0].getVariables()).getFromIndex(0).getAsNumber() != ((gdjs.OverworldCode.GDServer2Objects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServer2Objects5[0].getVariables()).getFromIndex(5).getAsNumber());
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDCableObjects5 */
{for(var i = 0, len = gdjs.OverworldCode.GDCableObjects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableObjects5[i].returnVariable(gdjs.OverworldCode.GDCableObjects5[i].getVariables().getFromIndex(0)).add(1);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.OverworldCode.GDCableObjects4, gdjs.OverworldCode.GDCableObjects5);

gdjs.copyArray(runtimeScene.getObjects("Server2"), gdjs.OverworldCode.GDServer2Objects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDCableObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDCableObjects5[0].getVariables()).getFromIndex(0).getAsNumber() == ((gdjs.OverworldCode.GDServer2Objects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServer2Objects5[0].getVariables()).getFromIndex(5).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects5);
/* Reuse gdjs.OverworldCode.GDServer2Objects5 */
{for(var i = 0, len = gdjs.OverworldCode.GDServer2Objects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer2Objects5[i].getBehavior("Animation").setAnimationName("On");
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDNPC_95953Objects5.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95953Objects5[i].getBehavior("Animation").setAnimationIndex(gdjs.OverworldCode.GDNPC_95953Objects5[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
}

}


};gdjs.OverworldCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cable"), gdjs.OverworldCode.GDCableObjects3);

for (gdjs.OverworldCode.forEachIndex4 = 0;gdjs.OverworldCode.forEachIndex4 < gdjs.OverworldCode.GDCableObjects3.length;++gdjs.OverworldCode.forEachIndex4) {
gdjs.copyArray(gdjs.OverworldCode.GDCableButtonObjects3, gdjs.OverworldCode.GDCableButtonObjects4);

gdjs.OverworldCode.GDCableObjects4.length = 0;


gdjs.OverworldCode.forEachTemporary4 = gdjs.OverworldCode.GDCableObjects3[gdjs.OverworldCode.forEachIndex4];
gdjs.OverworldCode.GDCableObjects4.push(gdjs.OverworldCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.OverworldCode.GDCableObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDCableObjects4[0].getVariables()).getFromIndex(1).getAsNumber() == ((gdjs.OverworldCode.GDCableButtonObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDCableButtonObjects4[0].getVariables()).getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.OverworldCode.eventsList20(runtimeScene);} //Subevents end.
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCableButtonObjects2Objects = Hashtable.newFrom({"CableButton": gdjs.OverworldCode.GDCableButtonObjects2});
gdjs.OverworldCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CableButton"), gdjs.OverworldCode.GDCableButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects3Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCableButtonObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12215612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDCableButtonObjects3 */
{for(var i = 0, len = gdjs.OverworldCode.GDCableButtonObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableButtonObjects3[i].getBehavior("Animation").setAnimationName("Blank");
}
}

{ //Subevents
gdjs.OverworldCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CableButton"), gdjs.OverworldCode.GDCableButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCableButtonObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12273428);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDCableButtonObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDCableButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDCableButtonObjects2[i].getBehavior("Animation").setAnimationName("Close");
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerButtonObjects2Objects = Hashtable.newFrom({"ServerButton": gdjs.OverworldCode.GDServerButtonObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects1});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerButtonObjects1Objects = Hashtable.newFrom({"ServerButton": gdjs.OverworldCode.GDServerButtonObjects1});
gdjs.OverworldCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ServerButton"), gdjs.OverworldCode.GDServerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12264732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("Server3"), gdjs.OverworldCode.GDServer3Objects2);
/* Reuse gdjs.OverworldCode.GDServerButtonObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDServerButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerButtonObjects2[i].getBehavior("Animation").setAnimationName("Blank");
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDServer3Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer3Objects2[i].getBehavior("Animation").setAnimationName("On");
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDNPC_95953Objects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95953Objects2[i].getBehavior("Animation").setAnimationIndex(gdjs.OverworldCode.GDNPC_95953Objects2[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ServerButton"), gdjs.OverworldCode.GDServerButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects1Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServerButtonObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12250156);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDServerButtonObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDServerButtonObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDServerButtonObjects1[i].getBehavior("Animation").setAnimationName("Close");
}
}
}

}


};gdjs.OverworldCode.eventsList24 = function(runtimeScene) {

{


gdjs.OverworldCode.eventsList18(runtimeScene);
}


{


gdjs.OverworldCode.eventsList22(runtimeScene);
}


{


gdjs.OverworldCode.eventsList23(runtimeScene);
}


};gdjs.OverworldCode.eventsList25 = function(runtimeScene) {

{


gdjs.OverworldCode.eventsList14(runtimeScene);
}


{


gdjs.OverworldCode.eventsList24(runtimeScene);
}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackObjects2ObjectsGDgdjs_9546OverworldCode_9546GDHammerObjects2ObjectsGDgdjs_9546OverworldCode_9546GDBootsObjects2ObjectsGDgdjs_9546OverworldCode_9546GDBottleObjects2ObjectsGDgdjs_9546OverworldCode_9546GDBatteriesObjects2Objects = Hashtable.newFrom({"Backpack": gdjs.OverworldCode.GDBackpackObjects2, "Hammer": gdjs.OverworldCode.GDHammerObjects2, "Boots": gdjs.OverworldCode.GDBootsObjects2, "Bottle": gdjs.OverworldCode.GDBottleObjects2, "Batteries": gdjs.OverworldCode.GDBatteriesObjects2});
gdjs.OverworldCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.OverworldCode.localVariables[1].getFromIndex(0).getAsNumber()).getChild("Name").getAsString() == "Empty");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.OverworldCode.GDBackpackObjects2, gdjs.OverworldCode.GDBackpackObjects5);

gdjs.copyArray(gdjs.OverworldCode.GDBatteriesObjects2, gdjs.OverworldCode.GDBatteriesObjects5);

gdjs.copyArray(gdjs.OverworldCode.GDBootsObjects2, gdjs.OverworldCode.GDBootsObjects5);

gdjs.copyArray(gdjs.OverworldCode.GDBottleObjects2, gdjs.OverworldCode.GDBottleObjects5);

gdjs.copyArray(gdjs.OverworldCode.GDHammerObjects2, gdjs.OverworldCode.GDHammerObjects5);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.OverworldCode.localVariables[1].getFromIndex(0).getAsNumber()).getChild("Name").setString((( gdjs.OverworldCode.GDBatteriesObjects5.length === 0 ) ? (( gdjs.OverworldCode.GDBottleObjects5.length === 0 ) ? (( gdjs.OverworldCode.GDBootsObjects5.length === 0 ) ? (( gdjs.OverworldCode.GDHammerObjects5.length === 0 ) ? (( gdjs.OverworldCode.GDBackpackObjects5.length === 0 ) ? "" :gdjs.OverworldCode.GDBackpackObjects5[0].getName()) :gdjs.OverworldCode.GDHammerObjects5[0].getName()) :gdjs.OverworldCode.GDBootsObjects5[0].getName()) :gdjs.OverworldCode.GDBottleObjects5[0].getName()) :gdjs.OverworldCode.GDBatteriesObjects5[0].getName()));
}
{gdjs.OverworldCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.OverworldCode.localVariables[1].getFromIndex(0).add(1);
}
}

}


};gdjs.OverworldCode.eventsList27 = function(runtimeScene) {

{


const repeatCount4 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.OverworldCode.eventsList26(runtimeScene);} //Subevents end.
}
}

}


};gdjs.OverworldCode.eventsList28 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("SlotNumber", variable);
}
gdjs.OverworldCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.OverworldCode.eventsList27(runtimeScene);} //End of subevents
}
gdjs.OverworldCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBackpackObjects2 */
/* Reuse gdjs.OverworldCode.GDBatteriesObjects2 */
/* Reuse gdjs.OverworldCode.GDBootsObjects2 */
/* Reuse gdjs.OverworldCode.GDBottleObjects2 */
/* Reuse gdjs.OverworldCode.GDHammerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDBackpackObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBackpackObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDHammerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHammerObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDBootsObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBootsObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDBottleObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBottleObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDBatteriesObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBatteriesObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.OverworldCode.eventsList29 = function(runtimeScene) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("ValidSpaceFound", variable);
}
gdjs.OverworldCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.OverworldCode.eventsList28(runtimeScene);} //End of subevents
}
gdjs.OverworldCode.localVariables.pop();

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDInventoryIconObjects3Objects = Hashtable.newFrom({"InventoryIcon": gdjs.OverworldCode.GDInventoryIconObjects3});
gdjs.OverworldCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.OverworldCode.GDInventorySlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Name").getAsString() != "Empty");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDInventorySlotObjects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDInventorySlotObjects3[i].getVariableNumber(gdjs.OverworldCode.GDInventorySlotObjects3[i].getVariables().getFromIndex(0)) == gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDInventorySlotObjects3[k] = gdjs.OverworldCode.GDInventorySlotObjects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDInventorySlotObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDInventorySlotObjects3 */
gdjs.OverworldCode.GDInventoryIconObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDInventoryIconObjects3Objects, (( gdjs.OverworldCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDInventorySlotObjects3[0].getPointX("")) + 25, (( gdjs.OverworldCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDInventorySlotObjects3[0].getPointY("")) + 25, "UI");
}
{for(var i = 0, len = gdjs.OverworldCode.GDInventoryIconObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDInventoryIconObjects3[i].getBehavior("Animation").setAnimationName(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Name").getAsString());
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDInventoryIconObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDInventoryIconObjects3[i].getBehavior("Scale").setScale(3.125);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.OverworldCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.OverworldCode.eventsList31 = function(runtimeScene) {

{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.OverworldCode.eventsList30(runtimeScene);} //Subevents end.
}
}

}


};gdjs.OverworldCode.eventsList32 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("InventoryIcon"), gdjs.OverworldCode.GDInventoryIconObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDInventoryIconObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDInventoryIconObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("SlotNumber", variable);
}
gdjs.OverworldCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.OverworldCode.eventsList31(runtimeScene);} //End of subevents
}
gdjs.OverworldCode.localVariables.pop();

}


};gdjs.OverworldCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.OverworldCode.GDBackpackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Batteries"), gdjs.OverworldCode.GDBatteriesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Boots"), gdjs.OverworldCode.GDBootsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bottle"), gdjs.OverworldCode.GDBottleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.OverworldCode.GDHammerObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDBackpackObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBackpackObjects2[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.OverworldCode.GDBackpackObjects2[i].getVariables().get("BaseY"))) + Math.sin(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 3) * 5);
}
for(var i = 0, len = gdjs.OverworldCode.GDHammerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDHammerObjects2[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.OverworldCode.GDHammerObjects2[i].getVariables().get("BaseY"))) + Math.sin(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 3) * 5);
}
for(var i = 0, len = gdjs.OverworldCode.GDBootsObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBootsObjects2[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.OverworldCode.GDBootsObjects2[i].getVariables().get("BaseY"))) + Math.sin(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 3) * 5);
}
for(var i = 0, len = gdjs.OverworldCode.GDBottleObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBottleObjects2[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.OverworldCode.GDBottleObjects2[i].getVariables().get("BaseY"))) + Math.sin(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 3) * 5);
}
for(var i = 0, len = gdjs.OverworldCode.GDBatteriesObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDBatteriesObjects2[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.OverworldCode.GDBatteriesObjects2[i].getVariables().get("BaseY"))) + Math.sin(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 3) * 5);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.OverworldCode.GDBackpackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Batteries"), gdjs.OverworldCode.GDBatteriesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Boots"), gdjs.OverworldCode.GDBootsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bottle"), gdjs.OverworldCode.GDBottleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.OverworldCode.GDHammerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDBackpackObjects2ObjectsGDgdjs_9546OverworldCode_9546GDHammerObjects2ObjectsGDgdjs_9546OverworldCode_9546GDBootsObjects2ObjectsGDgdjs_9546OverworldCode_9546GDBottleObjects2ObjectsGDgdjs_9546OverworldCode_9546GDBatteriesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDBackpackObjects2 */
/* Reuse gdjs.OverworldCode.GDBatteriesObjects2 */
/* Reuse gdjs.OverworldCode.GDBootsObjects2 */
/* Reuse gdjs.OverworldCode.GDBottleObjects2 */
/* Reuse gdjs.OverworldCode.GDHammerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].DisplayText(((gdjs.OverworldCode.GDBatteriesObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDBottleObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDBootsObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDHammerObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDBackpackObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDBackpackObjects2[0].getVariables()) : gdjs.OverworldCode.GDHammerObjects2[0].getVariables()) : gdjs.OverworldCode.GDBootsObjects2[0].getVariables()) : gdjs.OverworldCode.GDBottleObjects2[0].getVariables()) : gdjs.OverworldCode.GDBatteriesObjects2[0].getVariables()).get("PickupText").getAsString(), "TextDialogTimer", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(((gdjs.OverworldCode.GDBatteriesObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDBottleObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDBootsObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDHammerObjects2.length === 0 ) ? ((gdjs.OverworldCode.GDBackpackObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDBackpackObjects2[0].getVariables()) : gdjs.OverworldCode.GDHammerObjects2[0].getVariables()) : gdjs.OverworldCode.GDBootsObjects2[0].getVariables()) : gdjs.OverworldCode.GDBottleObjects2[0].getVariables()) : gdjs.OverworldCode.GDBatteriesObjects2[0].getVariables()).get("MaxTextTimer").getAsNumber());
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].SetMustWait(true, null);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}

{ //Subevents
gdjs.OverworldCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDMessageAreaObjects2Objects = Hashtable.newFrom({"MessageArea": gdjs.OverworldCode.GDMessageAreaObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer1Objects3ObjectsGDgdjs_9546OverworldCode_9546GDServer2Objects3ObjectsGDgdjs_9546OverworldCode_9546GDServer3Objects3Objects = Hashtable.newFrom({"Server1": gdjs.OverworldCode.GDServer1Objects3, "Server2": gdjs.OverworldCode.GDServer2Objects3, "Server3": gdjs.OverworldCode.GDServer3Objects3});
gdjs.OverworldCode.eventsList34 = function(runtimeScene) {

{

/* Reuse gdjs.OverworldCode.GDServer1Objects3 */
/* Reuse gdjs.OverworldCode.GDServer2Objects3 */
/* Reuse gdjs.OverworldCode.GDServer3Objects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDServer1Objects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDServer1Objects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDServer1Objects3[k] = gdjs.OverworldCode.GDServer1Objects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDServer1Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDServer2Objects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDServer2Objects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDServer2Objects3[k] = gdjs.OverworldCode.GDServer2Objects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDServer2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDServer3Objects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDServer3Objects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDServer3Objects3[k] = gdjs.OverworldCode.GDServer3Objects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDServer3Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDMessageAreaObjects3 */
/* Reuse gdjs.OverworldCode.GDServer1Objects3 */
/* Reuse gdjs.OverworldCode.GDServer2Objects3 */
/* Reuse gdjs.OverworldCode.GDServer3Objects3 */
{for(var i = 0, len = gdjs.OverworldCode.GDMessageAreaObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDMessageAreaObjects3[i].returnVariable(gdjs.OverworldCode.GDMessageAreaObjects3[i].getVariables().getFromIndex(0)).setString(((gdjs.OverworldCode.GDServer3Objects3.length === 0 ) ? ((gdjs.OverworldCode.GDServer2Objects3.length === 0 ) ? ((gdjs.OverworldCode.GDServer1Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServer1Objects3[0].getVariables()) : gdjs.OverworldCode.GDServer2Objects3[0].getVariables()) : gdjs.OverworldCode.GDServer3Objects3[0].getVariables()).get("CompleteText").getAsString());
}
}
}

}


};gdjs.OverworldCode.eventsList35 = function(runtimeScene) {

{

/* Reuse gdjs.OverworldCode.GDMessageAreaObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Server1"), gdjs.OverworldCode.GDServer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Server2"), gdjs.OverworldCode.GDServer2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Server3"), gdjs.OverworldCode.GDServer3Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDServer1Objects3ObjectsGDgdjs_9546OverworldCode_9546GDServer2Objects3ObjectsGDgdjs_9546OverworldCode_9546GDServer3Objects3Objects, (( gdjs.OverworldCode.GDMessageAreaObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDMessageAreaObjects3[0].getPointX("")), (( gdjs.OverworldCode.GDMessageAreaObjects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDMessageAreaObjects3[0].getPointY("")), false);
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDMessageAreaObjects3 */
/* Reuse gdjs.OverworldCode.GDServer1Objects3 */
/* Reuse gdjs.OverworldCode.GDServer2Objects3 */
/* Reuse gdjs.OverworldCode.GDServer3Objects3 */
{for(var i = 0, len = gdjs.OverworldCode.GDMessageAreaObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDMessageAreaObjects3[i].returnVariable(gdjs.OverworldCode.GDMessageAreaObjects3[i].getVariables().getFromIndex(0)).setString(((gdjs.OverworldCode.GDServer3Objects3.length === 0 ) ? ((gdjs.OverworldCode.GDServer2Objects3.length === 0 ) ? ((gdjs.OverworldCode.GDServer1Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDServer1Objects3[0].getVariables()) : gdjs.OverworldCode.GDServer2Objects3[0].getVariables()) : gdjs.OverworldCode.GDServer3Objects3[0].getVariables()).get("StartText").getAsString());
}
}

{ //Subevents
gdjs.OverworldCode.eventsList34(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList36 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.OverworldCode.GDMessageAreaObjects2, gdjs.OverworldCode.GDMessageAreaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDMessageAreaObjects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDMessageAreaObjects3[i].getVariableBoolean(gdjs.OverworldCode.GDMessageAreaObjects3[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDMessageAreaObjects3[k] = gdjs.OverworldCode.GDMessageAreaObjects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDMessageAreaObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12233268);
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDMessageAreaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(((gdjs.OverworldCode.GDMessageAreaObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDMessageAreaObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(((gdjs.OverworldCode.GDMessageAreaObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDMessageAreaObjects2[0].getVariables()).getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].DisplayText(((gdjs.OverworldCode.GDMessageAreaObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDMessageAreaObjects2[0].getVariables()).getFromIndex(0).getAsString(), "TextDialogTimer", null);
}
}
}

}


};gdjs.OverworldCode.asyncCallback23561388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects3);

{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects3[i].HideTextBox("TextDialogTimer", null);
}
}
gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.idToCallbackMap.set(23561388, gdjs.OverworldCode.asyncCallback23561388);
gdjs.OverworldCode.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
for (const obj of gdjs.OverworldCode.GDTextDialogObjects2) asyncObjectsList.addObject("TextDialog", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.OverworldCode.asyncCallback23561388(runtimeScene, asyncObjectsList)), 23561388, asyncObjectsList);
}
}

}


};gdjs.OverworldCode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDTextDialogObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDTextDialogObjects2[i].MustWait(null) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDTextDialogObjects2[k] = gdjs.OverworldCode.GDTextDialogObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDTextDialogObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDTextDialogObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDTextDialogObjects2[i].IsDoneTyping(null) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDTextDialogObjects2[k] = gdjs.OverworldCode.GDTextDialogObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDTextDialogObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList37(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDTextDialogObjects1.length;i<l;++i) {
    if ( !(gdjs.OverworldCode.GDTextDialogObjects1[i].MustWait(null)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDTextDialogObjects1[k] = gdjs.OverworldCode.GDTextDialogObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDTextDialogObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDTextDialogObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects1[i].HideTextBox("TextDialogTimer", null);
}
}
}

}


};gdjs.OverworldCode.eventsList39 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23557364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].HandleClick("TextDialogTimer", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].HandleClick("TextDialogTimer", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TextDialogTimer") >= runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber();
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList40 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MessageArea"), gdjs.OverworldCode.GDMessageAreaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDMessageAreaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextDialogTimer");
}

{ //Subevents
gdjs.OverworldCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TextDialogTimer") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].SetShowSkipText(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList39(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDShadedDarkJoystickObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.OverworldCode.GDTargetRoundButtonObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDShadedDarkJoystickObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDTargetRoundButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTargetRoundButtonObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.OverworldCode.GDTargetRoundButtonObjects1});
gdjs.OverworldCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.OverworldCode.GDShadedDarkJoystickObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDShadedDarkJoystickObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDShadedDarkJoystickObjects2[i].ActivateControl(false, null);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList41(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.OverworldCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDTargetRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDTargetRoundButtonObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.OverworldCode.GDTargetRoundButtonObjects1[k] = gdjs.OverworldCode.GDTargetRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDTargetRoundButtonObjects1Objects, runtimeScene, false, false);
}
isConditionTrue_0 = !isConditionTrue_1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.OverworldCode.GDShadedDarkJoystickObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDShadedDarkJoystickObjects1[i].TeleportAndPress(null);
}
}
}

}


};gdjs.OverworldCode.eventsList43 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 60) < 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDTimerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTimerObjects1[i].getBehavior("Text").setText("Time: " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60)) + ":0" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 60))));
}
}
}

}


};gdjs.OverworldCode.eventsList44 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.OverworldCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTimerObjects1[i].getBehavior("Text").setText("Time: " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60)) + ":" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 60))));
}
}

{ //Subevents
gdjs.OverworldCode.eventsList43(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNPC_959595953Objects2Objects = Hashtable.newFrom({"NPC_3": gdjs.OverworldCode.GDNPC_95953Objects2});
gdjs.OverworldCode.eventsList45 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.OverworldCode.GDNPC_95953Objects2, gdjs.OverworldCode.GDNPC_95953Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNPC_95953Objects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNPC_95953Objects3[i].getBehavior("Animation").getAnimationIndex() < 3 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNPC_95953Objects3[k] = gdjs.OverworldCode.GDNPC_95953Objects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNPC_95953Objects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23573060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDNPC_95953Objects3 */
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects3);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects3[i].DisplayText(((gdjs.OverworldCode.GDNPC_95953Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDNPC_95953Objects3[0].getVariables()).getFromIndex(3).getChild((( gdjs.OverworldCode.GDNPC_95953Objects3.length === 0 ) ? 0 :gdjs.OverworldCode.GDNPC_95953Objects3[0].getBehavior("Animation").getAnimationIndex())).getAsString(), "TextDialogTimer", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
}

}


{

/* Reuse gdjs.OverworldCode.GDNPC_95953Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNPC_95953Objects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNPC_95953Objects2[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNPC_95953Objects2[k] = gdjs.OverworldCode.GDNPC_95953Objects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNPC_95953Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23575324);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDNPC_95953Objects2 */
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].activateBehavior("TopDownMovementAnimator", false);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].DisplayText(((gdjs.OverworldCode.GDNPC_95953Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDNPC_95953Objects2[0].getVariables()).getFromIndex(2).getChild(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), null);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].SetShowSkipText(true, null);
}
}
}

}


};gdjs.OverworldCode.asyncCallback23589036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish", false);
}
gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.idToCallbackMap.set(23589036, gdjs.OverworldCode.asyncCallback23589036);
gdjs.OverworldCode.eventsList46 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.OverworldCode.asyncCallback23589036(runtimeScene, asyncObjectsList)), 23589036, asyncObjectsList);
}
}

}


};gdjs.OverworldCode.asyncCallback23588068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OverworldCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTransitionObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, null);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList46(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.idToCallbackMap.set(23588068, gdjs.OverworldCode.asyncCallback23588068);
gdjs.OverworldCode.eventsList47 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "SendFinishScore", runtimeScene.getScene().getVariables().getFromIndex(2), null), (runtimeScene) => (gdjs.OverworldCode.asyncCallback23588068(runtimeScene, asyncObjectsList)), 23588068, asyncObjectsList);
}
}

}


};gdjs.OverworldCode.eventsList48 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects2);
gdjs.copyArray(gdjs.OverworldCode.GDTextDialogObjects1, gdjs.OverworldCode.GDTextDialogObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.OverworldCode.GDTextDialogObjects2.length === 0 ) ? 0 :gdjs.OverworldCode.GDTextDialogObjects2[0].TextIndex(null)) < (gdjs.RuntimeObject.getVariableChildCount(((gdjs.OverworldCode.GDNPC_95953Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDNPC_95953Objects2[0].getVariables()).getFromIndex(2))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDNPC_95953Objects2 */
/* Reuse gdjs.OverworldCode.GDTextDialogObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects2[i].SetMainTextValue(((gdjs.OverworldCode.GDNPC_95953Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDNPC_95953Objects2[0].getVariables()).getFromIndex(2).getChild((gdjs.OverworldCode.GDTextDialogObjects2[i].TextIndex(null))).getAsString(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects1);
/* Reuse gdjs.OverworldCode.GDTextDialogObjects1 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.");
variables._declare("partA", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("XQiOjE3NTI1ODUyODIsImV4cCI6MjA2ODE2MTI4Mn0.");
variables._declare("ena", variable);
}
gdjs.OverworldCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.OverworldCode.GDTextDialogObjects1.length === 0 ) ? 0 :gdjs.OverworldCode.GDTextDialogObjects1[0].TextIndex(null)) >= (gdjs.RuntimeObject.getVariableChildCount(((gdjs.OverworldCode.GDNPC_95953Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.OverworldCode.GDNPC_95953Objects1[0].getVariables()).getFromIndex(2))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNPC_95953Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNPC_95953Objects1[i].getVariableBoolean(gdjs.OverworldCode.GDNPC_95953Objects1[i].getVariables().get("IsSent"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNPC_95953Objects1[k] = gdjs.OverworldCode.GDNPC_95953Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNPC_95953Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDNPC_95953Objects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDNPC_95953Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95953Objects1[i].returnVariable(gdjs.OverworldCode.GDNPC_95953Objects1[i].getVariables().get("IsSent")).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("sessionId").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("timeElapsed").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "SendFinishScore", "https://lcthnghtpgwbeamphgey.supabase.co/functions/v1/game-complete", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "SendFinishScore", "POST", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getAsString() + gdjs.OverworldCode.localVariables[0].getFromIndex(0).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() + gdjs.OverworldCode.localVariables[0].getFromIndex(1).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(5).getAsString(), "SendFinishScore", "Authorization", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "SendFinishScore", "Content-Type", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetJSONRequestBody.func(runtimeScene, "SendFinishScore", runtimeScene.getScene().getVariables().getFromIndex(3), null);
}

{ //Subevents
gdjs.OverworldCode.eventsList47(runtimeScene);} //End of subevents
}
gdjs.OverworldCode.localVariables.pop();

}


};gdjs.OverworldCode.eventsList49 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23579244);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects1[i].HandleClickFinal(null);
}
}

{ //Subevents
gdjs.OverworldCode.eventsList48(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList50 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNPC_959595953Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextDialogTimer");
}

{ //Subevents
gdjs.OverworldCode.eventsList45(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getAsString()) >= 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList49(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList51 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bridge"), gdjs.OverworldCode.GDBridgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bush1"), gdjs.OverworldCode.GDBush1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bush2"), gdjs.OverworldCode.GDBush2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner1"), gdjs.OverworldCode.GDCorner1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner2"), gdjs.OverworldCode.GDCorner2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner3"), gdjs.OverworldCode.GDCorner3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner4"), gdjs.OverworldCode.GDCorner4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC_1"), gdjs.OverworldCode.GDNPC_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC_2"), gdjs.OverworldCode.GDNPC_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("NameText"), gdjs.OverworldCode.GDNameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RuggedTerrain"), gdjs.OverworldCode.GDRuggedTerrainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Server1"), gdjs.OverworldCode.GDServer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Server2"), gdjs.OverworldCode.GDServer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Server3"), gdjs.OverworldCode.GDServer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Bag"), gdjs.OverworldCode.GDSign_9595BagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Boots"), gdjs.OverworldCode.GDSign_9595BootsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Bottle"), gdjs.OverworldCode.GDSign_9595BottleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Left"), gdjs.OverworldCode.GDSign_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Left_Right"), gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Right"), gdjs.OverworldCode.GDSign_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stone1"), gdjs.OverworldCode.GDStone1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.OverworldCode.GDStone2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextDialog"), gdjs.OverworldCode.GDTextDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Ground"), gdjs.OverworldCode.GDTilemap_9595GroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OverworldCode.GDTransitionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree1"), gdjs.OverworldCode.GDTree1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree2"), gdjs.OverworldCode.GDTree2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree3"), gdjs.OverworldCode.GDTree3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree4"), gdjs.OverworldCode.GDTree4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree5"), gdjs.OverworldCode.GDTree5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree6"), gdjs.OverworldCode.GDTree6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree7"), gdjs.OverworldCode.GDTree7Objects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
{for(var i = 0, len = gdjs.OverworldCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Backward", 0, null);
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDTree1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree1Objects1[i].setZOrder((gdjs.OverworldCode.GDTree1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDBush1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDBush1Objects1[i].setZOrder((gdjs.OverworldCode.GDBush1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree2Objects1[i].setZOrder((gdjs.OverworldCode.GDTree2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDNPC_95951Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95951Objects1[i].setZOrder((gdjs.OverworldCode.GDNPC_95951Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTilemap_9595GroundObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTilemap_9595GroundObjects1[i].setZOrder((gdjs.OverworldCode.GDTilemap_9595GroundObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDNPC_95952Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95952Objects1[i].setZOrder((gdjs.OverworldCode.GDNPC_95952Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1[i].setZOrder((gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree3Objects1[i].setZOrder((gdjs.OverworldCode.GDTree3Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree4Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree4Objects1[i].setZOrder((gdjs.OverworldCode.GDTree4Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDSign_9595LeftObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSign_9595LeftObjects1[i].setZOrder((gdjs.OverworldCode.GDSign_9595LeftObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDSign_9595RightObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSign_9595RightObjects1[i].setZOrder((gdjs.OverworldCode.GDSign_9595RightObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDBush2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDBush2Objects1[i].setZOrder((gdjs.OverworldCode.GDBush2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDStone1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDStone1Objects1[i].setZOrder((gdjs.OverworldCode.GDStone1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDStone2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDStone2Objects1[i].setZOrder((gdjs.OverworldCode.GDStone2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDBridgeObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDBridgeObjects1[i].setZOrder((gdjs.OverworldCode.GDBridgeObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDRuggedTerrainObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDRuggedTerrainObjects1[i].setZOrder((gdjs.OverworldCode.GDRuggedTerrainObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDNPC_95953Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPC_95953Objects1[i].setZOrder((gdjs.OverworldCode.GDNPC_95953Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDServer1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer1Objects1[i].setZOrder((gdjs.OverworldCode.GDServer1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDServer2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer2Objects1[i].setZOrder((gdjs.OverworldCode.GDServer2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDServer3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDServer3Objects1[i].setZOrder((gdjs.OverworldCode.GDServer3Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDSign_9595BottleObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSign_9595BottleObjects1[i].setZOrder((gdjs.OverworldCode.GDSign_9595BottleObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDSign_9595BootsObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSign_9595BootsObjects1[i].setZOrder((gdjs.OverworldCode.GDSign_9595BootsObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDSign_9595BagObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSign_9595BagObjects1[i].setZOrder((gdjs.OverworldCode.GDSign_9595BagObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree5Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree5Objects1[i].setZOrder((gdjs.OverworldCode.GDTree5Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree6Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree6Objects1[i].setZOrder((gdjs.OverworldCode.GDTree6Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree7Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree7Objects1[i].setZOrder((gdjs.OverworldCode.GDTree7Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDCorner1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDCorner1Objects1[i].setZOrder((gdjs.OverworldCode.GDCorner1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDCorner2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDCorner2Objects1[i].setZOrder((gdjs.OverworldCode.GDCorner2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDCorner3Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDCorner3Objects1[i].setZOrder((gdjs.OverworldCode.GDCorner3Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDCorner4Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDCorner4Objects1[i].setZOrder((gdjs.OverworldCode.GDCorner4Objects1[i].getY()));
}
}
{for(var i = 0, len = gdjs.OverworldCode.GDTextDialogObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTextDialogObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, null), "playerName", null));
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, null), "sessionId", null));
}
{for(var i = 0, len = gdjs.OverworldCode.GDNameTextObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNameTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}

{ //Subevents
gdjs.OverworldCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bridge"), gdjs.OverworldCode.GDBridgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bush1"), gdjs.OverworldCode.GDBush1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bush2"), gdjs.OverworldCode.GDBush2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner1"), gdjs.OverworldCode.GDCorner1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner2"), gdjs.OverworldCode.GDCorner2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner3"), gdjs.OverworldCode.GDCorner3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Corner4"), gdjs.OverworldCode.GDCorner4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC_1"), gdjs.OverworldCode.GDNPC_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC_2"), gdjs.OverworldCode.GDNPC_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC_3"), gdjs.OverworldCode.GDNPC_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RuggedTerrain"), gdjs.OverworldCode.GDRuggedTerrainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Server1"), gdjs.OverworldCode.GDServer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Server2"), gdjs.OverworldCode.GDServer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Server3"), gdjs.OverworldCode.GDServer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Bag"), gdjs.OverworldCode.GDSign_9595BagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Boots"), gdjs.OverworldCode.GDSign_9595BootsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Bottle"), gdjs.OverworldCode.GDSign_9595BottleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Left"), gdjs.OverworldCode.GDSign_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Left_Right"), gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign_Right"), gdjs.OverworldCode.GDSign_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stone1"), gdjs.OverworldCode.GDStone1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.OverworldCode.GDStone2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Ground"), gdjs.OverworldCode.GDTilemap_9595GroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree1"), gdjs.OverworldCode.GDTree1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree2"), gdjs.OverworldCode.GDTree2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree3"), gdjs.OverworldCode.GDTree3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree4"), gdjs.OverworldCode.GDTree4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree5"), gdjs.OverworldCode.GDTree5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree6"), gdjs.OverworldCode.GDTree6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree7"), gdjs.OverworldCode.GDTree7Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDTree1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDBush1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNPC_959595951Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTilemap_95959595GroundObjects1ObjectsGDgdjs_9546OverworldCode_9546GDNPC_959595952Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595Left_95959595RightObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTree3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree4Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595LeftObjects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595RightObjects1ObjectsGDgdjs_9546OverworldCode_9546GDBush2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDStone1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDStone2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDBridgeObjects1ObjectsGDgdjs_9546OverworldCode_9546GDRuggedTerrainObjects1ObjectsGDgdjs_9546OverworldCode_9546GDNPC_959595953Objects1ObjectsGDgdjs_9546OverworldCode_9546GDServer1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDServer2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDServer3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595BottleObjects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595BootsObjects1ObjectsGDgdjs_9546OverworldCode_9546GDSign_95959595BagObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTree5Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree6Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree7Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner3Objects1ObjectsGDgdjs_9546OverworldCode_9546GDCorner4Objects1Objects, false);
}
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.OverworldCode.GDPlayerObjects1.length !== 0 ? gdjs.OverworldCode.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].setAnimationFrame(0);
}
}
}

}


{


gdjs.OverworldCode.eventsList25(runtimeScene);
}


{


gdjs.OverworldCode.eventsList33(runtimeScene);
}


{


gdjs.OverworldCode.eventsList40(runtimeScene);
}


{


gdjs.OverworldCode.eventsList42(runtimeScene);
}


{


gdjs.OverworldCode.eventsList44(runtimeScene);
}


{


gdjs.OverworldCode.eventsList50(runtimeScene);
}


};

gdjs.OverworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverworldCode.GDTextDialogObjects1.length = 0;
gdjs.OverworldCode.GDTextDialogObjects2.length = 0;
gdjs.OverworldCode.GDTextDialogObjects3.length = 0;
gdjs.OverworldCode.GDTextDialogObjects4.length = 0;
gdjs.OverworldCode.GDTextDialogObjects5.length = 0;
gdjs.OverworldCode.GDTextDialogObjects6.length = 0;
gdjs.OverworldCode.GDTextDialogObjects7.length = 0;
gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDPlayerObjects4.length = 0;
gdjs.OverworldCode.GDPlayerObjects5.length = 0;
gdjs.OverworldCode.GDPlayerObjects6.length = 0;
gdjs.OverworldCode.GDPlayerObjects7.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects1.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects2.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects3.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects4.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects5.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects6.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects7.length = 0;
gdjs.OverworldCode.GDTree1Objects1.length = 0;
gdjs.OverworldCode.GDTree1Objects2.length = 0;
gdjs.OverworldCode.GDTree1Objects3.length = 0;
gdjs.OverworldCode.GDTree1Objects4.length = 0;
gdjs.OverworldCode.GDTree1Objects5.length = 0;
gdjs.OverworldCode.GDTree1Objects6.length = 0;
gdjs.OverworldCode.GDTree1Objects7.length = 0;
gdjs.OverworldCode.GDTree2Objects1.length = 0;
gdjs.OverworldCode.GDTree2Objects2.length = 0;
gdjs.OverworldCode.GDTree2Objects3.length = 0;
gdjs.OverworldCode.GDTree2Objects4.length = 0;
gdjs.OverworldCode.GDTree2Objects5.length = 0;
gdjs.OverworldCode.GDTree2Objects6.length = 0;
gdjs.OverworldCode.GDTree2Objects7.length = 0;
gdjs.OverworldCode.GDBush1Objects1.length = 0;
gdjs.OverworldCode.GDBush1Objects2.length = 0;
gdjs.OverworldCode.GDBush1Objects3.length = 0;
gdjs.OverworldCode.GDBush1Objects4.length = 0;
gdjs.OverworldCode.GDBush1Objects5.length = 0;
gdjs.OverworldCode.GDBush1Objects6.length = 0;
gdjs.OverworldCode.GDBush1Objects7.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects5.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects6.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects7.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects3.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects4.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects5.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects6.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects7.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects1.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects2.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects3.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects4.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects5.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects6.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects7.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects1.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects2.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects3.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects4.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects5.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects6.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects7.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects1.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects2.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects3.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects4.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects5.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects6.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects7.length = 0;
gdjs.OverworldCode.GDBootsObjects1.length = 0;
gdjs.OverworldCode.GDBootsObjects2.length = 0;
gdjs.OverworldCode.GDBootsObjects3.length = 0;
gdjs.OverworldCode.GDBootsObjects4.length = 0;
gdjs.OverworldCode.GDBootsObjects5.length = 0;
gdjs.OverworldCode.GDBootsObjects6.length = 0;
gdjs.OverworldCode.GDBootsObjects7.length = 0;
gdjs.OverworldCode.GDHammerObjects1.length = 0;
gdjs.OverworldCode.GDHammerObjects2.length = 0;
gdjs.OverworldCode.GDHammerObjects3.length = 0;
gdjs.OverworldCode.GDHammerObjects4.length = 0;
gdjs.OverworldCode.GDHammerObjects5.length = 0;
gdjs.OverworldCode.GDHammerObjects6.length = 0;
gdjs.OverworldCode.GDHammerObjects7.length = 0;
gdjs.OverworldCode.GDBackpackObjects1.length = 0;
gdjs.OverworldCode.GDBackpackObjects2.length = 0;
gdjs.OverworldCode.GDBackpackObjects3.length = 0;
gdjs.OverworldCode.GDBackpackObjects4.length = 0;
gdjs.OverworldCode.GDBackpackObjects5.length = 0;
gdjs.OverworldCode.GDBackpackObjects6.length = 0;
gdjs.OverworldCode.GDBackpackObjects7.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects1.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects2.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects3.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects4.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects5.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects6.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects7.length = 0;
gdjs.OverworldCode.GDNameTextObjects1.length = 0;
gdjs.OverworldCode.GDNameTextObjects2.length = 0;
gdjs.OverworldCode.GDNameTextObjects3.length = 0;
gdjs.OverworldCode.GDNameTextObjects4.length = 0;
gdjs.OverworldCode.GDNameTextObjects5.length = 0;
gdjs.OverworldCode.GDNameTextObjects6.length = 0;
gdjs.OverworldCode.GDNameTextObjects7.length = 0;
gdjs.OverworldCode.GDTimerObjects1.length = 0;
gdjs.OverworldCode.GDTimerObjects2.length = 0;
gdjs.OverworldCode.GDTimerObjects3.length = 0;
gdjs.OverworldCode.GDTimerObjects4.length = 0;
gdjs.OverworldCode.GDTimerObjects5.length = 0;
gdjs.OverworldCode.GDTimerObjects6.length = 0;
gdjs.OverworldCode.GDTimerObjects7.length = 0;
gdjs.OverworldCode.GDTree3Objects1.length = 0;
gdjs.OverworldCode.GDTree3Objects2.length = 0;
gdjs.OverworldCode.GDTree3Objects3.length = 0;
gdjs.OverworldCode.GDTree3Objects4.length = 0;
gdjs.OverworldCode.GDTree3Objects5.length = 0;
gdjs.OverworldCode.GDTree3Objects6.length = 0;
gdjs.OverworldCode.GDTree3Objects7.length = 0;
gdjs.OverworldCode.GDTree4Objects1.length = 0;
gdjs.OverworldCode.GDTree4Objects2.length = 0;
gdjs.OverworldCode.GDTree4Objects3.length = 0;
gdjs.OverworldCode.GDTree4Objects4.length = 0;
gdjs.OverworldCode.GDTree4Objects5.length = 0;
gdjs.OverworldCode.GDTree4Objects6.length = 0;
gdjs.OverworldCode.GDTree4Objects7.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects7.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects1.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects2.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects3.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects4.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects5.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects6.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects7.length = 0;
gdjs.OverworldCode.GDServer1Objects1.length = 0;
gdjs.OverworldCode.GDServer1Objects2.length = 0;
gdjs.OverworldCode.GDServer1Objects3.length = 0;
gdjs.OverworldCode.GDServer1Objects4.length = 0;
gdjs.OverworldCode.GDServer1Objects5.length = 0;
gdjs.OverworldCode.GDServer1Objects6.length = 0;
gdjs.OverworldCode.GDServer1Objects7.length = 0;
gdjs.OverworldCode.GDBush2Objects1.length = 0;
gdjs.OverworldCode.GDBush2Objects2.length = 0;
gdjs.OverworldCode.GDBush2Objects3.length = 0;
gdjs.OverworldCode.GDBush2Objects4.length = 0;
gdjs.OverworldCode.GDBush2Objects5.length = 0;
gdjs.OverworldCode.GDBush2Objects6.length = 0;
gdjs.OverworldCode.GDBush2Objects7.length = 0;
gdjs.OverworldCode.GDStone1Objects1.length = 0;
gdjs.OverworldCode.GDStone1Objects2.length = 0;
gdjs.OverworldCode.GDStone1Objects3.length = 0;
gdjs.OverworldCode.GDStone1Objects4.length = 0;
gdjs.OverworldCode.GDStone1Objects5.length = 0;
gdjs.OverworldCode.GDStone1Objects6.length = 0;
gdjs.OverworldCode.GDStone1Objects7.length = 0;
gdjs.OverworldCode.GDStone2Objects1.length = 0;
gdjs.OverworldCode.GDStone2Objects2.length = 0;
gdjs.OverworldCode.GDStone2Objects3.length = 0;
gdjs.OverworldCode.GDStone2Objects4.length = 0;
gdjs.OverworldCode.GDStone2Objects5.length = 0;
gdjs.OverworldCode.GDStone2Objects6.length = 0;
gdjs.OverworldCode.GDStone2Objects7.length = 0;
gdjs.OverworldCode.GDServer2Objects1.length = 0;
gdjs.OverworldCode.GDServer2Objects2.length = 0;
gdjs.OverworldCode.GDServer2Objects3.length = 0;
gdjs.OverworldCode.GDServer2Objects4.length = 0;
gdjs.OverworldCode.GDServer2Objects5.length = 0;
gdjs.OverworldCode.GDServer2Objects6.length = 0;
gdjs.OverworldCode.GDServer2Objects7.length = 0;
gdjs.OverworldCode.GDServer3Objects1.length = 0;
gdjs.OverworldCode.GDServer3Objects2.length = 0;
gdjs.OverworldCode.GDServer3Objects3.length = 0;
gdjs.OverworldCode.GDServer3Objects4.length = 0;
gdjs.OverworldCode.GDServer3Objects5.length = 0;
gdjs.OverworldCode.GDServer3Objects6.length = 0;
gdjs.OverworldCode.GDServer3Objects7.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBottleObjects1.length = 0;
gdjs.OverworldCode.GDBottleObjects2.length = 0;
gdjs.OverworldCode.GDBottleObjects3.length = 0;
gdjs.OverworldCode.GDBottleObjects4.length = 0;
gdjs.OverworldCode.GDBottleObjects5.length = 0;
gdjs.OverworldCode.GDBottleObjects6.length = 0;
gdjs.OverworldCode.GDBottleObjects7.length = 0;
gdjs.OverworldCode.GDBridgeObjects1.length = 0;
gdjs.OverworldCode.GDBridgeObjects2.length = 0;
gdjs.OverworldCode.GDBridgeObjects3.length = 0;
gdjs.OverworldCode.GDBridgeObjects4.length = 0;
gdjs.OverworldCode.GDBridgeObjects5.length = 0;
gdjs.OverworldCode.GDBridgeObjects6.length = 0;
gdjs.OverworldCode.GDBridgeObjects7.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects1.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects2.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects3.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects4.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects5.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects6.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects7.length = 0;
gdjs.OverworldCode.GDCableButtonObjects1.length = 0;
gdjs.OverworldCode.GDCableButtonObjects2.length = 0;
gdjs.OverworldCode.GDCableButtonObjects3.length = 0;
gdjs.OverworldCode.GDCableButtonObjects4.length = 0;
gdjs.OverworldCode.GDCableButtonObjects5.length = 0;
gdjs.OverworldCode.GDCableButtonObjects6.length = 0;
gdjs.OverworldCode.GDCableButtonObjects7.length = 0;
gdjs.OverworldCode.GDCableObjects1.length = 0;
gdjs.OverworldCode.GDCableObjects2.length = 0;
gdjs.OverworldCode.GDCableObjects3.length = 0;
gdjs.OverworldCode.GDCableObjects4.length = 0;
gdjs.OverworldCode.GDCableObjects5.length = 0;
gdjs.OverworldCode.GDCableObjects6.length = 0;
gdjs.OverworldCode.GDCableObjects7.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects1.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects2.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects3.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects4.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects5.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects6.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects7.length = 0;
gdjs.OverworldCode.GDBatteriesObjects1.length = 0;
gdjs.OverworldCode.GDBatteriesObjects2.length = 0;
gdjs.OverworldCode.GDBatteriesObjects3.length = 0;
gdjs.OverworldCode.GDBatteriesObjects4.length = 0;
gdjs.OverworldCode.GDBatteriesObjects5.length = 0;
gdjs.OverworldCode.GDBatteriesObjects6.length = 0;
gdjs.OverworldCode.GDBatteriesObjects7.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDServerButtonObjects1.length = 0;
gdjs.OverworldCode.GDServerButtonObjects2.length = 0;
gdjs.OverworldCode.GDServerButtonObjects3.length = 0;
gdjs.OverworldCode.GDServerButtonObjects4.length = 0;
gdjs.OverworldCode.GDServerButtonObjects5.length = 0;
gdjs.OverworldCode.GDServerButtonObjects6.length = 0;
gdjs.OverworldCode.GDServerButtonObjects7.length = 0;
gdjs.OverworldCode.GDBush3Objects1.length = 0;
gdjs.OverworldCode.GDBush3Objects2.length = 0;
gdjs.OverworldCode.GDBush3Objects3.length = 0;
gdjs.OverworldCode.GDBush3Objects4.length = 0;
gdjs.OverworldCode.GDBush3Objects5.length = 0;
gdjs.OverworldCode.GDBush3Objects6.length = 0;
gdjs.OverworldCode.GDBush3Objects7.length = 0;
gdjs.OverworldCode.GDTree5Objects1.length = 0;
gdjs.OverworldCode.GDTree5Objects2.length = 0;
gdjs.OverworldCode.GDTree5Objects3.length = 0;
gdjs.OverworldCode.GDTree5Objects4.length = 0;
gdjs.OverworldCode.GDTree5Objects5.length = 0;
gdjs.OverworldCode.GDTree5Objects6.length = 0;
gdjs.OverworldCode.GDTree5Objects7.length = 0;
gdjs.OverworldCode.GDTree6Objects1.length = 0;
gdjs.OverworldCode.GDTree6Objects2.length = 0;
gdjs.OverworldCode.GDTree6Objects3.length = 0;
gdjs.OverworldCode.GDTree6Objects4.length = 0;
gdjs.OverworldCode.GDTree6Objects5.length = 0;
gdjs.OverworldCode.GDTree6Objects6.length = 0;
gdjs.OverworldCode.GDTree6Objects7.length = 0;
gdjs.OverworldCode.GDTree7Objects1.length = 0;
gdjs.OverworldCode.GDTree7Objects2.length = 0;
gdjs.OverworldCode.GDTree7Objects3.length = 0;
gdjs.OverworldCode.GDTree7Objects4.length = 0;
gdjs.OverworldCode.GDTree7Objects5.length = 0;
gdjs.OverworldCode.GDTree7Objects6.length = 0;
gdjs.OverworldCode.GDTree7Objects7.length = 0;
gdjs.OverworldCode.GDBush4Objects1.length = 0;
gdjs.OverworldCode.GDBush4Objects2.length = 0;
gdjs.OverworldCode.GDBush4Objects3.length = 0;
gdjs.OverworldCode.GDBush4Objects4.length = 0;
gdjs.OverworldCode.GDBush4Objects5.length = 0;
gdjs.OverworldCode.GDBush4Objects6.length = 0;
gdjs.OverworldCode.GDBush4Objects7.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects7.length = 0;
gdjs.OverworldCode.GDCorner1Objects1.length = 0;
gdjs.OverworldCode.GDCorner1Objects2.length = 0;
gdjs.OverworldCode.GDCorner1Objects3.length = 0;
gdjs.OverworldCode.GDCorner1Objects4.length = 0;
gdjs.OverworldCode.GDCorner1Objects5.length = 0;
gdjs.OverworldCode.GDCorner1Objects6.length = 0;
gdjs.OverworldCode.GDCorner1Objects7.length = 0;
gdjs.OverworldCode.GDCorner2Objects1.length = 0;
gdjs.OverworldCode.GDCorner2Objects2.length = 0;
gdjs.OverworldCode.GDCorner2Objects3.length = 0;
gdjs.OverworldCode.GDCorner2Objects4.length = 0;
gdjs.OverworldCode.GDCorner2Objects5.length = 0;
gdjs.OverworldCode.GDCorner2Objects6.length = 0;
gdjs.OverworldCode.GDCorner2Objects7.length = 0;
gdjs.OverworldCode.GDCorner3Objects1.length = 0;
gdjs.OverworldCode.GDCorner3Objects2.length = 0;
gdjs.OverworldCode.GDCorner3Objects3.length = 0;
gdjs.OverworldCode.GDCorner3Objects4.length = 0;
gdjs.OverworldCode.GDCorner3Objects5.length = 0;
gdjs.OverworldCode.GDCorner3Objects6.length = 0;
gdjs.OverworldCode.GDCorner3Objects7.length = 0;
gdjs.OverworldCode.GDCorner4Objects1.length = 0;
gdjs.OverworldCode.GDCorner4Objects2.length = 0;
gdjs.OverworldCode.GDCorner4Objects3.length = 0;
gdjs.OverworldCode.GDCorner4Objects4.length = 0;
gdjs.OverworldCode.GDCorner4Objects5.length = 0;
gdjs.OverworldCode.GDCorner4Objects6.length = 0;
gdjs.OverworldCode.GDCorner4Objects7.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects1.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects2.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects3.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects4.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects5.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects6.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects7.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects4.length = 0;
gdjs.OverworldCode.GDTransitionObjects5.length = 0;
gdjs.OverworldCode.GDTransitionObjects6.length = 0;
gdjs.OverworldCode.GDTransitionObjects7.length = 0;

gdjs.OverworldCode.eventsList51(runtimeScene);
gdjs.OverworldCode.GDTextDialogObjects1.length = 0;
gdjs.OverworldCode.GDTextDialogObjects2.length = 0;
gdjs.OverworldCode.GDTextDialogObjects3.length = 0;
gdjs.OverworldCode.GDTextDialogObjects4.length = 0;
gdjs.OverworldCode.GDTextDialogObjects5.length = 0;
gdjs.OverworldCode.GDTextDialogObjects6.length = 0;
gdjs.OverworldCode.GDTextDialogObjects7.length = 0;
gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDPlayerObjects4.length = 0;
gdjs.OverworldCode.GDPlayerObjects5.length = 0;
gdjs.OverworldCode.GDPlayerObjects6.length = 0;
gdjs.OverworldCode.GDPlayerObjects7.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects1.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects2.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects3.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects4.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects5.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects6.length = 0;
gdjs.OverworldCode.GDNPC_95951Objects7.length = 0;
gdjs.OverworldCode.GDTree1Objects1.length = 0;
gdjs.OverworldCode.GDTree1Objects2.length = 0;
gdjs.OverworldCode.GDTree1Objects3.length = 0;
gdjs.OverworldCode.GDTree1Objects4.length = 0;
gdjs.OverworldCode.GDTree1Objects5.length = 0;
gdjs.OverworldCode.GDTree1Objects6.length = 0;
gdjs.OverworldCode.GDTree1Objects7.length = 0;
gdjs.OverworldCode.GDTree2Objects1.length = 0;
gdjs.OverworldCode.GDTree2Objects2.length = 0;
gdjs.OverworldCode.GDTree2Objects3.length = 0;
gdjs.OverworldCode.GDTree2Objects4.length = 0;
gdjs.OverworldCode.GDTree2Objects5.length = 0;
gdjs.OverworldCode.GDTree2Objects6.length = 0;
gdjs.OverworldCode.GDTree2Objects7.length = 0;
gdjs.OverworldCode.GDBush1Objects1.length = 0;
gdjs.OverworldCode.GDBush1Objects2.length = 0;
gdjs.OverworldCode.GDBush1Objects3.length = 0;
gdjs.OverworldCode.GDBush1Objects4.length = 0;
gdjs.OverworldCode.GDBush1Objects5.length = 0;
gdjs.OverworldCode.GDBush1Objects6.length = 0;
gdjs.OverworldCode.GDBush1Objects7.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects5.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects6.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects7.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects3.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects4.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects5.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects6.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects7.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects1.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects2.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects3.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects4.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects5.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects6.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects7.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects1.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects2.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects3.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects4.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects5.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects6.length = 0;
gdjs.OverworldCode.GDNPC_95952Objects7.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects1.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects2.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects3.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects4.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects5.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects6.length = 0;
gdjs.OverworldCode.GDInventorySlotObjects7.length = 0;
gdjs.OverworldCode.GDBootsObjects1.length = 0;
gdjs.OverworldCode.GDBootsObjects2.length = 0;
gdjs.OverworldCode.GDBootsObjects3.length = 0;
gdjs.OverworldCode.GDBootsObjects4.length = 0;
gdjs.OverworldCode.GDBootsObjects5.length = 0;
gdjs.OverworldCode.GDBootsObjects6.length = 0;
gdjs.OverworldCode.GDBootsObjects7.length = 0;
gdjs.OverworldCode.GDHammerObjects1.length = 0;
gdjs.OverworldCode.GDHammerObjects2.length = 0;
gdjs.OverworldCode.GDHammerObjects3.length = 0;
gdjs.OverworldCode.GDHammerObjects4.length = 0;
gdjs.OverworldCode.GDHammerObjects5.length = 0;
gdjs.OverworldCode.GDHammerObjects6.length = 0;
gdjs.OverworldCode.GDHammerObjects7.length = 0;
gdjs.OverworldCode.GDBackpackObjects1.length = 0;
gdjs.OverworldCode.GDBackpackObjects2.length = 0;
gdjs.OverworldCode.GDBackpackObjects3.length = 0;
gdjs.OverworldCode.GDBackpackObjects4.length = 0;
gdjs.OverworldCode.GDBackpackObjects5.length = 0;
gdjs.OverworldCode.GDBackpackObjects6.length = 0;
gdjs.OverworldCode.GDBackpackObjects7.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects1.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects2.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects3.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects4.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects5.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects6.length = 0;
gdjs.OverworldCode.GDInventoryIconObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595Left_9595RightObjects7.length = 0;
gdjs.OverworldCode.GDNameTextObjects1.length = 0;
gdjs.OverworldCode.GDNameTextObjects2.length = 0;
gdjs.OverworldCode.GDNameTextObjects3.length = 0;
gdjs.OverworldCode.GDNameTextObjects4.length = 0;
gdjs.OverworldCode.GDNameTextObjects5.length = 0;
gdjs.OverworldCode.GDNameTextObjects6.length = 0;
gdjs.OverworldCode.GDNameTextObjects7.length = 0;
gdjs.OverworldCode.GDTimerObjects1.length = 0;
gdjs.OverworldCode.GDTimerObjects2.length = 0;
gdjs.OverworldCode.GDTimerObjects3.length = 0;
gdjs.OverworldCode.GDTimerObjects4.length = 0;
gdjs.OverworldCode.GDTimerObjects5.length = 0;
gdjs.OverworldCode.GDTimerObjects6.length = 0;
gdjs.OverworldCode.GDTimerObjects7.length = 0;
gdjs.OverworldCode.GDTree3Objects1.length = 0;
gdjs.OverworldCode.GDTree3Objects2.length = 0;
gdjs.OverworldCode.GDTree3Objects3.length = 0;
gdjs.OverworldCode.GDTree3Objects4.length = 0;
gdjs.OverworldCode.GDTree3Objects5.length = 0;
gdjs.OverworldCode.GDTree3Objects6.length = 0;
gdjs.OverworldCode.GDTree3Objects7.length = 0;
gdjs.OverworldCode.GDTree4Objects1.length = 0;
gdjs.OverworldCode.GDTree4Objects2.length = 0;
gdjs.OverworldCode.GDTree4Objects3.length = 0;
gdjs.OverworldCode.GDTree4Objects4.length = 0;
gdjs.OverworldCode.GDTree4Objects5.length = 0;
gdjs.OverworldCode.GDTree4Objects6.length = 0;
gdjs.OverworldCode.GDTree4Objects7.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595LeftObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595RightObjects7.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects1.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects2.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects3.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects4.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects5.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects6.length = 0;
gdjs.OverworldCode.GDNPC_95953Objects7.length = 0;
gdjs.OverworldCode.GDServer1Objects1.length = 0;
gdjs.OverworldCode.GDServer1Objects2.length = 0;
gdjs.OverworldCode.GDServer1Objects3.length = 0;
gdjs.OverworldCode.GDServer1Objects4.length = 0;
gdjs.OverworldCode.GDServer1Objects5.length = 0;
gdjs.OverworldCode.GDServer1Objects6.length = 0;
gdjs.OverworldCode.GDServer1Objects7.length = 0;
gdjs.OverworldCode.GDBush2Objects1.length = 0;
gdjs.OverworldCode.GDBush2Objects2.length = 0;
gdjs.OverworldCode.GDBush2Objects3.length = 0;
gdjs.OverworldCode.GDBush2Objects4.length = 0;
gdjs.OverworldCode.GDBush2Objects5.length = 0;
gdjs.OverworldCode.GDBush2Objects6.length = 0;
gdjs.OverworldCode.GDBush2Objects7.length = 0;
gdjs.OverworldCode.GDStone1Objects1.length = 0;
gdjs.OverworldCode.GDStone1Objects2.length = 0;
gdjs.OverworldCode.GDStone1Objects3.length = 0;
gdjs.OverworldCode.GDStone1Objects4.length = 0;
gdjs.OverworldCode.GDStone1Objects5.length = 0;
gdjs.OverworldCode.GDStone1Objects6.length = 0;
gdjs.OverworldCode.GDStone1Objects7.length = 0;
gdjs.OverworldCode.GDStone2Objects1.length = 0;
gdjs.OverworldCode.GDStone2Objects2.length = 0;
gdjs.OverworldCode.GDStone2Objects3.length = 0;
gdjs.OverworldCode.GDStone2Objects4.length = 0;
gdjs.OverworldCode.GDStone2Objects5.length = 0;
gdjs.OverworldCode.GDStone2Objects6.length = 0;
gdjs.OverworldCode.GDStone2Objects7.length = 0;
gdjs.OverworldCode.GDServer2Objects1.length = 0;
gdjs.OverworldCode.GDServer2Objects2.length = 0;
gdjs.OverworldCode.GDServer2Objects3.length = 0;
gdjs.OverworldCode.GDServer2Objects4.length = 0;
gdjs.OverworldCode.GDServer2Objects5.length = 0;
gdjs.OverworldCode.GDServer2Objects6.length = 0;
gdjs.OverworldCode.GDServer2Objects7.length = 0;
gdjs.OverworldCode.GDServer3Objects1.length = 0;
gdjs.OverworldCode.GDServer3Objects2.length = 0;
gdjs.OverworldCode.GDServer3Objects3.length = 0;
gdjs.OverworldCode.GDServer3Objects4.length = 0;
gdjs.OverworldCode.GDServer3Objects5.length = 0;
gdjs.OverworldCode.GDServer3Objects6.length = 0;
gdjs.OverworldCode.GDServer3Objects7.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDAxeSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBootsSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBackpackSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDServerSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBottleSpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDBottleObjects1.length = 0;
gdjs.OverworldCode.GDBottleObjects2.length = 0;
gdjs.OverworldCode.GDBottleObjects3.length = 0;
gdjs.OverworldCode.GDBottleObjects4.length = 0;
gdjs.OverworldCode.GDBottleObjects5.length = 0;
gdjs.OverworldCode.GDBottleObjects6.length = 0;
gdjs.OverworldCode.GDBottleObjects7.length = 0;
gdjs.OverworldCode.GDBridgeObjects1.length = 0;
gdjs.OverworldCode.GDBridgeObjects2.length = 0;
gdjs.OverworldCode.GDBridgeObjects3.length = 0;
gdjs.OverworldCode.GDBridgeObjects4.length = 0;
gdjs.OverworldCode.GDBridgeObjects5.length = 0;
gdjs.OverworldCode.GDBridgeObjects6.length = 0;
gdjs.OverworldCode.GDBridgeObjects7.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects1.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects2.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects3.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects4.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects5.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects6.length = 0;
gdjs.OverworldCode.GDRuggedTerrainObjects7.length = 0;
gdjs.OverworldCode.GDCableButtonObjects1.length = 0;
gdjs.OverworldCode.GDCableButtonObjects2.length = 0;
gdjs.OverworldCode.GDCableButtonObjects3.length = 0;
gdjs.OverworldCode.GDCableButtonObjects4.length = 0;
gdjs.OverworldCode.GDCableButtonObjects5.length = 0;
gdjs.OverworldCode.GDCableButtonObjects6.length = 0;
gdjs.OverworldCode.GDCableButtonObjects7.length = 0;
gdjs.OverworldCode.GDCableObjects1.length = 0;
gdjs.OverworldCode.GDCableObjects2.length = 0;
gdjs.OverworldCode.GDCableObjects3.length = 0;
gdjs.OverworldCode.GDCableObjects4.length = 0;
gdjs.OverworldCode.GDCableObjects5.length = 0;
gdjs.OverworldCode.GDCableObjects6.length = 0;
gdjs.OverworldCode.GDCableObjects7.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects1.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects2.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects3.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects4.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects5.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects6.length = 0;
gdjs.OverworldCode.GDButtonSpawnpointObjects7.length = 0;
gdjs.OverworldCode.GDBatteriesObjects1.length = 0;
gdjs.OverworldCode.GDBatteriesObjects2.length = 0;
gdjs.OverworldCode.GDBatteriesObjects3.length = 0;
gdjs.OverworldCode.GDBatteriesObjects4.length = 0;
gdjs.OverworldCode.GDBatteriesObjects5.length = 0;
gdjs.OverworldCode.GDBatteriesObjects6.length = 0;
gdjs.OverworldCode.GDBatteriesObjects7.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects1.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects2.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects3.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects4.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects5.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects6.length = 0;
gdjs.OverworldCode.GDBatterySpawnPointObjects7.length = 0;
gdjs.OverworldCode.GDServerButtonObjects1.length = 0;
gdjs.OverworldCode.GDServerButtonObjects2.length = 0;
gdjs.OverworldCode.GDServerButtonObjects3.length = 0;
gdjs.OverworldCode.GDServerButtonObjects4.length = 0;
gdjs.OverworldCode.GDServerButtonObjects5.length = 0;
gdjs.OverworldCode.GDServerButtonObjects6.length = 0;
gdjs.OverworldCode.GDServerButtonObjects7.length = 0;
gdjs.OverworldCode.GDBush3Objects1.length = 0;
gdjs.OverworldCode.GDBush3Objects2.length = 0;
gdjs.OverworldCode.GDBush3Objects3.length = 0;
gdjs.OverworldCode.GDBush3Objects4.length = 0;
gdjs.OverworldCode.GDBush3Objects5.length = 0;
gdjs.OverworldCode.GDBush3Objects6.length = 0;
gdjs.OverworldCode.GDBush3Objects7.length = 0;
gdjs.OverworldCode.GDTree5Objects1.length = 0;
gdjs.OverworldCode.GDTree5Objects2.length = 0;
gdjs.OverworldCode.GDTree5Objects3.length = 0;
gdjs.OverworldCode.GDTree5Objects4.length = 0;
gdjs.OverworldCode.GDTree5Objects5.length = 0;
gdjs.OverworldCode.GDTree5Objects6.length = 0;
gdjs.OverworldCode.GDTree5Objects7.length = 0;
gdjs.OverworldCode.GDTree6Objects1.length = 0;
gdjs.OverworldCode.GDTree6Objects2.length = 0;
gdjs.OverworldCode.GDTree6Objects3.length = 0;
gdjs.OverworldCode.GDTree6Objects4.length = 0;
gdjs.OverworldCode.GDTree6Objects5.length = 0;
gdjs.OverworldCode.GDTree6Objects6.length = 0;
gdjs.OverworldCode.GDTree6Objects7.length = 0;
gdjs.OverworldCode.GDTree7Objects1.length = 0;
gdjs.OverworldCode.GDTree7Objects2.length = 0;
gdjs.OverworldCode.GDTree7Objects3.length = 0;
gdjs.OverworldCode.GDTree7Objects4.length = 0;
gdjs.OverworldCode.GDTree7Objects5.length = 0;
gdjs.OverworldCode.GDTree7Objects6.length = 0;
gdjs.OverworldCode.GDTree7Objects7.length = 0;
gdjs.OverworldCode.GDBush4Objects1.length = 0;
gdjs.OverworldCode.GDBush4Objects2.length = 0;
gdjs.OverworldCode.GDBush4Objects3.length = 0;
gdjs.OverworldCode.GDBush4Objects4.length = 0;
gdjs.OverworldCode.GDBush4Objects5.length = 0;
gdjs.OverworldCode.GDBush4Objects6.length = 0;
gdjs.OverworldCode.GDBush4Objects7.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595BottleObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595BootsObjects7.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects1.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects2.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects3.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects4.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects5.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects6.length = 0;
gdjs.OverworldCode.GDSign_9595BagObjects7.length = 0;
gdjs.OverworldCode.GDCorner1Objects1.length = 0;
gdjs.OverworldCode.GDCorner1Objects2.length = 0;
gdjs.OverworldCode.GDCorner1Objects3.length = 0;
gdjs.OverworldCode.GDCorner1Objects4.length = 0;
gdjs.OverworldCode.GDCorner1Objects5.length = 0;
gdjs.OverworldCode.GDCorner1Objects6.length = 0;
gdjs.OverworldCode.GDCorner1Objects7.length = 0;
gdjs.OverworldCode.GDCorner2Objects1.length = 0;
gdjs.OverworldCode.GDCorner2Objects2.length = 0;
gdjs.OverworldCode.GDCorner2Objects3.length = 0;
gdjs.OverworldCode.GDCorner2Objects4.length = 0;
gdjs.OverworldCode.GDCorner2Objects5.length = 0;
gdjs.OverworldCode.GDCorner2Objects6.length = 0;
gdjs.OverworldCode.GDCorner2Objects7.length = 0;
gdjs.OverworldCode.GDCorner3Objects1.length = 0;
gdjs.OverworldCode.GDCorner3Objects2.length = 0;
gdjs.OverworldCode.GDCorner3Objects3.length = 0;
gdjs.OverworldCode.GDCorner3Objects4.length = 0;
gdjs.OverworldCode.GDCorner3Objects5.length = 0;
gdjs.OverworldCode.GDCorner3Objects6.length = 0;
gdjs.OverworldCode.GDCorner3Objects7.length = 0;
gdjs.OverworldCode.GDCorner4Objects1.length = 0;
gdjs.OverworldCode.GDCorner4Objects2.length = 0;
gdjs.OverworldCode.GDCorner4Objects3.length = 0;
gdjs.OverworldCode.GDCorner4Objects4.length = 0;
gdjs.OverworldCode.GDCorner4Objects5.length = 0;
gdjs.OverworldCode.GDCorner4Objects6.length = 0;
gdjs.OverworldCode.GDCorner4Objects7.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects1.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects2.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects3.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects4.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects5.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects6.length = 0;
gdjs.OverworldCode.GDMessageAreaObjects7.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects4.length = 0;
gdjs.OverworldCode.GDTransitionObjects5.length = 0;
gdjs.OverworldCode.GDTransitionObjects6.length = 0;
gdjs.OverworldCode.GDTransitionObjects7.length = 0;


return;

}

gdjs['OverworldCode'] = gdjs.OverworldCode;
