let a = 0;

for (let i = 0; i <= 10_000; i++) {
  for (let j = 0; j <= 100_000; j++) {
    a = i * j;
  }
}

console.log(a);