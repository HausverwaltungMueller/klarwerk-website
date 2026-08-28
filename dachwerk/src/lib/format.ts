/** Deutsche Formate an einer Stelle. */
export const datum = (iso: string): string => {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
};

export const telHref = (nummer: string): string => `tel:+49${nummer.replace(/[^0-9]/g, '').replace(/^0/, '')}`;

export const zahl = (n: number, stellen = 0): string =>
  n.toLocaleString('de-DE', { minimumFractionDigits: stellen, maximumFractionDigits: stellen });
