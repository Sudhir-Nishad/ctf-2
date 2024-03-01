const contentElement = document.getElementById("my-content");

// Check if the element exists
if (contentElement) {
  // Function to change the color
  function changeColor() {
    // Check if the first child is already a span
    if (contentElement.firstChild.tagName !== 'SPAN') {
      // flag{1_of_2dRuiWS75}
      // Create a span element to wrap the content
      const contentSpan = document.createElement("span");
      contentSpan.textContent = contentElement.textContent;
      contentElement.replaceChild(contentSpan, contentElement.firstChild);
    }

    // Toggle color between red and black
    contentElement.firstChild.style.color = contentElement.firstChild.style.color === 'red' ? 'black' : 'red';
  }

  // Change color every 1 second
  setInterval(changeColor, 1000);
} else {
  console.error("Element with ID 'my-content' not found.");
}

