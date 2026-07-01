(function () {
  function toMarkdownLink(target, label) {
    var cleanTarget = target.trim();
    var cleanLabel = (label || cleanTarget).trim();

    if (!cleanTarget) return "";
    if (
      !/\.(md|html|pdf|png|jpg|jpeg|gif|webp|svg)$/i.test(cleanTarget) &&
      !/[#?]/.test(cleanTarget)
    ) {
      cleanTarget += ".md";
    }

    return "[" + cleanLabel + "](" + cleanTarget.replace(/\s+/g, "%20") + ")";
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(
    function (hook) {
      hook.beforeEach(function (content) {
        return content.replace(
          /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
          function (_, target, label) {
            return toMarkdownLink(target, label);
          }
        );
      });
    }
  );
})();
