alert("JavaScript is working!");
const jokeBtn = document.getElementById("jokebtn");
const joke = document.getElementById("joke");

jokeBtn.addEventListener("click", async function() {
  
  joke.textContent = "Loading...";
  
  try {
    
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?safe-mode"
    );
    
    const data = await response.json();
    
    if (data.type === "single") {
      joke.textContent = data.joke;
    } else {
      joke.textContent = data.setup + " " + data.delivery;
    }
    
  } catch (error) {
    
    console.error(error);
    
    joke.textContent = "Sorry, something went wrong 😅";
    
  }
  
});