class Produto{
    constructor(nome,tipo,img,preco){
        this.nome=nome
        this.tipo=tipo
        this.img=img
        this.preco=preco
        this.preco_number=Number(preco)
        this.id=img

        G.PRODUTOS[this.id]=this
    }
}
class Racao extends Produto{
    constructor(nome,img,preco,peso,animal){
        super(nome,"Ração",img,preco)
        this.peso=peso
        this.animal=animal
    }
}
class Tulha extends Produto{
    constructor(nome,img,preco_por_kg,animal){
        super(nome,"Tulha",img,preco_por_kg)
        this.animal=animal
    }
}
class Cama extends Produto{
    constructor(nome,img,preco,animal,tamanho){
        super(nome,"Cama",img,preco)
        this.animal=animal
        this.tamanho=tamanho
    }
}

G.F.get_produto_by_id=function(id){
    if(Object.hasOwn(G.PRODUTOS,id)){
        return G.PRODUTOS[id]
    }
    return null
}

// RAÇÕES
let rGoldenEspecial=new Racao("Golden Especial - Frango e Carne","racaogolden.jpg","129,99","15kg","Cachorro")
let rWhiskasFrango200g=new Racao("Whiskas - Frango","whiskas200g.png","27.99","900g","Gato")
console.log(G.PRODUTOS)