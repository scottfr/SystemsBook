# Developing Understanding through Models

This chapter will present a number of models to demonstrate the development process, various aspects of the model development guidelines and acquaint you with a few additional relevant aspects of simulation models in Insight Maker.

## The Boy Who Cried Wolf ##

All stories are actually models expressed in words rather than diagrams. All of the interactions in a story can be expressed in the form of a model which allows one to get an overview of the main interactions in a single picture. "The Boy Who Cried Wolf"^[The Boy Who Cried Wolf [http://insightmaker.com/insight/7103](http://insightmaker.com/insight/7103)] will unfold a model as a story and show the difference between a Rich Picture and a Causal Loop Diagram for the same story.

# Model
{"title": "The Boy Who Cried Wolf", "description": "Telling a story as you unfold a model.", "load": "http://insightmaker.com/insight/7103"}
# End Model

Just as all stories are models, you should attempt to ensure that all models you develop actually tell a story. Telling stories makes it easier to communicate the insights surfaced in the model to others and stories are much easier to remember than bits and pieces of data.

## Walking to Grandma's {#RedModel}

When you develop a model remember that it's a learning process so don't expect that you'll get everything to turn out the way it should the first time around. Remember to think of it as an iterative learning process where every time something doesn't go the way you expect it's not an error, it's an opportunity for learning.

"Walking to Grandma's"^[Walking to Grandma's [http://insightmaker.com/insight/6778](http://insightmaker.com/insight/6778)] is a simple example of a question that might be answered with a model. And yes, it is quite obvious you could just do the math, though would you get any better at building models if you did? Also this model will introduce the idea of Units which are used to help ensure the soundness of your model. Insight Maker checks Units to ensure you're not trying to perform invalid arithmetic, such as adding 3 apples and 4 bananas.

# Model
{"title": "Walking to Grandma's", "description": "How long will it take us to get there?", "load": "http://insightmaker.com/insight/6778"}
# End Model

~ Exercise
In the [Stop at Grandmas] variable change {0 miles} to {0 kilometers}. Does the model still work? Why?
~ Answer
The simulation engine in Insight Maker is smart enough to convert between the myriad of similar dimensions, e.g., miles, kilometers, feet, etc. Though it's recommended that you make conversions explicit otherwise models become very difficult to understand.

Insight Maker doesn't complain because you're still comparing distance to distance and it doesn't matter that they're in different scales simply because zero = zero in any scale. It's really better to keep your units in the same scale.
~ End Exercise

~ Exercise
Seldom is there ever just one way to build a model. You build the model to help you understand something and you might do that in different ways. Even a model as simple as Going to Grandma's can be structured in several different ways other than starting with a stock of 4.5 and reducing it by walking. Go to Insight Maker and try to build one or two alternatives to this model.
~ Answer
One alternative would be to start with Distance to Grandmas House = 0 and add to the stock as Red walks toward it. This way the model is tracking the distance traveled rather than the distance left to travel.
~ End Exercise

Hopefully the Going to Grandma's has reinforced the build a little, test a little approach for developing models. Hopefully the introduction to using units has provided a sense of why they can be so useful. Oh, and don't forget about putting notes in your models. Wiring diagrams without knowing what the pieces mean are generally not very useful.

## Work Completion ##

The "Work Completion Model"^["Work Completion Model [http://insightmaker.com/insight/6171](http://insightmaker.com/insight/6171)] model presents a situation where a number of workers are working a project and you want to know how long it is going to take them to finish.

# Model
{"title": "Work Completion Model", "description": "In this model [Workers] is not a factor but a limit on the amount of [work] that can be performed in a time period.", "load": "http://insightmaker.com/insight/6171"}
# End Model

Note that in this model you might have considered the \p{Workers} as a \p{Stock} as they are actually a collection. The reason they're not considered as a \p{Stock} in this model is that the number remains constant in the context of this particular model. In a different model \p{Workers} might actually be a \p{Stock} with an inflow and and outflow.

~ Exercise

Set up the above model to run with Time Step of 0.5. Compare the results of this run with the results of the previous run above. By making the time step smaller have we improved the accuracy of result? Why?

~ End Exercise

Again the appropriate Time Step is one that captures the activity occurring within the model. In this case the Workers are in integers and Project Work in days, both of which are in integers, and with the Time Units in days the appropriate Time Step is 1. If there were events which happened in the model on the order of hours then you would have to decide whether to alter the model to run in hours or reduce the Time Step to ensure it was small enough so no interactions in the model were missed.

## Filling a Swimming Pool ##

Let us now venture into the realm of "Filling a Swimming Pool"^[Filling a Swimming Pool [http://insightmaker.com/insight/4990](http://insightmaker.com/insight/4990)] for a sizable swimming pool with water using a garden hose.

# Model
{"title": "Filling a Swimming Pool", "description": "The following model investigates filling a swimming pool as a stock.", "load": "http://insightmaker.com/insight/4990"}
# End Model

This most again attempts to demonstrate that building a model is an iterative process where you build a little and test. And when things don't go the way you expect them to go it's an opportunity for learning.

It's also important to note that it's best not to bury variables inside other variables. Making them explicit in the diagram was was done with \p{Hose Capacity} makes it easier for others to see what the relevant influences are.

## Rabbit Population ##

Remember the previous comment about seldom developing a model in the form it needs to be on the first try? Investigation of a simple "Rabbit Population"^[Rabbit Population Growth [http://insightmaker.com/insight/5123](http://insightmaker.com/insight/5123)] model can be most informative.

# Model
{"title": "Rabbit Population", "description": "This model that reflects the the notion that more rabbits create even more rabbits.", "load": "http://insightmaker.com/insight/5123"}
# End Model

As demonstrated in the unfolding of this model you should approach the development of a model as a learning experience. When things go wrong it's an opportunity for learning. You learn from the model and the model learns from you, and once the two of you learn enough it's probably a meaningful model.

## Savings Account ##

Building and working with a model for a bank "Savings Account"^[Savings Account [http://insightmaker.com/insight/5887](http://insightmaker.com/insight/5887)] can also be most informative also.

# Model
{"title": "Savings Account", "description": "How does a savings account really work?", "load": "http://insightmaker.com/insight/5887"}
# End Model

All of the pieces of the model are relevant and have an impact on the behavior of the model. As indicated a model tells a story, a story for which only pieces of can be found in the model. The model itself is more than just the sum of its parts.

## Why Aren't We All Rich ##

If one can put money in an investment account and it grows over time, and it grows even faster with regular deposits, why aren't more people rich and ready for retirement? I've started numerous retirement programs through the years though for one reason or another they've all evaporated in time. What is the basis of this sad state of affairs? "Why Aren't We All Rich?"^[Why Aren't We All Rich? [http://insightmaker.com/insight/6827](http://insightmaker.com/insight/6827)] investigates some of the reasons behind this.

# Model
{"title": "Why Aren't We All Rich?", "description": "", "load": "http://insightmaker.com/insight/6827"}
# End Model

~ Exercise

There is a logic flaw in this model which you might try to repair. The Penalty is not actually taken from the Investment Account but from the Withdrawal itself so it reduces the amount you actually get from the Withdrawal. Be warned that is might be a tricky fix.

~ End Exercise

We now have a model which provides some incentives to start and continue to deposit in an Investment Account, and some disincentives toward the withdrawal of funds, though have we really addressed the initial situation posed? Not really. As far as starting the Investment Account and regularly depositing money, there are incentives, and for many these incentives were enough to get them to invest. For many the incentive, for one reason or another, has not been sufficient. And, any more strict incentives would likely be looked on unfavorably. People do not like to be manipulated, even when it is for their own benefit. The penalty for withdrawal is a deterrent in some respects though as the Investment Account continues to grow its attractiveness in terms of what it can purchase continues to entice. The best answer for this situation is to legally tie up the withdrawal process so it's only an option in the case of dire emergencies. Though as much as people find being manipulated by others distasteful, being controlled by themselves is just as distasteful.

Is the model done? As usual, the answer is; "It Depends!" If it has provided sufficient understanding to address the situation posed then it is sufficient. If not then it should be taken further, though once it is sufficient you should STOP!

----------

### Modeling Tips ###

Before you run a model you should develop a sense of the result you expect from the model at the current point in its development. Once you run the model you should be certain that is it performing as expected. When the result is not what you expect then either the structure is wrong, your assumptions are wrong, or you simply have an opportunity to further develop your understanding.

You should never be more than a single concept change away from a running model that produces a result that you understand. You may think this a bit strict though after you add several elements to a model and it doesn't work and you spend hours trying to figure out why you may have a better appreciation for this guideline.

Making all the elements of a model visible makes it much easier for others to understand it. This is why Months per Year and Initial Deposit were created as explicit variables rather than embedding the values inside other elements.

And what's definitely worth repeating is that providing comments for all the elements of a model will also make it much easier for others to understand. All one need do is mouse over an element and click on the "i" that appears to read the comment.

----------

## Romeo and Juliet ##

As an example that one really can simulate anything this model shows the implications of the dynamic implications of the love between "Romeo and Juliet".^[Romeo and Juliet [http://insightmaker.com/insight/759](http://insightmaker.com/insight/759)]

# Model
{"title": "Romeo and Juliet", "description": "The implications of the relations between two people can be vary drastically.", "load": "http://insightmaker.com/insight/759"}
# End Model

We hope this model gave you a more comfortable feeling that it is possible to model very intangible things. You will find intangibles to be some of the most influential aspects of some of the models you will build in the future.

## Climate Stabilization Task ##

The "Climate Stabilization Task"^[Climate Stabilization Task [http://insightmaker.com/insight/9283](http://insightmaker.com/insight/9283)] model starts in 1900. In the year 2000 you get the chance to set a new emission target and nominal time to reach it. Your aim is to have atmospheric CO2 stabilise at about 400 ppmv in 2100.{cite: Sterman, John D. (2008)  Risk Communication on Climate:  Mental Models and Mass Balance.  Science 322 (24 October): 532-533}

# Model
{"title": "Climate Stabilization Task", "description": "Can you get the CO2 levels to stabilize?", "load": "http://insightmaker.com/insight/9283"}
# End Model

~ Exercise
Did you notice in working with the model that if you took too long to reach the new emissions level you selected there was no way you could ever reach the 400 ppm target? What is it about the interactions that might responsible for that?
~ Answer
The difficulty arises because it takes time for a stock to change a flow and reducing the flow still adds to the result, just a bit slower.
~ End Exercise

## Maintaining Personnel Resources ##

The "Maintaining Personnel Resources"^[Maintaining Personnel Resources [http://insightmaker.com/insight/162](http://insightmaker.com/insight/162)] simulation provides insights into a situation where an established policy for hiring new employees won't suffice in the face of other changes.

# Model
{"title": "Maintaining Personnel Resources", "description": "Why things aren't where you think they are.", "load": "http://insightmaker.com/insight/162"}
# End Model

Any time there are delays in the relationships, which actually occurs any time there is a stock involved, our intuition is easily deceived into assuming we know the implications of the interactions. The Maintaining Personnel Resources model should have put that assumption to rest. The model serves again to point out that there are things we simply can't get a sense of from a picture and only a simulation will inform us to the extent necessary to understand the situation.

## The Fix Overshoots the Goal ##

Have you ever pursued a goal and later found that you actually overshot the goal and had to back up to get back to the goal? The "Balancing Loop with Delay"^[Balancing Loop with Delay [http://insightmaker.com/insight/133](http://insightmaker.com/insight/133)] structure is a variation of the standard Balancing Loop. The variation being that there are one or more delays in the structure which are responsible for producing, as will be demonstrated, a very different behavior pattern than the standard Balancing Loop.

If you look at the Balancing Loop with Delay structure it looks identical to the standard balancing loop with the exception of the delay near the reduces link. The implication is that it takes some amount of time after the current state changes before it is actually realized and figures into the calculation of the gap which influences the subsequent action. Essentially what's happening is that action is being based on old data and therefore is probably not the appropriate action. The implications of this will become evident when we look at the simulation for this structure.

# Model
{"title": "Balancing Loop with Delay", "description": "Delay in a structure can make it almost impossible to intuit the implications of the interactions.", "load": "http://insightmaker.com/insight/133"}
# End Model

You might ask how could it be that it might take 3.5 days for someone to get a sense of what the results of the previous actions were, which would be a good question. It's probably difficult to find a situation where this is realistic in days though what's important to realize is this structure could operate in this manner if the time units were hours, minutes, seconds or microseconds.

## The Rain Barrel ##

A times even with some of the simplest models it's difficult to intuit what the behavior is likely to be. This should be rather evident from "The Rain Barrel"^[The Rain Barrel [http://insightmaker.com/insight/6770](http://insightmaker.com/insight/6770)] model developed by Richard Turnock.

# Model
{"title": "The Rain Barrel", "description": "Even simplicity can be deceptive.", "load": "http://insightmaker.com/insight/6770"}
# End Model

## Infinite Drinkers ##

The "Infinite Drinkers"^[Infinite Drinkers [http://insightmaker.com/insight/850](http://insightmaker.com/insight/850)] is a modeling attempt at humor. Hope you enjoy it.

# Model
{"title": "Infinite Drinkers", "description": "How many beers does it take to serve an infinite number of drinkers?", "load": "http://insightmaker.com/insight/850"}
# End Model

You can build models to help understand almost any set of interactions and at times they can be really simple.

## Systems Archetypes ##

There are a set of frequently recurring structures that have a very distinct structure and characteristic pattern of behavior. Understanding the manner in which the relations within these structures unfold can be very helpful in determining how to deal with situation. The "Systems Archetypes"^[Systems Archetypes [http://insightmaker.com/insight/538](http://insightmaker.com/insight/538)] model provides an initial introduction to these structures.

# Model
{"title": "Systems Archetypes", "description": "There is a typical unfolding relationship between the common recurring structures.", "load": "http://insightmaker.com/insight/538"}
# End Model

Hopefully the relationships between the Systems Archetype has provided a lot of food for thought in terms of how connected things really are, and how there are very typical paths of evolution.

In the next chapter we'll delve a bit deeper into some more involved models in a number of different disciplines.

## Summary ##

- **Intent**. Be sure you have a good idea of what you want the model to help you understand. This may evolve as you develop the model.
- **Time Frame**. Ensure you have a sense of the time frame over which you intend to simulation the model. As you build the mode you may find you need to adjust your initial thought on this.
- **Stocks & Flows**. Identify the Stocks & Flows first as they are key elements of the model.
- **Use Units**. Units help to ensure your model is sound and Insight Maker will test for consistency of units. If the units are consistent it doesn't guarantee the model is sound though it does add a level of confidence.
- **Variables & Links**. Add Variables & Links to influence the flows.
- **Test Often**. Each time you make a logical addition to the model think about how you expect the model to behave then run the model and see if there is agreement with your expectation. If it isn't then it's an opportunity to learn and improve the model. And if it does agree you should still consider the output. It may be that your expectation and the model are both wrong.
- **Time Step**. Test the Time Step to ensure it's small enough to capture all relevant transitions in the model.
- **Stop at the End**. When the model serves the purpose for which you are developing it, STOP! There is always more thing you can add to a model, resist the urge. You should only include what is relevant to satisfy the initial intent. That said, there are times when we learn things during the development of a model which warrant modifying the initial intent. Just be sure you know just how you're doing that.
