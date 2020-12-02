export const formatPercent = (number) =>
  new Intl.NumberFormat('es-ES', { style: 'percent' }).format(number);
