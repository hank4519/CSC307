//let portfolio = [['Apple', 5], ['IBM', 10]];
let portfolio = []; 

function getPortfolio(){ 
    return portfolio; 
}
function isEmpty(){  
    return portfolio.length == 0;
}
function getTickerCount() {
     return portfolio.length; 
}
function purchase(x, y){ 
    if(y != 0){ 
        for (var i = 0; i < portfolio.length; i++) {
            if (portfolio[i][0] == x){ 
                portfolio[i][1] = portfolio[i][1] + y; 
                return; 
            }
        }
        portfolio.push([x, y]);
    }
}
function sell(x, y){ 
    for (var i = 0; i < portfolio.length; i++ ){ 
        if (portfolio[i][0] == x){ 
            if(portfolio[i][1] < y){ 
                throw new Error("Not enough share"); 
            }
            while(y > 0 && portfolio[i][1] > 0 ){ 
                portfolio[i][1]--; 
                y--; 
            }
            if (portfolio[i][1] == 0) {
                portfolio.splice(i, 1); 
            }
        }
    }
}

function getCountByName(name){ 
    for( var i = 0; i < portfolio.length; i++){ 
        if(portfolio[i][0] == name){ 
            return portfolio[i][1] 
        }
    }
    return 0; 
}
exports.getPortfolio= getPortfolio; 
exports.isEmpty= isEmpty; 
exports.getTickerCount = getTickerCount; 
exports.purchase = purchase; 
exports.sell = sell; 
exports.getCountByName = getCountByName; 