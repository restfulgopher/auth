# AUTH SERVER

## How to:

Start mongodb `make db/up`

Create auth db, and user and token collections `make db/provision`

Start auth server `make auth/up`

## Available Commands

```
------------------------------------------------------------------------
RESTFULGOPHER AUTH
------------------------------------------------------------------------
auth/stop                      stop and remove auth service
auth/up                        start auth server behind reverse proxy
db/cli                         enter in db cli mode
db/provision                   create db and collections
db/stop                        stop and remove db container
db/up                          start database container
server/stop                    stop and remove auth server container
server/up                      start auth server container
test                           start test container
```
