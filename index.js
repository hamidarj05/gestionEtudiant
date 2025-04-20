let etudiants = []

let filtration = []


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

console.log(localStorage)

for (let i = 0 ; i < window.localStorage.length; i++){  
    etudiants = []
    let noms = window.localStorage.getItem("Etudiants").split(",")
    for (n of noms) {
        etudiants.push(n)
    } 
    
    if(i < etudiants.length){
        console.log(noms)
        let nom = noms[i]
        if(nom == ""){
            continue
        }
        console.log(nom)
        console.log(window.localStorage.getItem(nom))
        if (window.localStorage.getItem(nom) == null){
            continue
        }
        let info = window.localStorage.getItem(nom).split(",")
        let age = info[0]
        let note = info[1]
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
            noms.splice(i, 1)
            window.localStorage.setItem("Etudiants",noms.join(","))
            window.localStorage.removeItem(nom)
            hsabMoyenne()
        }) 
        td.appendChild(buttonSupprimer)
        tr.appendChild(td)
        tbody.appendChild(tr)  
    }
}

function viderInput(){
    document.getElementById("nom").value = ""
    document.getElementById("age").value = ""
    document.getElementById("note").value = ""  
}

// ############### Ajouter tr f table ############### 

function Ajouter(){
    var nom = document.getElementById("nom").value 
    var age = document.getElementById("age").value
    var note = document.getElementById("note").value 
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
    
    let etudiant = [age,note]

    window.localStorage.setItem(nom, etudiant) // Stocké les info dyal les etudiants

    etudiants.push(nom)
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
        window.localStorage.removeItem(nom)
        hsabMoyenne() 
    }) 
    td.appendChild(buttonSupprimer)
    tr.appendChild(td)
    tbody.appendChild(tr) 
    window.localStorage.setItem("Etudiants",etudiants)
    console.log(localStorage)
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


