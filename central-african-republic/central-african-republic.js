// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-african-republic","repository":"africa","path":"central-african-republic","depth":1,"parent":"","children":["bamingui-bangoran","bangui","basse-kotto","haut-mbomou","haute-kotto","kemo","lim-pende","lobaye","mambere","mambere-kadei","mbomou","nana-grebizi","nana-mambere","ombella-m-poko","ouaka","ouham","ouham-fafa","ouham-pende","sangha-mbaere"]});
export const childModules = Object.freeze({"bamingui-bangoran":"./bamingui-bangoran/bamingui-bangoran.js","bangui":"./bangui/bangui.js","basse-kotto":"./basse-kotto/basse-kotto.js","haut-mbomou":"./haut-mbomou/haut-mbomou.js","haute-kotto":"./haute-kotto/haute-kotto.js","kemo":"./kemo/kemo.js","lim-pende":"./lim-pende/lim-pende.js","lobaye":"./lobaye/lobaye.js","mambere":"./mambere/mambere.js","mambere-kadei":"./mambere-kadei/mambere-kadei.js","mbomou":"./mbomou/mbomou.js","nana-grebizi":"./nana-grebizi/nana-grebizi.js","nana-mambere":"./nana-mambere/nana-mambere.js","ombella-m-poko":"./ombella-m-poko/ombella-m-poko.js","ouaka":"./ouaka/ouaka.js","ouham":"./ouham/ouham.js","ouham-fafa":"./ouham-fafa/ouham-fafa.js","ouham-pende":"./ouham-pende/ouham-pende.js","sangha-mbaere":"./sangha-mbaere/sangha-mbaere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
