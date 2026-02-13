
// Renders the HTML for the shareable quote card
const QuoteTemplate = (quote) => `
    <div class="my-8 relative group">

        <div class="p-10 md:p-14 bg-white dark:bg-gray-800 rounded-2xl relative overflow-hidden text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/30">
            <!-- Background Elements -->
            <div class="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent dark:from-brand-gold/10"></div>
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>

            <!-- Quote Mark -->
            <div class="mb-6 text-brand-gold/20 dark:text-brand-gold/10 text-6xl font-serif font-bold leading-none select-none">“</div>
            
            <!-- The Quote -->
            <p id="quoteText" class="text-xl md:text-3xl font-display text-brand-dark dark:text-gray-100 relative z-10 leading-relaxed mb-8 drop-shadow-sm italic">
                "${quote}"
            </p>
            
            <!-- Actions -->
            <div class="relative z-10 flex justify-center gap-4 opacity-100 transition-opacity duration-300">
                <button onclick="copyQuote()" class="flex items-center gap-2 px-6 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full text-brand-dark dark:text-gray-200 text-sm font-medium transition-colors shadow-sm border border-gray-200 dark:border-gray-600 group/btn">
                    <svg class="w-4 h-4 text-gray-400 group-hover/btn:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                    Copy
                </button>
                <button onclick="shareQuote()" class="flex items-center gap-2 px-6 py-2 bg-brand-gold text-white hover:bg-yellow-600 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    Share
                </button>
            </div>
        </div>
    </div>
`;

// Renders the Sidebar Link Item
const SidebarLinkTemplate = (dayNumber, title, isCurrent, isLocked, isCompleted) => {
    if (isLocked) {
        return `
            <div class="flex items-center gap-3">
                <span class="font-display font-bold text-sm w-6 opacity-50">${dayNumber}</span>
                <span class="text-sm font-medium truncate">Locked</span>
            </div>
            <svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        `;
    }
    return `
        <div class="flex items-start gap-3 w-full">
            <span class="font-display font-bold text-sm w-6 mt-0.5 flex-shrink-0 ${isCurrent ? 'text-white' : 'text-brand-gold'}">${dayNumber}</span>
            <span class="text-sm font-medium leading-tight">${title}</span>
        </div>
        ${isCompleted ? '<svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' : ''}
    `;
};

// Placeholder for Empty Days
// Placeholder for Empty Days
const EmptyDayTemplate = (day) => `
    <h2 class="text-3xl font-display mb-6 text-brand-dark dark:text-white transition-colors">Day ${day}: The Journey Continues</h2>
    <p>This chapter is part of the upcoming journey. Complete the previous days to unlock the full story.</p>
    <div class="py-12 flex justify-center opacity-20">
        <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
    </div>
`;

// Quiz Option Item
const QuizOptionTemplate = (optionText) => `
    <div class="h-4 w-4 border-2 border-gray-300 rounded-full flex items-center justify-center mr-3 indicator transition-colors">
        <div class="h-2 w-2 bg-brand-gold rounded-full hidden"></div>
    </div>
    <span class="text-sm text-gray-700 dark:text-gray-300 transition-colors">${optionText}</span>
`;

// Helper to convert newlines to paragraphs
const formatText = (text) => {
    if (!text) return '';
    // Split by double newlines (paragraphs), handling potential whitespace
    return text.split(/\n\s*\n/).map(p => {
        const content = p.trim();
        return content ? `<p class="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">${content}</p>` : '';
    }).join('');
};

// Helper to render one or multiple revelations
const renderRevelations = (revData) => {
    if (!revData) return '';
    const items = Array.isArray(revData) ? revData : [revData];

    return items.map((rev, index) => `
        <div class="space-y-6 relative z-10 ${index < items.length - 1 ? 'mb-12 border-b border-gray-100 dark:border-gray-700 pb-8' : ''}">
            <span class="block text-xl font-bold text-brand-dark dark:text-white">${rev.title || ''}</span>
            <div class="relative pl-6 border-l-4 border-brand-gold/30">
                <p class="font-serif italic text-2xl text-brand-dark dark:text-gray-100 leading-relaxed">
                    ${rev.verse || ''}
                </p>
            </div>
            <div class="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl text-lg">
                ${formatText(rev.context)}
            </div>
        </div>
    `).join('');
};

// Renders the full chapter content
// Renders the full chapter content
const ChapterContentTemplate = (day, data) => `
    <h2 class="text-3xl md:text-5xl font-display mb-8 text-brand-dark dark:text-white transition-colors leading-tight">${data.title}</h2>
    
    <!-- The Story -->
    <div class="mb-14">
        <h3 class="text-2xl font-display text-brand-gold mb-6 flex items-center gap-3">
            <span class="w-8 h-1 bg-brand-gold rounded-full"></span>
            The Story
        </h3>
        <div class="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed">
            ${formatText(data.story)}
        </div>
    </div>

    <!-- The Revelation (3D Card) -->
    <div class="mb-14 relative group perspective-1000">
        <div class="absolute -inset-1 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border-t-4 border-brand-gold transform transition-transform duration-500 hover:-translate-y-1">
            <div class="absolute top-0 right-0 p-4 opacity-10">
                <svg class="w-32 h-32 text-brand-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
            </div>
            
            <h3 class="text-xl font-display text-brand-gold mb-6 flex items-center gap-2 uppercase tracking-wide">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                The Revelation
            </h3>

            ${renderRevelations(data.revelation)}
        </div>
    </div>

    <!-- Real Talk (Modern Action Card) -->
    <div class="mb-14">
        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-indigo-100 dark:border-gray-700 relative overflow-hidden">
             <!-- Deep Shadow Blob -->
             <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
             
             <h3 class="text-2xl font-display text-indigo-600 dark:text-indigo-400 mb-8 flex items-center gap-3 relative z-10">
                <span class="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </span>
                Real Talk: Why this matters
            </h3>
            
             <div class="relative z-10 text-gray-800 dark:text-gray-200 text-lg leading-relaxed space-y-4">
                ${formatText(data.realTalk)}
             </div>
        </div>
    </div>

    <!--Reflect(Journal Prompt Style) -->
    <div class="mb-14">
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 relative">
            <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                <span class="text-sm font-bold text-gray-500 uppercase tracking-wider">Reflection</span>
            </div>

            <div class="text-center mt-4">
                <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    ${data.reflection}
                </p>
            </div>
        </div>
    </div>
`;


// Button Contents
const ButtonContentTemplate = {
    takeQuiz: `<span>Take Quiz to Finish</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>`,
    markComplete: (day) => `<span>Mark Day <span id="currentDayNum">${day}</span> Complete</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
    completed: `<span>Completed!</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    journeyDone: `<span>Journey Completed</span>`
};
