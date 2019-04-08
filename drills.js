'use strict';

const HashMap = require ('./HashMap');



function main(){
  const lor = new HashMap();
  lor.MAX_LOAD_RATIO = 0.5; 
  lor.SIZE_RATIO = 3;

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodos');
//   lor.set('Wizard', 'Gandalf');
//   lor.set('Human', 'Aragon');
//   lor.set('Elf', 'Legolas');
//   lor.set('Maiar', 'Necromancer');
//   lor.set('Maiar', 'Sauron');
//   lor.set('RingBearer', 'Gollum');
//   lor.set('LadyOfLight', 'Galadriel');
//   lor.set('HalfElven', 'Arwen');
//   lor.set('Ent', 'Treebeard');
  
  display(lor);
//   console.log(JSON.stringify(lor, null, 2));   
}

function display(data) {
  let result =[];
  console.log('data', data); 
    console.log('hashtable', data._hashTable);

  for(let i=0; i<data._hashTable.length; i++){
    result.push(data._hashTable.charAt(i));
  }
  return result;
}

console.log(main());