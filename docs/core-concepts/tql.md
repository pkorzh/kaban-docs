---
title: Tickets Query Language
lang: en-US
---

# Tickets Query Language (TQL)

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