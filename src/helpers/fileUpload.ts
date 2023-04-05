export const fileUpload = async( file : any ) => {

    //if( !file ) throw new Error('No tenemos ningún archivo a subir')
    if( !file ) return null
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dhqutlhjr/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        } )
        
        if( !resp.ok ) throw new Error('No se pudo subir la imagen')

        const cloudResp = await resp.json()

        return cloudResp.secure_url

    } catch (error : any) {

        /* console.error(error);
        throw new Error(error.message) */
        return null
    }
}