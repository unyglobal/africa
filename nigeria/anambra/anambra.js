// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anambra","repository":"africa","path":"nigeria/anambra","depth":2,"parent":"nigeria","children":["agulu","atani","awka","enugu-ukwu","igbo-ukwu","ihiala","nkpor","nnewi","onitsha","ozubulu","uga"]});
export const childModules = Object.freeze({"agulu":"./agulu/agulu.js","atani":"./atani/atani.js","awka":"./awka/awka.js","enugu-ukwu":"./enugu-ukwu/enugu-ukwu.js","igbo-ukwu":"./igbo-ukwu/igbo-ukwu.js","ihiala":"./ihiala/ihiala.js","nkpor":"./nkpor/nkpor.js","nnewi":"./nnewi/nnewi.js","onitsha":"./onitsha/onitsha.js","ozubulu":"./ozubulu/ozubulu.js","uga":"./uga/uga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
