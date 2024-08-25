const greet = require('./greeting');

describe("SAudação",()=>{
    test("Saudasr lucas",()=>{
        expect(greet('Lucas')).toBe('Olá Lucas');
    })
    test('Nome vazio gerar exceção',()=>{
        const execution = () => greet('')
        expect(execution).toThrow();
    });

    test('Nome undefined gerar exceção',()=>{
        const execution = () => greet()
        expect(execution).toThrow();
    });
})