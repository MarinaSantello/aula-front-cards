'use strict'

import './card-aluno.js'


const apiAlunos = async() => {
    const urlAPIalunos = 'https://testeleonid.herokuapp.com/alunos'

    const response = await fetch(urlAPIalunos)
    const listaAlunos = await response.json()

    return listaAlunos
}

const api = await apiAlunos()

const createCards = async (data) => {
    let dataAPI = await data;
    const container = document.getElementById('container')

    // const cardAlunos = document.createElement('card-aluno')

    for(let i = 0; dataAPI.length > i; i++) {
        // console.log(dataAPI[i].nome)

        container.innerHTML += `
            <card-aluno name="${dataAPI[i].nome}" status="${dataAPI[i].status}" turma="${dataAPI[i].turma}" icone="${dataAPI[i].foto}"></card-aluno>
        `

    }
}

createCards(api)