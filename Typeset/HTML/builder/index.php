<?php
require("SharedHeader.php")
?>

	<div id="header"><div style="float:right;margin:5px;" class="x-small-editor"></div></div>

	
	<script type="text/javascript">
	var scriptBase = builder_path;
	var mxBasePath = builder_path;
	var mxLoadResources = false;
	var mxLoadStylesheets = false;
	</script>
	
	
	<script type="text/javascript" src="/builder/js/Localization.js"></script>
	<script type="text/javascript" src="/builder/js/SharedJS.js"></script>
	<script type="text/javascript" src="/builder/resources/mxClient.js"></script>
	<script type="text/javascript" src="/builder/js/Ext.ux.util.js"></script>
	<script type="text/javascript" src="/builder/js/ExtOverrides.js"></script>
	<script type="text/javascript" src="/builder/js/graph.js"></script>
	<script type="text/javascript" src="/builder/js/InsightEditor.js"></script>
	<script type="text/javascript" src="/builder/js/Utilities.js"></script>		
	<script type="text/javascript" src="/builder/js/RibbonPanel.js"></script>
	<script type="text/javascript" src="/builder/js/ConfigPanel.js"></script>
	<script type="text/javascript" src="/builder/js/TimeSettings.js"></script>
	<script type="text/javascript" src="/builder/js/EquationEditor.js"></script>
	<script type="text/javascript" src="/builder/js/RichTextEditor.js"></script>
	<script type="text/javascript" src="/builder/js/ConverterEditor.js"></script>
	<script type="text/javascript" src="/builder/js/DataImporter.js"></script>
	<script type="text/javascript" src="/builder/js/FindReplace.js"></script>
	<script type="text/javascript" src="/builder/js/UnitsEditor.js"></script>
	<script type="text/javascript" src="/builder/js/Sensitivity.js"></script>
	<script type="text/javascript" src="/builder/js/Optimizer.js"></script>
	<script type="text/javascript" src="/builder/js/ModelImporter.js"></script>
	<script type="text/javascript" src="/builder/js/Sanitize.js"></script>
	<script type="text/javascript" src="/builder/js/Results.js"></script>
	<script type="text/javascript" src="/builder/resources/jquery.js"></script> 
	<script type="text/javascript" src="/builder/resources/raphael.js"></script>
	<script type="text/javascript" src="/builder/js/scratchpad.js"></script>
	<script type="text/javascript" src="/builder/js/BoxSelect.js"></script>
	<script type="text/javascript" src="/builder/js/HoverIcons.js"></script>
	<script type="text/javascript" src="/builder/js/API/API.js"></script>
	<script type="text/javascript" src="/builder/js/Recorder.js"></script>
	<script type="text/javascript" src="/builder/js/Unfold.js"></script>
	<script type="text/javascript" src="/builder/js/TextEquations.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/Exporter.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/downloadify.min.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/swfobject.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/Formatter.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/Base64.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/Button.js"></script>
	<script type="text/javascript" src="/builder/resources/exporter/csvFormatter/CsvFormatter.js"></script>
	<script type="text/javascript" src="/builder/tests/ModelTests.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/OO.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/unitsStructure.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/units.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/SimpleCalc.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/antlr3-all-min.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/output/FormulaLexer.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/output/FormulaParser.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/rand.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/random.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/formula.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/calc/functions.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/Functions.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/Classes.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/Primitives.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/Simulator.js"></script>
	<script type="text/javascript" src="/builder/js/SimulationEngine/Modeler.js"></script> 
	
   
   <!--
       <script type="text/javascript" src="/builder/out.js"></script>
	   -->

	<script type="text/javascript" src="/builder/resources/framewarp/framewarp.js"></script>
	
	<?php if($nid==-1){ ?>
		
		<!-- Google Code for New Model Conversion Page -->
		<script type="text/javascript">
		/* <![CDATA[ */
		var google_conversion_id = 1022635102;
		var google_conversion_language = "en";
		var google_conversion_format = "3";
		var google_conversion_color = "ffffff";
		var google_conversion_label = "jLRkCPLTzwIQ3tjQ5wM";
		var google_conversion_value = 0;
		/* ]]> */
		</script>
		<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">
		</script>
		<noscript>
		<div style="display:inline;">
		<img height="1" width="1" style="border-style:none;" alt="" src="http://www.googleadservices.com/pagead/conversion/1022635102/?label=jLRkCPLTzwIQ3tjQ5wM&amp;guid=ON&amp;script=0"/>
		</div>
		</noscript>
	<?php }else{ ?>
		<!-- Google Code for View Model Conversion Page -->
		<script type="text/javascript">
		/* <![CDATA[ */
		var google_conversion_id = 1022635102;
		var google_conversion_language = "en";
		var google_conversion_format = "3";
		var google_conversion_color = "ffffff";
		var google_conversion_label = "UMxMCOrUzwIQ3tjQ5wM";
		var google_conversion_value = 0;
		/* ]]> */
		</script>
		<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">
		</script>
		<noscript>
		<div style="display:inline;">
		<img height="1" width="1" style="border-style:none;" alt="" src="http://www.googleadservices.com/pagead/conversion/1022635102/?label=UMxMCOrUzwIQ3tjQ5wM&amp;guid=ON&amp;script=0"/>
		</div>
		</noscript>
	<?php }?>
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-27704535-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
</body>
</html>

