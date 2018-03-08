#!/bin/bash

# sh assets/scripts/shell-files/change-password.sh

curl --include --request PATCH "https://travel-log-app.herokuapp.com/change-password/${ID}" \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
 "passwords": {
   "old": "'"${OLDPW}"'",
   "new": "'"${NEWPW}"'"
 }
}'

echo
