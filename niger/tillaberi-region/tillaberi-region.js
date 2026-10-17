// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tillaberi-region","repository":"africa","path":"niger/tillaberi-region","depth":2,"parent":"niger","children":["ayorou","baleyara","filingue","kollo","mehana","say","tera","tillaberi","torodi","youri-kourtere"]});
export const childModules = Object.freeze({"ayorou":"./ayorou/ayorou.js","baleyara":"./baleyara/baleyara.js","filingue":"./filingue/filingue.js","kollo":"./kollo/kollo.js","mehana":"./mehana/mehana.js","say":"./say/say.js","tera":"./tera/tera.js","tillaberi":"./tillaberi/tillaberi.js","torodi":"./torodi/torodi.js","youri-kourtere":"./youri-kourtere/youri-kourtere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
