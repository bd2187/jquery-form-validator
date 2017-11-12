/*
* Function validates form
*
* @param formId-- This should be the id of the form. e.g. "bio"
*
* @return
*/
function validateForm(formId) {
  // Select DOM elements
  var formEl = $("#" + formId);
  var inputEls = $("#" + formId).find("input");
  var errorEl = $(".error");

  formEl.on("submit", function(evt) {
    evt.preventDefault();
    var formErrors = [];

    // Iterate over input fields and add incomplete fields to formErrors array
    for (var i = 0; i < inputEls.length; i++) {
      var inputValue = inputEls[i].value.trim();
      var inputType = inputEls[i].getAttribute("type");

      if (inputType === "text" && inputValue === "") {
        formErrors.push(inputEls[i].getAttribute("placeholder"));
      } else if (inputType === "tel" && inputValue === "") {
        formErrors.push(inputEls[i].getAttribute("placeholder"));
      }
    }

    console.log(formErrors);

    // If the formErrors array is empty, submit the form, otherwise, display error message
    if (formErrors.length === 0) {
      console.log("form complete");
      // Use DOM node to event jquery handler loop
      formEl[0].submit();
    } else {
      errorEl.css("display", "block");
      console.log("form incomplete");
    }
  });
}

validateForm("bio");
