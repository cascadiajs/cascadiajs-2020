@app
climb-h93

@static
folder public
fingerprint true

@http
get /
get /admin.php
get /api
get /clear-questions
get /modules/:type/:module
get /speakers
get /speakers/:key
get /home
get /live
get /schedule
get /questions
post /ask
post /login
post /upsert
post /delete
post /upload
post /orders
post /codes
post /code
post /home
post /tickets
post /ticket

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
