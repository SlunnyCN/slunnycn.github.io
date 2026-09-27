---
title: "Scaling Skylines"
description: "Incremental GMTK Gamejam game in Godot"
hasGithub: false
githubLink: "https://github.com/SlunnyCN"
hasExternal: true
externalLink: "https://k0hacuu.itch.io/scaling-skylines"
associatedDate: 2024-08-20
image: "SS.png"
---

# Scaling Skylines
One of my first projects in Godot, an incremental game about building towers as high as you can, with roguelike elements. 
The game is availible on my [itch](https://k0hacuu.itch.io/scaling-skylines).

### Context

As one of my first actual, on time submissions to a game jam, I was pretty proud of this at the time. 

I often find that it is difficult to design a game for a game jam. When the games I enjoy playing the most (4X, Sandbox, Strategy) have so many complex systems it is almost inevitable my scope ends up too ambitious. However, this jam happened at a time where I was able to focus all my attention on it for the entire duration of the jam. With some convincing from friends, I settled with a simpler idea. 

### Development

I started this project with object oriented patterns that were familiar with me. Before discovering features that I have come to love more than anything. I fell in love with the **Signals** and **Resources** systems in Godot, with signals offering a event driven framework and Resources being such a robust container.

Let me be clear. My first use of signals was sloppy and involved events such as `signal.shouldUpdateInventoryIcons`. I have since improved my producers and consumers a lot, instead of just using signals as function calls. 

Similarily with resources, I had no idea what should have been a resource or not. I remember seeing three nodes that were similar, and went: "Hey I should define these as a resource and load them dynamically! That would be cool!" They were my main menu navigation buttons. Today, I still love resources. However, I reach for them when they would be the most powerful. In scaling skylines I didn't even take advantage of the Serialization or the huge upsides of being reference counted. I had simply overused them as fancy nodes/containers. 