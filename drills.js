'use strict';

const HashMap = require('./HashMap');

function main() {
  const lor = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lor.set('Hobbit', 'Bilbo'),
  lor.set('Hobbit', 'Frodos'),
  lor.set('Wizard', 'Gandalf'),
  lor.set('Human', 'Aragon'),
  lor.set('Elf', 'Legolas'),
  lor.set('Maiar', 'Necromancer'),
  lor.set('Maiar', 'Sauron'),
  lor.set('RingBearer', 'Gollum'),
  lor.set('LadyOfLight', 'Galadriel'),
  lor.set('HalfElven', 'Arwen'),
  lor.set('Ent', 'Treebeard');
  // return lor.get('Hobbit');
  return display(lor);
}

// console.log(main());

function display(data) {
  let result = [];
  console.log(data);

  for (let i = 0; i < data._hashTable.length; i++) {
    result.push(data._hashTable[i]);
  }
  return result;
}

function removeDuplicates(str) {
  let alp = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!alp.has(str[i])) {
      alp.set(str[i], str[i]);
    }
  }
  console.log(alp.keys());
}

// console.log(removeDuplicates('google all that you think can think of'));

function palindrome(str) {
  let words = new HashMap();
  let doubles = null;
  let numOfDoubles = 0;
  if (str.length % 2 === 0) {
    doubles = str.length / 2;
  } else {
    doubles = Math.floor(str.length / 2);
  }
  for (let i = 0; i < str.length; i++) {
    try {
      words.get(str[i]);
    } catch (e) {
      words.set(i, str[i]);
    }
  }
  for (let count = 0; count < str.length; count++) {
    for (let i = 0; i < str.length; i++) {
      if (count !== i) {
        if (words.get(count) === words.get(i)) {
          numOfDoubles++;
        }
      }
    }
  }
  if (doubles === numOfDoubles / 2) {
    return true;
  }
  return false;
}

// console.log(palindrome('racecar'));

function group(arr) {
  let arrays = new HashMap();
  let newArr = [];
  let finalArr = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('').sort());
    arrays.set(i, newArr[i].join(''));
  }
  for (let count = 0; count < arr.length; count++) {
    if (total < arr.length) {
      let tempArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arrays.get(count) === arrays.get(i)) {
          tempArr.push(arr[i]);
          total++;
        }
      }

      finalArr.push(tempArr);
    } else {
      break;
    }
  }
  return finalArr;
}

// console.log(group(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
