const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-_><|~^"

function generatePassword(length = 12) {

    const password = []
    // we have 83 chars, 83 x 3 = 249, every char has a equal chance of getting picked, anything above that would be unfair and come chars would get picked more often, bias.
    const limit = Math.floor(256 / chars.length) * chars.length; // 249

    while (password.length < length) {
        const array = new Uint8Array(length * 2) // oversample, so good unbiased chars get picked
        crypto.getRandomValues(array)

        for (const byte of array) {
            if (password.length >= length) break
            if (byte < limit) {
                password.push(chars[byte % chars.length])
            }
        }
    }
    return password.join("")
}

function handleOutput(){
    const password = generatePassword()
    const output = document.querySelector('p')
    output.textContent = password;
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', handleOutput)
    }
})
