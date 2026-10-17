// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-province","repository":"africa","path":"zambia/central-province","depth":2,"parent":"zambia","children":["kabwe","kapiri-mposhi","mkushi","mumbwa","nampundwe","serenje"]});
export const childModules = Object.freeze({"kabwe":"./kabwe/kabwe.js","kapiri-mposhi":"./kapiri-mposhi/kapiri-mposhi.js","mkushi":"./mkushi/mkushi.js","mumbwa":"./mumbwa/mumbwa.js","nampundwe":"./nampundwe/nampundwe.js","serenje":"./serenje/serenje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
