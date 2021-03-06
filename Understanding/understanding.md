# Developing Understanding

In this chapter we will present a number of models to demonstrate the development process, discuss various aspects of the model development guidelines, and acquaint you with additional relevant aspects of simulation models in Insight Maker.

## The Boy Who Cried Wolf ##

All stories are actually models expressed in words rather than diagrams. All of the interactions in a story can be expressed in the form of a model, which provides an overview of the main interactions in a single picture. "The Boy Who Cried Wolf"^[The Boy Who Cried Wolf [http://insightmaker.com/insight/7103](http://insightmaker.com/insight/7103)] will unfold a model as a story and show the difference between a Rich Picture and a Causal Loop Diagram for the same story.

# Model
{"title": "The Boy Who Cried Wolf", "description": "Telling a story as you unfold a model.", "load": "http://insightmaker.com/insight/7103"}
# End Model

Just as all stories are models, you should ensure that models you develop actually tell a story. Telling stories makes it easier to communicate to others the insights surfaced in the model, and stories are much easier to remember than bits and pieces of data.

## Walking to Grandma's {#RedModel}

When you develop a model remember that it's a learning process, so don't expect everything to turn out the way it should the first time around. Remember to think of it as an iterative learning process. When something doesn't go the way you expected, don't think of it as error; it's an opportunity for learning. 

"Walking to Grandma's"^[Walking to Grandma's [http://insightmaker.com/insight/6778](http://insightmaker.com/insight/6778)] is a simple example of a question that might be answered with a model. And yes, obviously you could just do the math, but would you get better at building models if you did? This model also introduces the idea of Units, which are used to help ensure the soundness of your model. Insight Maker checks Units to make sure you're not trying to perform invalid arithmetic, such as adding 3 apples and 4 bananas.

# Model
{"title": "Walking to Grandma's", "description": "How long will it take us to get there?", "load": "http://insightmaker.com/insight/6778"}
# End Model

~ Exercise
In the [**Stop at Grandmas**] variable change {0 miles} to {0 kilometers} does the model still work? Why?
~ Answer
Insight Maker doesn't complain because its simulation engine is smart enough to convert the myriad of similar dimensions, e.g., miles, kilometers, feet, etc. However, it's best to make conversions explicit, otherwise models become very difficult to understand.
~ End Exercise

Seldom is there ever just one way to build a model. You build the model to help you understand something and you might do that in different ways. Even a model as simple as Going to Grandma's can be structured in several ways other than starting with a stock of 4.5 and reducing it by walking.

~ Exercise
Go to Insight Maker and try to build one or two alternatives to this model.
~ Answer
One alternative would be to start with Distance to Grandmas House = 0 and add to the stock as Red walks toward it. This way the model is tracking the distance traveled rather than the distance remaining.
~ End Exercise

Hopefully Going to Grandma's has reinforced the 'build a little, test a little' approach for developing models. The introduction to using units should have provided a sense of why they can be so useful. Oh, and don't forget about putting notes in your models. Wiring diagrams without a description of the pieces are generally not very useful.

## Work Completion ##

In the "Work Completion Model"^["Work Completion Model [http://insightmaker.com/insight/6171](http://insightmaker.com/insight/6171)] model a number of workers are working on a project. You want to know how long it will take them to finish. 

# Model
{"title": "Work Completion Model", "description": "In this model Workers is not a factor, but a limit on the amount of work that can be performed in a time period.", "load": "http://insightmaker.com/insight/6171"}
# End Model

Note that in this model you might have considered the Workers as a stock, as they are actually a collection. They're not, because the number remains constant in the context of this particular model. In a different model Workers might actually be a stock with an inflow and an outflow.

~ Exercise
Set up the above model to run with Time Step of 0.25. Compare the results of this run with the results of the previous run above. By making the time step smaller have we improved the accuracy of result? Why?
~ End Exercise

The appropriate Time Step is one that captures the activity occurring within the model. In this model the Workers are in integers and Project Work is in days. Since these are both integers, and the Time Units are measured in days, it might seem the appropriate Time Step is 1. As it turns out, the appropriate Time Step is 0.5. If the model included events that took place on the order of hours, you would have to decide whether to alter the model to run in hours or reduce the Time Step. You would have to make one of these changes to ensure that no interactions in the model were missed.    

## Filling a Swimming Pool ##

Let us now venture into the realm of "Filling a Swimming Pool"^[Filling a Swimming Pool [http://insightmaker.com/insight/4990](http://insightmaker.com/insight/4990)] for a sizable swimming pool with water using a garden hose.

# Model
{"title": "Filling a Swimming Pool", "description": "The following model investigates filling a swimming pool as a stock.", "load": "http://insightmaker.com/insight/4990"}
# End Model

This model again demonstrates that building a model is an iterative process where you build a little and test. And when things don't go the way you expect them to go it's an opportunity for learning.

It's also important to note that it's best not to bury variables inside other variables. Making them explicit in the diagram, as was done with **Hose Capacity**, makes it easier for others to see the relevant influences.

## Rabbit Population ##

Remember the previous comment about seldom developing a model in the form it needs to be on the first try? Investigation of a simple "Rabbit Population"^[Rabbit Population Growth [http://insightmaker.com/insight/5123](http://insightmaker.com/insight/5123)] model should be most informative.

# Model
{"title": "Rabbit Population", "description": "This model reflects the notion that more rabbits create even more rabbits.", "load": "http://insightmaker.com/insight/5123"}
# End Model

As demonstrated in the unfolding of this model, you should approach the development of a model as a learning experience. When things go wrong it's an opportunity for learning. You learn from the model and the model learns from you. Once the two of you learn enough it's probably a meaningful model.

## Savings Account ##

Why should you put money in a savings account? Why does the bank want you to put money in a savings account? Building and working with a model for a bank "Savings Account"^[Savings Account [http://insightmaker.com/insight/5887](http://insightmaker.com/insight/5887)] can also be very informative. 

# Model
{"title": "Savings Account", "description": "How does a savings account really work?", "load": "http://insightmaker.com/insight/5887"}
# End Model

All of the pieces of the model are relevant and have an impact on the behavior of the model. As indicated, a model tells a story; a story for which only pieces of can be found in the model. The model itself is more than just the sum of its parts.

## Why Aren't We All Rich ##

If one can put money in an investment account that grows over time, and grows even faster with regular deposits, why aren't more people rich and ready for retirement? I've started numerous retirement programs through the years, but for one reason or another they've all evaporated in time. What is the basis of this sad state of affairs? "Why Aren't We All Rich?"^[Why Aren't We All Rich? [http://insightmaker.com/insight/6827](http://insightmaker.com/insight/6827)] investigates some of the reasons behind this.

# Model
{"title": "Why Aren't We All Rich?", "description": "Soft influences are often not very obvious, even though they can have a major influence.", "load": "http://insightmaker.com/insight/6827"}
# End Model

We now have a model that provides some incentives to start and continue to deposit money in an Investment Account. We also have disincentives toward withdrawing funds. However, have we really addressed the initial situation posed? Not really. There are incentives for starting the Investment Account and regularly depositing money. For many these incentives are enough to get them to invest. For others, for one reason on another, the incentive is not sufficient. For those people, additional or more strict incentives would likely be looked on unfavorably. People do not like to be manipulated, even when it is for their own benefit. The penalty for withdrawal is a deterrent in some respects, though as the Investment Account continues to grow, its attractiveness in terms of what it can purchase continues to entice. The best answer for this situation is to legally tie up the withdrawal process so it's only an option in the case of dire emergencies. Though as much as people find being manipulated by others distasteful, being controlled by themselves is just as distasteful.

Is the model done? As usual, the answer is; "It Depends!" If it has provided sufficient understanding to address the situation posed, then it is sufficient. If not, then it should be taken further. NOTE: once it is sufficient you should STOP!

~ Exercise
There is a logic flaw in this model which you might try to repair. The Penalty is not actually taken from the Investment Account, but from the Withdrawal itself, so it reduces the amount you actually get from the Withdrawal. Be warned that this might be a tricky fix.
~ End Exercise

----------

### Modeling Tips ###

Before you run a model you should develop a sense of the result you expect from the model at the current point in its development. Once you run the model you should be certain that is it performing as expected. When the result is not what you expect then either the structure is wrong or your assumptions are wrong. Each case represents an opportunity to further develop your understanding.

You should never be more than a single concept change away from a running model that produces a result that you understand. You may think this a bit strict, but after you add several elements to a model simply to find it doesn't work, and you spend hours trying to figure out why, you may have a better appreciation for this guideline.

Others will find it much easier to understand a model if you make all of its elements visible. This is why Months per Year and Initial Deposit were created as explicit variables rather than embedding the values inside other elements.

It's definitely worth repeating that providing comments for all the elements of a model will also make it much easier for others to understand. Comments in the model are easily read by doing a 'mouse over' an element, and clicking on the "i".

----------

## Romeo and Juliet ##

This example shows that you really can simulate anything through modeling. This model shows the implications of the dynamic relationship of the love between "Romeo and Juliet".^[Romeo and Juliet [http://insightmaker.com/insight/9775](http://insightmaker.com/insight/9775)]

# Model
{"title": "Romeo and Juliet", "description": "The implications of the relations between two people can vary drastically.", "load": "http://insightmaker.com/insight/9775"}
# End Model

We hope this model gave you a more comfortable feeling that it is possible to model very intangible things. You will find intangibles to be some of the most influential aspects of some of the models you develop. Don't shy away from them.

## Climate Stabilization Task ##

The "Climate Stabilization Task"^[Climate Stabilization Task [http://insightmaker.com/insight/9283](http://insightmaker.com/insight/9283)] model starts in 1900. In the year 2000 you get the chance to set a new emission target and a nominal time to reach it. Your aim is to have atmospheric CO2 stabilize at about 400 ppmv in 2100 [@Sterman:2008bq].

# Model
{"title": "Climate Stabilization Task", "description": "Can you get the CO2 levels to stabilize?", "load": "http://insightmaker.com/insight/9283"}
# End Model

~ Exercise
In working with the model did you notice that if you took too long to reach the new emissions level you selected, there was no way you could ever reach the 400 ppm target? What is it about the interactions that might be responsible?
~ Answer
It takes time for a flow to change a stock and even longer for that flow to change a flow. It's important to remember that reducing a flow still adds to the stock, just a bit slower.
~ End Exercise

## Maintaining Personnel Resources ##

When things are going just the way we want them to we tend to stop paying attention to them. Experience has been telling us for a long time this is not a good idea. Are we learning from the experience? The "Maintaining Personnel Resources"^[Maintaining Personnel Resources [http://insightmaker.com/insight/162](http://insightmaker.com/insight/162)] simulation provides insights into a situation where an established policy for hiring new employees won't suffice in the face of other changes.

# Model
{"title": "Maintaining Personnel Resources", "description": "Why things aren't where you think they are.", "load": "http://insightmaker.com/insight/162"}
# End Model

Any time there are delays in the relationships (which actually occurs any time there is a stock involved), we are easily deceived into believing that we know the implications of the interactions. The Maintaining Personnel Resources model should have put that assumption to rest. The model serves again to point out that there are things we simply can't get a sense of from a picture. Only a simulation will inform us to the extent necessary to understand the situation.

## The Fix Overshoots the Goal ##

In pursuing a goal have you ever overshot it and had to back up to get to the goal? The "Balancing Loop with Delay"^[Balancing Loop with Delay [http://insightmaker.com/insight/133](http://insightmaker.com/insight/133)] model is a variation of the standard Balancing Loop. The variation is there are one or more delays in the structure that produce (as will be demonstrated) a very different behavior pattern than the standard Balancing Loop.

# Model
{"title": "Balancing Loop with Delay", "description": "Delay in a structure can make it almost impossible to intuit the implications of the interactions.", "load": "http://insightmaker.com/insight/133"}
# End Model

You might ask how it could take 4 days for someone to understand the results of the previous actions. That would be a good question. It's probably difficult to find a situation where this is realistic in days. What's important to realize is that this structure operates in this manner whether the time units are hours, minutes, seconds, or microseconds.

~ Exercise
How could you deal with the delay in this structure to avoid efforts to correct the situation after the goal is exceeded?
~ Answer
There are actually two approaches: 1) Figure out how to shorten the delay; or 2) Slow down the action and wait for the feedback before further action. There are times when these approaches may be applied. Due to the nature of the situation there are other times when you simply need to act and then deal with the effects later. 
~ End Exercise

## Infinite Drinkers ##

The "Infinite Drinkers"^[Infinite Drinkers [http://insightmaker.com/insight/9776](http://insightmaker.com/insight/9776)] is an attempt at modeling humor. Hope you enjoy it.

# Model
{"title": "Infinite Drinkers", "description": "How many beers does it take to serve an infinite number of drinkers?", "load": "http://insightmaker.com/insight/9776"}
# End Model

You can build models to help understand almost any set of interactions. At times they can be really simple. Often the most amazing insights arise from what appear to be very simple models. The more complex the model, the more likely insights are to get lost in the detail.

## Frequently Recurring Structures ##

There is a set of frequently recurring structures that have a very distinct structure and characteristic pattern of behavior. Understanding the manner in which the relations within these structures unfold can be very helpful in determining how to deal with situations. The "Frequently Recurring Structures"^[Frequently Recurring Structures [http://insightmaker.com/insight/538](http://insightmaker.com/insight/538)] model provides an initial introduction to these structures.

# Model
{"title": "Frequently Recurring Structures", "description": "There is a typical unfolding relationship between the common recurring structures.", "load": "http://insightmaker.com/insight/538"}
# End Model

Hopefully the relationships between these frequently recurring structures has provided food for thought in terms of how connected things really are, and how there are very typical paths of evolution. There is another Interactive Learning Environment under development dedicated to understanding and working with these frequently recurring structures.

In the next chapter we'll delve a bit deeper into some more involved models in a number of different disciplines.

## Summary ##

- **Intent**. Be sure you have a good idea of what you want the model to help you understand. This idea may evolve as you develop the model.
- **Time Frame**. Ensure you have a sense of the time frame over which you intend the model to simulate. As you build the model you may find you need to adjust your initial thought on this.
- **Stocks & Flows**. Identify the Stocks & Flows first, as they are key elements of the model.
- **Use Units**. Units help to ensure your model is sound. Insight Maker will test for consistency of units. If the units are consistent the model is not guaranteed to be sound, though this adds a level of confidence.
- **Variables & Links**. Add Variables & Links to influence the flows.
- **Test Often**. Each time you make a logical addition to the model think about how you expect the model to behave. Run the model and see if there is agreement with your expectation. If there isn't then it's an opportunity to learn and improve the model. And if it does agree you should still consider the output. It may be that your expectation and the model are both wrong.
- **Time Step**. Test the Time Step to ensure it's small enough to capture all relevant transitions in the model.
- **Stop at the End**. When the model serves the purpose for which you are developing it, STOP! There is always one more thing you can add to a model; resist the urge. You should only include what is relevant to satisfy the initial intent. That said, there are times when we learn things during the development of a model that warrant modifying the initial intent. Just be sure you know the manner in which you're doing that.
