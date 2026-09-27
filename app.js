// ===== STATE =====
let currentPage = 'home';
let currentTest = null;
let currentQuestionIndex = 0;
let answers = {};
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let resultType = null;
let isAnalyzing = false;
let currentFilter = 'all';

// ===== INIT =====
function initApp() {
  setupHeaderScroll();
  setupRevealObserver();
  showPage('home');
  lucide.createIcons();
}

// ===== HEADER SCROLL =====
function setupHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-blur', 'shadow-sm');
    } else {
      header.classList.remove('header-blur', 'shadow-sm');
    }
  });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

// ===== REVEAL ON SCROLL =====
function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  window.revealObserver = observer;
}

function observeReveals() {
  document.querySelectorAll('.reveal').forEach(el => {
    window.revealObserver.observe(el);
  });
}

// ===== PAGE ROUTING =====
function showPage(page, data = null) {
  currentPage = page;
  const app = document.getElementById('app');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('mobileMenu')?.classList.add('hidden');

  switch (page) {
    case 'home':
      app.innerHTML = renderHome();
      break;
    case 'tests':
      app.innerHTML = renderTests();
      break;
    case 'quiz':
      currentTest = data || 'mbti';
      currentQuestionIndex = 0;
      answers = {};
      scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      app.innerHTML = renderQuiz();
      break;
    case 'analyzing':
      app.innerHTML = renderAnalyzing();
      startAnalyzing();
      break;
    case 'result':
      app.innerHTML = renderResult();
      break;
    case 'types':
      app.innerHTML = renderTypes();
      break;
    case 'career':
      app.innerHTML = renderCareer();
      break;
    default:
      app.innerHTML = renderHome();
  }

  setTimeout(() => {
    lucide.createIcons();
    observeReveals();
  }, 50);
}

// ===== RENDER HOME =====
function renderHome() {
  return `
    <section class="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div class="absolute inset-0 gradient-bg opacity-95"></div>
      <div class="blob w-72 h-72 bg-cyan-300 top-20 -left-20 animate-float" style="animation-delay: 0s"></div>
      <div class="blob w-96 h-96 bg-sky-400 bottom-10 right-10 animate-float" style="animation-delay: 2s"></div>
      <div class="blob w-64 h-64 bg-blue-300 top-1/2 left-1/3 animate-float" style="animation-delay: 4s"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-white space-y-6 reveal visible">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Khám phá tính cách<br>
              <span class="text-cyan-200">Hiểu bản thân</span><br>
              Chọn đúng hướng đi
            </h1>
            <p class="text-lg sm:text-xl text-sky-100 max-w-lg leading-relaxed">
              Bộ trắc nghiệm tính cách & hướng nghiệp hiện đại giúp bạn hiểu rõ điểm mạnh, sở thích và con đường phù hợp nhất.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <button onclick="showPage('tests')" class="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-700 font-bold text-lg shadow-xl shadow-primary-900/20 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                Bắt đầu trắc nghiệm
                <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button onclick="showPage('types')" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all">
                Xem 16 nhóm tính cách
              </button>
            </div>
            <div class="flex items-center gap-6 pt-4 text-sky-100 text-sm">
              <div class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-cyan-300"></i> Miễn phí</div>
              <div class="flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-cyan-300"></i> 10–15 phút</div>
              <div class="flex items-center gap-2"><i data-lucide="users" class="w-4 h-4 text-cyan-300"></i> 50.000+ người dùng</div>
            </div>
          </div>
          <div class="hidden lg:flex justify-center reveal visible stagger-2">
            <div class="relative w-full max-w-md">
              <div class="absolute inset-0 bg-white/10 rounded-3xl blur-2xl"></div>
              <div class="relative bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                ${renderPersonalityIllustration()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-white" id="about">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Tại sao nên khám phá tính cách?</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Hiểu rõ bản thân là bước đầu tiên để lựa chọn nghề nghiệp và lối sống phù hợp.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${INTRO_CARDS.map((card, i) => `
            <div class="card-gradient-border soft-shadow p-6 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 reveal stagger-${i + 1}">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center text-white mb-4">
                <i data-lucide="${card.icon}" class="w-6 h-6"></i>
              </div>
              <h3 class="font-bold text-lg text-slate-900 mb-2">${card.title}</h3>
              <p class="text-slate-600 text-sm leading-relaxed">${card.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Chọn bài trắc nghiệm phù hợp với bạn</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Mỗi bài test tập trung vào một khía cạnh khác nhau của tính cách và nghề nghiệp.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${TESTS.slice(0, 3).map((test, i) => renderTestCard(test, i)).join('')}
        </div>
        <div class="text-center mt-10 reveal">
          <button onclick="showPage('tests')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-500 text-primary-600 font-semibold hover:bg-primary-50 transition-all">
            Xem tất cả bài test
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Khám phá 16 nhóm tính cách</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Mỗi nhóm có điểm mạnh, phong cách làm việc và hướng nghề nghiệp riêng.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${PERSONALITY_TYPES.slice(0, 8).map((type, i) => `
            <button onclick="openTypeModal('${type.id}')" class="group p-4 rounded-2xl bg-slate-50 hover:bg-white soft-shadow hover:soft-shadow-lg border border-transparent hover:border-primary-200 transition-all duration-300 text-left reveal stagger-${(i % 4) + 1}">
              <div class="w-10 h-10 rounded-lg mb-3 flex items-center justify-center text-white text-sm font-bold" style="background: ${type.color}">
                ${type.id}
              </div>
              <h4 class="font-semibold text-slate-900 text-sm group-hover:text-primary-600 transition-colors">${type.name}</h4>
              <p class="text-xs text-slate-500 mt-1 line-clamp-2">${type.slogan}</p>
            </button>
          `).join('')}
        </div>
        <div class="text-center mt-10 reveal">
          <button onclick="showPage('types')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] transition-all">
            Xem đầy đủ 16 nhóm
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600">
      <div class="max-w-4xl mx-auto px-4 text-center reveal">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Sẵn sàng khám phá bản thân?</h2>
        <p class="text-lg text-sky-100 mb-8">Chỉ mất 10–15 phút để có cái nhìn rõ ràng hơn về tính cách và hướng đi của bạn.</p>
        <button onclick="showPage('quiz', 'mbti')" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-700 font-bold text-lg shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all">
          Bắt đầu ngay
          <i data-lucide="sparkles" class="w-5 h-5"></i>
        </button>
      </div>
    </section>
  `;
}

function renderPersonalityIllustration() {
  return `
    <div class="flex flex-col items-center gap-6">
      <div class="grid grid-cols-2 gap-3 w-full">
        ${['INTJ', 'ENFP', 'ISTJ', 'ESFP'].map((id, i) => {
          const t = PERSONALITY_TYPES.find(p => p.id === id);
          return `
            <div class="bg-white/20 rounded-xl p-4 text-center animate-float" style="animation-delay: ${i * 0.5}s">
              <div class="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-bold text-sm mb-2" style="background: ${t.color}">
                ${id}
              </div>
              <p class="text-white text-xs font-medium">${t.name}</p>
            </div>
          `;
        }).join('')}
      </div>
      <div class="text-center text-white/80 text-sm">
        <p class="font-medium">16 nhóm tính cách</p>
        <p class="text-xs mt-1">Mỗi người đều có điểm mạnh riêng</p>
      </div>
    </div>
  `;
}

function renderTestCard(test, index) {
  return `
    <div class="card-gradient-border soft-shadow rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 group reveal stagger-${(index % 3) + 1}">
      <div class="h-32 bg-gradient-to-br ${test.color} flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-black/5"></div>
        <i data-lucide="${test.icon}" class="w-14 h-14 text-white/90 group-hover:scale-110 transition-transform duration-500"></i>
      </div>
      <div class="p-6">
        <h3 class="font-bold text-xl text-slate-900 mb-2">${test.name}</h3>
        <p class="text-slate-600 text-sm mb-4 leading-relaxed">${test.description}</p>
        <div class="flex items-center gap-4 text-xs text-slate-500 mb-5">
          <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${test.time}</span>
          <span class="flex items-center gap-1"><i data-lucide="help-circle" class="w-3.5 h-3.5"></i> ${test.questions} câu</span>
        </div>
        <button onclick="showPage('quiz', '${test.id}')" class="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/30 active:scale-[0.98] transition-all">
          Bắt đầu
        </button>
      </div>
    </div>
  `;
}

function renderTests() {
  return `
    <section class="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Chọn bài trắc nghiệm phù hợp với bạn</h1>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Mỗi bài test được thiết kế để khám phá một khía cạnh khác nhau của bạn.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${TESTS.map((test, i) => renderTestCard(test, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const questions = QUIZ_QUESTIONS;
  const total = questions.length;
  const q = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / total) * 100;
  const selected = answers[q.id];

  return `
    <section class="pt-24 pb-16 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-2xl mx-auto px-4 sm:px-6">
        <div class="mb-8 reveal visible">
          <div class="flex items-center justify-between mb-3">
            <h1 class="text-lg font-semibold text-primary-700">Trắc nghiệm MBTI</h1>
            <span class="text-sm font-medium text-slate-500">Câu ${String(currentQuestionIndex + 1).padStart(2, '0')} / ${total}</span>
          </div>
          <div class="h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div class="progress-bar h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full" style="width: ${progress}%"></div>
          </div>
          <p class="text-xs text-slate-400 mt-1.5 text-right">${Math.round(progress)}% hoàn thành</p>
        </div>

        <div id="questionCard" class="soft-shadow-lg rounded-2xl bg-white p-6 sm:p-8 question-enter">
          <div class="mb-6">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-4">
              ${currentQuestionIndex + 1}
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">${q.text}</h2>
          </div>

          <div class="space-y-3">
            ${q.options.map((opt, i) => `
              <button 
                onclick="selectAnswer(${q.id}, ${i})"
                class="answer-btn w-full text-left p-4 rounded-xl border-2 border-slate-200 bg-white ${selected === i ? 'selected' : ''}"
              >
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 ${selected === i ? 'border-white bg-white/20' : 'border-slate-300'} flex items-center justify-center mt-0.5">
                    ${selected === i ? '<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i>' : `<span class="text-xs text-slate-400 font-medium">${String.fromCharCode(65 + i)}</span>`}
                  </div>
                  <span class="text-sm sm:text-base ${selected === i ? 'text-white font-medium' : 'text-slate-700'}">${opt.text}</span>
                </div>
              </button>
            `).join('')}
          </div>

          <div class="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <button 
              onclick="prevQuestion()" 
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors ${currentQuestionIndex === 0 ? 'opacity-40 pointer-events-none' : ''}"
            >
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              Quay lại
            </button>
            <button 
              onclick="nextQuestion()" 
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-md hover:shadow-lg transition-all ${selected === undefined ? 'opacity-50 pointer-events-none' : ''}"
            >
              ${currentQuestionIndex === total - 1 ? 'Xem kết quả' : 'Tiếp tục'}
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function selectAnswer(qId, optIndex) {
  answers[qId] = optIndex;
  document.getElementById('app').innerHTML = renderQuiz();
  lucide.createIcons();
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    document.getElementById('app').innerHTML = renderQuiz();
    lucide.createIcons();
  }
}

function nextQuestion() {
  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  if (answers[q.id] === undefined) return;

  const opt = q.options[answers[q.id]];
  if (opt.scores) {
    Object.entries(opt.scores).forEach(([k, v]) => {
      scores[k] = (scores[k] || 0) + v;
    });
  }

  if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
    currentQuestionIndex++;
    document.getElementById('app').innerHTML = renderQuiz();
    lucide.createIcons();
  } else {
    resultType = calculateMBTI();
    showPage('analyzing');
  }
}

function calculateMBTI() {
  const type = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');
  return PERSONALITY_TYPES.find(t => t.id === type) || PERSONALITY_TYPES[5];
}

function renderAnalyzing() {
  return `
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
      <div class="max-w-md mx-auto px-4 text-center">
        <div class="relative w-28 h-28 mx-auto mb-8">
          <div class="loading-ring absolute inset-0 w-28 h-28"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <i data-lucide="brain" class="w-10 h-10 text-primary-500 animate-pulse-soft"></i>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-slate-900 mb-2">Đang phân tích kết quả của bạn…</h2>
        <p id="analyzeMsg" class="text-slate-600 mb-6">Đang tổng hợp câu trả lời…</p>
        <div class="h-2 bg-slate-200 rounded-full overflow-hidden max-w-xs mx-auto">
          <div id="analyzeProgress" class="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full progress-bar" style="width: 0%"></div>
        </div>
        <div class="flex justify-center gap-4 mt-10">
          ${['INTJ', 'ENFP', 'ISTJ', 'ESFP'].map((id, i) => {
            const t = PERSONALITY_TYPES.find(p => p.id === id);
            return `<div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float" style="background: ${t.color}; animation-delay: ${i * 0.4}s">${id.slice(0,2)}</div>`;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

function startAnalyzing() {
  const messages = [
    'Đang tổng hợp câu trả lời…',
    'Đang phân tích xu hướng tính cách…',
    'Đang xác định nhóm nổi bật…',
    'Đang xây dựng hồ sơ của bạn…'
  ];
  let step = 0;
  const interval = setInterval(() => {
    step++;
    const msgEl = document.getElementById('analyzeMsg');
    const progEl = document.getElementById('analyzeProgress');
    if (msgEl && step <= messages.length) msgEl.textContent = messages[step - 1];
    if (progEl) progEl.style.width = `${(step / messages.length) * 100}%`;
    if (step >= messages.length) {
      clearInterval(interval);
      setTimeout(() => showPage('result'), 600);
    }
  }, 700);
}

function renderResult() {
  if (!resultType) resultType = PERSONALITY_TYPES[5];
  const t = resultType;
  const dims = [
    { label: 'Năng lượng', left: 'Hướng nội (I)', right: 'Hướng ngoại (E)', value: scores.E / (scores.E + scores.I || 1) * 100 },
    { label: 'Nhận thức', left: 'Cảm nhận (S)', right: 'Trực giác (N)', value: scores.N / (scores.S + scores.N || 1) * 100 },
    { label: 'Ra quyết định', left: 'Lý trí (T)', right: 'Cảm xúc (F)', value: scores.F / (scores.T + scores.F || 1) * 100 },
    { label: 'Phong cách sống', left: 'Nguyên tắc (J)', right: 'Linh hoạt (P)', value: scores.P / (scores.J + scores.P || 1) * 100 }
  ];

  return `
    <section class="pt-24 pb-20 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="soft-shadow-lg rounded-3xl bg-white overflow-hidden mb-10 reveal visible">
          <div class="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-500 p-8 sm:p-10 text-white">
            <p class="text-sky-200 text-sm font-medium mb-2">Kết quả của bạn</p>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div class="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-lg" style="background: ${t.color}">
                ${t.id}
              </div>
              <div>
                <h1 class="text-3xl sm:text-4xl font-extrabold mb-1">${t.name}</h1>
                <p class="text-sky-100 text-lg">${t.slogan}</p>
              </div>
            </div>
          </div>
          <div class="p-6 sm:p-8">
            <p class="text-slate-700 text-lg leading-relaxed mb-6">${t.description}</p>
            <div class="grid sm:grid-cols-2 gap-4">
              ${dims.map(d => `
                <div class="p-4 rounded-xl bg-slate-50">
                  <div class="flex justify-between text-xs text-slate-500 mb-2">
                    <span>${d.left}</span>
                    <span>${d.right}</span>
                  </div>
                  <div class="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full progress-bar" style="width: ${Math.min(95, Math.max(5, d.value))}%"></div>
                  </div>
                  <p class="text-xs font-medium text-slate-600 mt-1.5">${d.label}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="mb-10 reveal">
          <h2 class="text-2xl font-bold text-slate-900 mb-5">Điểm nổi bật</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${t.strengths.map((s, i) => `
              <div class="soft-shadow rounded-2xl p-5 bg-white border border-slate-100 reveal stagger-${i + 1}">
                <div class="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3">
                  <i data-lucide="star" class="w-5 h-5"></i>
                </div>
                <p class="font-semibold text-slate-800">${s}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-10">
          <div class="soft-shadow rounded-2xl p-6 bg-white reveal">
            <h3 class="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
              <i data-lucide="brain" class="w-5 h-5 text-primary-500"></i> Cách bạn thường suy nghĩ
            </h3>
            <p class="text-slate-600 leading-relaxed">${t.thinking}</p>
          </div>
          <div class="soft-shadow rounded-2xl p-6 bg-white reveal stagger-1">
            <h3 class="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
              <i data-lucide="users" class="w-5 h-5 text-primary-500"></i> Cách bạn tương tác
            </h3>
            <p class="text-slate-600 leading-relaxed">${t.interaction}</p>
          </div>
          <div class="soft-shadow rounded-2xl p-6 bg-white reveal stagger-2">
            <h3 class="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
              <i data-lucide="scale" class="w-5 h-5 text-primary-500"></i> Cách bạn ra quyết định
            </h3>
            <p class="text-slate-600 leading-relaxed">${t.decision}</p>
          </div>
          <div class="soft-shadow rounded-2xl p-6 bg-white reveal stagger-3">
            <h3 class="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
              <i data-lucide="book-open" class="w-5 h-5 text-primary-500"></i> Cách bạn học tập
            </h3>
            <p class="text-slate-600 leading-relaxed">${t.learning}</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-10">
          <div class="soft-shadow rounded-2xl p-6 bg-white reveal">
            <h3 class="font-bold text-lg text-emerald-700 mb-4 flex items-center gap-2">
              <i data-lucide="thumbs-up" class="w-5 h-5"></i> Điểm mạnh
            </h3>
            <ul class="space-y-2">
              ${t.strengths.map(s => `<li class="flex items-start gap-2 text-slate-700"><i data-lucide="check" class="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0"></i>${s}</li>`).join('')}
            </ul>
          </div>
          <div class="soft-shadow rounded-2xl p-6 bg-white reveal stagger-1">
            <h3 class="font-bold text-lg text-amber-700 mb-4 flex items-center gap-2">
              <i data-lucide="trending-up" class="w-5 h-5"></i> Điểm cần cải thiện
            </h3>
            <ul class="space-y-2">
              ${t.weaknesses.map(s => `<li class="flex items-start gap-2 text-slate-700"><i data-lucide="arrow-right" class="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"></i>${s}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="mb-10 reveal">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Nhóm nghề có thể phù hợp</h2>
          <p class="text-slate-600 mb-5 text-sm">Đây chỉ là gợi ý tham khảo dựa trên tính cách. Hãy kết hợp với sở thích và hoàn cảnh thực tế của bạn.</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${t.careers.map((c, i) => `
              <div class="soft-shadow rounded-xl p-4 bg-white border border-slate-100 flex items-center gap-3 reveal stagger-${(i % 3) + 1}">
                <div class="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                  <i data-lucide="briefcase" class="w-5 h-5"></i>
                </div>
                <span class="font-medium text-slate-800">${c}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <button onclick="showPage('quiz', 'mbti')" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary-500 text-primary-600 font-semibold hover:bg-primary-50 transition-all">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i>
            Làm lại bài test
          </button>
          <button onclick="showPage('types')" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg hover:shadow-primary-500/30 transition-all">
            Khám phá nhóm khác
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderTypes() {
  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'analyst', label: 'Nhóm phân tích' },
    { id: 'diplomat', label: 'Nhóm sáng tạo' },
    { id: 'sentinel', label: 'Nhóm tổ chức' },
    { id: 'explorer', label: 'Nhóm xã hội' }
  ];

  const filtered = currentFilter === 'all' 
    ? PERSONALITY_TYPES 
    : PERSONALITY_TYPES.filter(t => t.category === currentFilter);

  return `
    <section class="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 reveal">
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Khám phá các nhóm tính cách</h1>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">16 nhóm tính cách với đặc điểm, điểm mạnh và hướng nghề nghiệp riêng.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-10 reveal">
          ${filters.map(f => `
            <button 
              onclick="setFilter('${f.id}')"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all ${currentFilter === f.id ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-primary-50 border border-slate-200'}"
            >
              ${f.label}
            </button>
          `).join('')}
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" id="typesGrid">
          ${filtered.map((type, i) => `
            <button onclick="openTypeModal('${type.id}')" class="group text-left soft-shadow rounded-2xl bg-white overflow-hidden hover:-translate-y-1.5 hover:soft-shadow-lg transition-all duration-300 reveal stagger-${(i % 4) + 1}">
              <div class="h-24 flex items-center justify-center" style="background: linear-gradient(135deg, ${type.color}cc, ${type.color}99)">
                <span class="text-3xl font-extrabold text-white drop-shadow">${type.id}</span>
              </div>
              <div class="p-5">
                <h3 class="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">${type.name}</h3>
                <p class="text-xs text-slate-500 mt-1 mb-3">${type.slogan}</p>
                <p class="text-sm text-slate-600 line-clamp-2">${type.summary}</p>
                <span class="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary-600">
                  Xem chi tiết <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-0.5 transition-transform"></i>
                </span>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function setFilter(filter) {
  currentFilter = filter;
  showPage('types');
}

function renderCareer() {
  return `
    <section class="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Khám phá hướng đi phù hợp</h1>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Gợi ý ngành nghề dựa trên xu hướng tính cách. Đây chỉ là tham khảo, hãy kết hợp với sở thích và hoàn cảnh của bạn.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${CAREERS.map((c, i) => `
            <div class="soft-shadow rounded-2xl bg-white p-6 hover:-translate-y-1 transition-all duration-300 reveal stagger-${(i % 4) + 1}">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 text-white flex items-center justify-center mb-4">
                <i data-lucide="${c.icon}" class="w-6 h-6"></i>
              </div>
              <h3 class="font-bold text-lg text-slate-900 mb-1">${c.name}</h3>
              <p class="text-sm text-slate-600 mb-4">${c.desc}</p>
              <div class="flex items-center justify-between">
                <div class="flex-1 mr-3">
                  <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full" style="width: ${c.match}%"></div>
                  </div>
                </div>
                <span class="text-xs font-bold text-primary-600">${c.match}%</span>
              </div>
              <button class="mt-4 w-full py-2 rounded-lg text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors">
                Xem thêm
              </button>
            </div>
          `).join('')}
        </div>
        <div class="mt-12 text-center reveal">
          <p class="text-slate-600 mb-4">Chưa biết mình thuộc nhóm nào?</p>
          <button onclick="showPage('quiz', 'mbti')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg hover:shadow-primary-500/30 transition-all">
            Làm trắc nghiệm ngay
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </section>
  `;
}

function openTypeModal(typeId) {
  const t = PERSONALITY_TYPES.find(p => p.id === typeId);
  if (!t) return;

  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style="background: ${t.color}">${t.id}</div>
        <div>
          <h2 class="font-bold text-lg text-slate-900">${t.name}</h2>
          <p class="text-xs text-slate-500">${t.slogan}</p>
        </div>
      </div>
      <button onclick="closeModal()" class="p-2 rounded-lg hover:bg-slate-100 transition-colors">
        <i data-lucide="x" class="w-5 h-5 text-slate-500"></i>
      </button>
    </div>
    <div class="p-6 space-y-6">
      <p class="text-slate-700 leading-relaxed">${t.description}</p>
      
      <div>
        <h3 class="font-semibold text-slate-900 mb-3">Đặc điểm nổi bật</h3>
        <div class="flex flex-wrap gap-2">
          ${t.strengths.map(s => `<span class="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">${s}</span>`).join('')}
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-emerald-50">
          <h4 class="font-semibold text-emerald-800 mb-2 flex items-center gap-1.5"><i data-lucide="thumbs-up" class="w-4 h-4"></i> Điểm mạnh</h4>
          <ul class="space-y-1 text-sm text-emerald-900">
            ${t.strengths.map(s => `<li>• ${s}</li>`).join('')}
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-amber-50">
          <h4 class="font-semibold text-amber-800 mb-2 flex items-center gap-1.5"><i data-lucide="trending-up" class="w-4 h-4"></i> Cần cải thiện</h4>
          <ul class="space-y-1 text-sm text-amber-900">
            ${t.weaknesses.map(s => `<li>• ${s}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 mb-2">Phong cách học tập</h3>
        <p class="text-slate-600 text-sm">${t.learning}</p>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 mb-2">Môi trường phù hợp</h3>
        <p class="text-slate-600 text-sm">${t.interaction} ${t.thinking}</p>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 mb-3">Nhóm nghề tham khảo</h3>
        <div class="flex flex-wrap gap-2">
          ${t.careers.map(c => `<span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm">${c}</span>`).join('')}
        </div>
      </div>

      <div class="pt-2">
        <button onclick="closeModal(); showPage('quiz', 'mbti')" class="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:shadow-lg transition-all">
          Làm trắc nghiệm để xem bạn có phải ${t.id}?
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
