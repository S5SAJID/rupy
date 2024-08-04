let sourceCode = `
kaam naamPocho() {
  le naam = lelo('Thumara naam kia hai?')
  wapsi naam;
}

le naam = naamPocho();

agar (naam) {
  batawo('Salam', naam)
} warna {
  batawo('Aap ne naam enter nahi kia!')
}`;

const keywords = {
  'if': 'agar',
  'else': 'warna',
  'function': 'kaam',
  'prompt': 'lelo',
  'let': 'le',
  'console.log': 'batawo',
  'return': 'wapsi',
  'alert': 'dekawo',
  'while': 'jabtak',
  'true': 'sach',
  'false': 'ghalat'
}

const phrases = {
  'Unexpected': 'Ghair tawaqo',
  'is not defined': 'nahi banaya gaya hai',
  'end of': 'khaatmi'
}

const tokenizer = (code, replacement) => {
  let c = code.split('');
  let wholeText = ''
  while (c.length>0) {
    // Skip replacement process for strings
    if (c[0] == "'") {
      wholeText += c.shift()
      while (c.length>0 && c[0] != "'") {
       wholeText += c.shift();
      }
      wholeText += c.shift();
    } else {
      let prase = '';
      while (c.length>0 && c[0] != "'") {
        prase+=c.shift()
      }
      const replacedCode = replacer(prase, replacement);
      wholeText += replacedCode;
    }
  }
  return wholeText
}

const replacer = (code, replacements) => {
  let wholeCode = code;
  for (var key of Object.keys(replacements)) {
    if (replacements == keywords) {
      wholeCode = wholeCode.replaceAll(replacements[key], key);
    } else {
      wholeCode = wholeCode.replaceAll(key, replacements[key])
    }
  }
  return wholeCode
}