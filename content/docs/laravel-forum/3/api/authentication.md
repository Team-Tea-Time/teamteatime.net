---
layout: "docs"
projects: "Laravel Forum"
versions: "3"
topics: "03:API"
title: "Authentication"
weight: 2
---

## Authentication

All requests to the API require user-based or token-based authentication.

### User-based

For internal requests, the API will attempt to use the current user session. This enables AJAX requests to be made on the same domain without the need to explicitly authenticate.

Manual authentication is also possible using HTTP basic authentication. To do this, send an authorization header containing a base64-encoded username and password as follows:

```
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Token-based

Requests can also be authenticated by passing the token specified in your `forum.api.token` config value. To do this, send an authorization header containing the token as follows:

```
Authorization: Token token="token here"
```

### Security

If you plan to explicitly authenticate requests to the API over HTTP, be sure to enforce HTTPS.
