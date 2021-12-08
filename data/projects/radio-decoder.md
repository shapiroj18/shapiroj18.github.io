---
project: radio-decoder
author: Jonathan Shapiro
---

## Background
I got quite interested in understanding exactly how data is sent over radio waves - how can a car receive metadata from a radio station? Interestingly, it seems like it uses its own communication protocol called [Radio Data System](https://en.wikipedia.org/wiki/Radio_Data_System) to do this.

It would be fun to build a way to decode this data.

Alternatively, can we pull data from elsewhere, like plants, and convert that to data that can be communicated via radio waves? Full disclosure, I feel like I saw a project where someone used a raspberry pi or equivalent and listened to plants, which gave me this idea, but I can't seem to find it (maybe through the [recurse center](https://www.recurse.com/))?