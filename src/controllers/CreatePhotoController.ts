import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePhotoService } from '../services/CreatePhotoService'

class CreatePhotoController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {title, desc} = request.body as { title: string, desc: string};
    
        const photoService = new CreatePhotoService()
        const photo = await photoService.execute({title, desc});

        reply.send(photo);
    }
}

export { CreatePhotoController }