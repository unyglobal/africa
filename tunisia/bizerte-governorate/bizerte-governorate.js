// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bizerte-governorate","repository":"africa","path":"tunisia/bizerte-governorate","depth":2,"parent":"tunisia","children":["bizerte","douar-tindja","el-alia","mateur","menzel-abderhaman","menzel-bourguiba","menzel-jemil","rass-el-djebel","tinja"]});
export const childModules = Object.freeze({"bizerte":"./bizerte/bizerte.js","douar-tindja":"./douar-tindja/douar-tindja.js","el-alia":"./el-alia/el-alia.js","mateur":"./mateur/mateur.js","menzel-abderhaman":"./menzel-abderhaman/menzel-abderhaman.js","menzel-bourguiba":"./menzel-bourguiba/menzel-bourguiba.js","menzel-jemil":"./menzel-jemil/menzel-jemil.js","rass-el-djebel":"./rass-el-djebel/rass-el-djebel.js","tinja":"./tinja/tinja.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
