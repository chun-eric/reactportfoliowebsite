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

window.Script17 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script18 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// Update this slide's specific time
var currentSlideTime = player.GetVar("Slide2_1_TimeSpent");
player.SetVar("Slide2_1_TimeSpent", currentSlideTime + timeSpent);

// Update the total time for Section 2
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Update the total time for the entire course
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script19 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script20 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_2_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script21 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_2_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script22 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script23 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_3_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script24 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_3_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script25 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script26 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_4_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script27 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_4_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script28 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script29 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_5_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script30 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_5_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script31 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script32 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_6_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script33 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_6_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script34 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script35 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_7_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script36 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_7_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

window.Script37 = function()
{
  var player = GetPlayer();
player.SetVar("CurrentSlideStartTime", new Date().toString());
}

window.Script38 = function()
{
  var player = GetPlayer();
var startTimeString = player.GetVar("CurrentSlideStartTime");
var startTime = new Date(startTimeString);
var endTime = new Date();
var timeSpent = (endTime - startTime) / 1000;

// This slide's specific time
player.SetVar("Slide2_8_TimeSpent", timeSpent);

// Add to Section 2 total time
var section2Time = player.GetVar("Section2_TimeSpent");
player.SetVar("Section2_TimeSpent", section2Time + timeSpent);

// Add to Course total time
var totalTime = player.GetVar("TotalTimeInCourse");
player.SetVar("TotalTimeInCourse", totalTime + timeSpent);
}

};
