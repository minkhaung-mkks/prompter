import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

// GET
export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if (!prompt) return new Response("Prompt Not Found", { status: 404 })
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch prompts", { status: 500 })
    }
}

// PATCH (Update)
export const PATCH = async(req, { params }) => {
    const { prompt, tag } = await req.json();
    try {
        await connectToDB()
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) return new Response("Prompt Not Found", { status: 404 })
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response("Prompt Updated", { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response("Prompt Update Failed", { status: 500 })
    }
}

// DELETE
export const DELETE = async(req, { params }) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);

        return new Response(`Prompt: ${params.id} deleted successfully.`, { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response('Prompt failed to delete', { status: 500 })
    }
}