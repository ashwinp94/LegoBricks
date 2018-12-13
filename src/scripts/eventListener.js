const eventListeners = {
    //handleformsubmission is a key for the function
    handleFormSubmission() {
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const color = document.querySelector("#lego__color").value;
        const shape = document.querySelector("#lego__shape").value;

        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            legoShape: shape,
        }
    //post to API and pass lego
    data.postLego(legoObject);
    }
};