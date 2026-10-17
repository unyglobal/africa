// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cairo","repository":"africa","path":"egypt/cairo","depth":2,"parent":"egypt","children":["bulaq-abu-al-ila","el-shorouk","hada-iq-al-qubbah","halwan","madinat-an-nasr","new-cairo"]});
export const childModules = Object.freeze({"bulaq-abu-al-ila":"./bulaq-abu-al-ila/bulaq-abu-al-ila.js","el-shorouk":"./el-shorouk/el-shorouk.js","hada-iq-al-qubbah":"./hada-iq-al-qubbah/hada-iq-al-qubbah.js","halwan":"./halwan/halwan.js","madinat-an-nasr":"./madinat-an-nasr/madinat-an-nasr.js","new-cairo":"./new-cairo/new-cairo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
