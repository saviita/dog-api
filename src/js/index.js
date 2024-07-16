// El styles lo importamos aquí, ya se carga después al compilar todo
import { compileString } from 'sass';
import '../scss/styles.scss';

const selectElement = document.getElementById('breeds')
const imageElement = document.getElementById('dog-image')
const selectFragment = document.createDocumentFragment

//https://dog.ceo/api/breed/ RAZA /images/random

const fillSelect = (data) => {
    const breeds = data.message
    console.log(breeds)

    breeds.forEach(breed => {
        const newOption = document.createElement('option')
        newOption.value = breed
        newOption.textContent = breed
    });
}

const getDogs = async url => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.message)
        fillSelect(data)
    } catch (error) {
        console.log(error)
    }
}
getDogs('https://dog.ceo/api/breeds/list/all')
