// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"river-nile","repository":"africa","path":"sudan/river-nile","depth":2,"parent":"sudan","children":["ad-damir","atbara","berber","el-bauga","shendi"]});
export const childModules = Object.freeze({"ad-damir":"./ad-damir/ad-damir.js","atbara":"./atbara/atbara.js","berber":"./berber/berber.js","el-bauga":"./el-bauga/el-bauga.js","shendi":"./shendi/shendi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
