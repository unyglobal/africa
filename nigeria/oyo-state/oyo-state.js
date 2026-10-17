// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oyo-state","repository":"africa","path":"nigeria/oyo-state","depth":2,"parent":"nigeria","children":["eruwa","fiditi","ibadan","igangan","igbeti","igbo-ora","igboho","iseyin","kisi","lalupon","ogbomoso","orita-eruwa","oyo","saki"]});
export const childModules = Object.freeze({"eruwa":"./eruwa/eruwa.js","fiditi":"./fiditi/fiditi.js","ibadan":"./ibadan/ibadan.js","igangan":"./igangan/igangan.js","igbeti":"./igbeti/igbeti.js","igbo-ora":"./igbo-ora/igbo-ora.js","igboho":"./igboho/igboho.js","iseyin":"./iseyin/iseyin.js","kisi":"./kisi/kisi.js","lalupon":"./lalupon/lalupon.js","ogbomoso":"./ogbomoso/ogbomoso.js","orita-eruwa":"./orita-eruwa/orita-eruwa.js","oyo":"./oyo/oyo.js","saki":"./saki/saki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
