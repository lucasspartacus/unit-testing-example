const {expect} = require('@jest/globals');
const UserApi = require('./user-api');

describe("UserApi",()=>{ 
    describe("findAll",()=>{
        test("Retonar lista de usuarios",()=>{
            
            const userApi = new UserApi();
        
            return userApi.findAll().then(users=>{
                console.info(users)
                expect(users.length).toBeGreaterThan(0);;
            })
        })
    })

    describe("findOne",()=>{
        test("Retonar usuario existente",()=>{
            
            const userApi = new UserApi();
        
            return userApi.findOne(1).then(user=>{
                console.info(user)
                expect(user.id).toBe(1);
                expect(user.name).toBe('Leanne Graham');
            })
        });    
        test("Retonar exceção para usuário inexistente",()=>{
            
            const userApi = new UserApi();
        
            return userApi.findOne(1000000).catch(exception=>{
                expect(exception.message).toBe('User 1000000 was not found');
            })
        });   
       
    })
})