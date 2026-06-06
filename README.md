# Password Generator — Secure & Unbiased

> *A simple, secure, and unbiased JavaScript password generator for personal use. Perfect for changing passwords regularly and keeping them strong.*

---
- Uses **unbiased sampling** to ensure **each character has equal chance `const limit = Math.floor(256 / chars.length) * chars.length`
- default password length is 12 (You can change this in the code)
---

## How It Works

1. Uses `crypto.getRandomValues()` to generate secure random bytes.
2. **we have 83 characters to pick from ** — Only accepts bytes below 249 — because 256 isn't evenly 
   divisible by 83, so numbers 249–255 would bias the result.

---

## Character Set

```
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-_><|~^
```

---

## 🛡️ Security Notes

⚠️ **This is for personal use only** — do not use it for production systems or sensitive data without proper encryption.

✅ For production, consider:
- Using a **salted hash** (e.g., bcrypt)
- Using a **password manager**
- Using a **secure backend** with proper key management

---

## License

MIT — Feel free to use, modify, or share!

---

## How to use
- Clone repo or download ZIP
- Open index.html 
---


---

✅ **Ready to use — just copy & paste!**


---


## Security
- 76 bits of entropy at default length (12 chars)
- Increase length for stronger passwords


---

> 📌 **Note**: Designed for personal password generation. 
  Not a replacement for a full password manager.


