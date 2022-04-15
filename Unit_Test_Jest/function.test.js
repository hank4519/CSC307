const myFunctions = require('./function.js'); 

test('Testing sum -- success', () => {
    const target = 30; 
    const result = myFunctions.sum(13, 17); 
    expect(target).toBe(result); 
}); 

test('Testing Div -- success', () => {
    const expected = 13;
    const result = myFunctions.div(39, 3); 
    expect(result).toBe(expected); 
});

test('Testing containsNumber -- success', () => {
    str_to_test = "My_name_is_Hank";
    expect(myFunctions.containsNumber(str_to_test)).toBeFalsy(); 
}); 

test('Testing containsNumber -- success', () => {
    str_to_test = "My name_is Hank4519"; 
    expect(myFunctions.containsNumber(str_to_test)).toBeTruthy(); 
}); 

test('Testing Divide by zeror -- success', () => {

    expect( () => myFunctions.div(3, 0)).toThrow(/Zero/); 
    expect( () => myFunctions.div(5, 0)).toThrow("Divide by Zero"); 
}); 