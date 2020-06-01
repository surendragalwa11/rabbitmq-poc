const amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:admin@localhost', function(error0, connection) {
    if(error0) throw(error0)

    connection.createChannel(function(error1, channel) {
        if(error1) throw(error1)

        const queue = 'testRabbitQueue';

        channel.assertQueue(queue, {durable: false});

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function(msg) {
            // channel.ack(msg);
            console.log(" [x] Received %s", msg.content.toString());
        });
    })
})