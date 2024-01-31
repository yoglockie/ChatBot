function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;
  
    var chatBox = document.getElementById('chatBox');
    var userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = 'You: ' + userInput;
  
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById('userInput').value = '';
  
   
        fetch('http://localhost:3000/query', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization':"loki123"
             },
             body: JSON.stringify({ userInput: userInput }),
         })
        .then(response => response.json())
        .then(data => {
            
            var botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.innerHTML = '<b>AI Bot</b>: ' + data.messege;
  
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;

        })
        .catch(error => {
          
          var botMessage = document.createElement('div');
          botMessage.className = 'bot-message';
          botMessage.innerHTML = '<b>AI Bot</b>: ' + "Something went wrong";
          chatBox.appendChild(botMessage);
          chatBox.scrollTop = chatBox.scrollHeight;
  
          
          console.error('Error sending message to server:', error);
        });
  }
  
  document.getElementById('userInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
        return false;
    }
  });
  