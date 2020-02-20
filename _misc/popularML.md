---
title: "Popular Machine Learning resources on Twitter"
collection: misc
permalink: /misc/popularML
---
<link rel="stylesheet" media="screen and (min-device-width: 501px)" href="{{ base_path }}/assets/css/popular_ML_largeScreen.css" />
<link rel="stylesheet" media="screen and (max-width: 500px)" href="{{ base_path }}/assets/css/popular_ML_smallScreen.css" />
<link href="{{ base_path }}/assets/css/popular_ML.css" rel="stylesheet">
<script language="javascript" src="{{ base_path }}/assets/js/jquery.js"></script>
<script language="javascript" src="{{ base_path }}/assets/js/popular_ML.js"></script>



<div class="cover-container d-flex mx-auto flex-column">
    <main role="main" class="inner cover text-center">
    <!--<h4 class="cover-heading" style="color:red">Under maintenance.</h4>-->
    <div class="col-sm">
    <p class="lead description">
        <b>This page displays the content of popular tweets related to machine learning (especially deep learning).</b>
        Tweets with URLs from <a href="https://twitter.com/popular_ML" target="_blank">popular_ML</a>'s Timeline are classified into the following categories: Arxiv, Blog, Twitter, GitHub, Paper, News and Other.
        Afterwards, tweets, sorted by importance (combination of favs and RTs), are displayed in this page, showing the most popular tweets on top.
        <b>The goal of this project</b> is to help researchers (especially those who do not have Twitter account) to see what other people find interesting and share on Twitter.
        If you have any comment or suggestion, tweet me at <a href="https://twitter.com/jmlipman" target="_blank">@jmlipman</a>.
        Plans for the future include the bot tweeting daily what was the most popular content retrieved among other things. Follow the bot for updates!
        A complete description of how this works can be found in the following <a href="https://twitter.com/popular_ML/status/1226575783558340609" target="_blank">Twitter thread</a>.
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
        <li>Unwrap short links.</li>
    </ul>
    <p>Last updated: 20-Feb-2020</p>
    </div>
    </main>
</div>
