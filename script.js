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







