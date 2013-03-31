# Models and Truth

> All models are wrong, but some are useful -- George E.P. Box

In discussing the relationship between models and truth it is useful to first take a step back and talk in general about the different types of models. Modeling is wide a ranging field and their are many distinctions that modelers and mathematicians make when discussing models. Some distinctions -- such as Bayesian versus Frequentist statistical models^[Briefly, this debate refers to two divides within the statistical community that hinge on how probability is interpreted. A Frequentist claims that probability is dependent on the long term sequence of outcomes. Bayesian's take probability as a subjective degree of belief. Frequentist statistics are what are generally taught in introductory statistic courses and receive the most use. ]-- have been the subject of century's old philosophical arguments between mathematicians which continue to this very day.

These arguments and distinctions are of little interest to us -- we will present our own classification scheme that once we complete it will really clarify the core dichotomy that is at the heart of modeling -- but it can be useful to briefly discuss them in order to obtain a deeper understanding of the choices we make when we develop the construction of a model.

### Deterministic versus Stochastic Models

There are two views of the world. One view says the fate of the universe is governed by strict predictable laws. The universe is like a giant machine and given its current state, its future states through the rest of time are predetermined. Another view, is that the universe is governed by chance and randomness. Random quantum mechanical fluctuations pile up and amplify each other leading to an infinite range of diverging possibilities. Which is the truth? We certainly do not know and it is possible that this will be one of the questions that physicists will never cease exploring. Albert Einstein had a particular view though. He was a strong partisan in favor of the deterministic view, famously remarking that "God doesn't play dice with the world."

When creating a model of a process, we must make a similar choice about chance. Do we build are model in deterministic way such that each time we run it we get the same results? Or do we conversely incorporate elements of uncertainty so that each time it is run we may obtain a different trajectory of outcomes?

### Mechanistic versus Statistical Models

When beginning a model of a system, there are many questions that you should ask yourself. Two of them are:

1. Do I know (or have a hypothesis of) the mechanisms that drive the system?
2. Do I have data on the behavior of the system?

If the first question is answered in the affirmative, then you can build a mechanistic model that is replicates your understanding (or hypothesis of) the true system. If the second question is answered in the affirmative, you can use statistical algorithms such as linear regression to create a model of the system based purely on the data.

If neither question is answered affirmatively, well there isn't much of anything you can build.

### Aggregated versus Disaggregated

When building a model, the question of scale becomes very important. Imagine we are concerned about the affects of Global Climate Change and whether there will be enough water resources in the future assuming a warming climate. At what resolution do we build the model?

* At the most aggregate we could simply estimate total World-wide water demands and supplies into the future.
* Maybe that is too coarse; clearly having excess water in Norway has little impact on the situation in Egypt. We could instead create a finer resolution model that separately looked at the water demand and consumption in each country.
* Maybe that is still too coarse, maybe we should reduce our model to look at a specific cities and population clusters within countries.
* At the extreme disaggregated level, we might even want to model individual people: all 7 billion of them.

Clearly, there is no simple answer to this question and the best choice is highly context sensitive and depends on the needs of the specific model and application.

## A Functional Classification of Models

The three scales presented above can be used to classify models. We can even use them to classify the models we have discussed in this book. Most of these models would be classified as deterministic (random chance is generally not explicit incorporated in the models), mechanistic (we generally assume mechanisms rather than estimating relationships from data), and aggregated (the agent based models are an exception to this).

Outside of modelers, however, these choices scales are of little importance. Let's take off our modeler hats for a moment, and instead look at modeling as a client. In this case, we would hire a modeler to build a model to fulfill some specific purpose. The choices the modeler make (aggregated versus disaggregated, stochastic versus deterministic, what software they use, etc.) are all really secondary to them fulfilling that purpose. Let's look back at Box's quote at the beginning of this chapter. We know all models are wrong, what we should really care about is their functionality: how useful they are.

So instead of using a scale based method to classify models, we can use a functional one based on the purpose or desired usage of a model. There are three main purposes for models: prediction, inference and narrative.

![Figure 1. Three Usages of Models](Usages.png)

Prediction
: Models used for inference are the most straightforward. They attempt to forecast some outcome given information about variables related in some way to that outcome. A weather forecast is an example of a model being used prediction. When you apply for a credit card at a bank, they run a predictive model to determine your risk of default. When you apply for life-insurance, similarly, the company has an actuarial model to predict how much they should charge you for a given payout.

Inference
: Models used for inference are the most common in academic research. Often, academic research question boil down to the simple template: "Does *X* affect *Y*?" These are inferential type questions. So an academic may make a hypothesis, for instance; "The wealthier a high-school student's family is, the higher the student's test scores will be." They may then build a model to support or refute this hypothesis and their response will generally be phrased in terms of a *p*-value indicating the significance of the evidence in support or against the hypothesis.

Narrative
: Models are often used to tell a story. When the Obama administration wanted to persuade law makers and the public to support there proposed stimulus, they famously published the graph shown in Figure 2. A lot of complex modeling and mathematics went into constructing this figure, however its sole purpose is to tell a story: things were bad, but the stimulus would make them less bad. We will return to this figure later on.

![Figure 2. Obama's Team's Predictions for the Effects of the Stimulus](Stimulus.png)

All models can be classified in terms of these three primary usages and it can be useful to discuss modeling projects in terms of them. There is an even simpler classification system we can use, however, that once we complete it will really clarify the core dichotomy that is at the heart of modeling.

To get at this reduced classification scheme, let's talk for a moment about the process of inference. Take our example of finding whether wealth results in increased tests scores in high-school. We phrased this hypothesis in a specific way: that increased wealth will always increase test scores. This was an illustrative statement, however, that actually differs from what is often done in practice. In general, academic research simply asks the question "Does *X* affect *Y*?" Using this terminology, we would ask the question "Does wealth affect tests scores?"

The gold-standard to answering questions like this is the controlled experiment. For our wealth case, we could take a sample of a thousand families from a school district. When the families' children enter high-school we randomly select have to be in a "poor" category and the other half to be in a "rich" category. Families in the rich category are given grants of $500,000 a year to spend how they wish while the parents in the poor category are fired from their jobs and their savings are frozen for the duration of the experiment. Once the students have graduated from high-school, we simply compare the average scores for the students in the poor and rich categories.

This is the ideal approach to answering inferential questions like these. For many types of questions controlled experiments can be done (for instance does treatment with a novel drug help control a disease), but in general complex social questions are simply impossible to answer with them. We can construct the procedure like we have just done as a thought experiment, but it would be impossible (and deeply unethical) to implement in society.

Given this inability to do controlled experiments in many cases, how do we approach inferential questions? The standard way is to collect data and then construct a model and measure the statistical significance of the hypothesis given the data. The model of choice is the linear model:

$$Y = \beta_0 + \beta_1 \times X_1 + \beta_2 \times X_2 ... $$

For the education example we could simple collect data on a number of students. We could measure their families' wealth ($X_1$ in the equation above) and on their test scores ($Y$). We could then run the linear regression to determine the coefficient values ($\beta_0$ -- the intercept -- and $\beta_1$ -- the effect of wealth on test scores). If we thought their were other factors that affected test scores, we could measure them and include them as addition $X$'s in the regression.

In addition to obtaining the coefficients, we also obtain as an output from the regression the statistical significances or "$p$ values" of these coefficients. Although $p$ values are commonly used in statistics, they are ubiquitously misunderstood^[These misunderstandings are not only made by on-the-ground practitioners and analysts, they are frequently shared, and propagated, by university-level statistics instructors; see, for instance, @Haller:2002vo.] so it would be useful to briefly review them.

In short a $p$ value measures the probability of seeing the data (or more extreme data) assuming the null hypothesis is true. When looking at the significance of coefficients, this means the probability of seeing that magnitude of coefficient (or one even further from 0), given that the (unknown) truth is that the coefficient actually has a value of 0. In other words, it is the probability of seeing the non-zero value, assuming that the true value is in fact 0. Generally probabilities of 10%, 5% or 1% are taken as indicating statistical significance. Basically meaning that the coefficient value is so far from 0, and the probability of this occurring by chance so low, that we can accept the fact that the coefficient is not 0.

$p$ values do not represent the following commonly used interpretations:

* The probability that the null hypothesis is true (that the coefficient is 0)
* One minus the probability that the alternative hypothesis is true (that the coefficient is not 0)
* Any sort of "proof" that the null or alternative hypothesis is correct or incorrect
* The probability that you are making the correct or incorrect decision if you accept or reject the null or alternative hypothesis

Using the $p$ we can do inference by using the statistical significance of the coefficients. If the probability of the $\beta_1$ (the coefficient for wealth) occurring do to chance (given it is false in reality) is less than, say 5%, we can say with reasonable strength that wealth does in fact affect test scores. This is the standard approach taken to model-based inference.

However, let's stop for a second and consider what we have done here. In carrying out these logical steps, we had to make one very large assumption: that the relationship between test scores and wealth is linear. Our equation shown above assumes that for every increase in one unit of wealth ($X_1$), test scores ($Y$) will increase on average by the amount of the coefficient ($\beta_1$). What if this is not in fact true? For instance, we could easily imagine the case where wealth initially helped test scores by providing students more resources and opportunity to learn. However, after a certain point, wealth could theoretically negatively impact scores as very wealthy students might lack the pressure or motivation to score highly.

If we thought this was the case we could change are regression formula to contain quadratic terms which could replicate this type of relationship:

$$ Y = \beta_0 + \beta_1 \times X_1 + \beta_2 \times X_1^2 $$

If our assumptions about the quadratic relationship are correct, then these models will yield accurate inferences. However, if they are wrong, are inferences will also be wrong.

What are we really doing when we assume regression forms like this? Now it might not be immediately obvious, but what we really doing is telling a story. Using our first equation, we are telling the story that as wealth increases, test scores will always increase. Bill Gate's children will preform amazingly well! Using the second equation we are telling a different story: that as wealth increases test scores initially do as well but after a certain point increased wealth will hurt test scores. The picture isn't so rosy for Bill Gates's family this time around!

And so we arrive at a very interesting conclusion. By telling these stories, our inferences are in fact based on narrative modeling approaches. Yes, these inferences are based on numerous calculations and very advanced theoretical underpinnings. But ultimately what governs our conclusions and inferences are the stories or narratives we tell about them. These are choices that we as the story teller make, not any objective truth or reality.

Is there an alternative approach to inference? Can we accomplish it without using narrative techniques? The answer is yes. An alternative prediction based approach to inference is available. In which rather than calculating statistical significances as a function of an assumed model, we calculate them as a function of the simple question: "Does knowing *X* help us to predict *Y*?" If the answer to this question is true, then we can say that there is a relationship between *X* and *Y*.

The techniques to accomplish prediction-based inference are much newer as they rely upon ample computing power to work. One of them is the A3 method (XXX Citation) which uses resampling based techniques to obtain estimates of predictive accuracy and statistical significance. What they do however is remove model form question from us and instead focus purely on predictive accuracy to determine whether a variable is significant.

Thus we can see that inferential techniques can be split into two categories: narrative modeling methods and predictive modeling methods. So from our original three categories of model purposes -- prediction, inference, and narrative -- we are left with just two fundamental types of modeling: predictive modeling and narrative modeling.

Narrative versus Predictive

Measuring model error

In practice many modeling projects will try to fulfill multiple usages. For instance, it is common to for clients of modelers to want to build a model for prediction 

## References
