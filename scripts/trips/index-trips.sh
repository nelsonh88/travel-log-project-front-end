API="${API_ORIGIN:-https://travel-log-app.herokuapp.com/}"
URL_PATH="/trips"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
