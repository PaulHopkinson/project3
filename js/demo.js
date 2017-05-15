$(function () {

  $('body').append('<link rel="stylesheet" href="http://www.queness.com/assets/css/demo.css" />');


  var tm_ads = [
            [
                'monstroid.png', 
                'Monstroid - WordPress Theme On Steroids',
                'http://www.templatemonster.com/wordpress-themes/monstroid/?utm_source=queness&utm_medium=banner&utm_campaign=QMbanners',
                'Monstroid WP'
            ], 
            [
                'intense.jpg', 
                'Intense Multipurpose HTML5 template',
                'http://www.templatemonster.com/demo/58888.html?utm_source=queness&utm_medium=banner&utm_campaign=QMbanners',
                'Intense'
            ], 
            [
                '3000psd.jpg', 
                '3000+ PSD Templates',
                'http://www.templatemonster.com/psd-templates.php?utm_source=queness&utm_medium=banner&utm_campaign=QMbanners',
                '3000+ PSD'
            ]];

    var tm_ads_no = getRandomInt(0,2);
  
  
  var html = '\
  <div id="demo-side">\
    <a href="#" id="btn-close-demo"></a>\
      <div class="demo-side-wrapper">\
        <div class="demo-detail">\
          <h1>{TITLE}</h1>\
          <div class="demo-content">{CONTENT}\
            <p><a target="_blank" href="{TUTORIAL_LINK}" class="btn btn-view btn-demo-view">View Tutorial</a>\
              <a href="{DEMO_LINK}" class="btn btn-view btn-demo">Next Demo</a></p>\
          </div>\
        </div>\
        <div class="demo-unit">\
          <a target="_blank" data-value="' + tm_ads[tm_ads_no][3] + '" href="' + tm_ads[tm_ads_no][2] + '" class="ga-track"><img src="http://www.queness.com/assets/unit/' + tm_ads[tm_ads_no][0] + '" alt="' + tm_ads[tm_ads_no][1] + '" /></a>\
        </div>\
        <div class="demo-unit">\
          <a target="_blank" href="https://tests4geeks.com" onclick="ga(\'q.send\', \'event\', \'Geek_Demo\', \'click\', \'banner\');"><img src="http://www.queness.com/assets/unit/tests4geeks.gif"></img></a>\
        </div>\
        <div class="demo-unit">\
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\
          <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-2490016011782126" data-ad-slot="9354101034"></ins>\
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>\
        </div>\
      </div>\
    </div>';
  
  html = html.replace(/{TITLE}/, title);
  html = html.replace(/{CONTENT}/, content);
  html = html.replace(/{TUTORIAL_LINK}/, url);
  
  // Add the sidebar
  $('body').append(html);
  
  // Resize sidebar height
  var demoResizeTimer;
  resizeHeightDemo();
  
  $(window).resize(function() {
    clearTimeout(demoResizeTimer);
    setTimeout(function () { resizeHeightDemo(); }, 1000);
  });
  
  function resizeHeightDemo() {
    $('#demo-side .demo-side-wrapper').height($(window).height());
  }
  
  try {
    $('body').on('click', '#btn-close-demo', function () {
      toggleDemoSide();
    });    
    $('body').on('click', '.ga-track', function () {
      ga('send', 'event', 'Ads-Demo', 'click', $(this).data('value'));
    });
  } catch (e) {  // old jQuery
    $('#btn-close-demo').live('click', function () {
      toggleDemoSide();
    });
    $('.ga-track').live('click', function () {
      ga('send', 'event', 'Ads-Demo', 'click', $(this).data('value'));
    });    
  }
  
  function toggleDemoSide() {
    if ($('#demo-side').hasClass('demo-hide')) {
      $('#demo-side').removeClass('demo-hide'); 
    } else {
      $('#demo-side').addClass('demo-hide');  
    }    
  }
  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

});

// Google Analytic

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-7781887-1', 'auto');
ga('send', 'pageview');

// new tracking code
ga('create', 'UA-74597042-1', {'name': 'q'});
ga('q.send', 'pageview');