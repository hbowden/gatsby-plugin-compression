# Gatsby plugin compression

First install `gatsby-plugin-compression`.

```bash

npm install gatsby-plugin-compression --save

```

Then add `gatsby-plugin-compression` to your app's `gatsby-config.js`.

```javascript

module.exports = {
  plugins: [
    `gatsby-plugin-compression`,
  ],
}

```

That's it, when you build your app you will have gzipped versions of your files.

Or you can use it with additional options;

```javascript

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-compression-v2`,
      options: {
        asset: '[path].gz[query]',
        algorithm: 'gzip'
      },
    }
  ],
}

```

Keep in mind this option setting is also the default options when you don't specify anything. See full options for the webpack addon;


|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`test`](#test)**|`{RegExp\|Array<RegExp>}`|`.`|All assets matching this `{RegExp\|Array<RegExp>}` are processed|
|**[`include`](#include)**|`{RegExp\|Array<RegExp>}`|`undefined`|Files to `include`|
|**[`exclude`](#exclude)**|`{RegExp\|Array<RegExp>}`|`undefined`|Files to `exclude`|
|**[`cache`](#cache)**|`{Boolean\|String}`|`false`|Enable file caching|
|**[`asset`](#asset)**|`{String}`|`[path].gz[query]`|The target asset name. `[file]` is replaced with the original asset. `[path]` is replaced with the path of the original asset and `[query]` with the query|
|**[`filename`](#filename)**|`{Function}`|`false`|A `{Function}` `(asset) => asset` which receives the asset name (after processing `asset` option) and returns the new asset name|
|**[`algorithm`](#algorithm)**|`{String\|Function}`|`gzip`|Can be `(buffer, cb) => cb(buffer)` or if a `{String}` is used the algorithm is taken from `zlib`|
|**[`threshold`](#threshold)**|`{Number}`|`0`|Only assets bigger than this size are processed. In bytes.|
|**[`minRatio`](#minratio)**|`{Number}`|`0.8`|Only assets that compress better than this ratio are processed|
|**[`deleteOriginalAssets`](#deleteoriginalassets)**|`{Boolean}`|`false`|Whether to delete the original assets or not|



# Nginx

If your using nginx you can use `gzip_static on;` to serve your gzipped assets, here's a full example.

```bash

#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

pid /usr/local/nginx/logs/nginx.pid;

server {
    listen       80;
    server_name  localhost;

    #access_log  logs/host.access.log  main;

    location / {
        gzip_static on;
        root   Users/nah/Desktop/web;
        index  index.html index.htm;
    }
}

```
