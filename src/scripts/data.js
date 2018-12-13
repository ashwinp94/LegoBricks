const data = {
    postLego(legoToSave) {
        fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
        })
    }
}
const dataColors = {
    postColors(legoColorSave) {
        fetch("http://localhost:8088/colors",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoColorSave)
        })
    }
}


//this is to delete
// deleteLego(legoId){
//     fetch(`http://localhost:8088/legos/${legoId}`, {
//     method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(legoToSave)
//     })
// }
// date.deleteLego(2);