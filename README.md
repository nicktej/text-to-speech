# Personal Website

This is my text-to-speech program hosted on AWS! I was inspired to create this through my habit of listening to podcasts. With this, I can convert any books or study material or anything in general into audio, and can listen to them throughout the day.

## Infrastructure

This project uses S3, DynamoDB, Lambda, SNS, Polly, and API Gateway. For sending posts, the user interacts with the static website on S3, and any information is received by the RESTful web service exposed by Amazon API Gateway. The API Gateway triggers a lambda function, which creates an entry in DynamoDB, and sends an SNS notification to a second lambda. The second lambda function communicates with Polly to convert the text to audio, places the audio file into an S3 bucket, and updates the DynamoDB table.

For getting posts, the user interacts with the static website on S3, and any information is received by the RESTful web service exposed by Amazon API Gateway. The API Gateway tiggers a lambda function which retrieves information about the post (including the reference to Amazon S3) from the DynamoDB table.

## Future work

I intend to add additional features, such as deleting audio files via the webpage, search using file name, and date and time created. Stay tune for more!

### More info
For more info, visit nicktej.com!
