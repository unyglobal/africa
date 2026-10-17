// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"draa-tafilalet","repository":"africa","path":"morocco/draa-tafilalet","depth":2,"parent":"morocco","children":["arfoud","errachidia","goulmima","kelaat-mgouna","moulay-ali-cherif","ouarzazate","recani","rich","tabount","tinghir","zagora"]});
export const childModules = Object.freeze({"arfoud":"./arfoud/arfoud.js","errachidia":"./errachidia/errachidia.js","goulmima":"./goulmima/goulmima.js","kelaat-mgouna":"./kelaat-mgouna/kelaat-mgouna.js","moulay-ali-cherif":"./moulay-ali-cherif/moulay-ali-cherif.js","ouarzazate":"./ouarzazate/ouarzazate.js","recani":"./recani/recani.js","rich":"./rich/rich.js","tabount":"./tabount/tabount.js","tinghir":"./tinghir/tinghir.js","zagora":"./zagora/zagora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
