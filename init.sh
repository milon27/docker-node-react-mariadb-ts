#!/bin/bash

GIT_PROJECT_NAME="docker-node-react-mariadb-ts"
DOMAIN="http://m27lab.ml/"
FULL_PATH="~/actions-runner/_work/$GIT_PROJECT_NAME/$GIT_PROJECT_NAME"

mkdir -p ~/_tmp_volume/_logs
mkdir -p ~/_tmp_volume/drive_config
mkdir -p ~/_tmp_volume/dhparam

# create some crontab (after testing)
crontab -l | { cat; echo "*/15 * * * * bash ${FULL_PATH}/backup.sh"; } | crontab -
crontab -l | { cat; echo "@weekly bash ${FULL_PATH}/ssl.sh"; } | crontab -


# generate open ssl key
openssl dhparam  -out ~/_tmp_volume/dhparam/dhparam-2048.pem 2048

docker compose -f docker-compose.stage.yml up -d


VARI=$(curl -sL -w "%{http_code}\n" "$DOMAIN" -o /dev/null)
echo "response = $VARI"

until [ $VARI == "200" ]
do
  sleep 3
  VARI=$(curl -sL -w "%{http_code}\n" "$DOMAIN" -o /dev/null)
  echo "3 second later res = $VARI"
done

echo "loop done, get the ssl"
docker compose up certbot
# docker compose up nginx -d
docker compose up --scale certbot=0 -d
echo 'all done, check your domain with https !'