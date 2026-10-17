// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"simiyu","repository":"africa","path":"tanzania/simiyu","depth":2,"parent":"tanzania","children":["bariadi","lalago","malampaka","maswa","mwanhuzi","nyakabindi","nyalikungu","shanwa","somanda"]});
export const childModules = Object.freeze({"bariadi":"./bariadi/bariadi.js","lalago":"./lalago/lalago.js","malampaka":"./malampaka/malampaka.js","maswa":"./maswa/maswa.js","mwanhuzi":"./mwanhuzi/mwanhuzi.js","nyakabindi":"./nyakabindi/nyakabindi.js","nyalikungu":"./nyalikungu/nyalikungu.js","shanwa":"./shanwa/shanwa.js","somanda":"./somanda/somanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
