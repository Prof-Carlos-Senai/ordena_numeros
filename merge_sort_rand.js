let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let num_array = []
num_array_original = []
let ordenado = []
let minimo = 0, maximo = 50, range = 0

function randomize(min,max){

    // A função Math.ceil(x) faz aredondamento para o maior valor de "x".
    min = parseInt(Math.ceil(min))

    // A função Math.floor(x) faz aredondamento para o menor valor de "x".
    max = parseInt(Math.floor(max))
    // console.log(min)
    // console.log(max)

    let val = Math.round(Math.random() * (max - min + 1) + min)
    return val
}

function inserir(){
    let valor = 0
    res.innerHTML = ''
    range = Math.round(Number(document.getElementById('range').value))
    // console.log(range)
    range -=1
    // console.log(range)
    num_array_original = []

    for(i=minimo;i<range;i++){
        valor = randomize(minimo,maximo)
        num_array_original.push(valor)
    }
    console.log(num_array_original)

    res.innerHTML = `[ ${num_array_original} ]`
}

function merge(esquerdo,direito){
    let resultado = []
    let indiceEsquerdo = 0, indiceDireito = 0

    while(indiceEsquerdo < esquerdo.length && indiceDireito < direito.length){
        if(esquerdo[indiceEsquerdo]<direito[indiceDireito]){
            resultado.push(esquerdo[indiceEsquerdo])
            indiceEsquerdo++
        }else{
            resultado.push(direito[indiceDireito])
            indiceDireito++
        }
    }
    return resultado.concat(esquerdo.slice(indiceEsquerdo)).concat(direito.slice(indiceDireito))

}

function mergeRecursiva(vetor){
    if(vetor.length <= 1){
        return vetor
    }
    let meio = Math.floor(vetor.length/2) 
    let meioEsquerdo = vetor.slice(0, meio)
    let meioDireito = vetor.slice(meio)

    return merge(mergeRecursiva(meioEsquerdo),mergeRecursiva(meioDireito))

}

function mergeSort(){
    num_array = mergeRecursiva(num_array_original)
    res2.innerHTML = `[ ${num_array} ]`
}
