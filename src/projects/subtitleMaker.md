---
title: "Subtitle Maker"
description: "Desktop C++ ImGui Overlay slide generation tool"
hasGithub: false
githubLink: "https://github.com/SlunnyCN"
hasExternal: false
externalLink: "https://example.com/"
associatedDate: 2026-06-20
image: "SSM.png"
---

# Subtitle Maker
A desktop tool used to create subtitle overlay slides for Japanese content. 

This tool was developed to improve the workflow of a client who had been manually doing the following: 

- **Translate** the Japanese content into English
- Manually **Convert** the Japanese into Romaji  
- **Copy paste** these lines in a Google Doc
- Use GIMP to **place each line** upon a transparent background
- Make sure every line is **centered, formatted** correctly, etc. 
- **Repeat** for all lines

My vision was to create a tool that simplified this process to simply:

- **Translate** the Japanese content into English
- **Choose** the text styles you want with the user interface
- **Run** the program

The tool: 
- Converts the Japanese input into Romaji accounting for the correct reading and parts of speech (using NLP)
- Maps each Japanese, Romaji, and English line automatically
- Uses a graphics engine to generate subtitle slides for every line instantly

### The Stack
- ImGUI, C++, SDL, OpenGL
- kakasi & mecab (Romanization & NLP)
- imagemagick (C++ implementation, for graphics)

The tool can also generate previews, customize colours and font size for all three lines, and many options to style the text.
Additional features added past the initial release includes a Project system to manage and save each one seperately, auto saving text and image buffers, user configs to adjust behaviour for romaji converter and other parts of the program, etc.

A build of this tool will not be availible for download as it was made exclusively for my client. 