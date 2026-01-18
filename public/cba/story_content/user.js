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
window.Script4 = function()
{
  var player = GetPlayer();
var textInput = player.getVar("TextEntry");
var textLength = textInput.length;
player.SetVar("TextLength", textLength);
}

window.Script5 = function()
{
  var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var player = GetPlayer();

// ============================================
// API CONFIG
// ============================================
var API_CONFIG = {
    cooldownMs: 2000,
    requestTimeout: 8000
};

// ============================================
// CLIENT-SIDE VALIDATION
// ============================================
var validateInput = function(content) {
    if (!content || content.trim().length === 0) {
        return { valid: false, error: "Content is empty" };
    }
    
    if (content.length > 2000) {
        return { valid: false, error: "Content exceeds 2000 character limit" };
    }
    
    var lastSubmission = sessionStorage.getItem('lastSubmissionContent_Observation');
    if (lastSubmission === content) {
        var lastTime = parseInt(sessionStorage.getItem('lastSubmissionTime_Observation')) || 0;
        if (Date.now() - lastTime < API_CONFIG.cooldownMs) {
            return { valid: false, error: "Please wait before resubmitting" };
        }
    }
    
    return { valid: true };
};

// ============================================
// MAIN EXECUTION
// ============================================
var userContent = "";
var inputs = document.querySelectorAll('input[type="text"], textarea');

for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value && inputs[i].value.trim() !== "" &&
        !inputs[i].value.includes("For example:")) {
        userContent = inputs[i].value.trim();
        console.log(">>> FOUND USER INPUT (Observation):", userContent);
        break;
    }
}

if (!userContent || userContent.trim() === "") {
    player.SetVar("feedback_AI_Challenge_Observation", "Please provide a response before submitting.");
    console.log("ERROR: No user content found");
} else {
    var validation = validateInput(userContent);
    if (!validation.valid) {
        player.SetVar("feedback_AI_Challenge_Observation", "Error: " + validation.error);
        console.log("Validation failed:", validation.error);
    } else {
        // Store the response in the variable for slide 4.6
        sessionStorage.setItem('lastSubmissionContent_Observation', userContent);
        sessionStorage.setItem('lastSubmissionTime_Observation', Date.now());
        player.SetVar("practiceResponse_Observation", userContent);
        console.log("Stored in practiceResponse_Observation:", userContent);
        
        player.SetVar("feedback_AI_Challenge_Observation", "Response saved! Click NEXT to continue.");
    }
}
}

window.Script6 = function()
{
  var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var player = GetPlayer();

// ============================================
// API CONFIG
// ============================================
var API_CONFIG = {
    cooldownMs: 2000,
    requestTimeout: 8000
};

// ============================================
// CLIENT-SIDE VALIDATION
// ============================================
var validateInput = function(content) {
    if (!content || content.trim().length === 0) {
        return { valid: false, error: "Content is empty" };
    }
    
    if (content.length > 2000) {
        return { valid: false, error: "Content exceeds 2000 character limit" };
    }
    
    var lastSubmission = sessionStorage.getItem('lastSubmissionContent_Question');
    if (lastSubmission === content) {
        var lastTime = parseInt(sessionStorage.getItem('lastSubmissionTime_Question')) || 0;
        if (Date.now() - lastTime < API_CONFIG.cooldownMs) {
            return { valid: false, error: "Please wait before resubmitting" };
        }
    }
    
    return { valid: true };
};

// ============================================
// MAIN EXECUTION
// ============================================
var userContent = "";
var inputs = document.querySelectorAll('input[type="text"], textarea');

for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value && inputs[i].value.trim() !== "" &&
        !inputs[i].value.includes("For example:")) {
        userContent = inputs[i].value.trim();
        console.log(">>> FOUND USER INPUT (Open Question):", userContent);
        break;
    }
}

if (!userContent || userContent.trim() === "") {
    player.SetVar("feedback_AI_Challenge_Question", "Please provide a response before submitting.");
    console.log("ERROR: No user content found");
} else {
    var validation = validateInput(userContent);
    if (!validation.valid) {
        player.SetVar("feedback_AI_Challenge_Question", "Error: " + validation.error);
        console.log("Validation failed:", validation.error);
    } else {
        // Store the response in the variable for slide 4.6
        sessionStorage.setItem('lastSubmissionContent_Question', userContent);
        sessionStorage.setItem('lastSubmissionTime_Question', Date.now());
        player.SetVar("practiceResponse_Question", userContent);
        console.log("Stored in practiceResponse_Question:", userContent);
        
        player.SetVar("feedback_AI_Challenge_Question", "Response saved! Click NEXT to continue.");
    }
}
}

window.Script7 = function()
{
  var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var player = GetPlayer();

// ============================================
// API CONFIG
// ============================================
var API_CONFIG = {
    cooldownMs: 2000,
    requestTimeout: 8000
};

// ============================================
// CLIENT-SIDE VALIDATION
// ============================================
var validateInput = function(content) {
    if (!content || content.trim().length === 0) {
        return { valid: false, error: "Content is empty" };
    }
    
    if (content.length > 2000) {
        return { valid: false, error: "Content exceeds 2000 character limit" };
    }
    
    var lastSubmission = sessionStorage.getItem('lastSubmissionContent_Realignment');
    if (lastSubmission === content) {
        var lastTime = parseInt(sessionStorage.getItem('lastSubmissionTime_Realignment')) || 0;
        if (Date.now() - lastTime < API_CONFIG.cooldownMs) {
            return { valid: false, error: "Please wait before resubmitting" };
        }
    }
    
    return { valid: true };
};

// ============================================
// MAIN EXECUTION
// ============================================
var userContent = "";
var inputs = document.querySelectorAll('input[type="text"], textarea');

for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value && inputs[i].value.trim() !== "" &&
        !inputs[i].value.includes("For example:")) {
        userContent = inputs[i].value.trim();
        console.log(">>> FOUND USER INPUT (Re-alignment):", userContent);
        break;
    }
}

if (!userContent || userContent.trim() === "") {
    player.SetVar("feedback_AI_Challenge_Realignment", "Please provide a response before submitting.");
    console.log("ERROR: No user content found");
} else {
    var validation = validateInput(userContent);
    if (!validation.valid) {
        player.SetVar("feedback_AI_Challenge_Realignment", "Error: " + validation.error);
        console.log("Validation failed:", validation.error);
    } else {
        // Store the response in the variable for slide 4.6
        sessionStorage.setItem('lastSubmissionContent_Realignment', userContent);
        sessionStorage.setItem('lastSubmissionTime_Realignment', Date.now());
        player.SetVar("practiceResponse_Realignment", userContent);
        console.log("Stored in practiceResponse_Realignment:", userContent);
        
        player.SetVar("feedback_AI_Challenge_Realignment", "Response saved! Click NEXT to continue.");
    }
}
}

window.Script8 = function()
{
  // =================================================================
// SCRIPT FOR: Guided Practice AI Feedback (Slide 4.6)
// =================================================================
var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var player = GetPlayer();

// ============================================
// API CONFIG
// ============================================
var API_CONFIG = {
    cooldownMs: 2000,
    requestTimeout: 8000
};

// 2. Get the user's three written responses from Storyline variables
var obs = player.GetVar("practiceResponse_Observation") || "";
var ques = player.GetVar("practiceResponse_Question") || "";
var real = player.GetVar("practiceResponse_Realignment") || "";

// Check if all three responses are provided
if (!obs || !ques || !real) {
    player.SetVar("feedback_AI_Practice", "Error: Please complete all three steps (Observation, Open Question, Re-alignment) before submitting.");
    console.error("Missing responses - Obs:", obs, "Ques:", ques, "Real:", real);
} else {
    // 3. Combine them into a single, structured block of text for the AI
    var userContent = "Here is the manager's draft for a low-stakes scenario:\n\n" +
                      "1. Observation: " + obs + "\n" +
                      "2. Open Question: " + ques + "\n" +
                      "3. Re-alignment: " + real;

    // 4. Write the instructions for the AI (The System Prompt)
    var systemPrompt = "You are an expert FCC Leadership Coach at a major Australian bank specializing in Coaching for Compliance. A manager has just drafted a practice coaching conversation in response to a compliance scenario where a team member forgot to submit mandatory compliance documentation for the second week in a row. This is a MINOR BREACH that needs to be addressed.\n\n" +
    "The manager's response should follow the 3-step Coaching for Compliance framework:\n" +
    "1. OBSERVATION: A neutral, fact-based statement about what happened (not accusatory)\n" +
    "2. OPEN QUESTION: A non-accusatory question to explore WHY the breach occurred and the decision-making process\n" +
    "3. RE-ALIGNMENT: A firm but supportive statement that reinforces policy requirements and compliance expectations\n\n" +
    "EVALUATION CRITERIA:\n" +
    "- Observation should cite specific facts (e.g., 'missed deadline twice in two weeks') without judgment\n" +
    "- Open Question should be genuinely curious, not rhetorical or accusatory (avoid 'Why would you...' tone)\n" +
    "- Re-alignment should clearly state what the policy is and why it matters for the bank\n\n" +
    "Provide feedback in a single paragraph (max 150 words). First, identify and praise the strongest framework element they executed well. Second, suggest ONE specific, actionable refinement to strengthen a different element. Your tone must be authoritative, professional, and supportive—like a coach helping them improve.";

    // 5. Add timeout handling
    var timeoutId = setTimeout(function() {
        player.SetVar("feedback_AI_Practice", "Request timed out. Please try again.");
        console.error("API request timeout after " + API_CONFIG.requestTimeout + "ms");
    }, API_CONFIG.requestTimeout);

    // 6. Send the request to your secure Cloudflare proxy
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 300,
            system: systemPrompt,
            messages: [
                { role: "user", content: userContent }
            ]
        })
    }).then(function(response) {
        clearTimeout(timeoutId);
        console.log("API Response status:", response.status);
        
        // Handle rate limit response from server
        if (response.status === 429) {
            return response.json().then(function(data) {
                var message = data.error && data.error.message 
                    ? data.error.message 
                    : "Rate limit reached. Please try again later.";
                player.SetVar("feedback_AI_Practice", message);
                console.warn("Rate limited by server:", message);
                throw new Error("Rate limited");
            });
        }
        
        if (!response.ok) {
            throw new Error("HTTP " + response.status + ": " + response.statusText);
        }
        
        return response.text();
    }).then(function(text) {
        console.log("API Raw response:", text);
        var data = JSON.parse(text);
        
        if (data.content && data.content.length > 0) {
            var aiReply = data.content[0].text;
            player.SetVar("feedback_AI_Practice", aiReply);
            console.log("Feedback stored successfully");
        } else if (data.error) {
            player.SetVar("feedback_AI_Practice", "Error: " + data.error.message);
        } else {
            player.SetVar("feedback_AI_Practice", "Unexpected response format");
        }
    }).catch(function(error) {
        clearTimeout(timeoutId);
        if (error.message !== "Rate limited") {
            console.error("API Fetch Error:", error);
            player.SetVar("feedback_AI_Practice", "Connection error: " + error.message);
        }
    });
}
}

window.Script9 = function()
{
  var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var player = GetPlayer();

// ============================================
// API CONFIG (for UX feedback only)
// ============================================
var API_CONFIG = {
    cooldownMs: 2000,
    requestTimeout: 8000
};

// ============================================
// CLIENT-SIDE VALIDATION (UX only)
// ============================================
var validateInput = function(content) {
    // Prevent empty or suspicious content
    if (!content || content.trim().length === 0) {
        return { valid: false, error: "Content is empty" };
    }
    
    if (content.length > 2000) {
        return { valid: false, error: "Content exceeds 2000 character limit" };
    }
    
    // Prevent rapid duplicate submissions
    var lastSubmission = sessionStorage.getItem('lastSubmissionContent_Pressure');
    if (lastSubmission === content) {
        var lastTime = parseInt(sessionStorage.getItem('lastSubmissionTime_Pressure')) || 0;
        if (Date.now() - lastTime < API_CONFIG.cooldownMs) {
            return { valid: false, error: "Please wait before resubmitting" };
        }
    }
    
    return { valid: true };
};

// ============================================
// MAIN EXECUTION
// ============================================
var userContent = "";
var inputs = document.querySelectorAll('input[type="text"], textarea');

// Get the text directly from the input field in the browser DOM
for (var i = 0; i < inputs.length; i++) {
    // Look for the input that has actual content and is NOT a placeholder
    if (inputs[i].value && inputs[i].value.trim() !== "" &&
        !inputs[i].value.includes("For example:")) {
        userContent = inputs[i].value.trim();
        console.log(">>> FOUND USER INPUT:", userContent);
        break;
    }
}

if (!userContent || userContent.trim() === "") {
    player.SetVar("feedback_AI_Challenge_Pressure", "Please provide a response before submitting.");
    console.log("ERROR: No user content found");
} else {
    // Validate input (client-side UX feedback only)
    var validation = validateInput(userContent);
    if (!validation.valid) {
        player.SetVar("feedback_AI_Challenge_Pressure", "Error: " + validation.error);
        console.log("Validation failed:", validation.error);
    } else {
        // ONLY store after validation passes
        sessionStorage.setItem('lastSubmissionContent_Pressure', userContent);
        sessionStorage.setItem('lastSubmissionTime_Pressure', Date.now());
        player.SetVar("challengeResponse_Pressure", userContent);
        console.log("Stored in challengeResponse_Pressure:", userContent);
        
        // All checks passed - proceed with API call
        var systemPrompt = "You are an expert FCC Leadership Coach at a major Australian bank. A manager has drafted their response to an employee who is making excuses about pressure to hit targets to justify cutting corners on loan approvals. You MUST evaluate their response against our 3-step Coaching for Compliance framework: 1. A neutral, fact-based Observation. 2. A non-accusatory, Open Question about process. 3. A firm Re-alignment to the policy. Provide feedback in a single paragraph (max 150 words). First, praise the strongest part of their response by referencing a specific framework step. Second, suggest one specific refinement to another step to make it even more effective. Your tone must be authoritative, professional, and supportive.";
        
        var requestBody = {
            model: "claude-haiku-4-5-20251001",
            max_tokens: 300,
            system: systemPrompt,
            messages: [
                { role: "user", content: userContent }
            ]
        };
        
        // ADD LOADING MESSAGE HERE ↓↓↓
        player.SetVar("feedback_AI_Challenge_Pressure", "⏳ Analyzing your response...");
        
        // Add timeout handling
        var timeoutId = setTimeout(function() {
            player.SetVar("feedback_AI_Challenge_Pressure", "Request timed out. Please try again.");
            console.error("API request timeout after " + API_CONFIG.requestTimeout + "ms");
        }, API_CONFIG.requestTimeout);
        
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "anthropic-version": "2023-06-01",
                "content-type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        .then(function(response) {
            clearTimeout(timeoutId);
            console.log("API Response status:", response.status);
            
            // Handle rate limit response from server
            if (response.status === 429) {
                return response.json().then(function(data) {
                    var message = data.error && data.error.message 
                        ? data.error.message 
                        : "Rate limit reached. Please try again later.";
                    player.SetVar("feedback_AI_Challenge_Pressure", message);
                    console.warn("Rate limited by server:", message);
                    throw new Error("Rate limited");
                });
            }
            
            if (!response.ok) {
                throw new Error("HTTP " + response.status + ": " + response.statusText);
            }
            
            return response.text();
        })
        .then(function(text) {
            console.log("API Raw response:", text);
            var data = JSON.parse(text);
            
            if (data.content && data.content.length > 0) {
                var aiReply = data.content[0].text;
                player.SetVar("feedback_AI_Challenge_Pressure", aiReply);
                console.log("Feedback stored successfully");
            } else if (data.error) {
                player.SetVar("feedback_AI_Challenge_Pressure", "Error: " + data.error.message);
            } else {
                player.SetVar("feedback_AI_Challenge_Pressure", "Unexpected response format");
            }
        })
        .catch(function(error) {
            clearTimeout(timeoutId);
            if (error.message !== "Rate limited") {
                console.error("API Fetch Error:", error);
                player.SetVar("feedback_AI_Challenge_Pressure", "Connection error: " + error.message);
            }
        });
    }
}
}

window.Script10 = function()
{
  var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var player = GetPlayer();

// ============================================
// API CONFIG (for UX feedback only)
// ============================================
var API_CONFIG = {
    cooldownMs: 2000,
    requestTimeout: 8000
};

// ============================================
// CLIENT-SIDE VALIDATION (UX only)
// ============================================
var validateInput = function(content) {
    // Prevent empty or suspicious content
    if (!content || content.trim().length === 0) {
        return { valid: false, error: "Content is empty" };
    }
    
    if (content.length > 2000) {
        return { valid: false, error: "Content exceeds 2000 character limit" };
    }
    
    // Prevent rapid duplicate submissions
    var lastSubmission = sessionStorage.getItem('lastSubmissionContent_Document');
    if (lastSubmission === content) {
        var lastTime = parseInt(sessionStorage.getItem('lastSubmissionTime_Document')) || 0;
        if (Date.now() - lastTime < API_CONFIG.cooldownMs) {
            return { valid: false, error: "Please wait before resubmitting" };
        }
    }
    
    return { valid: true };
};

// ============================================
// MAIN EXECUTION
// ============================================
var userContent = "";
var inputs = document.querySelectorAll('input[type="text"], textarea');

// Get the text directly from the input field in the browser DOM
for (var i = 0; i < inputs.length; i++) {
    // Look for the input that has actual content and is NOT a placeholder
    if (inputs[i].value && inputs[i].value.trim() !== "" &&
        !inputs[i].value.includes("For example:")) {
        userContent = inputs[i].value.trim();
        console.log(">>> FOUND USER INPUT:", userContent);
        break;
    }
}

if (!userContent || userContent.trim() === "") {
    player.SetVar("feedback_AI_Challenge_Document", "Please provide a response before submitting.");
    console.log("ERROR: No user content found");
} else {
    // Validate input (client-side UX feedback only)
    var validation = validateInput(userContent);
    if (!validation.valid) {
        player.SetVar("feedback_AI_Challenge_Document", "Error: " + validation.error);
        console.log("Validation failed:", validation.error);
    } else {
        // ONLY store after validation passes
        sessionStorage.setItem('lastSubmissionContent_Document', userContent);
        sessionStorage.setItem('lastSubmissionTime_Document', Date.now());
        player.SetVar("challengeResponse_Document", userContent);
        console.log("Stored in challengeResponse_Document:", userContent);
        
        // All checks passed - proceed with API call
        var systemPrompt = "You are an expert FCC Leadership Coach at a major Australian bank. A manager has drafted their response to an employee who submitted incomplete loan documentation with missing backup files. The employee asked the manager to review the documents, and despite noticing issues, the manager overrode compliance checks and approved the submission anyway, justifying that it 'looked okay' overall. You MUST evaluate the manager's drafted response against our 3-step Coaching for Compliance framework: 1. A neutral, fact-based Observation about what occurred. 2. A non-accusatory, Open Question to explore the decision-making process. 3. A firm Re-alignment statement reinforcing documentation policy and regulatory requirements. Provide feedback in a single paragraph (max 150 words). First, praise the strongest part of their response by identifying which framework step they executed well. Second, suggest one specific refinement to strengthen another step and make their coaching more effective. Your tone must be authoritative, professional, and supportive.";
        
        var requestBody = {
            model: "claude-haiku-4-5-20251001",
            max_tokens: 300,
            system: systemPrompt,
            messages: [
                { role: "user", content: userContent }
            ]
        };
        
        player.SetVar("feedback_AI_Challenge_Document", "⏳ Analyzing your response...");
        
        // Add timeout handling
        var timeoutId = setTimeout(function() {
            player.SetVar("feedback_AI_Challenge_Document", "Request timed out. Please try again.");
            console.error("API request timeout after " + API_CONFIG.requestTimeout + "ms");
        }, API_CONFIG.requestTimeout);
        
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "anthropic-version": "2023-06-01",
                "content-type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        .then(function(response) {
            clearTimeout(timeoutId);
            console.log("API Response status:", response.status);
            
            // Handle rate limit response from server
            if (response.status === 429) {
                return response.json().then(function(data) {
                    var message = data.error && data.error.message 
                        ? data.error.message 
                        : "Rate limit reached. Please try again later.";
                    player.SetVar("feedback_AI_Challenge_Document", message);
                    console.warn("Rate limited by server:", message);
                    throw new Error("Rate limited");
                });
            }
            
            if (!response.ok) {
                throw new Error("HTTP " + response.status + ": " + response.statusText);
            }
            
            return response.text();
        })
        .then(function(text) {
            console.log("API Raw response:", text);
            var data = JSON.parse(text);
            
            if (data.content && data.content.length > 0) {
                var aiReply = data.content[0].text;
                player.SetVar("feedback_AI_Challenge_Document", aiReply);
                console.log("Feedback stored successfully");
            } else if (data.error) {
                player.SetVar("feedback_AI_Challenge_Document", "Error: " + data.error.message);
            } else {
                player.SetVar("feedback_AI_Challenge_Document", "Unexpected response format");
            }
        })
        .catch(function(error) {
            clearTimeout(timeoutId);
            if (error.message !== "Rate limited") {
                console.error("API Fetch Error:", error);
                player.SetVar("feedback_AI_Challenge_Document", "Connection error: " + error.message);
            }
        });
    }
}
}

};
