# tele-proxy-case
interview case solution


# build image 
`sudo docker build -t tele-proxy .`

#u run container first timening cmds
`sudo docker run -p 8080:8080 -d --name tele-proxy tele-proxy`

# container operatiions
`docker start tele-proxy`
`docker stop tele-proxy`
