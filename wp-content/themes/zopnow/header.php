<?php
global $session;
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */
// echo current_time('H'); die;
$current_user = wp_get_current_user();
// printf( __( 'User first name: %s', 'textdomain' ), esc_html( $current_user->user_firstname ) ) . '<br />';
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<input type="hidden" id="baseurl" name="baseurl" value="<?php echo home_url(); ?>" />
<style>*{visibility: hidden}</style>
<?php wp_head(); ?>
<?php add_keywords() ?>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5ecb874fc75cbf1769ef0e9a/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
  <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '973811399782258');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=973811399782258&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<?php //print_r($_SERVER['REQUEST_URI']); ?>
<?php 
date_default_timezone_set("Asia/Kolkata");
$currentTime  = date('H');
$defultData  = date('M d, Y 12:00:00');
if($currentTime >= 12){
	$defultData  = date('M d, Y 00:01:00',strtotime(' +1 day'));
}
?>
<script>
var currentPageUrl = '<?php echo $_SERVER['REQUEST_URI']; ?>';
function showProductDetails(productID,productSlug,productName,catslug){
	var title = productName;
	var url = productSlug;
	var hasfront = '<?=(is_front_page())?"Yes":"0";?>';
	if(hasfront == 'Yes'){
		var url = 'c/'+catslug+'/'+productSlug;
		//var url = '/home/'+productSlug;
	}
	jQuery('#ProductDetails'+productID).find('.product-detail-wrap').html('<div style="text-align:center;min-height:200px;display:flex;align-items:center;"><img style="margin: 0 auto;" src="<?=site_url();?>/wp-content/themes/zopnow/assets/images/ajax-loader.gif" alt="Ajax Loader" /></div>');
	jQuery.ajax({
		type: "POST",
		url: ajax_request_url,
		data: { action: 'ajax_prod_detail' , productID: productID,productName:productName,productSlug:productSlug}
	  }).done(function(msg){					 
			 if(msg.response != 'N'){
				jQuery('#ProductDetails'+productID).find('.product-detail-wrap').html(msg.response);
			 }else{
			    jQuery('#ProductDetails'+productID).find('.product-detail-wrap').html(msg.response);
			 }
			 
			 $('#activeProductId').val(productID);
			 if (typeof (history.pushState) != "undefined") {
				var obj = { Title: title, Url: url };
				history.pushState(obj, obj.Title, obj.Url);
			 } else {
				alert("Browser does not support HTML5.");
			 }
			 $('#activeProductId').val('');			 
			 
	});
		
	

}
function closeProductModel(){
	var title = 'A';
	var url = currentPageUrl;
	$('#activeProductId').val('0');
	var obj = { Title: title, Url: url };
     history.pushState(obj, obj.Title, obj.Url);
}
// Set the date we're counting down to
var countDownDate = new Date("<?php echo $defultData;?>").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if(hours <= 9){ hours = '0'+hours;}
  if(minutes <= 9){ minutes = '0'+minutes;}
  if(seconds <= 9){ seconds = '0'+seconds;}

  // Display the result in the element with id="demo"
  document.getElementById("timer-header").innerHTML = 'SALE Ends In '+hours + ":"
  + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>
<style>
.offer-icon{
	position: absolute;
    top:0px;
    right:0px;
    z-index: 1;
}
.timer-header{    
	    background: #f24c51;
    margin: 0 auto;
    color: #FFF;
    padding: 7px 13px;
    border-radius: 0 0 6px 6px;}
</style>
<?php /*<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-186085668-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-186085668-1');
</script>*/?>

<!-- Global site tag (gtag.js) - Google Ads: 586359184 -->
<?php /*<script async src="https://www.googletagmanager.com/gtag/js?id=AW-586359184"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-586359184');
</script>*/?>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-186085668-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-186085668-1');
</script>
</head>

<body <?php body_class(); ?>>
<!-- Frntre Topbar -->
<section class="frntre-topbar 1">
  <div class="row align-items-center">
    <div class="col-md-6">
      <div class="frntre-column">
        <a href="<?php the_field('header_top_bar_text_link', 'option') ?>" class="explore-products"><?php the_field('headr_top_bar_text', 'option') ?></a>
      </div>
    </div>
    <div class="col-md-6 col-dsktp-tblt">
      <div class="frntre-column textright">
        <a href="javascript:void(0);" class="shipping-details" data-toggle="modal" data-target="#ShippingReturns">Shipping Details*</a>
      </div>
    </div>
  </div>
</section>
<section class="frntre-topbar">
  <div class="row align-items-center">
    
      <div id="timer-header" class="timer-header"></div>

  </div>
</section>

<!-- Frntre Header -->
<header class="frntre-header">
  <div class="container">
    <div class="row align-items-center header-middle">
      <div class="col-xl-7 col-md-9 col-7">
        <a href="<?php echo get_home_url() ?>" class="frntre-brand"><img src="https://ik.imagekit.io/gro/logo.png" alt="Zopnow" width="150"></a>
        <div class="frntre-search dropdown" id="site_search">
          <?php if ( function_exists( 'aws_get_search_form' ) ) { aws_get_search_form(); } ?>
        </div>
      </div>
      <div class="col-xl-5 col-md-3 col-5 header-right">
        <ul class="user-menus-wrap">
          <li data-hovers="AccountOrders">
            <?php if ( !is_user_logged_in() ): ?>
              <a href="javascript:void(0);" data-toggle="modal" data-target="#LoginSignup">
            <?php else: ?>
              <a href="<?php echo wc_get_page_permalink( 'myaccount' ); ?>">
            <?php endif; ?>
              <svg viewBox="0 0 28 28" class="frntre-icon" style="width: 30px; height: 30px;">
                <path d="M14 5a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-3.65 15v-1.71a2.43 2.43 0 0 1 2.43-2.42h2.44a2.43 2.43 0 0 1 2.43 2.42V20a6.93 6.93 0 0 1-7.3 0zM14 13.51a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58zm5.63 4.63a4.41 4.41 0 0 0-3-4 3.32 3.32 0 0 0 .62-1.91 3.29 3.29 0 0 0-6.58 0 3.32 3.32 0 0 0 .62 1.91 4.41 4.41 0 0 0-3 4A6.92 6.92 0 0 1 7 14a7 7 0 0 1 14 0 6.92 6.92 0 0 1-1.37 4.14z"></path>
              </svg>
              <span class="user-menu">
                <?php if ( !is_user_logged_in() ): ?>
                  Sign-in | Register
                  <span>Sign In</span>
                <?php else: ?>
                  My Account &amp; Orders
                  <span><?php echo $current_user->user_email ?></span>
                <?php endif; ?>
              </span>
            </a>
            <!-- <div class="account-popup" data-hover-popup="AccountOrders">
              <h2>Welcome</h2>
              <ul>
                <?php if ( !is_user_logged_in() ): ?>
                  <li>
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#LoginSignup">
                      <svg viewBox="0 0 28 28" class="frntre-icon">
                        <path d="M14 5a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-3.65 15v-1.71a2.43 2.43 0 0 1 2.43-2.42h2.44a2.43 2.43 0 0 1 2.43 2.42V20a6.93 6.93 0 0 1-7.3 0zM14 13.51a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58zm5.63 4.63a4.41 4.41 0 0 0-3-4 3.32 3.32 0 0 0 .62-1.91 3.29 3.29 0 0 0-6.58 0 3.32 3.32 0 0 0 .62 1.91 4.41 4.41 0 0 0-3 4A6.92 6.92 0 0 1 7 14a7 7 0 0 1 14 0 6.92 6.92 0 0 1-1.37 4.14z"></path>
                      </svg>
                      <span class="user-menu">My Account</span>
                    </a>
                  </li>
                <?php else: ?>
                  <li>
                    <a href="<?php echo wc_get_page_permalink( 'myaccount' ); ?>">
                      <svg viewBox="0 0 28 28" class="frntre-icon">
                        <path d="M14 5a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-3.65 15v-1.71a2.43 2.43 0 0 1 2.43-2.42h2.44a2.43 2.43 0 0 1 2.43 2.42V20a6.93 6.93 0 0 1-7.3 0zM14 13.51a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58zm5.63 4.63a4.41 4.41 0 0 0-3-4 3.32 3.32 0 0 0 .62-1.91 3.29 3.29 0 0 0-6.58 0 3.32 3.32 0 0 0 .62 1.91 4.41 4.41 0 0 0-3 4A6.92 6.92 0 0 1 7 14a7 7 0 0 1 14 0 6.92 6.92 0 0 1-1.37 4.14z"></path>
                      </svg>
                      <span class="user-menu">My Account</span>
                    </a>
                  </li>
                <?php endif; ?>
                <?php if ( !is_user_logged_in() ): ?>
                <li>
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#LoginSignup">
                    <svg viewBox="0 0 28 28" class="frntre-icon">
                      <path d="M23.71 6.59a1 1 0 0 0-1.06-.24L15.45 9a1 1 0 0 0-.58.56l-1.44 3.57-3.78-1.37 4.7-1.76a1 1 0 0 0 .54-1.38l-1.8-3.58a1 1 0 0 0-1.24-.49l-7.2 2.7a1 1 0 0 0-.58.57 1 1 0 0 0 0 .81L5.8 12v7.82a1 1 0 0 0 .65.93l7.15 2.69a1 1 0 0 0 .35.06 1 1 0 0 0 .53-.14l7-2.61a1 1 0 0 0 .65-.93V12l1.73-4.3a1 1 0 0 0-.15-1.11zm-7.15 4.16L21.23 9l-.79 2-4.67 1.75zm-4.85-4l.9 1.79-5.32 2-.9-1.8zM13 21.08l-5.2-1.95V13.2l5.2 1.94zm2 0v-5.94l5.2-1.94v5.93z"></path>
                    </svg>
                    <span class="user-menu">My Orders</span>
                  </a>
                </li>
                <?php else: ?>
                  <li>
                    <a href="<?php echo wc_get_endpoint_url( 'orders', '', wc_get_page_permalink( 'myaccount' ) ); ?>">
                      <svg viewBox="0 0 28 28" class="frntre-icon">
                        <path d="M23.71 6.59a1 1 0 0 0-1.06-.24L15.45 9a1 1 0 0 0-.58.56l-1.44 3.57-3.78-1.37 4.7-1.76a1 1 0 0 0 .54-1.38l-1.8-3.58a1 1 0 0 0-1.24-.49l-7.2 2.7a1 1 0 0 0-.58.57 1 1 0 0 0 0 .81L5.8 12v7.82a1 1 0 0 0 .65.93l7.15 2.69a1 1 0 0 0 .35.06 1 1 0 0 0 .53-.14l7-2.61a1 1 0 0 0 .65-.93V12l1.73-4.3a1 1 0 0 0-.15-1.11zm-7.15 4.16L21.23 9l-.79 2-4.67 1.75zm-4.85-4l.9 1.79-5.32 2-.9-1.8zM13 21.08l-5.2-1.95V13.2l5.2 1.94zm2 0v-5.94l5.2-1.94v5.93z"></path>
                      </svg>
                      <span class="user-menu">My Orders</span>
                    </a>
                  </li>
                <?php endif; ?>
                <?php if ( !is_user_logged_in() ): ?>
                  <li><a href="javascript:void(0);" data-toggle="modal" data-target="#LoginSignup" class="btn btn-danger">Sign In or Create an Account</a></li>
                <?php endif; ?>
              </ul>
            </div> -->
          </li>          
          <li class="right-align" data-hover="Cart" id="mini_cart">
            <a href="javascript:void(0);">
              <svg viewBox="0 0 28 28" class="frntre-icon" style="width: 30px; height: 30px;">
                <path d="M20.86 18.14H10.19l.91-1.31h9.76a1 1 0 0 0 1-.83L23 9.38a1 1 0 0 0-.23-.81 1 1 0 0 0-.77-.36H9.63l-.38-1.46a1 1 0 0 0-1-.75H6a1 1 0 1 0 0 2h1.51l2 7.64-2 2.93a1 1 0 0 0-.06 1 1 1 0 0 0 .89.53h.46a1.38 1.38 0 1 0 2.4 0h6.74a1.47 1.47 0 0 0-.17.66 1.38 1.38 0 1 0 2.57-.66h.52a1 1 0 1 0 0-2v.04zm-.05-7.93L20 14.83h-8.65l-1.2-4.62h10.66z"></path>
              </svg>
              <div class="cart-badge"><?php echo WC()->cart->get_cart_contents_count(); ?></div>
              <!-- <span class="user-menu">Cart</span> -->
            </a>
            <div class="cart-popup" data-hover-popup="Cart">              
              <?php woocommerce_mini_cart() ?>
              <?php // echo do_shortcode( '[custom-techno-mini-cart]' ); ?>              
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<!-- Frntre Nav -->
<nav class="frntre-nav">
<?php
					wp_nav_menu( array(
						'theme_location' => 'menu-1', // Defined when registering the menu
						'menu_id'        => 'primary-menu',
						'container'      => false,
						'depth'          => 2,
						'menu_class'     => '',
						'walker'         => new Wayfair_Menu_Walker(), // This controls the display of the Bootstrap Navbar
					) );
					?>
  <!-- <ul>
    <li>
      <a href="#0"><span class="menu-text">Best Deals</span></a>
    </li>
    <li>
      <a href="#0"><span class="menu-text">Fruits &amp; Vegetables</span></a>
    </li>
    <li data-hover="CookingEssentials">
      <a href="#0"><span class="menu-text">Cooking Essentials</span></a>
      <ul data-hover-popup="CookingEssentials">
        <li>
          <div class="menu-item has-menu">
            <ul>
              <li><a href="#0">Dals</a></li>
              <li><a href="#0">Atta and Flours</a></li>
              <li><a href="#0">Oil and Ghee</a></li>
              <li><a href="#0">Sugar</a></li>
              <li><a href="#0">Rice</a></li>
              <li><a href="#0">Salt, Spices and Masala</a></li>
              <li><a href="#0">Nuts and Dry Fruit</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li data-hover="SnacksBeverages">
      <a href="#0"><span class="menu-text">Snacks & Beverages</span></a>
      <ul data-hover-popup="SnacksBeverages">
        <li>
          <div class="menu-item">
            <ul>
              <li><a href="#0">Biscuits</a></li>
              <li><a href="#0">Snacks</a></li>
              <li><a href="#0">Tea and Coffee</a></li>
              <li><a href="#0">Fruit Juices &amp; Cold Drinks</a></li>
              <li><a href="#0">Health &amp; Energy Drinks</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li data-hover="PackagedFoods">
      <a href="#0"><span class="menu-text">Packaged Foods</span></a>
      <ul data-hover-popup="PackagedFoods">
        <li>
          <div class="menu-item">
            <ul>
              <li><a href="#0">Breakfast Foods</a></li>
              <li><a href="#0">Sauces and Spreads</a></li>
              <li><a href="#0">Ready Meals and Mixes</a></li>
              <li><a href="#0">Noodles and Pasta</a></li>
              <li><a href="#0">Sweets and Chocolates</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li data-hover="HouseholdPets">
      <a href="#0"><span class="menu-text">Household &amp; Pets</span></a>
      <ul data-hover-popup="HouseholdPets">
        <li>
          <div class="menu-item">
            <ul>
              <li><a href="#0">Laundry</a></li>
              <li><a href="#0">Kitchen Cleaning</a></li>
              <li><a href="#0">Household Cleaners</a></li>
              <li><a href="#0">Cleaning Tools</a></li>
              <li><a href="#0">Pets Care</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li data-hover="PersonalCareBaby">
      <a href="#0"><span class="menu-text">Personal Care &amp; Baby</span></a>
      <ul data-hover-popup="PersonalCareBaby">
        <li>
          <div class="menu-item">
            <ul>
              <li><a href="#0">Hair care</a></li>
              <li><a href="#0">Body Cleansing</a></li>
              <li><a href="#0">Shaving and Hair removal</a></li>
              <li><a href="#0">Feminine Hygiene</a></li>
              <li><a href="#0">Baby Care</a></li>
              <li><a href="#0">Sexual Wellness</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li data-hover="SkinCare">
      <a href="#0"><span class="menu-text">Skin Care</span></a>
      <ul data-hover-popup="SkinCare">
        <li>
          <div class="menu-item">
            <ul>
              <li><a href="#0">Hand Sanitiser</a></li>
              <li><a href="#0">Body Care</a></li>
              <li><a href="#0">Face Care</a></li>
              <li><a href="#0">Deodorants &amp; Fragrances</a></li>
              <li><a href="#0">Make Up</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <a href="#0"><span class="menu-text">Eggs, Meat &amp; Fish</span></a>
    </li>
  </ul> -->
</nav>

<!-- TOP PRIORITY -->
<?php if ( is_home() || is_front_page() ): ?>
  <div class="top-priority" id="top-priority">
    <?php if ( get_field('home_page_top_priority_image', 'option') ): ?>
          <img src="<?php the_field('home_page_top_priority_image', 'option') ?>">
    <?php endif; ?>
  </div>
<?php endif; ?>

<!-- Notifications -->
<div id="wf-notifications">
    <div class="wrapper">
            <?php if ( intval(current_time('H')) < 12 ): ?>
              <p><?php echo _e('Order in <span data-mode="noon" data-counter-limit="' . date('d M Y h:i:s A', strtotime('12:00:00 PM')) . '" id="clockdiv">00:00:00</span> and get it as soon as by <strong>Tomorrow.</strong>') ?></p>
            <?php else: ?>
              <p><?php echo _e('Order in <span data-mode="night" data-counter-limit="' . date('d M Y h:i:s A', strtotime('12:00:00 AM')) . '" id="clockdiv">00:00:00</span> and get it as soon as by') ?> <strong><?php echo date('l', strtotime(date('l') . " +2 days")) ?> <?php echo date('d M', strtotime(date('l') . " +2 days")) ?></strong>.</p>
            <?php endif; ?>
    </div>
</div>

