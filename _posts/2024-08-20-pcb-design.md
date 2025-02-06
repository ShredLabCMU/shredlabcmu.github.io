---
layout: post
title: "Wireless Communication PCB Design"
date: 2024-08-14 12:00:00
categories: research
description: "Haptics for blind STEM education"
author: "SHRED Lab"
published: true
sidebar:  false
permalink: /research/pcb-design/
image: /img/posts/2024-08-20-pcb-design/IMG_8759.jpg
datatable: true
# title_image: None
link-new-tab: true
---

<!-- Blind and low vision STEM education is hindered by an inability to engage with visual representations of STEM concepts. Our sense of touch provides us with a separate, distributed channel that could allow us to convey abstract STEM concepts non-visually. We propose using robot-mediated haptics to enable blind and low vision students to engage in STEM education through hands-on, interactive learning. -->
This projects was mainly developed during the summer of 2024 as part of the [RISS program](https://riss.ri.cmu.edu/) at Carnegie Mellon University by [Olivia Sobek](/team/olivia).

Exploring the use of LoRa (Long Range) wireless communication for search-and-rescue missions. The system involves heterogeneous robot collaboration, utilizing centimeter-scale spherical robots that interface with an inflatable vine robot developed by Purdue University. These robots will work collectively to navigate and gather data in challenging environments. In this case, each spherical robot may carry specific sensors, and data will be transmitted wirelessly to a handheld receiver held by a rescue operator.

The communication system leverages LoRa technology, which operates around 900 MHz and uses chirp spread spectrum (CSS) modulation. This technique ensures robust, interference-resistant communication over ranges of up to 10-15 kilometers (6-9 miles), making it well-suited for long-range, low-power, and low-data-rate applications.

The design includes the development of three custom PCBs:
1. Receiver PCB: A handheld, wireless device equipped with an ATMEGA328 microcontroller, a LoRa module, and an OLED display to show live sensor data from the robots.
2. Transmitter 1 PCB: Mounted on a spherical robot, featuring an ATMEGA328, a LoRa module, and sensors for air quality (CCS811) and metal oxide gas detection (ENS160).
3. Transmitter 2 PCB: Also mounted on a spherical robot, incorporating an ATMEGA328, a LoRa module, a flammable gas sensor (MQS), and an I2S microphone.

The PCBs were designed to be compact, measuring 1–2 inches in each dimension, to match the scale of the robots. The initial design used 3.7-volt batteries and 3.3-volt regulators. However, after troubleshooting, Switched to 5-volt regulators and 7-volt batteries, as explained later in this report. Used Altium Designer to create schematics and layouts.

Check out our [poster](/img/posts/2024-08-20-pcb-design/rissposter.png) and [Working Paper Journal](/img/posts/2024-08-20-pcb-design/risspaper.pdf) for more information.

<figure>
    <img src="/img/posts/2024-08-20-pcb-design/2024-RISS-SOBEK-Olivia-research.jpg" />
    <!-- <img src="/img/posts/2022-05-02-haptic-blind/DeltaMech.png" /> -->
    <figcaption>
        Our PCB mounted on a spherical robot.
    </figcaption>
</figure>
<figure>
    <img src="/img/posts/2024-08-20-pcb-design/design.png" />
    <!-- <img src="/img/posts/2022-05-02-haptic-blind/DeltaMech.png" /> -->
    <figcaption>
       PCB design.
    </figcaption>
</figure>
<!-- {% youtube cMkF67OGzsE %} -->
<!-- {% youtube eGMqdWkUY98 %} -->
<!-- https://youtube.com/shorts/eGMqdWkUY98?feature=share -->



### Contact
- [Olivia Sobek](/team/olivia/) -  [osobeck@andrew.cmu.edu](mailto:osobeck@andrew.cmu.edu) 
- [Melisa Orta Martinez](/team/melisa/) - [mortamar@andrew.cmu.edu](mailto:mortamar@andrew.cmu.edu)
