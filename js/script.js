$(function () {
  //GNB
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu-wrap');
  const $banner = $('.banner-slide');
  const $btnMenu = $('.btn-menu');
  const duration = 300;

  //마우스가 메뉴에 들어오면(mouseenter)
  $menu.on('mouseenter', function () {
    const menuIdx = $(this).index();
    $menu.removeClass('on').eq(menuIdx).addClass('on');
    $submenu.find('li').removeClass('on').eq(menuIdx).addClass('on');
    openMenu();
  });

  //마우스가 메뉴에 나가면(mouseleave)
  $header.on('mouseleave', function () {
    $menu.removeClass('on');
    $submenu.find('li').removeClass('on');
    closeMenu();
  });

  //메뉴 버튼을 클릭했을 때
  $btnMenu.on('click', openMenu);

  //메뉴의 동작을 함수로 정의
  function openMenu() {
    $header.addClass('active');
    $submenu.stop().fadeIn(duration);
    $banner.stop().fadeIn(duration);
  }
  function closeMenu() {
    $header.removeClass('active');
    $submenu.stop().fadeOut(duration);
    $banner.stop().fadeOut(duration);
  }

  //family site
  $('.family-site select').on('change', function () {
    const linkValue = $(this).val();
    window.open(linkValue);
  });
});
