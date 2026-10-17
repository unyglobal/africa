// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-province","repository":"africa","path":"sierra-leone/eastern-province","depth":2,"parent":"sierra-leone","children":["kenema","koidu","segbwema"]});
export const childModules = Object.freeze({"kenema":"./kenema/kenema.js","koidu":"./koidu/koidu.js","segbwema":"./segbwema/segbwema.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
