const data = {
    postLego(legoToSave) {
        fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
        })
    },

    getColors () {
        return fetch("http://localhost:8088/colors")
            .then(response => response.json())
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