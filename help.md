> go inside a container 
```bash
docker ps -a
#> server-api-1 
docker exec -it server-api-1 sh
```



  db:
    image: mariadb:10.7
    restart: always
    environment:
      - MYSQL_USER=milon27
      - MYSQL_PASSWORD=myPassWord
      - MYSQL_ROOT_PASSWORD=myPassWord
      - MYSQL_DATABASE=test_db
    volumes:
      - mysql_vol:/var/lib/mysql
# named volumes
volumes:
  mysql_vol: {}