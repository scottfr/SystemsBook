# Modeling with Agents

The techniques we have taught up until this point have focus on gaining insights about highly aggregated systems. This means that when we looked at models of population growth, we did not explore individual people and instead focused on the population as a whole. This high-level aggregate approach to modeling is often very effective and helps us cut through unnecessary details to understand the core dynamics of a system.

For certain models, however this high-level view may hamstring our abilities to explore certain questions. For instance in a disease model we may care about the physical relationship between people in the model. Are they near each other? How often do they come into contact? Can we change how they move about and relate each other in order to control a disease? These are all questions that are very hard to answer with a standard system dynamics model.

Heterogeneity, differences between people, is very hard to represent using system dynamics models. One approach that is used is simply to duplicate the model structure for each different class of person or entity in the model. We recall seeing one model that explored education in the United States. The authors wanted to explore the differences between male and female students. To do so, they simply copy and pasted the entire model structure (consisting of dozens of stocks and flow) and configured one copy for male students and the other copy for female students.

Now this can work, but it requires a lot of work to set up and configure even in the simple two gender case. When you have more than two cases it can quickly become completely unmanageable. Furthermore, duplicating parts of your model is recipe to create unmaintainable models full of bugs. The reason for this is once you make changes to your model you are going to need to ensure the changes are made to each of the separate model copies. This is very easy to mess up and is an easy route for bugs to get introduced into the model.

Fortunately, another modeling paradigm exists that is excellent for dealing with individuals. It's called agent based modeling and is focus and simulation individual agents and the interactions between these agents^[System Dynamics also has a another standard tool for dealing with heterogeneity. It's called arrays or indexing and allows you to transparently create multiple copies of your model during simulation to match classes. Arrays are not as flexible as fully agent based models. If you consider a continuum of fully aggregate system dynamics models to fully individualized agent based models, you can think of arrays as existing part way along that continuum.]. In this chapter will introduce Agent Based Modeling and show how you can use it to explore questions that cannot be answered with pure system dynamics.

## The State Transition Diagram

Up until now, are primary modeling tool as been the stock and flow diagram. This type of diagram is very useful for summarizing large aggregate systems. The stock can model entities that can take on a range of values and flows are well suited for specifying the changes in these values.

In addition to representing aggregate systems, stock and flow diagrams can also be used to model things on an individual level. For instance, a model of a persons motivations could be represented using a stock and flow diagrams. The strength or importance of each type of motivation -- money, family, etc... -- could be represented as a stock with flows changing the importance of the motivations over time.

When looking the the individual scale however, we will oftentimes find ourselves wanting to defined characteristics of the individual using simple on/off logic. For instance, take this issue of an individuals sex. We this can be represented using two categories Male or Female (leaving aside transgendered individuals for the sake of simplicity). Similarly, when constructing a model of a disease, we might want to say a person is either sick or not sick (with no nuances such as slightly sick or highly sick). You could attempt to represent these different categories using stocks, but the formulation and equations to do so will be unnecessarily complicated.

Where the stock and flow diagram is used to model changing systems with continuous variables, the state transition diagram is used to model systems with discrete variables. Within Insight Maker, state transition diagrams are constructed almost the same way as stock and flow diagrams except all stocks are replaced with *State* primitives and all flows are replaced with *Transition* primitives. Both the state primitives can be added to the model by right-clicking on the model diagram. Transition primitives will automatically be created with you connect to state primitives together use the standard "Flow" connection type.

A state primitive is possibly the most simple primitive available as it can only take on one of two values: true or false. When the state value is true, the state is active. When the state value is false, the state is not active and the agent does not occupy that state. When configuring a state primitive, you only need to set whether the state is initially active or not at the start of the simulation. This can simply be \e{true} or \e{false}, but it can also be a logical equation the depends or other primitives in the agent. For example if you had a variable in the agent called \p{Size}, and you wanted a state to be initially active is the value of \p{Size} was greater than 5, you could put the following as the initially active property for the state: \e{[Size] > 5}.

A transition primitive moves an agent between states. For instance, if you had to states in your model *Healthy* and *Sick*, you could have one transition primitive moving agents from the healthy state to the sick state and another transition primitive moving them the other way.

There are three different ways a transition from one state to another can be triggered:

Timeout
: In this mode the transition will be triggered a specific amount of time after that first state becomes active. For instance, if we had a disease model where the disease lasted 10 days, we could have the transition from the sick to healthy state have a time out of 10 days.

Probability
: In this mode there is a probability of the transitioning happening each time period. For instance, in the disease model if the disease only lasted 10 days on average put could last longer or short you could use a transition probability of 0.1 per day.

Condition
: In this mode you can write an equation which, when evaluated to true, will trigger than transition. For instance if we had a stock, \p{Infection Level} in our agent indicating how sick they were, we could have them transition out of the sick state once that stock fell to zero. The condition to enable this would be something like: \e{[Infection Level] = 0}.



* Demo


## Creating Agents

You can split up the task of creating a group of agents into two steps:

1. Defining what an agent is
2. Creating a group of agents
3. Viewing results


### Defining Agents

We have already introduced the folder primitive as a tool for grouping primitives together and also as a tool for unfolding a model. The folder primitive plays an important role in agent based modeling as the folder is what we use to define what an agent is.

To create an agent construct your state transition diagram for your agent (and add any stocks, flows or other variables you want). Then create a folder around all these primitives. Give the folder the name of your agent such as "Person" or "Individual" or even just "Agent". This is all similar to what we have done with folders before, but now you also need to edit the folder configuration and set the folder \u{Behavior} to "Agent". You have now created an agent definition! 

You can have as many different types of agents in your model as you would like.

### Creating a Population of Agents 

After you have defined an agent in your model, you are ready to create a group or population of agents. This is done by adding an Agent Population primitive to your model.

There are a number of different settings for the agent population primitive but two of the are of key importance. The first is to select what type of agent will be in the population. Each population primitive can only have one type of agent in it. You can have multiple populations though and the agents in one population can interact with the agents in another population.

After specifying what type of agent is in the population, you need to specify how many agents are in the population at the start of the simulation. Later on you can add or remove agents to a population by using the \e{add()} and \e{remove()} functions.

### Viewing Agent Results

Many of the standard Insight Maker display types can be used to show the results of an agent based simulation. If you add an agent population to a time series or tabular display, the results for the number of agents in each state will automatically be shown. You can also use the map display type to illustrate agents.


* Demo

## Working with Agents

Working with agents is fundamentally slightly different from working standard primitives in your model. For instance if you have a regular model and refer to the value of a variable or stock you get a single value back. With agents, however, you might have hundreds or thousands of different values of a variable or stock in your model one for each of the agents that have been created.

You will need a new toolkit to be able to effectively access and manipulate this form of data into a manner that is useful for you and allows you to accomplish your goals in your model. The key building block of this toolkit is the vector^[In some other languages vectors are sometimes called "Arrays" or "Lists".]. In the following section we will first introduce the general concept of vectors and then show you can use them to interact with agents.

### Working with Vectors

A vector is an ordered list of items. In Insight Maker vectors can written using the '«' sign (or '<<') followed by the '»' sign (or '>>'). For instance the following is a vector of the first four numbers:

\e{«1, 2, 3, 4»}

Insight Maker has extensive functions to manipulate vectors. For instance you can do multiplication using vectors:

\e{2*«1, 2, 3, 4» # = «2, 4, 6, 8»}

\e{«1, 2, 1, 2»*«1, 2, 3, 4» # = «1, 4, 3, 8»}

Or addition using vectors:

\e{2+«1, 2, 3, 4» # = «3, 4, 5, 6»}

\e{«1, 2, 1, 2»+«1, 2, 3, 4» # = «2, 4, 4, 6»}

There are also a large number of functions you can use to summarize vectors. For instance, you can find the average value in a vector:

\e{mean(«1, 2, 3, 4») # = 2.5}

Or the number of elements in a vector:

\e{count(«1, 2, 3, 4») # = 4 }

There are also functions you can use to change the ordering of elements in a vector:

\e{reverse(«1, 2, 3, 4») # = «4, 3, 2, 1» }

\e{sort(«3, 4, 2, 1») # = «1, 2, 3, 4» }

A couple functions are available to combine vectors together:

\e{Union(«1, 2 ,3», «2, 3 ,4») # = «1, 2, 3, 4» }

\e{Intersection(«1, 2 ,3», «2, 3 ,4») # = «2, 3» }

\e{Difference(«1, 2 ,3», «2, 3 ,4») # = «1, 4» }

And lastly there are two very powerful functions we should mention: \e{map()} and \e{filter()}. Map takes each element in a vector and applies some transformation to it and returns a vector of the results. For instance, if we want to take the square of each element in a vector we could run the following:

\e{Map(«1, 2, 3, 4», x^2) # = «1, 4, 9, 16» }

Here the function \e{x^2} is applied to each element in the vector (with \e{x} representing the element value) and the results are returned. Filter takes a function and applies it to each element in a vector. If the function evaluates to true, the element is included in the results vector, if it evaluates to false, the element is not included in the results. For instance, the following function filters out all elements that are smaller than 2:

\e{Filter(«1, 2, 3, 4», x >= 2) # = «2, 3, 4» }

There are many more vector functions available, but these are some of the key ones. They will prove invaluable when you come to working with collections of individual agents.

### Accessing Agents

Insight Maker includes a number of functions to access the individual agents within a population. The simplest of these is these is the \e{FindAll()} function. Given a agent population primitive let's call \p{Population}, the FindAll function returns a vector containing all the agents within that agent population:

\e{FindAll([Population])}

So if you agent population currently had 100 agents in it, this would return a vector with 100 elements where the first element referred to the first agent, the second element referred to the second agent and so on. It is important to note that these elements are agent references, not numbers. So you can use function like \e{Reverse()} on the resulting vector, but you cannot directly use functions like \e{Mean()} and the "average of agents" does not make any sense. Will see how to access the values for agents next.

In addition to the FindAll function, there are other find functions that return just a subset of the agents in the model. For instance, the \e{FindState()} and \e{FindNotState()} functions return, respectively, agents that have the given state active or not active. For instance, if our agents had a state called \p{Smoker} that represented if they were smokers or not we could contain a vector of the agents that were smokers using the following:

\e{FindState([Population], [Smoker])}

And we could obtain a vector of the agents that were not smoker with:

\e{FindNotState([Population], [Smoker])}

The find functions can also be nested. For instance, if we wanted a vector of all male smokers, we could do something like the following:

\e{FindState(FindState([Population], [Smoker]), [Male])}

Nesting find statements is like using Boolean AND logic (like you might use on a search engine: "Smoker AND Male"). To do or logic (e.g. "Male OR Smoker") and return all the agents that are either a smoker or a man (or both), you can use the Union function to merge to vectors:

\e{Union(FindState([Population], [Smoker]), FindState([Population], [Male]))}


###  Agent Values

Once you have a vector of agents, you can access the values of the primitives in those agents using the \e{Value()} and \e{SetValue()} functions.

The Value function takes two arguments: a vector of agents and the primitive for which you want the value. It then returns the value of that primitive in each of the agents as a vector. For instance, lets say are agents have a primitive named \p{Age} (it could be either a stock or a variable). We could get a vector of the age of all the people in the model like so:

\e{Value(FindState([Population]), [Age])}

A vector of ages by itself is generally of not too much use. Often we will want to summarize it, for instance by finding the average age:

\e{Mean(Value(FindState([Population]), [Age]))}

In addition to determining the value of of a primitive in an agent, you can also manually set them using the SetValue function. It takes the same arguments as the the Value function in addition to the value you want to set the agents to. For instance, we could use the following to set the age of all our agents to 25:

\e{SetValue(FindState([Population]), [Age], 25)}

* Demo


## Agent Geography

One of the key strengths of agent based modeling is that it allows us to represent the geography between our agents. So if we are developing a disease model we do not have to assume that all the agents are perfectly mixed together like atoms in a gas. Instead, using agent based modeling we can explicitly define the physical relationship between the different agents and study how this geography affects the spread of the disease.

In general when we talk about geography we are talking about spatial geography. The locations of people with a region in terms of the latitude and longitude (and sometimes their elevation). Insight Maker supports this kind of geography, but it also supports a second kind of geography: network geography. Insight Maker supports the specification of "connections" between agents. This leads to a new type of geography where you have centrally located agents (ones connected to many other agents) and agents far from the network's center (those that are unconnected or just connected to a very few other agents).

Both these types of geographies can be useful in exploring real world systems. We will introduce them both here.

### Spatial Geography

In insight Maker, each Agent Population can be given dimensions in terms of a width and a height. By default, agents are placed at a random location within this region. You can, however, choose a different placement method for the starting position of the agents. The following placement methods are available:

Random
: The default. Agents are placed and random positions with the geometry specified for the agent population.

Grid
: Agents are aligned in a grid like form. You need to ensure that you have enough agents so that the grid is complete and you might have to experiment with increasing or decreasing the numbers of agents to make the grid fit perfectly for a given region dimension.

Ellipse
: Agents are arrange in a single ellipse in the region. If the region geometry is a square, than the agents will be arranged in a circle.

Network
: Assuming connections between agents have been specified, the agents will be arranged in order to create a pleasing layout of the network structure.

Custom Function
: Here you can specify a custom function to control the layout of the agents. This function will be called once for each agent and should return a two element vector where the first element is the x coordinate of the agent, and the second element is the y coordinate. The primitive \p{Self} in this function will refer to the agent that is being positioned.

![Figure 1. Illustration of four agent placement algorithms. From the top, random, grid, ellipse, and custom function using: \e{<<2*index([Self]), 50+50*sin(index([Self])/10)>>}.](AgentPlacement.png)

#### Spatial Find Functions

When working with a spatially explicit model, a number of additional find functions are available to you to obtain references to agents that match some spatial criteria.

\e{FindNearby()} is a useful function that returns a vector of agents that are within some proximity to a target agent. It takes three arguments, the agent population primitive, the agent target for which you want nearby neighbors, and a distance. All agents within the specified distance to the target agent will be returned as a vector.

It is useful now to introduce the concept that will be very helpful to you. When used in an Agent, \p{Self} refers to the agent itself. So if you have a primitive within an agent \p{Self} can be used from that primitive to get a reference to the agent containing the primitive. So the following in an agent will return a vector of agents that are within 15 miles of the agent itself:

\e{FindNearby([Population], [Self], {15 Miles})}

Two other useful functions for finding agents in relation to each other are \e{FindNearest()} and \e{FindFurthest()}. FindNearest returns the nearest agent to the a target while FindFurthest returns the agent that is farthest away from it. Each of them also allow an optional third argument determining how many nearby (or far away) agents to return.

For example, the following finds the nearest agent to the current agent:

\e{FindNearest([Population], [Self])}

While this find the three agents that are furthest from it:

\e{FindFurthest([Population], [Self], 3)}

#### Movement Functions

You can also move your agents to new positions over the course of the simulation. To do this, it is helpful to use a new primitive we have not yet introduced. This primitive is that *Action* primitive. Action primitives are designed to execute some action that changes the state of your model. For instance, they can be used to move agents or change the values of the primitives within an agent. An action is triggered in the same way a transition is triggered. Like a transition, there are three possible methods of triggering the action: timeout, probability, and condition.

For instance, we can use and action primitive in an agent and the \e{Move()} function to cause our agents to move around randomly. The Move function takes two arguments: the agent to be moved, and a vector containing the x- and y-distances to move the agent. Thus, we could place an action primitive in our agent and give it the following action property to make it move the agent move randomly over time^[What we are implementing here is known as a "random walk" or Brownian motion. It is a commonly studied pattern of movement with wide applications in science.]:

\e{Move([Self], «rand, rand»-0.5)}

Another useful movement function is the \e{MoveTowards()} function. MoveTowards moves an agents towards (or away from) the location of another agent. MoveTowards takes three arguments, the agent to be moved, the target agent to move towards, and how far to move towards that agent (with negative values indicating movement away). The following command would move an agent one meter closer to its nearest neighbor in the population.

\e{Move([Self], FindNearest([Population], [Self]), {1 Meter})}

* Demo

### Network Geography

To create connections and remove connections between agents you can use the \e{Connect()} and \e{Unconnect()} functions. Both of these functions take two arguments: the agents that should be connected or disconnected. For example, to connect an agent to its nearest neighbor, you could use the following

\e{Connect([Self], FindNearest([Population], [Self]))}

To disconnect an agent from its nearest neighbor (assuming they are connected), you would use:

\e{Unconnect([Self], FindNearest([Population], [Self]))}

To obtain a vector of connections to an agent, use the \e{Connected()} function:

\e{Connected([Self])}

By default, no connections are created when a simulation is initially started. If you change the \u{Network Structure} configuration property of the agent population primitive you can specify a function to create connections when the simulation is started.

This function is called once for each pair of agents in the model. The agents are available in the function as the variables *a* and *b*. If the function returns true, then the agents will start connected. If the function returns false, the agents will not be initially connected. You could use this function for, to instance, specify that 50% of agents will be directly connected to each other using:

\e{RandBoolean(0.5)}

* Demo

## Multiline Equations

So far in this book, the equations we have looked at have generally been straightforward mathematical equations. We have introduced some more advanced concepts, such as vectors, but for the most part our equations have been relatively simple. When doing Agent Based Modeling, at some point you will find these one-line equations to be limiting. When you start to run into these limitations with your own models you may need to start using multiline equations for certain things.

Basically, almost everywhere in Insight Maker where you can write a mathematical expression, you can also right a multiline equation. It turns out the Insight Maker's language for specifying equations is actually a flow-blown computer programming language and you can use multiline equations to implement whatever functionality you want.

We delayed introducing these capabilities as they can be a distraction from focusing on understanding a system. However, when you build complex Agent Based Models, they can be necessary to express the model logic you wish. Given this, we'll provide a brief introduction to the programming features that can be used as part of Insight Maker equations.

### Variables

Variables are temporary slots to store values to be reused within your equation. Variables are created using the '<-' symbol. For instance:

\e{
a <- 2 # The variable 'a' holds the value 2
b <- a + 2 # The variable 'b' holds the value 4
a <- b^2 # b=4, a=16
}

Variable names can contain any number of letters and numbers, but should always start with a letter. 

### If-Then-Else

You should be familiar with the \e{IfThenElse()} function. A multiline alternative to it exists. The following is equivalent to \e{IfThenElse([Lake] > 10, 1, 2)}.

\e{
	If [Lake] > 10 Then
		1
	Else
		2
	End If
}

One of the benefit of these multiline equations is they can be more readable than the single line functions. This is especially true if you are trying to do nested if statements. Compare \e{IfThenElse([Lake] > 10, 1, IfThenElse([Lake] < 5, -1, 2))} to:

\e{
	If [Lake] > 10 Then
		1
	Else If [Lake] < 5 Then
		-1
	Else
		2
	End If
}

The second one is much more readable. This makes it easier to maintain and more resilient to typos and bugs.

### Loops

Loops are a programming construct that repeats some code multiple times. There are several different types of loops. One key  loop is the *for* loop which repeats a command a specified number of times. Here is an example of it:

\e{
sum <- 0
for i from 1 to 3
	sum <- sum + i
end loop
sum
}

The inner part of the loop is run three times here. The first time *i* is assigned the value of 1, the next time 2, and the last time 3. So this sums up the values of 1, 2, and 3 resulting in 6. 

Another variant of the *for* loop is the *for-in* loop. This uses a vector to assign the number of iterations. The following code sums the numbers 1, 5, and 10 to get 16.

\e{
sum <- 0
for i in «1, 5, 10»
	sum <- sum + i
end loop
sum
}

These loops can be very useful to iterate through a vector of agents. Another loop exists called the *while* loop that repeats some code until a condition becomes true. Here is an example:

\e{
total <- 2
while total < 100
	total <- total^2
end loop
total
}

This code keeps squaring the total variable until the total is greater than 100. This will results in 256.

### Functions

Functions allow you to reuse code in multiple places in your model. For instance, imagine you had a model that dealt with temperatures in both Degrees Fahrenheit and Celsius. Every time you want to convert from one form to the other you would have to include the standard conversion formula in your equations. Not only would this be tedious, it would also be error prone as you could make a mistake one of the times you typed it.

You can define functions two ways. One is a short one-liner:

\e{FtoC(f) <- 5/9*(f+32)}

And another is a multiline form allowing you to incorporate multiline logic:

\e{
Function FtoC(f)
	5/9*(f+32)
End Function
}

A great place to include your functions is in the Macros section of your model. You can enter macros by clicking the \u{Macros} button in the \u{Tools} section of your toolbars. The function you define here will be accessible in any equation in any part of your model.

## Integrating SD and ABM

System dynamics modeling and agent based modeling are two different ways of approaching modeling. System dynamics looks at highly aggregated systems and encourages the study of feedback. Agent based modeling, conversely looks at individuals and the interactions between these individuals.

Although these techniques can be thought of as quite different, it important to realize that at the end of the day both of them are simply applied mathematics. To emphasize this, Insight Maker integrates both the techniques together seamlessly in its modeling environment. There is no such thing as an "Insight Maker Agent Based Model" or an "Insight Maker System Dynamics Model". There are simply models where you may use agent based techniques, system dynamics techniques or a mixture of the two techniques. Some software packages only do System Dynamics or Agent Based modeling leading to the perception that they are fundamentally incompatible methodologies.

Insight Maker (and other modeling packages such as AnyLogic <http://www.anylogic.com/>) allows you to integrate the two seamlessly together. For instance, in this chapter we have used state transition diagrams within our agents. We could just as well use stock and flow diagrams within our agents so that each agent in effect contains its own System Dynamics model of its state. Similarly you can have a large System Dynamics model, and have an agent based sub-model that feeds into the overreaching models.

When doing modeling its important to not get focused on labels or modeling taxonomies. Given a modeling task you want to think about what tools techniques are best used to approach it. You do not want to approach a modeling problem trying to figure out how to fit the task into your favorite modeling paradigm.
