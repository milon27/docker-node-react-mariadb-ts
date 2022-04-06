#!/bin/bash

# cd into current project dir
cd "$(dirname "$0")"

#run as sudo
DB_NAME='my_db'
DB_PASS='myPassWord'

#taking the backup
# mysqldump -u root $DB_NAME | gzip > _tmp_volume/drive_config/backup.sql.gz
# --password=root
docker exec mariadb /usr/bin/mysqldump -u root --password=$DB_PASS $DB_NAME | gzip > _tmp_volume/drive_config/backup.sql.gz

# run the node app(upload into drive)
# node index.js > log/output.txt
docker compose run --rm node_drive

# run this script everyday for taking db backup.sql and upload to the drive 
# 0 4 * * * bash /home/milon27/application/node-drive/backup.sh