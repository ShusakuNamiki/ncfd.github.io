$(document).ready(function() {
  $('.waterfall-image').animate({
    top: '100%',
    opacity: 1
  }, 2000, 'linear', function() {
    // アニメーション終了後の処理 (必要であれば)
  });
});
