// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kwara-state","repository":"africa","path":"nigeria/kwara-state","depth":2,"parent":"nigeria","children":["bode-saadu","ilorin","jebba","kaiama","lafiagi","offa","okuta","patigi"]});
export const childModules = Object.freeze({"bode-saadu":"./bode-saadu/bode-saadu.js","ilorin":"./ilorin/ilorin.js","jebba":"./jebba/jebba.js","kaiama":"./kaiama/kaiama.js","lafiagi":"./lafiagi/lafiagi.js","offa":"./offa/offa.js","okuta":"./okuta/okuta.js","patigi":"./patigi/patigi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
