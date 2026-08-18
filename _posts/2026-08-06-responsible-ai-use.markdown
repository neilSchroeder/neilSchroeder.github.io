---
layout: single
title:  "Responsible AI Use: lessons from building fast for a small team"
date:   2025-04-03
categories: software-engineering
tags:
  - sofware-engineering
  - machine-learning
  - llms
---

## takeaways: 

- AI *can* accelerate development, if you know how to use it effectively. 
- Responsible and effective AI use aren't always the same thing, but often go hand in hand. 
- You are responsible for the code you produce, handwritten or otherwise. 

## Some things I use AI for, ordered roughly from least to most responsible

### Game development: 
AI has killed the side project, so now my side projects are a little out there. I recently started building a mobile game. I am not a game developer, nor have I really ever built anything in a modern gaming language. 
I picked Godot4 as my language of choice because I know some other games that use it, and I like the syntax. It's easy to read. I'm vibing my way through the entire process. 
I have no idea what good game development looks like. I'm not sure if I should be using test driven development, or just building based on mechanics of the game, or taking detours to flesh out ideas now versus getting an mvp out.
It's pretty confusing, but I'm having fun. And I know broadly how to code, and what coding project management feels like. So, it's not a total disaster, but I haven't really looked at any of the code other than to just get a sense of what it actually looks like. 

### AWS cloud engineering: 

Part of my responsibilities as the tech lead at my small company is being our cloud engineer. I know some basics of how to use the aws cli but the docs are obscure and AWS products span such a huge space. And a lot of them overlap. So I never know which one is "right" for what I'm doing, but I do know how to get the AI to do what I want in ways that are cost and implementation effective. So far there have only been a couple times this has gone awry and it's usually in the realm of automation. Setting up things to run on a schedule is tricky for a person, so getting a machine to "do it right" is almost impossible. Slightly confusing context, improperly specified values, assumed defaults, or hidden settings in a terminal command can all lead to sudden changes in functionality that - because it's AWS - can have some wildly expensive outcomes. For example, I set up a Glue job to process some log files once a month. Tested the bejeezus out of it. When it kicked off automatically it ran over every month ever recorded and produce 20 bajillion log files through CloudMetrics because of a silent setting on the job that meant I racked up a $3500 bill before I knew what had happened. 

On the other end of the spectrum I've had a lot of success developing a pipeline that scrapes some weather station data, runs QA/QC, and merges it into an existing dataset. That pipeline was built entirely with Github Copilot and whatever model was cheap, unless I needed to do some planning -- then I splurge and go for Claude. And that was really the key difference between these two projects. One was a side-quest that came out pretty poorly because I didn't have a great sense of what I was setting out to accomplish, the other was a really well-defined project with clear acceptance criteria and long term horizing planning using a dedicated planning agent and a ticket system called `beads`. 

### Scientific Computation Exploration: 

I also do a lot of prototyping for analyses and expansions to the open source software I maintain. I get a scientist who says "wouldn't it be cool if we could ...", and I take it upon myself to make their interest a reality. For this kind of thing it's quite fast to use a reasonably powerful model, give it some research directives on methodology, and then just tell it to build a Jupyter notebook I can share with one of our scientists. This kind of work sparks joy for a lot of the folks I work with and gives them even more ideas on what we could do with the thing now that it's right there in front of them. Sometimes it goes places, sometimes it doesn't. And every time I check the code meticulously for the correct order of operations, correct function calls, runability, etc. On top of that Jupyter notebooks for data analysis is pretty safe. I rarely need to ask anyone to install new software, and never bleeding edge software. And it's interruptable in a way that can't cause out of control price issues. About as responsible as it can be. 

## Some of the lessons

There's so much out there on how to work with AI and how to vibe code, and a lot of it's garbage. This too may be garbage for you -- imagine me shrugging -- but that's up to you to decide. The following ideas have worked really well for me. 

### Structure of Process

Take the extra time to lay out a good process. Go through some requirements gathering, write your ideas down, set some acceptance criteria; just have a vision, and a pretty fully established one at that. Starting the whole thing before you have a solid vision is rough, and sometimes you don't have that luxury. Do your best anyway. Your final product will come out much better. 

Be your agent's PM: Scope out your work, tell it what's not in scope, nudge it down research paths, require it to go look for other examples first, have it bring things back to you for consideration. I personally find that when I don't do this, it comes back too soon with an incomplete project, doesn't use it's context or resources effectively, and doesn't encourage you to flex your creative muscles at all. AI doesn't have to be a "turn your brain off" type of tool, but so many people treat it that way because it's easier to do than being engaged. And in reality that might be good enough for a lot of folks. But it's not good enough for me, so I do try to continue to absorb new things and think about the process. The "how am I doing the thing" and "why did it work well when I did this, but not when I did this". 

### Lean on Skills

I know a lot of the latest and greatest models (Fable, Kimi K3, Sol, etc.) *require* this less and less, but so far it's still extremely effective. Pre-defined skills are good, and can get you well on your way. If you're unfamiliar with Matt Pocock and the skills he's developing for accellerating engineering you're missing out. Grilling, wayfinding, researching, and many, many more that help your agent understand the structure of the build process. Self-made skills are even better. No one knows your domain like you do, and if you find yourself struggling with an agent to get something right (happens to me all the time). Start asking it to build skills for that task / tool with the knowledge in it's context now. And once you've got one already keep refining it. Eventually even your niche domain tools and processes will have skills that make it so you don't struggle with the same thing over and over again. 

### When in Doubt: /clear

If you find yourself wrestling with an agent that seems to have gotten dumber, stop wrestling with it and just clear it's context window. Jump to a new chat, use a handoff, use `/clear` -- whatever you have to get a clean slate. These days the magic number seems to be ~100k tokens. Over that and performance degrades significantly

## Looking ahead

I heard AI for coding recently described as a way to frame a house faster. You don't have to spend time making 2-by-4's or even nailing them together. You get to spend more time planning what rooms go where and how to move around the house and what goes in it. It's a great anecdote. I don't spend much time worrying about implementation anymore. Instead I'm focused on how my code fits together, or how it functions, or what it produces. And that's only going to continue to be the case, and it may get amplified even further. Though, I admit I think we're approaching the limit of what AI copilots can do without some kind of wild breakthrough. Who knows though. 

In the mean time, "move fast and break things" and "worse is better" are more relevant today than ever, just don't forget to use your head. Responsibly breaking things and putting them back together is an art, the alternative is just destruction.