# 🔐 **Unit II: Symmetric-Key Cryptography**

Symmetric = **Same key** used for encryption & decryption.

### 🔑 Mnemonic:

**"Symmetric mein dono bhai same chabhi se taala kholte hain!"**

---

## 🟩 1. Substitution and Transposition Ciphers

### ✨ Substitution Cipher:

- Replace each letter with another.
    
- E.g., **Caesar Cipher**: shift letters by 3  
    → "HELLO" → "KHOOR"
    

🧠 **Mnemonic**:  
**"Substitute teacher ne A ko D bana diya, confusion ka chakkar hai bhaiya!"**

---

### ✨ Transposition Cipher:

- Rearrange the letters (positions change)
    
- E.g., **HELLO** → LLOHE (rearranged order)
    

🧠 **Mnemonic**:  
**"Trans ke train mein sab letters ki seat change!"**

---

## 🟩 2. Shannon’s Theory: Confusion & Diffusion

- **Confusion**: Makes relationship between key and ciphertext complex.  
    **(Key ka asar unclear banao!)**
    
- **Diffusion**: Spreads plaintext influence over ciphertext.  
    **(Ek word change, pura cipher hil jaye!)**
    

🧠 **Mnemonic**:  
**"Confuse karo hacker ko, Diffuse karo data har kona mein!"**

🔍 Example:

- Confusion: Use S-boxes (like in AES)
    
- Diffusion: Use permutation, mixing (like in DES)
    

---

## 🟩 3. Feistel Structure

- Framework for block ciphers (like DES)
    
- Split plaintext → L (Left) and R (Right)
    
- Run rounds where:
    
    - R becomes new L
        
    - L XOR F(R, Key) becomes new R
        

🧠 **Mnemonic**:  
**"Feistel bhai Left-Right ka khel khelta hai — har round mein partner badal!"**

---

## 🟩 4. Data Encryption Standard (DES)

- Block cipher: 64-bit block size
    
- 56-bit key (actual, though 64 bits with 8 for parity)
    
- 16 Feistel rounds
    
- Not secure now (vulnerable to brute-force)
    

🧠 **Mnemonic**:  
**"DES ka 56-bit taala, aaj ke hacker ke liye to khaali jhaala!"**

🔍 Example:

- Encrypts in 64-bit blocks → old but gold (historically)
    

---

## 🟩 5. Triple DES (3DES)

- Solves DES weakness
    
- Apply DES three times:  
    EDE mode: Encrypt → Decrypt → Encrypt
    

🧠 **Mnemonic**:  
**"DES 3 baar lagao, hacker ko chakma khilao!"**

🔍 Example:

- Used in old banking systems
    
- Key sizes: 112-bit or 168-bit
    

---

## 🟩 6. Advanced Encryption Standard (AES)

- Replaced DES as the standard
    
- Block size: 128 bits
    
- Key sizes: 128, 192, 256 bits
    
- Rounds: 10/12/14 (based on key size)
    
- SubBytes, ShiftRows, MixColumns, AddRoundKey (no Feistel)
    

🧠 **Mnemonic**:  
**"AES ki chaar toliyan — Sub, Shift, Mix, Add – hacker ho gaya sad!"**

🔍 Example:

- Used in Wi-Fi (WPA2), banking, cloud
    

---

## 🟩 7. Block Cipher Modes of Operation

These define **how blocks are encrypted** together.

|Mode|Description|Mnemonic|
|---|---|---|
|**ECB**|Each block encrypted separately|_"ECB – Ek Ek block alag, leakage ka rag!"_|
|**CBC**|Chaining blocks using XOR|_"CBC mein chain ka khel, har block ke pichhle se mel!"_|
|**CFB**|Uses previous ciphertext as input|_"CFB – Cipher se feedback lo bhai!"_|
|**OFB**|Uses IV + key to generate keystream|_"OFB – Output ka feedback, plain se no link!"_|
|**CTR**|Counter-based, parallel possible|_"CTR – Counter ginti se encryption ki factory!"_|

---

## 🟩 8. Traffic Confidentiality

- Protects **patterns of communication**, not just content
    
- Prevents analysis like:
    
    - Who is talking?
        
    - How often?
        

🧠 **Mnemonic**:  
**"Traffic ka CCTV bandh karo — Confidentiality ka mask lagao!"**

---

## 🟩 9. Key Distribution

- Problem: **How to share key safely?**
    
- Solutions:
    
    - Manual
        
    - Trusted third party
        
    - Key distribution center (KDC)
        

🧠 **Mnemonic**:  
**"Key toh dilwa di, par safely — warna dushman ki lottery!"**

---

## 🟩 10. Random Number Generation

- Needed for key generation, IV, nonces
    
- Types:
    
    - **True RNG**: Uses physical sources (e.g., mouse movements)
        
    - **PRNG**: Pseudo-random, algorithmic
        

🧠 **Mnemonic**:  
**"Random number lottery wala funda — bina jhol ke crypto ka danda!"**

---

## ✅ Summary Mnemonic:

**"Substitution ne replace kiya, Transposition ne ghuma diya.  
Feistel ka jadoo chala, DES weak, 3DES zyada.  
AES ne sabko hara diya! ECB se CTR tak mode ki ladai,  
Random aur Key ke bina crypto adhoora bhai!"**

---

Would you like Unit III (Number Theory + Public-Key Crypto) in the same Hinglish + detailed style next?