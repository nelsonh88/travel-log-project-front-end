#!/bin/bash

API="${API_ORIGIN:-https://travel-log-app.herokuapp.com/}"
URL_PATH="/trips/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "trip": {
      "location_name": "'"${LOCATION_NAME}"'",
      "travel_mates": "'"${TRAVEL_MATES}"'",
      "date": "'"${DATE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
