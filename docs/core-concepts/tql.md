---
title: Tickets Query Language
lang: en-US
---

# Tickets Query Language (TQL)

TQL consists of one or more search criterias. Each criteria is composed of three pieces: `field`+`operator`+`value`. Criterias can be joined using boolean operators such as `and` and `or`.

```
status = open

status != closed

createdAt >= yesterday
```

```
status in [development, verification] and type = story
```

## Filterable fields

- `rank`
- `status`
- `priority`
- `assignee`
- `reporter`
- `backlog`
- `type`
- `resolution`
- `board`
- `createdAt`
- `updatedAt`

## Operators

- `>`
- `<`
- `=`
- `!=`
- `<=`
- `>=`
- `in`

## Date filtering

*today* and *yesterday*

```
createdAt = today
createdAt >= yesterday
createdAt < 2018.11.01
```