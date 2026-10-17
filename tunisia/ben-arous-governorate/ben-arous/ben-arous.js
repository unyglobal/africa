// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ben-arous","repository":"africa","path":"tunisia/ben-arous-governorate/ben-arous","depth":3,"parent":"tunisia/ben-arous-governorate","children":["cite-du-dispensaire","cite-du-stade","cite-ettaamir","cite-ibnou-arafa","cite-la-batie"]});
export const childModules = Object.freeze({"cite-du-dispensaire":"./cite-du-dispensaire/cite-du-dispensaire.js","cite-du-stade":"./cite-du-stade/cite-du-stade.js","cite-ettaamir":"./cite-ettaamir/cite-ettaamir.js","cite-ibnou-arafa":"./cite-ibnou-arafa/cite-ibnou-arafa.js","cite-la-batie":"./cite-la-batie/cite-la-batie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
