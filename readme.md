
## Issue
- nuxt application
    - try
        - #1 create `set_public_path` plugin
    
- localhost self-certificate register
    - problem
        - stuck CORS between apps
    - solved
        - _ok_ make an exception when browser asking
        - _ok_ using [mkcert](https://github.com/FiloSottile/mkcert)
        - _ok_ add cert into webpack_dev_server ssl e.g. `"preserve": "rm ./node_modules/webpack-dev-server/ssl/server.pem && cp -f ../cert/server.pem ./node_modules/webpack-dev-server/ssl",`