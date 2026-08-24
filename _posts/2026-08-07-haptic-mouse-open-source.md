---
layout: post
title: "Design and Evaluation of an Open-Source Haptic Mouse for Geometry Learning"
date: 2026-08-07 12:00:00
categories: open-source
description: "Haptics for blind STEM education"
author: "SHRED Lab"
published: true
sidebar: false
permalink: /open-source/haptic-mouse/
image: /img/posts/2026-08-07-haptic-mouse-opensource/Haptic_Prototype.jpeg
datatable: true
link-new-tab: true
---

The Haptic Mouse is an open-source, three-degree-of-freedom (3-DOF) haptic interface designed for low-cost fabrication and active exploration of 2-D digital graphics by blind and visually impaired (BVI) students. Developed to overcome barriers in STEM education, this device specifically aids in geometry instruction.

Through a custom 3D-printed delta parallel mechanism, the mouse renders contours, reference points, and enclosed regions using multimodal haptic cues, such as stiffness changes and directional oscillations. It also incorporates auditory feedback (white noise) to support spatial reorientation when the user's cursor moves away from a target.

A dedicated Graphical User Interface (GUI) allows instructors to configure shapes (such as rectangles, triangles, and circles), modify geometric parameters in real time, and monitor a student's exploration to provide timely guidance. 

<figure>
    <img src="/img/posts/2026-08-07-haptic-mouse-opensource/Haptic_Figure1.jpeg" />
    <figcaption>
    The Haptic Mouse is an open-source, 3D-printed haptic interface designed for geometry instruction. Users move the device to control an on screen cursor via an attached tracking pen; a delta mechanism provides haptic cues, and a GUI presents the geometrical elements and records and displays users interactions so instructors can provide feedback.
    </figcaption>
</figure>
<figure>
    <img src="/img/posts/2026-08-07-haptic-mouse-opensource/Haptic_Evolution.jpeg" />
    <figcaption>
    The delta mechanism design incorporates features that minimize the number of hardware components. (A) The motor is securely attached to the base through a cantilever snap fit. (B) Cylindrical snap fits secure the ball bearings within each base leg. (C) Similar cylindrical snap fits are used to connect the end-effector to the flexural parallelogram linkage arms. (D) The base legs have a clearance-fit joint to the flexural legs which connect to each other with a press-fit joint.
    </figcaption>
</figure>


### Open-Source Files (BOM and STLs)
The Haptic Mouse is open-source. The complete Bill of Materials (BOM) and the custom part files (STLs) are available for download below.

**Bill of Materials**

- [Haptic Mouse Component BOM (PDF)](/assets/open-source/haptic-mouse/Haptic_Mouse_BOM.pdf)

**3D-printed parts (STL)**

| Part | File |
| --- | --- |
| Base | [base_V3.STL](/assets/open-source/haptic-mouse/stl/base_V3.STL) |
| Base leg (×3) | [baseleg_V2.STL](/assets/open-source/haptic-mouse/stl/baseleg_V2.STL) |
| Flexure half A (×3) | [flexure_half_V2.STL](/assets/open-source/haptic-mouse/stl/flexure_half_V2.STL) |
| Flexure half B (×3) | [flexure_half_V2_2.STL](/assets/open-source/haptic-mouse/stl/flexure_half_V2_2.STL) |
| End-effector top | [top.STL](/assets/open-source/haptic-mouse/stl/top.STL) |
| Mouse bottom assembly | [Mouse_Bottom_assembly.STL](/assets/open-source/haptic-mouse/stl/Mouse_Bottom_assembly.STL) |
| Mouse top | [Mouse_Top.STL](/assets/open-source/haptic-mouse/stl/Mouse_Top.STL) |
| Tracking pen case | [Pen_case.STL](/assets/open-source/haptic-mouse/stl/Pen_case.STL) |

### Contact
- [Woongseok (Michael) Han](/team/michael/) [woongseh@andrew.cmu.edu](mailto:woongseh@andrew.cmu.edu) 
- [Melisa Orta Martinez](/team/melisa/) - [mortamar@andrew.cmu.edu](mailto:mortamar@andrew.cmu.edu)
