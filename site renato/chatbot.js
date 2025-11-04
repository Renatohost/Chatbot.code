
function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = input.value.trim();

    if (userMessage === '') return;

    addMessage(userMessage, 'user');
    input.value = '';

    setTimeout(() => {
        const botReply = getBotResponse(userMessage);
        addMessage(botReply, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('oi') || input.includes('opa') || input.includes('eai') || input.includes('.') || input.includes('a') || input.includes('Me ajuda')) {
        return 'Olá! Como posso te ajudar?';
    } else if (input.includes('nome')) {
        return 'Meu nome é Bitto, Sou um 🤖 de suporte, qual a sua duvida?';
    } else if (input.includes('tchau')) {
        return 'Até mais! 👋';
    } else {
        return 'Desculpe, não entendi. Pode reformular?';
    }
}
