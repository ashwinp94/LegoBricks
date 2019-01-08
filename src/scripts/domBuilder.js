const domBuilder = {
    appendInputForm () {
            let optionSelect = "";
            data.getColors()
            .then(parsedColors => {
                parsedColors.forEach(color => {
                    optionSelect += `<option value="${color.color}">${color.color}</option>`
                    console.log(color.color)
                    return optionSelect;
                })
           let inputForm = `<article>
        <fieldset>
        <label for="lego__creator">Creator:</label>
        <input id="lego__creator" name="lego__creator" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__name">Name:</label>
        <input id="lego__name" name="lego__name" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__shape">Shape:</label>
        <input id="lego__shape" name="lego__shape" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__color">Colors:</label>
        <select id="lego__color">${optionSelect}</select>
        </fieldset>
        <button class="btn lego__save">Save Lego Creation</button>
        </article>`

    let displayContainer = document.querySelector("#display-container");
    displayContainer.innerHTML = inputForm;
    let saveButton = document.querySelector(".lego__save")
    saveButton.addEventListener("click", eventListeners.handleFormSubmission)
        })
    }
}
//not using innerhtml: let newButton = document.createElement("button");
//to create class to button: newButton.classList.add("aClass");
//append it: newbutton.addEventListener("click", eventListener.handleFromSubmission); - this is the eventlistener in the eventlistner.js file
//displayContainer.appendChild(newButton);