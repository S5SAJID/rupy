const codeEle = document.querySelector('.code');
const errorEle = document.querySelector('.error');

codeEle.addEventListener('input', (e) => {
  const code = e.target.value;
  let parsedCode = tokenizer(code, keywords);
  
  try {
    eval(parsedCode);
    errorEle.innerHTML = '';
  } catch (e) {
    const parsedError = tokenizer(e.message, phrases)
    errorEle.innerHTML = parsedError;
  }
  
})