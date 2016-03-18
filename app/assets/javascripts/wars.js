function tribonacci(signature, n) {
  var seq = [];
  for (i = 0; i < 3; i++) {
    seq.push(signature[i]);
  }
  if (n > 3) {
    for (i = 3; i < n; i++) {
      var hold = seq.slice(i-3,i).reduce((a, b) => a + b, 0);
      seq.push(hold);
    }
  }
  return seq.slice(0,n);
}
