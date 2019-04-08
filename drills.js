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
