# Common Balancing Structures

The sections of this chapter will present an investigation of the more frequently experienced balancing structures and their characteristic patterns of behavior. Links will be provided at the end of the chapter to allow you to continue investigation of those structures not presented here.

Each structure will be presented in a generic form so you can focus on the implications of the relationships rather than what the actual elements are. Each section will also provide appropriate strategies for dealing with the structure as well as a number of explicit example of this structure in different areas.

Because the Balancing/Goal Seeking structure has already been presented we'll simply begin with more complex structures.

## Linear Progress Slows Over Time ##

A Limits to Results structure represents a situation where a Balancing Loop moving toward its goal is slowed in its progress due to some limiting factor. This is generally due to some resource restriction or constraint.

# Model

{"title": "Limits to Results", "description": "A balancing loop seldom progresses simply based on the difference between the [current state] and the [desired state]."}

{"load": "http://insightmaker.com/insight/543"}

DIAGRAM

Initial settings are: [current state] = 0, [desired state] = 1, [limit] = 0.3 and [action] = IfThenElse([gap] > [limit], [limit], [gap])

RESULTS

 Action is a constant value until the gap < limit. The choppy nature of the diagram will be addressed in the exercise below.

# End Model

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

## The Fix Overshoots the Goal ##

Have you ever pursued a goal and later found that you actually overshot the goal and had to back up to get back to the goal? The Balancing Loop with Delay structure is a variation of the standard Balancing Loop. The variation being that there are one or more delays in the structure which are responsible for producing, as will be demonstrated, a very different behavior pattern than the standard Balancing Loop.

If you look at the Balancing Loop with Delay structure it looks identical to the standard balancing loop with the exception of the delay near the reduces link. The implication is that it takes some amount of time after the current state changes before it is actually realized and figures into the calculation of the gap which influences the subsequent action. Essentially what's happening is that action is being based on old data and therefore is probably not the appropriate action. The implications of this will become evident when we look at the simulation for this structure.

# Model

{"title": "The Fix Overshoots The Goal", "description": "Lets take a look at the implications of varying delays on the effect of a balancing loop."}

{"load": "http://insightmaker.com/insight/133"}

DIAGRAM

Notice in the stock & flow structure the delay has been placed between the current state and the gap. The delay could have just as well been between the gap and action or there could have been a delay between the action and the actual change of the current state though this one is a bit more difficult to structure.

Notice the action flow in the diagram actually has an arrow at both ends. Click on the flow and notice the Configuration section of the configuration panel indicates Only Positive Rates is set to No. This means that the flow can flow in either direction based on whether the results of the equation are positive or negative.

Initial parameters are [currents state] = 0, [action factor] = 0.5, [desired state] = 1 and [Time Step] = 0.25

{"attribute":"Equation","target":"time delay","value":"0"}

RESULTS

With [Time Delay] = 0 the results are simply those of the standard balancing loop.

{"attribute":"Equation","target":"time delay","value":"0.25"}

RESULTS

Notice that now with a delay the change in the gap and action are delayed for one time period and then the current state actually overshoots the goal and a negative action is required to bring the current state back to the goal.

{"attribute":"Equation","target":"time delay","value":"2"}

RESULTS

With a longer time delay the overshoot is even more severe though after a few time periods the current state actually will reach the goal.

{"attribute":"Equation","target":"time delay","value":"3"}

RESULTS

We've now reached a delay where the action is so out of sync with an awareness of the results that the goal is never reached and the current state continually oscillates around the goal.

{"attribute":"Equation","target":"time delay","value":"3.5"}

RESULTS

Now the situation is described as being out of control because rather oscillations continue to get worse because of the length of the time delay.

# End Model

You might ask how could it be that it might take 3.5 days for someone to get a sense of what the results of the previous actions were, which would be a good question. It's probably difficult to find a situation where this is realistic in days though what's important to realize is this structure could operate in this manner if the time units were hours, minutes, seconds or microseconds.

~ Exercise 

Run this model varying the values of action factor, time delay and time step to develop a sense of how each of these variables influences the behavior of the model.

~ End Exercise

### Examples ###

- **Adjusting the Shower**. When you adjust the hot and cold water for the shower it takes time for the new mixing ratio to actually be felt in the water temperature to it's easy to over compensate due to impatience.

### Effective Strategies ###

- Advice for dealing with this structure is quite simple. Patience is a virtue. If you know you're dealing with a balancing structure and things are not going as expected then study the structure to see if there could be one or more delays that your impatience is simply having difficulty dealing with. This structure proves that there are times when taking additional action is worse than not taking additional action. More is not always better. If things are waffling back and forth endlessly or out of control a little less effort might be appropriate.
- An alternative is to monitor the Current State on a more frequent basis and ensure the result of the monitoring impacts the action appropriately in a more timely manner. In short, take the delay out of the structure.

## Over Time There Is A Tendency To Settle For Less

Have you ever noticed how difficult it is to bring the best of intentions to fruition? How so many people's New Years resolutions only last a few days? Our inability to achieve the things we set out to achieve is very much a result of the operation of a Drifting Goals structure we generally have little awareness of.

# Model

{"title": "Drifting Goals", "description": "If it takes an extended period of time to achieve a goal there is a tendency to settle for achieving a lesser goal."}

{"load": "http://insightmaker.com/insight/984"}

DIAGRAM

Again we have two balancing loops which each provide a goal for the other and because of the delays in the time it takes for the action to produce results one goal overrides the other. What I Want server as the goal for B1 and Pressure to Settle for Less serves as the goal for B2.

The initial settings are: [desried state] = 1, [current state] = 0, [pct chg fact] = 0.2, [Time Step] = 0.5.

{"attribute":"Equation","target":"goal chg fact","value":"0"}

RESULTS

With [goal chg fact] = 0 the results are those of the simple balancing loop.

{"attribute":"Equation","target":"goal chg fact","value":"0.1"}

RESULTS

In this example with the extent to which the goal drifted is about 30% which is very significant. The extent to which the goal drifts is very dependent on the [pct chg fact] and the [goal chg fact] variable.

# End Model

~ Exercise

Vary the \p{pct chg fact}, \p{goal chg fact} and \p{Time Step} values to get a sense of the impact on the extent to which the goal for the structure is degraded over time.

~ End Exercise

### Examples ###

- New years resolutions. Need I say more?
- Weight loss programs.

### Effective Strategies ###

- There is only one real effective way to deal with this structure, which is to disconnect the feedback from tension to goal reduction to Desired State so it can no longer subtract from Desired State.
- An alternative strategy is to further increase the action toward the Current State so it reduces the time delay such that there is no time for the tension to reduce the Desired State. This is fine if there are sufficient resources to increase the action.

### Areas of Concern ###

- The action toward the Desired State requires resources, which may have to be developed. Consideration needs to be given as to whether or not there really are sufficient resources to achieve the Desired State. For further insights into this see Growth and Underinvestment with a Drifting Standard.

## In Time The Problem Returns ##

Have you noticed how often your best intentions go awry? You set out to fix a problem and shortly thereafter you find yourself fixing the same problem again, and again. This generally results from some unexpected consequences, things that come into play because of your action, or the results of your action, that you never expected, which is why they're called unexpected consequences.

# Model

{"title": "Fixes that Fail", "description": "This structure consists of a balancing loop intended to achieve a particular result which is foiled by an insidious reinforcing loop."}

{"load": "http://insightmaker.com/insight/549"}

DIAGRAM

The action of the Goal Seeking loop (B1) also influences, after some delay, unexpected consequences which diminishes the migration of the current sate in the direction of the desired state and creates the reinforcing loop (R2).

We begin with initial settings of [desired state] = 1, [current state] = 0, [action factor] = 0.5, [ucd factor] = 1 and [Time Step] = .5

{"attribute":"Equation","target":"uc factor","value":"0"}

RESULTS

With [uc factor] = 0 there is no unexpected consequences and therefor the value of [ucd factor] is irrelevant and the structure is essentially a standard goal seeking balancing loop (B1).

{"attribute":"Equation","target":"uc factor","value":"0.2"}

RESULTS

As the value of uc factor increases unexpected consequences will increase more rapidly and have a more marked impact on the current state as long as the value of ucd factor remains constant.

# End Model

~ Exercise

Run the Fixes that Fail structure with various values of action factor, uc factor, ucd factor, and Time Step to get a sense of how these four factors influence the behavior of the structure.

~ End Exercise

### Examples ###

- Your soccer ball is soft so you put air in it though in a few hours you have to put more air in it. And after a few weeks it seems like you spend all your time pumping up your soccer ball.
- Often times what appears to be the most appropriate way to deal with the situation doesn't really solve the problem and in time actually makes the situation worse.
- To deal with a cash shortage one often borrows money ensuring there will be more cash problems in the future.
- In response to cash flow problems companies often choose to layoff employees essentially ensuring they will have more cash flow problems in the future.

### Effective Strategies ###

- The most effective strategy for dealing with this structure is advance planning. Since you can never do just one thing, as everything affects everything else, before taking action to change the current state, think about what else that action, or change in the current state, is likely to affect. And, what effect the effect will have. Sometimes the unexpected consequence may be several effects away, so don't stop at just one. Essentially what one seeks to do is close the loop and identify the unexpected, which means it's no longer unexpected then, is it?
- A less effective strategy would be to figure out how to disconnect the unexpected consequence from influencing the action or the current state. Of course then it wouldn't be a consequence, would it?

### Areas of Concern ###

- There are times when attempts to deal with a situation in a particular way makes it even more difficult to deal with the situation in an appropriate manner later on which is often an indication of a Shifting the Burden Systems Archetype.

## The Underlying Cause Is Not Being Addressed ##

How many times have you noticed that there are some problems that seem to be addressed over and over. When the problem arises it is addressed, then some time later, maybe a day, a week, or a month, the same problem arises again. This situation is quite often the result of a Shifting the Burden structure.

# Model

{"title": "Shifting the Burden", "description": "This model demonstrates the difference between treating the symptoms and actually solving the problem."}

{"load": "http://insightmaker.com/insight/1005"}

DIAGRAM

Given a [Problem Symptom] resulting from a [problem cause] can be addressed by a [symptomatic solution] or a [Fundamental Solution]. The [symptomatic solution] is generally being easier to implement while the [Fundamental Solution] takes time to develop. Implementing the [symptomatic solution] also tends to promote a [Side Effect] which detracts from the development of the [Fundamental Solution].

For a first run we set [sum fact] = 0.5, [prob fact] = 0.5, and a [Time Step] = 0.25 and we set [fund fact] = 0 to disable the [Fundamental Solution] and [side effect fact] = 0 to disable the [Side Effect].

RESULTS

The [problem cause] results in an increase in the [Problem Symptom] until it reaches a level where it needs to be dealt with and the [symptomatic solution] is applied. This removes the [Problem Symptom] though has no affect on the [problem cause] so the [Problem Symptom] again begins to increase until it reaches a point where the [symptomatic solution] is again applied. Unless something else changes this will repeat endlessly.

Now we set [fund fact] = 0.2 so the [Fundamental Solution] is also developed while the [symptomatic solution] is being applied.

{"attribute":"Equation","target":"fund fact","value":"0.2"}

RESULTS

Notice that now the [symptomatic solution] is implemented twice as the [Fundamental Solution] is being developed. Once the [Fundamental Solution] develops it diminishes the [problem cause] to a point where the [Problem Symptom] no longer develops. When this is reached the [symptomatic solution] will not need to be implemented again in the future.

For the next run we set [side effect fact] = 0.2 to investigate the impact of the [Side Effect] on the situation. We're also setting [Time Length] = 20 to investigate a longer time period.

{"attribute":"Equation","target":"side effect fact","value":"0.2"}

{"attribute":"TimeLength","value":"20"}

RESULTS

The result shows that with the development of the [Side Effect] depresses the development of the [Fundamental Solution]. The result of this is that the [symptomatic solution] has to be repeatedly applied though at a declining frequency. It is expected that if we look at a longer period of time the [Fundamental Solution] would develop to a point where the [symptomatic solution] will no longer need to be applied.

# End Model

~ Exercise

While there are myriad of possible variations for the variables in this model you might find the result interesting if you apply the fundamental solution without the symptomatic solution. What questions does this result raise?

~ Answer

Applying the \p{Fundamental Solution} without applying the \p{symptomatic solution} we end up removing the \p{problem cause} though the \p{Problem Symptom} remains. Can you think of a situation where this might occur?

~ End Exercise

### Examples ###

- Dieting to lose weight rather than changing one's lifestyle results in short term weight loss which will only last for a short time. The side effect is that the success of the diet removes the perceived need to implement the fundamental solution.

### Effective Strategies ###

Initially I perceived there to be a single appropriate strategy for dealing with this structure though I have found examples, which I will attach as soon as I get them sorted out, which seem support the range of strategies below.

- Learn to live with the symptomatic solution because that's as good as it's going to get. There are situations where there may be more effective solutions though you'll just never get them implemented in your lifetime. Sad but true.
-Implement the fundamental solution because if the symptomatic solution is implemented the strength of the side effect will ensure the fundamental solution will never get any traction.
- When dealing with a problem ask yourself if you are treating the symptoms or addressing the real cause of the problem. Often, out of expediency, the symptomatic solution is essential. The most effective strategy for dealing with a Shifting the Burden structure is to employ the symptomatic solution AND develop the fundamental solution. Thus one resolves the immediate problem and the other works to ensure that it doesn't return.

### Areas of Concern ###

- It is often the case that the side effect promotes some sort of dependency which further inhibits development of the fundamental solution. For insights into this situation see Addiction Systems Archetype.

## Summary ##

The chapter should explicitly depict the relationships between the structures presented in the previous sections and explain the natural evolution paths for the structures.

## References ##

- Bellinger, Gene. 2013. Systems Archetypes. [http://www.systemswiki.org/index.php?title=Systems_Archetypes](http://www.systemswiki.org/index.php?title=Systems_Archetypes)
- Braun, Bill. 2002. The Systems Archetypes. [http://wwwu.uni-klu.ac.at/gossimit/pap/sd/wb_sysarch.pdf](http://wwwu.uni-klu.ac.at/gossimit/pap/sd/wb_sysarch.pdf)
