// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alaotra-mangoro","repository":"africa","path":"madagascar/alaotra-mangoro","depth":2,"parent":"madagascar","children":["ambatondrazaka","amparafaravola","andilamena","didy","imerimandroso","moramanga"]});
export const childModules = Object.freeze({"ambatondrazaka":"./ambatondrazaka/ambatondrazaka.js","amparafaravola":"./amparafaravola/amparafaravola.js","andilamena":"./andilamena/andilamena.js","didy":"./didy/didy.js","imerimandroso":"./imerimandroso/imerimandroso.js","moramanga":"./moramanga/moramanga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
