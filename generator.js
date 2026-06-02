const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-_><|~^"

function generatePassword(length = 12) {
    const array = new Uint8Array(12);
    crypto.getRandomValues(array)
    let password = ""
    for (let i = 0; i < length; i++) {
        const randomIndex = array[i] % chars.length
        password += chars[randomIndex]
    }
    return password
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
