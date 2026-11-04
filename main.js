let currentLang = 'en';
let currentLecData = null;
let currentQuizMode = 'mcq'; // 'mcq' أو 'word'

const uiStrings = {
    ar: {
        revBtn: "مراجعة",
        quizBtn: "أسئلة",
        revTitle: "مراجعة السكشن",
        round: "الجولة",
        prev: "السابق",
        next: "التالي",
        finish: "إنهاء الجولة",
        winTitle: "أحسنت يا بطل! 🎉",
        winMsg: "تم إنهاء جميع أسئلة السكشن بنجاح! 🏆",
        home: "الرئيسية",
        noQuestions: "لا توجد أسئلة متاحة لهذا السكشن بعد.",
        hintTitle: "معلومة وفكرة السؤال 💡",
        mcqMode: "اختياري",
        wordMode: "تكوين كلمة 🧩",
        backspace: "⌫ مسح",
        reset: "↺ إعادة"
    },
    en: {
        revBtn: "Revision",
        quizBtn: "Quiz",
        revTitle: "Section Revision",
        round: "Round",
        prev: "Prev",
        next: "Next",
        finish: "Finish Round",
        winTitle: "Well Done! 🎉",
        winMsg: "All section questions completed successfully! 🏆",
        home: "Home",
        noQuestions: "No questions available for this section yet.",
        hintTitle: "Key Explanation 💡",
        mcqMode: "MCQ",
        wordMode: "Word Puzzle 🧩",
        backspace: "⌫ Backspace",
        reset: "↺ Reset"
    }
};

function renderHome() {
    const list = document.getElementById('lectures-list');
    if (!list) return;
    list.innerHTML = '';

    if (allLectures && allLectures.length > 0) {
        let grid = `<div class="lectures-grid">`;
        allLectures.forEach(lec => {
            grid += createCardHTML(lec);
        });
        grid += `</div>`;
        list.innerHTML = grid;
    }
}

function formatText(str) {
    if (!str) return '';
    return str
        .replace(/\*(.*?)\*/g, '<span style="color: #E91E63; font-weight: 900;">$1</span>')
        .replace(/\n/g, '<br>');
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const root = document.getElementById('html-root');
    if (root) {
        root.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        root.lang = currentLang;
    }
    const fab = document.getElementById('lang-fab');
    if (fab) fab.innerText = currentLang === 'ar' ? 'EN' : 'AR';

    const homeScreen = document.getElementById('home-screen');
    const revScreen = document.getElementById('revision-screen');
    const quizScreen = document.getElementById('quiz-screen');

    if (homeScreen && homeScreen.classList.contains('active')) {
        renderHome();
    } else if (revScreen && revScreen.classList.contains('active')) {
        renderRevision();
    } else if (quizScreen && quizScreen.classList.contains('active')) {
        updateQuizUI();
        prepareWordDataForCurrentQuestion();
        loadQuestion(true);
    }
}

function navigateToScreen(screenId, pushHistory = true) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');

    if (pushHistory) {
        history.pushState({ screen: screenId }, '', `#${screenId}`);
    }
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.screen) {
        if (event.state.screen === 'home-screen') {
            goHome(false);
        } else if (event.state.screen === 'revision-screen' && currentLecData) {
            openRevision(currentLecData.id, false);
        } else if (event.state.screen === 'quiz-screen' && currentLecData) {
            const hintBox = document.getElementById('hint-box');
            if (hintBox) hintBox.style.display = 'none';
            navigateToScreen('quiz-screen', false);
        }
    } else {
        goHome(false);
    }
});

function goHome(pushHistory = true) {
    currentRoundQuestions = [];
    navigateToScreen('home-screen', pushHistory);
    const winOverlay = document.getElementById('win-overlay');
    if (winOverlay) winOverlay.style.display = 'none';
    renderHome();
}

function closeWinOverlay() {
    const winOverlay = document.getElementById('win-overlay');
    if (winOverlay) winOverlay.style.display = 'none';
    goHome();
}

function createCardHTML(lec) {
    return `
        <div class="lec-card">
            <div class="lec-title">${lec.title[currentLang]}</div>
            <div class="lec-actions">
                <button type="button" class="btn-action btn-rev" onclick="openRevision('${lec.id}')">${uiStrings[currentLang].revBtn}</button>
                <button type="button" class="btn-action btn-quiz" onclick="initQuiz('${lec.id}')">${uiStrings[currentLang].quizBtn}</button>
            </div>
        </div>
    `;
}

function openRevision(lecId, pushHistory = true) {
    currentLecData = allLectures.find(l => l.id === lecId);
    if (!currentLecData) return;
    navigateToScreen('revision-screen', pushHistory);
    renderRevision();
}

function renderRevision() {
    if (!currentLecData) return;
    const revTitle = document.getElementById('rev-title');
    if (revTitle) revTitle.innerText = uiStrings[currentLang].revTitle;
    const board = document.getElementById('mindmap-board');
    if (!board) return;
    board.innerHTML = '';

    const darkColors = ['#E91E63', '#009688', '#FF9800', '#673AB7', '#2196F3'];
    const lightColors = ['#FCE4EC', '#E0F2F1', '#FFF3E0', '#EDE7F6', '#E3F2FD'];

    currentLecData.revision.forEach((node, index) => {
        const primaryColor = darkColors[index % darkColors.length];
        const bgColor = lightColors[index % lightColors.length];

        let branchesHTML = '';
        node.branches.forEach((b) => {
            if (b.type === 'info') {
                branchesHTML += `
                    <div class="kid-info-box" style="border-inline-start: 6px solid ${primaryColor}; background-color: ${bgColor};">
                        <div class="node-title" style="color: ${primaryColor};">${b.nodeTitle[currentLang]}</div>
                        <div class="node-content">${formatText(b.content[currentLang])}</div>
                    </div>`;
            } else if (b.type === 'flip' || b.type === 'reveal') {
                branchesHTML += `
                    <div class="kid-reveal-card" style="border-color: ${primaryColor};" onclick="this.classList.toggle('open')">
                        <div class="kid-reveal-header" style="background-color: ${bgColor}; color: ${primaryColor};">
                            <span>${b.nodeTitle[currentLang]}</span>
                            <span class="kid-reveal-icon" style="background: ${primaryColor}; color: white;">▾</span>
                        </div>
                        <div class="kid-reveal-body">
                            ${formatText(b.content[currentLang])}
                        </div>
                    </div>`;
            } else if (b.type === 'compare') {
                branchesHTML += `
                    <div class="kid-compare-table">
                        <div class="compare-col" style="background: #E3F2FD;">
                            <div class="compare-header" style="color: #1976D2;">${b.val1Title[currentLang]}</div>
                            <div class="compare-body">${formatText(b.val1[currentLang])}</div>
                        </div>
                        <div class="compare-col" style="background: #FCE4EC; border-inline-start: 2px solid #ccc;">
                            <div class="compare-header" style="color: #C2185B;">${b.val2Title[currentLang]}</div>
                            <div class="compare-body">${formatText(b.val2[currentLang])}</div>
                        </div>
                    </div>`;
            } else if (b.type === 'steps') {
                let stepsHTML = b.steps.map((step, idx) => `
                    <div class="compact-step">
                        <div class="compact-step-num" style="background: ${primaryColor};">${idx + 1}</div>
                        <div class="compact-step-text">${formatText(step[currentLang])}</div>
                    </div>
                `).join('');
                branchesHTML += `
                    <div class="kid-steps-container">
                        <div class="node-title" style="color:${primaryColor};">${b.nodeTitle[currentLang]}</div>
                        <div class="compact-steps-wrapper">${stepsHTML}</div>
                    </div>`;
            } else if (b.type === 'tree') {
                let leafsHTML = b.leafs.map(leaf => `
                    <div class="kid-chip" style="color: ${primaryColor}; border-color: ${primaryColor};">${formatText(leaf[currentLang])}</div>
                `).join('');
                branchesHTML += `
                    <div class="kid-tags-container" style="background-color: ${bgColor};">
                        <div class="node-title" style="color: ${primaryColor}; text-align: center;">${b.nodeTitle[currentLang]}</div>
                        <div class="tags-wrapper">${leafsHTML}</div>
                    </div>`;
            }
        });

        board.innerHTML += `
            <div class="kid-section-card" style="border: 3px solid ${primaryColor}; box-shadow: 0 6px 0 ${primaryColor};">
                <div class="kid-section-title" style="background: ${primaryColor};">${node.title[currentLang]}</div>
                <div class="kid-section-body">${branchesHTML}</div>
            </div>`;
    });
}

// ==========================================================================
// إدارة الكويز والتبديل بين MCQ و Word Puzzle
// ==========================================================================

let currentRoundQuestions = [];
let currentIndex = 0;
let currentRound = 1;

function setQuizMode(mode) {
    currentQuizMode = mode;
    const btnMcq = document.getElementById('btn-mode-mcq');
    const btnWord = document.getElementById('btn-mode-word');
    if (btnMcq) btnMcq.classList.toggle('active', mode === 'mcq');
    if (btnWord) btnWord.classList.toggle('active', mode === 'word');
    prepareWordDataForCurrentQuestion();
    loadQuestion();
}

function initQuiz(lecId, pushHistory = true) {
    currentLecData = allLectures.find(l => l.id === lecId);
    if (!currentLecData || !currentLecData.quiz || currentLecData.quiz.length === 0) {
        alert(uiStrings[currentLang].noQuestions);
        return;
    }
    currentRound = 1;
    prepareRound(currentLecData.quiz);

    navigateToScreen('quiz-screen', pushHistory);
    updateQuizUI();
    loadQuestion();
}

function updateQuizUI() {
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) prevBtn.innerText = uiStrings[currentLang].prev;

    const roundInfo = document.getElementById('round-info');
    if (roundInfo) roundInfo.innerText = `${uiStrings[currentLang].round} (${currentRound})`;

    const winMsg = document.getElementById('win-msg');
    if (winMsg) winMsg.innerText = uiStrings[currentLang].winMsg;

    const winTitle = document.querySelector('.win-title');
    if (winTitle) winTitle.innerText = uiStrings[currentLang].winTitle;

    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) homeBtn.innerText = uiStrings[currentLang].home;

    const btnMcq = document.getElementById('btn-mode-mcq');
    if (btnMcq) btnMcq.innerText = uiStrings[currentLang].mcqMode;

    const btnWord = document.getElementById('btn-mode-word');
    if (btnWord) btnWord.innerText = uiStrings[currentLang].wordMode;
}

function prepareRound(questionsArray) {
    currentRoundQuestions = questionsArray.map(q => {
        let clonedQ = JSON.parse(JSON.stringify(q));
        const numOptions = (clonedQ.opts && clonedQ.opts.en) ? clonedQ.opts.en.length : (clonedQ.opts && clonedQ.opts.ar ? clonedQ.opts.ar.length : 0);
        const baseIndices = Array.from({ length: numOptions }, (_, i) => i);

        clonedQ.shuffledIndices = shuffleArray(baseIndices);
        clonedQ.userAnswerIndex = null;
        return clonedQ;
    });
    currentIndex = 0;
}

function prepareWordDataForCurrentQuestion() {
    const qData = currentRoundQuestions[currentIndex];
    if (!qData || !qData.opts) return;

    const rawAnswer = (qData.opts[currentLang] && qData.opts[currentLang][qData.correct]) 
                   || (qData.opts['en'] && qData.opts['en'][qData.correct]) 
                   || '';
    qData.cleanWord = rawAnswer.trim().toUpperCase();

    let lettersOnly = qData.cleanWord.replace(/\s+/g, '').split('');
    let letterObjects = lettersOnly.map((char, index) => ({
        id: index,
        char: char,
        used: false
    }));

    qData.bankLetters = shuffleArray(letterObjects);
    qData.enteredLetters = [];
}

function loadQuestion(preserveState = false) {
    if (!currentRoundQuestions || currentRoundQuestions.length === 0) return;
    const qData = currentRoundQuestions[currentIndex];
    const total = currentRoundQuestions.length;

    if (!qData.cleanWord) {
        prepareWordDataForCurrentQuestion();
    }

    const counter = document.getElementById('counter');
    if (counter) counter.innerText = `${currentIndex + 1} / ${total}`;
    
    const bar = document.getElementById('bar');
    if (bar) {
        setTimeout(() => {
            bar.style.width = `${((currentIndex + 1) / total) * 100}%`;
        }, 50);
    }

    // 1. نص السؤال
    const qTxt = document.getElementById('q-txt');
    if (qTxt) qTxt.innerHTML = formatText(qData.q[currentLang]);

    // 2. معالجة الصورة بأمان تام
    const imgWrap = document.getElementById('q-img-wrap');
    const qImg = document.getElementById('q-img');
    if (imgWrap && qImg) {
        if (qData.image && qData.image.trim() !== "") {
            qImg.src = qData.image;
            imgWrap.style.display = 'flex';
        } else {
            imgWrap.style.display = 'none';
            qImg.src = "";
        }
    }

    // 3. عرض منطقة الإجابة
    const box = document.getElementById('opt-box');
    if (box) {
        box.innerHTML = '';
        if (currentQuizMode === 'mcq') {
            renderMCQMode(qData, box);
        } else {
            renderWordMode(qData, box);
        }
    }

    // 4. صندوق التوضيح
    const hintBox = document.getElementById('hint-box');
    const hintData = qData.hint || qData.explanation;

    if (hintBox) {
        if (qData.userAnswerIndex !== null && hintData) {
            const hintContent = typeof hintData === 'object' ? hintData[currentLang] : hintData;
            hintBox.innerHTML = `
                <div class="quiz-hint-header">
                    <span>💡</span>
                    <span>${uiStrings[currentLang].hintTitle}</span>
                </div>
                <div class="quiz-hint-content">${formatText(hintContent)}</div>
            `;
            hintBox.style.display = 'block';
        } else {
            hintBox.style.display = 'none';
            hintBox.innerHTML = '';
        }
    }

    // 5. حالة الأزرار
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) prevBtn.disabled = (currentIndex === 0);

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.disabled = (qData.userAnswerIndex === null);
        nextBtn.innerText = (currentIndex === total - 1 && qData.userAnswerIndex !== null)
            ? uiStrings[currentLang].finish
            : uiStrings[currentLang].next;
    }
}

function renderMCQMode(qData, container) {
    if (!qData.shuffledIndices) return;
    qData.shuffledIndices.forEach(originalIdx => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.innerHTML = formatText(qData.opts[currentLang][originalIdx]);

        if (qData.userAnswerIndex === null) {
            btn.onclick = () => selectOption(btn, originalIdx, qData);
        } else {
            btn.disabled = true;
            if (originalIdx === qData.correct) {
                btn.classList.add('correct');
            } else if (originalIdx === qData.userAnswerIndex) {
                btn.classList.add('wrong');
            }
        }
        container.appendChild(btn);
    });
}

function selectOption(selectedBtn, originalIdx, qData) {
    qData.userAnswerIndex = originalIdx;
    loadQuestion();
}

// --- دالة عرض الكلمات بحيث كل كلمة تكون في سطر منفصل وبنك الحروف في المنتصف ---
function renderWordMode(qData, container) {
    const isSolved = (qData.userAnswerIndex === qData.correct);

    // تقسيم الإجابة إلى كلمات منفصلة
    const words = qData.cleanWord.trim().split(/\s+/);

    let html = `
        <div class="word-game-wrap">
            <div id="word-slots" class="word-slots-container ${isSolved ? 'correct' : ''}">
    `;

    let globalCharIdx = 0;

    words.forEach(word => {
        html += `<div class="word-row">`;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (isSolved) {
                html += `<div class="word-slot filled">${char}</div>`;
            } else {
                const entered = qData.enteredLetters[globalCharIdx];
                const thisIdx = globalCharIdx;
                if (entered) {
                    html += `<div class="word-slot filled" onclick="returnLetter(${thisIdx})">${entered.char}</div>`;
                } else {
                    html += `<div class="word-slot"></div>`;
                }
                globalCharIdx++;
            }
        }
        html += `</div>`; // إغلاق سطر الكلمة
    });

    html += `</div>`; // إغلاق حاوية الخانات

    if (!isSolved) {
        html += `
            <div class="word-bank-wrap">
                <div class="word-letters-bank">
        `;
        if (qData.bankLetters) {
            qData.bankLetters.forEach(item => {
                html += `
                    <button type="button" class="letter-btn" 
                        ${item.used ? 'disabled' : ''} 
                        onclick="pickLetter(${item.id})">
                        ${item.char}
                    </button>
                `;
            });
        }
        html += `
                </div>
                <div class="word-actions">
                    <button type="button" class="btn-word-ctrl" onclick="backspaceLetter()">${uiStrings[currentLang].backspace}</button>
                    <button type="button" class="btn-word-ctrl" onclick="resetWord()">${uiStrings[currentLang].reset}</button>
                </div>
            </div>
        `;
    }

    html += `</div>`;
    container.innerHTML = html;
}


function pickLetter(letterId) {
    const qData = currentRoundQuestions[currentIndex];
    if (qData.userAnswerIndex !== null) return;

    const item = qData.bankLetters.find(l => l.id === letterId);
    if (!item || item.used) return;

    const targetLength = qData.cleanWord.replace(/\s+/g, '').length;
    if (qData.enteredLetters.length >= targetLength) return;

    item.used = true;
    qData.enteredLetters.push(item);

    if (qData.enteredLetters.length === targetLength) {
        checkWordResult(qData);
    } else {
        loadQuestion();
    }
}

function returnLetter(enteredIdx) {
    const qData = currentRoundQuestions[currentIndex];
    if (qData.userAnswerIndex !== null) return;

    const removed = qData.enteredLetters.splice(enteredIdx, 1)[0];
    if (removed) {
        removed.used = false;
        loadQuestion();
    }
}

function backspaceLetter() {
    const qData = currentRoundQuestions[currentIndex];
    if (qData.userAnswerIndex !== null || qData.enteredLetters.length === 0) return;

    const removed = qData.enteredLetters.pop();
    removed.used = false;
    loadQuestion();
}

function resetWord() {
    const qData = currentRoundQuestions[currentIndex];
    if (qData.userAnswerIndex !== null) return;

    qData.enteredLetters = [];
    if (qData.bankLetters) {
        qData.bankLetters.forEach(l => l.used = false);
    }
    loadQuestion();
}

function checkWordResult(qData) {
    const userBuiltWord = qData.enteredLetters.map(l => l.char).join('');
    const targetWithoutSpaces = qData.cleanWord.replace(/\s+/g, '');

    if (userBuiltWord.toUpperCase() === targetWithoutSpaces) {
        qData.userAnswerIndex = qData.correct;
        loadQuestion();
    } else {
        const slots = document.getElementById('word-slots');
        if (slots) slots.classList.add('wrong');

        setTimeout(() => {
            resetWord();
        }, 800);
    }
}

function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        prepareWordDataForCurrentQuestion();
        loadQuestion();
    }
}

function goNext() {
    if (currentIndex < currentRoundQuestions.length - 1) {
        currentIndex++;
        prepareWordDataForCurrentQuestion();
        loadQuestion();
    } else {
        evaluateRoundEnd();
    }
}

function evaluateRoundEnd() {
    let failedQuestions = currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);

    if (failedQuestions.length > 0) {
        currentRound++;
        prepareRound(JSON.parse(JSON.stringify(failedQuestions)));
        const roundInfo = document.getElementById('round-info');
        if (roundInfo) roundInfo.innerText = `${uiStrings[currentLang].round} (${currentRound})`;
        loadQuestion();
    } else {
        updateQuizUI();
        const winOverlay = document.getElementById('win-overlay');
        if (winOverlay) winOverlay.style.display = 'flex';
        if (typeof confetti === 'function') {
            confetti({ particleCount: 250, spread: 90, origin: { y: 0.6 } });
        }
    }
}

function openImageViewer(src) {
    if (!src) return;
    const modal = document.getElementById('img-modal');
    const target = document.getElementById('img-modal-target');
    if (target) target.src = src;
    if (modal) modal.style.setProperty('display', 'flex', 'important');
}

function closeImageViewer() {
    const modal = document.getElementById('img-modal');
    const target = document.getElementById('img-modal-target');
    if (modal) modal.style.setProperty('display', 'none', 'important');
    if (target) target.src = '';
}

window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ screen: 'home-screen' }, '', '');
    renderHome();
});