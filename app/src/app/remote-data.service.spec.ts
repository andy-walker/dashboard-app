/* tslint:disable:no-unused-variable */

import {
  TestBed,
  getTestBed,
  async,
  inject,
  tick,
  fakeAsync
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { RemoteDataService } from './remote-data.service';

describe('RemoteDataService', () => {

  let mockBackend: MockBackend;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        RemoteDataService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

 
  it('should create a service', inject([RemoteDataService], (service: RemoteDataService) => {
    expect(service).toBeTruthy();
  }));
  

  it('should get user data',
    async(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/users.json')
              }
            )));
        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data[2].givenName).toBe('David');
          expect(data[2].familyName).toBe('Tennant');
      });

    })));

  it('should get the correct number of user records',
    async(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/users.json')
              }
            )));
        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data.length).toBe(8);
      });

    }))); 

  it('should get file type data',
    async(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/types.json')
              }
            )));
        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data[0].id).toBe('article');
          expect(data[0].documentsCount).toBe(5);
      });
      
    })));


  it('should get the correct number of file type records',
    async(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/types.json')
              }
            )));
        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data.length).toBe(2);
      });

    }))); 

  it('should get file data',
    async(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/files.json')
              }
            )));
        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data[0].uri).toBe('/project/test/content/2d6620f1-040c-571c-8058-da04327f786b');
          expect(data[0].title).toBe('Cuvluz agupak.');
      });
      
    })));


  it('should get the correct number of file records',
    async(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/files.json')
              }
            )));
        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data.length).toBe(20);
      });

    }))); 

  it('should tolerate a slow response',
    fakeAsync(inject([RemoteDataService], (remoteDataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          tick(10000);
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: require('../data/files.json')
              }
            )));

        });

      remoteDataService.getData('http://test').subscribe(
        (data) => {
          expect(data[0].uri).toBe('/project/test/content/2d6620f1-040c-571c-8058-da04327f786b');
          expect(data[0].title).toBe('Cuvluz agupak.');
      });
      
    })));

});


