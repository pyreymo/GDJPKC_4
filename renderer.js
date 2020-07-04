// jqready
$(function () {
  // 所有可访问页面的列表
  var domain_list = ["info", "exam", "teacher", "selected", "team"];

  // 网站的提示信息
  console.log(
    "%c欢迎访问厦门大学高等代数国家精品课程网站！\n前端使用反馈请联系网站负责人。",
    "font-family:'Microsoft YaHei';line-height:150%;color:#333;"
  );

  // 开始动画
  rect_gen($(".animation"));

  // 加载侧边栏
  $("#sidebar-container").empty();
  $("#sidebar-container").load("load_content.html #sidebar-content");
  mdui.mutation(); // 刷新 mdui 组件

  // （次要：）文件页 - 伸缩面板小标题的加粗
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

  // 响应加载
  (() => {
    var split_href = location.href.split("?")[1];
    domain = split_href.split("=")[0] == "m" ? split_href.split("=")[1] : "";
    console.log(domain);
    load_content(domain, () => mdui.mutation());
  })();

  function load_content(name) {
    // 加载网页内容
    $("#page-container").empty();
    domain = domain_list.includes(name) ? name : "404";
    $("#page-container").load(`load_content.html #${domain}`, () =>
      mdui.mutation()
    );

    // 更改网址后缀
    history.pushState(
      {
        m: domain,
      },
      domain,
      location.href.split("?")[0] + "?m=" + domain
    );

    // 输出跳转信息
    console.log(domain);
  }
});
