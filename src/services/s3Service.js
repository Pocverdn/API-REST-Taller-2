const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const accessKeyId = process.env.aws_access_key_id;
const secretAccessKey = process.env.aws_secret_access_key;
const sessionToken = process.env.aws_session_token;
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;

const s3Client = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        sessionToken: sessionToken 
    }
});

const uploadFile = async (fileBuffer, fileName, mimetype) => {

    const uploadParams = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileBuffer,
        ContentType: mimetype,
    };

    try {
        await s3Client.send(new PutObjectCommand(uploadParams));

        const fileUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
        
        return fileUrl;

    } catch (error) {
        throw new Error("Error al subir el archivo.");
    }
};

module.exports = {
    uploadFile
};