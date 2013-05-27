<?php
/**
* In which we jump through some hoops to make Drupal treat
* profiles/scf/switch.php just like the root-level index.php or update.php
*/
// remove '/profiles/scf' from current working directory and set our directory
$base_dir = substr(getcwd(), 0, -8); //xxx 8 is the length
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

if(! array_key_exists("nid", $_POST)){
	die("No node ID specified.");
}

$nid = $_POST["nid"];
if($nid > -1){
	$node = node_load($nid);

	if (node_access("update", $node)) {
		$node->field_model_data[LANGUAGE_NONE][0]['value'] = $_POST["data"];
		$node->changed = time();
		$node->title = $_POST["title"];
		$node->body[LANGUAGE_NONE][0]['value'] = $_POST["description"];
		$node->body[LANGUAGE_NONE][0]['format'] = 'filtered_html';
		#echo(print_r($node));
	
		$node->teaser = "";
		im_set_node_tags($node, explode(",", $_POST["tags"]));
		if(count($node->field_last_revision[LANGUAGE_NONE]) == 0 || time()-$node->field_last_revision[LANGUAGE_NONE][0]['value'] > 60){
			//Only create a new image and revision every minute
			$node->revision = 1;
			$file = im_graph_image($_POST["data"], $node->nid);
			$node->field_last_revision[LANGUAGE_NONE][0]['value'] = time();
			$node->field_image[LANGUAGE_NONE][0] = (array)$file;
		}
	    node_save($node);
	}else{
		die("You don't have access to this Insight.");
	}
	
	echo $node->nid;
	
}else{
    if (node_access("create", "insight")) {
		$node = new stdClass();
    	$node->title = $_POST["title"];
    	$node->body[LANGUAGE_NONE][0]['value'] = $_POST["description"];
		$node->body[LANGUAGE_NONE][0]['format'] = 'filtered_html';
    	$node->type = "insight";
    	$node->uid = $user->uid;
		$node->language = LANGUAGE_NONE;
    	$node->teaser = "";
    	$node->filter = 1;
    	$node->status = 1;
		$node->comment = 2;
    	$node->created = time();
    	$node->changed = time();
		$node->field_last_revision[LANGUAGE_NONE][0]['value'] = time();
    	$node->field_model_data[LANGUAGE_NONE][0]['value'] = $_POST["data"];
    	$now = microtime(true);
		im_set_node_tags($node, explode(",", $_POST["tags"]));
	    node_save($node);
		
		$file = im_graph_image($_POST["data"], $node->nid);
		$node->field_image[LANGUAGE_NONE][0] = (array)$file;
		node_save($node);
	
		echo $node->nid;
	}else{
		die("You don't have access to create Insights.");
	}
}

?>