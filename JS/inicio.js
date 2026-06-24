G.F.setup_swiper(".carrossel")
for(var i=1,a=[
    "./src/produtos/famil_premium_10kg.png",
    "./src/produtos/chacal_premium_plus_carne.png",
    "./src/produtos/sapeca_premium_pequenas_racas_frango_peixe_arroz_integral_e_cenoura.png",
    "./src/produtos/special_dog_carne.png",
];i<5;i++){
    let idx=document.getElementById("Racao_Cachorro"+String(i))
    idx.src=a[i-1]
    idx.alt="Ração Recomendada Número "+String(i)
}