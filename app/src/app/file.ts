/**
 * Data class to represent the entity 'file'
 */
export class File {

    creationDateTime: string;
    status:           string;
    modifiedBy:       number;
    type:             string;
    uri:              string;
    version:          string;
    id:               string;
    fileId:           string;
    scheduled:        boolean;
    title:            string;
    createdBy:        number;
    modifiedDateTime: string;
    live:             boolean;
    popularity:       number;
    modifiedByName:   string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
