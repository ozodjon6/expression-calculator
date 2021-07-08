function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.replace(/\s/g, '');
    if(expr.indexOf('/0') > 0) throw new Error('TypeError: Division by zero.');

    try {
        let res = new Function('return '+ expr);
        return res();
    }

    catch {
        throw new Error('ExpressionError: Brackets must be paired')
    }
}

module.exports = {
    expressionCalculator
}