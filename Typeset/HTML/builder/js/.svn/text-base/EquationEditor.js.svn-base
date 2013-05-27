"use strict";
/*

Copyright 2010-2012 Scott Fortmann-Roe. All rights reserved.

This file may distributed and/or modified under the
terms of the Insight Maker Public License (http://insightMaker.com/impl).

*/

var codeEditor;

Ext.form.customFields = {
	'code': Ext.extend(Ext.form.TriggerField, {
		enableKeyEvents: false,
		selectOnFocus: true
	}),
	'converter': Ext.extend(Ext.form.TriggerField, {
		enableKeyEvents: false,
		selectOnFocus: true,
		stripCharsRe: /[^0-9\;\,\. \-]/g
	}),
	'units': Ext.extend(Ext.form.TriggerField, {
		enableKeyEvents: false,
		selectOnFocus: true,
		stripCharsRe: /[^A-Za-z 0-9\.\/\(\)\*\^]/g
	}),
	'richText': Ext.extend(Ext.form.TriggerField, {
		enableKeyEvents: false,
		selectOnFocus: true
	})
};

Ext.form.customFields['code'] = Ext.extend(Ext.form.customFields['code'], {
	onTriggerClick: function() {

		this.suspendEvents(false);
		this.editorWindow = new Ext.EquationWindow({
			parent: this,
			code: this.getValue(),
			cell: getSelected()[0]
		});
		this.editorWindow.show();
	},

	listeners: {
		'keydown': function(field) {
			field.setEditable(!/\\n/.test(field.getValue()));
		},
		'beforerender': function() {

			if (this.regex != undefined) {
				this.validator = function(value) {
					return this.regex.test(value);
				};
			}

		}
	}
});

Ext.EquationWindow = function(args) {
	var obj = this;

	obj.args = args;

	var code = obj.args.code.replace(/\\n/g, "\n");

	var cell = obj.args.cell;
	var neighbors = [];
	var hood = neighborhood(cell);
	for(var i=0; i<hood.length; i++){
		if(! hood[i].linkHidden){
			var s = '<big><img width=16 height=16 src="'+builder_path+'/images/add.png"/> ' + clean(hood[i].item.getAttribute("name")) + '</big>';
			if(hood[i].type=="agent"){
				s = "<i class='gray'>&nbsp;&nbsp;" + s + "</i>";
			}
			neighbors.push( {
				name: hood[i].item.getAttribute("name"),
				item: s
			});
		}
	}

	var refstore = new Ext.data.Store({
		autoDestroy: true,
		idIndex: 0,
		fields: [{
			type: "string",
			name: 'name'
		}, {
			type: "string",
			name: 'item'
		}],
		data: neighbors
	});

	var neighList = new Ext.grid.Panel({
		store: refstore,
		region: 'east',
		width: 200,
		margin: '3 3 3 3',
		columns: [{
			header: 'References',
			flex: 1,
			dataIndex: 'item',
			sortable: false
		}]
	});

	codeEditor = new Ext.form.TextArea({
		id: 'myCode',
		name: 'myCode',
		enterIsSpecial: true,
		value: code,
		fieldStyle: 'font-size:large;',
		width: 200,
		margin: '3 3 3 3',
		region: 'center',
		listeners: {
			specialkey: function(field, e) {
				// e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
				// e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
				if (e.getKey() == e.TAB) {
					insertAtCursor(String.fromCharCode("      "));
				}
			}
		}
	});




	var helpData = [
	["Mathematical", 
	[
	["Round", "Round(##Value$$)", "Rounds a number to the nearest integer.", ["Round(3.6)", "4"]],
	["Round Up", "Ceiling(##Value$$)", "Rounds a number up to the nearest integer.", ["Ceiling(3.6)", "4"]],
	["Round Down", "Floor(##Value$$)", "Rounds a number down to the nearest integer.", ["Floor(3.6)", "3"]],
	["Cos", "Cos(##Angle$$)", "Finds the cosine of an angle.", ["Cos({180 Degrees})", "-1"]],
	["ArcCos", "ArcCos(##Value$$)", "Finds the arc-cosine of a value. The result includes units.", ["ArcCos(0)", "{90 Degrees}"]],
	["Sin", "Sin(##Angle$$)", "Finds the sine of an angle.", ["Sin({180 Degrees})", "0"]],
	["ArcSin", "ArcSin(##Value$$)", "Finds the arc-sine of a value.  The result includes units.", ["ArcSin(1)", "{90 Degrees}"]],
	["Tan", "Tan(##Angle$$)", "Finds the tangent of an angle.", ["Tan({Pi/4 Radians})", "1"]],
	["ArcTan", "ArcTan(##Value$$)", "Finds the arc-tangent of a value. The result includes units.", ["ArcTan(1)", "{45 Degrees}"]],
	["Log", "Log(##Value$$)", "Returns the base-10 logarithm of a number.", ["Log(1000)", "3"]],
	["Ln", "Ln(##Value$$)", "Returns the natural logarithm of a number.", ["Ln(e^2)", "2"]],
	["Exp", "Exp(##Value$$)", "Returns e taken to a power.", ["Exp(1)", "e"]],
	["Sum", "Sum(##Values$$)", "Returns the sum of a vector or list of numbers.", ["Sum(7, 5, 6)", "28"]],
	["Product", "Product(##Values$$)", "Returns the product of a vector or list of numbers.", ["Product(2, 4, -1)", "-8"]],
	["Maximum", "Max(##Values$$)", "Returns the largest of a vector or list of numbers.", ["Max(2, 4, -1)", "4"]],
	["Minimum", "Min(##Values$$)", "Returns the smallest of a vector or list of numbers.", ["Min(2, 4, -1, 3)", "-1"]],
	["Mean", "Mean(##Values$$)", "Returns the mean of a vector or list of numbers.", ["Mean(2, 7, 3)", "4"]],
	["Median", "Median(##Values$$)", "Returns the median of a vector or list of numbers.", ["Median(2, 7, 3)", "3"]],
	["Standard Deviation", "StdDev(##Values$$)", "Returns the standard deviation of a vector or list of numbers.", ["StdDev(1, 2, 3)", "1"]],
	["Absolute Value", "Abs(##Value$$)", "Returns the absolute value of a number.", ["Abs(-23)", "23"]],
	["Mod", "##(Value One)$$ mod ##(Value Two)$$", "Returns the remainder of the division of two numbers.", ["13 mod 5", "3"]],
	["Square Root", "Sqrt(##Value$$)", "Returns the square root of a number.", ["Sqrt(9)", "3"]],
	["Pi", "pi", "The value 3.14159265."],
	["e", "e", "The value 2.71828183."],
	["Logit", "Logit(##Value$$)", "Returns the logit transformation of the value. Converts values on a 0 to 1 scale to a -Infinity to Infinity scale.", ["Logit(0.5)", "0"]],
	["Expit", "Expit(##Value$$)", "Returns the expit transformation of the value. Converts values on a -Infinity to Infinity scale to a 0 to 1 scale.", ["Expit(0)", "0.5"]]
	]],
	["Time", 
	[
	["Seconds", "Seconds", "The current time in seconds.", ["Seconds*1000", "The time in milliseconds"]],
	["Minutes", "Minutes", "The current time in minutes.", ["Seconds = Minutes*60", "True"]],
	["Hours", "Hours", "The current time in hours."],
	["Days", "Days", "The current time in days."],
	["Weeks", "Weeks", "The current time in weeks."],
	["Months", "Months", "The current time in weeks."],
	["Years", "Years", "The current time in years.", "IfThenElse(Years > 10, 15, 0)"],
	["Current Time", "Time", "The current time including units.", "IfThenElse(Time > {10 Years}, 15, 0)"],
	["Time Start", "TimeStart", "The simulation start time including units."],
	["Time Step", "TimeStep", "The simulation time step including units."],
	["Time Length", "TimeLength", "The total length of the simulation including units."],
	["Time End", "TimeEnd", "The time at which the simulation ends including units.", ["TimeStart + TimeLength = TimeEnd", "True"]]
	]],
	["Historical", 
	[
	["Delay", "Delay(##[Primitive]$$, ##Delay Length$$, ##Default Value$$)", "Returns the value of a primitive (referenced with <...>) for a Delay Length of time ago. Default Value stands in for the primitive value in the case of negative times.", "Delay([Income], {5 Years})"],
	["Delay1", "Delay1(##[Primitive]$$, ##Delay Length$$, ##Initial Value$$)", "Returns a smoothed, first-order exponential delay of the value of a primitive. Initial Value is optional.", "Delay1([Income], 5, 10000)"],
	["Delay3", "Delay3(##[Primitive]$$, ##Delay Length$$, ##Initial Value$$)", "Returns a smoothed, third-order exponential delay of the value of a primitive. Initial Value is optional.", "Delay3([Income], {20 Months}, 10000)"],
	["Smooth", "Smooth(##[Primitive]$$, ##Length$$, ##Initial Value$$)", "Returns a smoothing of a primitive's past values. Results in an averaged curve fit. Length affects the weight of past values. Initial Value is optional."],
	["PastValues", "PastValues(##[Primitive]$$)", "Returns the values a primitive has taken on over the course of the simulation. The second optional argument is a time window to limit the depth of the history.", ["Sum(PastValues([Income]))", "Total past income"]],
	["Maximum", "PastMax(##[Primitive]$$)", "Returns the maximum of the values a primitive has taken on over the course of the simulation. The second optional argument is a time window to limit the calculation.", ["PastMax([Income], {10 Years})", "The maximum income in the past 10 years"]],
	["Minimum", "PastMin(##[Primitive]$$)", "Returns the minimum of the values a primitive has taken on over the course of the simulation. The second optional argument is a time window to limit the calculation.", ["PastMin([Income], 10)", "The minimum income in the past 10 units of time"]],
	["Median", "PastMedian(##[Primitive]$$)", "Returns the median of the values a primitive has taken on over the course of the simulation. The second optional argument is a time window to limit the calculation."],
	["Mean", "PastMean(##[Primitive]$$)", "Returns the mean of the values a primitive has taken on over the course of the simulation. The second optional argument is a time window to limit the calculation."],
	["Standard Deviation", "PastStdDev(##[Primitive]$$)", "Returns the standard deviation of the values a primitive has taken on over the course of the simulation. The second optional argument is a time window to limit the calculation."],
	["Correlation", "PastCorrelation(##[Primitive]$$, ##[Primitive]$$)", "Returns the correlation between the values of that two primitives have taken on over the course of the simulation. The third optional argument is an optional time window to limit the calculation.", ["PastCorrelation([Income], [Expenditures], {10 Years})", "The correlation between income and expenditures over the past 10 years."]],
	["Fix", "Fix(##Value$$, ##Period=-1$$)", "Takes the dynamic value and forces it to be fixed over the course of the period. If period is -1, the value is held constant over the course of the whole simulation.", ["Fix(Rand, {5 Years})", "Chooses a new random value every five years"]]
	]],
	["Random Numbers", 
	[
	["Uniform Distribution", "Rand(##Minimum$$, ##Maximum$$)", "Generates a uniformly distributed random number between the minimum and maximum. The minimum and maximum are optional and default to 0 and 1 respectively.", ["Rand", "0.7481"]],
	["Normal Distribution", "RandNormal(##Mean$$, ##Standard Deviation$$)", "Generates a normally distributed random number with a mean and a standard deviation. The mean and standard deviation are optional and default to 0 and 1 respectively.", ["RandNormal(10, 1)", "11.23"]],
	["Lognormal Distribution", "RandLognormal(##Mean$$, ##Standard Deviation$$)", "Generates a lognormally distributed random number with a mean and a standard deviation."],
	["Binary Distribution", "RandBoolean(##Probability$$)", "Returns 1 with the specified probability, otherwise 0. The probability is optional and defaults to 0.5.", ["RandBoolean(0.1)", "False"]],
	["Binomial Distribution", "RandBinomial(##Count$$, ##Probability$$)", "Generates a binomially distributed random number. The number of successes in Count random events each with Probability of success."],
	["Negative Binomial", "RandNegativeBinomial(##Successes$$, ##Probability$$)", "Generates a negative binomially distributed random number. The number of random events each with Probability of success required to generate the specified Successes."],
	["Poisson Distribution", "RandPoisson(##Lambda$$)", "Generates a Poisson distributed random number."],
	["Triangular Distribution", "RandTriangular(##Minimum$$, ##Maximum$$, ##Peak$$)", "Generates a triangularly distributed random number."],
	["Exponential Distribution", "RandExp(##Lambda$$)", "Generates an exponentially distributed random number with the specified rate parameter."],
	["Gamma Distribution", "RandGamma(##Alpha$$, ##Beta$$)", "Generates a gamma distributed random number."]
	]],
	["Agents",
	[
	["Find All", "FindAll(##[Agent Population]$$)", "Returns a vector of all the agents in the agent population."],
	["Find State", "FindState(##[Agent Population]$$, ##[State]$$)", "Returns an agent population of agents in the specified state.", ["FindState([University], [Smoker])", "All smokers in the University population"]],
	["Find Not State", "FindNotState(##[Agent Population]$$, ##[State]$$)", "Returns a vector of agents not in the specified state.", ["FindNotState([University], [Smoker])", "All non-smokers in the University population"]],
	["Find Index", "FindIndex(##[Agent Population]$$, ##Index$$)", "Returns an agent with the specified index. Agent indexes start at 1.", ["FindIndex([Population], 1)", "The first agent created"]],
	["Find Nearby", "FindNearby(##[Agent Population]$$, ##[Target]$$, ##Distance$$)", "Returns a vector of agents that are within the specified distance of a target agent.", ["FindNearby(FindState([Population], [Infected]), [Self], 25)", "All infected people who are near the agent"]],
	["Find Nearest", "FindNearest(##[Agent Population]$$, ##[Target]$$, ##Count=1$$)", "Returns the nearest agents to the target agent. The number of agents returned is specified by the optional Count.", ["FindNearest([Population], [Target])", "The nearest agent to the target"]],
	["Find Furthest", "FindFurthest(##[Agent Population]$$, ##[Target]$$, ##Count=1$$)", "Returns the agent farthest from the target agent. The number of agents returned is specified by the optional Count.", ["FindFurthest([Population], [Target], 4)", "The four furthest agents from the target"]],
	["Value", "Value(##[Agent Population]$$, ##[Primitive]$$)", "Returns the values of the specified primitive for each agent in the population as a vector.", ["Mean(Value([University], [GPA]))", "The average GPA of all students in the University population"]],
	["Set Value", "SetValue(##[Agent Population]$$, ##[Primitive]$$, ##Value$$)", "Sets the value of the specified primitive for each agent in the population to the given value.", ["SetValue([University], [Smoker], false)", "Make all the smokers quit smoking"]],
	["Location", "Location(##[Agent]$$)", "Returns the location of an agent as the vector <<x, y>>.", ["Select(Location([Self]), 1)", "The x-coordinate of the agent"]],
	["Distance", "Distance(##[Agent 1]$$, ##[Agent 2]$$)", "Returns the distance between two agents."],
	["Move", "Move(##[Agent]$$, ##<<x, y>>$$)", "Moves an agent the amount specified.", ["Move([Self], <<Rand, Rand>>)", "Take a random walk"]],
	["MoveTowards", "MoveTowards(##[Agent]$$, ##[Target]$$, ##Distance$$)", "Moves an agent towards a target agent the distance specified.", ["MoveTowards([Self], [Prey], 10)", "Chase after the prey"]],
	["Connected", "Connected(##[Agent]$$)", "Returns the agents connected in the network to an agent.", ["Count(Connected([Self]))", "The number of connections an agent has"]],
	["Connect", "Connect(##[Agent 1]$$, ##[Agent 2]$$)", "Connects two agents in the network. The second parameter can also be a vector of agents.", ["Connect([Self], FindNearest([Population], [Self]))", "Connects an agent to the nearest agent to it in the population"]],
	["Unconnect", "Unconnect(##[Agent 1]$$, ##[Agent 2]$$)", "Unconnects two agents in the network. The second parameter can also be a vector of agents.", ["Unconnect([Self], Connected([Self]))", "Removes an agent's connections"]],
	["PopulationSize", "PopulationSize(##[Agent Population]$$)", "The total number of agents in a population."],
	["Add", "Add(##[Agent Population]$$, ##[Base]=Initial Agent$$)", "Adds a new agent to the population. If [Base] is set, the new agent will be a clone of [Base]. Otherwise the agent will be like a newly created agent at the start of the simulation.", ["Repeat(Add([University]), 200)", "Enroll 200 new students in the University"]],
	["Remove", "Remove(##[Agent]$$)", "Removes an agent from the population. The agent will no longer be simulated. Can be used to \"Kill\" an agent.", ["Map(FindState([University], [Smoker]), Remove(x))", "Expel all the smokers from the University"]],
	["Width", "Width(##[Agent Population]$$)", "The width of the agent population geographic region."],
	["Height", "Height(##[Agent Population]$$)", "The height of the agent population geographic region."]
	]],
	["Vectors",
	[
	["Count", "Count(##Vector$$)", "Counts the number of elements in a vector.", ["Count(<<1, 1, 2, 3>>)", "4"]],
	["Join", "Join(##Item 1$$, ##Item 2$$, ##Item N$$)", "Merges items together into a combined vector.", ["Join(<<0>>, <<1, 1, 2>>)", "<<0, 1, 1, 2>>"]],
	["Flatten", "Flatten(##Vector$$)", "Flattens a vector removing and expanding all nested vectors.", ["Flatten(<< <<0>>, <<1, 1, 2>> >>)", "<<0, 1, 1, 2>>"]],
	["Unique", "Unique(##Vector$$)", "Returns a vector with duplicates removed.", ["Unique(<<1, 1, 2, 3>>)", "<<1, 2, 3>>"]],
	["Union", "Union(##Vector 1$$, ##Vector 2$$)", "Returns the combined elements of two vectors (with duplicates removed).", ["Union(<<1, 2>>, <<2, 3>>)", "<<1, 2, 3>>"]],
	["Intersection", "Intersection(##Vector 1$$, ##Vector 2$$)", "Returns the elements that exist in both vectors.", ["Intersection(<<1, 2>>, <<2, 3>>)", "<<2>>"]],
	["Difference", "Difference(##Vector 1$$, ##Vector 2$$)", "Returns the elements that exist in only one of the two vectors.", ["Difference(<<1, 2>>, <<2, 3>>)", "<<1, 3>>"]],
	["Sort", "Sort(##Vector$$)", "Sorts a vector from smallest value to largest value.", ["Sort(<<1, 3, 2>>)", "<<1, 2, 3>>"]],
	["Reverse", "Reverse(##Vector$$)", "Reverses the ordering of elements in a vector.", ["Reverse(<<1, 2, 3>>)", "<<3, 2, 1>>"]],
	["Select", "Select(##Vector$$, ##Items$$)", "Subsets a vector. Items can be a single index (starting with index 1) or a vector of true/false values of equal length to the Vector.", ["Select(<<1, 4, 9>>, 2)", "4"]],
	["Sample", "Sample(##Vector$$, ##Sample Size$$, ##Allow Repeats=False$$)", "Takes a random sample from a vector. Allow Repeats specified if the same index can be sampled multiple time and is false by default.", ["Sample(<<1, 4, 9>>, 2)", "<<9, 1>>"]],
	["IndexOf", "IndexOf(##Vector$$, ##Needle$$)", "Returns the position of the needle within the vector (starting with index 1). If the needle is not found, 0 is returned.", ["IndexOf(<<1, 4, 9>>, 9)", "3"]],
	["Contains", "Contains(##Vector$$, ##Needle$$)", "Returns true if the needle is in the vector. Otherwise returns false.", ["Contains(<<1, 4, 9>>, 9)", "true"]],
	["Repeat", "Repeat(##x^2$$, ##Times$$)", "Creates a new vector by repeating a function a specified expression a number of times. <i>x</i> refers to the current index.", ["Repeat(x+1, 3)", "<<2, 3, 4>>"]],
	["Map", "Map(##Vector$$, ##x^2+1$$)", "Applies a function to each element of a vector, denoted with <i>x</i>, and returns the result.", ["Map(<<1, 2, 3>>, x*2)", "<<2, 4, 6>>"]],
	["Filter", "Filter(##Vector$$, ##x>7$$)", "Tests each element of a vector using a function and returns the elements which evaluate to true.", ["Filter(<<1, 2, 3>>, x >= 2)", "<<2, 3>>"]]
	]],
	["General",
	[["If Then Else", "IfThenElse(##Test Condition$$, ##Value if True$$, ##Value if False$$)", "Tests a condition and returns one value if the condition is true and another value if the condition is false.", ["IfThenElse(20 > 10, 7, 5)", "7"]],
	["Pulse", "Pulse(##Time$$, ##Height$$, ##Width=0$$, ##Repeat=-1$$)", "Creates a pulse input at the specified time with the specified Height and Width. Height defaults to 1 and Width defaults to 0. Repeat is optional and will create a pulse train if specified.", "Pulse({10 Years}, 5, 2)"],
	["Step", "Step(##Start$$, ##Height=1$$)", "Creates an input that is initially set to 0 and after the time of Start is set to Height. Height defaults to 1.", "Step({10 Years}, 5)"],
	["Ramp", "Ramp(##Start$$, ##Finish$$, ##Height=1$$)", "Creates a ramp input which moves linearly from 0 to Height between the Start and Finish times. Before Start, the value is 0; after Finish, the value is Height. Height defaults to 1.", "Ramp({10 Year}, {20 Years}, 5)"],
	["Stop", "Stop()", "Immediately terminates the simulation. Often used in combination with an IfThenElse statement.", "IfThenElse(rand < 0.01, Stop(), 0)"]
	]]
	
	];
	
	
	function addButton(vals){
		var tip = "<b>"+vals[1].replace(/\$\$/g, "").replace(/##/g, "").replace(/\</g,"&lt;").replace(/\>/g,"&gt;")+"</b><br/>"+vals[2];
		if(vals[3]){
			tip = tip+"<br/><br/><b>Example:</b><br/>&nbsp;&nbsp;";
			if((typeof vals[3]) == "string"){
				tip = tip+vals[3].replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
			}else{
				tip = tip+vals[3][0].replace(/\</g,"&lt;").replace(/\>/g,"&gt;")+" <b>&rarr;</b> "+vals[3][1].replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
			}
		}
		buttons.push(new Ext.Button({
			text: vals[0],
			margin:2,
			tooltip: tip,
			handler: function(btn, e) {
				insertAtCursor(vals[1].replace(/\$\$/g, "").replace(/##/g, ""));
			}
		}));
	}
	
	var tabItems=[];
	for (var i = 0; i < helpData.length; i++) {
			var buttons = [];
			for (var j = 0; j < helpData[i][1].length; j++) {
				addButton(helpData[i][1][j]);
			}
			tabItems.push({
				title: helpData[i][0],
				items: buttons,
				layout: {
					type: 'hbox', 
					align:"stretch"
				},
				autoScroll: true
			});
	}

	var equal = new Ext.Component({
		html: "<big><big><big>=</big></big></big>",
		region: "west",
		margin: '0 0 0 3'
	});

	var tabs = new Ext.TabPanel({
		region: 'south',
		height: 85,
		activeTab: 0,
		margin: '0 3 0 3',
		enableTabScroll: true,
		items: tabItems,
		border: false
	});


	//var form = new Ext.FormPanel({layout:"border",frame:true,border:true, items: [syntax, refList, help]});
	obj.win = new Ext.Window({
		title: getText('Equation Editor')+': '+clean(cell.getAttribute("name")),
		layout: 'border',
		closeAction: 'destroy',
		border: false,
		modal: true,
		items: [codeEditor, neighList, tabs, equal],
		width: 600,
		height: 400,
		resizable: false,
		shadow: true,
		buttonAlign: 'left',
		buttons: [{
			disabled: ! is_editor,
			scale: "large",
			text: getText('Units'),
			iconCls: 'units-icon',
			tooltip: getText('Edit primitive units'),
			handler: function() {
				var unitsWindow = new Ext.UnitsWindow({
					parent: "",
					cell: cell,
					units: cell.getAttribute("Units")
				});
				unitsWindow.show();
			}
		}, '->',
		{
			scale: "large",
			iconCls: "cancel-icon",
			text: getText('Cancel'),
			handler: function() {
				obj.win.close();
				if (obj.args.parent != "") {
					obj.args.parent.resumeEvents();
				}
			}
		}, {
			disabled: !is_editor,
			iconCls: "apply-icon",
			scale: "large",
			text: getText('Apply'),
			handler: function() {
				var newCode = codeEditor.getValue();
				newCode = newCode.replace(/\n|\r/g, "\\n");

				if (obj.args.parent != "") {
					obj.args.parent.setValue(newCode);
				}
				obj.win.close();


				if (obj.args.parent != "") {
					obj.args.parent.resumeEvents();
					grid.plugins[0].completeEdit();
					obj.args.parent.setEditable(!/\\n/.test(newCode));
				} else {
					graph.getModel().beginUpdate();
					setValue(obj.args.cell, newCode);
					graph.getModel().endUpdate();
					selectionChanged(false);
				}
			}
		}]
	});

	neighList.on('beforeselect', function(view, node, items, options) {
		insertAtCursor("[" + node.data.name + "]");
		codeEditor.focus(false, true);
		return false;
	});



	obj.show = function() {
		obj.win.show();
		codeEditor.focus(true, true);
	}
}


function insertAtCursor(myValue) {
	var document_id = codeEditor.getFocusEl().id;
	var text_field = document.getElementById(document_id);

	text_field.focus();
	var startPos = getInputSelection(text_field).start;
	var endPos = getInputSelection(text_field).end;

	codeEditor.setValue(codeEditor.getValue().substring(0, startPos) + myValue + codeEditor.getValue().substring(endPos, codeEditor.getValue().length));

	codeEditor.getFocusEl().focus();

	if (text_field.setSelectionRange) {
		text_field.focus();
		text_field.setSelectionRange(endPos + myValue.length, endPos + myValue.length);
	} else if (text_field.createTextRange) {
		var range = text_field.createTextRange();
		range.collapse(true);
		range.moveEnd('character', endPos + myValue.length);
		range.moveStart('character', endPos + myValue.length);
		range.select();
	}

	text_field.focus();
}

function getInputSelection(el) {
	var start = 0,
		end = 0,
		normalizedValue, range, textInputRange, len, endRange;

	if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
		start = el.selectionStart;
		end = el.selectionEnd;
	} else {
		range = document.selection.createRange();

		if (range && range.parentElement() == el) {
			len = el.value.length;
			normalizedValue = el.value.replace(/\r\n/g, "\n");

			// Create a working TextRange that lives only in the input
			textInputRange = el.createTextRange();
			textInputRange.moveToBookmark(range.getBookmark());

			// Check if the start and end of the selection are at the very end
			// of the input, since moveStart/moveEnd doesn't return what we want
			// in those cases
			endRange = el.createTextRange();
			endRange.collapse(false);

			if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
				start = end = len;
			} else {
				start = -textInputRange.moveStart("character", -len);
				start += normalizedValue.slice(0, start).split("\n").length - 1;

				if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
					end = len;
				} else {
					end = -textInputRange.moveEnd("character", -len);
					end += normalizedValue.slice(0, end).split("\n").length - 1;
				}
			}
		}
	}

	return {
		start: start,
		end: end
	};
}
