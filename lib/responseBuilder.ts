// type ResponseType<T> = {
//     error:string,
//     payload: T,
//     statusCode: number,
    
// }

// type ResponseBuilderType<T> = Omit<ResponseType<T>,'error'> | Omit<ResponseType<T>,'payload'>;




export function responseBuilder<T>({ error, payload, statusCode, message }:{
    error?:string,
    payload?: T,
    statusCode?: number,
    message?: string
}) {
    return {
        error,
        payload,
        statusCode,
        message
    }
}
