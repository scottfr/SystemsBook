<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
	
    <title><?php if($nid>-1){
		echo htmlentities(strip_tags($node->title))." | Insight Maker";
	}else{
		echo "Insight Maker";
}?></title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 

	<meta http-equiv="X-UA-Compatible" content="chrome=IE8">
	
  <!--[if lte IE 8]>
		  
  <script type="text/javascript" 
     src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js">
			 
    </script>

    <style>
     /* 
      CSS rules to use for styling the overlay:
        .chromeFrameOverlayContent
        .chromeFrameOverlayContent iframe
        .chromeFrameOverlayCloseBar
        .chromeFrameOverlayUnderlay
     */
    </style> 

  <script type="text/javascript" >
  
  alert("You are using an old version of Internet Explorer that does not support Insight Maker.\n\nTo run Insight Maker either:\n\n* Update your copy of Internet Explorer to version 9 or newer.\n* Use a different web browser (we recommend Google Chrome).\n* Install the Chrome Frame browser plug-in for Internet Explorer (you will be prompted to do this after closing this message).\n\nEither of these three options will allow you to run Insight Maker.");
  
	 window.attachEvent("onload", function() {
	        CFInstall.check({
	          mode: "inline", // the default
	          node: "prompt"
	        });
	      });
			 
    </script>
	<![endif]-->
	
 
 <link rel="stylesheet" type="text/css" href="/builder/resources/framewarp/framewarp.css" />
 	<link rel="stylesheet" type="text/css" href="/builder/resources/ext/resources/css/ext-all-gray.css" />
 	

	<meta name="keywords" content="system dynamics, systems thinking, simulation, complexity, visual modeling, environment, modeling, modelling, model, simulate" />
	<meta name="description" content="<?php if($nid>-1){
			echo htmlentities(html_entity_decode(strip_tags( preg_replace('/(<br>|<\/p>)/i'," ", $node->body[LANGUAGE_NONE][0]['value']) )));
		}else{	
			echo "Develop and run System Dynamics simulation models in your web browser. No download necessary.";
		}?>" />

	<link rel="shortcut icon" href="/builder/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" type="text/css" href="/builder/css/BoxSelect.css" />
	<link rel="stylesheet" type="text/css" href="/builder/css/insighteditor.css" />
	
	<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script><script type="text/javascript">try{stLight.options({publisher:'da2cd4bd-9b31-489c-90a9-64291ed98633'});}catch(err){}</script>


</head>
<body onbeforeunload="return confirmClose();">
	

<div id="loading-mask"></div>
<div id="loading">
  <div class="loading-indicator">

	  <?php if($nid>-1){ ?>
		  <div style="text-align:justify;border-style: double;padding:1em;color: #000;">
		  <center><big style="font-variant: small-caps;font-family: Georgia, Times, serif;"><big><?php echo htmlentities(strip_tags($node->title))?></big></big><br/><br/></center>
		  <? 
		  $noDesc = trim(strip_tags($node->body[LANGUAGE_NONE][0]['value']))=="";
		  
		  if($noDesc){ print "<center>";}
	   
  	 	if(file_exists("public://insights/$nid.jpg")){
	   	    $imagePath = "/sites/default/files/insights/$nid.jpg";
		   list($width, $height, $type, $attr) = getImageSize("public://insights/$nid.jpg");
		   if($noDesc){
		  	 $scale = min(500/$width, 400/$height);
		   }else{
		  	 $scale = min(250/$width, 250/$height);
		   }
		   $scale = min($scale, 1);
		   $width = $scale*$width;
		   $height = $scale*$height;
		   
		  ?>
		  <img src="/sites/default/files/insights/<?=$nid?>.jpg" style="float:left;padding-right:1em;padding-bottom:.5em;" width=<?=$width?> height=<?=$height?>/>
		  <?}else{?>
			  <img src="/sites/default/files/insight.jpg" style="float:left;padding-right:1em;padding-bottom:.5em;" />
		  <?}
		  
		  if($noDesc){ print "</center>";}
		  ?>
		  
		  <?php echo preg_replace('/XXXBREAKXXX/', '<br/>',htmlentities(html_entity_decode(strip_tags(preg_replace('/(<br>|<\/p>|<li>)/i',"XXXBREAKXXX", $node->body[LANGUAGE_NONE][0]['value']))))); ?>
		  <br style="clear:both"/>
		  <hr>
		  <center>
	      Loading Insight Maker...
	  	<br/><p>
	  	<img src="/builder/images/loading.gif" width=54 height=55/></p><br/>
	  	(This may take a few moments)
		</center>
		 </div>
	<?php }else{ ?>
      Loading Insight Maker...
  	<br/><p>
  	<img src="/builder/images/loading.gif" width=54 height=55/></p><br/>
  	(This may take a few moments)
	<?}?>

  </div>
</div>
<div id="toplinks-holder" name="toplinks-holder"></div>

<script type="text/javascript" src="/builder/resources/ext/ext-all.js"></script>

<script type="text/javascript">
		<?php 
		//print_r($node);
		function encodeDrupal($item){
			if(is_null($item)){
				return "\"\"";
			}
			return json_encode($item);
		}
		
		echo "var base_path = ".json_encode($GLOBALS['base_url']).";\n";
		echo "var builder_path = ".json_encode($GLOBALS['base_url']."/builder").";\n";
		echo "var logged_in = ".json_encode($logged_in).";\n";
		if ($nid>-1){
			echo "var drupal_node_ID = ".$nid.";\n";
			if(array_key_exists(LANGUAGE_NONE,  $node->field_model_data)){
				echo "var graph_source_data = ".encodeDrupal($node->field_model_data[LANGUAGE_NONE][0]['value']).";\n";
			}else{
				echo "var graph_source_data = \"\";";
			}
			echo "var graph_title = ".encodeDrupal($node->title).";\n";
			echo "var graph_description = ".encodeDrupal($node->body[LANGUAGE_NONE][0]['value']).";\n";
			if($node->uid){
				echo "var graph_author_name = ".encodeDrupal(user_load($node->uid)->field_realname['und']['0']['value']).";\n";
				echo "var graph_author_id = ".encodeDrupal($node->uid).";\n";
			}else{
				echo "var graph_author_name = '';\n";
				echo "var graph_author_id = -1;\n";
			}
			
			$tids = array();
			if(array_key_exists(LANGUAGE_NONE,  $node->field_tags)){
				$tids = $node->field_tags[LANGUAGE_NONE];
			}
			function getTermName($item)
			{
				return(taxonomy_term_load($item["tid"])->name);
			}
			echo "var graph_tags = ".encodeDrupal(implode(", ",array_map("getTermName", $tids))).";\n";
			if ($is_editor) {
				echo "var saved_enabled = true;\n";	
				echo "var is_editor = true;\n";
			}else{
				echo "var saved_enabled = false;\n";
				echo "var is_editor = false;\n";
			}
		}else{
			echo "var drupal_node_ID = -1;\n";
			echo "var graph_source_data = \"\";\n";
			echo "var graph_title = \"\";\n";
			echo "var graph_description = \"\";\n";
			echo "var graph_tags = \"\";\n";
			echo "var graph_author_name = '';\n";
			echo "var graph_author_id = -1;\n";
			echo "var saved_enabled = true;\n";
			echo "var is_editor = true;\n";
		}
		if($is_embed){
			echo "var is_embed = true;\n";
		}else{
			echo "var is_embed = false;\n";
		}
		if($is_topBar){
			echo "var is_topBar = true;\n";
		}else{
			echo "var is_topBar = false;\n";
		}
		if($is_sideBar){
			echo "var is_sideBar = true;\n";
		}else{
			echo "var is_sideBar = false;\n";
		}
		if($is_zoom){
			echo "var is_zoom = true;\n";
		}else{
			echo "var is_zoom = false;\n";
		}
			?>
</script>

<?php if(false && ! $is_embed){?>
<script type="text/javascript" charset="utf-8">
  var is_ssl = ("https:" == document.location.protocol);
  var asset_host = is_ssl ? "https://s3.amazonaws.com/getsatisfaction.com/" : "http://s3.amazonaws.com/getsatisfaction.com/";
  document.write(unescape("%3Cscript src='" + asset_host + "javascripts/feedback-v2.js' type='text/javascript'%3E%3C/script%3E"));
</script>


<script type="text/javascript" charset="utf-8">
  var feedback_widget_options = {};

  feedback_widget_options.display = "overlay";  
  feedback_widget_options.company = "insightmaker";
  feedback_widget_options.placement = "left";
  feedback_widget_options.color = "Navy";
  feedback_widget_options.style = "idea";
  

  var feedback_widget = new GSFN.feedback_widget(feedback_widget_options);
</script>
<?php }?>