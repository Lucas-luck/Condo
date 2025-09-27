document.addEventListener('DOMContentLoaded', () => {
  // 1. Clonar os itens do carrossel
  const track = document.querySelector('.carouselEsteira-track');
  if (track) {
    const items = track.querySelectorAll('.carouselEsteira-item');
    items.forEach(item => {
      const clonedItem = item.cloneNode(true);
      track.appendChild(clonedItem);
    });

    // 2. Ajustar velocidade da esteira conforme tamanho da tela
    let speed = 1; // padrão
    if (window.innerWidth <= 575) speed = 1; // mobile
    else if (window.innerWidth <= 991) speed = 2; // tablet

    let translateX = 0;
    function moverEsteira() {
      translateX -= speed;
      if (translateX <= -track.scrollWidth / 2) {
        translateX = 0;
      }
      track.style.transform = `translateX(${translateX}px)`;
      requestAnimationFrame(moverEsteira);
    }
    moverEsteira();
  }

  // 3. Typewriter para descricaoP
  const targetDescricao = document.getElementById("typewriter-descricaoP");
  if (targetDescricao) {
    const text1 = "Com anos de experiência no mercado, oferecemos soluções completas para a reforma de edifícios residenciais e comerciais, garantindo durabilidade e estética moderna.";
    let i = 0;
    function type1() {
      if (i < text1.length) {
        targetDescricao.textContent += text1.charAt(i);
        i++;
        setTimeout(type1, 40);
      }
    }
    setTimeout(type1, 500);
  }

  // 4. Typewriter para parágrafo
  const targetParagrafo = document.getElementById("typewriter-paragrafo");
  if (targetParagrafo) {
    const text2 = "Nossos serviços incluem restauração de fachadas, impermeabilização, reforço estrutural e modernização de áreas comuns, sempre com foco na segurança e valorização do imóvel. Atuamos com equipes altamente qualificadas, experientes e comprometidas com a excelência. Utilizamos materiais de alta qualidade e seguimos rigorosos padrões técnicos em todas as etapas. Cada projeto é desenvolvido de forma personalizada, respeitando as necessidades do cliente. Prezamos pelo cumprimento de prazos, eficiência na execução e transparência em todo o processo. Nossa empresa busca constantemente inovações e melhorias nos métodos construtivos. Garantimos soluções completas para manter a estrutura do prédio protegida e atualizada. Oferecemos atendimento especializado desde o planejamento até a entrega final da obra. Vamos investir em qualidade, segurança e tranquilidade.";
    let j = 0;
    function type2() {
      if (j < text2.length) {
        targetParagrafo.textContent += text2.charAt(j);
        j++;
        setTimeout(type2, 40);
      }
    }
    setTimeout(type2, 7000);
  }
});

// Mostrar ou ocultar botão ao rolar
window.addEventListener('scroll', () => {
  const botao = document.getElementById('voltarTopo');
  if (botao) botao.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Ação ao clicar no botão
const botaoTopo = document.getElementById('voltarTopo');
if (botaoTopo) {
  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Modal
function abrirModal(src, descricao) {
  const modal = document.getElementById('modal');
  const imagem = document.getElementById('modalImagem');
  const texto = document.getElementById('modalDescricao');

  if (imagem && texto && modal) {
    imagem.src = src;
    texto.textContent = descricao;
    modal.style.display = 'block';
  }
}

function fecharModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};