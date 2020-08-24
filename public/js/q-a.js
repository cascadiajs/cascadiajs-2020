function setupQandA() {
    const form = document.querySelector('#question-form')
    // reset the form and update questions, but not before it sends the payload
    // probably a better way to do this...
    form.onsubmit = () => setTimeout(() => {
        form.reset()
        retrieveQuestions()
    }, 100)
    retrieveQuestions()
    pollForQuestions()
}

/**
 * Fetches questions from the backend
 */
async function retrieveQuestions() {
    try {
        const response = await window.fetch('/questions')
        handleQuestionsResponse(response)
    } catch (_) {
        displayFetchError()
    }
}

/**
 * Parses the response received from the backend and updates the DOM
 * @param {Response} response The response to the fetch call
 */
async function handleQuestionsResponse(response) {
    const questionsContainer = document.querySelector('#qa-questions')
    const data = await response.json()

    if (data.length === 0) {
        questionsContainer.innerHTML = `
        <li>No questions yet!</li>
        `
        return
    }

    // build the list of questions that will be added to the dom
    const questionsList = data.reduce((acc, { question, key, timesAsked }) => {
        return acc + `
        <li class="qa-question">
        <button type="button" class="qa-inc-button" data-key="${key}">+1</button>
        <span>
            <span class="qa-question-text">${question}</span> 
            (Times Asked: ${timesAsked})
        </span>
        </li>`
    }, '')
    // Replace the currently displayed list of questions with the new list 
    questionsContainer.innerHTML = questionsList
    // Since these are new elements, we need to re-bind the click handlers
    document.querySelectorAll('.qa-inc-button').forEach(button => {
        button.onclick =  (event) => {
            incrementQuestionCount(event.target.dataset.key)
            event.target.style.backgroundColor = '#17C37B'
            event.target.style.color = 'white'
        }
    })
}

/**
 * Updates the DOM to indicate there was an error fetching questions
 */
function displayFetchError() {
    const questionsContainer = document.querySelector('#qaquestions')
    questionsContainer.innerHTML = `<li class="question">Unable to fetch questions.</li>`
}

/**
 * Click handler for question buttons.
 * When a user clicks the button, increment the number of times
 * it's been asked by the audience
 * @param {String} key the key of the question to increment. Generated by Begin Data
 */
async function incrementQuestionCount(key) {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key })
    }
    await window.fetch('/ask', settings)
    retrieveQuestions()

}

/**
 * Setups up continuous polling to check for updates the questions
 * Only needs to be called once
 */
async function pollForQuestions() {
    const interval = 10000
    while (true) {
        await new Promise((res) => setTimeout(res, interval))
        await retrieveQuestions()
    }
}

// setup the page
window.addEventListener('load', setupQandA, false)
