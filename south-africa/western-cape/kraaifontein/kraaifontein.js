// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kraaifontein","repository":"africa","path":"south-africa/western-cape/kraaifontein","depth":3,"parent":"south-africa/western-cape","children":["peerless-park-east","windsor-park"]});
export const childModules = Object.freeze({"peerless-park-east":"./peerless-park-east/peerless-park-east.js","windsor-park":"./windsor-park/windsor-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
