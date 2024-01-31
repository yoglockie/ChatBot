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
  
    //bot response
    setTimeout( function () {
      
       
      var botMessage = document.createElement('div');
      botMessage.className = 'bot-message';
      botMessage.innerHTML = '<b>AI Bot</b>: I received your message "' + userInput+' "';

      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }

  document.getElementById('userInput').addEventListener('keydown', (event) => {
if(event.key === 'Enter'){
sendMessage();
return false
}
})

