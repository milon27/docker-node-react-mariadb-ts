> go inside a container 
```bash
docker ps -a
#> server-api-1 
docker exec -it server-api-1 sh
```
-------------------------------------------
PUSH TO DOCKER-HUB
-------------------------------------------
```sh
# build all the images
docker compose build server
docker compose build client_build



# 1st tag the image
docker tag hello-docker milon27/node-mysql
# push now
docker push milon27/node-react-mysql-docker

```

> todo

1. db backup
1. db data migrate
1. ssl


-------------------------------------------