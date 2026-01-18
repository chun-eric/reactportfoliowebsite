function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5urPCJHECfL":
        Script1();
        break;
      case "6K0OqoQPtn8":
        Script2();
        break;
      case "6r6AY4PkGgC":
        Script3();
        break;
      case "5ehTSAG0tc3":
        Script4();
        break;
      case "67IFEodgi0y":
        Script5();
        break;
      case "5iuzVLBuleY":
        Script6();
        break;
      case "5VGBP8kLhu3":
        Script7();
        break;
      case "6HwaxGmKzJl":
        Script8();
        break;
      case "6FbusUNYZ6m":
        Script9();
        break;
      case "5x3boBnxac6":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6R3PISV51b9');
const duration = 750;
const easing = 'ease-out';
const id = '62YInOQQ0Pt';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5wUqhLkHKGR');
const duration = 1500;
const easing = 'ease-out';
const id = '5sjqO7fDLWj';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5wUqhLkHKGR');
const duration = 2500;
const easing = 'ease-out';
const id = '6XHGmj0p8LJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
