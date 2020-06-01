# RabbitMQ

Install Rabbit MQ using Docker

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

## Run the Sender File

```
node sender.js
```

## Run the Receiver File

```
node receiver.js
```