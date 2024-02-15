function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    
    if (message.trim() !== "") {
        const chatContainer = document.getElementById("chat-container");
        const newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatContainer.appendChild(newMessage);
        
        messageInput.value = "";
    }
}
