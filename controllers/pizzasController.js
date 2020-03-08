const pizzas = [
    {"nome":"Peperoni", "ingredientes":["mussarela","peperoni"]},
    {"nome":"Marguerita", "ingredientes":["mussarela","tomate","manjericão"]}
];

const listarPizzas = (req,res) => {
    return res.send(pizzas);
}

const mostrarPizzas = (req,res) => {
    let {id} = req.params;
    id = parseInt(id);
    
        if(id >= pizzas.length){
            console.log('Pizza não encontrada');
            return res.send('Pizza não encontrada');
        }else if(isNaN(id)){
            console.log('ID tem que ser um número');
            return res.send('ID tem que ser um número');
        }else{
            console.log(pizzas[id]);
            return res.send(pizzas[id]);
        }        
   
    
}

module.exports = {listarPizzas,mostrarPizzas};