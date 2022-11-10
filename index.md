---
title: SHRED LAB
subtitle: Social Haptics, Robotics and Education Laboratory 
layout: page
show_sidebar: false
hide_footer: false
hero_height: is-large
hero_image: /img/homepage_slideshow.gif
hero_link: /research/
hero_link_text: See Our Research

hero_link2: /current-members/
hero_link_text2: See Our Team
---

# About Us
Making haptics and robotics to improve Education and Wellbeing.

We are proud to be part of the [Robotics Institute](https://www.ri.cmu.edu/) at [Carnegie Mellon University](https://www.cmu.edu/).


{% assign posts = site.posts | where:"categories","highlights" %}
{% if posts.size > 0 %}
# Highlights
<div class="columns is-multiline">
    {% for post in posts %}
    <div class="column is-4-desktop is-6-tablet">
        {% include post-card.html %}
    </div>
    {% endfor %}
</div>
{% endif %}

