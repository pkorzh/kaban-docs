---
title: Rebalance Rank
lang: en-US
---

# Rebalance Rank

In order to support sorting of tickets we use simple numbering system.
Each ticket is assigned a rank of numeric value.

In order to place ticket `c` between `a` and `b` we use the following formula:

```
c.rank = (a.rank + b.rank) / 2
```

To run rebalance manually run `npm run rebalance-rank`. 

`rebalance-rank` is run as part of daily script.