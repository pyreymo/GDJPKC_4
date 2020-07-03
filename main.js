$(function () {
  // 网站的提示信息
  console.log("欢迎访问厦门大学高等代数国家精品课程网站！");

  // 开始动画
  rect_gen($(".animation"));

  // 伸缩面板小标题的加粗
  $(".mdui-panel-item").each((index, element) => {
    element.addEventListener("open.mdui.panel", function () {
      e = $(element).children().filter(".mdui-panel-item-header");
      e.css({
        "font-weight": "bold",
      });
      e.toggleClass("main-theme-color");
    });
    element.addEventListener("close.mdui.panel", function () {
      e = $(element).children().filter(".mdui-panel-item-header");
      e.css({
        "font-weight": "normal",
      });
      e.toggleClass("main-theme-color");
    });
  });
});
