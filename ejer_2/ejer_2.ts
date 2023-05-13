function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

function computeValues(x: number, y: number, z: number) {
  const sum = x + y;
  const prod = sum * z;
  const result = Math.sin(prod);

  return result;
}
