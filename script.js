// Get Quote From API
// Async funtion
async function getQuote() {
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang-en&format=json";

  try {
    // Wait to fill in const before moving on
    const response = await fetch(apiUrl);
    const data = await response.json;
    console.log(data);
  } catch (error) {
    console.log("whoops, no quote", error);
  }
}

// On Load
getQuote();
