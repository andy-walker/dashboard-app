/**
 * Unit tests for class File
 */
import {File} from './file';

describe('File', () => {
    
    it('should create an instance', () => {
        expect(new File()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        
        let file = new File({
            creationDateTime: "2016-08-17T13:07:19.800Z",
            status:           "In progress",
            modifiedBy:       10,
            type:             "article",
            uri:              "/test/url",
            version:          4;
            id:               "GUID_TEST",
            fileId:           "test-title",
            scheduled:        true,
            title:            "Test Title",
            createdBy:        10,
            modifiedDateTime: "2016-09-17T13:07:19.800Z"
            live:             false,
            popularity:       20,
            modifiedByName:   'David Tennant'
        });
        
        expect(file.creationDateTime).toEqual("2016-08-17T13:07:19.800Z");
        expect(file.status).toEqual("In progress");
        expect(file.modifiedBy).toEqual(10);
        expect(file.type).toEqual("article");
        expect(file.uri).toEqual("/test/url");
        expect(file.version).toEqual(4);

        expect(file.id).toEqual("GUID_TEST");
        expect(file.fileId).toEqual("test-title");
        expect(file.scheduled).toEqual(true);
        expect(file.title).toEqual("Test Title");
        expect(file.createdBy).toEqual(10);
        expect(file.modifiedDateTime).toEqual("2016-09-17T13:07:19.800Z");
        
        expect(file.live).toEqual(false);
        expect(file.popularity).toEqual(20);
        expect(file.modifiedByName).toEqual('David Tennant');

    });    

});
