console.log('console'); // LEARNED
console.error('err');

console.log('.').then(() => console.log('success!')).catch(err => console.log(`Err! ${err}`));
