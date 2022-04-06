#!/bin/bash

# cd into current project dir
cd "$(dirname "$0")"

docker compose up certbot renew > _logs/ssl.txt
