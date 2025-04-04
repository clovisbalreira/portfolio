import { pipeline } from "@xenova/transformers";
import { loadingMessage } from "./loading";
import data from './data.json'
/* let data = null */

export async function transcribeAudio(){
    const options = {
        chunk_length_s:30,
        stride_length_s:5,
        language: 'portuguese',
        task: 'transcribe',
        return_timestamps: true
    }
    try{
        console.time()
        loadingMessage('iniciando a transcrição do audio')
        console.log('[START_TRANSCRIBE]')
        const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-time')
        /* 
            whisper-time
            whisper-small
            whisper-large 
            whisper-large-v2 
        */
       /* data = await transcriber('../audio.mp3', options) */
    }catch(error){
        console.log('[START_TRANSCRIBE]', error)
        throw new Error(error)
    }finally{
        console.timeEnd()
        loadingMessage('transcrião terminada')
        console.log('transcrião terminada')
        return data
    }
}