# 🚀 RUPY
**Roman Urdu Programming Language**

RUPY is a domain-specific language (DSL) created by Sajid Ullah Shahi to make programming more accessible for Urdu-speaking students. It translates Roman Urdu keywords into JavaScript, allowing users to write code in a language they are comfortable with.

### Features:
- **Conditions**: 
  - `agar` (if)
  - `warna` (else)
- **Loops**:
  - `jabtak` (while)
- **Functions**:
  - `kaam` (function)
- **Prompts**:
  - `lelo` (prompt)
- **Variable Declaration**:
  - `le` (let)
- **Logging**:
  - `batawo` (console.log)
- **Return Statements**:
  - `wapsi` (return)
- **Alerts**:
  - `dekawo` (alert)
- **Booleans**:
  - `sach` (true)
  - `ghalat` (false)

### Datatypes:
- **Number**
- **String**
- **Boolean**
- **And more**, as supported in JavaScript

### Example Code:
```javascript
kaam naamPocho() {
  le naam = lelo('Thumara naam kia hai?');
  wapsi naam;
}

le naam = naamPocho();

agar (naam) {
  batawo('Salam', naam);
} warna {
  batawo('Aap ne naam enter nahi kia!');
}
```

### More Example Programs:
1. **Greetings Based on Time**:
```javascript
kaam greetBasedOnTime() {
  le hour = new Date().getHours();
  
  agar (hour < 12) {
    batawo('Subah Bakhair!');
  } warna agar (hour < 18) {
    batawo('Dopehar Bakhair!');
  } warna {
    batawo('Shaam Bakhair!');
  }
}

greetBasedOnTime();
```

2. **Simple Guessing Game**:
```javascript
kaam guessingGame() {
  le secretNumber = 7;
  le guess = lelo('Ek number guess karo (1-10):');

  agar (guess == secretNumber) {
    batawo('Wah! Sahi guess kiya.');
  } warna {
    batawo('Afsoos! Galat guess, dobara koshish karo.');
  }
}

guessingGame();
```

3. **Check Even or Odd Number**:
```javascript
kaam checkEvenOrOdd(number) {
  agar (number % 2 == 0) {
    batawo(number, ' aik even number hai.');
  } warna {
    batawo(number, ' aik odd number hai.');
  }
}

checkEvenOrOdd(5);
checkEvenOrOdd(8);
```

4. **Counting with a Loop**:
```javascript
kaam countToTen() {
  le i = 1;
  jabtak (i <= 10) {
    batawo(i);
    i++;
  }
}

countToTen();
```

5. **Basic Calculator**:
```javascript
kaam basicCalculator() {
  le num1 = lelo('Pehla number daalein:');
  le num2 = lelo('Dosra number daalein:');
  le operation = lelo('Operation chunein (jamah, minus, zarb, taqseem):');

  agar (operation == 'jamah') {
    batawo('Result:', num1 + num2);
  } warna agar (operation == 'minus') {
    batawo('Result:', num1 - num2);
  } warna agar (operation == 'zarb') {
    batawo('Result:', num1 * num2);
  } warna agar (operation == 'taqseem') {
    batawo('Result:', num1 / num2);
  } warna {
    batawo('Invalid operation!');
  }
}

basicCalculator();
```

### How It Works:
RUPY translates Roman Urdu syntax into JavaScript, making it easier for Urdu-speaking students to understand and write code. Here’s a simple explanation of how the translation works:

1. **Source Code**: The user writes code using Roman Urdu keywords.
2. **Tokenization**: The source code is broken down into tokens, which are the smallest units of meaning (like keywords, operators, and identifiers).
3. **Translation**: Each Roman Urdu token is mapped to its corresponding JavaScript token. For example, `agar` is translated to `if`, `warna` to `else`, and so on. RUPY supports both English and Roman Urdu keywords, so users can mix and match them as needed.
4. **Execution**: The translated JavaScript code is then executed by the JavaScript engine.

This process allows users to write code in Roman Urdu, which is then seamlessly converted to JavaScript for execution.

### Note from the Developer:
"I am not a professional developer; this is just a small project aimed at making programming more accessible for Urdu-speaking students. Please remember that RUPY is in its early stages, and while it might seem like just a simple keyword replacement, the goal is to lower the barrier to entry for many aspiring programmers."

### Inspirational Quote:
"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela

### Coming Soon:
RUPY is currently in development and will be available soon. Stay tuned for updates and more information on how to start coding in Roman Urdu!

### Developer
This project is created by S5SAJID, also known as Sajid Ullah Shahi.
- 😺 GitHub Profile: [S5SAJID](https://github.com/s5sajid)
- 📸 YouTube Channel: [S5SAJID](https://youtube.com/s5sajid)
- 💌 Email: s5sajidyt@gmail.com