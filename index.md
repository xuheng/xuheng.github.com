---
layout: page
title: Ed blog - enjoy my life
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
Name : Edwan 

Github : [github.com/xuheng](https://github.com/xuheng)

Email : 312338568@qq.com

Profession : 百度工程师，主要从事移动端web app前后端开发，后端主要为nodejs php

Interest : 骑车、旅行、乐器、做饭...

Dream : 去日本踩把动漫的点挨着踩一踩...

<img src="images/portrait.jpg" width="260" height="260" />
