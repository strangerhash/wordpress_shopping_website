<?php
if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly
}

global $wpdb, $current_user, $wpscfunction;

$params = $request->get_params();

//Get Ticket Id
$ticket_id = isset( $params['id'] ) ? sanitize_text_field($params['id']) : 0;

$response = array();

//Get Reply body
$body = isset($params['note_body']) ? wp_kses_post(htmlspecialchars_decode($params['note_body'], ENT_QUOTES)) : '';

// Attachments for reply description
$desc_attachment = isset($params['attachments']) && trim($params['attachments']) != '' ? json_decode($params['attachments']) : new stdClass();
$description_attachment = isset($desc_attachment->attachments) ? $wpscfunction->sanitize_array($desc_attachment->attachments) : array();
$attachments = array();
foreach ($description_attachment as $key => $value) {
  $attachment_id = intval($value);
  $attachments[] = $attachment_id;
  update_term_meta ($attachment_id, 'active', '1');
}

// Prepare arguments
$args = array(
  'ticket_id'      => $ticket_id,
  'reply_body'     => $wpscfunction->replace_macro($body,$ticket_id),
  'attachments'    => $attachments,
  'customer_name'  => $current_user->display_name,
  'customer_email' => $current_user->user_email,
  'thread_type'    => 'note'
);

$args = apply_filters( 'wpsc_thread_args', $args );

if ($body) {
  
    $thread_id = $wpscfunction->submit_ticket_thread($args);
    
    do_action( 'wpsc_after_submit_note', $thread_id, $ticket_id );
    
    $response = array(
  		'status' => 200,
  		'thread_id' =>  $thread_id
  	);
  
} else {
  
  $response = new WP_Error(
		'operation_failed',
		'Note not submitted.',
		array(
			'status' => 403,
		)
	);
  
}
