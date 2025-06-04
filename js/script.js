// ...everything from before remains the same...

// Create the typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typing-indicator';
  typingDiv.classList.add('bot-message');
  typingDiv.textContent = 'Wait while Solace is responding purely with Heart...';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove the typing indicator
function hideTypingIndicator() {
  const typingDiv = document.getElementById('typing-indicator');
  if (typingDiv) typingDiv.remove();
}

// Send message to backend and get bot reply
async function sendMessageToBackend(userMsg) {
  showTypingIndicator();

  try {
    const response = await fetch('https://your-backend-url.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMsg })
    });

    if (!response.ok) throw new Error('Server Error');

    const data = await response.json();
    hideTypingIndicator();
    addMessage(data.reply || "Oops! No reply found 💔", 'bot');
  } catch (error) {
    console.error('Error talking to backend:', error);
    hideTypingIndicator();
    addMessage("Something went wrong 😢 Please try again.", 'bot');
  }
}
