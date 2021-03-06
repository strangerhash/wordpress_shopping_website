<?php

use FSVendor\WPDesk\ABTesting\ABVariant;

class WPDesk_Flexible_Shipping_AB_Variant_With_Contact_Information_On_Top implements ABVariant {

	/**
	 * Define a new value for the generated variant
	 *
	 * @var int
	 */
	const VARIANT_ID = 10;

	/**
	 * Is on?
	 *
	 * @param string $functionality Functionality.
	 *
	 * @return bool
	 */
	public function is_on( $functionality ) {
		return WPDesk_Flexible_Shipping_AB_Deactivation_Contact_Information::CONTACT_INFORMATION_ON_TOP === $functionality;
	}

	/**
	 * Get variant id.
	 *
	 * @return int|string
	 */
	public function get_variant_id() {
		return self::VARIANT_ID;
	}

}
