---
layout: default
title: Blog
---

<div class="container">

  <h1 class="col-md-7 mx-auto">S.Visualz Blog</h1>
  <div class="row">
  {% for post in site.posts %}
  <article class="col-lg-7 col-md-9 mx-auto">
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <p>Posted on <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{post.date | date: "%B %d, %Y" }}</time>
    </p>
    {{ post.content }}
  <hr class="post-divider" />
  </article>
  
  {% endfor %}
  </div>
</div>