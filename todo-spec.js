//Todo App Automation Scripts
//  1.  Add new todo
//  2.  Adding additional ToDos to list
//  3.  Add item starting with a Special Character and containing special characters and numbers
//  4.  Adding Duplicate Items to List

//*******************************************************************************************
//Test Case #1 - Adding new todo (first entry)
 describe('Get Page, Add First Item', function() {
	 
	var textMessage = "Item 1";
	
	//Get Browser
	beforeEach(function () {
        browser.get('http://todomvc.com/examples/angular2/');
    });
	
	//Add Item
	it("Should add first todo item", function() { 
	    console.log('Test Case #1 -- Add first todo item');
		//browser.get("http://todomvc.com/examples/angular2/");
		expect(browser.getTitle()).toContain('TodoMVC');
	    element(by.css("input")).getText().sendKeys(textMessage);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.wait(function() {
        return browser.getCurrentUrl().then(function(url) {
        return /index/.test(url);
  });
}, 10000, "URL unchanged"); 
		console.log(textMessage);
	  	  

 });
});

//********************************************************************************************

//Test Case #2 - Adding additional ToDos to list
 describe('Get URL, Add Second Item to ToDo List', function() {
	var textMessage = "Item 2";
	
	//Get Browser
	beforeEach(function () {
        browser.get('http://todomvc.com/examples/angular2/');
    });
	
	//Add additional item
    it("Should add new item to List", function() { 
	   console.log('Test Case #2 -- Add Second Item to ToDo List');
	   element(by.css("input")).getText().sendKeys(textMessage);
	   browser.actions().sendKeys(protractor.Key.ENTER).perform();
	   browser.wait(function() {
       return browser.getCurrentUrl().then(function(url) {
       return /index/.test(url);
		
  });
}, 10000, "URL unchanged"); 
	console.log(textMessage);
	  	  

 });
});
 

//*********************************************************************************************

 
//Test Case #3 - Add item starting with a Special Character and containing special characters and numbers
 describe('Get Page, Add new item ', function() {
	 
var textMessage = "#1 1234567890!@#$%^&*()-_=+~`";
	
	//Get Browser
	beforeEach(function () {
        browser.get('http://todomvc.com/examples/angular2/');
    });
	
	//Add Task
	it("Should add item starting with special character", function() { 
	    console.log('Test Case #3 -- Test Special Characters and Numbers');
		//browser.get("http://todomvc.com/examples/angular2/");
		expect(browser.getTitle()).toContain('TodoMVC');
	    element(by.css("input")).getText().sendKeys(textMessage);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.wait(function() {
        return browser.getCurrentUrl().then(function(url) {
        return /index/.test(url);
  });
}, 10000, "URL unchanged"); 
		console.log(textMessage);
	  	  

 });
});

//********************************************************************************************

//Test Case #4 - Adding Duplicate Items to List
 describe('Get URL, Add Duplicate to List', function() {
	var textMessage1 = "Duplicated Item";
	var textMessage2 = "Duplicated Item";
	
	//Get Browser
	beforeEach(function () {
        browser.get('http://todomvc.com/examples/angular2/');
    });
	
	//Add Item
    it("Should Add Additional Item to List", function() { 
	   console.log('Test Case #4 -- Add Additional Item to List');
	   element(by.css("input")).getText().sendKeys(textMessage1);
	   element(by.css("input")).getText().sendKeys(textMessage2);
	   browser.actions().sendKeys(protractor.Key.ENTER).perform();
	   browser.wait(function() {
       return browser.getCurrentUrl().then(function(url) {
       return /index/.test(url);
	   expect(element(by.css("input")).getText()).toContain('Duplicated Item');
		
  });
}, 10000, "URL unchanged"); 
	console.log(textMessage);
	  	  

 });
});
