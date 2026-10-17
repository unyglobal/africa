// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaffrine","repository":"africa","path":"senegal/kaffrine","depth":2,"parent":"senegal","children":["koungheul","koungneul-sosse"]});
export const childModules = Object.freeze({"koungheul":"./koungheul/koungheul.js","koungneul-sosse":"./koungneul-sosse/koungneul-sosse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
