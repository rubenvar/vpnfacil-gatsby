// from https://gist.github.com/gordonbrander/2230317
export const makeUniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;
