@app
climb-h93

@static
folder public

@http
get /
get /admin.php
get /api
get /speakers
post /login
post /upsert

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
