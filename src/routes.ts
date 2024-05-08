import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreatePhotoController } from "./controllers/CreatePhotoController";
import { ListPhotosController } from "./controllers/ListPhotosController";
import { DeletePhotoController } from "./controllers/DeletePhotoController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/index", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/add-photo", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePhotoController().handle(request, reply)
    })

    fastify.get("/photos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPhotosController().handle(request, reply)
    })

    fastify.delete("/delete-photo", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeletePhotoController().handle(request, reply)
    })
}
