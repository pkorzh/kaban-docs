---
title: Installing On-Premises
lang: en-US
---

# Installing On-Premises

```
git clone git@github.com:pkorzh/kaban.git
cd kaban
npm install
npm run build
```

## Environment Variables

`DB_HOST`&nbsp;&mdash; Mongodb host URL.

`DB_NAME`&nbsp;&mdash; Mongodb db name.

`DB_USER`&nbsp;&mdash; Mongodb db user.

`DB_PASS`&nbsp;&mdash; Mongodb db password.

`API_URL`&nbsp;&mdash; Base API URL.

`JWT_SECRET`&nbsp;&mdash; JSON Web Token Secret.

`REDIS_HOST`&nbsp;&mdash; Redis host URL.

## Beanstalk Deployment

```
eb init
```

Then lets create Beanstalk Application.

```
eb create --profile korzh --instance_type t2.micro --branch_default develop --scale 1 --envvars DB_HOST=ds113442.mlab.com:13442,DB_NAME=<db_name>,DB_USER=<db_user>,DB_PASS=<db_pass>,JWT_SECRET=<jwt_secret> --elb-type application
```
