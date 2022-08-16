/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  setTimeout(() => {
    console.log("yes it's working diff");
    
  }, 3000);
  postMessage(response);
});
