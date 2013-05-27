<?php


if($_GET["key"]!="quicktime"){
	die("Missing password.");
}

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'On');
ini_set('display_startup_errors', 'On');


$link = mysqli_connect('localhost', 'root', 'quicktime1') or die('Could not connect: ' . mysqli_error());
	
mysqli_select_db($link, 'insightmaker') or die('Could not select database');


if($_GET["type"]=="list"){
	
	
	$query = 'SELECT r.vid, r.title, r.log, r.uid, n.vid AS current_vid, r.timestamp as t, u.name FROM node_revisions r LEFT JOIN node n ON n.vid = r.vid INNER JOIN users u ON u.uid = r.uid WHERE r.nid = '.filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT).' ORDER BY r.vid DESC';
	$result = mysqli_query($link, $query) or die('Query failed: ' . mysql_error());
	
	$data = array();
	
	while ($line = mysqli_fetch_assoc($result)) {
		$data[] = $line["vid"];
	}
	echo implode(",", $data);
}else{
	
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
	
    <title>Insight Time Machine</title>
 	<link rel="stylesheet" type="text/css" href="/builder/resources/ext/resources/css/ext-all-gray.css" />

	<link rel="shortcut icon" href="/builder/favicon.ico" type="image/x-icon" />


</head>
<body >

<script type="text/javascript" src="/builder/resources/ext/ext-all.js"></script>

	
<script type="text/javascript">

function orig(cell) {
    if (cell == null) {
        return null;
    }
    if (cell.value.nodeName == "Ghost") {
        return graph.getModel().getCell(cell.value.getAttribute("Source"));
    } else {
        return cell;
    }
}



var scriptBase = 'http://InsightMaker.com/builder';
var mxBasePath = 'http://InsightMaker.com/builder';
var mxLoadResources = false;
var mxLoadStylesheets = false;
</script>
<script type="text/javascript" src="/builder/resources/mxClient.js"></script>
	
<div id='mainGraph'  style='z-index:1000;position:absolute; width:<?echo $_GET["width"]?>px;height:<?echo $_GET["height"]?>px;'></div>


<?php
	

		$query = 'SELECT field_model_data_value from field_data_field_model_data where entity_id='.filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT).' order by revision_id desc limit 1';
		$dataresult = mysqli_query($link, $query) or die('QQuery failed --'.$query.'--'. mysqli_error());
		$dataline = mysqli_fetch_assoc($dataresult);
		$data = (string)$dataline["field_model_data_value"];

?>


<script type="text/javascript">
		<?php 
			echo "var code = \"".str_replace("\n","\\n",str_replace("\"","\\\"",$data))."\";\n";
		?>
		
		graph = new mxGraph();

		var undoHistory = new mxUndoManager();
		var node = mxUtils.parseXml('<mxStylesheet> 	<add as="defaultVertex" extend="defaultVertex"> 		<add as="strokeColor" value="#666666"/> 		<add as="fontColor" value="#333333"/> 		<add as="fontSize" value="14"/> 		<add as="fontFamily" value="Comic Sans MS"/> 		<add as="strokeWidth" value="2"/> 	</add> 	<add as="defaultEdge" extend="defaultEdge"> 		<add as="labelBackgroundColor" value="white"/> 		<add as="rounded" value="1"/> 		<add as="fontSize" value="14"/> 		<add as="edgeStyle" value="elbowEdgeStyle"/> 		<add as="fontFamily" value="Comic Sans MS"/> 		<add as="strokeWidth" value="4"/> 	</add> 	<add as="stock" extend="defaultVertex"> 		<add as="fillColor" value="#A6D3F8"/> 	</add> 	<add as="state" extend="defaultVertex"> 		<add as="fillColor" value="#ffffff"/> 	</add> 	<add as="transition" extend="defaultEdge"> 		<add as="strokeColor" value="#000000"/> 		<add as="fontColor" value="#000000"/> 	</add> 	<add as="agents" extend="defaultVertex"> 		<add as="fillColor" value="#F0E68C"/> 		<add as="shape" value="cloud"/> 	</add> 	<add as="textArea" extend="defaultVertex"> 		<add as="strokeColor" value="none"/> 		<add as="fillColor" value="none"/> 		<add as="fontColor" value="black"/> 		<add as="fontSize" value="30"/> 		<add as="fontStyle" value="4"/> 	</add> 	<add as="text" extend="defaultVertex"> 		<add as="strokeColor" value="none"/> 		<add as="fillColor" value="none"/> 		<add as="fontColor" value="black"/> 		<add as="fontSize" value="30"/> 		<add as="fontStyle" value="4"/> 	</add> 	 	<add as="parameter" extend="defaultVertex"> 		<add as="shape" value="ellipse"/> 		<add as="perimeter" value="ellipsePerimeter"/> 		<add as="fillColor" value="#FDCDAC"/> 	</add> 	<add as="variable" extend="defaultVertex"> 		<add as="shape" value="ellipse"/> 		<add as="perimeter" value="ellipsePerimeter"/> 		<add as="fillColor" value="#FDCDAC"/> 	</add> 	<add as="action" extend="defaultVertex"> 		<add as="shape" value="ellipse"/> 		<add as="perimeter" value="ellipsePerimeter"/> 		<add as="fillColor" value="#FFFFFF"/> 	</add> 	<add as="converter" extend="defaultVertex"> 		<add as="shape" value="ellipse"/> 		<add as="perimeter" value="ellipsePerimeter"/> 		<add as="fillColor" value="#B3E2CD"/> 	</add> 	<add as="button" extend="defaultVertex"> 		<add as="rounded" value="1"/> 		<add as="glass" value="1"/> 		<add as="fillColor" value="#C0C0C0"/> 		<add as="fontColor" value="black"/> 		<add as="strokeWidth" value="3"/> 		<add as="fontFamily" value="Helvetica"/> 	</add> 	<add as="display" extend="defaultVertex"> 		<add as="shape" value="ellipse"/> 		<add as="fillColor" value="#FFFFFF"/> 		<add as="strokeColor" value="#FFFFFF"/> 		<add as="fontColor" value="#FFFFFF"/> 		<add as="opacity" value="0"/> 	</add> 	<add as="picture" extend="defaultVertex"> 		<add as="shape" value="image"/> 		<add as="verticalLabelPosition" value="bottom"/> 		<add as="verticalAlign" value="top"/> 	</add> 	 	<add as="entity" extend="defaultEdge"> 		<add as="strokeColor" value="#808080"/> 		<add as="fontColor" value="#808080"/> 		<add as="opacity" value="70"/> 		<add as="edgeStyle" value="straight"/> 		<add as="strokeWidth" value="2"/> 		<add as="dashed" value="1"/> 		<add as="noLabel" value="0"/> 	</add> 	<add as="flow" extend="defaultEdge"> 	</add> 	<add as="link" extend="defaultEdge"> 		<add as="strokeColor" value="#808080"/> 		<add as="fontColor" value="#808080"/> 		<add as="opacity" value="70"/> 		<add as="edgeStyle" value="straight"/> 		<add as="strokeWidth" value="2"/> 		<add as="dashed" value="1"/> 		<add as="noLabel" value="0"/> 	</add> 	 	<add as="line" extend="defaultVertex"> 		<add as="shape" value="line"/> 		<add as="strokeWidth" value="4"/> 		<add as="labelBackgroundColor" value="white"/> 		<add as="verticalAlign" value="top"/> 		<add as="spacingTop" value="8"/> 	</add> 	<add as="image" extend="defaultVertex"> 		<add as="shape" value="image"/> 		<add as="verticalLabelPosition" value="bottom"/> 		<add as="verticalAlign" value="top"/> 	</add> 	 	<add as="folder" extend="defaultVertex"> 		<add as="verticalAlign" value="top"/> 		<add as="dashed" value="1"/> 		<add as="fillColor" value="none"/> 		<add as="rounded" value="1"/> 	</add> </mxStylesheet> ');
		var dec = new mxCodec(node);
		dec.decode(node.documentElement, graph.getStylesheet());
		
		
		graph.alternateEdgeStyle = 'vertical';
		
		graph.isHtmlLabel = function(cell) {
			var isHTML = cell != null && cell.value != null && (cell.value.nodeName != "Flow" && cell.value.nodeName != "Display");

			return isHTML;
		};
		graph.isWrapping = graph.isHtmlLabel;
		
		graph.isCellLocked = function(cell) {
			return true;
		}
		
		graph.isCellSelectable = function(cell) {
			return false;
		}
		graph.isCellEditable = function(cell) {
			return false;
		}
		
		graph.convertValueToString = function(cell) {
			if (mxUtils.isNode(cell.value)) {
				if (cell.value.nodeName == "Link" && orig(cell).getAttribute("name") == "Link") {
					return "";
					//} else if(cell.value.nodeName == "Button"){
					//return "<span style='cursor:hand;'>"+cell.getAttribute("name")+"</span>";
				} else {
					return orig(cell).getAttribute("name");
				}
			}
			return '';
		};
		
		graph.init(Ext.get("mainGraph").dom);
		
		var doc = mxUtils.parseXml(code);
		var dec = new mxCodec(doc);
		dec.decode(doc.documentElement, graph.getModel());
		
		graph.getView().setScale(0.25);
		graph.fit();
		graph.fit();
		
		
		
</script>
</body>
</html>

<?php
}
?>