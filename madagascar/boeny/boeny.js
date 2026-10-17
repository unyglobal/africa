// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boeny","repository":"africa","path":"madagascar/boeny","depth":2,"parent":"madagascar","children":["ambato-boeny","mahajanga","marovoay","sitampiky","soalala"]});
export const childModules = Object.freeze({"ambato-boeny":"./ambato-boeny/ambato-boeny.js","mahajanga":"./mahajanga/mahajanga.js","marovoay":"./marovoay/marovoay.js","sitampiky":"./sitampiky/sitampiky.js","soalala":"./soalala/soalala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
