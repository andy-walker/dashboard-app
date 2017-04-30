/**
 * Unit tests for class Type
 */
import {Type} from './type';

describe('Type', () => {
    
    it('should create an instance', () => {
        expect(new Type()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        
        let type = new Type({
            creationDateTime: "2016-08-17T13:07:19.800Z",
            id:               "article",
            documentsCount:   5,
            description:      "Articles about the programme",
            name:             "Article Page",
            colourId:         "golden"
        });
        
        expect(type.creationDateTime).toEqual("2016-08-17T13:07:19.800Z");
        expect(type.id).toEqual("article");
        expect(type.documentsCount).toEqual(5);
        expect(type.description).toEqual("Articles about the programme");
        expect(type.name).toEqual("Article Page");
        expect(type.colourId).toEqual("golden");

    });

});
