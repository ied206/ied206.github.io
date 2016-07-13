---
layout: default
title: {{ site.name }}
ref: batteryline-index
lang: en
---

<section id="home">
  <h1>Notice</h1>
  <ul class="posts">
    {% assign posts=site.posts | where:"lang", page.lang %}
    {% for post in posts %}
      <li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</section>
