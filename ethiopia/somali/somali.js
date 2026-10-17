// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"somali","repository":"africa","path":"ethiopia/somali","depth":2,"parent":"ethiopia","children":["arabi","chinahsen","degeh-bur","digih-habar-es","el-bahay","fadhigaradle","gedeb","gode","golwayn","hartishek","jijiga","kahandhale","kebri-dahar","lasoano","neefkuceliye","qorof","raqo","waal","warder","yamarugley"]});
export const childModules = Object.freeze({"arabi":"./arabi/arabi.js","chinahsen":"./chinahsen/chinahsen.js","degeh-bur":"./degeh-bur/degeh-bur.js","digih-habar-es":"./digih-habar-es/digih-habar-es.js","el-bahay":"./el-bahay/el-bahay.js","fadhigaradle":"./fadhigaradle/fadhigaradle.js","gedeb":"./gedeb/gedeb.js","gode":"./gode/gode.js","golwayn":"./golwayn/golwayn.js","hartishek":"./hartishek/hartishek.js","jijiga":"./jijiga/jijiga.js","kahandhale":"./kahandhale/kahandhale.js","kebri-dahar":"./kebri-dahar/kebri-dahar.js","lasoano":"./lasoano/lasoano.js","neefkuceliye":"./neefkuceliye/neefkuceliye.js","qorof":"./qorof/qorof.js","raqo":"./raqo/raqo.js","waal":"./waal/waal.js","warder":"./warder/warder.js","yamarugley":"./yamarugley/yamarugley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
