<?php
/**
* In which we jump through some hoops to make Drupal treat
* profiles/scf/switch.php just like the root-level index.php or update.php
*/
// remove '/profiles/scf' from current working directory and set our directory
$base_dir = substr(getcwd(), 0, -8); //xxx 8 is the lengt
chdir($base_dir);
// ini_set('include_path', '.:' . $base_dir); - use of ./ makes this not work
global $base_url;
// duplicated from bootstrap.inc conf_init().
    // Create base URL
    $base_root = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https' : 'http';

    // As $_SERVER['HTTP_HOST'] is user input, ensure it only contains
    // characters allowed in hostnames.
    $base_url = $base_root .= '://'. preg_replace('/[^a-z0-9-:._]/i', '', $_SERVER['HTTP_HOST']);

    // $_SERVER['SCRIPT_NAME'] can, in contrast to $_SERVER['PHP_SELF'], not
    // be modified by a visitor.
    if ($dir = trim(dirname($_SERVER['SCRIPT_NAME']), '\,/')) {
      $base_path = "/$dir";
      $base_url .= $base_path;
    }

$base_url = substr($base_url, 0, -8); //XXX 8 is the length

define('DRUPAL_ROOT', getcwd());
require_once './includes/bootstrap.inc';

// we need the $user variable, theming...  i think we have to go all the way
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL); // DRUPAL_BOOTSTRAP_CONFIGURATION

	
	$nid = $_GET["nid"];
	if (! $nid){
		$nid=-1;
	}else{
        db_merge('node_counter')
          ->key(array('nid' => $nid))
          ->fields(array(
            'daycount' => 1,
            'totalcount' => 1,
            'timestamp' => REQUEST_TIME,
          ))
          ->expression('daycount', 'daycount + 1')
          ->expression('totalcount', 'totalcount + 1')
          ->execute();
	}
	$logged_in = (!($user->uid == 0));
	$node = node_load($nid);
	
	if ($node==false && $nid != -1) {
		drupal_set_message(t('The specified Insight (ID: @nid) does not exist. Either the URL was entered incorrectly, or the Insight has been deleted by its author.', array('@nid'=>$nid)), 'error');
		drupal_goto('main');
		die();
	}
	
	if ($nid != -1 && (! node_access("view", $node))) {
		drupal_set_message(t('You do not have permission to view that Insight. The Insight\'s author can grant you access.'), 'error');
		drupal_goto('main');
		die();
	}
	
	if($nid == -1 && (! $logged_in)){
		drupal_set_message(t('You must log-in or register for a free account before creating a new Insight.'), 'warning');
		drupal_goto('user', array("query"=>array("destination"=>"insight/")));
		die();
	}
	
	$is_topBar = 1;
	if(array_key_exists('topBar', $_GET)){
		$is_topBar = $_GET["topBar"];
	}
	$is_sideBar = 1;
	if(array_key_exists('sideBar', $_GET)){
		$is_sideBar = $_GET["sideBar"];
	}
	$is_zoom = 1;
	if(array_key_exists('zoom', $_GET)){
		$is_zoom = $_GET["zoom"];
	}
	
	$is_editor = false;
	$is_embed = false;
	if(array_key_exists('embed', $_GET)){
		$is_embed = $_GET["embed"];
	}
	if ((! $is_embed==1) && ($nid==-1 || node_access("update", $node)) ) {
		$is_editor = true;
	}
	if(array_key_exists('editor', $_GET)){
		$is_editor = $_GET["editor"];
	}

?>