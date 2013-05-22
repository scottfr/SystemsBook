# Model Tests

This is some **Markdown**.

fjdshkfjds

fdshfjsd

What is "Time Step"?
---------

You do not have to know calculus to use Insight Maker. You just need to know some algebra. There are two details about calculus that Insight Maker asks for your help in selecting the best option. These are in the "Time Settings" dialog box where you configure the time settings.

The goal is to have the incremental step change as small as possible without using too much computer memory and processing time. When computers were first used for calculus they did not have sufficient memory and processing speed to use extremely small incremental step change values.

Open the "Time Settings" dialog box. The simulation start and length are for you to decide how long to run your simulation. Then there is the "Simulation Time Step". First, the units for this are NOT time. Using the word "time" here is a misnomer. "Time Step" means the change in value of the horizontal axis (or x-axis) as the value of the vertical axis changes.

In calculus this value is used to calculate an exact answer by taking the limit as the change in the horizontal axis value approaches zero. OK, that was complex, here is what you need to know:

1. Pick a value for "Time Step" that is 0.125 or less for your first run.
2. Observe the shape of the graph and record the exact value of the last value calculated for the Y-axis and X-axis (time).
3. Pick a new value for "Time Step" that is half of the previous value.
4. Observe the shape of the graph and compare the exact value of the last calculated value to those in step 2 above.
5. If there is no change then you are done. If there is a change in the shape of the graph or if the values are different then repeat step 3 until there is no change out to the appropriate number of significant digits for your values.

The second item of concern is the "Analysis Algorithm". Again, when computers were slow and had less memory, the integration method was important. The choice of using "Fast (Euler)" is not necessary in the 21st Century. You should always use "Accurate (RK4)".

RK4 means Runge-Kutta, fourth-order method, an accurate method for finding approximation solutions to ordinary differential equations.




# Model

{"create": "Stock", "geometry":{"x":400,"y":140,"width":100,"height":40}, "name": "Healthy"}

{"create": "Stock", "geometry":{"x":400,"y":280,"width":100,"height":40}, "name": "Infected"}

{"target": "Infected", "geometry":{"x":400,"y":280,"width":100,"height":40}}

DIAGRAM

{"create": "Flow", "geometry":{"x":0,"y":0,"width":100,"height":100}, "alpha": "Healthy", "omega": "Infected", "name": "Infection"}

DIAGRAM

The basic model structure has been laid-out, we can start to define parameter values and equations. We'll start with a very simple model containing a population of 100 people and where 2 people becoming sick each year.

{"attribute": "InitialValue", "target": "Healthy", "value": "100"}

{"attribute": "FlowRate", "target": "Infection", "value": "2"}

RESULTS

The results are as we would expect. However this is not a model of an infectious disease as the infection rate does not depend on the presence of infected individuals. Let's change the infection rate so it depends on the contact rates between sick and healthy people.

{"attribute": "FlowRate", "target": "Infection", "value": "0.006*[Healthy]*[Infected]"}

RESULTS

That's strange. No one ever gets sick. Why is that? It turns out it is because we start the simulation with no infected people in the model. Since we're modeling an infectious disease, this means there is no one to start the epidemic! Let's change that we'll add a single infected person to get the epidemic started.

{"attribute": "InitialValue", "target": "Infected", "value": "1"}

RESULTS

That looks about right. Before moving on, let's spend a moment to improve our model structure. Right now if we wanted to edit the infection rate, we would have to dig down in the equations to find the right number. Let's make our model more modular, without changing any results, by separating the infection rate into its own variable.

This is what is known as the *SIR Model* (Susceptible-Infected-Recovered) in the modeling community.

# End Model


Some more text...

# Model #

testing...

# End Model #

This is the end of the chapter.
