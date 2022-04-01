> Creating database dumps (we wil use it with crontab everyday and push the backup on the google drive)

```
docker exec mariadb sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > ./_mariadb_try/dbs/all-databases.sql

docker exec mariadb sh -c 'exec mysqldump --databases test_db -uroot -p"$MYSQL_ROOT_PASSWORD"' > ./_mariadb_try/dbs/test_db.sql

```

> Restoring data from dump files

```
docker exec -i mariadb sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < ./_mariadb_try/dbs/all-databases.sql
```

```

# create a volumen in docker compose 

    volumes:
      - mysql_vol:/var/lib/mysql
      - ./init-restore-db:/docker-entrypoint-initdb.d
```


