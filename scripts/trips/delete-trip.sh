#!/bin/bash

API="${API_ORIGIN:-https://travel-log-app.herokuapp.com/}"
URL_PATH="/trips/${ID}"
curl "${API}${URL_PATH}" \
--header "Authorization: Token token=${TOKEN}" \
  --include \
  --request DELETE

echo
