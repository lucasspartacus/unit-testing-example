const twoSum = (target, numbers) =>{

    if (numbers.length<2) {
        throw Error('Array deve conter dois numeros');
    }

     const pairs = {}

     for (const num of numbers) {
        if (pairs[num]!==undefined) {
            return [pairs[num],num]
            
        }
        pairs[target - num] = num;
        
     }

     return [];
}

module.exports = twoSum;