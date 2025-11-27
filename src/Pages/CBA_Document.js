var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var apiKey = "sk-ant-api03-[REDACTED]";
var player = GetPlayer();

// Get the text directly from the input field in the browser DOM
var userContent = "";
var inputs = document.querySelectorAll('input[type="text"], textarea');

// console.log("=== DEBUG: Found", inputs.length, "input fields ===");

for (var i = 0; i < inputs.length; i++) {
  // console.log("Input " + i + " value:", inputs[i].value);
  // console.log("Input " + i + " placeholder:", inputs[i].placeholder);

  // Look for the input that has actual content and is NOT a placeholder
  if (
    inputs[i].value &&
    inputs[i].value.trim() !== "" &&
    !inputs[i].value.includes("For example:")
  ) {
    userContent = inputs[i].value.trim();
    console.log(">>> FOUND USER INPUT:", userContent);
    break;
  }
}

// Store it in the Storyline variable for use on the next slide
if (userContent) {
  player.SetVar("challengeResponse_Document", userContent);
  console.log("Stored in challengeResponse_Document:", userContent);
}

if (!userContent || userContent.trim() === "") {
  player.SetVar(
    "feedback_AI_Challenge_Document",
    "Please provide a response before submitting."
  );
  console.log("ERROR: No user content found");
} else {
  var systemPrompt =
    "You are an expert FCC Leadership Coach at a major Australian bank. A manager has drafted their response to an employee who submitted incomplete loan documentation with missing backup files. The employee asked the manager to review the documents, and despite noticing issues, the manager overrode compliance checks and approved the submission anyway, justifying that it 'looked okay' overall. You MUST evaluate the manager's drafted response against our 3-step Coaching for Compliance framework: 1. A neutral, fact-based Observation about what occurred. 2. A non-accusatory, Open Question to explore the decision-making process. 3. A firm Re-alignment statement reinforcing documentation policy and regulatory requirements. Provide feedback in a single paragraph (max 150 words). First, praise the strongest part of their response by identifying which framework step they executed well. Second, suggest one specific refinement to strengthen another step and make their coaching more effective. Your tone must be authoritative, professional, and supportive.";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: "user", content: userContent }],
    }),
  })
    .then(function (response) {
      console.log("API Response status:", response.status);
      return response.text();
    })
    .then(function (text) {
      console.log("API Raw response:", text);
      var data = JSON.parse(text);

      if (data.content && data.content.length > 0) {
        var aiReply = data.content[0].text;
        player.SetVar("feedback_AI_Challenge_Document", aiReply);
        console.log("Feedback stored successfully");
      } else if (data.error) {
        player.SetVar(
          "feedback_AI_Challenge_Document",
          "Error: " + data.error.message
        );
      } else {
        player.SetVar(
          "feedback_AI_Challenge_Document",
          "Unexpected response format"
        );
      }
    })
    .catch(function (error) {
      console.error("API Fetch Error:", error);
      player.SetVar(
        "feedback_AI_Challenge_Document",
        "Connection error: " + error.message
      );
    });
}
