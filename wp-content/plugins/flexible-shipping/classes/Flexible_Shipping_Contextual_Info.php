<?php
/**
 * Contextual info.
 *
 * @package Contextual Info
 */

/**
 * Can add contextual info script to admin footer.
 */
class Flexible_Shipping_Contextual_Info implements \FSVendor\WPDesk\PluginBuilder\Plugin\Hookable {

	/**
	 * .
	 *
	 * @var string
	 */
	private $html_elements_ids;

	/**
	 * .
	 *
	 * @var string
	 */
	private $info_id;

	/**
	 * .
	 *
	 * @var array
	 */
	private $phrases;

	/**
	 * .
	 *
	 * @var string
	 */
	private $info_html;

	/**
	 * Flexible_Shipping_Contextual_Info constructor.
	 *
	 * @param string $html_elements_ids Comma separated HTML element IDs to add contextual info.
	 * @param string $info_id Info element ID.
	 * @param array  $phrases Phrases to display contextual info.
	 * @param string $info_html HTML code to display as info.
	 */
	public function __construct( $html_elements_ids, $info_id, array $phrases, $info_html ) {
		$this->html_elements_ids = $html_elements_ids;
		$this->info_id           = $info_id;
		$this->phrases           = $phrases;
		$this->info_html         = $info_html;
	}

	/**
	 * Hooks.
	 */
	public function hooks() {
		add_action( 'admin_footer', array( $this, 'add_contextual_info_script' ) );
	}

	/**
	 * Add contextual info script.
	 */
	public function add_contextual_info_script() {
		$html_elements_ids = '#' . implode( ',#', explode( ',', $this->html_elements_ids ) );
		$info_id           = $this->info_id;
		$phrases           = $this->phrases;
		$info_html         = $this->info_html;
		include __DIR__ . '/views/contextual-info-script.php';
	}

}
