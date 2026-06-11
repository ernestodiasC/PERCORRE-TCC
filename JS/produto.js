class Produto{
    constructor(nome,tipo,img,preco){
        this.nome=nome
        this.tipo=tipo
        this.img=img
        this.preco=preco
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