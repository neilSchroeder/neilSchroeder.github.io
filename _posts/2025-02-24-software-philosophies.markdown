---
layout: single
title:  "Software Philosophy - Clean Code And Philosophies of Software Design"
date:   2024-08-29
categories: jekyll update
---



I've been picking up a passion for how to write clean code for a long time now and I've decided that I'll document some of my opinions and learnings as I go here. 

For some background I've be writing code in some form for about 15 years. I started with some very simple game design stuff targeted at children and then in highschool I took a class on java that also focused on game design. And then I didn't touch code for a few years until I took a C++ class in 2016 and then started writing C++ and Python in graduate school for data analysis at CERN. And then I stopped writing C++ and focused almost entirely on Python, picking up some other languages along the way like Go, Rust, VBA, Bash, Perl, PHP, HTML, etc. After spending so many years writing code in academia I was suddenly exposed to the world of professional Python, which I think is better in many ways. 

## On Academic Vs Professional Coding:

Academia is a broad statement, and I have a lot of experience in physics, where code is used as a tool. Not as something respected in its own right. There was little to no oversight in my program of *how* code was written, only that it was doing the correct thing. But then I started to develop a larger framework and I had to learn about tools for package management, and how to write code that I could come back to and clean up. And as usual my first iterations were very bad. So I refactored, and then I'd want a new tool and realize how hard it would be to integrate, so I would refactor, and so on. This was good practice, and I don't regret that approach, but I also didn't know where to look for guidance on how to write better code. Then, as I was preparing to graduate I reached out to someone who had graduated from my program several years ealier and was now working in industry as a machine learning engineer and asked for some code review. And he very graciously reviewed my very poor code, gave me some pointers on style and approach, and set me on a better path for cleaner code by introducing me to "Clean Code" by Robert C. Martin. 

All this back story to say that in academia things like documentation, good naming, good architecture, user interface, dev interface, refactoring, package management, etc. are rarely seen as worth the time because they don't affect the results. But I argue that they do affect the results. If your code starts off clean, or you take the time to regularly improve or clean it you will be less likely to make mistakes, bugs will have a harder time hiding, and testing your software for expected behavior becomes faster and easier. That said, sometimes time is of the essence and cleaning up is time intensive. You have to strike a balance, but it must be a *balance*. Otherwise you will likely just get lost along the way, and no one will pick up and carry on your project. 

When I moved to industry I was working in research and development on niche applications of computer vision in agriculture. 