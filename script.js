// Stanford Purity Test Questions & Functionality

// Array of test questions
const purityQuestions = [
    "Have you ever walked around the entire Lake Lag at least once?",
    "Have you skipped a class because you were 'too tired'?",
    "Have you ever fountain hopped after midnight?",
    "Have you ever rolled down the Oval grass hill?",
    "Have you attended a frat party and regretted it the next day?",
    "Have you pulled an all-nighter at Green Library?",
    "Have you ever been to a party at the windsurfing house?",
    "Have you gone to class still drunk or high from the night before?",
    "Have you ever gotten lost in the Main Quad?",
    "Have you ever taken the 'Walk of Shame' across campus?",
    "Have you shared a scandalous rumor about a Stanford athlete?",
    "Have you tried to crash a class you weren't enrolled in?",
    "Have you ever hooked up with someone from your dorm?",
    "Have you ever streaked through White Plaza?",
    "Have you climbed to the top of Hoover Tower illegally?",
    "Have you had a 'Stanford Marriage' (intense short-term relationship)?",
    "Have you ever stolen food from the dining hall?",
    "Have you gotten frisky at the top of the McMurtry building?",
    "Have you attended a Stanford sports event just for the free stuff?",
    "Have you ever been kicked out of a Stanford library?",
    "Have you had a romantic encounter in a study room?",
    "Have you broken into the Stanford pool for a midnight swim?",
    "Have you had a 'situationship' with someone in your class?",
    "Have you performed at Gaieties or attended while intoxicated?",
    "Have you taken a final exam hungover?",
    "Have you kissed someone at Full Moon on the Quad?",
    "Have you participated in the Primal Scream during finals week?",
    "Have you ever thrown up in a campus bathroom from drinking too much?",
    "Have you spent over $50 on Stanford merch in one shopping trip?",
    "Have you ever snuck into Faculty Club?",
    "Have you had more than 3 different majors during your time at Stanford?",
    "Have you fallen asleep during a lecture and been called out by the professor?",
    "Have you ever ridden a bike drunk across campus?",
    "Have you missed a final exam because you overslept?",
    "Have you gone on a Stanford Tinder date that was a complete disaster?",
    "Have you pretended to be a tour guide to impress visitors?",
    "Have you had a class with a famous Stanford professor just to brag about it?",
    "Have you broken something at a dorm party and not owned up to it?",
    "Have you ever snuck into an upperclassman's dorm as a freshman?",
    "Have you submitted an assignment with less than 1 hour before the deadline?",
    "Have you ever been caught doing something inappropriate by an RA?",
    "Have you ever had a crush on a TA or professor?",
    "Have you lied about your major to impress someone at a party?",
    "Have you participated in a student protest on campus?",
    "Have you ever cheated on an exam or assignment?",
    "Have you crashed an invite-only campus event?",
    "Have you eaten at every dining hall on campus in one day?",
    "Have you made out with someone at a campus party within an hour of meeting them?",
    "Have you ever been on Stanford Crushes or Missed Connections?",
    "Have you drunk wine from a bottle while studying in Main Quad?",
    "Have you had a secret party in a restricted campus area?",
    "Have you ever skinny-dipped in Lake Lag?",
    "Have you attended class in pajamas?",
    "Have you sent a risky text to the wrong person during a lecture?",
    "Have you hooked up with someone from your rival dorm?",
    "Have you ever participated in the Stanford Band's antics?",
    "Have you pretended to understand CS jargon to fit in?",
    "Have you had a raging house party that got shut down?",
    "Have you participated in the 'Exotic Erotic' party?",
    "Have you stolen a roommate's food and denied it?",
    "Have you been to the top of the Dish at sunrise after staying up all night?",
    "Have you tried to sneak into a graduate student-only event?",
    "Have you built a relationship with a campus squirrel?",
    "Have you joined a club just for the free food?",
    "Have you ever gotten in trouble with Stanford Police?",
    "Have you taken a 'W' (withdrawal) to avoid failing a class?",
    "Have you drunk wine from a Stanford water bottle during class?",
    "Have you regretted a drunken text to your Stanford crush?",
    "Have you been cited for a bike violation on campus?",
    "Have you ditched a date because you had to study (when you really didn't)?",
    "Have you been caught sleeping in a public campus space?",
    "Have you ever cried in a professor's office hours?",
    "Have you had a questionable encounter during Big Game week?",
    "Have you joined a secret society or an exclusive Stanford group?",
    "Have you lied about how busy you are to sound more important?",
    "Have you accidentally sent a professor an incomplete or inappropriate email?",
    "Have you joined the 'Stanford Marriage Pact' just to see your matches?",
    "Have you pretended to be pre-med just to impress someone?",
    "Have you bribed someone with food to do your laundry?",
    "Have you had a romantic moment at the Cantor Arts Center?",
    "Have you lied about your Stanford GPA to friends or family?",
    "Have you taken a class just because the professor was attractive?",
    "Have you made up an excuse to get out of a club meeting?",
    "Have you been part of a viral Stanford meme or video?",
    "Have you made out with your friend's crush at a party?",
    "Have you spent over $100 at the Stanford Coffee House in a week?",
    "Have you done the 'Stanford Duck Syndrome' (appearing calm while panicking)?",
    "Have you gone multiple days wearing only Stanford-branded clothing?",
    "Have you pretended to be studious in Green Library when you were just people-watching?",
    "Have you ever had a 'dorm-cest' relationship?",
    "Have you become 'best friends' with someone after a single night out?",
    "Have you submitted a paper you wrote entirely the night before?",
    "Have you had a questionable rendezvous in a Stanford academic building?",
    "Have you broken into Meyer Library before it was demolished?",
    "Have you ended up at LPCH (hospital) after a wild night out?",
    "Have you lied to your parents about what you did during a weekend at Stanford?",
    "Have you made a Stanford Confessions post about yourself?",
    "Have you missed flights or rides home because you were partying?",
    "Have you ever created a fake Stanford student ID?",
    "Have you used your Stanford connection to get out of trouble?",
    "Have you had more than 5 different romantic/hookup partners in one quarter?"
];

// DOM elements
const questionsContainer = document.querySelector('.questions-container');
const calculateBtn = document.getElementById('calculate-btn');
const resultsSection = document.getElementById('results-section');
const scoreValue = document.getElementById('score-value');
const scoreInterpretation = document.getElementById('score-interpretation');
const shareBtn = document.getElementById('share-btn');
const retakeBtn = document.getElementById('retake-btn');

// Populate questions
function populateQuestions() {
    purityQuestions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        
        const questionId = `question-${index + 1}`;
        
        questionItem.innerHTML = `
            <label for="${questionId}">
                <input type="checkbox" id="${questionId}" name="${questionId}">
                <span class="question-number">${index + 1}.</span>
                <span class="question-text">${question}</span>
            </label>
        `;
        
        questionsContainer.appendChild(questionItem);
    });
}

// Calculate score
function calculateScore() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });
    
    // Calculate percentage (100 - percentage of checked items)
    const totalQuestions = purityQuestions.length;
    const score = 100 - Math.round((checkedCount / totalQuestions) * 100);
    
    return {
        score,
        checkedCount,
        totalQuestions
    };
}

// Generate score interpretation
function getScoreInterpretation(score) {
    if (score >= 95) {
        return "Wow, you're practically still in orientation! Time to experience the real Stanford.";
    } else if (score >= 85) {
        return "You're still pretty innocent by Stanford standards. Maybe try saying 'yes' more often?";
    } else if (score >= 70) {
        return "You've had a taste of Stanford life, but there's still plenty of cardinal sin waiting for you!";
    } else if (score >= 50) {
        return "You've definitely embraced the Stanford experience. Your parents would be... concerned.";
    } else if (score >= 30) {
        return "You're a true Stanford veteran. Your stories could fill a scandalous memoir!";
    } else if (score >= 15) {
        return "Impressive! You've experienced Stanford in all its glory (and infamy). The alumni office might not want you as a donor representative.";
    } else {
        return "Legendary status achieved! You've done nearly everything Stanford has to offer. Time to write the next edition of this test!";
    }
}

// Event listeners
function setupEventListeners() {
    // Calculate button
    calculateBtn.addEventListener('click', () => {
        const result = calculateScore();
        
        // Display score
        scoreValue.textContent = result.score;
        scoreInterpretation.textContent = getScoreInterpretation(result.score);
        
        // Show results section
        resultsSection.classList.remove('hidden');
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Share button
    shareBtn.addEventListener('click', () => {
        const score = scoreValue.textContent;
        const text = `I scored ${score}% on the Stanford Purity Test! How pure is your Stanford experience?`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Stanford Purity Test',
                text: text,
                url: window.location.href
            })
            .catch(error => {
                console.warn('Error sharing:', error);
                fallbackShare(text);
            });
        } else {
            fallbackShare(text);
        }
    });
    
    // Fallback sharing method
    function fallbackShare(text) {
        // Copy to clipboard
        const textarea = document.createElement('textarea');
        textarea.value = text + ' ' + window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        alert('Result copied to clipboard! Share it with your friends.');
    }
    
    // Retake button
    retakeBtn.addEventListener('click', () => {
        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Hide results section
        resultsSection.classList.add('hidden');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize app
function initApp() {
    populateQuestions();
    setupEventListeners();
}

// Run the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp); 