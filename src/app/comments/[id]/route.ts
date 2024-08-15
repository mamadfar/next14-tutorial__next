import {comments} from "@/app/comments/data";
import {redirect} from "next/navigation";

export const GET = async (_request: Request, context: {params: {id: string}}) => {
    if (parseInt(context.params.id) > comments.length) {
        redirect('/comments')
    }
    const comment = comments.find(comment => comment.id === parseInt(context.params.id))
    return Response.json(comment)
}

export const PATCH = async (request: Request, context: {params: {id: string}}) => {
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex(comment => comment.id === parseInt(context.params.id))
    comments[index].text = text;
    return Response.json(comments[index])
}

export const DELETE = async (_request: Request, context: {params: {id: string}}) => {
    const index = comments.findIndex(comment => comment.id === parseInt(context.params.id))
    const deletedComment = comments[index]
    comments.splice(index, 1)

        return Response.json(deletedComment)
}