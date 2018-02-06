---
layout: post
title: Blog
---

# Make the most recent blog posts appear here with a bar on the side that to view more

[jekyll-organization]: https://github.com/jekyll

{% for post in site.posts %}
  <article class="blog-post">
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.content }}
  </article>
{% endfor %}