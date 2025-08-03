---
layout: archive
title: "Publications - Xun Wang"
permalink: /publications/
author_profile: true
excerpt: "Research publications by Xun Wang on trustworthy machine learning."
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
