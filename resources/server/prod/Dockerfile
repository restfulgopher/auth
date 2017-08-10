FROM golang:1.8-stretch

WORKDIR $GOPATH/src/github.com/restfulgopher/auth

ADD main.go .
ADD server/ server/
ADD templates/ templates/
ADD resources/server/prod/conf.yml resources/server/prod/conf.yml

RUN go get -d -v ./...

RUN go install -v ./...

EXPOSE 3000

ENTRYPOINT ["auth", "--conf=resources/server/prod/conf.yml"]
