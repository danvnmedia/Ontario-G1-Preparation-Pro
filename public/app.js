// Global variables
let currentQuestionIndex = 0;
let currentQuiz = [];
let score = 0;
let userAnswers = [];
let quizType = 'quick';

// Sample question database
const questionDatabase = {
    quick: [
        {
            question: "What does a red octagonal sign mean?",
            options: ["Yield", "Stop", "Slow down", "No entry"],
            correct: 1,
            explanation: "A red octagonal sign is a STOP sign. You must come to a complete stop."
        },
        {
            question: "What is the speed limit in a school zone when children are present?",
            options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
            correct: 1,
            explanation: "The speed limit in a school zone when children are present is 40 km/h."
        },
        {
            question: "What does a yellow diamond-shaped sign indicate?",
            options: ["Stop ahead", "Warning or caution", "Construction zone", "Speed limit"],
            correct: 1,
            explanation: "Yellow diamond-shaped signs are warning signs that alert you to potential hazards ahead."
        },
        {
            question: "When must you yield to pedestrians?",
            options: ["Only at crosswalks", "Only when they have the signal", "Always", "Never"],
            correct: 2,
            explanation: "You must always yield to pedestrians, whether they are at a crosswalk or crossing the road."
        },
        {
            question: "What should you do when approaching a yellow traffic light?",
            options: ["Speed up", "Stop if safe to do so", "Honk your horn", "Maintain speed"],
            correct: 1,
            explanation: "A yellow light means the light is about to turn red. Stop if you can do so safely."
        },
        {
            question: "What is the maximum blood alcohol level for a fully licensed driver in Ontario?",
            options: ["0.00%", "0.05%", "0.08%", "0.10%"],
            correct: 2,
            explanation: "The legal blood alcohol limit for fully licensed drivers in Ontario is 0.08%."
        },
        {
            question: "When are you required to wear a seatbelt?",
            options: ["On highways only", "Always", "Only in the front seat", "Only when children are present"],
            correct: 1,
            explanation: "Drivers and passengers must wear seatbelts at all times while the vehicle is in motion."
        },
        {
            question: "What does a solid white line on the road mean?",
            options: ["You can cross it anytime", "Lane change discouraged", "No parking", "Pedestrian crossing"],
            correct: 1,
            explanation: "A solid white line indicates that lane changes are discouraged but not prohibited."
        },
        {
            question: "How far must you park from a fire hydrant?",
            options: ["1 meter", "3 meters", "5 meters", "10 meters"],
            correct: 1,
            explanation: "You must park at least 3 meters (about 10 feet) away from a fire hydrant."
        },
        {
            question: "What does a green arrow at a traffic light mean?",
            options: ["Yield before turning", "Stop before turning", "You may turn in that direction", "No turn allowed"],
            correct: 2,
            explanation: "A green arrow means you may turn in the direction of the arrow."
        },
        {
            question: "When parallel parking, how far from the curb should your wheels be?",
            options: ["15 cm", "30 cm", "50 cm", "1 meter"],
            correct: 1,
            explanation: "When parallel parking, your wheels should be within 30 cm (about 1 foot) of the curb."
        },
        {
            question: "What should you do if you miss your exit on a highway?",
            options: ["Back up", "Stop and reverse", "Continue to the next exit", "Make a U-turn"],
            correct: 2,
            explanation: "If you miss your exit, continue to the next exit. Never stop, back up, or make a U-turn on a highway."
        },
        {
            question: "What does a flashing red light mean?",
            options: ["Slow down", "Treat it as a stop sign", "Yield", "Proceed with caution"],
            correct: 1,
            explanation: "A flashing red light has the same meaning as a stop sign - come to a complete stop."
        },
        {
            question: "When must you use your headlights?",
            options: ["Only at night", "One half hour before sunset to one half hour after sunrise", "Only in bad weather", "Only on highways"],
            correct: 1,
            explanation: "You must use headlights from one half hour before sunset to one half hour after sunrise, and any time visibility is poor."
        },
        {
            question: "What is the speed limit on most Ontario highways unless posted otherwise?",
            options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
            correct: 2,
            explanation: "The speed limit on most Ontario highways is 100 km/h unless otherwise posted."
        },
        {
            question: "When must you signal before turning?",
            options: ["30 meters before the turn", "When you see other traffic", "Only on highways", "Only at night"],
            correct: 0,
            explanation: "You must signal at least 30 meters (about 100 feet) before making a turn."
        },
        {
            question: "What should you do when an emergency vehicle with flashing lights approaches?",
            options: ["Speed up", "Pull to the right and stop", "Change lanes", "Continue normally"],
            correct: 1,
            explanation: "Pull to the right side of the road and stop to allow emergency vehicles to pass."
        },
        {
            question: "What does a white rectangular sign indicate?",
            options: ["Warning", "Regulatory information", "Construction", "Direction"],
            correct: 1,
            explanation: "White rectangular signs provide regulatory information such as speed limits and traffic rules."
        },
        {
            question: "When are you allowed to pass on the right?",
            options: ["Never", "On a one-way street or when the vehicle ahead is turning left", "Always", "Only on highways"],
            correct: 1,
            explanation: "You may pass on the right on a one-way street or when the vehicle ahead is turning left and there is room."
        },
        {
            question: "How many demerit points do you get for failing to stop for a school bus?",
            options: ["2 points", "4 points", "6 points", "8 points"],
            correct: 2,
            explanation: "Failing to stop for a school bus with its red lights flashing results in 6 demerit points."
        }
    ],
    signs: [
        {
            question: "What does a triangular sign with red border mean?",
            options: ["Stop", "Yield", "No entry", "Speed limit"],
            correct: 1,
            explanation: "A triangular sign with a red border is a YIELD sign."
        },
        {
            question: "What does a circular sign with a red border and diagonal line mean?",
            options: ["No parking", "Prohibition", "Warning", "Information"],
            correct: 1,
            explanation: "A circular sign with a red border and diagonal line indicates a prohibition."
        },
        {
            question: "What color are most warning signs?",
            options: ["Red", "Yellow", "Green", "Blue"],
            correct: 1,
            explanation: "Most warning signs are yellow with black symbols."
        },
        {
            question: "What does a pennant-shaped sign indicate?",
            options: ["No passing zone", "School zone", "Construction", "Detour"],
            correct: 0,
            explanation: "A pennant-shaped yellow sign indicates a no-passing zone."
        },
        {
            question: "What do blue signs typically indicate?",
            options: ["Warnings", "Services and information", "Prohibitions", "Construction"],
            correct: 1,
            explanation: "Blue signs provide information about services such as hospitals, gas stations, and rest areas."
        }
    ],
    rules: [
        {
            question: "What is the legal blood alcohol limit for drivers under 21 in Ontario?",
            options: ["0.00%", "0.05%", "0.08%", "0.10%"],
            correct: 0,
            explanation: "Drivers under 21 and all G1 and G2 drivers must have zero blood alcohol level."
        },
        {
            question: "How long is a G1 license valid?",
            options: ["6 months", "1 year", "2 years", "5 years"],
            correct: 3,
            explanation: "A G1 license is valid for 5 years from the date of issue."
        },
        {
            question: "Can a G1 driver use a handheld communication device?",
            options: ["Yes", "No", "Only for emergencies", "Only when parked"],
            correct: 1,
            explanation: "G1 drivers cannot use any handheld communication or entertainment devices while driving."
        },
        {
            question: "What time restrictions apply to G1 drivers?",
            options: ["Cannot drive after 6 PM", "Cannot drive between midnight and 5 AM", "Cannot drive before 7 AM", "No restrictions"],
            correct: 1,
            explanation: "G1 drivers cannot drive between midnight and 5 AM."
        },
        {
            question: "Who must accompany a G1 driver?",
            options: ["Any licensed driver", "A driver with at least 4 years of G license experience", "A parent", "A driving instructor"],
            correct: 1,
            explanation: "G1 drivers must be accompanied by a fully licensed driver with at least 4 years of experience."
        }
    ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Load road signs
    loadRoadSigns();
});

// Quiz functions
function startQuiz(type = 'quick') {
    quizType = type;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // Get questions based on quiz type
    if (type === 'full') {
        currentQuiz = [...questionDatabase.quick, ...questionDatabase.signs, ...questionDatabase.rules].slice(0, 40);
    } else if (questionDatabase[type]) {
        currentQuiz = [...questionDatabase[type]];
    } else {
        currentQuiz = [...questionDatabase.quick];
    }

    // Shuffle questions
    currentQuiz = shuffleArray(currentQuiz);

    // Hide quiz options and show quiz container
    document.querySelector('.quiz-options').style.display = 'none';
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');

    // Update total questions
    document.getElementById('total-questions').textContent = currentQuiz.length;

    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;

    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);

        // Restore previous selection if exists
        if (userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        optionsContainer.appendChild(optionDiv);
    });

    // Update button visibility
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    
    if (currentQuestionIndex === currentQuiz.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

function selectOption(index) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    document.querySelectorAll('.option')[index].classList.add('selected');
    
    // Save user's answer
    userAnswers[currentQuestionIndex] = index;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    // Calculate score
    score = 0;
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });

    // Show results
    const percentage = Math.round((score / currentQuiz.length) * 100);
    const resultContainer = document.getElementById('result-container');
    const resultDetails = document.getElementById('result-details');

    let resultHTML = `
        <div style="font-size: 3rem; margin: 1rem 0;">${percentage}%</div>
        <p style="font-size: 1.5rem; margin-bottom: 1rem;">You got ${score} out of ${currentQuiz.length} questions correct!</p>
    `;

    if (percentage >= 80) {
        resultHTML += `<p style="color: var(--success-color); font-size: 1.2rem;">🎉 Excellent! You're ready for the G1 test!</p>`;
    } else if (percentage >= 60) {
        resultHTML += `<p style="color: var(--warning-color); font-size: 1.2rem;">👍 Good job! Review the questions you missed and try again.</p>`;
    } else {
        resultHTML += `<p style="color: var(--danger-color); font-size: 1.2rem;">📚 Keep studying! Review the material and try again.</p>`;
    }

    resultHTML += `<div style="margin-top: 2rem; text-align: left;">`;
    
    // Show incorrect answers
    let incorrectCount = 0;
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] !== question.correct) {
            incorrectCount++;
            if (incorrectCount <= 5) { // Show only first 5 mistakes
                resultHTML += `
                    <div style="background-color: var(--light-bg); padding: 1rem; margin-bottom: 1rem; border-radius: 8px;">
                        <strong>Q: ${question.question}</strong><br>
                        Your answer: ${question.options[userAnswers[index]] || 'Not answered'}<br>
                        Correct answer: ${question.options[question.correct]}<br>
                        <em>${question.explanation}</em>
                    </div>
                `;
            }
        }
    });

    if (incorrectCount > 5) {
        resultHTML += `<p><em>...and ${incorrectCount - 5} more incorrect answers</em></p>`;
    }

    resultHTML += `</div>`;

    resultDetails.innerHTML = resultHTML;
    resultContainer.classList.remove('hidden');
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.quiz-controls').style.display = 'none';
}

function resetQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.querySelector('.quiz-options').style.display = 'grid';
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.quiz-controls').style.display = 'flex';
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
}

// Study guide functions
function openStudyGuide(type) {
    alert(`Study guide for ${type} is coming soon! For now, please refer to the official Ontario Driver's Handbook.`);
}

// Road signs functions
function loadRoadSigns() {
    const signsGrid = document.getElementById('signs-grid');
    if (!signsGrid) return;

    const signs = [
        { category: 'warning', icon: '⚠️', name: 'Warning', description: 'Potential hazard ahead' },
        { category: 'regulatory', icon: '🛑', name: 'Stop', description: 'Come to a complete stop' },
        { category: 'regulatory', icon: '⛔', name: 'Do Not Enter', description: 'Do not enter this road' },
        { category: 'regulatory', icon: '🚫', name: 'No Parking', description: 'Parking is not allowed' },
        { category: 'warning', icon: '🚸', name: 'School Zone', description: 'School area - watch for children' },
        { category: 'information', icon: 'ℹ️', name: 'Information', description: 'General information' },
        { category: 'regulatory', icon: '➡️', name: 'One Way', description: 'Traffic flows in one direction' },
        { category: 'warning', icon: '🦌', name: 'Animal Crossing', description: 'Watch for animals' },
        { category: 'regulatory', icon: '↩️', name: 'Yield', description: 'Give right of way to other traffic' },
        { category: 'information', icon: '🏥', name: 'Hospital', description: 'Hospital nearby' },
        { category: 'warning', icon: '⚡', name: 'Slippery Road', description: 'Road may be slippery' },
        { category: 'regulatory', icon: '🚷', name: 'No Pedestrians', description: 'Pedestrians not allowed' }
    ];

    signs.forEach(sign => {
        const signCard = document.createElement('div');
        signCard.className = 'sign-card';
        signCard.dataset.category = sign.category;
        signCard.innerHTML = `
            <div class="sign-icon">${sign.icon}</div>
            <h4>${sign.name}</h4>
            <p>${sign.description}</p>
        `;
        signsGrid.appendChild(signCard);
    });
}

function filterSigns(category, event) {
    const signs = document.querySelectorAll('.sign-card');
    const buttons = document.querySelectorAll('.category-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Filter signs
    signs.forEach(sign => {
        if (category === 'all' || sign.dataset.category === category) {
            sign.style.display = 'block';
        } else {
            sign.style.display = 'none';
        }
    });
}

// Utility functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
