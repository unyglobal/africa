// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"enugu-state","repository":"africa","path":"nigeria/enugu-state","depth":2,"parent":"nigeria","children":["aku","awgu","eha-amufu","enugu","enugu-ezike","nsukka"]});
export const childModules = Object.freeze({"aku":"./aku/aku.js","awgu":"./awgu/awgu.js","eha-amufu":"./eha-amufu/eha-amufu.js","enugu":"./enugu/enugu.js","enugu-ezike":"./enugu-ezike/enugu-ezike.js","nsukka":"./nsukka/nsukka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
