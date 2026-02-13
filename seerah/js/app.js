document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration ---
    const TOTAL_DAYS = 29;
    const STORE_KEY_PROGRESS = 'seerah_progress_unlocked';
    const STORE_KEY_NOTES = 'seerah_notes_';

    // --- State ---
    let currentDay = 1;
    let unlockedDay = parseInt(localStorage.getItem(STORE_KEY_PROGRESS)) || 1;
    let selectedQuizOption = null;

    // --- DOM Elements ---
    const chapterListEl = document.getElementById('chapterList');
    const contentAreaEl = document.getElementById('contentArea');
    const chapterContentEl = document.getElementById('chapterContent');
    const chapterNavEl = document.getElementById('chapterNav');
    const progressBarEl = document.getElementById('progressBar');
    const progressTextEl = document.getElementById('progressText');
    const currentDayNumEl = document.getElementById('currentDayNum');

    // Notes Elements
    const notesPanelEl = document.getElementById('notesPanel');
    const toggleNotesBtn = document.getElementById('toggleNotes');
    const closeNotesBtn = document.getElementById('closeNotes');
    const chapterNotesEl = document.getElementById('chapterNotes');
    const noteDayNumEl = document.getElementById('noteDayNum');
    const saveStatusEl = document.getElementById('saveStatus');

    // Navigation Buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const completeBtn = document.getElementById('completeBtn');

    // Mobile Sidebar
    const sidebarEl = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    // Quiz Elements
    const quizModal = document.getElementById('quizModal');
    const quizOverlay = document.getElementById('quizOverlay');
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    const submitAnswerBtn = document.getElementById('submitAnswerBtn');
    const quizQuestionEl = document.getElementById('quizQuestion');
    const quizOptionsEl = document.getElementById('quizOptions');
    const quizFeedbackEl = document.getElementById('quizFeedback');


    // --- Content Data ---
    // --- Content Data ---
    // Content is now loaded from seerah-data.js


    // --- Functions ---

    // --- Functions ---

    function init() {
        // Check for ?day=X in URL
        const urlParams = new URLSearchParams(window.location.search);
        const dayParam = parseInt(urlParams.get('day'));

        if (dayParam && dayParam >= 1 && dayParam <= TOTAL_DAYS) {
            // If day is locked, redirect to latest unlocked (security)
            if (dayParam > unlockedDay) {
                currentDay = unlockedDay;
                // Update URL to reflect redirect
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('day', currentDay);
                window.history.replaceState({}, '', newUrl);
            } else {
                currentDay = dayParam;
            }
        }

        renderSidebar();
        loadChapter(currentDay);
        updateProgress();
        setupEventListeners();

        // Scroll to active day
        setTimeout(() => {
            const activeLink = document.querySelector(`.chapter-card[data-day="${currentDay}"]`);
            if (activeLink) activeLink.scrollIntoView({ block: 'center' });
        }, 100);
    }

    function renderSidebar() {
        chapterListEl.innerHTML = '';
        for (let i = 1; i <= TOTAL_DAYS; i++) {
            const isLocked = i > unlockedDay;
            const isCurrent = i === currentDay;
            const isCompleted = i < unlockedDay;

            const title = chapters[i] ? chapters[i].title : `Day ${i}: The Journey Continues`;

            const btn = document.createElement('button');
            btn.className = `w-full text-left p-4 rounded-lg flex items-center justify-between mb-2 transition-colors chapter-card 
                ${isCurrent ? 'bg-brand-gold text-white shadow-md' : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'} 
                ${isLocked ? 'locked text-gray-400 dark:text-gray-500 cursor-not-allowed' : 'text-gray-700 dark:text-gray-200 cursor-pointer'}`;

            btn.dataset.day = i;

            if (isLocked) {
                btn.disabled = true;
            } else {
                btn.onclick = () => loadChapter(i);
            }

            // Use Template
            btn.innerHTML = SidebarLinkTemplate(i, title, isCurrent, isLocked, isCompleted);
            chapterListEl.appendChild(btn);
        }
    }

    window.loadChapter = function (day) {
        if (day > unlockedDay) return;

        currentDay = day;

        // Update URL without reloading page
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('day', currentDay);
        window.history.pushState({ day: currentDay }, '', newUrl);

        if (currentDayNumEl) currentDayNumEl.textContent = day;
        if (noteDayNumEl) noteDayNumEl.textContent = day;

        // Update UI Logic
        renderSidebar(); // To highlight current

        // Show Content
        contentAreaEl.scrollTop = 0;

        const dayData = chapters[day];

        // Smooth fade
        chapterContentEl.style.opacity = '0';
        setTimeout(() => {
            if (dayData) {
                // Use new Structured Template
                chapterContentEl.innerHTML = ChapterContentTemplate(day, dayData);

                // Append Shareable Quote
                if (dayData.quote) {
                    chapterContentEl.innerHTML += QuoteTemplate(dayData.quote);
                }
            } else {
                // Fallback for empty days
                chapterContentEl.innerHTML = EmptyDayTemplate(day);
            }

            chapterNavEl.classList.remove('hidden');

            // Manage Buttons
            prevBtn.disabled = currentDay <= 1;
            prevBtn.onclick = () => loadChapter(currentDay - 1);

            // "Mark Complete" Logic
            updateNavButtons();

            chapterContentEl.style.opacity = '1';
        }, 200);

        // Load Notes
        loadNotes(day);

        // Mobile: Close sidebar if open
        if (window.innerWidth < 768) {
            sidebarEl.classList.remove('translate-x-0');
            sidebarEl.classList.add('-translate-x-full');
        }
    };


    function updateNavButtons() {
        if (currentDay < unlockedDay) {
            // Already completed this day
            completeBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            nextBtn.disabled = false;
            nextBtn.onclick = () => loadChapter(currentDay + 1);
        } else {
            // New ground behavior
            completeBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');

            const hasQuiz = chapters[currentDay] && chapters[currentDay].quiz;

            if (hasQuiz) {
                // Show "Take Quiz"
                completeBtn.innerHTML = ButtonContentTemplate.takeQuiz;
                completeBtn.onclick = () => window.openQuiz();
            } else {
                // Fallback for days without quiz
                completeBtn.innerHTML = ButtonContentTemplate.markComplete(currentDay);
                completeBtn.onclick = () => markDayComplete();
            }
            completeBtn.disabled = false;
        }
    }

    // --- Quiz Logic ---

    window.openQuiz = function () {
        const quizData = chapters[currentDay].quiz;
        if (!quizData) return;

        selectedQuizOption = null;
        quizQuestionEl.textContent = quizData.question;
        quizOptionsEl.innerHTML = '';
        quizFeedbackEl.classList.add('hidden');
        quizFeedbackEl.textContent = '';
        submitAnswerBtn.disabled = true;
        submitAnswerBtn.classList.add('opacity-50', 'cursor-not-allowed');

        quizData.options.forEach((opt, index) => {
            const div = document.createElement('div');
            div.className = 'quiz-option flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors mb-2';
            // Use function closure to keep index correct
            div.onclick = function () { selectOption(index, this); };

            // Use Template
            div.innerHTML = QuizOptionTemplate(opt);

            quizOptionsEl.appendChild(div);
        });

        quizModal.classList.remove('hidden');
    }

    function selectOption(index, element) {
        selectedQuizOption = index;

        // Reset styles
        const allOptions = quizOptionsEl.querySelectorAll('.quiz-option');
        allOptions.forEach(el => {
            el.classList.remove('bg-brand-paper', 'border-brand-gold');
            const indicator = el.querySelector('.indicator');
            if (indicator) indicator.classList.remove('border-brand-gold');
            const dot = el.querySelector('.indicator div');
            if (dot) dot.classList.add('hidden');
        });

        // Apply selected style
        element.classList.add('bg-brand-paper', 'border-brand-gold');
        const indicator = element.querySelector('.indicator');
        if (indicator) indicator.classList.add('border-brand-gold');
        const dot = element.querySelector('.indicator div');
        if (dot) dot.classList.remove('hidden');

        // Enable submit
        submitAnswerBtn.disabled = false;
        submitAnswerBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    submitAnswerBtn.onclick = () => {
        const correctIndex = chapters[currentDay].quiz.correct;
        const allOptions = quizOptionsEl.querySelectorAll('.quiz-option');

        quizFeedbackEl.classList.remove('hidden');

        if (selectedQuizOption === correctIndex) {
            quizFeedbackEl.textContent = "Correct! MashaAllah.";
            quizFeedbackEl.className = "mt-3 text-sm font-bold text-green-600 animate-pulse";

            // Highlight correct one green
            if (allOptions[selectedQuizOption]) {
                allOptions[selectedQuizOption].classList.add('bg-green-50', 'border-green-500');
            }

            setTimeout(() => {
                closeQuiz();
                markDayComplete();
            }, 1000);
        } else {
            quizFeedbackEl.textContent = "Incorrect. Try again.";
            quizFeedbackEl.className = "mt-3 text-sm font-bold text-red-600";
            // Highlight wrong one red
            if (allOptions[selectedQuizOption]) {
                allOptions[selectedQuizOption].classList.add('bg-red-50', 'border-red-500');
            }
        }
    };

    function closeQuiz() {
        quizModal.classList.add('hidden');
    }

    closeQuizBtn.onclick = closeQuiz;
    quizOverlay.onclick = closeQuiz;

    // --- Share Logic ---
    window.copyQuote = function () {
        const quote = `"${chapters[currentDay].quote}" - The Prophet's Journey`;
        navigator.clipboard.writeText(quote).then(() => {
            alert("Quote copied to clipboard!");
        });
    }

    window.shareQuote = function () {
        const quote = `"${chapters[currentDay].quote}" - The Prophet's Journey\n\nRead more: ${window.location.href}`;
        if (navigator.share) {
            navigator.share({
                title: 'The Prophet\'s Journey',
                text: quote,
                url: window.location.href
            }).catch(console.error);
        } else {
            copyQuote();
        }
    }


    // --- Completion Logic ---

    function markDayComplete() {
        if (currentDay === unlockedDay && unlockedDay < TOTAL_DAYS) {
            unlockedDay++;
            localStorage.setItem(STORE_KEY_PROGRESS, unlockedDay);
            // Don't just update UI, NAVIGATE
            updateProgress();

            // Show celebration
            completeBtn.innerHTML = ButtonContentTemplate.completed;

            setTimeout(() => {
                loadChapter(currentDay + 1);
            }, 800);
        } else if (unlockedDay === TOTAL_DAYS && currentDay === TOTAL_DAYS) {
            alert("Alhamdulillah! You have completed the 29-day journey.");
            completeBtn.innerHTML = ButtonContentTemplate.journeyDone;
            completeBtn.disabled = true;
        } else {
            // Already unlocked, just go
            loadChapter(currentDay + 1);
        }
    }

    function updateProgress() {
        let completed = unlockedDay - 1;
        let percent = Math.round((completed / TOTAL_DAYS) * 100);
        progressBarEl.style.width = `${percent}%`;
        progressTextEl.innerText = `${percent}%`;
    }

    // --- Notes Functionality ---

    function loadNotes(day) {
        const note = localStorage.getItem(STORE_KEY_NOTES + day) || '';
        chapterNotesEl.value = note;
    }

    chapterNotesEl.addEventListener('input', (e) => {
        localStorage.setItem(STORE_KEY_NOTES + currentDay, e.target.value);

        // Show auto-save indicator
        saveStatusEl.style.opacity = '1';
        if (window.saveTimeout) clearTimeout(window.saveTimeout);
        window.saveTimeout = setTimeout(() => {
            saveStatusEl.style.opacity = '0';
        }, 1500);
    });

    // --- Event Listeners ---

    function setupEventListeners() {
        // Notes Toggle
        toggleNotesBtn.addEventListener('click', () => {
            // Toggle translate
            const isClosed = notesPanelEl.classList.contains('translate-x-full');
            if (isClosed) {
                notesPanelEl.classList.remove('translate-x-full');
                notesPanelEl.classList.add('translate-x-0');
                toggleNotesBtn.classList.add('opacity-0'); // Hide button when open
            }
        });

        // Close Notes (Panel X button)
        if (closeNotesBtn) {
            closeNotesBtn.addEventListener('click', () => {
                notesPanelEl.classList.add('translate-x-full');
                notesPanelEl.classList.remove('translate-x-0');
                setTimeout(() => toggleNotesBtn.classList.remove('opacity-0'), 300);
            });
        }


        // Mobile Sidebar
        openSidebarBtn.addEventListener('click', () => {
            sidebarEl.classList.remove('-translate-x-full');
            sidebarEl.classList.add('translate-x-0');
        });

        closeSidebarBtn.addEventListener('click', () => {
            sidebarEl.classList.add('-translate-x-full');
            sidebarEl.classList.remove('translate-x-0');
        });
    }

    // Start
    init();
});
