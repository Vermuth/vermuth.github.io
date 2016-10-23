$(function() {
  function VK_Widget_Init(){
    document.getElementById('vk_groups').innerHTML = "";

    var vk_width = document.getElementById('vk_groups').clientWidth;
    // var vk_width = document.getElementById('vk_widget').clientWidth;

    VK.Widgets.Group("vk_groups", {
      mode: 2,
      width: vk_width,
      height: "500",
    }, 51047651);
  };

  window.addEventListener('load', VK_Widget_Init, false);
  window.addEventListener('resize', VK_Widget_Init, false);
});
