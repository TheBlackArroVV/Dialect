$(document).ready( () => {
    'use strict'

    // VARIABLES AND CONSTANTAS 
    let tds = document.getElementsByTagName('td')
    let inputField = document.getElementById('transcription')
    let draggablePanel = document.getElementById('transcription-panel')
    const close = document.getElementsByClassName('close')[0]
    let initialCoords = {
        initialTop : draggablePanel.offsetTop,
        initialLeft : draggablePanel.offsetLeft
    }

    const initialTop = draggablePanel.offsetTop
    const initialLeft = draggablePanel.offsetLeft
    let top, left

    // FUNCTIONS


    const includes = (array, value) => {
        
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true
            }
        }
        return false
    }

    const showNode = (id) => {
        const element = document.getElementById(id)
        const parent = element.parentElement
        let children = parent.childNodes

        for (let i = 0; i<children.length; i++) {
            (children[i].nodeName==='TABLE' ) ? children[i].style.display = 'none' : null
        }

        element.style.display = 'block'
    }
    

    // ONCLICK EVENTS
    
    document.getElementById('open-transcription').onclick = (e) => {
        draggablePanel.style.display = 'block'
    }

    close.onclick = (e) => {
        draggablePanel.style.display = 'none'
    }

    draggablePanel.onmousedown = (e) => {
        initialCoords.initialTop = draggablePanel.offsetTop
        initialCoords.initialLeft = draggablePanel.offsetLeft

        top = Math.abs(e.pageY - initialCoords.initialTop)
        left = Math.abs(e.pageX - initialCoords.initialLeft)
    }
    
    draggablePanel.ondragend = (e) => {
        draggablePanel.style.top = `${Math.abs(e.pageY - top)}px`
        draggablePanel.style.left = `${Math.abs(e.pageX - left)}px`
    } 

    document.getElementById('symbols').onclick = (e) => {
        if (includes(tds, e.target)) {
            if (e.target.innerHTML === ' ́') return showNode('emphasis')
            if (e.target.innerHTML === '˄') return showNode('roof')
            showNode('alphabet')
            
            const input = e.target.innerHTML
            let inputFieldVal = inputField.value.toString() 
            
            if (!inputFieldVal.match(/\[(.*?)\]/g) || !inputFieldVal) inputField.value = inputFieldVal = `[ ${inputFieldVal} ]`
   
            let match = /\[(.*?)\]/g.exec(inputFieldVal.trim())[1] || inputField.value 
            inputField.value = `[${match + input} ]`
        }
    }

    document.getElementById('additional-symbols').onclick = (e) => {
        if (includes(tds, e.target)) {
            const input = e.target.innerHTML
            let inputFieldVal = inputField.value.toString() 

            if (!inputFieldVal.match(/\[(.*?)\]/g) && !inputFieldVal) inputField.value = inputFieldVal = `[ ${inputFieldVal} ]`
            
            let match = /\[(.*?)\]/g.exec(inputField.value.toString().trim())[1] || inputField.value 
            inputField.value = `[${match + input} ]`
            showNode('alphabet')
        }
    }
   
})
