console.log('JS carregado!');

const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');
const erroSenha = document.getElementById('erro-senha');

let tentouEnviar = false;

// Alternar visibilidade da senha
eyeIcon.addEventListener('click', () => {
  const isPassword = password.type === 'password';
  password.type = isPassword ? 'text' : 'password';
  eyeIcon.classList.toggle('fa-eye');
  eyeIcon.classList.toggle('fa-eye-slash');
});

// Validação personalizada
form.addEventListener('submit', function (event) {
  tentouEnviar = true;
  let valido = true;

  // Limpa mensagens anteriores
  erroSenha.textContent = '';
  erroSenha.style.display = 'none';
  password.classList.remove('input-invalido');
  email.setCustomValidity('');

  // Valida e-mail
  if (!email.checkValidity()) {
    email.reportValidity();
    email.classList.add('input-invalido');
    valido = false;
  }

  // Valida senha
  if (!password.checkValidity()) {
    erroSenha.textContent = "A senha deve ter no minimo 4 e no máximo 6 caracteres e conter exatamente 1 símbolo (@, # ou !)";
    erroSenha.style.display = 'block';
    password.classList.add('input-invalido');
    valido = false;
  }

  if (!valido) {
    event.preventDefault(); // Impede envio
    return;
  }

  console.log('Formulário válido! Enviando...');
});

// Remover mensagem ao digitar, se válido
email.addEventListener('input', () => {
  if (tentouEnviar && email.checkValidity()) {
    email.setCustomValidity('');
  }
});

password.addEventListener('input', () => {
  if (tentouEnviar && password.checkValidity()) {
    erroSenha.textContent = '';
    erroSenha.style.display = 'none';
    password.classList.remove('input-invalido');
  }
});
