let etudiants = []
let filtration = []
let data = undefined
const tbody = document.getElementById("tbody")

// ############### nraj3o dakchi li déja m stocké ############### 


for (let i = 1 ; i <= window.localStorage.length; i++){
    let tr = document.createElement("tr")
    let info = window.localStorage.getItem(i)
    info = info.split(",")
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
        window.localStorage.removeItem(i)
    }) 
    td.appendChild(buttonSupprimer)
    tr.appendChild(td)
    tbody.appendChild(tr) 
}

// ############### Ajouter tr f table ############### 

function Ajouter(){
    const nom = document.getElementById("nom").value
    const age = document.getElementById("age").value
    const note = document.getElementById("note").value 
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
    window.localStorage.setItem(window.localStorage.length + 1 , etudiant)
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
        console.log("hamid",window.localStorage.length + 1 )
        window.localStorage.removeItem(key)
    }) 
    td.appendChild(buttonSupprimer)
    tr.appendChild(td)
    tbody.appendChild(tr) 
    document.getElementById("nom").value = ""
    document.getElementById("age").value = ""
    document.getElementById("note").value = "" 
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
    for (nom of noms){ 
        nom.textContent = nom.textContent.toUpperCase()
        console.log("ok")
    }
}  

// ############### 7sab d Moyenne ############### 

let moyenneSpan = document.getElementById("moyenne")
let notes = tbody.querySelectorAll(".note") 
let somme = 0
for (n of notes){ 
    somme += Number(n.textContent) 
    console.log(n.textContent)
}

if (somme > 0){
    let moyenne = somme/notes.length
    moyenneSpan.textContent = (moyenne)
}


// window.localStorage.clear()



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