// Get Quote From API
// Async funtion
async function getQuote() {
  // Proxy to fixed CORS error
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    // Wait to fill in const before moving on
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json;
    console.log(data);
  } catch (error) {
    getQuote();
    console.log("whoops, no quote", error);
  }
}

// On Load
getQuote();
