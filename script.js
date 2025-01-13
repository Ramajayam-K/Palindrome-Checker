document.querySelector("#palindrome_value").addEventListener("keyup", (e) => {
    const txtInput = e.target;
    const Result = document.querySelector(".result");

    // Allow only alphanumeric characters (letters and numbers)
    txtInput.value = txtInput.value.replace(/[^a-zA-Z0-9]/g, "");
    const userInput = txtInput.value.toLowerCase(); 

    // Check if the input has valid content
    if (userInput.trim() !== '') {
        const reverseInput = userInput.split("").reverse().join("");
        if (userInput !== reverseInput) {
            Result.innerHTML = `No, <span>'${userInput}'</span> isn't a palindrome!`;
        } else {
            Result.innerHTML = `Yes, <span>'${userInput}'</span> is a palindrome!`;
        }
    } else {
        Result.innerHTML = ""; // Clear the info text when input is empty
    }
});
