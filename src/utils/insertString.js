// https://stackoverflow.com/questions/4364881/inserting-string-at-position-x-of-another-string/4364902
export function insertString(original, index, insert) {
  return [original.slice(0, index), insert, original.slice(index)].join('');
}
