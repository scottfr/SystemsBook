# A Model Is A Model Is A Model

In previous chapter you worked two types of models qualitative models, i.e., no numbers, Follow the Clues and The Bird Feeder Dilemma! and quantitative models, with numbers, all the simulation models you ran. In this chapter we'll present two types of qualitative models, Rich Pictures and Causal Loop Diagrams, and more detail about Stock & Flow Simulation Models, which are quantitative, and additional information that will help you develop better models.

# Model

{"title": "Three Types of Models", "description": "Different though each aiding understanding.", "load": "http://insightmaker.com/insight/8932"}

# End Model

## The Boy Who Cried Wolf ##

# Model

{"title": "The Boy Who Cried Wolf", "description": "Storytelling as you unfold a model.", "load": "http://insightmaker.com/insight/7103"}

# End Model

## Uncovering the System ##

# Model

{"title": "Systems Thinking: The Essence of And?", "description": "To uncover the system one must continue to seek out the influences.", "load": "http://insightmaker.com/insight/3365"}

# End Model

In the next section you will be introduced to the Unfolding feature of Insight Maker which you can use to build a script so the model will explain itself to someone else when you're not there.

## Storytelling ##

Even though you may conscientiously develop your model and add comments often it turns out that people initially look at the whole model and are immediately overwhelmed. It might be somewhat like trying to eat a whole Elephant in a single bite. Storytelling provides a way to overcome this difficulty.

Storytelling a model is intended to reveal a model little by little and explain it along the way. Click on the View Story button in the lower left corner of the screen, read the text, and then click the Step Forward arrow on the right repeatedly to have the model presented as a story.

Adding a story to a model is very straight forward and is initiated by clicking \u{Add Story} in the \u{Tools} section of the \u{Toolbar}. This opens the \u{Story Designer} which is described as follows.

![Figure 8. Story Designer](03-im-7104.png)

[** Figure 8](http://www.insightmaker.com/insight/7085)

The main elements of this window are...

- **Enabled**. This check box allows you to actually enable Storytelling. If this box is checked the green plus sign and View Story will show up in the lower left corner of the window.
- **Automatically View**. There are four options on this drop down allowing you to indicate the conditions under which View Story should execute automatically when the model is opened. The options are Never, For Editors, For Non-Editors, Always.
- **Story Steps**. Lists the steps that you have defined as part of the story. You may reorder steps by clicking and dragging them to the new location. If you click on one of the steps it's definition will be displayed on the right side of the Story Designer window. Currently the definition of the first Visibility Change is displayed.
- **- Remove**. To remove an Story Step first click on it to select it then click the **- Remove** button.
- **+ Add Step**. A drop down which allows you to select which type of step you want to add. New steps are added after the currently selected step. If the new step is not created where you want it just select it and drag it to the location in the sequence where you want it. The various steps will be described shortly.
- **Cancel**. Allows you to exit the Story Designer and not save any changes.
- **Apply**. Applies all the changes you have made in the Story Designer and exits.

There are five different types of steps you can include in a story.

![Figure 9. Steps of a Story](03-im-7104a.png)

[** Figure 9](http://www.insightmaker.com/insight/7104)

When you select any one of these steps it will be added after the currently selected step in the list. As the following step types are described you might want open the Story Designer and click on different Unfolding Steps to visualize how they're defined.

- **Change Visibility**. Allows you to specify the Opacity, with the slider, for one or more elements of the model when the step is executed. The steps may be selected from the drop down or you may select one or more items from the model and then click the **Select from Diagram** button to put those items in the list. Note that clicking the **Select from Diagram** button will replace the already selected elements with whatever you've selected in the model. If you want to add or remove one more more Primitives it's probably better to use the drop down to add or click the existing item to remove it.
- **Show Message**. Allows you to enter a text message you want to be displayed. There are some formatting options available in the Message edit window.
- **Toggle Folders**. Use this option to Expand or Collapse one or more folders. This is really useful if you want to expand a folder, walk through the items in the folder and then close the folder.
- **Run Action**. Provides you with a window in which you can enter Javascript commands to control various aspects of the model. There are a large number of functions in the [Insight Maker API](http://insightmaker.com/sites/default/files/API/files/API-js.html) that you can employ in this step.
- **Group Steps**. This step creates a folder in the sequence in which you can place multiple steps. This allows you to indicate there are several steps you want to execute with a single Next Step click. You can see how this was used in the Figure 8 definition of an unfolding. You can open and close a New Group folder by toggling the little triangle to the left of it. Also if you click on a folder you can rename it in the **Name** field on the right.

By creating a story of your model you significantly increase the likelihood that others will understand the insights your model is endeavoring to surface. You might even find that in the process of creating the story you uncover ways to improve or clarify the model for yourself.



## Summary ##

Always remember that a model is a simplification of the world around you intended to help you understand something. You should use a modeling form that adequately serves your quest for understanding. Stock & Flow, Rich Picture, and Causal Loop models are only three of a very large array of possible modeling forms that exist. Use them to the extent that they serve you and when they don't find a form that does. The Modeling and Simulation references provide access to several additional types of diagrams that have been created with Insight Maker, though there are probably more that haven't yet been identified. The Model Thinking Course by Scott E. Page presents a very extensive exposure to many types of models useful for understanding different aspects of the world around us.

### Rich Pictures ###

- Often easier for others to relate to and understand because of the images in the model.
- No rules for creating them though remember that you need to tell a story.
- Because you need to tell a story make the model as understandable as possible.

### Causal Loop Diagrams ###

- Specific Guidelines for how to depict the relationships between the elements.
- Two conventions for expressing relations.
- S and O notation can produce misinterpretations when it comes to stocks.
- The older + and - notation is considered more appropriate.
- Color coding relations is an alternative to both notations, though be consistent.
- Employing explicit stock representations often reduces misinterpretations.
- Hybrid Rich Pictures/Causal Loop Diagrams are often the very meaningful.

### Storytelling ###

- Makes it far easier for others to understand the insights you're trying to surface with your model.

## References ##

- [Senge, P. 1990. The Fifth Discipline: The Art & Practice of the Learning Organization](http://www.amazon.com/Fifth-Discipline-Practice-Organization-ebook/dp/B000SEIFKK/)
- [Modeling & Simulation with Insight Maker](http://www.systemswiki.org/index.php?title=Modeling_%26_Simulation_with_Insight_Maker)
- [Model Thinking Course](https://www.coursera.org/course/modelthinking) by Scott E. Page, University of Michigan
- [Rich Pictures](http://systems.open.ac.uk/materials/T552/pages/rich/richAppendix.html) from Open University Course T552
