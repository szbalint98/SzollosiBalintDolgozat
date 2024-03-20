

export function eloallit(lista) {
    let txt=""
    for (let index = 0; index < lista.length; index++) {
        txt+=`<div class="kocsidiv"><p>Márka: ${lista[index].marka}</p><p>Típus: ${lista[index].tipus}</p><p>Üzemanyag: ${lista[index].uzemanyag}</p></div>`
        
    }

    return txt
}
export function divEsemeny(){
    let elem=document.querySelectorAll('.kocsidiv')
    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener('mouseover',function(){
             elem[index].classList.add("kiv");
        })
            
    }
}

export function divKlikk(lista,lista2){
    const KIVALASZTOTTAK=[]
    console.log(lista)
    let elem=document.querySelectorAll('.kocsidiv')
    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener('click',function(){
            console.log(lista[index].tipus)
            KIVALASZTOTTAK.push(lista[index].tipus)
            
        })
            
    }
    return KIVALASZTOTTAK
}

