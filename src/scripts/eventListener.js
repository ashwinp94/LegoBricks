const eventListeners = {
    //handleformsubmission is a key for the function
    handleFormSubmission() {
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const shape = document.querySelector("#lego__shape").value;
        const color = document.querySelector("#lego__color").value;

        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoShape: shape,
        }
        const legoObjectColor = {
            legoColor: color,
        }
        data.postLego(legoObject);
        dataColors.postColors(legoObjectColor);
        console.log(legoObjectColor);
    }
};


