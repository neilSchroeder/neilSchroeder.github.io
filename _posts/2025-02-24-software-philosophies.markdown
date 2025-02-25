---
layout: single
title:  "Software Philosophy - Clean Code And Philosophies of Software Design"
date:   2025-02-24
categories: jekyll update
---

## Some History and Context

I've been picking up a passion for how to write clean code for a long time now and I've decided that I'll document some of my opinions and learnings as I go here. 

For some background I've be writing code in some form for about 15 years. I started with some very simple game design stuff targeted at children and then in highschool I took a class on java that also focused on game design. And then I didn't touch code for a few years until I took a C++ class in 2016 and then started writing C++ and Python in graduate school for data analysis at CERN. And then I stopped writing C++ and focused almost entirely on Python, picking up some other languages along the way like Go, Rust, VBA, Bash, Perl, PHP, HTML, etc. After spending so many years writing code in academia I was suddenly exposed to the world of professional Python, which I think is better in many ways. 

## On Academic Vs Professional Coding:

Academia is a broad statement, and I have a lot of experience in physics, where code is used as a tool. Not as something respected in its own right. There was little to no oversight in my program of *how* code was written, only that it was doing the correct thing. But then I started to develop a larger framework and I had to learn about tools for package management, and how to write code that I could come back to and clean up. And as usual my first iterations were very bad. So I refactored, and then I'd want a new tool and realize how hard it would be to integrate, so I would refactor, and so on. This was good practice, and I don't regret that approach, but I also didn't know where to look for guidance on how to write better code. Then, as I was preparing to graduate I reached out to someone who had graduated from my program several years ealier and was now working in industry as a machine learning engineer and asked for some code review. And he very graciously reviewed my very poor code, gave me some pointers on style and approach, and set me on a better path for cleaner code by introducing me to "Clean Code" by Robert C. Martin. 

All this back story to say that in academia things like documentation, good naming, good architecture, user interface, dev interface, refactoring, package management, etc. are rarely seen as worth the time because they don't affect the results. But I argue that they do affect the results. If your code starts off clean, or you take the time to regularly improve or clean it you will be less likely to make mistakes, bugs will have a harder time hiding, and testing your software for expected behavior becomes faster and easier. That said, sometimes time is of the essence and cleaning up is time intensive. You have to strike a balance, but it must be a *balance*. Otherwise you will likely just get lost along the way, and no one will pick up and carry on your project. 

When I moved to industry I was working in research and development on niche applications of computer vision in agriculture. Things were better in terms of code-base setup but this was a startup, and "move fast, and break things" was not an explicit motto, but it sure felt like that was sometimes the approach. But I got introduced to better approaches to testing, package management, versioning, documentation, linting, pre-commit hooks, ci/cd tools, and more. Which are all great, but were still internal, and with not a ton of oversight. The company was small and a lot of information was kept in the minds of the people who had developed the code. 

## On Software Design and Refactoring

Lately my interest has shifted away from the linear thinking of software development to the lateral thinking (to use De Bono's term) of refactoring, architecture, design, and UI/UX. I'm very interested in coming back to old code, or approaching new code, and asking "what is this doing?" and "who is this written for? And how will they use it? How will they expect it to behave?". Which has produced some interesting insights in how I write code and why I write it that way. I seem to prefer to write code with a use case in mind, instead of writing some general tools and stringing them together into a useful thing. And this is almost certainly an artifact of how I learned to code and what I that code is used for. I used to write code for high volume data analysis. So often my code starts as a script, and then it gets too bulky so I split it out into a few different files with tools for various things and I try to name them, which is hard. 

A quick aside on naming: Naming is hard, and should be treated as its own skill. I've heard several approaches to it that sound good in theory, but are hard in practice. One is to give no meaningful name at all, like awopeifj(). Just mash some keys and come back to it once you have a better idea of what that function is actually going to do. The other is to give hyper-verbose names, list out everything your function does like scaleDataWithScale1AndScale2ThenSmearWithSmearing1AndSmearing2IfSet(), or some such atrocity. I don't much care for either of these approaches, but if you're going to choose one I think the second is far superior to the first. This is because the reality of the coder who care is that they care while they have time to care. And when they don't have time to care, naming and cleanliness take a back seat. If you have chosen the first approach, and then lose time to care, you'll have an awful time coming back to the code to try to figure out what it does. While in the second case, with intellisense and some fancy autocomplete, you're going to have an annoying time reading the function names, at least you'll know what they do. 

And now back to the main program. So my code is now split out into a few different functions. Soon it becomes a lot to keep track of it needs more functionality so it grows into many functions and some classes, and then it's quite large and needs at least 2 rounds of refactoring to get it into a readable place. And then I'll shift to some other project for a while and come back to it and realize that it's a still a huge mess. So I sit down to refactor it and realize that it probably just needs to be rebuilt from scratch. 

## Worse is Better vs The Right Thing

If you haven't read "The Rise of Worse is Better" by Richard P. Gabriel this section probably won't be of much interest to you, but you may get something out of it anyway.
A short summary of the two philosophies:

### Worse is Better

States that it is better to get your code to 50% right, and get it out to market to see what your user-base will want before starting to do "the right thing".
People will let you know what they like or don't and once you have a usable product that has spread like mint you can take the time to get your code to 90% of "the right thing."

This approach values simplicity of implementation over all else, and characteristics like completeness *must* be sacrificed to maintain simplicity.

### The Right Thing

States that both interface and implementation should be simple. No one characteristic of your code may override another. For example, completeness may not be overly reduced in favor of simplicity.

Gabriel has written many opinions on whether or not "Worse is Better" is in fact better, or worse. My opinion is slightly in-between, and a sharp left down another direction.
If your interface is not simple, and does not behave as the user expects, they will search for something else. So while I believe that it is valuable to go market quickly, your product will not spread like mint if it is not usable. 

I believe that features should be lost at the expense of simplicity of interface. And once you have a product that people can easily use, you can spend the time to worry about the right thing at the implementation level.

