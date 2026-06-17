class Produto{
    constructor(nome,tipo,img,preco){
        this.nome=nome
        this.tipo=tipo
        this.img=img
        this.preco=preco
        this.preco_number=Number(preco)
        this.idx=img

        G.PRODUTOS[this.idx]=this
    }
}
class Racao extends Produto{
    constructor(nome,img,preco,peso,animal,sabor){
        super(nome,"Ração",img,preco)
        this.peso=peso
        this.animal=animal
        this.sabor=sabor
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
// Caes
let rGoldenEspecial=new Racao("Golden Especial - Frango e Carne","racaogolden.jpg","129,99","15kg","Cachorro",["Frango","Carne"])
let rPremieRRacasGrandes=new Racao("PremieR - Raças Grandes","premieRracasgrandes.png","289,99","15kg","Cachorro")

let rPedigree=new Racao("Pedigree - Adulto","pedigree_adulto_carne_frango_e_cereais_10,1kg.png","289,99","15kg","Cachorro",["Carne","Frango","Cereais"])

// Gatos
let rWhiskasFrango200g=new Racao("Whiskas - Frango","whiskas200g.png","27.99","900g","Gato",["Frango"])
console.log(G.PRODUTOS)