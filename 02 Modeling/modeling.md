# Chapter 2 - Dynamic Lego Blocks #

----------

### Notes to Reviewers ###

This chapter is intended to provide the reader with enough experience with the basic elements of the modeling environment such that they can construct simple balancing and reinforcing loops. Supporting aspects of the environment necessary to run these models will also be described. This will build on the elements presented in the previous chapters and is intended to be an introduction, not an exhaustive dissertation on modeling and simulation theory. The intent is to encourage the reader to develop and play with models, not chase them from the room screaming in fear never to return again.

----------

## The Blank Canvas ##

Some might look on the blank canvas and hesitate not knowing where to start. You will be far better off if you look on the blank canvas as a gift of freedom which allows you to start anywhere. You will come to understand that if you approach modeling appropriately it won't matter where you start, you'll still end up with a meaningful model.

In the next few segments you will learn how to create on this canvas the two basic structures from which all models are constructed.

Notice in Figure 1 that similar tools are grouped on the \u{Toolbar} in Figure 1. Also only a portion of the \u{Toolbar} is displayed though it's enough for what will be covered in this section.

![Figure 1. Blank Canvas](./02-im-5291.png)

[** Figure 1. Blank Canvas](http://insightmaker.com/insight/5291)

To use a tool you click on it on the \u{Toolbar} to select it, then you click on the canvas where you want it located, or used. For each tool there are a set of allowed uses. Once you place the item on the canvas it is named for what it is with that name selected so you can type in the name you want. Labels can be anything except braces "{}", brackets "\[\]", parentheses \(\), and quotes '. If the label is no selected you can double-click on it to select the label and then enter a new one, or you can enter the label in the \u{Configuration Panel} though we'll address that in a bit more detail later.

----------

Exercise 2-1.

Practice placing \p{Stock} and \p{Variable} \p{Primitives} on the canvas and naming them. You can remove a \p{Primitive} by selecting it and pressing the \u{Delete} key or clicking the \u{Delete} button in the \u{Actions} section of the \u{Toolbar}.

----------

\p{Stocks} and \p{Variables} are connected using \p{Flows} and \p{Links} and there are some very explicit rules associated with these connections. The allowed connections are depicted in Figure 2.

<IFRAME SRC="http://InsightMaker.com/insight/5275/embed?topBar=0&sideBar=0&zoom=0" TITLE="Figure 2. Valid Primitive Connections" width=680 height=400></IFRAME>

[** Figure 2. Valid Primitive Connections](http://insightmaker.com/insight/5275)
