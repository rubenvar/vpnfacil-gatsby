// if k = false, don't divide by 1000 (12582 -> 12.582) (defaults to true, 12582 -> 12,6k)
export function formatNumber(num, k = true) {
  const bigK = k === true && num > 1000;
  let number = num;
  if (bigK) number = Math.round((num / 1000) * 10) / 10;
  return `${new Intl.NumberFormat('es-ES').format(number)}${bigK ? 'k' : ''}`;
}
