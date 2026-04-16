function calculateRelationshipTime() {
    const startDate = new Date(2025, 7, 30);
    const currentDate = new Date();

    if (currentDate < startDate) {
        return { years: 0, months: 0, days: 0 };
    }

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonthLastDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        days += previousMonthLastDay;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

const { years, months, days } = calculateRelationshipTime();
if (years > 0) {
    document.getElementById("time").innerText = `${years} ano, ${months} meses e ${days} dias`;
} else if (years <= 0) {
    document.getElementById("time").innerText = `Aindaaaaaaaaaa não fazem anos não, mas fazem ${months} meses e ${days} dias`;
}

function Sabequeteamo() {
    const response = prompt("Você acha que eu te amo? 💚");

    if (response) {
        const respostaLower = response.toLowerCase().trim();

        if (respostaLower === "sim") {
            showModal("Eu também te amo, Asheley Linda! 💚💚💚\n\nMais do que as estrelas no céu, mais do que tudo nesse universo.");
        } else if (respostaLower === "não") {
            showModal("Você está enganada, meu amor! Eu te amo mais do que qualquer coisa nesse mundo e além. 💚");
        } else {
            showModal("Mesmo que você não saiba responder, eu sei no fundo do meu coração: eu te amo infinitamente! 💚");
        }
    }
}

// Função para mensagem especial
function mensagemEspecial() {
    const mensagens = [
        "Fica pertinho de mim, deixa eu pegar sua mão, quero te dar meu carinho e o meu coração. 💚",
        "Me liga, eu tô com sdds de falar com você. 😭",
        "Eu amo quando eu fico em call falando bobeirinhas ctg. 💚",
        "Aaaaaaaaaaaaaaaaaaaaaaaaa, dormir com vc é mto bommmmmmmmmmmmmmmmm. 🌙",
        "Eu preciso de mais tempo com você, tipo, necessidade real. 💚",
        "Eu amo quando você me chama de princesa. 👑",
        "A gente vai ter muitos e muitos gatinhos para a gente cuidar. 💚",
        "Ó, nossa lua de mel vai ser no parque da Hello Kitty. 😻",
        "Desculpa, não consigo me concentrar com  você sorrindo pra mim. 💚",
        "Titititiittiititititititiiti. 💞",
        "Eu sou apaixonada na minha namorada linda que eu amo muito. 💚",
        "Aceita caçar todos os pokémons comigo? 🥺",
        "Me chama de Sun e vem ser minha Moon. 🌙",
        "Deixa eu te chamar de papaléguas aí vc corre pra me dar um beijo. 💋",
        "Eu quero dar um cheiro no seu coração. 💚",
        "Beijo beijo beijo beijo, beijinhho não, só beijão na minha namo. 💋",
        "rsrsrsrsrsrs",
        "Me pega muito",
        "Sla, eu só sei que te amo. 💚",
        "Me namora pra sempre?",
        "Vem ficar comigo. 💖",
        "Vamo tomar banho juntas, vamo ficar molhadinhas",
        "Beijinho na minha namorada. 💞",
        "Obrigada por fazer minha vida mais feliz. 💚",
        "No alto daquele cume, eu plantei uma roseira, o vento no cume bate e a rosa no cume cheira",
        "E eu te amo sempre mais e mais",
        "E quando bate a chuva quente, eu só quero o calor do seu corpo🔥",
        "E quando bate a chuva fria, eu só quero o calor do seu corpo🔥",
        "E quando bate o horario de ir embora, eu já fico com saudades, porque eu sempre quero mais e mais da minha namo😭",
        "rsrsrsrsrsrs",
        "Ai Asheley, quando eu tô com você eu só consigo pensar em mais você",
        "Lol, kkj, rs, amo vc, be",
        "Casa comigo, tipo, agora? 💍",
        "Atchim, eu acho que eu to dodoi, me dá um beijo pra mim ficar boa?",
    ];

    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    showModal(mensagemAleatoria);
}

// Função para mostrar o modal
function showModal(message) {
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');

    modalMessage.innerHTML = message.replace(/\n/g, '<br>');
    openModal(modal);
}

function openModal(modal) {
    if (!modal) {
        return;
    }

    modal.style.display = 'block';
}

function closeModal(modal) {
    if (!modal) {
        return;
    }

    modal.style.display = 'none';
}

// Adicionar event listeners
document.getElementById('loveBtn').onclick = function () {
    const galleryModal = document.getElementById('galleryModal');
    openModal(galleryModal);
};
document.getElementById('messageBtn').addEventListener('click', mensagemEspecial);

const messageModal = document.getElementById('messageModal');
const messageModalClose = document.getElementById('messageModalClose');
const galleryModal = document.getElementById('galleryModal');
const galleryModalClose = document.getElementById('galleryModalClose');

if (messageModalClose) {
    messageModalClose.onclick = function () {
        closeModal(messageModal);
    };
}

if (galleryModalClose) {
    galleryModalClose.onclick = function () {
        closeModal(galleryModal);
    };
}

window.addEventListener('click', function (event) {
    if (event.target === messageModal) {
        closeModal(messageModal);
    }

    if (event.target === galleryModal) {
        closeModal(galleryModal);
    }
});

// Efeito de estrela cadente
function createShootingStar() {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = '-20px';
    star.style.fontSize = Math.random() * 15 + 10 + 'px';
    star.style.opacity = Math.random() * 0.7 + 0.3;
    star.style.pointerEvents = 'none';
    star.style.zIndex = '999';
    star.style.animation = `shootStar ${Math.random() * 2 + 1.5}s linear forwards`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
}

// Animação da estrela cadente
const starStyle = document.createElement('style');
starStyle.textContent = `
    @keyframes shootStar {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(100vh) translateX(50px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(starStyle);

// Criar estrelas cadentes aleatoriamente
setInterval(createShootingStar, 8000);

// Efeito de digitação no título
const subtitle = document.querySelector('.subtitle');
const originalText = subtitle.textContent;
subtitle.style.opacity = '0';

setTimeout(() => {
    let i = 0;
    subtitle.style.opacity = '1';
    subtitle.textContent = '';

    function typeWriter() {
        if (i < originalText.length) {
            subtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}, 500);

// Adicionar efeito de brilho nos botões
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

const photoPool = [
    "Fotinhas%20nossas/1000019050.jpg.jpeg",
    "Fotinhas%20nossas/1000019051.jpg.jpeg",
    "Fotinhas%20nossas/1000019052.jpg.jpeg",
    "Fotinhas%20nossas/1000019053.jpg.jpeg",
    "Fotinhas%20nossas/1000019054.jpg.jpeg",
    "Fotinhas%20nossas/1000054786.jpg.jpeg",
    "Fotinhas%20nossas/1000054788.jpg.jpeg",
    "Fotinhas%20nossas/1000054789.jpg.jpeg",
    "Fotinhas%20nossas/1000054790.jpg.jpeg",
    "Fotinhas%20nossas/1000054792.jpg.jpeg",
    "Fotinhas%20nossas/1000054796.jpg.jpeg",
    "Fotinhas%20nossas/1000057761.jpg.jpeg",
    "Fotinhas%20nossas/1000057763.jpg.jpeg",
    "Fotinhas%20nossas/1000057764.jpg.jpeg",
    "Fotinhas%20nossas/1000057765.jpg.jpeg",
    "Fotinhas%20nossas/1000057766.jpg.jpeg",
    "Fotinhas%20nossas/1000057769.jpg.jpeg",
    "Fotinhas%20nossas/1000057771.jpg.jpeg",
    "Fotinhas%20nossas/1000057772.jpg.jpeg",
    "Fotinhas%20nossas/1000057773.jpg.jpeg",
    "Fotinhas%20nossas/1000057774.jpg.jpeg",
    "Fotinhas%20nossas/1000057775.jpg.jpeg",
    "Fotinhas%20nossas/1000057776.jpg.jpeg",
    "Fotinhas%20nossas/1000057777.jpg.jpeg",
    "Fotinhas%20nossas/1000057784.jpg.jpeg",
    "Fotinhas%20nossas/1000060082.jpg.jpeg",
    "Fotinhas%20nossas/1000065261.jpg.jpeg",
    "Fotinhas%20nossas/1000065264.jpg.jpeg",
    "Fotinhas%20nossas/1000065269.jpg.jpeg",
    "Fotinhas%20nossas/1000065271.jpg.jpeg",
    "Fotinhas%20nossas/1000065279.jpg.jpeg",
    "Fotinhas%20nossas/1000065285.jpg.jpeg",
    "Fotinhas%20nossas/1000069096.jpg.jpeg",
    "Fotinhas%20nossas/1000069100.jpg.jpeg",
    "Fotinhas%20nossas/1000069103.jpg.jpeg",
    "Fotinhas%20nossas/1000069105.jpg.jpeg",
    "Fotinhas%20nossas/1000070686.jpg.jpeg",
    "Fotinhas%20nossas/1000070687.jpg.jpeg",
    "Fotinhas%20nossas/1000070688.jpg.jpeg",
    "Fotinhas%20nossas/1000070689.jpg.jpeg",
    "Fotinhas%20nossas/1000070690.jpg.jpeg",
    "Fotinhas%20nossas/1000070691.jpg.jpeg",
    "Fotinhas%20nossas/1000074204.jpg.jpeg",
    "Fotinhas%20nossas/1000074205.jpg.jpeg",
    "Fotinhas%20nossas/1000074206.jpg.jpeg",
    "Fotinhas%20nossas/1000074207.jpg.jpeg",
    "Fotinhas%20nossas/1000074208.jpg.jpeg",
    "Fotinhas%20nossas/1000074209.jpg.jpeg",
    "Fotinhas%20nossas/1000074210.jpg.jpeg",
    "Fotinhas%20nossas/1000074211.jpg.jpeg",
    "Fotinhas%20nossas/1000074212.jpg.jpeg",
    "Fotinhas%20nossas/1000074213.jpg.jpeg",
    "Fotinhas%20nossas/1000074214.jpg.jpeg",
    "Fotinhas%20nossas/1000074219.jpg.jpeg",
    "Fotinhas%20nossas/1000074221.jpg.jpeg",
    "Fotinhas%20nossas/1000074223.jpg.jpeg",
    "Fotinhas%20nossas/1000074224.jpg.jpeg",
    "Fotinhas%20nossas/1000074226.jpg.jpeg",
    "Fotinhas%20nossas/1000074227.jpg.jpeg",
    "Fotinhas%20nossas/1000074228.jpg.jpeg",
    "Fotinhas%20nossas/1000074229.jpg.jpeg",
    "Fotinhas%20nossas/1000074230.jpg.jpeg",
    "Fotinhas%20nossas/1000074234.jpg.jpeg",
    "Fotinhas%20nossas/1000074235.jpg.jpeg",
    "Fotinhas%20nossas/1000074236.jpg.jpeg",
    "Fotinhas%20nossas/1000074237.jpg.jpeg",
    "Fotinhas%20nossas/1000074238.jpg.jpeg",
    "Fotinhas%20nossas/1000074239.jpg.jpeg",
    "Fotinhas%20nossas/1000074240.jpg.jpeg",
    "Fotinhas%20nossas/1000074241.jpg.jpeg",
    "Fotinhas%20nossas/1000074242.jpg.jpeg",
    "Fotinhas%20nossas/1000074244.jpg.jpeg",
    "Fotinhas%20nossas/1000074245.jpg.jpeg",
    "Fotinhas%20nossas/1000074247.jpg.jpeg",
    "Fotinhas%20nossas/1000074248.jpg.jpeg",
    "Fotinhas%20nossas/1000083029.jpg.jpeg",
    "Fotinhas%20nossas/1000083030.jpg.jpeg",
    "Fotinhas%20nossas/1000083031.jpg.jpeg",
    "Fotinhas%20nossas/1000083032.jpg.jpeg",
    "Fotinhas%20nossas/1000083052.jpg.jpeg",
    "Fotinhas%20nossas/1000083053.jpg.jpeg",
    "Fotinhas%20nossas/1000083054.jpg.jpeg",
    "Fotinhas%20nossas/1000083055.jpg.jpeg",
    "Fotinhas%20nossas/1000083085.jpg.jpeg",
    "Fotinhas%20nossas/1000083088.jpg.jpeg",
    "Fotinhas%20nossas/1000085261.jpg.jpeg",
    "Fotinhas%20nossas/1000085262.jpg.jpeg",
    "Fotinhas%20nossas/1000085263.jpg.jpeg",
    "Fotinhas%20nossas/1000085264.jpg.jpeg",
    "Fotinhas%20nossas/1000089173.jpg.jpeg",
    "Fotinhas%20nossas/1000089175.jpg.jpeg",
    "Fotinhas%20nossas/1000089177.jpg.jpeg",
    "Fotinhas%20nossas/1000089183.jpg.jpeg"
];

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function applyAdaptiveLayout(target, image) {
    const ratio = image.naturalWidth / image.naturalHeight;

    target.classList.remove("is-horizontal", "is-vertical", "is-square");

    if (ratio > 1.2) {
        target.classList.add("is-horizontal");
    } else if (ratio < 0.85) {
        target.classList.add("is-vertical");
    } else {
        target.classList.add("is-square");
    }
}

function applyHighlightLayout(frame, image) {
    const highlightCard = frame.closest(".highlight-photo");

    if (!highlightCard) {
        return;
    }

    highlightCard.classList.remove("highlight-photo-large", "highlight-horizontal", "highlight-vertical", "highlight-square");

    applyAdaptiveLayout(frame, image);

    if (frame.classList.contains("is-vertical")) {
        highlightCard.classList.add("highlight-photo-large", "highlight-vertical");
    } else if (frame.classList.contains("is-horizontal")) {
        highlightCard.classList.add("highlight-horizontal");
    } else {
        highlightCard.classList.add("highlight-square");
    }
}

function createPhotoCard(photoPath, index) {
    const article = document.createElement("article");
    article.className = "photo-card";
    article.innerHTML = `
        <div class="photo-frame photo-adaptive">
            <img src="${photoPath}" alt="Fotinha nossa ${index + 1}" loading="lazy">
        </div>
    `;

    const image = article.querySelector("img");
    image.addEventListener("load", () => {
        applyAdaptiveLayout(article, image);
    });
    image.addEventListener("error", () => {
        article.remove();
    });

    return article;
}

function fillHighlightPhotos() {
    const slots = document.querySelectorAll("[data-highlight-slot]");
    const selectedPhotos = shuffle(photoPool).slice(0, slots.length);

    slots.forEach((slot, index) => {
        const photoPath = selectedPhotos[index];

        if (!photoPath) {
            return;
        }

        slot.classList.remove("placeholder-photo");
        slot.innerHTML = `<img src="${photoPath}" alt="Fotinha nossa em destaque ${index + 1}" loading="eager">`;
        const image = slot.querySelector("img");
        image.addEventListener("load", () => {
            slot.classList.remove("photo-horizontal", "photo-vertical", "photo-square");
            applyHighlightLayout(slot, image);
        });
        image.addEventListener("error", () => {
            slot.classList.add("placeholder-photo");
            slot.innerHTML = `<span>Highlight ${String(index + 1).padStart(2, "0")}</span>`;
        });
    });

    return selectedPhotos;
}

function fillPhotoGallery(excludedPhotos) {
    const gallery = document.getElementById("photoGallery");

    if (!gallery) {
        return;
    }

    const remainingPhotos = photoPool.filter((photoPath) => !excludedPhotos.includes(photoPath));

    remainingPhotos.forEach((photoPath, index) => {
        gallery.appendChild(createPhotoCard(photoPath, index));
    });
}

const highlightPhotos = fillHighlightPhotos();
fillPhotoGallery(highlightPhotos);

// Mensagem secreta

const SECRET_PASSWORD = "0830170426";
const SECRET_MESSAGE = "Não é todos os dias que nos vemos da forma que nós realmente somos, nem da forma com que as pessoas mais importantes para nós nos enxergam, mas eu tenho o privilégio de todos os dias de olhar pra você (seja isso por foto, call ou pessoalmennte). Eu amo a forma de que todos os dias você me faz ter mais certeza que eu tomei a decisão certa, aquele dia em que roubei o nosso primeiro beijo, também aquele outro em que eu roubei o seu pedido de namoro; eu também amo a forma que você fica feliz e empolgada ao contar sobre algo que você gosta; com toda a sua paciência, e quando a sua voz fica mais doce toda vez que se direciona a mim, até quando você completa a minha frase, ou também da forma que você ri, quando algo realmente te faz rir (ou somente de uma coisa ou uma piada MUITO IDIOTA que eu fiz), eu te amei ontem como você foi, eu te amo hoje como você é, e eu vou te amar amanhã por tudo que você ainda vai ser. Feliz aniversário, Asheley";

function resetSecretModal() {
    const secretPasswordInput = document.getElementById("secretPassword");
    const secretFeedback = document.getElementById("secretFeedback");
    const secretMessage = document.getElementById("secretMessage");
    const secretMessageBox = document.getElementById("secretMessageBox");
    const secretHintBox = document.getElementById("secretHintBox");
    const toggleHintBtn = document.getElementById("toggleHintBtn");

    if (secretPasswordInput) {
        secretPasswordInput.value = "";
    }

    if (secretFeedback) {
        secretFeedback.textContent = "";
        secretFeedback.classList.remove("is-error", "is-success");
    }

    if (secretMessage) {
        secretMessage.textContent = "";
    }

    if (secretMessageBox) {
        secretMessageBox.classList.remove("is-visible");
    }

    if (secretHintBox) {
        secretHintBox.classList.remove("is-visible");
    }

    if (toggleHintBtn) {
        toggleHintBtn.textContent = "Mostrar dica";
    }
}

function toggleSecretHint() {
    const secretHintBox = document.getElementById("secretHintBox");
    const toggleHintBtn = document.getElementById("toggleHintBtn");

    if (!secretHintBox || !toggleHintBtn) {
        return;
    }

    const isVisible = secretHintBox.classList.toggle("is-visible");
    toggleHintBtn.textContent = isVisible ? "Esconder dica" : "Mostrar dica";
}

function handleSecretSubmit(event) {
    event.preventDefault();

    const secretPasswordInput = document.getElementById("secretPassword");
    const secretFeedback = document.getElementById("secretFeedback");
    const secretMessage = document.getElementById("secretMessage");
    const secretMessageBox = document.getElementById("secretMessageBox");

    if (!secretPasswordInput || !secretFeedback || !secretMessage || !secretMessageBox) {
        return;
    }

    const typedPassword = secretPasswordInput.value.trim();

    if (typedPassword === SECRET_PASSWORD) {
        secretFeedback.textContent = "Aaaaaaaaaaaaaaaaa parabéns amo!";
        secretFeedback.classList.remove("is-error");
        secretFeedback.classList.add("is-success");
        secretMessage.textContent = SECRET_MESSAGE;
        secretMessageBox.classList.add("is-visible");
        return;
    }

    secretFeedback.textContent = "Ixi, tenta de novo meu bem.";
    secretFeedback.classList.remove("is-success");
    secretFeedback.classList.add("is-error");
    secretMessage.textContent = "";
    secretMessageBox.classList.remove("is-visible");
    secretPasswordInput.select();
}

document.getElementById("secretBtn").addEventListener("click", function () {
    resetSecretModal();
    openModal(secretModal);

    const secretPasswordInput = document.getElementById("secretPassword");

    if (secretPasswordInput) {
        setTimeout(() => {
            secretPasswordInput.focus();
        }, 50);
    }
});

const secretModal = document.getElementById("secretModal");
const secretModalClose = document.getElementById("secretModalClose");
const secretForm = document.getElementById("secretForm");
const toggleHintBtn = document.getElementById("toggleHintBtn");

if (secretModalClose) {
    secretModalClose.onclick = function () {
        closeModal(secretModal);
    };
}

if (secretForm) {
    secretForm.addEventListener("submit", handleSecretSubmit);
}

if (toggleHintBtn) {
    toggleHintBtn.addEventListener("click", toggleSecretHint);
}

window.addEventListener('click', function (event) {
    if (event.target === secretModal) {
        closeModal(secretModal);
    }
});
