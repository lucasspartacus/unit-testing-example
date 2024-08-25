const greet = (name) => {

    if(name.length===0){
        throw erro('Nome não pode ser vazio')
    }

    return`Olá ${name}`;
}

module.exports = greet