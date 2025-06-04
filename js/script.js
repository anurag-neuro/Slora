// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    // const messagesDisplay = document.getElementById('messagesDisplay'); // If you want to add messages via JS

    // Sidebar Toggle
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            // Adjust icon text/content if needed
            if (sidebar.classList.contains('collapsed')) {
                sidebarToggle.textContent = '[>]'; // Icon for expand
            } else {
                sidebarToggle.textContent = '[<]'; // Icon for collapse
            }
        });
    }

    // Textarea auto-resize (simple version)
    if (chatInput) {
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto'; // Reset height
            this.style.height = (this.scrollHeight) + 'px'; // Set to scroll height

            // Toggle send button active state
            if (this.value.trim() !== '') {
                sendButton.classList.add('active');
            } else {
                sendButton.classList.remove('active');
            }
        });
    }

    // Placeholder for sending a message (you'd expand this)
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', () => {
            const messageText = chatInput.value.trim();
            if (messageText) {
                console.log("Sending message:", messageText);
                // Here you would typically call a function to add the message to messagesDisplay
                // and send it to a backend or AI service.
                // For example: addMessageToDisplay(messageText, 'user');
                chatInput.value = ''; // Clear input
                chatInput.style.height = 'auto'; // Reset height
                sendButton.classList.remove('active');
            }
        });

        // Allow sending with Enter key (Shift+Enter for new line)
        chatInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault(); // Prevent default new line
                sendButton.click(); // Trigger send button click
            }
        });
    }

    // --- Example: Function to add a message to the display (very basic) ---
    // function addMessageToDisplay(text, sender) {
    //     const messageGroup = document.createElement('div');
    //     messageGroup.className = 'message-group';

    //     const messageDiv = document.createElement('div');
    //     messageDiv.className = sender === 'user' ? 'message-user' : 'message-bot';

    //     const avatarDiv = document.createElement('div');
    //     avatarDiv.className = sender === 'user' ? 'message-avatar-user' : 'message-avatar-bot';
    //     avatarDiv.textContent = sender === 'user' ? '[U]' : '[B]';

    //     const contentDiv = document.createElement('div');
    //     contentDiv.className = 'message-content';
    //     contentDiv.textContent = text;

    //     messageDiv.appendChild(avatarDiv);
    //     messageDiv.appendChild(contentDiv);
    //     messageGroup.appendChild(messageDiv);
    //     messagesDisplay.appendChild(messageGroup);
    //     messagesDisplay.scrollTop = messagesDisplay.scrollHeight; // Scroll to bottom
    // }
});
