#!/bin/bash
sudo docker stop tele-proxy

sudo docker rm tele-proxy

sudo docker build -t tele-proxy .

sudo docker run -p 8080:8080 \
    -d --name tele-proxy -v \
/home/kiro/repos/tele-proxy-case/storage:/usr/src/app/storage \
    tele-proxy
    #-it /bin/bash
