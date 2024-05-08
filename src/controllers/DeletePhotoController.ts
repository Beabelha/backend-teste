import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePhotoService} from '../services/DeletePhotoService';

class DeletePhotoController{
 async handle(request: FastifyRequest, reply: FastifyReply){
    const {id} = request.query as { id: string}
    const deletePhotoService = new DeletePhotoService();

    const deletePhoto = await deletePhotoService.execute({id});

    reply.send(deletePhoto);

 }
}

export {DeletePhotoController}