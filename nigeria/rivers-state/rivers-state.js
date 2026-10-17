// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rivers-state","repository":"africa","path":"nigeria/rivers-state","depth":2,"parent":"nigeria","children":["bonny","buguma","degema-hulk","elele","obonoma","okrika","port-harcourt"]});
export const childModules = Object.freeze({"bonny":"./bonny/bonny.js","buguma":"./buguma/buguma.js","degema-hulk":"./degema-hulk/degema-hulk.js","elele":"./elele/elele.js","obonoma":"./obonoma/obonoma.js","okrika":"./okrika/okrika.js","port-harcourt":"./port-harcourt/port-harcourt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
