# /!\ Work In Progress

# Description

Works exacly like aws-sdk-js by Amazon.

Untill it's optimized to work with Cloud Formation Stacks.

On Cloud Formation it's theorically their system witch attribute "Bucket Names", "DynamoDB Names", etc...

You know only the **Logical Name** of your resources. To know the **Physical Name** of your resources you can visit manually the Amazon Console or Ask this mapping via Cloud Formation Api.

With this override of AWS SDK the api call to Cloud Formation is Automaticaly perform.

# Example

S3 Bucket

Logical Name : MyS3Bucket

Physical Name : MyProject-Dev-MyS3Bucket53769D


``` javascript
S3.putObject({
    Bucket: 'MyS3Bucket',
    Key: 'test.txt',
    Body: 'aaaa'
}, (err, res) => {
    //File Uploaded into MyProject-Dev-MyS3Bucket53769D Bucket
})
```

# Install

``` shell
$ npm i --save aws-sdk-cloudformation
```

# Ready Methods

| S3         | Lambda | DynanoDb |
| ---------- | ------ | -------- |
| getObject  | invoke |
| putObject  |