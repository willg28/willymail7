function login() {
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    
    if (usernameInput.value === "user" && passwordInput.value === "password") {
        localStorage.setItem("loggedInUser", usernameInput.value);
        document.getElementById("login-container").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
        
        displayChatMessages();
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("login-container").style.display = "block";
    document.getElementById("mainContainer").style.display = "none";
}

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    
    if (message.trim() !== "") {
        const chatContainer = document.getElementById("chat-container");
        const newMessage = document.createElement("div");
        
        const loggedInUser = localStorage.getItem("loggedInUser");
        newMessage.textContent = `${loggedInUser}: ${message}`;
        
        chatContainer.appendChild(newMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        messageInput.value = "";
        
        saveChatMessages(chatContainer.innerHTML);
    }
}

function displayChatMessages() {
    const chatContainer = document.getElementById("chat-container");
    const chatMessages = localStorage.getItem("chatMessages");

    if (chatMessages) {
        chatContainer.innerHTML = chatMessages;
    }
}

function saveChatMessages(messages) {
    localStorage.setItem("chatMessages", messages);
}

// Check if user is already logged in on page load
if (localStorage.getItem("loggedInUser")) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
    displayChatMessages();
}
