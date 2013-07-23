# A Model Is A Model Is A Model

In previous chapters you worked with what is referred to Stock & Flow Simulation Models. These are also referred to as quantitative models because of the numerical values associated with them. While there are other types of quantitative models in this text we're focusing on Stock & Flow Simulation Models. There is also a class of models referred to as qualitative models because they have no numeric values associated with them. There is a level of understanding well served by qualitative models. This chapter will serve to acquaint you with a couple types you can create with Insight Maker and are likely to be useful in your study of systems.

The models presented in this chapter are presented as images because they're really just pictures and not simulations. Links are provided if you want to access the sample models directly in Insight Maker. 

As we've said repeatedly, models are simplifications of some aspect of the world around us intended to help us understand something. The Stock & Flow Simulation Models are very explicit as they the relations are represented by numerical formulas and the model may be iterated over time. The models presented in the sections of this chapter may also assist in understanding situations though only from a relationship perspective. There are generally no numerical values associated with these model and they are not iterated over time.

## Rich Pictures ##

A Rich Pictures is a pictorial representation of a set of relationships intended to convey a level of understanding about those relationships and the implication of those relationships. The strength of Rich Pictures is that there are no rules associated with creating a Rich Picture. This means you create the picture that helps you understand the relationships.

The model in Figure 1 is intended to represent the relationships for a Savings Account. It is created using the Picture Primitive connected together with Links.

![Figure 1. Rich Pictures/Part 1](03-im-7085a.png)

[** Figure 1](http://insightmaker.com/insight/7085)

Picture Primitives are added to the canvas like any of the other Primitives. Just click on the Primitive to select it then click on the canvas where you want the Picture to be. You don't have to be too specific about the placement as items are very easy to move around on the canvas.

Once the Picture Primitive is placed on the canvas there are several options available on the \u{Configuration Panel}.

![Figure 2. Picture Primitive Configuration Panel](03-im-7085.png)

[** Figure 2](http://www.insightmaker.com/insight/7085)

The General section of the Picture Primitive is just like the Primitives you've used to this point with a \a{(name)} and \a{Note} parameters. The Image option in the User Interface section is new. Here you may select one of the built in pictures from the drop down menu, no picture, the first option on the menu, or paste a URL into the field which points to some graphic on the Internet. Note that the Internet option only works if you're connected to the Internet.

Once you've created the Picture simply use the Link element to connect them together as you did in the Stock & Flow models. After you select the Link tool and when you mouse over a Picture Primitive the small right arrow will appear in the center as the connection point. Simply click on the selection point and drag to the Primitive you want to connect to. You can't use Flows to connect Picture Primitives.

Note that you can use \p{Stocks}, \p{Variables}, \p{Converters} and \p{Text} in Rich Pictures. You can add images to all of them except \p{Text}. Even though this is the case most of the time using Picture Primitives will serve just fine. We'll talk about Buttons somewhere further along the way.

~ Exercise

Use the Picture Primitive and create a rich picture similar to Figure 1 and connect the Pictures together using the Link tool. Note that in the Configuration segment of the Configuration Panel for the Link there is an option to indicate whether a Link is bi-directional. Use some of these in your exercise.

~ End Exercise

The Text primitive is similar to any other primitive in that you select it then click on the canvas where you want the Text to appear. Once you create the text item you can edit the text, assign notes to it, connect to or from it with links, and style it with commands form the Style segment of the Toolbar.

In this version of the model we add a [Folder] and a [Link Label] to Rich Picture/Part 1.

![Figure 3. Rich Pictures/Part 2](03-im-7094.png)

[** Figure 3](http://insightmaker.com/insight/7094)

If you select the Link that has the \a{adds to} label on it you'll notice that the \a{(name)} field in the Configuration Panel contains the displayed \a{adds to} label and there's text in the \a{Note} field. These two attributes are like other Primitives. If the \a{(name)} field is blank or named \a{Link} it won't display. Any other text in the field will display on the Link, or near it if the link is segmented and curved. If you segment the Link the program doesn't really know where you want the label to be. As such if you select the link you'll see a small yellow node on the text. You can click on this node and move the label to wherever you would like it to be. Be warned that at times the positioning is a bit artful, though you'll readily get the knack of it.

Folders are provided so you can enclose a number of items you want to explicitly draw attention to as a concept and have the ability to hide the detail if you  choose. To hide the detail click on the little minus (-) sign in the upper left corner of the folder. when you do this the folder closes, displays it's name and the minus (-) sign changes to a plus (+) sign. And you probably also surmised when you closed the folder that you can select an image for a folder or provide an image URL.

Remember the intent of a model is to be some simplification of the world around you to promote understanding. And while there are really no rules for creating a Rich Picture, if you want others to understand one you might want to ensure it is easily understandable rather than confusing. How is the best way to ensure this? Present it to others and have them let you know where they think it is clear and where they think it is confusing. Then go work on it some more.

## Causal Loop Diagrams ##

A Causal Loop Diagram is more structured than a Rich Picture and less structured than a Stock & Flow Diagram. The Causal Loop Diagram was initially invented as a way to express the findings of a Stock & Flow simulation model without having to show the entire simulation model as it was expected it might overwhelm the audience.

While a Causal Loop Diagram is a qualitative model there is still much one can come to understand from one because of the information presented about the relations in one.

We begin with a model of the most basic relations between two elements of a model.

![Figure 4. Causal Loop Diagrams/Part 1](03-im-7100.png)

[** Figure 4](http://insightmaker.com/insight/7100)

The good news is there are no new aspects of Insight Maker you need to learn to create a Causal Loop Diagram. The diagram is created with \p{Stocks}, \p{Variables}, \p{Pictures} and \p{Links} with \p{Text} used to indicate the relationship between influencing variables and the influenced variables. After you create the elements, which you may represent with the \[Stock}, \p{Variable}, \p{Picture} or \p{Text} \u{Primitives} you use \u{Links} to connect them together and identify the relationship represented by the \u{Link}.

There are two widely used notations associated with Causal Loop Diagrams, both of which are presented below.

The first notation popularized by Senge in The Fifth Discipline{Cite:Senge, P. 1980. The Fifth Discipline: The Art and Practice of the Learning Organization. http://www.amazon.com/Fifth-Discipline-Practice-Organization-ebook/dp/B000SEIFKK/} uses an **S** and **O** notation as depicted in Figure 4.

- **S** implies that the influenced variable changes in the same direction as the influencing variable. If the influencing variable increases the influenced variable increases. If the influencing variable decreases the influenced variable decreases.
- **O** implies that the influenced variable changes in the opposite direction as the influencing variable. If the influencing variable increases then the influenced variable decreases. If the influencing variable decreases then the influenced variable increases.

The influence indicators are created as Text elements and positioned as you deem appropriate to represent the influence representative of the Link.

The **+** and **-** notation is an older notation and each has two possible meanings which are deduced from the context of the diagram.

- **+** implies that the influenced variable changes in the same direction as the influencing variable or the influencing variable adds to the influenced variable.
- **-** implies that the influenced variable changes in the opposite direction as the influencing variable or the influencing variable subtracts from the influenced variable.

The **+** and **-** notation are considered less likely to generate inconsistencies in a model when there are elements such as production and inventory are depicted. In this relationship the **+** interpreted as **adds to** for production adds to inventory. The situation is such that as production increases inventory increases and as production decreases inventory still increases, just not as rapidly. This should allow you to easily see that the **S** notation might result in a misinterpretation of the diagram as production decreases inventory decreases. To aid in avoiding the confusion some people use \p{Stocks} in their Causal Loop Diagrams to indicate those elements which are actually accumulations.

Because creating the \u{Link} indicators can get tedious in a hurry after you create the first one it's much easier to hold down the \u{Control Key} then click on the indicator and drag to a new location. This quickly creates you a copy of the indicator. You can actually use this sequence to duplicate any element, or selection of elements, of a model.

As this section is about Causal Loop Diagrams there probably should be some loops defined here somewhere shouldn't there? Figure 6, Causal Loop Diagrams/Part 2, presents a Causal Loop of the Balancing and Reinforcing loops presented in Chapter 1 and Chapter 2.

![Figure 5. Causal Loop Diagram/Part 2](03-im-7101.png)

[** Figure 5](http://insightmaker.com/insight/7101)

The Balancing and Reinforcing models presented vary slightly from typical causal loop diagrams in the following ways.

- **Variables**. Variables in a Causal Loop Diagram are typically just Text though here we've used Stocks for those variable which represent accumulations and Pictures, with no images, to represent the variables. The advantage in using Picture elements for variables is that there are no restrictions on labels because Picture elements are never used in equations.
- **Link Colors**. Because the Link identifiers have to be created separately and are not attached to the Link it's much easier to make **+** indicators Blue and **-** indicators Red. This seems to be an evolving convention and when used you could just leave the Link indicators out altogether.

While models are a simplification of the world around you intended to promote understanding they also represent an unfolding story. It is appropriate to sequence and label the loops. This gives others a guide to what order to read the story and the intent of the loop itself. The images are created with Picture elements and the images for reinforcing **+** and balancing **-** loops, both clockwise and counterclockwise are defined images available from the pull images pull down on the \p{Picture} \u{Configuration Panel}.

The easiest way to identify whether a loop is a reinforcing or balancing loop is to count the number of minus (-) influences around the loop. If the number is zero or even then the loop is a reinforcing loop. If the number is odd then it's a balancing loop.

## Hybrid Models ##

There are times when the message you want to get across may be best represented by a combination of Rich Picture and Causal Loop forms as depicted in Figure 6.

![Figure 6. Hybrid Model](03-im-7102.png)

[** Figure 6](http://insightmaker.com/insight/7102)

If the images make it easier for the model to develop and convey understanding then it helps them achieve their purpose. The model in Figure 7 presents a Hybrid Causal Loop Diagram for The Boy Who Cried Wolf Aesop's Fable.

![Figure 7. The Boy Who Cried Wolf](03-im-7103.png)

[** Figure 7](http://insightmaker.com/insight/7103)

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

The following storytelling examples may be viewed by clicking the following links.

* [Rabbit Population](http://insightmaker.com/insight/7104)
* [The Boy Who Cried Wolf](http://insightmaker.com/insight/7103)
* [Systems Thinking: The Essence of And?](http://insightmaker.com/insight/3365)

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
