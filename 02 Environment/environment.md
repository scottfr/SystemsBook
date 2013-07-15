# Dynamic Building Blocks

When we build things our skill in using the tools we work with has a very definite impact on things we create. Figure 1 is the last model from the previous chapter. In this chapter we hope you will become far more familiar with, and comfortable with, the Insight Maker environment, the creation of these structures, as well as a deeper understanding of why these structures for the building blocks of everything else you will create in the Insight Maker environment to further your understanding and learning.

# Model

{"title": "Similar Structures/Different Behaviors"}

{"load": "<mxGraphModel> <root> <mxCell id=\"0\"\/> <mxCell id=\"1\" parent=\"0\"\/> <Setting Note=\"\" Version=\"28\" TimeLength=\"10\" TimeStart=\"0\" TimeStep=\"1\" TimeUnits=\"Hours\" StrictUnits=\"true\" Units=\"\" HiddenUIGroups=\"Validation,User Interface\" SolutionAlgorithm=\"RK1\" BackgroundColor=\"white\" Throttle=\"-1\" Macros=\"\" SensitivityPrimitives=\"\" SensitivityRuns=\"50\" SensitivityBounds=\"50, 80, 95, 100\" SensitivityShowRuns=\"false\" id=\"2\"> <mxCell parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"20\" width=\"80\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Setting> <Display name=\"Default Display\" Note=\"\" Type=\"Time Series\" xAxis=\"Time (%u)\" yAxis=\"\" ThreeDimensional=\"false\" Primitives=\"24,25,30,35,42\" AutoAddPrimitives=\"true\" ScatterplotOrder=\"X Primitive, Y Primitive\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"3\"> <mxCell style=\"roundImage;image=\/builder\/images\/DisplayFull.png;\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"50\" y=\"20\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Stock name=\"Current State\" Note=\"Where we&#39;re starting from to pursue the goal.\" InitialValue=\"0\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" NonNegative=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"500\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"50\" id=\"24\"> <mxCell style=\"stock\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"237.5\" y=\"302.5\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"State Change\" Note=\"The Hose that adds so many gallons per hour.\" FlowRate=\"([Goal]-[Current State])*[Seeking Factor]\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"200\" SliderMin=\"0\" id=\"25\"> <mxCell style=\"flow\" parent=\"1\" target=\"24\" edge=\"1\"> <mxGeometry x=\"-142.5\" y=\"162.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"67.5\" y=\"322.5\" as=\"sourcePoint\"\/> <mxPoint x=\"-142.5\" y=\"262.5\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Display name=\"Tabular Display\" Note=\"\" Type=\"Tabular\" xAxis=\"Time (%u)\" yAxis=\"Gallons\" yAxis2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" ThreeDimensional=\"false\" Primitives=\"25,24\" Primitives2=\"\" AutoAddPrimitives=\"false\" ScatterplotOrder=\"X Primitive, Y Primitive\" Image=\"Display\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Bottom\" legendPosition=\"Automatic\" id=\"29\"> <mxCell style=\"display\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"10\" y=\"10\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Variable name=\"Goal\" Note=\"The goal being pursued.\" Equation=\"1000\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1000\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"100\" id=\"30\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"50\" y=\"162.5\" width=\"80\" height=\"55\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"31\"> <mxCell style=\"link\" parent=\"1\" source=\"30\" target=\"25\" edge=\"1\"> <mxGeometry x=\"-52.5\" y=\"72.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-52.5\" y=\"172.5\" as=\"sourcePoint\"\/> <mxPoint x=\"47.5\" y=\"72.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"130\" y=\"240\"\/> <mxPoint x=\"140\" y=\"270\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"32\"> <mxCell style=\"link\" parent=\"1\" source=\"24\" edge=\"1\"> <mxGeometry x=\"-52.5\" y=\"72.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-52.5\" y=\"172.5\" as=\"sourcePoint\"\/> <mxPoint x=\"157.5\" y=\"322.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"247.5\" y=\"252.5\"\/> <mxPoint x=\"217.5\" y=\"242.5\"\/> <mxPoint x=\"177.5\" y=\"262.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Variable name=\"Seeking Factor\" Note=\"What percentage of change can happen in a time period?\" Equation=\"0.25\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"0.05\" id=\"33\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"7.5\" y=\"387.5\" width=\"100\" height=\"50\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"34\"> <mxCell style=\"link\" parent=\"1\" source=\"33\" target=\"25\" edge=\"1\"> <mxGeometry x=\"-52.5\" y=\"72.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-52.5\" y=\"172.5\" as=\"sourcePoint\"\/> <mxPoint x=\"47.5\" y=\"72.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"117.5\" y=\"372.5\"\/> <mxPoint x=\"137.5\" y=\"352.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Stock name=\"Reinforcing Accumulation\" Note=\"Reinforcing accumulation.\" InitialValue=\"1\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" NonNegative=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"10\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"1\" id=\"35\"> <mxCell style=\"stock\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"512.5\" y=\"302.5\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"Added\" Note=\"The Hose that adds so many gallons per hour.\" FlowRate=\"[Reinforcing Accumulation] * [Growth Factor]\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"200\" SliderMin=\"0\" id=\"36\"> <mxCell parent=\"1\" target=\"35\" edge=\"1\"> <mxGeometry x=\"132.5\" y=\"162.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"367.5\" y=\"327.5\" as=\"sourcePoint\"\/> <mxPoint x=\"132.5\" y=\"262.5\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Variable name=\"Growth Factor\" Note=\"Rabbit birth rate.\" Equation=\"1\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" id=\"37\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"317.5\" y=\"390\" width=\"80\" height=\"55\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"38\"> <mxCell style=\"link\" parent=\"1\" source=\"37\" target=\"36\" edge=\"1\"> <mxGeometry x=\"222.5\" y=\"72.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"222.5\" y=\"172.5\" as=\"sourcePoint\"\/> <mxPoint x=\"322.5\" y=\"72.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"417.5\" y=\"390\"\/> <mxPoint x=\"427.5\" y=\"360\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"39\"> <mxCell style=\"link\" parent=\"1\" source=\"35\" edge=\"1\"> <mxGeometry x=\"222.5\" y=\"72.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"222.5\" y=\"172.5\" as=\"sourcePoint\"\/> <mxPoint x=\"432.5\" y=\"322.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"522.5\" y=\"252.5\"\/> <mxPoint x=\"492.5\" y=\"242.5\"\/> <mxPoint x=\"452.5\" y=\"262.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Text name=\"Balancing&#xa;Goal Seeking\" LabelPosition=\"Middle\" id=\"40\"> <mxCell style=\"text;fontSize=24\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"110\" y=\"360\" width=\"210\" height=\"80\" as=\"geometry\"\/> <\/mxCell> <\/Text> <Text name=\"Reinforcing&#xa;Exponential Growth\" LabelPosition=\"Middle\" id=\"41\"> <mxCell style=\"text;fontSize=24\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"410\" y=\"367.5\" width=\"240\" height=\"72.5\" as=\"geometry\"\/> <\/mxCell> <\/Text> <Stock name=\"Accumulation of Stuff\" Note=\"Just a bunch of stuff.\" InitialValue=\"0\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" NonNegative=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"100\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"10\" id=\"42\"> <mxCell style=\"stock\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"402.5\" y=\"75.44583482740688\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"Flow\" Note=\"The Hose that adds so many gallons per hour.\" FlowRate=\"[Flow Rate]\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"200\" SliderMin=\"0\" id=\"43\"> <mxCell style=\"flow\" parent=\"1\" target=\"42\" edge=\"1\"> <mxGeometry x=\"22.5\" y=\"-64.55416517259312\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"232.5\" y=\"95.44583482740688\" as=\"sourcePoint\"\/> <mxPoint x=\"22.5\" y=\"35.445834827406884\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Variable name=\"Flow Rate\" Note=\"The rate at which stuff is added to the accumulation.\" Equation=\"100\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"100\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"5\" id=\"46\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"172.5\" y=\"160.44583482740688\" width=\"100\" height=\"50\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"47\"> <mxCell style=\"link\" parent=\"1\" source=\"46\" target=\"43\" edge=\"1\"> <mxGeometry x=\"112.5\" y=\"-154.55416517259312\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"112.5\" y=\"-54.554165172593116\" as=\"sourcePoint\"\/> <mxPoint x=\"212.5\" y=\"-154.55416517259312\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"282.5\" y=\"145.44583482740688\"\/> <mxPoint x=\"302.5\" y=\"125.44583482740688\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Text name=\"Linear&#xa;Linear Growth\" LabelPosition=\"Middle\" id=\"48\"> <mxCell style=\"text;fontSize=24\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"287.5\" y=\"140\" width=\"180\" height=\"64.10833034518623\" as=\"geometry\"\/> <\/mxCell> <\/Text> <Button name=\"Run\" Note=\"Change the sliders and then click this button to see the results.\" Function=\"runModel();\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" id=\"52\"> <mxCell style=\"button\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"10\" y=\"40\" width=\"80\" height=\"20\" as=\"geometry\"\/> <\/mxCell> <\/Button> <Button name=\"Demo\" Note=\"Baseline run with preset parameters for the 3 basic structures.\" Function=\"setValue(findName(&quot;Current State&quot;),&quot;0&quot;);&#xa;setValue(findName(&quot;Goal&quot;),&quot;1000&quot;);&#xa;setValue(findName(&quot;Seeking Factor&quot;),&quot;0.25&quot;);&#xa;setValue(findName(&quot;Reinforcing Accumulation&quot;),&quot;1&quot;);&#xa;setValue(findName(&quot;Accumulation of Stuff&quot;),&quot;0&quot;);&#xa;setValue(findName(&quot;Flow Rate&quot;),&quot;100&quot;);&#xa;setValue(findName(&quot;Growth Factor&quot;),&quot;1&quot;);&#xa;showNote(findName(&quot;Run&quot;));&#xa;updateSideBar();&#xa;runModel({onSuccess: function(results){results.window.items.getAt(0).setActiveTab(0);}});\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" id=\"53\"> <mxCell style=\"button\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"10\" y=\"10\" width=\"80\" height=\"20\" as=\"geometry\"\/> <\/mxCell> <\/Button> <\/root> <\/mxGraphModel> "}

DIAGRAM

# End Model

[** Similar Structures/Different Behaviors](http://insightmaker.com/insight/5138)

## The Blank Canvas ##

When you create a New Insight you don't actually have to start with a blank canvas. Insight Maker presents you with a very simple working Rabbits Population model. This is just so there's something there to work with when you first start. 

# Model

{"title": "Sample Model"}

{"load": "<mxGraphModel>  <root>   <mxCell id=\"0\"\/>   <mxCell id=\"1\" parent=\"0\"\/>   <Picture name=\"\" Note=\"\" Image=\"http:\/\/insightmaker.com\/builder\/images\/rabbit.jpg\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Bottom\" id=\"17\">    <mxCell style=\"picture;image=http:\/\/insightmaker.com\/builder\/images\/rabbit.jpg;imageFlipV=0;imageFlipH=0;shape=image\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"10\" y=\"192.75\" width=\"210\" height=\"224.25\" as=\"geometry\"\/>    <\/mxCell>   <\/Picture>   <Setting Note=\"\" Version=\"28\" TimeLength=\"20\" TimeStart=\"0\" TimeStep=\"1\" TimeUnits=\"Years\" StrictUnits=\"true\" Units=\"\" HiddenUIGroups=\"Validation,User Interface\" SolutionAlgorithm=\"RK1\" BackgroundColor=\"white\" Throttle=\"1\" Macros=\"\" SensitivityPrimitives=\"\" SensitivityRuns=\"50\" SensitivityBounds=\"50, 80, 95, 100\" SensitivityShowRuns=\"false\" id=\"2\">    <mxCell parent=\"1\" vertex=\"1\" visible=\"0\">     <mxGeometry x=\"20\" y=\"20\" width=\"80\" height=\"40\" as=\"geometry\"\/>    <\/mxCell>   <\/Setting>   <Display name=\"Default Display\" Note=\"\" Type=\"Time Series\" xAxis=\"Time (%u)\" yAxis=\"\" ThreeDimensional=\"false\" Primitives=\"4\" AutoAddPrimitives=\"true\" ScatterplotOrder=\"X Primitive, Y Primitive\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"3\">    <mxCell style=\"roundImage;image=\/builder\/images\/DisplayFull.png;\" parent=\"1\" vertex=\"1\" visible=\"0\">     <mxGeometry x=\"50\" y=\"20\" width=\"64\" height=\"64\" as=\"geometry\"\/>    <\/mxCell>   <\/Display>   <Stock name=\"Rabbits\" Note=\"The number of rabbits currently alive.\" InitialValue=\"200\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" NonNegative=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"1000\" SliderMin=\"0\" Image=\"None\" AllowNegatives=\"true\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" id=\"4\">    <mxCell style=\"stock;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"407.5\" y=\"422\" width=\"100\" height=\"40\" as=\"geometry\"\/>    <\/mxCell>   <\/Stock>   <Flow name=\"Births\" Note=\"The number of rabbits born each year.\" FlowRate=\"[Rabbits]*[Rabbit Birth Rate]\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" id=\"5\">    <mxCell style=\"\" parent=\"1\" target=\"4\" edge=\"1\">     <mxGeometry x=\"47.5\" y=\"32\" width=\"100\" height=\"100\" as=\"geometry\">      <mxPoint x=\"457.5\" y=\"184.5\" as=\"sourcePoint\"\/>      <mxPoint x=\"57.5\" y=\"282\" as=\"targetPoint\"\/>      <mxPoint x=\"-0.5\" y=\"5\" as=\"offset\"\/>     <\/mxGeometry>    <\/mxCell>   <\/Flow>   <Variable name=\"Rabbit Birth Rate\" Note=\"The proportional increase in the number of rabbits per year.\" Equation=\"0.1\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" id=\"6\">    <mxCell style=\"parameter;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"551.25\" y=\"157\" width=\"140\" height=\"50\" as=\"geometry\"\/>    <\/mxCell>   <\/Variable>   <Text name=\"&amp;larr; This is a Stock\" LabelPosition=\"Middle\" id=\"8\">    <mxCell style=\"textArea;fontStyle=1;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"536.25\" y=\"392\" width=\"160\" height=\"50\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"Stocks store things like money or water or, in this case, rabbits.\" LabelPosition=\"Middle\" id=\"9\">    <mxCell style=\"textArea;fontStyle=0;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"516.25\" y=\"428.5\" width=\"210\" height=\"50\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"This is a Flow &amp;rarr;\" LabelPosition=\"Middle\" id=\"10\">    <mxCell style=\"textArea;fontStyle=1;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"267.5\" y=\"182\" width=\"150\" height=\"50\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"Flows move material between Stocks. In this case it represents the birth of new rabbits.\" LabelPosition=\"Middle\" id=\"11\">    <mxCell style=\"textArea;fontStyle=0;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"227.5\" y=\"224.5\" width=\"210\" height=\"70\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"This is a Variable&#xa;\" LabelPosition=\"Middle\" id=\"12\">    <mxCell style=\"textArea;fontStyle=1;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"496.25\" y=\"62\" width=\"245\" height=\"35\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"7\">    <mxCell style=\"entity\" parent=\"1\" source=\"6\" target=\"5\" edge=\"1\">     <mxGeometry x=\"47.5\" y=\"32\" width=\"100\" height=\"100\" as=\"geometry\">      <mxPoint x=\"47.5\" y=\"132\" as=\"sourcePoint\"\/>      <mxPoint x=\"147.5\" y=\"32\" as=\"targetPoint\"\/>     <\/mxGeometry>    <\/mxCell>   <\/Link>   <Text name=\"&amp;larr; This is a Link\" LabelPosition=\"Middle\" id=\"13\">    <mxCell style=\"textArea;fontStyle=1;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"511.25\" y=\"247\" width=\"210\" height=\"30\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"It allows the equation for &lt;i&gt;Births&lt;\/i&gt; to reference the &lt;i&gt;Rabbit Birth Rate&lt;\/i&gt;.\" LabelPosition=\"Middle\" id=\"14\">    <mxCell style=\"textArea;fontStyle=0;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;align=center;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"516.25\" y=\"271.5\" width=\"210\" height=\"70\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"Here is a simple model to get you started. It simulates a rabbit population over the course of 20 years. Luckily for these rabbits, there is no rabbit mortality! &#xa;&#xa;Click the &lt;i&gt;Run Simulation&lt;\/i&gt; button on the right of the toolbar to see how the rabbit population will grow over time.\" LabelPosition=\"Middle\" id=\"15\">    <mxCell style=\"textArea;fontStyle=0;fontFamily=Times New Roman;fontSize=18;strokeColor=none;fontColor=#333300;align=left;fillColor=none;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"15\" y=\"12.75\" width=\"405\" height=\"150\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\" Move your mouse over it and click the &quot;=&quot; to inspect its value.&#xa;&amp;darr;\" LabelPosition=\"Middle\" id=\"18\">    <mxCell style=\"textArea;fontStyle=0;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#000000;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"492.5\" y=\"92\" width=\"257.5\" height=\"60\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Text name=\"&lt;b&gt;Adding Primitives:&lt;\/b&gt; Select type in toolbar and then click in the canvas.&#xa;&lt;b&gt;Adding Connections:&lt;\/b&gt; Select type in toolbar, hover mouse over connectable primitive and drag arrow.\" LabelPosition=\"Middle\" id=\"21\">    <mxCell style=\"textArea;fontStyle=0;fontFamily=Verdana;fontSize=14;strokeColor=none;fontColor=#808080;align=center;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"5\" y=\"480\" width=\"745\" height=\"70\" as=\"geometry\"\/>    <\/mxCell>   <\/Text>   <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"22\">    <mxCell style=\"entity\" parent=\"1\" source=\"4\" target=\"5\" edge=\"1\">     <mxGeometry width=\"100\" height=\"100\" as=\"geometry\">      <mxPoint y=\"100\" as=\"sourcePoint\"\/>      <mxPoint x=\"100\" as=\"targetPoint\"\/>      <Array as=\"points\">       <mxPoint x=\"380\" y=\"420\"\/>       <mxPoint x=\"360\" y=\"380\"\/>       <mxPoint x=\"360\" y=\"340\"\/>       <mxPoint x=\"380\" y=\"310\"\/>       <mxPoint x=\"407\" y=\"292\"\/>       <mxPoint x=\"440\" y=\"290\"\/>      <\/Array>     <\/mxGeometry>    <\/mxCell>   <\/Link>   <Button name=\"Clear Sample Model\" Note=\"\" Function=\"clearModel()\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" id=\"23\">    <mxCell style=\"button;fontSize=20;fillColor=#FFFF99;strokeColor=#FF9900;fontColor=#0000FF;fontStyle=5\" parent=\"1\" vertex=\"1\">     <mxGeometry x=\"80\" y=\"418.5\" width=\"240\" height=\"60\" as=\"geometry\"\/>    <\/mxCell>   <\/Button>  <\/root> <\/mxGraphModel> "}

DIAGRAM

If you click the **Clear Sample Model** button you will then have a blank canvas on which to create. In the next few segments you will learn how to create the three basic structures from which all models are constructed.

# End Model

[** New Insight](http://insightmaker.com/insight/7070)

All the tools you use to work with models are located on the \u{toolbar} at the top of the screen which is depicted in Fig 1.

![Figure 1. Toolbar](02-im-7070.png)

[** Toolbar](http://insightmaker.com/insight/7070)

To use any of the \u{Primitives} click on the icon on the \u{Toolbar} to select it, then click on the canvas where you want the item located. For each tool there are a set of allowed uses. Once you place the item on the canvas it is named for what it is, with that name selected so you can type in the name you want. Names can contain any characters except braces "{}", brackets "\[\]", parentheses \(\), and quotes '. If the label is not selected you can double-click it to select the label and then enter a new one, or you can enter the label in the \u{Configuration Panel} though we'll address that in a bit more detail later.

~ Exercise

Practice placing \p{Stock} and \p{Variable} \p{Primitives} on the blank canvas in Figure 2 and naming them. You can remove a \p{Primitive} by clicking on it to select it and then pressing the \u{Delete} key or clicking the \u{Delete} button in the \u{Actions} section of the \u{Toolbar}. Note that the \u{Save} option is disabled so you won't be able to save what you create. **Note**: This is only for the review copy. In the final electronic copy you will be able to save what you create.

~ End Exercise

## Stocks, Flows, Variables and Links ##

\p{Stocks} and \p{Variables} are connected to other \p{Stocks} and \p{Variables} using \p{Link} and \p{Flow} \p{Connections}. The rules for connections are very explicit because Insight Maker has to figure out how to simulate the model. The allowed connections are depicted in Figure 3. The next chapter will present several types of models where the rules for connections aren't nearly as rigid.

# Model

{"title": "Valid Primitive Connections"}

{"target":"Stock 2","geometry":{"x":440,"y":210,"width":100,"height":40}}

{"target":"Stock 1","geometry":{"x":240,"y":200,"width":100,"height":40}}

{"target":"Flow 2","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":40,"y":200},"targetPoint":{"x":140,"y":100}}}

{"target":"Flow 3","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":40,"y":200},"targetPoint":{"x":640,"y":230}}}

{"target":"Flow 1","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":110,"y":220},"targetPoint":{"x":40,"y":200}}}

{"target":"Variable 1","geometry":{"x":230,"y":310,"width":120,"height":50}}

{"target":"Link","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":40,"y":200},"targetPoint":{"x":140,"y":100}}}

{"target":"Variable 2","geometry":{"x":430,"y":110,"width":120,"height":50}}

{"target":"Link","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":40,"y":200},"targetPoint":{"x":140,"y":100}}}

{"target":"Link","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":40,"y":200},"targetPoint":{"x":140,"y":100}}}

{"target":"Initial Value","geometry":{"x":510,"y":320,"width":120,"height":50}}

{"target":"Link","geometry":{"x":40,"y":100,"width":100,"height":100,"sourcePoint":{"x":40,"y":200},"targetPoint":{"x":140,"y":100}}}

{"target":"Link","geometry":{"x":70.00000000000003,"y":90,"width":100,"height":100,"sourcePoint":{"x":70.00000000000003,"y":190},"targetPoint":{"x":170.00000000000003,"y":90}}}

{"target":"Link","geometry":{"x":23.8633160945721,"y":121.02897812950013,"width":100,"height":100,"sourcePoint":{"x":23.8633160945721,"y":221.02897812950013},"targetPoint":{"x":123.8633160945721,"y":121.02897812950013}}}

DIAGRAM

You have now completed a model that represents 

# End Model

[** Valid Primitive Connections](http://insightmaker.com/insight/5275)

If you select \u{Link} from the \u{Connections} segment of the \u{toolbar} then hover over a model \p{Primitives) on the canvas a small arrow pointing to the right shows at the center of the \p{Primitives). If you select a \u{Flow} the small arrow will only show up over a \p{Stock} as a \u{Flow} can only connect to a \p{Stock}.

Center the \u{cursor crossing double arrows} over the right arrow, which should then change to a \u{pointing finger hand}. Drag the mouse over to a second model element and the arrow tags along while the \u{Connections} is drawn. If neither \u{Link} or \u{Flow} is selected then there will be no right pointing arrow when you mouse over the primitive. We'll go into more detail about connections shortly.

~ Exercise

Click on the \u{Unfold Model} button in the lower left corner of Figure 3, and then repeatedly click the \u{Step Forward} arrow to walk though an unfolding of the Valid Primitives model while you read the comments on the lower bar.

Note the setup takes a few seconds to please be patient. This will only be the case in the review copy, not the final eBook.

~ End Exercise

Hopefully the rules associated with the connections were easy to understand. Just remember that Flows represent the movement of stuff while Links only communicate the value of something from one location to another.

## Valid Primitive Connections ##

The valid primitive connections are described as follows.

### Flow ###

A Flow adds stuff to a Stock, subtracts stuff from a Stock, or moves stuff from one Stock to another. The only way to change the quantity of stuff in a Stock is with a Flow.

- A flow out of a stock decreases it. If where the flow goes isn't relevant to the model then it just flows from the stock to the canvas. Select Flow from the toolbar and then click on the arrow that appears on the stock when you mouse over it and drag onto the canvas and release. 
- A flow into a stock will increase it. If you don't care where the Flow is coming from then you first have to draw the Flow from the Stock to the canvas and click the Reverse button in the Connections section to get the Flow to come into the Stock from nowhere. It's just a quirk of the web implementation.
- A flow from one stock to another decreases the source and increases the destination. The get a flow between two Stocks draw the Stocks first and then draw the Flow from one Stock to the other.
- Flows can be bidirectional and we'll talk more about that the first time we use one in a model.
- Flows take time! Please remember this.

### Link ###

A Link is used to communicate a value from one element to another. There is no flow of stuff through the link itself. The communication is considered to be instantaneous.

- You can use a Link from a Stock to a Variable to communicate the value of the Stock to be used in an equation. This does not change the Stock.
- You can use a Link to communicate the value of a Stock to a Flow to be used in the equation determining the value of the Flow in the next iteration. The Link does not change the value of the Stock.
- You can use a Link to communicate the value of a Flow to a Variable to be used in an equation. This does not change the value of the flow.
- You can use a Link to communicate the value of a Variable to a Flow to be used in the equation that defines the flow. This does not change the value of the Variable.
- You can use a Link to communicate the value of a Variable to another Variable so that value can be used in an equation in the destination variable. The link does not change the value of the source Variable.
- You can use a Link to communicate the value of a Variable to a Stock to be used as it's Initial Value when the simulation begins. The value of the Variable is computed and assigned to the Stock as the simulation begins and it has no influence on the Stock during the simulation.

When you draw a link from one element to another it is created as a straight line. There are times when you would prefer that the connection be other than a straight line to make the diagram easier to follow. You can turn a straight line into a multiple segment line as follows.

- Click on the link to select it.
- Hold down the shift key and click somewhere in the middle of the link then release. This puts a little node on the line.
- Click on the node and move it as you wish to create a two segment link.
- You can create as many segments as you need, simply repeat the second step above.
- If you wish to remove the segments select the head of the link, move it off the element it's connected to and then reconnect it. It will now be a straight link.

~ Exercise

Go back to Figure 2 and recreate Figure 3 for yourself and as you create each element think about what that particular element is for. Actually making the connections helps develop a level of skill and comfort which will serve you well in the future.

~ End Exercise

## Configuration Panel ##

Each of the four elements used to build a model has some of the same configuration options though because each has a different function there are some unique configuration options for each item. Some of the most frequently used options will be described in the following sections. The ones not described here will be described the first time they are used.

The Configuration Panels for Stock 1, Flow 1 and Variable 1 form Figure 3 are displayed in Figure 3a and are described below.

![Figure 2. Stock, Flow & Variable Configuration Panels](02-im-5275.png)

[** Figure 2](http://www.insightmaker.com/insight/5275)

### General ###

This section is where you can assign the (name) and Note for an item.

- **(name)**. This is the label that you see on the item. You can double-click the item on the canvas and edit the label on the item itself or change it here in the configuration panel.
- **Note**. Here you can enter a description of the item. You can enter short descriptions directly into the field. If you click the down arrow in right of the field it will open the **Note Editor** dialogue window which allows some formatting options. The note that you enter here will pop up when you mouse over an item and click on the little \u{i} that appears on the item. If the element of the model is selected you can also open the Note Editor window by CTRL+`(Control+Backquote). Adding comments to a model helps others to understand what you were thinking and when you go back to the model in the future the comments will help you understand what you were thinking when you put the model together. Yes, you completely understand now, though will you remember next week, or a year from now?

![Figure 3. Note Editor](02-im-5275a.png)

[** Figure 3](http://www.insightmaker.com/insight/5275)

### Configuration ###

This section is used to define how the element behaves during the simulation and is a little different for Stock, Flow and Variables, though quite similar. The behavior is essentially controlled by an equation which is defined in terms of the variables connected to it. This is an initial value for a Stock. You may enter a short value into the field though if you click the down arrow in the right of the field the **Equation Editor** window will open. In this window you can define the formula that defines the behavior of the element. You can also open the **Equation Editor** for an element by mousing over the element and clicking on the **equals (=)** sign that appears. All the built in functions on the tabs at the bottom of the window have descriptions associated descriptions and examples.

![Figure 5. Equation Editor](02-im-5275b.png)

[** Figure 4](http://www.insightmaker.com/insight/5275)

Additionally in this section you define whether stocks can have negative values and whether flows can flow in both directions. We'll talk more about these options the first time we use them.

### User Interface ###

It is in this segment of the configuration panel that you define a slider for an element, if there is to be one. You can define a sliders for Stocks, to define it's initial value and for Flows and for Variables. Once you indicate there is to be a slider you then define the maximum and minimum values it may have, as well as the step size, how small are the variations allowed. If you leave the step size field blank then the slider can vary continuously.

An element may have a slider or a formula though not both. Sliders override equations. If you enter an equation and it disappears check to see if there was a slider defined and it hasn't been turned off.

### Validation ###

This section allows you to indicate if there are Maximum and/or Minimum constraints on a Stock, Flow or Variable.

Additionally it is in this section that you assign the Units for an Stock, Flow, and Variable. Units are very useful in helping to ensure the soundness of a model. Units will be covered extensively in Chapter 4.

## Common Property # 1 ##

To this point you've learned how to develop a static picture of a model. It is actually a model and provides a sense of the relationships between the various elements. What it doesn't give you a sense of is the dynamic nature of these interactions over time. What are the implications of the relationships? In the next few sections you'll learn how to bring your model to life.

Look at the pictures in Figure 4 and ask yourself what it is that these images have in common. The images all represent very different kinds of things, some living, some not, though there is a characteristics they all have in common. Have you figured it out?

![Figure 5. Common Property # 1](02-im-4548.png)

[** Figure 5](http://www.insightmaker.com/insight/4548)

Maybe you notice the rabbits from the previous chapter? The things depicted in the various images all grow in one way or another, and some faster than others.

## Constructing a Growth Structure ##

Lets use Figure 5 to construct a basic growth structure and in the process you'll learn about several of the parameters associated with the different elements of a model.
 
# Model

{"title": "Growth Structure"}

{"target":"stuff","geometry":{"x":100,"y":90,"width":100,"height":40}}

{"target":"Flow","geometry":{"x":-110,"y":0,"width":100,"height":100,"sourcePoint":{"x":380,"y":110},"targetPoint":{"x":-110,"y":100}}}

DIAGRAM

{"attribute":"InitialValue","target":"stuff","value":"0"}

{"attribute":"FlowRate","target":"Flow","value":"1"}

RESULTS

Notice that the model ran for 20 years. That's because we used the default Time Settings.

If we evolve the model of Figure 5 into Figure 8 so the flow is dependent on the amount of stuff we find the resultant growth to be very different.

{"geometry":{"x":0,"y":0,"width":100,"height":100},"alpha":"stuff","omega":"Flow","create":"Link"}

{"attribute":"FlowRate","target":"Flow","value":"[stuff]"}

RESULTS

The result of the run from the model in Figure 8 is depicted in Figure 9. The value after 10 Years is 1,024 which you should realize is just 2^10 as expected because we started with a value of 1 and doubled it every year. This curve is referred to as an exponential growth curve.

# End Model

[** Model](http://insightmaker.com/insight/5351)

~ Exercise

Notice that the curve in Figure 10 is a bit choppy where it turns up. Run the model in Figure 8 with a Time Step of .5, .25, .125, .0625 and compare the results. What questions are raised by the the results?

~ End Exercise

### Time Units and Time Step Selection ###

The \u{Time Units} and \u{Time Step} selected for a model should be consistent with the time frame and level of detail of the model. You probably wouldn't develop a model about filling a bathtub with water and use \u{Time Units} of months. Minutes are probably more appropriate for this model. The \u{Time Step} is then selected to ensure none of the relevant transitions associated with the dynamic nature of the model are missed. A \u{Time Step} of .25, meaning 15 seconds, is probably sufficiently small to ensure there are no transitions missed.

Trial is actually the most appropriate approach to determine if you have an appropriate value for \u{Time Step}. If you think .5 is appropriate then run the model with 1, .5, and .25 and if the results for 1 and .25 don't differ from .5 then you're probably OK. If .25 produced a different result then compare the .25 result with the .125 result. Once you get two runs where the values don't change then use the larger one.

Given this guidance how would you interpret the results you experienced in Exercise 2-5?

### References ###

- [How does DT work? from isee Systems](http://www.iseesystems.com/Helpv9/Content/DT/How_does_DT_work_.htm)
- [DT Situations Requiring Special Care from isee Systems](http://www.iseesystems.com/Helpv9/Content/DT/DT_Special_Care.htm)

~ Exercise

Consider the images in Figure 5 and think about what \u{Time Units} and \u{Time Step} you would use in a model representing the growth in each of these areas.

~ End Exercise

One aspect of trying to model the contexts of Figure 5 that should have become apparent is that there is a piece of the model that's missing. 

# Model

{"title": "Feedback Dependent Growth"}

{"load": "<mxGraphModel> <root> <mxCell id=\"0\"\/> <mxCell id=\"1\" parent=\"0\"\/> <Setting Note=\"\" Version=\"28\" TimeLength=\"20\" TimeStart=\"0\" TimeStep=\"1\" TimeUnits=\"Years\" StrictUnits=\"true\" Units=\"\" HiddenUIGroups=\"Validation,User Interface\" SolutionAlgorithm=\"RK1\" BackgroundColor=\"white\" Throttle=\"1\" Macros=\"\" SensitivityPrimitives=\"\" SensitivityRuns=\"50\" SensitivityBounds=\"50, 80, 95, 100\" SensitivityShowRuns=\"false\" id=\"2\"> <mxCell parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"20\" width=\"80\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Setting> <Display name=\"Default Display\" Note=\"\" Type=\"Time Series\" xAxis=\"Time (%u)\" yAxis=\"\" ThreeDimensional=\"false\" Primitives=\"23\" AutoAddPrimitives=\"true\" ScatterplotOrder=\"X Primitive, Y Primitive\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"3\"> <mxCell style=\"roundImage;image=\/builder\/images\/DisplayFull.png;\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"50\" y=\"20\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Stock name=\"stuff\" Note=\"\" InitialValue=\"0\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" NonNegative=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" SliderStep=\"\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" id=\"23\"> <mxCell style=\"stock\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"100\" y=\"90\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"Flow\" Note=\"\" FlowRate=\"[stuff]\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" SliderStep=\"\" id=\"24\"> <mxCell style=\"flow\" parent=\"1\" target=\"23\" edge=\"1\"> <mxGeometry x=\"-110\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"380\" y=\"110\" as=\"sourcePoint\"\/> <mxPoint x=\"-110\" y=\"100\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"25\"> <mxCell style=\"link\" edge=\"1\" parent=\"1\" source=\"23\" target=\"24\"> <mxGeometry width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint y=\"100\" as=\"sourcePoint\"\/> <mxPoint x=\"100\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"190\" y=\"60\"\/> <mxPoint x=\"250\" y=\"50\"\/> <mxPoint x=\"280\" y=\"70\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <\/root> <\/mxGraphModel> "}

{"geometry":{"x":360,"y":180,"width":80,"height":40},"name":"factor","create":"Variable"}

{"geometry":{"x":0,"y":0,"width":100,"height":100},"alpha":"factor","omega":"Flow","create":"Link"}

{"attribute":"Equation","target":"factor","value":".2"}

{"attribute":"FlowRate","target":"Flow","value":"[stuff] * [factor]"}

DIAGRAM

This version of the model adds a factor, which is allowed to vary between 0 and 1, which is simply used to govern the flow. Mouse over the Flow and click the equal (=) sign to view the formula governing the flow.

RESULTS

# End Model

[** Model](http://insightmaker.com/insight/5887)

~ Exercise

Using the Feedback Dependent Growth model to implement the models does this structure allow you to construct more realistic representations of the growth situations presented in Figure 5?

~ End Exercise

~ Exercise

The model in Figure 11 is the model for a Savings Account that is defined as compounding annually, i.e. calculating and adding interest once a year. This means that the most appropriate \u{Time Units} is years with a \u{Time Step} of 1. There are no other transitions in this model that need to be accommodated. If you run this model with any \u{Time Step} other than 1 it will result in a less accurate result. Why does this happen?

~ End Exercise

This model is the standard reinforcing growth model depicted in Figure 1 at the beginning of this chapter. In the process of arriving this model the linear growth model of Figure 1 was developed first, and then evolved. Hopefully through the exercises to this point you have gained a deeper understanding of how this structure works and the extent to which it may be applied to various situations.

## Common Property # 2 ##

Look at the activities depicted by the images in Figure 12 and ask yourself what it is that these activities have in common. The images represent very different kinds of activities though there is a characteristics they all have in common. Have you figured it out?

![Figure 6. Common Property # 2](02-im-6120.png)

[** Figure 6](http://www.insightmaker.com/insight/6120)

Each activity depicted in Figure 6 represents the pursuit of some goal or objective. Admittedly the goals are very different and each is pursued in a very different manner.

## Constructing a Balancing/Goal Seeking Structure ##

As we have done repeatedly to this point we begin with a linear model consisting of a flow and a stock, along with a flow rate variable. To this we simply have to add a goal and the appropriate feedback and we end up with the model in Figure 13.

# Model

{"title": "Balancing/Goal Seeking Model"}

{"target":"Goal","geometry":{"x":160,"y":13.75,"width":60,"height":47.5}}

{"target":"Link","geometry":{"x":150,"y":-68.75,"width":100,"height":100,"sourcePoint":{"x":150,"y":31.25},"targetPoint":{"x":250,"y":-68.75}}}

{"target":"Link","geometry":{"x":150,"y":-68.75,"width":100,"height":100,"sourcePoint":{"x":150,"y":31.25},"targetPoint":{"x":360,"y":181.25}}}

{"target":"factor","geometry":{"x":160,"y":261.25,"width":80,"height":30}}

{"target":"Link","geometry":{"x":150,"y":-68.75,"width":100,"height":100,"sourcePoint":{"x":150,"y":31.25},"targetPoint":{"x":250,"y":-68.75}}}

{"target":"Gap","geometry":{"x":360,"y":48.75,"width":60,"height":40}}

{"target":"Link","geometry":{"x":5,"y":-84.11442559194751,"width":100,"height":100,"sourcePoint":{"x":5,"y":15.885574408052491},"targetPoint":{"x":105,"y":-84.11442559194751}}}

{"attribute":"InitialValue","target":"Current","value":"0"}

{"attribute":"Equation","target":"factor","value":"0.5"}

{"attribute":"Equation","target":"Goal","value":"1"}

{"attribute":"Equation","target":"Goal","value":"[Goal]-[Current]"}

{"attribute":"Equation","target":"Goal","value":"[Gap]*[factor]"}

{"attribute":"TimeLength","value":"10"}

{"attribute":"TimeUnits","value":"Hours"}

DIAGRAM

When you look at the model admittedly we added Gap which we haven't addressed before. This was done so we could explicitly plot the difference between the Current value and the Goal. The factor is simply a multiplier between 0 and 1 to govern the extent to which the Gap governs the change.

RESULTS

Take a look at the Time Settings for the model and you'll see that the model was set up to run from 0 to 10 with a time step of 1 and a units of hours. These were just selected to create a generic model where you could consider the Goal to be 100% and the other values as having values between 0 and 100%. This way we can consider the implications of the interactions without getting hung up on the actual values.

The graph shows that as Current moves toward the Goal the Gap decreases as does the change which is moving Current in the direction of Goal. Once Current reaches Goal the Gap is zero is change. This structure endeavors to remove the tension between Current and Goal, the Gap, to bring a balance to the situation.

# End Model

[** Balancing/Goal Seeking](http://insightmaker.com/insight/6168)

~ Exercise

Run the model in Figure 13 with various values for factor. What do you notice about the relation between Current and Gap? And what do you notice about the curves as the factor gets larger and larger?

~ End Exercise

Under Time Units and Step Selection we talked about it being essential that the the Time Units were selected appropriate to what was being modeled. In this case since it's a generic model one Time Unit is pretty much as appropriate as any other. The Time Step is another matter though, or is it? We said one chooses a Time Step such that none of the relevant interactions are missed and the change from one Time Step to another doesn't change the result.

----------

~ Exercise

Set up the model in Figure 13 to run with Current = 0, Goal = 1, and factor = .75. Now run the model with a Time Step of 1, .5. 25. .125. Does the result actually change? Look at the Tabular Display associated with the Simulation Result. As you make the Time Step smaller and smaller are the results more correct?

~ End Exercise

Considering that we don't know anything about a real environment being modeled in Figure 13 it's a bit difficult to determine if the result is actually more correct as the Time Step used is smaller and smaller.

You might have also realized by this point that it would be quite difficult if we attempted to use this model to model any of the situations depicted in Figure 12. While progress toward the goal in the situations depicted is promoted by the Gap between the Goal and Current the change in those situations isn't likely to be proportional to that Gap.

Figure 15 presents a modification to the model of Figure 13 where the factor has been replaced by a constraint. It looks like there have been lots of changes though they all cosmetic except the way Workers influence work on a daily basis.

# Model

{"title": "Work Completion Model"}

{"load": "<mxGraphModel> <root> <mxCell id=\"0\"\/> <mxCell id=\"1\" parent=\"0\"\/> <Setting Note=\"\" Version=\"28\" TimeLength=\"10\" TimeStart=\"0\" TimeStep=\"0.5\" TimeUnits=\"Days\" StrictUnits=\"true\" Units=\"\" HiddenUIGroups=\"Validation,User Interface\" SolutionAlgorithm=\"RK1\" BackgroundColor=\"white\" Throttle=\"-1\" Macros=\"\" SensitivityPrimitives=\"\" SensitivityRuns=\"50\" SensitivityBounds=\"50, 80, 95, 100\" SensitivityShowRuns=\"false\" id=\"2\"> <mxCell parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"20\" width=\"80\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Setting> <Display name=\"Default Display\" Note=\"\" Type=\"Time Series\" xAxis=\"Time (%u)\" yAxis=\"Gallons\" ThreeDimensional=\"false\" Primitives=\"30,24,44,33\" AutoAddPrimitives=\"true\" ScatterplotOrder=\"X Primitive, Y Primitive\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"3\"> <mxCell style=\"roundImage;image=\/builder\/images\/DisplayFull.png;\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"50\" y=\"20\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Stock name=\"Days Work Completed\" Note=\"Where one is currently progressing toward the goal.\" InitialValue=\"0\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" NonNegative=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"0.01\" id=\"24\"> <mxCell style=\"stock;image=None;shape=rectangle\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"420\" y=\"240\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"work\" Note=\"The change that happens as a result of the interaction of the factor and the Gap.\" FlowRate=\"IfThenElse([Work Remaining] &gt; [Workers],[Workers], [Work Remaining])\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"200\" SliderMin=\"0\" id=\"25\"> <mxCell style=\"flow\" parent=\"1\" target=\"24\" edge=\"1\"> <mxGeometry x=\"40\" y=\"100\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"150\" y=\"260\" as=\"sourcePoint\"\/> <mxPoint x=\"40\" y=\"200\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Display name=\"Tabular Display\" Note=\"\" Type=\"Tabular\" xAxis=\"Time (%u)\" yAxis=\"Gallons\" yAxis2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" ThreeDimensional=\"false\" Primitives=\"25,24\" Primitives2=\"\" AutoAddPrimitives=\"false\" ScatterplotOrder=\"X Primitive, Y Primitive\" Image=\"Display\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Bottom\" legendPosition=\"Automatic\" id=\"29\"> <mxCell style=\"display\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"10\" y=\"10\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Variable name=\"Project Days Work\" Note=\"The target that is to be reached or attained.\" Equation=\"60\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"200\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"10\" id=\"30\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"120\" y=\"92.5\" width=\"80\" height=\"57.5\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"31\"> <mxCell style=\"link\" parent=\"1\" source=\"30\" target=\"44\" edge=\"1\"> <mxGeometry x=\"130\" y=\"10\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"130\" y=\"110\" as=\"sourcePoint\"\/> <mxPoint x=\"230\" y=\"10\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"260\" y=\"120\"\/> <mxPoint x=\"290\" y=\"140\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"32\"> <mxCell style=\"link\" parent=\"1\" source=\"24\" target=\"44\" edge=\"1\"> <mxGeometry x=\"130\" y=\"10\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"130\" y=\"110\" as=\"sourcePoint\"\/> <mxPoint x=\"340\" y=\"260\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"460\" y=\"210\"\/> <mxPoint x=\"440\" y=\"180\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Variable name=\"Workers\" Note=\"\" Equation=\"8\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"10\" SliderMin=\"0\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" SliderStep=\"1\" id=\"33\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"140\" y=\"340\" width=\"90\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"34\"> <mxCell style=\"link\" parent=\"1\" source=\"33\" target=\"25\" edge=\"1\"> <mxGeometry x=\"130\" y=\"10\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"130\" y=\"110\" as=\"sourcePoint\"\/> <mxPoint x=\"230\" y=\"10\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"270\" y=\"330\"\/> <mxPoint x=\"290\" y=\"300\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Variable name=\"Work Remaining\" Note=\"The difference between the Goal and the Current value.\" Equation=\"[Project Days Work]-[Days Work Completed]\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" SliderStep=\"\" Image=\"None\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Middle\" id=\"44\"> <mxCell style=\"variable\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"320\" y=\"127.5\" width=\"80\" height=\"52.5\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"45\"> <mxCell style=\"link\" parent=\"1\" source=\"44\" target=\"25\" edge=\"1\"> <mxGeometry x=\"-15\" y=\"-5.364425591947509\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-15\" y=\"94.63557440805249\" as=\"sourcePoint\"\/> <mxPoint x=\"85\" y=\"-5.364425591947509\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"300\" y=\"170\"\/> <mxPoint x=\"280\" y=\"220\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <\/root> <\/mxGraphModel> "}

DIAGRAM

If you run the model with Project Days Work = 60, Workers = 8 and Days Work Completed set at the default of zero and Time Step = 1 you should see the graph in Figure 16.

RESULTS

The reason the graph looks like this is because of the constraint placed on the the work because of the number of Workers available. This is accomplished by the formula embedded in the flow.

> work = IfThenElse([Work Remaining] > [Workers],[Workers],[Work Remaining])

This says that if there is more Work Remaining than there are Workers available to do the work then the amount of work that day equals the number of Workers. This goes on for the first 7 days then on the 8th day there are only four days work required to finish the project which is represented by the different slope on the line on the 8th day. You can see this in detail if you look at the Tabular Display.

# End Model

[** Goal Seeking with Constraint](http://insightmaker.com/insight/6171)

~ Exercise

Set up the model in Figure 16 to run with Time Step of .5. Compare the Tabular Display of this run with the results of the previous run above.  By making the time step smaller have we improved the accuracy of result? Why?

~ End Exercise

Again the appropriate Time Step is one that captures the activity occurring within the model. In this case the Workers are in integers and Project Work days are in integers, and with the Time Units in days the appropriate Time Step is 1. If there were events which happened in the model on the order of hours then you would have to decide whether to alter the model to run in hours or reduce the Time Step to ensure it was small enough so no interactions in the model were missed.

~ Exercise

Use the model in Figure 15 and reconfigure it for a couple of the activities depicted in Figure 12. Note that for this exercise you will have to relabel the stock, flow, and variables accordingly. You will also have to decide on the most appropriate Time Units and Time Step to use.

~ End Exercise

## Summary ##

Hopefully this chapter has helped you become more familiar with the modeling environment and the four model elements you will use most often.

- **Stock**. An accumulation of something that can only be changed by something flowing into or out of it.
- **Flow**. Something moving over time which adds to a stock or subtracts from a stock.
- **Variable**. Constant or equation computed each time the simulation steps.
- **Link**. Used to communicate a value from a Stock, Flow, or Variable, to a Stock, Flow or Variable. The source is not changed and a link to a stock can only be used to set it's initial value.

Because of the nature of the building blocks themselves there are only a small number of valid connections as depicted in Figure 3.

These valid connections are used to create only three different types of structures, linear growth, goal seeking and reinforcing growth. If you are comfortable with these you should be relieved to know that's all there are. Just three simple structures will be used for all the models you will ever build. Of course at times there may be quite a few of these connected together though you should be confident that you know about the pieces.

The models that you have experienced in Chapter 1 and Chapter 2 are referred to as Stock & Flow Simulation Models. These are also referred to as quantitative models because of the values associated with the simulation of these models. In the next chapter we'll investigate a number qualitative models which are also used in developing understanding. These are referred to as qualitative models because there are no numerical values associated with them, though there are times when they can be quite useful.