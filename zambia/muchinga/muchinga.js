// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muchinga","repository":"africa","path":"zambia/muchinga","depth":2,"parent":"zambia","children":["chinsali","isoka","mpika","nakonde"]});
export const childModules = Object.freeze({"chinsali":"./chinsali/chinsali.js","isoka":"./isoka/isoka.js","mpika":"./mpika/mpika.js","nakonde":"./nakonde/nakonde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
