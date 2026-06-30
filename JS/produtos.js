class Produto{
    constructor(nome,tipo,img,preco){
        this.nome=nome
        this.tipo=tipo
        this.img=img
        this.preco=preco
        this.preco_number=Number(preco)
        G.PRODTUDOS_ARRAY.push(this)
    }
    get_image(){
        return "./src/produtos/"+this.img
    }
    get_link_individual(){
        return "./tela_produto.html?id="+this.index
    }
    get_categoria(){
        return "Geral"
    }
    get_div(){
        return `
        <div class="gproduto" id=${this.index}><a href=./produto.html?id=${this.index}>
            <img class="gproduto_imagem" src="${this.get_image()}" alt="${this.nome}">
            <div class="gproduto_nome_area">
                <p class="gproduto_nome">${this.nome}</p>
            </div>
            <div class="gproduto_info">
                <div class="gproduto_preco">R$ ${this.preco}</div>
            </div>
        </a></div>
        `
    }
    get_id(){
        return this.img+this.preco
    }
}
class Racao extends Produto{
    constructor(nome,img,preco,peso,animal,sabores,idade_animal){
        super(nome,"Ração",img,preco,idade_animal)
        this.peso=peso
        this.animal=animal
        this.sabores=sabores
        this.idade_animal=idade_animal
        this.index+=peso+idade_animal
        G.CATG["Racao_"+this.animal].push(this)
    }
    get_id(){
        return super.get_id()+this.peso+this.idade_animal
    }
    get_categoria(){
        return "Racao_"+this.animal
    }
    get_div(){
        return `
        <div class="gproduto" id=${this.index}><a href=./produto.html?id=${this.index}>
            <img class="gproduto_imagem" src="${this.get_image()}" alt="${this.nome}">
            <div class="gproduto_nome_area">
                <p class="gproduto_nome">${this.nome}</p>
            </div>
            <div class="gproduto_info">
                <div class="gproduto_preco">R$ ${this.preco}</div>
                <div class="gproduto_peso">${this.peso}</div>
            </div>
        </a></div>
        `
    }
}
class Tulha extends Produto{
    constructor(nome,img,preco_por_kg,animal,sabores,idade_animal){
        super(nome,"Tulha",img,preco_por_kg)
        this.animal=animal
        this.sabores=sabores
        this.idade_animal=idade_animal
    }
    get_id(){
        return super.get_id()+this.idade_animal
    }
    get_categoria(){
        return "Tulha_"+this.animal
    }
    get_div(){
        return `
        <div class="gproduto" id=${this.index}><a href=./produto.html?id=${this.index}>
            <img class="gproduto_imagem" src="${this.get_image()}" alt="${this.nome}">
            <div class="gproduto_nome_area">
                <p class="gproduto_nome">${this.nome}</p>
            </div>
            <div class="gproduto_info">
                <div class="gproduto_preco">${this.preco} R$ por KG</div>
            </div>
        </a></div>
        `
    }
}
class Cama extends Produto{
    constructor(nome,img,preco,animal,tamanho){
        super(nome,"Cama",img,preco)
        this.animal=animal
        this.tamanho=tamanho
    }
    get_id(){
        return super.get_id()+this.peso+this.animal+this.tamanho
    }
    get_categoria(){
        return "Cama"
    }
    get_div(){
        return `
        <div class="gproduto" id=${this.index}><a href=./produto.html?id=${this.index}>
            <img class="gproduto_imagem" src="${this.get_image()}" alt="${this.nome}">
            <div class="gproduto_nome_area">
                <p class="gproduto_nome">${this.nome}</p>
            </div>
            <div class="gproduto_info">
                <div class="gproduto_preco">R$ ${this.preco}</div>
            </div>
        </a></div>
        `
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
/*new Racao("Golden Especial - Frango e Carne - Adulto","racao_golden_special_frango_e_carne_caes_adultos_15kg.png","129.99","15kg","Cachorro",["Frango","Carne"],"Adulto")
new Racao("PremieR - Carne - Adulto - Raças Grandes","premier_racas_grandes_adultos_15kg.png","229.80","15kg","Cachorro",["Carne"],"Adulto")
new Racao("Pedigree - Carne Frango e Cereais - Adulto","pedigree_adulto_carne_frango_e_cereais_10,1kg.png","179.99","10.1kg","Cachorro",["Carne","Frango","Cereais"])*/
new Racao("Fãmil Premium Tradicional","famil_premium_10kg.png","78","10kg","Cachorro",["Carne"],"Adulto")
new Racao("Lupy Dog","lupy_dog_adultos_carne_frango.png","45","7kg","Cachorro",["Carne","Frango"],"Adulto")
new Racao("Lupy Dog","lupy_dog_adultos_carne_frango.png","118","20kg","Cachorro",["Carne","Frango"],"Adulto")
new Racao("Special Dog","special_dog_carne.png","144","20kg","Cachorro",["Carne"],"Adulto")
new Racao("Chacal Premium Plus","chacal_premium_plus_carne.png","45","5kg","Cachorro",["Carne"],"Adulto")
new Racao("Chacal Premium Plus","chacal_premium_plus_carne.png","70","10kg","Cachorro",["Carne"],"Adulto")
new Racao("Chacal Premium Plus","chacal_premium_plus_carne.png","98","15kg","Cachorro",["Carne"],"Adulto")
new Racao("Chacal Premium Plus","chacal_premium_plus_carne.png","150","25kg","Cachorro",["Carne"],"Adulto")
new Racao("Sapeca Premium","sapeca_adultos_carne_e_vegetais.png","94","10kg","Cachorro",["Carne","Vegetais"],"Adulto")
new Racao("Sapeca Premium","sapeca_premium_pequenas_racas_frango_peixe_arroz_integral_e_cenoura.png","97","10kg","Cachorro",["Carne","Vegetais"],"Pequenas Raças")

// Gatos
/*new Racao("Whiskas - Frango","whiskas_frango_900g.png","27.80","900g","Gato",["Frango"],"")
new Racao("Royal Canin - Sensible - Gatos Adultos","royal_canin_sensible_gatos_adultos.png","99.99","1,5kg","Gato",["Sensible"],"Adulto")
new Racao("Origens - Carne - Adulto","origens_adultos_carne.png","29.99","1kg","Gato",["Carne"],"Adulto")*/
new Racao("Fãmil Premium","famil_gatos_castrados_10kg.png","130","10kg","Gato",["Salmão","Arroz"],"Castrados")
new Racao("Kiara","kiara_gatos_adultos_mix.png","95","10kg","Gato",["Carne","Cereais"],"Adultos")
new Racao("Atacama","atacama_castrados.png","185","10kg","Gato",["Carne"],"Castrados")
new Racao("LeRoy Premium Especial","leroy_adultos_e_castrados_carne.png","138","10kg","Gato",["Carne"],"Adultos e Castrados")
new Racao("LeRoy Premium Especial","leroy_adultos_e_castrados_frango.png","138","10kg","Gato",["Frango"],"Adultos e Castrados")

for(var i=0;i<G.PRODTUDOS_ARRAY.length;i++){
    let p=G.PRODTUDOS_ARRAY[i]
    let txt=p.get_id()
    while(txt.includes(" ")){
        txt=txt.replace(" ","_")
    }
    p.index=txt
    G.PRODUTOS[txt]=p
}
console.log(G.PRODUTOS)