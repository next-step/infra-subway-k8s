#!/bin/bash

BASE_PATH=/home/ubuntu/nextstep
APP_PATH=$BASE_PATH/infra-subway-deploy

# move app path
cd $APP_PATH

# bash deploy
bash deploy.sh epicarts prod
