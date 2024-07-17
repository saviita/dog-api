// El styles lo importamos aquí, ya se carga después al compilar todo
import { compileString } from 'sass';
import '../scss/styles.scss';
import { data } from 'autoprefixer';

const selectElement = document.getElementById('breeds')
const imageElement = document.getElementById('dog-image')
const formElement = document.getElementById('form')
const selectFragment = document.createDocumentFragment()

const fillSelect = (data) => {
    const breeds = Object.keys(data.message)
    
    breeds.forEach(breed => {
        const newOption = document.createElement('option')
        newOption.value = breed
        newOption.textContent = breed
        selectFragment.append(newOption)
    });

    selectElement.append(selectFragment)
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

const secondBreed = breed => {
    console.log(data.message.breed)
}

const getImages = async url => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.message)
        printImage(data)
    } catch (error) {
        console.log(error)
    }
}


const generateUrl = event => {
    event.preventDefault()

    const breedSelected = selectElement.value
    const url = `https://dog.ceo/api/breed/${breedSelected}/images/random`


    secondBreed(breedSelected)
    getImages(url)
}

const printImage = (data) => {
    imageElement.src = data.message
}

formElement.addEventListener('submit', generateUrl)