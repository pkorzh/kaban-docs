---
title: Backlogs
lang: en-US
---

# Backlogs

A *backlog* is pile of work then needs to be done.

## Lead Time and Cycle Time

*Lead time* is the period between a new task’s appearance in your workflow and its final departure from the system.

Max 1000 recent items is used to calculate lead time.

*Cycle time* begins at the moment when the new arrival enters “in progress” stage and somebody is actually working on it.

Max 1000 recent items is used to calculate cycle time.

## Forecast

Kaban uses a simple formula to make forecast. Every time the ticket is *closed* we calculate it lead and cycle time. Having average lead time we can miltiply it by the total number of not closed tickets in backlog and get amount of time we need to complete all tickets.

Even though this approach is pretty naive it can provide us some insights on backlog duration assuming all tickets are equally sized. In reality we wont get well sized ticket, so calculating average can be misleading.


### Coefficient of variation

Standard deviation is a way of stating how far away or close the results are to mean of the data(lead time in our case).

```
average = 1 + 1 + 1 + 1 + 5 = 1.8
coefficient_of_variation = 99%
```

```
average = 1 + 1 + 1 + 1 + 2 = 1.2
coefficient_of_variation = 37%
```

```
average = 1.5 + 1.2 + 1.4 + 1 + 1.1 = 1.23
coefficient_of_variation = 16%
```

### Percentiles

Percentile is the value below which a percentage of data falls.

the 50th percentile(aka average) is 1 <br>
the 99th percentile is 5

Percentiles along with Coefficient of variation helps identify outstanding data.

### Lower and Upper Bound

```
lower_bound = forecast_end_date * 0.6
upper_bound = forecast_end_date * 1.2
```
