import { FastifyRequest, FastifyReply } from "fastify";
import {ListPhotosService} from '../services/ListPhotosService'

class ListPhotosController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listPhotosService = new ListPhotosService();
        const photos = await listPhotosService.execute();

        reply.send(photos);
    }
}

export {ListPhotosController}