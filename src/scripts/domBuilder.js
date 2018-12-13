const domBuilder = {
    appendInputForm () {
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
        <label for="lego__color">Color:</label>
        <select id="lego__color">
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="3">Yellow</option>
            <option value="4">Blue</option>
            <option value="5">Orange</option>
            <option value="6">Black</option>
        </select>
        </fieldset>
        <button class="btn lego__save">Save Lego Creation</button>
        </article>`

    let displayContainer = document.querySelector("#display-container");
    displayContainer.innerHTML = inputForm;
    }
}
//not using innerhtml: let newButton = document.createElement("button");
//to create class to button: newButton.classList.add("aClass");
//append it: newbutton.addEventListener("click", eventListener.handleFromSubmission); - this is the eventlistener in the eventlistner.js file
//displayContainer.appendChild(newButton);