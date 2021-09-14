export default (totalLength = 25)=> {
    const variable =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.split('');
  let code = '';
  while (true) {
    if (code.length < totalLength) {
      code = `${code}${variable[Math.ceil(Math.random() * (variable.length - 1))]}`;
    } else {
      return code;
    }
  }
};

