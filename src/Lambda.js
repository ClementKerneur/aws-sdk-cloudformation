import LambdaClient from 'aws-sdk/clients/lambda'

export default class Lambda extends AWS.Lambda {
    abortMultipartUpload(params = {}, callback) {
        params.Bucket = "xxxx"

        super(params, callback)
    }


}