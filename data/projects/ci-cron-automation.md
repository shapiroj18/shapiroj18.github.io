---
project: ci-cron-automation
author: Jonathan Shapiro
---

## Background
I run quite a few single-script jobs that don't require elaborate architecture. For example, I have a [basic program](https://github.com/shapiroj18/weather-app) that send me the weather each day, which is currently running as a cron job on a Raspberry Pi.

I noticed that GitHub Actions has an option to [schedule](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#schedule) CI runs, so why not use that architecture to run basic jobs?

## Development
This project is currently [being built](https://github.com/shapiroj18/gh-cron-automation), and I hope to write a blog post for this!

Overall I would like to do something like both prove out the concept with a super simple automated job (which you can see [here](https://github.com/shapiroj18/gh-cron-automation/blob/main/.github/workflows/scheduled-test-time.yml)), as well as something closer to matching a typical batch job.

With regards to the batch job, it would be great to do something like:
```
Get dataset from REST API or other >> Upload to data repository like PostgreSQL using Node SQL ORM >> Visualize with D3.js >> Email report with Node
```

## Dataset ideas

Thank you to this [compiled api list](https://github.com/public-apis/public-apis#music)

* NASA open data
* Meetup Events
* Number of concerts and times from songkick api and then look at transportation load?
* Wikimedia recent wikipedia [updates](https://meta.wikimedia.org/wiki/IRC/Channels#Recent_changes)
* Humanitarian Open Data such as [Yemen - Requirements and Funding Data](https://data.humdata.org/dataset/fts-requirements-and-funding-data-for-yemen)
* Jeopardy from [j-archive](https://www.j-archive.com/) or use [jService](https://jservice.io/)