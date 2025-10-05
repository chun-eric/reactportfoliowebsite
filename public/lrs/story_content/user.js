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
var now = new Date();
var sessionID = now.getTime() + "_" + Math.random().toString(36).substr(2, 9);

player.SetVar("CourseStartTime", now.toString());
player.SetVar("CurrentSlideStartTime", now.toString());
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

window.Script4 = function()
{
  // --- Time Calculation Template ---
var player = GetPlayer();

// Get the start time that was set when the slide loaded
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);

// Get the current time as the end time
var endTime = new Date();

// Calculate the difference in seconds
var timeSpent = (endTime - startTime) / 1000;

// Get the current time spent on this specific slide and add the new time
var currentSlideTime = player.GetVar("Slide1_1_TimeSpent"); // <-- CHANGE THIS VARIABLE NAME
player.SetVar("Slide1_1_TimeSpent", currentSlideTime + timeSpent); // <-- CHANGE THIS VARIABLE NAME

// Get the total time in the course and add the new time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script5 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script6 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_2_TimeSpent");
player.SetVar("Slide1_2_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script7 = function()
{
  
var player = GetPlayer();
var startTime = new Date(player.GetVar("CurrentSlideStartTime"));
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000; // Time in seconds
var currentSlideTime = player.GetVar("Slide1_2_TimeSpent");
player.SetVar("Slide1_2_TimeSpent", currentSlideTime + timeSpent);

var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script8 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script9 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_3_TimeSpent");
player.SetVar("Slide1_3_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script10 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_3_TimeSpent");
player.SetVar("Slide1_3_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script11 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script12 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_4_TimeSpent");
player.SetVar("Slide1_4_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script13 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_4_TimeSpent");
player.SetVar("Slide1_4_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script14 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script15 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_5_TimeSpent");
player.SetVar("Slide1_5_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script16 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;
var currentSlideTime = player.GetVar("Slide1_5_TimeSpent");
player.SetVar("Slide1_5_TimeSpent", currentSlideTime + timeSpent);
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

};
