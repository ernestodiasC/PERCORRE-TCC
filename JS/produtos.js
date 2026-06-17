G={PRODUTOS:{},F:{}}
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
    constructor(nome,img,preco,peso,animal,sabores){
        super(nome,"Ração",img,preco)
        this.peso=peso
        this.animal=animal
        this.sabores=sabores
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
new Racao("Golden Especial - Frango e Carne - Adulto","racao_golden_special_frango_e_carne_caes_adultos_15kg.jpg","129.99","15kg","Cachorro",["Frango","Carne"])
new Racao("PremieR - Carne - Adulto - Raças Grandes","premier_racas_grandes_adultos_15kg.png","229.80","15kg","Cachorro",["Carne"])
new Racao("Pedigree - Carne Frango e Cereais - Adulto","pedigree_adulto_carne_frango_e_cereais_10,1kg.png","179.99","10.1kg","Cachorro",["Carne","Frango","Cereais"])

// Gatos
new Racao("Whiskas - Frango","whiskas200g.png","27.80","900g","Gato",["Frango"])
new Racao("Royal Canin - Sensible - Gatos Adultos","royal_canin_sensible_gatos_adultos.png","99.99","1,5kg","Gato",["Sensible"])
new Racao("Origens - Carne - Adulto","origens_adultos_carne.png","29.99","1kg","Gato",["Carne"])
console.log(G.PRODUTOS)