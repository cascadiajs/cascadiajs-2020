@app
climb-h93

@static
folder public
fingerprint true

@http
get /
get /admin.php
get /api
get /modules/:type/:module
get /speakers
post /login
post /upsert
post /delete
post /upload

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
