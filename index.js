let etudiants = []
let filtration = []
let data = undefined
const tbody = document.getElementById("tbody")

// ############### 7sab d Moyenne ############### 

function hsabMoyenne(){
    let moyenneSpan = document.getElementById("moyenne")
    let notes = tbody.querySelectorAll(".note") 
    let somme = 0
    for (n of notes){ 
        somme += Number(n.textContent)  
    }

    if (somme > 0){
        let moyenne = somme/notes.length
        moyenneSpan.textContent = (moyenne)
    } 
}

// window.localStorage.clear()

// ############### nraj3o dakchi li déja m stocké ############### 


for (let i = 0 ; i < window.localStorage.length; i++){ 
    let tr = document.createElement("tr")
    let info = window.localStorage.getItem(window.localStorage.key(i))
    console.log(window.localStorage.getItem(window.localStorage.key(i)))
    info = info.split(",")
    console.log(localStorage)
    let oblg = ["td nom","td age","td note"]
    let index = 0
    for (elem of info){
        let info  = elem
        var td = document.createElement("td")
        td.textContent = info 
        td.className = oblg[index]
        tr.appendChild(td)
        index++
    } 
    var td = document.createElement("td")
    var buttonSupprimer = document.createElement("button")
    buttonSupprimer.className = "btn btn-danger"
    buttonSupprimer.textContent = "Supprimer"
    buttonSupprimer.addEventListener("click",()=>{
        tbody.removeChild(tr) 
        i = window.localStorage.key(i)
        window.localStorage.removeItem(i)
        hsabMoyenne() 
    }) 
    td.appendChild(buttonSupprimer)
    tr.appendChild(td)
    tbody.appendChild(tr) 
    hsabMoyenne() 
}

function viderInput(){
    document.getElementById("nom").value = ""
    document.getElementById("age").value = ""
    document.getElementById("note").value = ""  
}

// ############### Ajouter tr f table ############### 

function Ajouter(){
    const nom = document.getElementById("nom").value
    const age = document.getElementById("age").value
    const note = document.getElementById("note").value 
    console.log(typeof(Number(String)))
    if(Number(note)> 20 && Number(age)> 33 || Number(age)< 16){
        alert("Enterer des chiffres valid Majiyinch ntflaw")
        viderInput() 
        return
    }else if(Number(age)> 33 || Number(age)< 16){
        alert("Age Invalid Entrer Une Age Valid Majiyinch ntflaw")
        viderInput() 
        return
    }else if(Number(note)> 20){
        alert("Note Invalid Entrer Une Note Valid Majiyinch ntflaw")
        viderInput() 
        return 
    }else{
        console.log("ok")
    }
    if (nom == "" || age == "" || note == ""){ 
        alert("3mar les infos asahbi") 
        return
    }
    let etudiant = {
        nom : nom,
        age : age,
        note : note
    }
    for (etud of etudiants){
        if (etud.nom == etudiant.nom){
            alert("Etudiant Déja Ajouter") 
            document.getElementById("nom").value = ""
            document.getElementById("age").value = ""
            document.getElementById("note").value = "" 
            return
        }
    } 
    etudiant = [nom,age,note]
    window.localStorage.setItem("Tache" + window.localStorage.length + 1, etudiant)
    etudiants.push(etudiant)
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.textContent = nom
    td.className = "td nom"  
    td.style.fontSize = "18px"
    tr.appendChild(td) 
    var td = document.createElement("td")
    td.textContent = age 
    td.className = "td age"
    td.style.fontSize = "18px"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.textContent = note
    td.className = "td note"
    td.style.fontSize = "18px"
    tr.appendChild(td)
    var td = document.createElement("td") 
    var buttonSupprimer = document.createElement("button")
    buttonSupprimer.className = "btn btn-danger"
    buttonSupprimer.textContent = "Supprimer"
    buttonSupprimer.addEventListener("click",()=>{
        tbody.removeChild(tr)
        let key = window.localStorage.length + 1 
        window.localStorage.removeItem(key)
        hsabMoyenne() 
    }) 
    td.appendChild(buttonSupprimer)
    tr.appendChild(td)
    tbody.appendChild(tr) 
    viderInput() 
    hsabMoyenne()
} 

// ############### Filtrage d les notes ############### 

function Filtrer(){
    let trs = tbody.children
    for (tr of trs){
        let tds = tr.children
        for (td of tds){
            if (td.className == "td note"){
                if(Number(td.textContent) < 10){
                    tbody.removeChild(tr)
                }
            }
        }
    }  
}      

// ############### 7awal L majuscule ############### 

function NomsMaj(){
    let noms = tbody.querySelectorAll(".nom") 
    for (n of noms){ 
        n.textContent = n.textContent.toUpperCase() 
    }
}  



hsabMoyenne()



// var buttonmodifier = document.createElement("button")
//     buttonmodifier.className = "btn btn-warning"
//     buttonmodifier.textContent = "Modifier"
//     buttonmodifier.addEventListener("click",()=>{
//         let tds = tr.querySelectorAll(".td")
//         tds[0].parentElement.style.backgroundColor = "rgb(177, 177, 177)"
//         for (td of tds){
//             let input = document.createElement("input")
//             input.value = td.textContent
//             input.style.border = "1px solid rgb(145, 145, 145)"
//             input.style.borderRadius = "7px"
//             td.textContent = ""
//             td.appendChild(input)
//         } 
//     })
//     td.appendChild(buttonmodifier)
//     tr.appendChild(td)
//     tbody.appendChild(tr)
