# tele-proxy-case
interview case solution

Case: api proxy.

# Implementation
Express webserver with catch all endpoint. Writing responses to file as
persistent storage.

# run / build
`./rebuild.sh`

# docker commands
`sudo docker build -t tele-proxy .`
`sudo docker run -p 8080:8080 -d --name tele-proxy tele-proxy`
`sudo docker stop tele-proxy`
`sudo docker rm tele-proxy`
