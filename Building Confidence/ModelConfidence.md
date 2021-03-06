# Building Confidence in Models

When used correctly, the modeling techniques presented in this ILE result in models that are powerful and persuasive tools. As with any model, however, concerns and questions will invariably be raised that could cause users to doubt the results. You can use a number of techniques to help preemptively address these concerns and increase an audience’s confidence in your model.

The idea of building confidence in a model is traditionally tied to the standard concept of model verification and validation. We dislike this conceptual approach to assessing models, as it implies that a model can go through a process to get a big fat “VALID” or “VERIFIED” stamp on it. Returning to Box’s quote that "all models are wrong, but some are useful", in reality, all models are wrong and none of them are completely valid - period. However, models can be useful, especially narrative models in which the audience has confidence. 

We favor the conceptual approach put forth by @Forrester:1978vy. This approach states that no single test or suite of tests will verify or validate a model, and that validity should instead be thought of as a function of confidence. This view differs from that held by some modelers and laypeople. As Forrester and Senge note, “the notion of validity as equivalent to confidence conflicts with the view many seem to hold, which equates validity with absolute truth.” We share their belief that confidence in a model is built from a variety of tests that, though they cannot prove anything, together comprise a persuasive case for the quality of a model.

Confidence needs to be developed in three distinct areas:

1. That the model itself is well designed.
2. That the model is implemented correctly.
3. The conclusions drawn from the model are accurate.

In the remaining sections of this chapter we will look at each of these areas in detail. We will explore the different tests and tools that can be used to build confidence for each area.

## Model Design

Fundamentally the design of a narrative model is of utmost importance and needs to be justified to an audience^[This is different from predictive models where the results of the model are much more important than the design and the "proof is in the pudding" so to speak.] There are two primary aspects to a model’s design: its structure and the data used to parameterize the model.


### Structure

The structure of the model should mirror the structure of the system being simulated. Depending on the system complexity, the model structure may need to carry out more or less aggregation and simplification of this reality. Nevertheless, all the primitives in the model should map to reality in a way that is understandable and relatable to the audience. Thus, if there is an object in the real system that behaves as a stock, a stock should exist in the model and should mirror the object's position within the system. The same should hold true with the other primitives in the model. Each primitive would ideally be directly mappable onto a counterpart in the real system and any key component in the real system should be mappable onto primitives in the model. Furthermore, feedback loops that exist in the system should exist within the model. These feedback loops should be explicitly identifiable in the model and would ideally be called out or marked in a way that highlight their presence to an audience.

Furthermore, the model structure should include components that its audience thinks are important drivers of the system. Leaving out a factor that the audience considers to be a key driver can fatally discredit a model, irrespective of the performance or other qualities of the model. This is true even if the factor has a negligible effect. Generally speaking, it is much easier to include a factor an audience views as important than it is to later on convince the audience that the factor does not in really matter.

### Data

The more a model uses real-world data, the more confidence an audience will have in the model. Ideally, you have empirical data to justify the value of every primitive in your model. In practice, such a goal may be a pipe dream. Indeed, for a complex model, obtaining data to parameterize every aspect is usually impossible^[Leading to the clichéd conclusion of many modeling studies: “We are unable to draw strong conclusions from this modeling work. Instead, our contribution has been to show where additional data needs to be collected.”]. When faced with model primitives that do not have parameterized empirical data, you must take measures to avoid the appearance that their values were chosen without justification or that you are leading the audience to arrive at a predetermined modeling conclusion. Sensitivity testing, as discussed later, is one way to achieve this. Another is to carry out a survey of experts in the field in order to solicit a set of recommended parameter values that can then be aggregated or used to justify the ultimate parameterization.


### Peer-Review

Going through a peer-review process can be extremely useful in establishing confidence in a model. Two general types of peer-review are available. In one, the model may be incorporated into an academic journal article and submitted for publication. The article will be peer-reviewed by (generally two or three) anonymous academics in the field. These reviewers critique the article and judge its contribution to the literature, thus meriting publication. In the second type of peer-review, a committee may be assembled (hired) to review a specific model and provide conclusions and recommendations to clients.

Peer-review can be very useful in establishing the credibility of a model. A credible model is one the audience (and developer) can be more confident in, other things being equal. Conclusions drawn by an independent group of experts appear more legitimate than those of the self-interested modelers.^[When the peer review panel is hired by the client there is some conflict of interest, but the panel members should not be swayed by this.]. This can be especially useful when trying to meet some abstract standard such as that the model represents the “best available technology” or the “best available science”.

A key risk of a peer-review is, of course, that the peer-review members will find a model deficient in important respects. Good criticism can be very useful and help improve a model. However, in practice, some criticism may be nitpicking details or detrimental advice that would make the model worse if followed.

## Model Implementation

Although not as much a lightning rod as model design, significant errors can occur during implementation of a model specification. Bugs introduced into a model through programming mistakes or mistyped equations can be hard to identify later. This is a particular problem in black-box models but it is still an important point to consider for all types of models, including those presented here. Fortunately, a number of steps can be taken to ensure the model is implemented correctly.

### Primitive Constraints

There will be natural constraints for many of the primitives in the model. For instance, a stock representing the volume of water in a lake can never fall below 0. Similarly, if a variable represents the probability of an event occurring, it must be between 0 and 1.

Often these constraints are implicit without being formally specified in the model. A modeler may not think to specify water volume since its volme can never become negative. However, the existence of these constraints provides an opportunity to implement a level of automatic model checking. By specifying that a primitive can never go above or below a value (using the \a{Max Value} and \a{Min Value} properties in Insight Maker), you can create in effect a 'canary in the coal mine' to warn if something is wrong in the model. If these constraints are violated, an error message can appear,letting you know that you need to correct some aspect of your model.

This concept of constraints in models is similar to the concept of "contracts", which are supported in some programming languages. These contracts define and constrain the interaction among different parts of the program, causing an error to be generated if the contract is violated. The Eiffel programming language probably has the best support for this approach to development.

### Unit Specification

When we introduced units in the previous chapter, we showed that they could be a useful tool in constructing models. Units can also be used to ensure that equations are entered correctly. If you fully specify the units in a model, many types of equation errors will result in invalid units, which will create an immediate error. By employing units in your model you can automatically detect an entire class of errors and mistyped equations.

### Regression Tests

Tests other than those specified above can be developed. For instance, once the proper behavior of a model is determined, the modeler can create automated tests to periodically confirm the model’s performance. This is a common practice in software engineering that we would like to see more of in model development. Insight Maker itself has a suite of more than 1,000 individual regression tests that automatically test every aspect of its simulation engine.

It is important that regression testing be automated. It is not enough to examine a portion of the model, determine it is currently working correctly, and leave it at that. The problem is that future changes may break the existing functionality (i.e., a "regression", the introduction of an error or reduced quality compared to an earlier version of the model). Especially for complex models, a change in one part of the model may have an unexpected effect in another part. By implementing a set of automatic checks, you can protect your model against unintended changes and regressions.

George Oster and his class XXX

~ Exercise

You have a variable representing the total population size of a small city. What constraints might you place on this variable?

~ Answer

Minimum value: 0

Maximum value: 10,000,000 (this value is somewhat arbitrary but should be larger than the maximum size you expect this city to ever grow to)

~ End Exercise

### A Second Pair of Eyes

This is not to say that spot checks and point-in-time checks are not worthwhile. It can be very useful to have a second modeler review your models and cross-check the equations. This helps to check for simple mistakes and critique the fundamental structure and choices of the model.

The gold standard in verifying that a model is implemented correctly according to specification is to have a second modeler completely reimplement the model according to that specification. Such reimplementation should ideally occur without access to the original model’s code base to ensure that the second modeler does not simply copy bugs from the original model into the reimplementation. If the results from the two implementations concur, that is strong evidence that the model has been implemented correctly. Although potentially an expensive exercise, it will also most likely identify numerous ambiguities in the specification, which could be valuable in and of itself.

## Model Results

Assuming the design of the model and its implementation are correct, the modeler must still transfer confidence in the model’s results to its audience. This can be done in several different ways.

### Expected Results

The first way is to demonstrate that the model generates expected results for normal inputs. For instance, if you modeled a reservoir, you would expect the volume of the reservoir to decline during the summer due to evaporation if no more water flowed into it. You can also test extreme scenarios and show that they generate the expected results. For example, if your reservoir were empty, you would expect the amount of water evaporating from it to be zero. By enumerating these standard cases and showing that the model results match the expected results you can help build confidence in the model.

Often these expected results can be described in terms of a curve showing how the values of one of the stocks (or variables) in the system is expected to change over time. This curve can be taken from historical data (a reference behavior pattern), or simply drawn on a piece of paper by experts familiar with the system (an excepted behavior pattern).

### Counterintuitive Results

Another way to increase confidence in a model is to show unexpected, but justifiable, results. Imagine a model that for a certain set of inputs would create what, at first glance, appeared to be the “wrong” behavior. Some lever in the model could lead to unexpected results. When first shown these results, an audience could have low confidence in the model. If the audience was then walked through the model step by step to show how those results were correct and mirrored reality, that could well increase their confidence in the model results.

### Forecasting

Possibly the most persuasive action to convince an audience of the effectiveness of a model is to forecast the future and then show this forecast to be correct. This, of course, is difficult to do in practice for several reasons. Depending on the scale of a model, it could take several years or decades to generate data to test the model. Additionally, we mustremember that most narrative models are poor predictors and should not be used for predictive purposes solely.

### Sensitivity Testing

Sensitivity testing is a broad field that has the potential to address many questions and doubts that may arise about a model. In general, the variables and numeric configuration values in a model will never be known with complete certainty. When the results from an election poll are published, the pollsters publish not only their predictions but also the uncertainty in the prediction (e.g., "the Democratic candidate will obtain $52\% \pm 3\%$ of the vote"). Similarly, when a building is constructed, the materials used will have certain properties -- such as strength -- that again are only known up to some error or tolerance. The engineer and contractor are responsibile for ensuring that the materials are sufficient even given the uncertainty of their exact strengths.

The same occurs when modeling. The modeler will have to estimate most primitive values, along with associated errors.  Of course the error will also be propagated through the model when it is simulated, and will affect the results generated by the model. This error is one factor that can create doubt about a model and reduce an audience's level of confidence.

As a modeler, one approach to address doubt would be to try to measure all the model's variables with great accuracy. You could search the available literature, undertake a meta-analysis of current results, carry out new experiments, and survey experts to get as precise a set of parameter values as possible. If you were able to say with strong certainty that these values were so accurate and the errors so small that their effect on the results is negligible, then that would be one way of addressing the issue of uncertainty.

However, all of this is often impossible to do. When dealing with complex systems it is almost always the case that at least a couple variable values will never be known fully with certainty. No matter how much research you do or how many experiments you perform, you will never be able to pin down the precise values of these variables. How do we handle these cases?

The answer is straightforward: Rather than trying to eliminate the uncertainty, we embrace it by explicitly including it in the model. If you can then show that the results of your model do not significantly change, even given the uncertainty, you have a persuasive case for the validity of your results. Of course the results will always change when the uncertainty is introduced, but if the conclusions persist even in the face of this uncertainty, the audience will be more confident in the model and its results.

Uncertainty can be explicitly integrated into a model by replacing constant primitive values with a construct that represents the uncertainty in that value. Imagine you had a simple population model of rabbits in a cage. You want to know how many rabbits you will have after two years. However, you don't know how many rabbits there are in the cage initially. You have been told that there are probably 12 rabbits, but the true number could range anywhere from 6 to 18.

If you model your population as a single stock, what should the initial value be? A naive model could be built where you specify the initial value of the rabbit stock as 12. However, that does not incorporate the uncertainty and could be a source of criticism or doubt for the model. An alternative would be to specify that the initial value of the stock is a random number with a minimum value of 6 and a maximum value of 18. So each time you run the model you will get a different result. If you ran the model once, the initial value might be chosen to be 7 and you would obtain one result. If you ran the model again, the initial value might be 13 and you would get a different result.

If you run this stochastic model many times, you obtain a range of results. These results can be automatically aggregated to show the range of outputs. For instance, if you ran the model 100 times you could see what the maximum and minimum final populations were. This would give you a good feeling for how many rabbits you needed to prepare for after two years. In addition to the maximum and minimum you might be interested in the average of these 100 runs: the expected number of rabbits you would see. You could also plot the distribution of the final population sizes using a histogram to see how the results are distributed. This distribution would show how sensitive the outputs are to the uncertainty in the inputs: a form of sensitivity testing.

![Figure 1. Common Distributions for Sensitivity Testing with Sample Parameter Values](Distributions.png)

Four key distributions are useful for specifying the uncertainty in a variable:

Uniform Distribution
: The uniform distribution is defined by two parameters: a minimum and a maximum. Each number within these boundaries has an equal probability of being sampled. The uniform distribution is useful when you know the boundaries on the values a variable can take on, but you do not have any information on the likelihood of the different values within this region. The uniform distribution can be used in Insight Maker using the function \e{Rand(Minimum, Maximum)}, the two parameters are optional and will default to 0 and 1 if \e{Rand()} is called without them.

Triangular Distribution
: The triangular distribution is defined by three parameters: the minimum, the maximum, and the peak. Like the uniform distribution, the triangular distribution will only generate numbers between the minimum and maximum. Unlike the uniform distribution, the triangular distribution will not sample all numbers between these boundaries with equal likelihood. The value specified by the peak will have the most likelihood of being sampled, with the likelihood falling off as you move away from the peak towards either the minimum or maximum boundary. The triangular distribution is useful when you know both the most likely value for a variable and the boundaries for the values a variable can take on. The triangular distribution can be used in Insight Maker using the function \e{RandTriangular(Minimum, Maximum, Peak)}.

Normal Distribution
: The normal distribution is defined by two parameters: the mean of the distribution (generally denoted $\mu$) and the standard deviation of the distribution (generally denoted $\sigma$). The most likely value to be sampled from the normal distribution is the mean. As you move away from the mean (in either a positive or negative direction), the likelihood of a number being sampled decreases. The standard deviation controls how fast this likelihood falls as you move away from the mean. Small standard deviations result in steep declines in the likelihood, while large standard deviations result in more gradual declines. The normal distribution is useful when you do not have boundaries on the values for a variable but you know what the most likely value for the variable should be (the mean). The normal distribution can be used in Insight Maker using the function \e{RandNormal(Mean, Standard Deviation)}.

Log-normal Distribution
: The log-normal distribution is closely related to the normal distribution. In fact, the logarithm of the values samples from a normal distribution will be log-normally distributed. Like the normal distribution, the log-normal distribution is defined by two parameters: the mean and standard deviation. The log-normal distribution differs from the normal distribution in that negative values will never be generated by the log-normal distribution. Thus it is useful when you have a variable which you know cannot be negative but for which you do not have an upper bound. The log-normal distribution can be used in Insight Maker using the function \e{RandLogNormal(Mean, Standard Deviation)}. The log-normal distribution can also be used to represent other types of one-sided boundaries. For instance, the following equation could be used to represent a variable whose number was always less than 5: \e{5-RandLogNormal(2, 1)}

There are many other forms of probability distributions. Some notable ones are the Binomial Distribution (\e{RandBinomial(Count, Probability)}), the Negative Binomial Distribution (\e{RandNegativeBinomial(Successes, Probability)}), the Poisson Distribution (\e{RandPoisson(Lambda)}), the Exponential Distribution (\e{RandExp(Lambda)}) and the Gamma Distribution (\e{RandGamma(Alpha, Beta)}). These distributions can be used to address very specific modeling use cases and needs (for instance, the Poisson distribution can be used to model the number of arrivals over time), however, the four distributions described in detail above should generally be sufficient for most sensitivity testing needs.

![Figure 2. Choices in Selecting a Distribution for a Variable's Value](DistributionsChoice.png)

An important practical tip when using sensitivity testing within the System Dynamics context is to be careful about specifying random numbers within variables. The value of a variable is recalculated each time step. This means that if you have a random number function in the variable, a new random value will be chosen each time step. This can create a problem if the random value is supposed to be fixed across the course of the simulation. For instance, we may not know the birth rate coefficient for our rabbit population, but, whatever it is, we assume it is fixed over the simulation.

A simple way to handle these fixed variable values would be to replace the variables with stocks. The initial value for the stocks could be set to the random value; it would only be evaluated once at the beginning of the simulation and kept fixed thereafter. Though very workable, this approach violates the fundamental metaphors at the heart of System Dynamics. In Insight Maker, another approach is to use the \e{Fix()} function. When used with one argument, this function evaluates whatever argument is passed to it a single time, and then returns the results of that initial calculation for subsequent time steps. So instead of having the simple equation \e{Rand(0, 10)} in a variable to generate a random number between 0 and 10, you could place \e{Fix(Rand(0, 10))} in the variable. The first equation would generate a new random number each time step; the second equation will generate one random number and keep it constant throughout the simulation.

# Model
	
{"title": "Sensitivity Testing", "description": "This model helps you explore the usage of sensitivity testing in practice."}
	
Let's illustrate usage of sensitivity testing with our rabbit example. First we will construct a simple exponential growth model.

{"geometry":{"x":250,"y":330,"width":100,"height":40},"name":"Rabbits","create":"Stock"}

{"attribute":"InitialValue","target":"Rabbits","value":"12"}

{"geometry":{"x":0,"y":0,"width":100,"height":100,"sourcePoint":{"x":300,"y":110},"targetPoint":{"x":0,"y":100}},"alpha":null,"omega":"Rabbits","name":"Births","create":"Flow"}

{"geometry":{"x":400,"y":150,"width":120,"height":50},"name":"Birth Rate","create":"Variable"}

{"attribute":"Equation","target":"Birth Rate","value":"0.05"}

{"geometry":{"x":0,"y":0,"width":100,"height":100},"alpha":"Birth Rate","omega":"Births","create":"Link"}

{"attribute":"FlowRate","target":"Births","value":"[Birth Rate]*[Rabbits]"}

{"attribute":"Primitives","target":"DISPLAY","value":["Rabbits"]}

DIAGRAM

This is the basic outline for the model. We assume a fixed value of 12 rabbits and a fixed birth rate of 0.05.

RESULTS

When we simulate we obtain the same results each time.

{"attribute":"InitialValue","target":"Rabbits","value":"RandTriangular(6, 18, 12)"}

Now, let's try to incorporate uncertainty. Given that we know that there can be between 6 and 18 rabbits initially with an expected value of 12, we can use the *RandTriangular()* function to model this.

{"attribute":"value","target":"Birth Rate","value":"RandLogNormal(0.05, 0.03)"}

We also do not know the birth rate with certainty. We know, however, that the rate must be greater than 0, and let's say we can assume the expected value is 0.05. We can use the *RandLogNormal()* function to model this type of uncertainty.

RESULTS

RESULTS

RESULTS

Now, we can simulate this mode a few times and see that each time we run the simulation we get a different result.

We can now use sensitivity testing to see the range of results given this specified uncertainty. We'll do 100 runs of the model and aggregate the results to see the expected distribution.

{"cmd": "sensitivityProgress = Ext.MessageBox.show({msg:getText('Running Sensitivity Analysis...'),icon:'run-icon',width:300, closable:false, modal:true, progress:true, progressText:' '}); sensitivityController = {nRuns: 100, items: [getID(findName('Rabbits'))], bounds: [50, 80, 95, 100], showRuns: false, results: [], noYield: true}; runSensitivity(); "}

DATA

We can readily see the range of results, allowing us to make decisions incorporating our known uncertainty about parameter values. 

# End Model

~ Exercise

Create an equation to represent the uncertainty of how many red marbles there are in a bag. You know there are at least 5 red marbles and no more that 14. You do not have any other information.

~ Answer

We use a standard deviation of 4 as we lack any information on what the dispersion should be.

\e{Round(Rand(5, 15))}

~ End Exercise

~ Exercise

Create an equation to represent the uncertainty of how many red marbles there are in a bag. You know there are probably about 20 red marbles and you know there are no more than 100 marbles in the bag.

~ Answer

\e{Round(RandTriangular(0, 100, 20))}

~ End Exercise

~ Exercise

Create an equation to represent the uncertainty of how many red marbles there are in a bag. You know there are probably about 20 red marbles and you do not know how many marbles the bag can hold total.

~ Answer

\e{Round(RandLogNormal(20, 4))}

We use a standard deviation of 4 as we lack any information on what the dispersion should be.

~ End Exercise



The astute reader will notice that our discussion up to this has failed to address an important point: how do we determine the uncertainty of a variable? It is very easy to say that we do not know the precise value of a variable, but it is much more difficult to define the uncertainty of it. One case where we can precisely define uncertainty is when we take a random sample of measurements. For instance, suppose our model included the height of the average American man as a variable. We could randomly select a hundred men and measure their heights. In this case our uncertainty would be normally distributed with a mean equal to the mean of our sample of one hundred men and a standard deviation equal to the standard error of our sample of one hundred men^[Please note that this contradicts slightly what we said earlier. Clearly, a person cannot have a negative height while the normal distribution will sometimes generate negative values. So wouldn't a log-normal distribution be better than a normal distribution? Mechanistically, it would, however statistically we can show that due to the Central Limit Theorem the normal distribution does asymptotically precisely model our uncertainty. Given a large enough sample size (100 is more than enough in this case), the standard deviations for uncertainty will be so small that the chances of seeing a negative number (or even one far from the mean) are effectively none.]. For any random sample of $n$ values from a population, the same should hold true: you will be able to model your uncertainty using a normal distribution with:

$$ \mu = \frac{Value_1+Value_2+Value_3+...+Value_n}{n} $$
$$ \sigma = \sqrt{\frac{1}{n} \sum_{i=1}^n (Value_i-\mu)^2} $$

However, in most applied cases you will not be able to apply this normality assumption. Generally you will not have a nice random sample, or you might have no data at all and instead have some abstract variable for which you need to specify a value. In these cases, it is up to you to make a judgment call on the uncertainty. Choose one of the four distributions detailed above and use the expert knowledge available to you to place an estimate on the parameterization of uncertainty. One rule of thumb: it is better to overestimate uncertainty than underestimate it. It is better to err on the side of overestimating your lack of knowledge than it is to obtain undue confidence in model results due to an underestimation of uncertainty

~ Exercise

You have tested the diameter of 15 widgets coming out of a factory and obtained the following values: 2.3, 2.5, 1.9, 1.4, 2.0, 2.7, 1.9, 2.1, 2.1, 2.2, 1.6, 2.4, 2.0, 1.8, 2.6. 

Create an equation to generate a new widget size with the same distribution as the widgets arriving from the factory.

~ Answer

\e{RandNormal(2.1, 0.3625)}

~ End Exercise

~ Exercise

You have taken 12 sheep from a population and weighed the amount of wool on each sheep to obtain the following weights in kilograms: 1.005, 0.817, 0.756, 0.821, 0.9, 0.962, 0.692, 0.976, 0.721, 0.828, 0.718, 0.852. 

Create an equation to generate a random variable for how much wool you will obtain from a sheep.

~ Answer

\e{RandNormal(0.837, 0.106)}

~ End Exercise

## Confidence and Philosophy

From an evaluator’s view, the quality of a model is significantly influenced by the evaluator’s world-view and philosophical orientation (if any). Broad world-views or epistemologies^[From the Greek word "epistēmē" meaning "knowledge" or "understanding", epistemology is the branch of philosophy describing how we understand or come to know the world around us.] exist. One key divide in various epistemological theories continues to be between those based on a strong belief in a concrete true reality that our knowledge can accurately capture and those based on a belief that our knowledge is partially or wholly independent from reality.

Epistemological theories that are primarily in the first camp are those such as positivism or empiricism. Theories in the latter camp include constructivism and idealism. Constructivism is a popular theory that claims knowledge is constructed with social context and historical time. Our presentation of confidence building for narrative models in this chapter is implicitly in line with a constructivist theory of knowledge.

In our discussion of confidence building we repeatedly refer to matching the beliefs of the audience. We recommend creating simulations and behavior in our models that match an audience's expectations for the behavior of the system. This is distinct from saying that you should match the reality of true systems. Ideally, true behavior of the system and an audience's mental models of the system should be equivalent, but in practice they may well differ. Although confidence in a model will be boosted by strictly matching the mental models of an audience, a truly effective narrative model should be persuasive enough to change the mental models of an audience.

Our discussion of predictive models from the previous chapter does not fall within a constructivist world-view, as we are claiming that we can obtain objective "outside-ourselves" measures of predictive accuracy. It should go without saying that predictive models may not be accurate reflections of reality, even in their own terms. The mathematics of a predictive model may be unrelated to the true system that is being modeled, yet is may still create accurate predictions. As such, our discussion of predictive models is not really a positivist or empiricist one. Instead, this discussion would fall under the epistemological theories of pragmatism or instrumentalism. These claim that a theory or model should be assessed on how well it predicts, which may be independent of the truth of the theory itself.

~ Exercise

You are asked to evaluate a model simulating the growth of an endangered species in its habitat. What tests and demonstrations would you like to see in order to trust the model and recommend its use in practice?

~ End Exercise

~ Exercise

You are asked to evaluate a model simulating the potential adoption for a new product at your company. The basic results of the model are very encouraging for the product, suggesting it would make a significant return on investment.

What tests and demonstrations of the model would you like to see in order to recommend production based on the model results?

~ End Exercise
