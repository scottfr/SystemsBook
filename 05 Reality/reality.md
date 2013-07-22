# Implications of Reality

Chapter 1 presented Bertalanffy's premise that that the same basic structures operated across all disciplines, and if one learned how these structures operated one could transfer much of their learning from one discipline to another. In the previous chapters there has been a focus on three basic structures in support of Bertalanffy's premise. In this chapter will will build on those three basic structures in such a way as to demonstrate that there exists a set of more complex structures composed of combinations of the basic three which also repeatedly occur across all disciplines of science.

## Basic Structures ##

The three basic structures are depicted in Figure 1 along with their characteristics behavior curves in Figure 2.

![Figure 1. Three Basic Structures](05-im-5138.png)

[** Figure 1](http://insightmaker.com/insight/5138)

![Figure 2. Three Basic Structures Behavior](05-im-5138a.png)

[** Figure 2](http://insightmaker.com/insight/5138)

In the Chapter 1 and Chapter 2 we covered these three basic structures in some detail and it was claimed that all the models you will ever create will simply be a combination of some number of these basic structures. We don't expect that you take this on faith, and while we can't prove it, though in this chapter we will provide you an opportunity to experience some of the more common structures which repeatedly occur across all disciplines of science.

## Typical Evolving Relationships ##

When you undertake something it is either to fix a problem, represented by the Balancing/Goal Seeking structure, or promote growth represented by the Reinforcing/Exponential growth structure. Seldom will you encounter either of these structures in their elementary form. Typically there are multiple structures interacting and even if you create an elementary structure is it likely to readily evolve into a more complex form. Figure 3 depicts the manner in which the Balancing/Goal Seeking and Reinforcing/Exponential Growth structures tend to found as part of, or evolve into, more complex structures. And each structure has a characteristics pattern of behavior, which in conjunction with its structure, help to identify the recurring structure.

![Figure 3. Typical Evolving Relationships](05-im-538.png)

[** Figure 3](http://insightmaker.com/insight/538)

The sections of this chapter will present an investigation of the more frequently experienced structures and their characteristic patterns of behavior. Links will be provided at the end of the chapter to allow you to continue investigation of those structures not presented here.

Each structure will be presented in a generic form so you can focus on the implications of the relationships rather than what the actual elements are. Each section will also provide appropriate strategies for dealing with the structure as well as a number of explicit example of this structure in different areas.

Because the Balancing/Goal Seeking and Reinforcing/Exponential Growth structures have already been presented we'll simply begin with more complex structures.

## Linear Progress Slows Over Time ##

A Limits to Results structure represents a situation where a Balancing Loop moving toward its goal is slowed in its progress due to some limiting factor. This is generally due to some resource restriction or constraint.

# Model

{"title": "Limits to Results", "description": "A balancing loop seldom progresses simply based on the difference between the [current state] and the [desired state]."}

{"load": "<mxGraphModel> <root> <mxCell id=\"0\"\/> <mxCell id=\"1\" parent=\"0\"\/> <Setting Note=\"\" Version=\"28\" TimeLength=\"10\" TimeStart=\"0\" TimeStep=\"1\" TimeUnits=\"Days\" Units=\"\" HiddenUIGroups=\"Validation,User Interface\" SolutionAlgorithm=\"RK1\" BackgroundColor=\"white\" Throttle=\"-1\" Macros=\"\" SensitivityPrimitives=\"\" SensitivityRuns=\"50\" SensitivityBounds=\"50, 80, 95, 100\" SensitivityShowRuns=\"false\" id=\"2\"> <mxCell parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"20\" width=\"80\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Setting> <Display name=\"Display\" Note=\"Identify which elements are to be displayed and in which of the available formats.\" Type=\"Time Series\" xAxis=\"Time (%u)\" yAxis=\"\" ThreeDimensional=\"false\" Primitives=\"4,6,7,8,12\" AutoAddPrimitives=\"false\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"3\"> <mxCell style=\"roundImage;image=\/builder\/images\/DisplayFull.png;\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"70\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Stock name=\"current state\" Note=\"The state of things at the beginning of the simulation assumed to be less than the desired state.\" InitialValue=\"0\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"1\" SliderMin=\"0\" NonNegative=\"false\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"0.1\" AllowNegatives=\"true\" id=\"4\"> <mxCell style=\"stock;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"400\" y=\"190.5\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"action\" Note=\"If gap is greater than limit then action = limit, otherwise it equals gap.\" FlowRate=\"IfThenElse([gap] &gt; [limit], [limit], [gap])\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" id=\"6\"> <mxCell style=\"\" parent=\"1\" target=\"4\" edge=\"1\"> <mxGeometry x=\"50\" y=\"-14.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"190\" y=\"205.5\" as=\"sourcePoint\"\/> <mxPoint x=\"50\" y=\"85.5\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Variable name=\"desired state\" Note=\"The desired state, assumed to be greater than the current state in this example.\" Equation=\"1\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"0.1\" id=\"7\"> <mxCell style=\"parameter;fillColor=none;labelBackgroundColor=none;strokeColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"210\" y=\"25.5\" width=\"60\" height=\"50\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Variable name=\"gap\" Note=\"The difference between the desired state and the current state which provides the basis for action.\" Equation=\"[desired state] - [Current State]\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" id=\"8\"> <mxCell style=\"parameter;fillColor=none;labelBackgroundColor=none;strokeColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"326\" y=\"75.5\" width=\"40\" height=\"30\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"9\"> <mxCell style=\"entity\" parent=\"1\" source=\"7\" target=\"8\" edge=\"1\"> <mxGeometry x=\"50\" y=\"-14.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"50\" y=\"85.5\" as=\"sourcePoint\"\/> <mxPoint x=\"150\" y=\"-14.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"290\" y=\"55.5\"\/> <mxPoint x=\"310\" y=\"55.5\"\/> <mxPoint x=\"320\" y=\"75.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"10\"> <mxCell style=\"entity\" parent=\"1\" source=\"4\" target=\"8\" edge=\"1\"> <mxGeometry x=\"50\" y=\"-14.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"50\" y=\"85.5\" as=\"sourcePoint\"\/> <mxPoint x=\"150\" y=\"-14.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"440\" y=\"165.5\"\/> <mxPoint x=\"431\" y=\"130.5\"\/> <mxPoint x=\"402\" y=\"106.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"11\"> <mxCell style=\"entity\" parent=\"1\" source=\"8\" target=\"6\" edge=\"1\"> <mxGeometry x=\"30\" y=\"-33.65652570442285\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"30\" y=\"66.34347429557715\" as=\"sourcePoint\"\/> <mxPoint x=\"130\" y=\"-33.65652570442285\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"290\" y=\"113.5\"\/> <mxPoint x=\"271\" y=\"146.5\"\/> <mxPoint x=\"270\" y=\"185.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Variable name=\"limit\" Note=\"A resource or process limit which action is not allowed to exceed.\" Equation=\"0.3\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"0.1\" id=\"12\"> <mxCell style=\"parameter;fillColor=none;labelBackgroundColor=none;strokeColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"160\" y=\"245.5\" width=\"60\" height=\"30\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"13\"> <mxCell style=\"entity\" parent=\"1\" source=\"12\" target=\"6\" edge=\"1\"> <mxGeometry x=\"50\" y=\"-14.5\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"50\" y=\"85.5\" as=\"sourcePoint\"\/> <mxPoint x=\"150\" y=\"-14.5\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"250\" y=\"265.5\"\/> <mxPoint x=\"270\" y=\"255.5\"\/> <mxPoint x=\"290\" y=\"235.5\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Picture name=\"B1 Goal&#xa;Seeking\" Note=\"\" Image=\"Negative Feedback Counterclockwise\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Bottom\" id=\"0b767fbc4cac5e1f4dff786f98f75235-14\"> <mxCell style=\"picture;image=\/builder\/images\/SD\/Negative Feedback Counterclockwise.png;imageFlipV=0;imageFlipH=0;fontStyle=1\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"340\" y=\"105.5\" width=\"34\" height=\"34\" as=\"geometry\"\/> <\/mxCell> <\/Picture> <\/root> <\/mxGraphModel>"}

DIAGRAM

Initial settings are: [current state] = 0, [desired state] = 1, [limit] = 0.3 and [action] = IfThenElse([gap] > [limit], [limit], [gap])

RESULTS

 Action is a constant value until the gap < limit. The choppy nature of the diagram will be addressed in the exercise below.

# End Model

[** Limits to Results Stock & Flow Simulation](http://insightmaker.com/insight/543)

~ Exercise

- Run the model with different values for limit. What difference do you see in the curve when the limit is evenly divisible into 1.
- What happens if you change the Time Step to 0.5, 0.25 and 0.125. What is the most appropriate value to use for Time Step?

~ Answer

- If the limit is evenly divisible into 1 then there is no change in the cure as the goal is reached.
- There isn't a noticeable difference between the graph for 0.25 and 0.125 so 0.25 would be the most appropriate value to use for Time Step.

~ End Exercise

### Examples ###

Numerous example for this structure should readily come to mind.

- Any undertaking to complete a project is restricted by the availability of resources.
- The flow of anything to fill or empty a stock is restricted by the capacity of what the liquid must flow through.
- The rate of production of a process is limited by the capacity of the process.

### Effective Strategy ###

- The effective way to avoid a Limits to Results scenario is simply to plan ahead to ensure there are sufficient resources available so progress toward results is not limited to a greater extent than acceptable. That said, remember that more of a good thing is not always the best answer. There is often a trade off and more resources may cost more than one gains by reducing the time by using more resources. There's always more than one thing that should be considered.

## Growth Slows Over Time ##

A Limits to Growth Systems Archetype consists of a Reinforcing Loop, the growth of which, after some success, is offset by the action of a Balancing Loop. As such it may produce exponential growth for a period of time before the growth slows.

# Model

{"title": "Limits to Growth", "description": "The natural exponential growth of the reinforcing structure is restricted by a balancing loop."}

{"load": "<mxGraphModel> <root> <mxCell id=\"0\"\/> <mxCell id=\"1\" parent=\"0\"\/> <Setting Note=\"\" Version=\"28\" TimeLength=\"15\" TimeStart=\"0\" TimeStep=\"1\" TimeUnits=\"Seconds\" Units=\"\" HiddenUIGroups=\"Validation,User Interface\" SolutionAlgorithm=\"RK1\" BackgroundColor=\"white\" Throttle=\"-1\" Macros=\"\" SensitivityPrimitives=\"\" SensitivityRuns=\"50\" SensitivityBounds=\"50, 80, 95, 100\" SensitivityShowRuns=\"false\" id=\"2\"> <mxCell parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"20\" width=\"80\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Setting> <Display name=\"Graph\" Note=\"\" Type=\"Time Series\" xAxis=\"Time (%u)\" yAxis=\"%o\" ThreeDimensional=\"false\" Primitives=\"5,5b1b4bfd9b97b7d4fc7111d936eb52e2-15,5b1b4bfd9b97b7d4fc7111d936eb52e2-16\" AutoAddPrimitives=\"true\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"3\"> <mxCell style=\"roundImage;image=\/builder\/images\/DisplayFull.png;\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"20\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Variable name=\"factor\" Note=\"Seldom is the action simply equal to the value of results. This is a factor to interact with results to define action.\" Equation=\"0.5\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"0.1\" id=\"7\"> <mxCell style=\"parameter;labelBackgroundColor=none;fillColor=none;strokeColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"62.5\" y=\"35\" width=\"50\" height=\"35\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Stock name=\"results\" Note=\"The accumulated result of action.\" InitialValue=\"1\" StockMode=\"Store\" Delay=\"10\" Volume=\"100\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1\" SliderMin=\"0\" NonNegative=\"false\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"1\" id=\"5\"> <mxCell style=\"stock;labelBackgroundColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"282.5\" y=\"140\" width=\"100\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Stock> <Flow name=\"action\" Note=\"Action arising from the interaction of results and factor adds to results.\" FlowRate=\"[results] * [factor]\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" id=\"11\"> <mxCell style=\"\" parent=\"1\" target=\"5\" edge=\"1\"> <mxGeometry x=\"22.5\" y=\"-50\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"102.5\" y=\"155\" as=\"sourcePoint\"\/> <mxPoint x=\"22.5\" y=\"50\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Link name=\"adds to\" Note=\"Results adds to action.\" BiDirectional=\"false\" id=\"12\"> <mxCell style=\"entity;strokeColor=#3366FF;fillColor=none;fontColor=#0000FF;labelBackgroundColor=none\" parent=\"1\" source=\"5\" target=\"11\" edge=\"1\"> <mxGeometry x=\"-127.5\" y=\"-95\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"22.5\" y=\"50\" as=\"sourcePoint\"\/> <mxPoint x=\"252.9593543907074\" y=\"76.48232211024276\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"322.5\" y=\"80\"\/> <mxPoint x=\"252.5\" y=\"60\"\/> <mxPoint x=\"182.5\" y=\"90\"\/> <\/Array> <mxPoint x=\"-1.25\" y=\"-95\" as=\"offset\"\/> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"14\"> <mxCell style=\"entity\" parent=\"1\" source=\"7\" target=\"11\" edge=\"1\"> <mxGeometry x=\"33.07428275285474\" y=\"-66.85393190303841\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"33.07428275285474\" y=\"33.146068096961585\" as=\"sourcePoint\"\/> <mxPoint x=\"213.34251690296804\" y=\"21.421949806400335\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"123.07428275285474\" y=\"73.14606809696159\"\/> <mxPoint x=\"142.5\" y=\"90\"\/> <mxPoint x=\"152.5\" y=\"120\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Display name=\"Table\" Note=\"\" Type=\"Tabular\" xAxis=\"Time (%u)\" yAxis=\"%o\" ThreeDimensional=\"false\" Primitives=\"5\" AutoAddPrimitives=\"false\" Image=\"Display\" yAxis2=\"\" Primitives2=\"\" showMarkers=\"false\" showLines=\"true\" showArea=\"false\" legendPosition=\"Automatic\" id=\"15\"> <mxCell style=\"display\" parent=\"1\" vertex=\"1\" visible=\"0\"> <mxGeometry x=\"20\" y=\"140\" width=\"64\" height=\"64\" as=\"geometry\"\/> <\/mxCell> <\/Display> <Picture name=\"R1 Growth\" Note=\"\" Image=\"Positive Feedback Counterclockwise\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Bottom\" id=\"4fe9dbfa5783f01cf070e332df4f0d1c-16\"> <mxCell style=\"picture;image=\/builder\/images\/SD\/Positive Feedback Counterclockwise.png;imageFlipV=0;imageFlipH=0;fontStyle=1\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"237.5\" y=\"75\" width=\"30\" height=\"35\" as=\"geometry\"\/> <\/mxCell> <\/Picture> <Flow name=\"slowing\" Note=\"\" FlowRate=\"IfThenElse([results] &gt; [limiting factor], ([results] - [limiting factor]) * [slowing factor], 0)\" OnlyPositive=\"true\" TimeIndependent=\"false\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"false\" SliderMax=\"100\" SliderMin=\"0\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-15\"> <mxCell style=\"\" parent=\"1\" source=\"5\" edge=\"1\"> <mxGeometry x=\"-127.5\" y=\"-95\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-127.5\" y=\"5\" as=\"sourcePoint\"\/> <mxPoint x=\"552.5\" y=\"155\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Flow> <Variable name=\"limiting factor\" Note=\"The value at which results begin to become limited.\" Equation=\"10\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"100\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"1\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-16\"> <mxCell style=\"parameter;labelBackgroundColor=none;fillColor=none;strokeColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"507.5\" y=\"30\" width=\"70\" height=\"40\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-17\"> <mxCell style=\"entity\" parent=\"1\" source=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-16\" target=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-15\" edge=\"1\"> <mxGeometry x=\"-127.5\" y=\"-95\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-127.5\" y=\"5\" as=\"sourcePoint\"\/> <mxPoint x=\"-27.5\" y=\"-95\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Link> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-18\"> <mxCell style=\"entity\" parent=\"1\" source=\"5\" target=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-15\" edge=\"1\"> <mxGeometry x=\"-127.5\" y=\"-95\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-127.5\" y=\"5\" as=\"sourcePoint\"\/> <mxPoint x=\"-27.5\" y=\"-95\" as=\"targetPoint\"\/> <Array as=\"points\"> <mxPoint x=\"362.5\" y=\"75\"\/> <mxPoint x=\"422.5\" y=\"65\"\/> <mxPoint x=\"462.5\" y=\"85\"\/> <\/Array> <\/mxGeometry> <\/mxCell> <\/Link> <Picture name=\"B2 Balance\" Note=\"\" Image=\"Negative Feedback Clockwise\" FlipHorizontal=\"false\" FlipVertical=\"false\" LabelPosition=\"Bottom\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-19\"> <mxCell style=\"picture;image=\/builder\/images\/SD\/Negative Feedback Clockwise.png;imageFlipV=0;imageFlipH=0;fontStyle=1;shape=image\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"397.5\" y=\"75\" width=\"30\" height=\"30\" as=\"geometry\"\/> <\/mxCell> <\/Picture> <Variable name=\"slowing factor\" Note=\"\" Equation=\"0\" Units=\"Unitless\" MaxConstraintUsed=\"false\" MinConstraintUsed=\"false\" MaxConstraint=\"100\" MinConstraint=\"0\" ShowSlider=\"true\" SliderMax=\"1\" SliderMin=\"0\" Image=\"None\" LabelPosition=\"Middle\" FlipHorizontal=\"false\" FlipVertical=\"false\" SliderStep=\"0.1\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-20\"> <mxCell style=\"parameter;labelBackgroundColor=none;fillColor=none;strokeColor=none\" parent=\"1\" vertex=\"1\"> <mxGeometry x=\"342.5\" y=\"210\" width=\"70\" height=\"45\" as=\"geometry\"\/> <\/mxCell> <\/Variable> <Link name=\"Link\" Note=\"\" BiDirectional=\"false\" id=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-21\"> <mxCell style=\"entity\" parent=\"1\" source=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-20\" target=\"5b1b4bfd9b97b7d4fc7111d936eb52e2-15\" edge=\"1\"> <mxGeometry x=\"-127.5\" y=\"-95\" width=\"100\" height=\"100\" as=\"geometry\"> <mxPoint x=\"-127.5\" y=\"5\" as=\"sourcePoint\"\/> <mxPoint x=\"-27.5\" y=\"-95\" as=\"targetPoint\"\/> <\/mxGeometry> <\/mxCell> <\/Link> <\/root> <\/mxGraphModel> "}

DIAGRAM

The structure is such that the action produces results which add to the action, the typical reinforcing structure. factor is just a value between 0 and 1 to allowing the variance of the rate of interaction. The balancing structure B2 is such that the slowing action drains from the results once the results actually reach the level of the limiting factor. The slowing factor is similar to factor in that allows for control of the rate of interaction.

[slowing] = IfThenElse([results] > [limiting factor], ([results] - [limiting factor]) * [slowing factor], 0)

RESULTS

With a [slowing factor] = 0 the balancing loop is disabled and the typical exponential growth curve is displayed.

{"attribute":"Equation","target":"slowing factor","value":"0.5"}

RESULTS

With a [slowing factor] = 0.5 and a [limiting factor] = 10 it is evident that the [results] are significantly diminished from the previous results.

{"attribute":"Equation","target":"slowing factor","value":"1.0"}

RESULTS

Now it's quite evident that the slowing action has actually affected the result to such an extent that it's no longer growing.

# End Model

[Limits to Growth Stock & Flow Simulation](http://insightmaker.com/insight/551)

~ Exercise

From the last example vary the values for factor to get a sense of how sensitive the result is to the R1 Growth loop strength.

~ End Exercise

### Examples ###

- Rabbits tend to multiply very rapidly so why is it we're not completely overrun by rabbits, well maybe everywhere except Australia?
- keep playing instead of cleaning up the mess in the room, which makes further play difficult, AND the increased mess repels one from cleaning up.
- [Limits to Growth Examples[(http://www.systemswiki.org/index.php?title=Category:Limits_to_Growth)

### Effective Strategies ###

- The best defense is a good offense. As defined in the effective strategies for the Reinforcing Loop, if there is a Reinforcing Loop operating start looking for what is going to become a limiting factor, and remove it before it even has a chance to create a substantial impact on the result.
- If the structure is already at a stage where the limiting factor is interacting with results to limit results the options are:
- Alter the limiting factor in such a way that it no longer interacts with the results to create a slowing action.
- Find a way to disconnect the results from the slowing action so it can no longer add to it.
- Disconnect the slowing action from the results so it can no longer have a negative impact.

### Areas of Concern ###

- There are often multiple limits to deal with which leads to an Attractiveness Principle.
- It is possible that limited shared resources are the source of the limiting factor leading to a Tragedy of the Commons.
- The limit may be insufficient capacity which leads to Growth and Underinvestment.