// Sidebar toggle logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('.main');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
  main.classList.remove('sidebar-collapsed'); // sidebar is open, normal layout
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
  main.classList.add('sidebar-collapsed'); // sidebar collapsed, activate collapsed styles
});

// Chat logic
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Add message to chat
function addMessage(content, type = 'user') {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add(`${type}-message`);
  msgDiv.textContent = content;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Generate a soft bot reply (static for now)
function getBotReply(userMsg) {
  const replies = [
    "Aww, that sounds really tough 🥺 Wanna talk more about it?",
    "I'm here for you, keep going 💖",
    "No judgment here, just love and ears ready to listen 💌",
    "Tell me more, I’m listening with my full heart 💭",
    "You're not alone, ever. Pinky promise 🤞💕"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// Send message logic
sendBtn.addEventListener('click', () => {
  const msg = messageInput.value.trim();
  if (msg !== '') {
    addMessage(msg, 'user');
    messageInput.value = '';
    
    setTimeout(() => {
      const botReply = getBotReply(msg);
      addMessage(botReply, 'bot');
    }, 800); // lil pause for realism 🕐
  }
});

// Pressing Enter key also sends the message
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});

// Typing indicator stuff (optional backend async example)
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typing-indicator';
  typingDiv.classList.add('bot-message');
  typingDiv.textContent = 'Wait while Solace is responding purely with Heart...';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
  const typingDiv = document.getElementById('typing-indicator');
  if (typingDiv) typingDiv.remove();
}

// Example async backend call (uncomment and replace URL if needed)
/*
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
*/

// Optional: start with sidebar collapsed for smaller screens
window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    sidebar.classList.remove('show');
    main.classList.add('sidebar-collapsed');
  }
});
