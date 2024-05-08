import fastify from "fastify";
import cors from '@fastify/cors';
import { routes } from "./routes";

const app = fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message: error.message})
})

app.addHook('onRequest', (request, reply, done) => {
    console.log(`Request received: ${request.method} ${request.url}`);
    done();
});

const start = async () => {

    await app.register(cors);
    await app.register(routes);
    

    try {
        await app.listen(3000, '0.0.0.0');
    } catch (err) {
        process.exit(1);
    }
}

start();
