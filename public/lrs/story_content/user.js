window.InitUserScripts = function()
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
  var player = GetPlayer();
var now = new Date();

// Set the start time for the entire course
player.SetVar("CourseStartTime", now.toString());

// Set the start time for the current slide
player.SetVar("CurrentSlideStartTime", now.toString());
}

window.Script2 = function()
{
  var player = GetPlayer();
var sessionID = new Date().getTime() + "_" + Math.random().toString(36).substr(2, 9);
player.SetVar("SessionID", sessionID);
}

window.Script3 = function()
{
  
var player = GetPlayer();
var startTime = new Date(player.GetVar("CurrentSlideStartTime"));
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000; // Time in seconds
var currentSlideTime = player.GetVar("Slide1_1_TimeSpent");
player.SetVar("Slide1_1_TimeSpent", currentSlideTime + timeSpent);

var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

};
