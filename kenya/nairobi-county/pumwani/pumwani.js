// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pumwani","repository":"africa","path":"kenya/nairobi-county/pumwani","depth":3,"parent":"kenya/nairobi-county","children":["gikomba","gorofani","shauri-moyo","starehe"]});
export const childModules = Object.freeze({"gikomba":"./gikomba/gikomba.js","gorofani":"./gorofani/gorofani.js","shauri-moyo":"./shauri-moyo/shauri-moyo.js","starehe":"./starehe/starehe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
