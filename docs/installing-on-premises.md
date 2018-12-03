---
title: Installing On-Premises
lang: en-US
---

# Installing On-Premises

```
git clone git@github.com:pkorzh/kaban.git
cd kaban
npm install
API_URL=https://example.com npm run build
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
eb create \
	--instance_type t2.micro \
	--scale 1 \
	--envvars \
		DB_HOST=dsxxxxxx.mlab.com:13442,\
		DB_NAME=<db_name>,\
		DB_USER=<db_user>,\
		DB_PASS=<db_pass>,\
		JWT_SECRET=<jwt_secret> \
		REDIS_HOST=<redis_host> \
		API_URL=<api_url> \
	--elb-type application
```
