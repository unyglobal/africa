// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"estuaire","repository":"africa","path":"gabon/estuaire","depth":2,"parent":"gabon","children":["akanda","libreville","ntoum","owendo"]});
export const childModules = Object.freeze({"akanda":"./akanda/akanda.js","libreville":"./libreville/libreville.js","ntoum":"./ntoum/ntoum.js","owendo":"./owendo/owendo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
