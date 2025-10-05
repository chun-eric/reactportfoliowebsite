function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rFZshcIHmb":
        Script1();
        break;
      case "6kFmhWLgCMZ":
        Script2();
        break;
      case "6WgHrIbNB8v":
        Script3();
        break;
      case "6egWXkePsVQ":
        Script4();
        break;
      case "6D5B8Gjg49r":
        Script5();
        break;
      case "6Et3c6w88FI":
        Script6();
        break;
      case "5VbI5BTUa9Q":
        Script7();
        break;
      case "5diKwR4YKjZ":
        Script8();
        break;
      case "6p806hTpnN9":
        Script9();
        break;
      case "6klWNwHPBFg":
        Script10();
        break;
      case "6kwXm3ScOhl":
        Script11();
        break;
      case "6EhKeC0y2jn":
        Script12();
        break;
      case "6ZXhl5N0pba":
        Script13();
        break;
      case "68l4MG7tG6I":
        Script14();
        break;
      case "5xEDBNZsWe2":
        Script15();
        break;
      case "5YQaM7B9KSV":
        Script16();
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
    var myName = lmsAPI ? lmsAPI.GetStudentName() : "Guest Learner"; // Fallback if no LMS
    if (!myName || myName.trim() === "") {
        myName = "Guest Learner"; // Double-check for empty
    }
    return {
        "objectType": "Agent",
        "account": {
            "homePage": "https://www.ecdevportfolio.com",
            "name": myName
        }
    };
}
