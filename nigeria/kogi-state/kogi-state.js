// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kogi-state","repository":"africa","path":"nigeria/kogi-state","depth":2,"parent":"nigeria","children":["ajaokuta","egbe","idah","isanlu-itedoijowa","kabba","lokoja","ogaminana","okene"]});
export const childModules = Object.freeze({"ajaokuta":"./ajaokuta/ajaokuta.js","egbe":"./egbe/egbe.js","idah":"./idah/idah.js","isanlu-itedoijowa":"./isanlu-itedoijowa/isanlu-itedoijowa.js","kabba":"./kabba/kabba.js","lokoja":"./lokoja/lokoja.js","ogaminana":"./ogaminana/ogaminana.js","okene":"./okene/okene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
