class VConsoleSenderPlugin {
  constructor(vConsole, url) {
    this.vConsole = vConsole;
    this.url = url;
    return this.init();
  }
  init () {
    // 使用import的方式, 添加构造函数
    if (!window.VConsole) {
      window.VConsole = this.vConsole.constructor
    }
    const vConsoleSender = new window.VConsole.VConsolePlugin("Sender","Sender");
    vConsoleSender.on("ready", () => {
      console.log('[vConsole-sender-plugin] -- load');
    });
    // 渲染iframe
    vConsoleSender.on("renderTab", (callback) => {
      const html = `<div class="vconsole-exportlog" style="position:absolute; top: 0;left:0;right:0;bottom:0;width:100%;min-height:100%">
        <iframe style="width:100%;height:100%" src="${this.url}"></iframe>
      </div>`;
      callback(html);
    });
    this.vConsole.addPlugin(vConsoleSender);
    return vConsoleSender;
  }
}

window.VConsoleSenderPlugin = VConsoleSenderPlugin;

export default VConsoleSenderPlugin
