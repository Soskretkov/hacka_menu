export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const strLetters = '0123456789ABCDEF';
  let strColor = '#';
  for (let i = 0; i < 6; i++) {
    strColor += strLetters[Math.floor(Math.random() * 16)];
  }
  return strColor;
}