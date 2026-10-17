// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-cape","repository":"africa","path":"south-africa/northern-cape","depth":2,"parent":"south-africa","children":["de-aar","kimberley","pampierstad","postmasburg","upington","warrenton"]});
export const childModules = Object.freeze({"de-aar":"./de-aar/de-aar.js","kimberley":"./kimberley/kimberley.js","pampierstad":"./pampierstad/pampierstad.js","postmasburg":"./postmasburg/postmasburg.js","upington":"./upington/upington.js","warrenton":"./warrenton/warrenton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
