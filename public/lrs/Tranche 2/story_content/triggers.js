function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6H7rP9e9fEt":
        Script1();
        break;
      case "6iFmK5NmMDG":
        Script2();
        break;
      case "65igfPXQCpp":
        Script3();
        break;
      case "6lPgOWC8Cc8":
        Script4();
        break;
      case "5bMFUr8kp7D":
        Script5();
        break;
      case "67Py4XUU2Qz":
        Script6();
        break;
      case "5vGWxGSbByh":
        Script7();
        break;
      case "5WKe8ZKI4K4":
        Script8();
        break;
      case "6I8a6yW4q3y":
        Script9();
        break;
      case "6SCc80nPLEA":
        Script10();
        break;
      case "5ry9qaqoDj5":
        Script11();
        break;
      case "5X2mRNfWE93":
        Script12();
        break;
      case "64oc9Z7acxp":
        Script13();
        break;
      case "5ubUb9P4klb":
        Script14();
        break;
      case "6dMKTekGOyr":
        Script15();
        break;
      case "5XtwGmf71F0":
        Script16();
        break;
      case "6nA09sIxjpc":
        Script17();
        break;
      case "6OOqnNwSdz6":
        Script18();
        break;
      case "6RuQxQ2mYX8":
        Script19();
        break;
      case "5h9A8l4Eb8O":
        Script20();
        break;
      case "5yQD00RxXNK":
        Script21();
        break;
      case "6NhAZyenwgB":
        Script22();
        break;
      case "5rSfh56rMID":
        Script23();
        break;
      case "6dlsmxuX4UB":
        Script24();
        break;
      case "5sRvALEPmZb":
        Script25();
        break;
      case "6RSDKqvaXB7":
        Script26();
        break;
      case "5VfAy108QqK":
        Script27();
        break;
      case "6TJ7B4jqmi1":
        Script28();
        break;
      case "5lIPZl9W6hI":
        Script29();
        break;
      case "5sZDWmJnvw2":
        Script30();
        break;
      case "63P0o0H6ev2":
        Script31();
        break;
      case "6aTWPghnhYN":
        Script32();
        break;
      case "6nWjI67OcSV":
        Script33();
        break;
      case "6FiqGHxAZL6":
        Script34();
        break;
      case "6aiBAY4J6OU":
        Script35();
        break;
      case "6lis3UjMapH":
        Script36();
        break;
      case "5vrBOwx76vm":
        Script37();
        break;
      case "5cyDkmpwFei":
        Script38();
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
