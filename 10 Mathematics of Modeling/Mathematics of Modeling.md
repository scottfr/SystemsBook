# The Mathematics of Modeling

This chapter takes the modeling techniques introduced earlier in this book and places them within a firm mathematical framework. The contents of this chapter are quite technical in parts and to fully understand them requires knowledge of basic calculus and linear algebra. We present the material because it is important for both readers who want a deep understanding how their models operate and also those who wish to understand how System Dynamics fits within the larger field of mathematical modeling. For users who approach systems thinking and modeling from a more qualitative angle, this material may be browsed or safely skipped.


##  Differential Equations and System Dynamics

Differential equations are a common mathematical tool used to study rates of change. Some basic terminology needs to be learned in order to discuss differential equations. After introducing this new terminology, we will then tie it back to the modeling techniques you’ve already learned.

State Variable
: A state variable is an object that represents part of the state of a system. For instance, in a population model you could have a state variable representing the current number of individuals in that population. In a model of a lake, you could have a state variable representing the current volume of water in the lake. In equations, state variables are often represented using Roman letters such as $X$, $Y$ or $Z$.

Derivative
: Derivatives define rates of change in state variables. For instance, if we had a state variable representing the size of a population, a derivative would specify how this population grows or shrinks over time. The population's derivative would aggregate all changes such as births, deaths and immigration or emigration to show the net change in the state variable over time. Similarly, in the case of a model of a lake, the lake volume state variable would have a derivative showing how much net water flows into or out of the lake over time. Given a state variable $X$, the derivative of $X$ with respect to time is generally written as $dX/dt$ but can also be written as $X'$ or $\dot{X}$.

Let's put this new terminology to work to define a simple model. We start by creating an exponential growth population model. We only need one state variable in this model to represent the size of the population. We denote this state variable as $P$. We need to define one parameter to control the growth rate in the population. We will denote this growth rate parameter $\alpha$.

The resulting differential equation exponential growth model can be written simply as:

$$ \frac{dP}{dt} = \alpha \times P $$

This indicates that the rate of change for the population for one unit of time is $\alpha \times P$. Our model is not quite fully specified yet as we do not know what the initial value of the population is. Differential equation models are often additionally specified by providing the values of the state variables at a specific point in time. Below we indicate that the population size at time 0 is 100.

$$ P(0) = 100 $$
$$ \frac{dP}{dt} = \alpha \times P $$

You may have already noted that this model is easy to construct using the techniques we have already introduced in the book. In fact we have discussed this type of model several times. We could construct it with System Dynamics tools using a stock to represent the population ($P$), a flow to represent the change of population ($dP/dt$) and a variable to represent birth rate ($\alpha$). We could specify our initial condition of a population size of 100, by setting the initial value for the stock for 100.

This is an important point. Many differential equation models^[Specifically those where the denominator in the derivative $dX/dt$ is always $dt$: a very wide class of commonly used models.] can be directly represented using the System Dynamics modeling techniques described in this book. Similarly, a System Dynamics model can be rewritten as a differential equation model.

From this perspective, System Dynamics models and differential equation modeling are one and the same. A System Dynamics model can be expressed using differential equation notation and vice versa. To see this in more detail, we can look at the mapping between System Dynamics and differential equation models. There is a one a one-to-one direct correspondence between the key System Dynamics primitives and components of a differential equation model.

System Dynamics Primitive | Differential Equation Equivalent
---|---
Stock | State Variable ($X$, $Y$, etc...)
Flow | Derivative ($dX/dt$, $dY/dt$, etc...)
Variable | Constants/Parameters ($\alpha$, $\beta$, etc...)

Since they do not differ significantly from a mathematical standpoint, what separates these two approaches to modeling? Where System Dynamics and differential equation modeling differ is in their focus and philosophy. The primary goal for differential equation modelers is analytic tractability (in other words, how easy is it to mathematically manipulate and understand the model’s equations). This analytic tractability allows these modelers to derive definite results and conclusions from the model's equations. System Dynamics modelers generally are less concerned about analytic tractability and are more comfortable with simulating the model and drawing conclusions from observed trajectories and numerical results.

System Dynamics modelers, to go further, care greatly about communicating their models, deliberately mirroring reality to some extent and exploring the consequences of feedback. The differing focuses on communication between System Dynamics modelers and differential equation modelers can be seen in the method of naming variables. Differential equation models are generally dominated by abstract Greek symbols (e.g. $\alpha$) while System Dynamics models generally clearly spell out variable names (e.g. "Birth Rate") and additionally use a model diagram to illustrate and communicate the relationships between different parts of the model.

~ Exercise

You have a System Dynamics model simulating water leaking out of a hole in a jar. You have a stock \p{Jar} with an initial value of 40. Roughly 10% of the water leaks out of the jar every time period and there is a single flow leading out of the jar with the rate \e{0.10*[Jar]}. Express this model using differential equations.

~ Answer

You can denote volume of water in the jar using the state variable $J$. Our equations will then be:

$$ J(0) = 40 $$
$$ \frac{dJ}{dt} = -0.10 \times J$$

~ End Exercise

~ Exercise

You have a System Dynamics model simulating people becoming sick. You have two stocks in the model \p{Healthy} and \p{Infected}. There is a single flow, \p{Infection}, going from the healthy to infected stock with a flow rate of \e{0.05*[Infected]*[Healthy]}. Initially there are 100 infected people, and 1 infected person. Express this model using differential equations.

~ Answer

You can denote the healthy stock using state variable $H$ and the infected stock $I$. Our equations will then be:

$$ H(0) = 100 $$
$$ I(0) = 1 $$
$$ \frac{dH}{dt} = -0.05 \times H \times I $$
$$ \frac{dI}{dt} = 0.05 \times H \times I $$

~ End Exercise

~ Exercise

You have a differential equation model of an animal population's growth (denoted $P$). The animals growth is parameterized by the parameter $r$ and a maximum population size or carrying capacity of $K$. The following differential equations define this model:

$$P(0) = 500$$
$$r = 0.05$$
$$K = 10000$$
$$\frac{dP}{dt}=r P \left(1-\frac{P}{K}\right)$$

Implement a System Dynamics version of this model. What is the size of the population after 100 years?

~ Answer

Approximately 8,865 animals.

~ End Exercise

## Solving Differential Equations

Given a differential equation or System Dynamics model specification, how do you go about determining the results of the model? This is typically referred to as "solving" the model. Since differential equation models and system dynamics models are essentially one and the same, the techniques used to solve differential equations can be directly applied to System Dynamics models and they are the techniques used by Insight Maker when you simulate any of the models in this book.

For most of the rest of this chapter, we use the differential equation terminology instead of the System Dynamics one. We do so first because it is more concise and more elegantly addresses the issues discussed in this chapter, but also because we want to familiarize you with its terminology and concepts. If you ever get lost, just refer to the System Dynamics to differential equation translation table we showed above.

Let's start our discussion of solving differential equations using our simple population model. As you recall, this model was:

$$ P(0) = 100 $$
$$ \frac{dP}{dt} = \alpha \times P $$

What is the size of the population, at, let's say $t=10$ given an $\alpha$ of 0.1? Calculus can be used to solve the model and answer this question. First we separate the terms of the derivative and integrate both sides of the equation. Thereafter it is a simple matter of algebra to solve for $P$:

$$
\begin{aligned}
\frac{dP}{dt} &= \alpha \times P \\
dP &= \alpha \times P\ dt \\
\frac{1}{P}\ dP &= \alpha\ dt \\
\log(P) &= \alpha \times t + A \\
P &=  e^{\alpha \times t + A} \\
P &=  B \times e^{\alpha \times t} \\
\end{aligned}
$$

In this equation two new variables $A$ and $B$ appeared (where we arbitrarily set $B=e^A$). These are unknown integration constants^[Recall from calculus that if $A$ is a constant, then $x^2+A\ dx = 2 \times x$. When we integrate $2 \times x$ we need to add back in the constant term. We don’t know the value of this constant term immediately and we have to determine it later on.]. We can determine the values of the integration constants based on the initial conditions of the model, as we specified earlier that $P(0) = 100$. We evaluate the solution of the model at this initial condition to determine the value of $B$.

$$
\begin{aligned}
P &= B \times e^{\alpha \times t} \\
100 &= B \times e^{\alpha \times 0} \\
100 &= B
\end{aligned}
$$

Thus our generic equation for $P$ at any time and for any $\alpha$ is:

$$ P = 100 \times e^{\alpha \times t} $$

Plugging in $\alpha=0.1$ and $t=10$, we obtain:

$$
\begin{aligned}
P &= 100 \times e^{0.1 \times 10} \\
  &= 271.828...
\end{aligned}
$$

For this simple population model we have shown that we can obtain the precise population value at any point in the future. It took a fair amount of algebra even for such a simple model, but we did it!

Unfortunately, many differential equation models cannot be solved using these techniques. For most complex models in practice, it is impossible to analytically determine the values of the state variables in the future. This inability to solve a model can be true for even very simple models. Take for example the following growth model similar to our original one:

$$ P(0) = 100 $$
$$ \frac{dP}{dt} = \alpha \times P \times \log(P) $$

We have simply added a logarithm of $P$ into our growth rate. Despite the smallness of this change, this model is now impossible to solve analytically. There is no analytic solution possible, but feel free to give it a try yourself (but please don't try too hard; we promise there is no solution). When developing complex models it should generally to be assumed that in practice no analytical solution will be available. In cases like these, how can we go about developing solutions to the equations and determining the trajectory of the state variables in the system?

~ Exercise

Solve the differential equation:

$$ P(0) = 10 $$
$$ \frac{dP}{dt} = -\alpha $$

~ Answer

$$ P = 10 - \alpha \times t$$

~ End Exercise

~ Exercise

Solve the differential equation:

$$ P(0) = 10 $$
$$ \frac{dP}{dt} = 0.05 \times P $$

~ Answer

$$ P = 10 \times e^{0.05\times t}$$

~ End Exercise

~ Exercise

Solve the differential equation:

$$ P(0) = 20 $$
$$ \frac{dP}{dt} = \beta \times P^2 $$

~ Answer

$$ P = \frac{20}{1 - 20 \times \beta \times t }$$

~ End Exercise

The answer is numerical approximation. Even if we can't solve the model equations analytically, we will always be able to approximate their results numerically. A number of different algorithms exist that allow us to approximate the solution to differential equations by repeatedly plugging values into them. To discuss these methods, it is useful to introduce some additional mathematical notation.

In our previous models, we have only looked at systems with a single state variable at a time. However, we can also consider systems containing multiple state variables. The Lotka-Volterra predator prey system we looked at earlier in the book is an example of this. Given two populations of animals -- let's say a population of wolves ($W$) and a population of moose ($M$) -- where the first population preys upon the second, we obtain a paired set of differential equations representing this predator prey relationship:

$$ \frac{dM}{dt} = \alpha \times M - \beta \times M \times W $$
$$ \frac{dW}{dt} = \gamma \times M \times W - \delta \times W  $$

When looking at algorithms to solve sets of equations like these numerically, it can be useful to denote $\mathbf{y}$ as a vector of all the state variables in the model. So for the case of the exponential growth model $\mathbf{y}=[P]$ while for the Lotka-Volterra model $\mathbf{y}=[M, W]$. When using this notation, $\mathbf{y_t}$ indicates the vector of state variable values at a specific point in time, so $\mathbf{y_0}$ are the initial conditions for this model.

Additionally, we can denote $\mathbf{y'}$ as the vector of derivatives for the different state variables. We treat these derivatives as functions of the current time and the values of the other state variables. So, for instance, to determine the rate of change of the state variables in a model at $t=10$, we would write $\mathbf{y'}(\mathbf{y_{10}}, 10)$ where $\mathbf{y_{10}}$ are the values of the state variables at $t=10$.

The use of this notation might seem cumbersome, but it allows us to elegantly describe the mathematics of numerical solution algorithms without getting tied up in the details of a specific model.

### Euler's Method

![Leonhard Euler](EulerPortrait.jpg)

The most basic numerical solution algorithm for differential equations is Euler's method^[Leonhard Euler was a brilliant 18th century Swiss mathematician who made many great advances in the theoretical and applied mathematics.]. Simply put, assuming we know the state of the system at time $t$ and we wish to estimate the state of the system at time $t+\Delta t$ (where $\Delta t$ is pronounced "delta-t" and represents the change in time) we can use the following equation:

$$ \mathbf{y_{t+\Delta t}} = \mathbf{y_{t}} + \Delta t \times \mathbf{y'}(\mathbf{y_t}, t) $$

Let's walk through what this equation is doing. It first takes the derivatives for the state variables at the current point in time. It multiplies these rates of change by the $\Delta t$ (how far in the future we want to know the results) and adds this change to the values of the state variables at the starting point in time. The result is an estimate of what the values in the future should be.

Let’s now apply this to a concrete example. Start with our population scenario, but instead of exponential growth we have a fixed inflow of people at a rate of 20 per year. At $t=0$ we have 100 people and we want to know the population in 10 years, using Euler's method we obtain the following:

$$
\begin{aligned}
P_{10} &= P_0 + \Delta t \times \frac{dP}{dt} \\
&= P_0 + 10 \times 20 \\
&= 100 + 200 \\
&= 300
\end{aligned}
$$

Thus the population size in 10 years will be 300. In this simple example, Euler's method works perfectly and generates the exact same answer as we would have found using analytic solutions.

In general, however, we won't be so lucky. For most problems Euler's method will generate results that contain some level of error compared to what the true value should be. To see this let's explore our exponential growth model again with an $\alpha$ of 0.1. As a reminder, this model is:

$$ P(0) = 100 $$
$$ \frac{dP}{dt} = 0.1 \times P $$
 
As we showed earlier, the precise solution to this model for $t=10$ (to three decimal places) is 271.828. Let's see what we get using Euler's method with $\Delta t = 10$. Carrying out similar calculations as before we get:

$$
\begin{aligned}
P_{10} &= P_0 + \Delta t \times \frac{dP}{dt} \\
&= P_0 + 10 \times (0.1 \times P_0) \\
&= 100 + 10 \times (0.1 \times 100) \\
&= 100 + 10 \times 10 \\
&= 100 + 100 \\
&= 200
\end{aligned}
$$
 
So using Euler's method we obtain an estimate 200 for the population size at $t=10$ when we know the true value should be around 272. That's a pretty large error! Why does this error come about? Why do we so significantly underestimate the final population size?

The reason is that we calculate the population's rate of change only at $t=0$. For each of the ten years we are simulating, we assume the population grows at the rate it would if there were exactly 100 people. However, the population size is constantly increasing during these ten years, so the rate at which it grows should also be increasing. Imagine, the case of a bank account with an interest rate of 10% yearly. The bank account grows over time so the interest earned should also grow from year to year. It's the same principle of compounding here.

How do we address this issue? Using Euler's method, we can do it simply by changing how often we calculate the rates of change. In our previous calculation, we went straight from $t=0$ to $t=10$ all in one step, we used a $\Delta t$ in Euler's equation of 10. However, we could employ an alternate calculation strategy where, for instance, we stepped from $t=0$ to $t=5$, recalculated the derivative based on the new population size and then stepped from $t=5$ to $t=10$. This would be equivalent to used a $\Delta t$ of 5 and iterating the algorithm twice. Here is what we get doing this:

$$
\begin{aligned}
P_{5} &= P_0 + \Delta t \times \frac{dP}{dt} \\
&= P_0 + 5 \times (0.1 \times P_0) \\
&= 100 + 50 \\
&= 150 \\
P_{10} &= P_5 + \Delta t \times \frac{dP}{dt} \\
&= P_5 + 5 \times (0.1 \times P_5) \\
&= 150 + 5 \times 15 \\
&= 150 + 75 \\
&= 225
\end{aligned}
$$ 

That result is certainly better, and we cut our error by over 33%. However, the error is still too large for most practical purposes. To improve the numerical estimation even more, we can apply smaller and smaller $\Delta t$'s. You probably have a good grasp of the calculations now, so let's just show the results for each step of the simulation. We’ll look at $\Delta t = 2$ and $\Delta t = 1$.


$t$|$P$
---|---
0|100
2|120
4|144
6|172.8
8|207.4
10|248.8

$t$|$P$
---|---
0|100
1|110
2|121
3|133.1
4|146.4
5|161.1
6|177.2
7|194.9
8|214.4
9|235.8
10|259.4

We see that as $\Delta t$ gets smaller and smaller our results become more and more accurate. However, they are never perfect. There is always some error. Even if we made $\Delta t$ as small as 0.1 (requiring 100 simulation steps), our final population size would be calculated to be 270, an error just under 1%.

Figure 1 illustrates the application of Euler's method to numerically estimate the trajectory for an example function. The smaller the $\Delta t$'s in the estimation are, the better the results will be. Other terms that can be used in place of $\Delta t$ are "Step Size", "Time Step" or just "DT". We prefer not to use the notation DT as it is easily confusable with the $dt$ from differential equations. The latter indicates an infinitesimally small change, while step sizes are never infinitesimally small.

![Figure 1. Euler's method at work. The true trajectory for the illustrative state variable is shown in green. Euler's method estimate of this trajectory is shown in blue.](Euler.png)

As you decrease the step size for the simulation, the results of the simulation become more and more accurate^[It is important to note at this point that when we discuss accuracies in this context we are specifically referring to models composed of continuous differential equations. If you are using agent based modeling or have discontinuities in your models -- which could occur if you use \e{IfThenElse()} logic -- then a smaller step size may not provide additional accuracy when there is some fundamental time step logic to the model.]. The cost of this increased accuracy, however, is increased computation time. The computation time required by your model is directly proportional to 1 over the step size. Thus, if you cut the step size in half, your model will take twice as long to complete simulating.

In general, you want a step size small enough that your results are "accurate enough," but one that isn't so small that the simulation takes too long to complete. A rule of thumb for choosing the step size is to choose a starting step size that results in a fast simulation. Then cut the value of the step size in half and simulate the model again. If the results have not change materially between these two simulations, keep the larger step size. If the results have changed, cut the step size in half again and repeat until the results cease to change.

~ Exercise
Take the differential equation:

$$ P(0) = 20 $$
$$ \frac{dP}{dt} = \frac{100}{P} $$

Given a step size of 1, find the values of $P$ at $t=0,1,2,3,4,5$ to one decimal place using Euler's method.

~ Answer

20.0, 25.0, 29.0, 32.4, 35.5, 38.3

~ End Exercise

~ Exercise
Take the differential equation:

$$ P(0) = 20 $$
$$ \frac{dP}{dt} = P^2 - P $$

Given a step size of 1, find the values of $P$ at $t=0,1,2,3,4,5$ to one decimal place using Euler's method.

~ Answer

20.0, 27.0, 37.5, 53.9, 78.3, 124.5

~ End Exercise

### Runge-Kutta Methods

![Carl Runge and Martin Kutta](RungeKutta.png)

Euler's method is not the only technique that can be used to numerically solve differential equations. Another popular set of techniques are called Runge-Kutta methods. Runge-Kutta methods are a family of numerical differential equation solvers. In fact Euler's method itself can be classified as a simple Runge-Kutta method.

One particular member of the Runge-Kutta family of methods that is widely used is a 4th-order Runge-Kutta method. This method differs from Euler's method in that for each step, it evaluates the model multiple times and averages the resulting derivatives. Briefly, the driving set of equations for this method is as follows:

$$
\begin{aligned}
\mathbf{y_{t+\Delta t}} &= \mathbf{y_{t}} + \Delta t \frac{\mathbf{a}+2 \times \mathbf{b}+2 \times \mathbf{c}+\mathbf{d}}{6} \\
\text{Where:} \\
\mathbf{a} &= \mathbf{y'}(\mathbf{y_t}, t) \\
\mathbf{b} &= \mathbf{y'}(\mathbf{y_t}+\frac{\Delta t}{2} \times \mathbf{a}, t+\frac{\Delta t}{2}) \\
\mathbf{c} &= \mathbf{y'}(\mathbf{y_t}+\frac{\Delta t}{2} \times \mathbf{b}, t+\frac{\Delta t}{2}) \\
\mathbf{d} &= \mathbf{y'}(\mathbf{y_t}+\Delta t \times \mathbf{c}, t+\Delta t) \\
\end{aligned}
$$

What this algorithm does is first compute the derivatives of the system at the current time ($\mathbf{a}$) and use them to move the system forward to $t+\Delta t/2$. The derivatives are evaluated at $t+\Delta t/2$ ($\mathbf{b}$) and this new set of derivatives is used to again move the system from $t$ to $t+\Delta t/2$. A third set of derivatives are evaluated again at this mid-point ($\mathbf{c}$) and they are the used to move the system from $t$ to $t+\Delta t$. A fourth set of derivatives are evaluated at this point ($\mathbf{d}$). The system is then returned to its starting point and a weighted average of derivatives are used to move the system the full time step. This weighting puts most of the weight on the middle two derivatives instead of the derivatives from the end points.

This 4th-order Runge-Kutta method is generally much more accurate than Euler's method for a given step size. Using a step size of 10 for our earlier population model, the Runge-Kutta method generates a value of 270.8. A step size of 5 yields a results of 271.7, just a smidgeon away from the precise value of 271.8. Recall that for Euler's method, even with a step size of 0.1 we still were not as accurate as the Runge-Kutta method with a step size of 5. Now it is true that this 4th-Order Runge-Kutta method does a lot more work than Euler's method for each step. It evaluates the model for times and has to do some averaging of derivatives. However, it is still much more accurate than Euler's method for an equivalent level of computational effort.

~ Exercise
Take the differential equation:

$$ P(0) = 20 $$
$$ \frac{dP}{dt} = \frac{100}{P} $$

Given a step size of 1, find the values of $P$ at $t=0,1,2,3,4,5$ to one decimal place using the 4th-Order Runge-Kutta method.

~ Answer

20.0, 24.5, 28.3, 31.6, 34.6, 37.4

~ End Exercise

~ Exercise
Take the differential equation:

$$ P(0) = 20 $$
$$ \frac{dP}{dt} = P^2 - P $$

Given a step size of 1, find the values of $P$ at $t=0,1,2,3,4,5$ to one decimal place using the 4th-Order Runge-Kutta method.

~ Answer

20.0, 29.1, 44.7, 73.6, 131.5, 260.4

~ End Exercise

~ Exercise
Discuss the differences between the 4th-Order Runge Kutta solutions and the Euler solutions. What causes these differences? Which method is most accurate? Why?
~ End Exercise

~ Exercise
Describe a model where Euler's method would be best suited as a numerical solver. Describe a model where the 4th-Order Runge-Kutta method would be best suited.
~ End Exercise

# Model

{"title":"Numerical Solution Algorithms", "description": "This model explores the selection of the simulation step size and differential equation solution algorithm."}

{"geometry":{"x":390,"y":330,"width":100,"height":40},"name":"Population","create":"Stock"}

{"attribute":"InitialValue","target":"Population","value":"100"}

{"geometry":{"x":0,"y":0,"width":100,"height":100,"sourcePoint":{"x":440,"y":110},"targetPoint":{"x":0,"y":100}},"alpha":null,"omega":"Population","name":"Net Growth","create":"Flow"}

{"geometry":{"x":590,"y":120,"width":120,"height":50},"name":"Growth Rate","create":"Variable"}

{"attribute":"Equation","target":"Growth Rate","value":"0.1"}

{"geometry":{"x":0,"y":0,"width":100,"height":100},"alpha":"Growth Rate","omega":"Net Growth","create":"Link"}

{"attribute":"FlowRate","target":"Net Growth","value":"[Growth Rate]*[Population]"}

{"geometry":{"x":590,"y":320,"width":120,"height":50},"name":"True Population","create":"Variable"}

{"geometry":{"x":0,"y":0,"width":100,"height":100},"alpha":"Growth Rate","omega":"True Population","create":"Link"}

{"attribute":"Equation","target":"True Population","value":"100*Exp([Growth Rate]*Years)"}

{"attribute":"TimeLength","value":"10"}

DIAGRAM

Let's now implement the simple exponential growth model we have discussed in this chapter. We have a population that starts with 100 people and increases at a rate of 10% per year. In addition to creating the stock and flow model, we have also created a variable, [True Population], that contains the analytical solution to the model.

First, we'll use Euler's method with a step size of 2 years and simulate the model.

{"attribute":"TimeStep","value":"2"}

RESULTS

As we can see these results aren't very accurate. The value of the numerical estimated [Population] is quite different from the analytically determined value in [True Population]. Let's reduce the step size to 1 year and try again.

{"attribute":"TimeStep","value":"1"}

RESULTS

This is better, but we're still off by a fair amount. We could experiment with continuing to reduce the step size, but let's instead switch now to the more accurate Runge-Kutta method. Will simulate the model again with a step size of 1 using the 4th-Order Runge-Kutta solution algorithm.

{"attribute":"SolutionAlgorithm","value":"RK4"}

RESULTS

That's a lot better! It's so close to being perfect that we can’t even see the difference between the two lines in the figure. Just to be clear, let's see how quickly the results degrade when we increase the step size. Let's set the step size to 10 and simulate the model again.

{"attribute":"TimeStep","value":"10"}

RESULTS

That's still very good and much better than Euler's Method with a step size of 1. Why don't you go ahead now and experiment with different step sizes and the two solution methods to get a feel for their accuracies.

# End Model


### Other Solution Techniques

While being a brief introduction into numerical solution methods for differential equations, this should provide you with the background you need to intelligently make decisions about controlling the simulation of your models. It should help you identify potential sources of errors in your model and help you to adjust you simulation configuration to account for them.

The two methods we have looked at for solving differential equation models -- Euler's method and a 4th-Order Runge-Kutta method -- are widely used and they are what are built into Insight Maker. In addition to these two techniques, however, there are many other methods that are used in practice and you should be aware of this richer ecosystem of solution techniques.

Although we do not have space here to delve into the full ecosystem of numerical differential equation algorithms, it is useful to discuss one variant briefly: the adaptive step size algorithm. The methods we have looked at here use a fixed step size specified at the beginning of a simulation. Many models, however, might be characterized by highly variable trajectories. Part of the trajectory might be very smooth and unchanging while other parts might experience numerous rapid changes.

When using a fixed step size algorithm like the ones illustrated above, the step size must be set for the worse case scenario. The step size must be set to a small enough value to account for the rapidly changing areas. That said, the precision of this small step size is unnecessary on the smooth regions of the trajectory where the algorithm must do extra work for minimal gain in precision. Ideally, we would want to have a small step size for the rapidly changing areas and a large one for the smooth regions. This would result in the best of both worlds: high accuracy and quick computation.

![Figure 2. Illustration of an adaptive step size algorithm. Dots show the location of model evaluations. Evaluations are clustered around changes in the derivatives.](Adaptive.png)

Adaptive step size algorithms do just that. They adjust the step size dynamically based on the behavior of the model's derivatives. If the derivatives change rapidly, then the step size will be automatically shrunk; if the derivatives are constant or change very slowly the step size will automatically grow. Figure 2 illustrates the location of steps for an illustrative model using an adaptive step size algorithm. The steps are clustered around changes in the trajectory's derivatives in an attempt to maximize predictive accuracy while minimizing computation effort.

