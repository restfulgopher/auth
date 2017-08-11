# AUTH SERVER [![CircleCI](https://circleci.com/gh/restfulgopher/auth.svg?style=svg)](https://circleci.com/gh/restfulgopher/auth)

## HOWTO:

Start mongodb `make db/up`

Create auth db, and user and token collections `make db/provision`

Start auth server `make auth/up`

## AVAILABLE COMMANDS:

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
