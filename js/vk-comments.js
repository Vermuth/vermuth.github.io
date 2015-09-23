$(function() {
  VK.init({apiId: 5080735, onlyWidgets: true});
  VK.Widgets.Comments("vk_comments", {limit: 10, width: "800", attach: "*"});
});