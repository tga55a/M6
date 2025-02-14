
let index = 1;
let active = true

while (active) {

    let randomNumber = Math.floor(Math.random() * 10) + 1
    let attempts = 0

    while (active) {
        try {
            let guess = Number(prompt("Question #" + index + ". What's your guess?: "))
            
            if (guess == randomNumber) {
                window.prompt("Correct! It took you " + attempts + " attempts. Press ENTER to continue")
                attempts += 1
                break
            } else if (guess == 999) {
                active = false
            } else {
                window.prompt("Incorrect, guess again. Press ENTER to try again.")
                attempts += 1
            }

        } catch {
            window.prompt("I cannot understand this input. Please enter a number next time. Press ENTER to try again.")
        }
    }
    index += 1
    attempts = 0
}
