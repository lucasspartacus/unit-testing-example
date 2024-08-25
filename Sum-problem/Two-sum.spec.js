const twoSum = require('./Two-sum')
 

describe("UserApi",()=>{ 
    test("0, [] deve gerar exceção", ()=>{
        const execution = () => twoSum(0,[]);
        expect(execution).toThrow('Array deve conter dois numeros');
    })
    test("0, [0] deve gerar exceção", ()=>{
        const execution = () => twoSum(0,[0]);
        expect(execution).toThrow('Array deve conter dois numeros');
    })
    test("0, [0, 0] deve gerar exceção", ()=>{
        expect(twoSum(0,[0,0])).toStrictEqual([0,0]);
    })
    test("1, [0, 1] deve gerar exceção", ()=>{
        expect(twoSum(1,[0,1])).toStrictEqual([0,1]);
    })

    test("1, [1, 0] deve gerar exceção", ()=>{
        expect(twoSum(1,[1,0])).toStrictEqual([1,0]);
    })
 
    test("5, [0, 1, 2, 3 , 4, 5] deve gerar exceção [1,4]", ()=>{
        expect(twoSum(5,[1,4])).toStrictEqual([1,4]);
    })

    test("-1, [-2, 1] deve gerar exceção [-2,1]", ()=>{
        expect(twoSum(-1,[-2,1])).toStrictEqual([-2,1]);
    })

    test("5,[1, 3, 8, 19] deve gerar exceção []", ()=>{
        expect(twoSum(5,[1, 3, 8, 19])).toStrictEqual([]);
    })
})