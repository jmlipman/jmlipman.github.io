---
title: "Popular Machine Learning material on Twitter"
collection: misc
permalink: /misc/popularML
---
<link rel="stylesheet" media="screen and (min-device-width: 501px)" href="{{ base_path }}/assets/css/popular_ML_largeScreen.css" />
<link rel="stylesheet" media="screen and (max-width: 500px)" href="{{ base_path }}/assets/css/popular_ML_smallScreen.css" />
<link href="{{ base_path }}/assets/css/popular_ML.css" rel="stylesheet">
<script language="javascript" src="{{ base_path }}/assets/js/jquery.js"></script>
<script language="javascript" src="{{ base_path }}/assets/js/popular_ML.js"></script>



<div class="cover-container d-flex p-4 mx-auto flex-column">
    <main role="main" class="inner cover text-center">
    <h1 class="cover-heading"><!--Popular Machine Learning material on Twitter.--></h1>
    <div class="col-sm">
    <p class="lead description">
        <b>This page displays the content of "hot" tweets related to machine learning and, especially, deep learning.</b>
        For now this page is just an experiment, and there are several things that may be changed such as the order in which the tweets are displayed and
        the categories in which tweets are divided (currently: ArXiv, Twitter, Medium, Github).
        This page works in the following way: a bot (<a href="https://twitter.com/name" target="_blank">name</a>) constantly reads its Timeline trying to find tweets with URLs.
        Then, it categorizes these URLs and it assigns them importance based on their favs and RTs.
        <b>The goal of this project</b> is to help researchers (especially those who do not have Twitter account) to see what other people find interesting and share on Twitter.
        There is a TODO list at the end of this page. If you have any comment or suggestion, tweet me at <a href="https://twitter.com/jmlipman" target="_blank">@jmlipman</a>.
        Also, follow the bot for updates!
        </p>
    </div>
    </main>
</div>
        
<div class="col-12 text-center">
    <h4>Top 50 entries</h4>
</div>
<div class="row top-row">
    <div class="col-6 themed-grid-col-top-row my-auto">
        <select class="custom-select" id="select-source">
            <option value="arxiv" selected>ArXiv</option>
            <option value="twitter">Twitter</option>
            <option value="blog">Blog</option>
            <option value="github">GitHub</option>
            <option value="paper">Paper</option>
            <option value="news">News</option>
            <option value="other">Other</option>
            <option value="all">All</option>
          </select>
      </div>
      <div class="col-6 themed-grid-col-top-row text-center">
          <button type="button" class="btn btn-primary" id="week">Last week</button>
          <button type="button" class="btn btn-light" id="2weeks">Last 2 weeks</button>
          <button type="button" class="btn btn-light" id="month">Last month</button>
          <button type="button" class="btn btn-light" id="3months">Last 3 months</button>
      </div>
</div>
<div class="rows-here">
    LOADING...
</div>

<div class="cover-container d-flex p-4 mx-auto flex-column">
    <main role="main" class="inner cover">
    <h3 class="cover-heading">TODO list</h3>
    <div class="col-sm">
    <ul>
        <li>Filter irrelevant stuff.</li>
    </ul>
    <p>Last updated: 09-Feb-2020</p>
    </div>
    </main>
</div>
