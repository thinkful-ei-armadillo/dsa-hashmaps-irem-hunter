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

function removeDuplicates(){
  //split string
  // hashMap letters 26 
  // hash function puts in index at their place in alphabet
  // {key:g, value: key}
  // every time a  key comes through
  // if empty put it in hash table
  // if collison occurs, don't put it
  // then display then values of the hashtable by looping through each
}