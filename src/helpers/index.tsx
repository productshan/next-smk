function formatString(text: String) {
  var tempText = text.toLowerCase();
  if (tempText.split(" ").length === 1) {
    tempText = tempText.charAt(0).toUpperCase() + tempText.slice(1);
  } else {
    tempText = tempText.split(" ").reduce((s, c) => s.charAt(0).toUpperCase() + s.slice(1) + " " + (c.charAt(0).toUpperCase() + c.slice(1)));
  }
  return tempText;
}
async function fetchData(url:string, method?:string, params?:any) {
  method ? method = method : method = "GET";
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  });
  const data = await response.json();
  return data;
}

export { formatString, fetchData };
