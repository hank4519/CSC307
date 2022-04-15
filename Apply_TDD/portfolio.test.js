const myPortfolio= require('./portfolio.js'); 

test('Testing Portfolio -- success', () => {
    const target = []; 
    const portfolio = myPortfolio.getPortfolio(); 
    expect (portfolio).toEqual(target); 
});

test('Testing if empty', () => {
    expect(myPortfolio.isEmpty()).toBeTruthy(); 
}); 

// test('Testing if not empty', () => { 
//     expect(myPortfolio.isEmpty()).toBeFalsy(); 
// }); 

test('Tesing ticker counts', ()=> {
    const ticker = 0; 
    const my_count = myPortfolio.getTickerCount(); 
    expect(my_count).toBe(ticker); 
}); 

test ('Testing purcharse', () => { 
    myPortfolio.purchase("Apple", 10); 
    myPortfolio.purchase("IBM", 4); 
    let res =  [["Apple", 10], ["IBM", 4]]; 
    const my_profile = myPortfolio.getPortfolio(); 
    expect(my_profile).toEqual(res); 
});

test('Testing sale', () => {
 
    //Now it contains 10 shares of Apple, and 4 shares of IBM
    myPortfolio.sell("Apple", 5); 
    let res = [["Apple", 5], ["IBM", 4]]; 
    let my_prof = myPortfolio.getPortfolio();
    expect(my_prof).toEqual(res); 
});


test('Testing sale 2', () => {
    //now sell  all IBM
    myPortfolio.sell("IBM", 4); 
    let res = [["Apple", 5]]; 
    let my_prof = myPortfolio.getPortfolio();
    expect(my_prof).toEqual(res); 
});

test('Testing sale 3', () => {
    // sell something you don't own
    myPortfolio.sell("Something", 5); 
    let res = [["Apple", 5]]; 
    let my_prof = myPortfolio.getPortfolio();
    expect(my_prof).toEqual(res); 
});

test('How many shares exist', ()=> {
    let res = 5; 
    const count = myPortfolio.getCountByName("Apple"); 
    expect (count).toBe(res); 
}); 

test('How many shares for non-exists', () => {
    let res = 0; 
    const count = myPortfolio.getCountByName("Some");
    expect(count).toBe(res); 
});

test('Got rid of the 0 share', () => { 
    myPortfolio.purchase("Amazon", 0); 
    let res = [["Apple",  5]]; 
    expect(myPortfolio.getPortfolio()).toEqual(res); 
    let res1 = []; 
    myPortfolio.sell("Apple", 5); 
    expect(myPortfolio.getPortfolio()).toEqual(res1); 
});

test('Not enough shares', () =>{ 
    myPortfolio.purchase("Tesla",10); 
    expect( ()=> myPortfolio.sell("Tesla", 100)).toThrow(/Not/); 
}); 

test('Is empty', () => {
    myPortfolio.sell("Tesla", 10); 
    expect(myPortfolio.isEmpty()).toBeTruthy(); 
});

test('Buying the same company a couple times', () => {
    let res = [ ['Salesforce', 15], ['Apple', 10] ]; 

    myPortfolio.purchase('Salesforce', 10); 
    myPortfolio.purchase('Apple', 10); 
    myPortfolio.purchase('Salesforce', 5); 
    expect(myPortfolio.getPortfolio()).toEqual(res); 
});

