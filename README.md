# docker-node-postgres
Simple node(typescript) application with postgres db

Docker Compose for Node.js and PostgreSQL
Simple node(typescript) application with postgres db

### Run ###

    docker-compose up --build

## Test ###

```sh
curl http://localhost:3000/ping
# {"environment":"development","database":[{"id":1,"user_name":"","email":""}]}
```

## WARNING

Don't keep `.env` file in the repo. It's here for demo.
