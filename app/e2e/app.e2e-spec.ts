import { DashboardAppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Dashboard App', () => {
  let page: DashboardAppPage;

  beforeEach(() => {
    browser.get('/');
  });


    it("should display 'iSite Dashboard' as the page title", () => {  
        expect(browser.getTitle()).toEqual('iSite Dashboard');
    });

    it("should display a dropdown menu when the menu icon is clicked", () => {  
        element(by.css('nav .dropdown button')).click();
        expect(element(by.css('nav .dropdown-menu')).isDisplayed()).toBeTruthy();
    });

    it("should show 8 users in project", () => {  

        var el = element(by.css('.dashboard-header .user-count'));
        expect(el.getText()).toEqual('8');

    });


    it("should display 2 file types in the 'File types' list", () => {  
        
        let filetypes = element.all(by.css("app-dashboard-types-list li"));
        expect(filetypes.count()).toEqual(2);
    
    });

    it("should display 5 files initially", () => {  

        var visibleElements = element.all(by.css('app-dashboard-files-list-item')).filter(function(element) { 
            return element.isDisplayed();
        });

        expect(visibleElements.count()).toEqual(5);

    });

    it("should display 20 files when the 'View all content' button is clicked", () => {  

        element(by.css('.btn-primary')).click();

        var visibleElements = element.all(by.css('app-dashboard-files-list-item')).filter(function(element) { 
            return element.isDisplayed();
        });

        expect(visibleElements.count()).toEqual(20);

    });

});
