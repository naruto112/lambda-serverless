const AWS = require("aws-sdk");
// const sharp = require("sharp");
// const { basename, extname } = require("path");

// const S3 = new AWS.S3();

exports.handler = async function (event, context) {
  // const { Records: records } = event;
  try {
    //   await Promise.all(
    //     records.map(async (record) => {
    //       const { key } = record.s3.object;

    //       const image = await S3.getObject({
    //         Bucket: process.env.bucket,
    //         Key: key,
    //       }).promise();

    //       const optimized = await sharp(image.Body)
    //         .resize(1280, 720, { fit: "inside", withoutEnlargement: true })
    //         .toFormat("jpeg", { progressive: true, quality: 50 })
    //         .toBuffer();

    //       await S3.putObject({
    //         Body: optimized,
    //         Bucket: process.env.bucket,
    //         ContentType: "image/png",
    //         Key: `compressed/${basename(key, extname(key))}.png`,
    //       }).promise();
    //     })
    //   );
    //   return {
    //     statusCode: 200,
    //     body: { ok: true },
    //   };

    var sns = new AWS.SNS();

    const params = {
      Message: "Olá email",
      TopicArn: "arn:aws:sns:us-east-1:611069673104:SNSMail",
    };

    await sns.publish(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Executando...",
      }),
    };
  } catch (err) {
    return err;
  }
};
