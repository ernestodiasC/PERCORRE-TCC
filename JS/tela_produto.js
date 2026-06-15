const parameteros=new URLSearchParams(window.location.search)
const id=parameteros.get("id")
const produto=G.F.get_produto_by_id(id)
if(produto!=null){
    const img=document.getElementById("imagem_golden")
    img.src=produto.img
    const nome=document.getElementById("nome_racao")
    nome.innerText=produto.nome
    const peso=document.getElementById("peso_racao")
    peso.innerText=produto.peso
    const animal=document.getElementById("animal_racao")
    animal.innerText=produto.animal
    const preco=document.getElementById("preco_racao")
    preco.innerText=produto.preco+" R$"
}