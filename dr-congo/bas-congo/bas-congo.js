// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bas-congo","repository":"africa","path":"dr-congo/bas-congo","depth":2,"parent":"dr-congo","children":["boma","inkisi","kasangulu","kenge","kimpese","matadi","mbanza-ngungu","moanda","tshela"]});
export const childModules = Object.freeze({"boma":"./boma/boma.js","inkisi":"./inkisi/inkisi.js","kasangulu":"./kasangulu/kasangulu.js","kenge":"./kenge/kenge.js","kimpese":"./kimpese/kimpese.js","matadi":"./matadi/matadi.js","mbanza-ngungu":"./mbanza-ngungu/mbanza-ngungu.js","moanda":"./moanda/moanda.js","tshela":"./tshela/tshela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
