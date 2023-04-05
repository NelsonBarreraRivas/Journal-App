import 'jest-extended';
import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dhqutlhjr',
    api_key: '375771197335644',
    api_secret: 'vpuAp_gXaQgPt044ncxCJUdne4I',
    secure: true

})

describe('Pruebas en fileUpload', () => {
    
    test('debe de subir elarchivo correctamente a cloudinary', async() => {
        
        const imageUrl='https://tech.pelmorex.com/wp-content/uploads/2020/06/ReactTS.png'
        
        const resp = await fetch( imageUrl )

        const blob = await resp.blob()

        const file = new File([blob], 'foto.png')

        const url : string = await fileUpload( file )
    
        expect( typeof url).toBe('string')

        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.png', '')
        
        await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        })
        
    });

    test('debe de retornar null', async () => {

        const file = new File([], 'foto.png')

        const url = await fileUpload( file )
        
        expect( url).toBe(null)
    });

});