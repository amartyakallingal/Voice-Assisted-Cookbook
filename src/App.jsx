import { useState } from 'react'

function App() {
  // useState holds our data. 
  // 'recipeText' is the current value, 'setRecipeText' is the function to update it.
  const [recipeText, setRecipeText] = useState("");

  const handleParse = () => {
    // For Day 1, we just log it. On Day 2, we will send this to the Gemini API.
    console.log("Sending to AI:", recipeText);
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
          // As the user types, update the state in real-time
          onChange={(e) => setRecipeText(e.target.value)}
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