// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mtwara","repository":"africa","path":"tanzania/mtwara","depth":2,"parent":"tanzania","children":["kitama","luchingu","lukuledi","masasi","nanganga","nangomba","nanyamba","newala","newala-kisimani","tandahimba"]});
export const childModules = Object.freeze({"kitama":"./kitama/kitama.js","luchingu":"./luchingu/luchingu.js","lukuledi":"./lukuledi/lukuledi.js","masasi":"./masasi/masasi.js","nanganga":"./nanganga/nanganga.js","nangomba":"./nangomba/nangomba.js","nanyamba":"./nanyamba/nanyamba.js","newala":"./newala/newala.js","newala-kisimani":"./newala-kisimani/newala-kisimani.js","tandahimba":"./tandahimba/tandahimba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
