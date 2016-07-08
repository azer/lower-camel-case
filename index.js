module.exports = lowerCamelCase;

function lowerCamelCase (text) {
  return text.toLowerCase()
    .replace(/['"`]+/g, '')
    .replace(/[^a-zA-Z0-9\s]+/g, ' ')
    .replace(/^[\d\s]+/g, '')
    .split(' ')
    .reduce(function (a, b) {
      return a + b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
    });
}
