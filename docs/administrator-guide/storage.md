---
title: Storage
lang: en-US
---

# Storage

## AWS S3

1. [Create AWS Account](https://aws.amazon.com/free/)

2. [Create S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html)

3. [Create IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) with Programmatic access, download access keys.

4. Add the following permissions.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowList",
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets",
                "s3:ListBucket",
                "s3:HeadBucket"
            ],
            "Resource": "*"
        },
        {
            "Sid": "AllowPub",
            "Effect": "Allow",
            "Action": "s3:Put*",
            "Resource": [
                "arn:aws:s3:::<bucket_name>",
                "arn:aws:s3:::<bucket_name>/*"
            ]
        }
    ]
}
```

5. Goto *Kaban Configuration > Storage Config* page.

6. Choose *S3*

7. Enter access keys, click **Test Access Keys**.

8. Done.