/**
 * Data class to represent the entity 'type'
 */
export class Type {

    creationDateTime: string;
    id:               string;
    documentsCount:   number;
    description:      string;
    name:             string;
    colourId:         string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }


}
