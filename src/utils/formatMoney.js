export function formatMoney(amount, currency = 'USD') {
  if (!currency) currency = 'USD';
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  };

  // if its a whole amount, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 0;

  const formatter = new Intl.NumberFormat('es-ES', options);
  return formatter.format(amount / 100);
}
