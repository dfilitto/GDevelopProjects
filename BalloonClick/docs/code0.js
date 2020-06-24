gdjs.MainCode = {};
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDBackgroundObjects3= [];
gdjs.MainCode.GDRedBalloonObjects1= [];
gdjs.MainCode.GDRedBalloonObjects2= [];
gdjs.MainCode.GDRedBalloonObjects3= [];
gdjs.MainCode.GDPinkBalloonObjects1= [];
gdjs.MainCode.GDPinkBalloonObjects2= [];
gdjs.MainCode.GDPinkBalloonObjects3= [];
gdjs.MainCode.GDOrangeBalloonObjects1= [];
gdjs.MainCode.GDOrangeBalloonObjects2= [];
gdjs.MainCode.GDOrangeBalloonObjects3= [];
gdjs.MainCode.GDBlueBalloonObjects1= [];
gdjs.MainCode.GDBlueBalloonObjects2= [];
gdjs.MainCode.GDBlueBalloonObjects3= [];
gdjs.MainCode.GDYellowBalloonObjects1= [];
gdjs.MainCode.GDYellowBalloonObjects2= [];
gdjs.MainCode.GDYellowBalloonObjects3= [];
gdjs.MainCode.GDEnemyObjects1= [];
gdjs.MainCode.GDEnemyObjects2= [];
gdjs.MainCode.GDEnemyObjects3= [];
gdjs.MainCode.GDtxtLifeObjects1= [];
gdjs.MainCode.GDtxtLifeObjects2= [];
gdjs.MainCode.GDtxtLifeObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRedBalloonObjects1ObjectsGDgdjs_46MainCode_46GDPinkBalloonObjects1ObjectsGDgdjs_46MainCode_46GDOrangeBalloonObjects1ObjectsGDgdjs_46MainCode_46GDBlueBalloonObjects1ObjectsGDgdjs_46MainCode_46GDYellowBalloonObjects1Objects = Hashtable.newFrom({"RedBalloon": gdjs.MainCode.GDRedBalloonObjects1, "PinkBalloon": gdjs.MainCode.GDPinkBalloonObjects1, "OrangeBalloon": gdjs.MainCode.GDOrangeBalloonObjects1, "BlueBalloon": gdjs.MainCode.GDBlueBalloonObjects1, "YellowBalloon": gdjs.MainCode.GDYellowBalloonObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRedBalloonObjects2Objects = Hashtable.newFrom({"RedBalloon": gdjs.MainCode.GDRedBalloonObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPinkBalloonObjects2Objects = Hashtable.newFrom({"PinkBalloon": gdjs.MainCode.GDPinkBalloonObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOrangeBalloonObjects2Objects = Hashtable.newFrom({"OrangeBalloon": gdjs.MainCode.GDOrangeBalloonObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBlueBalloonObjects2Objects = Hashtable.newFrom({"BlueBalloon": gdjs.MainCode.GDBlueBalloonObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDYellowBalloonObjects1Objects = Hashtable.newFrom({"YellowBalloon": gdjs.MainCode.GDYellowBalloonObjects1});gdjs.MainCode.eventsList0x6b34ac = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonSelec")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDRedBalloonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRedBalloonObjects2Objects, gdjs.randomInRange(100, 700), 1900, "Main");
}{for(var i = 0, len = gdjs.MainCode.GDRedBalloonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRedBalloonObjects2[i].addPolarForce(gdjs.randomInRange(255, 285), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonSelect")) == 2;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDPinkBalloonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPinkBalloonObjects2Objects, gdjs.randomInRange(100, 700), 1900, "Main");
}{for(var i = 0, len = gdjs.MainCode.GDPinkBalloonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPinkBalloonObjects2[i].addPolarForce(gdjs.randomInRange(255, 285), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonSelect")) == 3;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDOrangeBalloonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOrangeBalloonObjects2Objects, gdjs.randomInRange(100, 700), 1900, "Main");
}{for(var i = 0, len = gdjs.MainCode.GDOrangeBalloonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDOrangeBalloonObjects2[i].addPolarForce(gdjs.randomInRange(255, 285), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonSelect")) == 4;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDBlueBalloonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBlueBalloonObjects2Objects, gdjs.randomInRange(100, 700), 1900, "Main");
}{for(var i = 0, len = gdjs.MainCode.GDBlueBalloonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBlueBalloonObjects2[i].addPolarForce(gdjs.randomInRange(255, 285), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonSelect")) == 5;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDYellowBalloonObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDYellowBalloonObjects1Objects, gdjs.randomInRange(100, 700), 1900, "Main");
}{for(var i = 0, len = gdjs.MainCode.GDYellowBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDYellowBalloonObjects1[i].addPolarForce(gdjs.randomInRange(255, 285), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 1);
}
}}

}


}; //End of gdjs.MainCode.eventsList0x6b34ac
gdjs.MainCode.eventsList0x6a78a4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0.25;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(0.1);
}}

}


}; //End of gdjs.MainCode.eventsList0x6a78a4
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainCode.GDEnemyObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRedBalloonObjects1ObjectsGDgdjs_46MainCode_46GDPinkBalloonObjects1ObjectsGDgdjs_46MainCode_46GDOrangeBalloonObjects1ObjectsGDgdjs_46MainCode_46GDBlueBalloonObjects1ObjectsGDgdjs_46MainCode_46GDYellowBalloonObjects1Objects = Hashtable.newFrom({"RedBalloon": gdjs.MainCode.GDRedBalloonObjects1, "PinkBalloon": gdjs.MainCode.GDPinkBalloonObjects1, "OrangeBalloon": gdjs.MainCode.GDOrangeBalloonObjects1, "BlueBalloon": gdjs.MainCode.GDBlueBalloonObjects1, "YellowBalloon": gdjs.MainCode.GDYellowBalloonObjects1});gdjs.MainCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1.5);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(150);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(100);
}}

}


{



}


{

gdjs.MainCode.GDBlueBalloonObjects1.createFrom(runtimeScene.getObjects("BlueBalloon"));
gdjs.MainCode.GDOrangeBalloonObjects1.createFrom(runtimeScene.getObjects("OrangeBalloon"));
gdjs.MainCode.GDPinkBalloonObjects1.createFrom(runtimeScene.getObjects("PinkBalloon"));
gdjs.MainCode.GDRedBalloonObjects1.createFrom(runtimeScene.getObjects("RedBalloon"));
gdjs.MainCode.GDYellowBalloonObjects1.createFrom(runtimeScene.getObjects("YellowBalloon"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRedBalloonObjects1ObjectsGDgdjs_46MainCode_46GDPinkBalloonObjects1ObjectsGDgdjs_46MainCode_46GDOrangeBalloonObjects1ObjectsGDgdjs_46MainCode_46GDBlueBalloonObjects1ObjectsGDgdjs_46MainCode_46GDYellowBalloonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDRedBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedBalloonObjects1[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseX(runtimeScene, "Main", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Main", 0)) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDRedBalloonObjects1[k] = gdjs.MainCode.GDRedBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDRedBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDPinkBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPinkBalloonObjects1[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseX(runtimeScene, "Main", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Main", 0)) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDPinkBalloonObjects1[k] = gdjs.MainCode.GDPinkBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPinkBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDOrangeBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDOrangeBalloonObjects1[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseX(runtimeScene, "Main", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Main", 0)) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDOrangeBalloonObjects1[k] = gdjs.MainCode.GDOrangeBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDOrangeBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDBlueBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueBalloonObjects1[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseX(runtimeScene, "Main", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Main", 0)) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDBlueBalloonObjects1[k] = gdjs.MainCode.GDBlueBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDYellowBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDYellowBalloonObjects1[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseX(runtimeScene, "Main", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Main", 0)) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDYellowBalloonObjects1[k] = gdjs.MainCode.GDYellowBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDYellowBalloonObjects1.length = k;}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBlueBalloonObjects1 */
/* Reuse gdjs.MainCode.GDOrangeBalloonObjects1 */
/* Reuse gdjs.MainCode.GDPinkBalloonObjects1 */
/* Reuse gdjs.MainCode.GDRedBalloonObjects1 */
/* Reuse gdjs.MainCode.GDYellowBalloonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDRedBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRedBalloonObjects1[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MainCode.GDPinkBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPinkBalloonObjects1[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MainCode.GDOrangeBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOrangeBalloonObjects1[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MainCode.GDBlueBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueBalloonObjects1[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MainCode.GDYellowBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDYellowBalloonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.MainCode.GDBlueBalloonObjects1.createFrom(runtimeScene.getObjects("BlueBalloon"));
gdjs.MainCode.GDOrangeBalloonObjects1.createFrom(runtimeScene.getObjects("OrangeBalloon"));
gdjs.MainCode.GDPinkBalloonObjects1.createFrom(runtimeScene.getObjects("PinkBalloon"));
gdjs.MainCode.GDRedBalloonObjects1.createFrom(runtimeScene.getObjects("RedBalloon"));
gdjs.MainCode.GDYellowBalloonObjects1.createFrom(runtimeScene.getObjects("YellowBalloon"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDRedBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedBalloonObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDRedBalloonObjects1[k] = gdjs.MainCode.GDRedBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDRedBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDPinkBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPinkBalloonObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDPinkBalloonObjects1[k] = gdjs.MainCode.GDPinkBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPinkBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDOrangeBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDOrangeBalloonObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDOrangeBalloonObjects1[k] = gdjs.MainCode.GDOrangeBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDOrangeBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDBlueBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueBalloonObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDBlueBalloonObjects1[k] = gdjs.MainCode.GDBlueBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDYellowBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDYellowBalloonObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDYellowBalloonObjects1[k] = gdjs.MainCode.GDYellowBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDYellowBalloonObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDRedBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedBalloonObjects1[i].getAnimation() == 1 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDRedBalloonObjects1[k] = gdjs.MainCode.GDRedBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDRedBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDPinkBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPinkBalloonObjects1[i].getAnimation() == 1 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDPinkBalloonObjects1[k] = gdjs.MainCode.GDPinkBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPinkBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDOrangeBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDOrangeBalloonObjects1[i].getAnimation() == 1 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDOrangeBalloonObjects1[k] = gdjs.MainCode.GDOrangeBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDOrangeBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDBlueBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueBalloonObjects1[i].getAnimation() == 1 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDBlueBalloonObjects1[k] = gdjs.MainCode.GDBlueBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueBalloonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDYellowBalloonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDYellowBalloonObjects1[i].getAnimation() == 1 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDYellowBalloonObjects1[k] = gdjs.MainCode.GDYellowBalloonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDYellowBalloonObjects1.length = k;}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBlueBalloonObjects1 */
/* Reuse gdjs.MainCode.GDOrangeBalloonObjects1 */
/* Reuse gdjs.MainCode.GDPinkBalloonObjects1 */
/* Reuse gdjs.MainCode.GDRedBalloonObjects1 */
/* Reuse gdjs.MainCode.GDYellowBalloonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDRedBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRedBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDPinkBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPinkBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDOrangeBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOrangeBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDBlueBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDYellowBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDYellowBalloonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "SpawnBalloon");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnBalloon");
}{runtimeScene.getVariables().get("BalloonSelect").setNumber(gdjs.randomInRange(1, 5));
}
{ //Subevents
gdjs.MainCode.eventsList0x6b34ac(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "TimeVelocity");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TimeVelocity");
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}
{ //Subevents
gdjs.MainCode.eventsList0x6a78a4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainCode.GDBlueBalloonObjects1.createFrom(runtimeScene.getObjects("BlueBalloon"));
gdjs.MainCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.MainCode.GDOrangeBalloonObjects1.createFrom(runtimeScene.getObjects("OrangeBalloon"));
gdjs.MainCode.GDPinkBalloonObjects1.createFrom(runtimeScene.getObjects("PinkBalloon"));
gdjs.MainCode.GDRedBalloonObjects1.createFrom(runtimeScene.getObjects("RedBalloon"));
gdjs.MainCode.GDYellowBalloonObjects1.createFrom(runtimeScene.getObjects("YellowBalloon"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRedBalloonObjects1ObjectsGDgdjs_46MainCode_46GDPinkBalloonObjects1ObjectsGDgdjs_46MainCode_46GDOrangeBalloonObjects1ObjectsGDgdjs_46MainCode_46GDBlueBalloonObjects1ObjectsGDgdjs_46MainCode_46GDYellowBalloonObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBlueBalloonObjects1 */
/* Reuse gdjs.MainCode.GDOrangeBalloonObjects1 */
/* Reuse gdjs.MainCode.GDPinkBalloonObjects1 */
/* Reuse gdjs.MainCode.GDRedBalloonObjects1 */
/* Reuse gdjs.MainCode.GDYellowBalloonObjects1 */
gdjs.MainCode.GDtxtLifeObjects1.createFrom(runtimeScene.getObjects("txtLife"));
{for(var i = 0, len = gdjs.MainCode.GDRedBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRedBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDPinkBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPinkBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDOrangeBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOrangeBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDBlueBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueBalloonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDYellowBalloonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDYellowBalloonObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(5);
}{for(var i = 0, len = gdjs.MainCode.GDtxtLifeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtxtLifeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{


{
}

}


}; //End of gdjs.MainCode.eventsList0xb5aa0


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDBackgroundObjects3.length = 0;
gdjs.MainCode.GDRedBalloonObjects1.length = 0;
gdjs.MainCode.GDRedBalloonObjects2.length = 0;
gdjs.MainCode.GDRedBalloonObjects3.length = 0;
gdjs.MainCode.GDPinkBalloonObjects1.length = 0;
gdjs.MainCode.GDPinkBalloonObjects2.length = 0;
gdjs.MainCode.GDPinkBalloonObjects3.length = 0;
gdjs.MainCode.GDOrangeBalloonObjects1.length = 0;
gdjs.MainCode.GDOrangeBalloonObjects2.length = 0;
gdjs.MainCode.GDOrangeBalloonObjects3.length = 0;
gdjs.MainCode.GDBlueBalloonObjects1.length = 0;
gdjs.MainCode.GDBlueBalloonObjects2.length = 0;
gdjs.MainCode.GDBlueBalloonObjects3.length = 0;
gdjs.MainCode.GDYellowBalloonObjects1.length = 0;
gdjs.MainCode.GDYellowBalloonObjects2.length = 0;
gdjs.MainCode.GDYellowBalloonObjects3.length = 0;
gdjs.MainCode.GDEnemyObjects1.length = 0;
gdjs.MainCode.GDEnemyObjects2.length = 0;
gdjs.MainCode.GDEnemyObjects3.length = 0;
gdjs.MainCode.GDtxtLifeObjects1.length = 0;
gdjs.MainCode.GDtxtLifeObjects2.length = 0;
gdjs.MainCode.GDtxtLifeObjects3.length = 0;

gdjs.MainCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['MainCode'] = gdjs.MainCode;
