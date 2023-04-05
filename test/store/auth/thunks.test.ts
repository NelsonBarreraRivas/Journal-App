import { checkingAuthentication } from "../../../src/store/auth/thunks";
import 'jest-extended'


describe('Pruebas en authThunks', () => {
    
    test('debe de invocar el checkingAuthentication', () => {


        checkingAuthentication()
    });

});