/**
 * Unit tests for class User
 */
import {User} from './user';

describe('User', () => {
    
    it('should create an instance', () => {
        expect(new User()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        
        let user = new User({
            givenName:  'David',
            familyName: 'Tennant'
        });
        
        expect(user.givenName).toEqual('David');
        expect(user.familyName).toEqual('Tennant');

    });

});