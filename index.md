---
layout: page
title: Happy Day
tagline: 我是一个电话虫，布鲁布鲁布鲁.....
---
{% include JB/setup %}


## Latest article
-
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


## About me
-
Github : [github.com/xuheng](https://github.com/xuheng)

Email : 312338568@qq.com

Profession : 百度工程师，致力于前后端开发，精通php、nodejs、js、C#等

<img src="images/portrait.jpg" width="200" height="200" />
