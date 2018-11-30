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

Even though this approach is pretty naive it can provide us some insights on backlog duration assuming all tickets are equally sized. On practice, most of the time they are not.

### Coefficient of variation

Standard deviation is a way of stating how far away or close the results are to mean of the data(lead time in our case).

### Percentiles

### Lower and Upper Bound


