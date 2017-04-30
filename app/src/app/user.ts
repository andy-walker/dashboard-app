/**
 * Data class to represent the entity 'user'
 */
export class User {

    id:         number;
    givenName:  string;
    familyName: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}