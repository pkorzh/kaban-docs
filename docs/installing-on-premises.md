---
title: Installing On-Premises
lang: en-US
---

# Installing On-Premises

```
git clone git@github.com:pkorzh/kaban.git
cd kaban
npm install
DB_HOST=host DB_NAME=kaban DB_USER=kaban DB_PASS=banana npm run dev
```

## Environment Variables

`DB_HOST`&nbsp;&mdash; Mongodb host url.

`DB_NAME`&nbsp;&mdash; Mongodb db name.

`DB_USER`&nbsp;&mdash; Mongodb db user.

`DB_PASS`&nbsp;&mdash; Mongodb db password.

## Beanstalk Deployment

```
eb create
eb deploy
```