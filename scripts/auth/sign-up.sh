#!/bin/sh
# sh assets/scripts/shell-files/sign-up.sh

curl --include --request POST "https://travel-log-app.herokuapp.com/sign-up" \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'",
    "first_name": "'"${FIRST_NAME}"'",
      "last_name": "'"${LAST_NAME}"'"
  }
}'
echo
