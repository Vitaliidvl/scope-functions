
for (let i = 0; i <= 90; i++) {
    console.log();
}


function createCalcfunction(n) {
  return function () {
    console.log(n * 1000);
  };
}

const calc = createCalcfunction(42);
calc();

function domainGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = domainGenerator('com');

console.log(comUrl('google'));
console.log(comUrl('rutracker'));
console.log(comUrl('netflix'));

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const p1 = { name: 'Mikle', age: 22, job: 'Frontend' };
const p2 = { name: 'Mike', age: 25, job: 'SMM' };

bind(p1, logPerson)();
bind(p2, logPerson)();