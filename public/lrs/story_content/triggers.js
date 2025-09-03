function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68Epoo9BjAE":
        Script1();
        break;
      case "6YEmBTY3lE7":
        Script2();
        break;
      case "64cs6uOboyk":
        Script3();
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
};
function findLMSAPI(win) {
    if (win.hasOwnProperty("GetStudentID")) return win;
    else if (win.parent == win) return null;
    else return findLMSAPI(win.parent);
}

function getActor() {
    var lmsAPI = findLMSAPI(this);
    var myName = lmsAPI ? lmsAPI.GetStudentName() : "Anonymous Learner"; // Fallback
    return {
        "objectType": "Agent",
        "account": {
            "homePage": "https://www.ecdevportfolio.com", // Your domain
            "name": myName
        }
    };
}
