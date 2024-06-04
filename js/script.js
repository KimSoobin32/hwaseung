$(function () {
  //GNB
  const $window = $(window);
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu-wrap');
  const $banner = $('.banner-slide');
  const $btnMenu = $('.btn-menu');
  const duration = 300;

  //모바일
  const $btnMmenu = $('.btn-m-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');

  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubMenu = $('.m-gnb-sub');

  //모바일용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find($mGnbSubMenu).stop().slideToggle();
    $(this).siblings().find($mGnbSubMenu).stop().slideUp(duration);
  });

  $btnMmenu.on('click', function () {
    $mSubmenu.addClass('active');
    $dim.fadeIn(duration);
  });

  $btnClose.add($dim).on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);

    //모바일 용 서브메뉴 초기화
    $mGnbMenu.removeClass('on');
    $mGnbSubMenu.stop().slideUp(duration);
    // 열려있던거 닫음
  });

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

  let scrollTop = $window.scrollTop(); /* 윈도우의 스크롤 값 */
  //비주얼 영역의 세로크기 저장
  setWhiteBackground();

  function setWhiteBackground() {
    const visualHeight = $('.visual').outerHeight(); /* 비주얼 값도 갱신되게 함 */
    //두 값을 비교(스크롤값이 비주얼 영역의 세로보다 크다면 = 비주얼 영역을 지난다)
    if (scrollTop >= visualHeight) {
      $header.addClass('w-bg');
    } else {
      $header.removeClass('w-bg');
    }
  }

  $window.on('resize', setWhiteBackground);

  //스크롤 이벤트
  $window.on('scroll', function () {
    //얼마나 스크롤이 되었는지 값을 구해서 저장
    scrollTop = $(this).scrollTop();
    setWhiteBackground();
    // console.log(scrollTop, visualHeight);
  });

  //언어 선택
  $('.btn-lang').on('click', function () {
    $('.lang-select').stop().slideToggle(duration);
  });

  //family site
  $('.family-site select').on('change', function () {
    const linkValue = $(this).val();
    window.open(linkValue);
  });

  //AOS.js
  AOS.init({
    duration: 600,
    offset: 200,
  });

  //지속가능경영 슬라이더
  const managementList = new Swiper('.management-list', {
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1, //가로크기 675px을 위해 (=> 전체크기2700/4)
    centeredSlides: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    breakpoints: {
      //뷰포트가 1024 이상일 때
      1024: {
        slidesPerView: 4,
      },
    },
  });
});
