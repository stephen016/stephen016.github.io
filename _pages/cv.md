---
layout: archive
title: "CV - Xun Wang"
permalink: /cv/
author_profile: true
excerpt: "Curriculum Vitae of Xun Wang, third-year Ph.D. student at CISPA and TUM specializing in trustworthy and efficient machine learning."
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **Ph.D. Student in Computer Science**, CISPA & Technical University of Munich, 2023–present
  * Advisor: Michael Backes; co-advisor: Franziska Boenisch; mentor: Adam Dziedzic
* **M.S.**, Technical University of Munich, 2023
  * Graduated with High Distinction
  * Thesis: Architecture-Agnostic Neural Network Pruning


<!-- Work experience
======
* Spring 2024: Academic Pages Collaborator
  * Github University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3 -->

Publications
======
{% assign ordered_publications = site.publications | sort: "display_order" %}
  <ul>{% for post in ordered_publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul> -->
  
<!-- Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->
