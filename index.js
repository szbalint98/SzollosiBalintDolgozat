import {eloallit,divEsemeny, divKlikk} from "./fuggvenyek.js"
const ADAT=[{marka:"Honda", tipus:"civic", uzemanyag: "benzin" },{marka:"BMW", tipus:"330", uzemanyag: "benzin" },{marka:"Toyota", tipus:"auris", uzemanyag: "dizel" },{marka:"Mercedes", tipus:"S63", uzemanyag: "benzin" },{marka:"Volkswagen", tipus:"E-golf", uzemanyag: "elektromos" }]
const DIVELEM=document.querySelector(".tartalom")

let szoveg=eloallit(ADAT)
DIVELEM.innerHTML+=szoveg
divEsemeny();
divKlikk();
divKlikk(ADAT,KIVALASZTOTTAK)

