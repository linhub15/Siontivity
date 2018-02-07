---
layout: default
title: Blog
---

# Blog

<div class="posts">

{% for post in site.posts %}
<article class="blog-post">
<h2>
  <a href="{{ post.url }}">
    {{ post.title }}
  </a>
</h2>
<p>Posted: 
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{post.date | date: "%B %d, %Y" }}</time>
</p>
{{ post.content }}
</article>
{% endfor %}

</div>