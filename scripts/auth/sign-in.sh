#!/bin/bash

# sh assets/scripts/shell-files/sign-in.sh

curl --include --request POST "https://travel-log-app.herokuapp.com/sign-in" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
