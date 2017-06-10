import aws from 'aws-sdk';

class MediaController {
  constructor() {
    this.s3 = new aws.S3();
    this.bucket = 'teamteatime.net';
    aws.config.update({
      region: 'eu-west-1'
    });

    this.getSignedURL = this.getSignedURL.bind(this);
    this.delete = this.delete.bind(this);
  }

  getSignedURL(req, res) {
    const params = {
      Bucket: this.bucket,
      Key: req.body.filename,
      ContentType: req.body.mimetype,
      Expires: 60,
      ACL: 'public-read'
    };

    this.s3.getSignedUrl('putObject', params, (err, url) => {
      if (err) {
        console.log(err);
        return res.end();
      }

      res.json(url);
    });
  }

  delete(req, res) {
    const params = {
     Bucket: this.bucket,
     Key: req.params.key
    };

    this.s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }

      res.json(data);
    });
  }
}

export default new MediaController;
