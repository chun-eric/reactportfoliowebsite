// =================================================================
// SCRIPT FOR: Guided Practice AI Feedback (Slide 4.6)
// =================================================================

// --- STEP 1: CONFIGURATION ---
// PASTE YOUR CLOUDFLARE URL AND API KEY BETWEEN THE QUOTES
var apiUrl = "https://proxy-ecdev.chuneric2050.workers.dev";
var apiKey = "sk-ant-api03-[REDACTED]";
// -----------------------------------------------------------------

var player = GetPlayer();

// 2. Get the user's three written responses from Storyline variables
var obs = player.GetVar("practiceResponse_Observation");
var ques = player.GetVar("practiceResponse_Question");
var real = player.GetVar("practiceResponse_Realignment");

// 3. Combine them into a single, structured block of text for the AI
var userContent =
  "Here is the manager's draft for a low-stakes scenario:\n\n" +
  "1. Observation: " +
  obs +
  "\n" +
  "2. Open Question: " +
  ques +
  "\n" +
  "3. Re-alignment: " +
  real;

// 4. Write the instructions for the AI (The System Prompt)
var systemPrompt =
  "You are an expert Compliance Coach at a major bank. A manager has just drafted a practice conversation using the 'Coaching for Compliance' framework. Analyze their draft. Provide a single, supportive feedback paragraph (max 150 words). First, praise one specific thing they did well. Second, suggest one specific refinement to make it stronger. End with an encouraging tone.";

// 5. Send the request to your secure Cloudflare proxy
fetch(apiUrl, {
  method: "POST",
  headers: {
    "x-api-key": apiKey, // Your key is sent securely in the header
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-haiku-4-5-20251001", // The best model for this task
    max_tokens: 300,
    system: systemPrompt,
    messages: [{ role: "user", content: userContent }],
  }),
})
  .then((response) => response.json())
  .then((data) => {
    // 6. Get the AI's reply and send it back to the Storyline variable
    if (data.content && data.content.length > 0) {
      var aiReply = data.content[0].text;
      player.SetVar("feedback_AI_Practice", aiReply);
    } else {
      // Handle cases where the API gives an error
      player.SetVar(
        "feedback_AI_Practice",
        "An error occurred. The AI coach is currently unavailable."
      );
    }
  })
  .catch((error) => {
    // Handle cases where the internet connection fails
    console.error("Fetch Error:", error);
    player.SetVar(
      "feedback_AI_Practice",
      "A connection error occurred. Please check your internet and try again."
    );
  });
