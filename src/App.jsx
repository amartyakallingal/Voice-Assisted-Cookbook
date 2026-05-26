import { useState } from 'react'

function App() {
  const [recipeText, setRecipeText] = useState("");
    // useState hook holds our data. 
    // 'recipeText' is the current value, 'setRecipeText' is the function to update it.

  // Arrow function (equivalent to lambdas in Python), called an anonymous function because it has no name --> handleParse
  // variable stores the function itself (executable instructions), NOT the return value
    // Would have to execute the function and assign it to a variable to get return value
    // Python lambda equivalent: handleParse = lambda: print("Sending to AI")
  // function even though handleParse holds the return value
  const handleParse = () => {
    console.log("Sending to AI:", recipeText);
      // For Day 1, we just log it (right click inspect and check console). On Day 2, we will send this to the Gemini API.
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Voice-Activated Cookbook</h1>
      
      <div>
        <h2>1. Paste Your Recipe</h2>
        <textarea 
          rows="10" 
          cols="50" 
          placeholder="Paste plain text recipe here..."
          value={recipeText}
            // Dictates what text box displays, reflecting whatever value recipeText has
          onChange={(e) => setRecipeText(e.target.value)}
            // Waits for event e (every time you type a new character) to call setRecipeText to save target.value into recipeText
            // Essentially updates recipeText in realtime
        />
        <br />
        <button onClick={handleParse} style={{ marginTop: '10px' }}>
          Parse Recipe with AI
        </button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <div>
        <h2>2. Parsed Data (Handling on Day 2)</h2>
        <p><strong>Ingredients:</strong> (Empty for now)</p>
        <p><strong>Steps:</strong> (Empty for now)</p>
      </div>
    </div>
  )
}

export default App