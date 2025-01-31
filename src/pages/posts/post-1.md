---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Wireless CTF'
pubDate: 2023-12-11
description: 'A writeup of one of the challenges from the Wireless CTF at CackalackyCon'
author: Alex Jong
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["CTF", "wireless"]
---

Back in 2024, I tried my hand at a wireless CTF. This is a prettyfied version of my writeup from one of the challenges. 

This challenge required obtaining the frequency, [BSSID](https://en.wikipedia.org/wiki/Service_set_(802.11_network)) , and password of the target wireless network.
### Setup
There were some interesting configuration issues when I tried to use my laptop WiFi, so I ended up passing through an external wireless card to my Kali VM.
### Step 1
```iw list``` produces a list of additional information on nearby wireless networks, which I used to find the frequency of the target wireless network.
### Step 2
I used ```airmon-ng``` and ```airodump-ng``` to listen on wireless traffic with my external wireless card. This revealed that the target wireless network uses WPA, as well as the channel and BSSID of the target wireless network. Here, I accidentally copy-pasted some data before pausing airodump, which led to it still running in the background but not displaying data in my terminal. I fixed this issue by unplugging and replugging my external wireless card.
### Step 3
Since the target network uses WPA, I next used ```airodump``` to listen for a handshake. Using the channel and BSSID information obtained previously, I created a packet capture, filtering for traffic on that specific network.
### Step 4
After obtaining the handshake, I used ```aircrack``` and a large list of passwords provided with the challenge to crack the handshake.