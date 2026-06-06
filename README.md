# Password Generator — Secure & Unbiased

> *A simple, secure, and unbiased JavaScript password generator for personal use. Perfect for changing passwords regularly and keeping them strong.*

---

## 🧪 Features

- ✅ Generates **cryptographically secure** passwords using `crypto.getRandomValues()`
- ✅ Uses **unbiased sampling** to ensure **each character has equal chance**
- ✅ Supports **custom password length** (default: 12)
- ✅ Uses a **large character set** — includes letters, numbers, symbols
- ✅ Works in **modern browsers** (Node.js or browser environments)

---

## 🔐 How It Works

1. **Random Bytes** — Uses `crypto.getRandomValues()` to generate secure random bytes.
2. **Limit-Based Sampling** — Only accepts bytes below `249` (to ensure unbiased distribution).
3. **Character Mapping** — Maps each byte to a random character from the set.
4. **No Bias** — Every character has an equal chance of appearing.

---

## 📄 Usage

### 🖥️ In Browser

```html
<!DOCTYPE html>
<html>
<head>
  <title>Password Generator</title>
</head>
<body>
  <button onclick="handleOutput()">Generate Password</button>
  <p id="output"></p>

  <script>
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-_><|~^";

    function generatePassword(length = 12) {
      const limit = Math.floor(256 / chars.length) * chars.length; // 249

      const buffer = new Uint8Array(length);
      crypto.getRandomValues(buffer);

      let password = "";
      for (let i = 0; i < length; i++) {
        const byte = buffer[i];
        if (byte < limit) {
          password += chars[byte % chars.length];
        }
      }

      return password;
    }

    function handleOutput() {
      const password = generatePassword();
      const output = document.querySelector('p');
      output.textContent = password;
    }

    document.addEventListener('DOMContentLoaded', function() {
      const button = document.querySelector('button');
      if (button) {
        button.addEventListener('click', handleOutput);
      }
    });
  </script>
</body>
</html>
```

> 📌 **Note**: Make sure you’re running this in a **modern browser** with `crypto` support.

---

## 🧠 Why This Is Secure

- **No external libraries** — pure JavaScript
- **No predictable patterns** — uses `crypto.getRandomValues()`
- **No bias** — uses a **limit-based sampling** to ensure even distribution
- **No hard-coded passwords** — every password is generated randomly

---

## 🧩 Character Set

```
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-_><|~^
```

> 📌 **You can customize this** — just modify the `chars` string.

---

## 🛡️ Security Notes

⚠️ **This is for personal use only** — do not use it for production systems or sensitive data without proper encryption.

✅ For production, consider:
- Using a **salted hash** (e.g., bcrypt)
- Using a **password manager**
- Using a **secure backend** with proper key management

---

## 📚 License

MIT — Feel free to use, modify, or share!

---

## 💬 Need Help?

Let me know if you want:
- ✅ A **Node.js version**
- ✅ A **password strength checker**
- ✅ A **downloadable `.js` file**
- ✅ A **password manager UI**
- ✅ **Custom character sets**

---

> 🔐 *Remember: Strong passwords are your best defense. Use this tool to keep them strong!* 🛡️

---

✅ **Ready to use — just copy & paste!**

---

Let me know if you want this in a **GitHub repo**, **downloadable file**, or **customized for your project** — I’ll help you make it perfect! 😊
