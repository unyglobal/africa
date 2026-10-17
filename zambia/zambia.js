// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zambia","repository":"africa","path":"zambia","depth":1,"parent":"","children":["central-province","copperbelt","eastern-province","luapula-province","lusaka-province","muchinga","north-western","northern-province","southern-province","western-province"]});
export const childModules = Object.freeze({"central-province":"./central-province/central-province.js","copperbelt":"./copperbelt/copperbelt.js","eastern-province":"./eastern-province/eastern-province.js","luapula-province":"./luapula-province/luapula-province.js","lusaka-province":"./lusaka-province/lusaka-province.js","muchinga":"./muchinga/muchinga.js","north-western":"./north-western/north-western.js","northern-province":"./northern-province/northern-province.js","southern-province":"./southern-province/southern-province.js","western-province":"./western-province/western-province.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
