---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Website Dev With Astro'
pubDate: 2025-01-31
description: 'General chronicle of what I have done to this website'
author: Alex Jong
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs."
tags: ["astro", "blogging"]
---
This website is built in Astro, and this is a general chronicle of everything I've done to the website so far. 

I settled on Astro because it seemed fairly intuitive to use, and promised fast page load times. I also thought that Astro would be able to grow with my skills as a developer- I could get a basic, decent-looking website, and update it periodically as I learned more about web development.

The first major issue I ran into was with page routing. My GitHub Pages deployed to a path, but Astro was not generating pages for that path. I attempted to specify the path in Astro's config file, but that didn't solve the problem either. The solution was actually to fix the page links in the navigation bar to include the entire path.

The second major issue is that I was not entirely satisfied with the look of my website. I had originally picked poorly contrasting colors for my website, and wasn't happy with the lack of consistency in corner rounding. I'm currently in the process of using TailwindCSS to consistently theme the website, and developing a consistent set of design elements for use on the website.