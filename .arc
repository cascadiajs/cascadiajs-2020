@app
climb-h93

@static
folder public

@http
get /
get /admin.php
get /api
post /login
post /upsert

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
