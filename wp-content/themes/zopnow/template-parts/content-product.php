<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;
global $counter;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}

// get the discount value
$p_details = display_product_variant($product);
if ( $p_details !== false ) {
  $p_details = json_decode($p_details, true);
}

$cart_counter = get_product_count_in_cart($product->get_id())
?>
<div class="col-xl-2 col-lg-3 col-md-4 col-6 product-list-item-col">
    <div id="product_div_<?php echo $product->get_id() ?>" class="list-info">
        <?php 
		$productData = $product->get_data();
		$productUnitArray = explode('-',$productData['default_attributes']['pa_weight']);
		$pUnit = "";
		if(isset($productUnitArray[0])){
			$pUnit .= "-".$productUnitArray[0];
		}
		if(isset($productUnitArray[1])){
			$pUnit .= "-".$productUnitArray[1];
		}
		?>
        <!-- Cart counter -->
        <?php if ( $cart_counter > 0 ): ?>
          <div class="cart-counter" style="display: block">
            <span><?php echo sprintf("%d in cart", $cart_counter); ?></span>
          </div>
        <?php endif; ?>
        <?php 
		  $p_url = $product->get_id().'-'.$productData['slug'].$pUnit;
		  $terms = get_the_terms ( $product->get_id(), 'product_cat' );
		  $catslug = (isset($terms[0]->slug))?$terms[0]->slug:'';	
		?>
        <a href="javascript:void(0);" id="product_det_pop_<?php echo $product->get_id() ?>" onclick="showProductDetails('<?php echo $product->get_id() ?>','<?=$p_url;?>','<?php echo $productData['name'];?>','<?=$catslug;?>');" data-toggle="modal" data-target="#ProductDetails<?php echo $product->get_id() ?>" class="product-list" data-product-id="<?php echo $product->get_id() ?>">
          <div class="frntre-image">
          <?php if ( intval($p_details['discount_value']) > 0 ): ?>
            <div class="discount-label"><?php echo $p_details['discount'] ?></div>
          <?php endif; ?>
          <?php if(isset($counter) && $counter <= 3){?>
          <div class="offer-icon"><img style="width:85px;" src="<?php echo home_url();?>/wp-includes/images/time-icon.png" /></div>
          <?php } ?>
            <!-- <img src="/wp-content/uploads/2020/05/product2.jpg" alt="Grofers Mother's Choice Refined Sunflower Oil (Pouch)"> -->
            <?php do_action( 'woocommerce_before_shop_loop_item_title' ); ?>
          </div>
        </a>
          <div class="product-info">
            <!-- <h2 class="product-title"><?php // do_action( 'woocommerce_shop_loop_item_title' ); ?></h2> -->
            <?php do_action( 'woocommerce_shop_loop_item_title' ); ?>
            <div class="form-group">   

              <div class="woocommerce-variation single_variation p_alt">
                <div class="woocommerce-variation-description"></div>
                <div class="woocommerce-variation-price">
                  <span class="price">
                    <del>
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol">M.R.P.&nbsp;</span><?php echo $p_details['regular_price'] ?>
                      </span>
                    </del> 
                    <ins>
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol"><?php echo WF_CURRENCY; ?></span><?php echo $p_details['display_price'] ?>
                      </span>
                    </ins>
                  </span>
                </div>                
              </div>

              <?php do_action( 'woocommerce_after_shop_loop_item' ); ?>              
            </div>            
          </div>
    </div>
          <!-- Modal popup of the product -->
    <div class="modal modal-product-detail fade" id="ProductDetails<?php echo $product->get_id() ?>">
      
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-header">
              <button type="button" onclick="closeProductModel();" class="close" data-dismiss="modal">&times;</button>
              <input type="hidden" id="pro_slug_<?php echo $product->get_id() ?>" value="<?php echo $productData['slug'];?>" />
            </div>
            <div class="product-detail-wrap" data-product-id="<?php echo $product->get_id() ?>"></div>
        </div>
      </div>
    </div>
    
  </div>
</div>


