# Password Generator — Secure & Unbiased

- Uses **unbiased sampling** to ensure each character has equal chance `const limit = Math.floor(256 / chars.length) * chars.length; // 249`
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

## How to use
- Clone repo or download ZIP
- Open index.html

<img width="724" height="620" alt="Screenshot 2026-06-06 121340" src="https://github.com/user-attachments/assets/08836fa6-62f5-4b8d-8f64-4aad1245a6db" />

---

## Security
- 76 bits of entropy at default length (12 chars)
- Increase length for stronger passwords

---

## License

MIT — Feel free to use, modify, or share!

---

> 📌 **Note**: Designed for personal password generation. 
  Not a replacement for a full password manager.


