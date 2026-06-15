const parameteros=new URLSearchParams(window.location.search)
const id=parameteros.get("id")
const produto=G.F.get_produto_by_id(id)