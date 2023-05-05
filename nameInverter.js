const nameInverter = function (name) {
  if (name === undefined) {
    throw 'Error';
  }
  //fn trims spaces in the i/p name using trim() & splits the string into an array of substring using spaces & resulting array is stored in variable nameParts
  const nameParts = name.trim().split(/\s+/);

  //fn checks if length of nameParts is 0 or if array is an empty string
  if (nameParts.length === 0 || nameParts[0] === '') {
    return '';
  }
  //if length is 1 fn rtns 1st and only element of array
  if (nameParts.length === 1) {
    return nameParts[0];
  }
  //if 1st element of the array is one of the honorofics the fn removes the honorofics from the begnning of the array using shift() mtd & rtns honorific followed by rest of name parts joined together join() mtd
  const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  if (honorifics.includes(nameParts[0])) {
    nameParts.shift();
    return honorifics[0] + ' ' + nameParts.join(' ');
  }
  return nameParts[1] + ',' + nameParts[0];
};

module.exports = nameInverter;