// Adicionando a frase de forma que as palavras tenham animações
document.addEventListener('DOMContentLoaded', function () {
    const words = document.querySelectorAll('.homepagetitle .word');
    
    words.forEach(word => {
        word.setAttribute('data-text', word.textContent); // Armazena o texto para sombra
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const chalkboard = document.getElementById("chalkboard");
  
  // Texto a ser exibido
  let text = "Bem vindo ao site do Rever e Aprender.";
  let index = 0;

  // Cria um elemento de cursor
  const cursor = document.createElement("span");
  cursor.className = "blinking-cursor";
  cursor.textContent = "|";
  chalkboard.textContent = ""; // Limpa o texto inicial
  chalkboard.appendChild(cursor); // Adiciona o cursor

  // Animação de escrita
  function typeText() {
    if (index < text.length) {
      chalkboard.textContent = text.slice(0, index + 1); // Adiciona o texto progressivamente
      chalkboard.appendChild(cursor); // Garante que o cursor continue visível
      index++;
      setTimeout(typeText, 100); // Tempo entre letras
    }
  }

  typeText(); // Inicia animação
});


  document.addEventListener("DOMContentLoaded", () => {
    const notebook = document.getElementById("notebook");
    notebook.style.opacity = 0;
    notebook.style.transform = "translateY(-20px)";
  
    setTimeout(() => {
      notebook.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      notebook.style.opacity = 1;
      notebook.style.transform = "translateY(0)";
    }, 200);
  });
  
  const glowText = document.getElementById('glow-text');

  // Alternar brilho dinâmico
  setInterval(() => {
      const intensity = Math.random() * 10 + 20; // Intensidade aleatória
      glowText.style.textShadow = `
          0 0 ${intensity}px #191970,
          0 0 ${intensity * 1.5}px #191970,
          0 0 ${intensity * 2}px #191970,
          0 0 ${intensity * 3}px ##00BFFF,
          0 0 ${intensity * 4}px ##00BFFF,
          0 0 ${intensity * 5}px ##00BFFF
      `;
  }, 200); // Atualiza a cada 200ms

  document.getElementById("animate_confetti").addEventListener("click", () => {
    let params = {
        particleCount: 500, // Quantidade de confetes
        spread: 90, // O quanto eles se espalham
        startVelocity: 70, // Velocidade inicial
        origin: { x: 0, y: 0.5 }, // Posição inicial na tela
        angle: 45 // Ângulo em que os confetes serão lançados
    };

    // Joga confetes da esquerda pra direita
    confetti(params);

    // Joga confetes da direita para a esquerda
    params.origin.x = 1;
    params.angle = 135;
    confetti(params);

    // Espera 1,5 segundos e redireciona para o WhatsApp
    setTimeout(() => {
        const phoneNumber = "5591988074549"; // Substitua pelo número desejado com código do país
        const message = "Olá! Gostaria de mais informações."; // Mensagem inicial (opcional)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    }, 1000);

    

    
});

document.getElementById("animate_confetti1").addEventListener("click", () => {
  let params = {
      particleCount: 500, // Quantidade de confetes
      spread: 90, // O quanto eles se espalham
      startVelocity: 70, // Velocidade inicial
      origin: { x: 0, y: 0.5 }, // Posição inicial na tela
      angle: 45 // Ângulo em que os confetes serão lançados
  };

  // Joga confetes da esquerda pra direita
  confetti(params);

  // Joga confetes da direita para a esquerda
  params.origin.x = 1;
  params.angle = 135;
  confetti(params);

  // Espera 1,5 segundos e redireciona para o WhatsApp
  setTimeout(() => {
      const phoneNumber = "5591988074549"; // Substitua pelo número desejado com código do país
      const message = "Olá! Gostaria de mais informações."; // Mensagem inicial (opcional)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
  }, 1000);
  
});

document.getElementById("animate_confetti2").addEventListener("click", () => {
  let params = {
      particleCount: 500, // Quantidade de confetes
      spread: 90, // O quanto eles se espalham
      startVelocity: 70, // Velocidade inicial
      origin: { x: 0, y: 0.5 }, // Posição inicial na tela
      angle: 45 // Ângulo em que os confetes serão lançados
  };

  // Joga confetes da esquerda pra direita
  confetti(params);

  // Joga confetes da direita para a esquerda
  params.origin.x = 1;
  params.angle = 135;
  confetti(params);

  // Espera 1,5 segundos e redireciona para o WhatsApp
  setTimeout(() => {
      const phoneNumber = "5591988074549"; // Substitua pelo número desejado com código do país
      const message = "Olá! Gostaria de mais informações."; // Mensagem inicial (opcional)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
  }, 1000);

  

  
});

document.getElementById("animate_confetti3").addEventListener("click", () => {
  let params = {
      particleCount: 500, // Quantidade de confetes
      spread: 90, // O quanto eles se espalham
      startVelocity: 70, // Velocidade inicial
      origin: { x: 0, y: 0.5 }, // Posição inicial na tela
      angle: 45 // Ângulo em que os confetes serão lançados
  };

  // Joga confetes da esquerda pra direita
  confetti(params);

  // Joga confetes da direita para a esquerda
  params.origin.x = 1;
  params.angle = 135;
  confetti(params);

  // Espera 1,5 segundos e redireciona para o WhatsApp
  setTimeout(() => {
      const phoneNumber = "5591988074549"; // Substitua pelo número desejado com código do país
      const message = "Olá! Gostaria de mais informações."; // Mensagem inicial (opcional)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
  }, 1000);
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Obtendo os valores dos campos
  const responsavel = document.getElementById('responsavel').value;
  const aluno = document.getElementById('aluno').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const nivelEnsino = document.getElementById('nivelEnsino').value;
  const escola = document.getElementById('escola').value;
  const horarioVisita = document.getElementById('horarioVisita').value;

  // Montando a mensagem para o WhatsApp
  const whatsappNumber = '5591988074549'; // Substitua pelo seu número de WhatsApp
  const text = `Olá! Gostaria de agendar uma visita
  Nome do Responsável: ${responsavel}
  Nome do Aluno: ${aluno}
  Telefone: ${telefone}
  E-mail: ${email}
  Nível de Ensino: ${nivelEnsino}
  Escola Atual: ${escola}
  Horário da Visita: ${horarioVisita}`;

  // Criando o link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  // Abrindo o link em uma nova aba
  window.open(whatsappUrl, '_blank');
});

const agendarVisitaBtn = document.getElementById('agendarVisitaBtn');
const formContainer = document.getElementById('formContainer');
const closeFormBtn = document.getElementById('closeFormBtn');

// Exibe o formulário ao clicar no botão "Agendar Visita"
agendarVisitaBtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    agendarVisitaBtn.style.display = 'none';
});

// Fecha o formulário e retorna para o botão inicial
closeFormBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
    agendarVisitaBtn.style.display = 'block';
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

  const chatContainer = document.getElementById("chat-container");
  const chatbotIcon = document.getElementById("chatbot-icon");
  const closeBtn = document.getElementById("close-btn");
  const input = document.getElementById("mensagem-input");
  const enviarBtn = document.getElementById("enviar-btn");
  
  chatbotIcon.addEventListener("click", function () {
    chatContainer.classList.toggle("active");
  });
  
  closeBtn.addEventListener("click", function () {
    chatContainer.classList.remove("active");
  });
  
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      enviarMensagem();
    }
  });
  
  enviarBtn.addEventListener("click", function () {
    enviarMensagem();
  });
  
  function enviarMensagem() {
    const mensagem = input.value.trim();
    if (mensagem) {
      adicionarMensagemUsuario(mensagem);
      processarMensagem(mensagem);
      input.value = "";
      input.focus();
    }
  }
  
  function adicionarMensagemUsuario(mensagem) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = "chat-message user";
    div.textContent = mensagem;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function adicionarMensagemBot(resposta) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = "chat-message bot";
    div.innerHTML = `<img src="/static/images/Blue Learning Centre Logo.png" alt="chatbot" class="message-avatar"><span>${resposta}</span>`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function adicionarMensagemComBotoes() {
    const typingIndicator = document.getElementById("typing-indicator");
    const chatBox = document.getElementById("chat-box");
  
    typingIndicator.style.display = "flex";
    chatBox.appendChild(typingIndicator);
  
    setTimeout(() => {
      typingIndicator.style.display = "none";
  
      const div = document.createElement("div");
      div.className = "chat-message bot";
      div.innerHTML = `
        <img src="/static/images/Blue Learning Centre Logo.png" alt="bot" class="message-avatar">
        <span>Posso ajudar em algo mais?</span>
        <div class="botao-container">
          <button id="botao-sim">Sim</button>
          <button id="botao-nao">Não</button>
        </div>`;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
  
      document.getElementById("botao-sim").onclick = () => {
        removerBotoes();
        mostrarOpcoesIniciais();
      };
  
      document.getElementById("botao-nao").onclick = () => {
        removerBotoes();
        mostrarMensagemDespedida();
      };
    }, 2000);
  }
  
  function removerBotoes() {
    const botaoContainer = document.querySelector(".botao-container");
    if (botaoContainer) {
      botaoContainer.remove();
    }
  }
  
  function mostrarOpcoesIniciais() {
    adicionarMensagemBot(`<img src="/static/images/Blue Learning Centre Logo.png" alt="chatbot" class="message-avatar" />
                    <span>Olá! Sou o Rever e Aprender. Selecione uma das opções de ajuda abaixo:<br />
                        1 -> Horários de Aula⌚<br />
                        2 -> Níveis de Ensino Escolar🏫<br />
                        3 -> Telefone para Contato📞<br />
                        4 -> Pacotes de Aula👩‍🏫<br />
                        5 -> Localização Detalhada🗺️<br />
                    </span> `);
  }
  
  function mostrarMensagemDespedida() {
    adicionarMensagemBot("Obrigado por usar o ChatBot Rever e Aprender Tenha um ótimo dia!");
  }
  
  function processarMensagem(mensagem) {
    const typingIndicator = document.getElementById("typing-indicator");
    const chatBox = document.getElementById("chat-box");
  
    typingIndicator.style.display = "flex";
    chatBox.appendChild(typingIndicator);
  
    setTimeout(() => {
      fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mensagem: mensagem }),
      })
        .then((response) => response.json())
        .then((data) => {
          typingIndicator.style.display = "none";
          adicionarMensagemBot(data.resposta);
          adicionarMensagemComBotoes();
        });
    }, 3000);
  }






