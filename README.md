# backend-examples-bb
Exemplos de backend para uma apresentação do bytes e brejas

# wrk
https://github.com/wg/wrk

```bash
# Octane: port 8000
# Loco: 5150
# AdonisJS: 3333

# Create lines in postgres
wrk -t12 -c120 -d10s -s ./events_post.lua http://localhost:8000/api/events
# Get the first line in event table
wrk -t12 -c120 -d10s http://localhost:8000/api/events/1
```