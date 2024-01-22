let id = (id) => document.getElementById(id);

let errorClasses = (classes) => document.getElementsByClassName(classes);
let successIconClasses = (classes) => document.getElementsByClassName(classes);
let failureIconClasses = (classes) => document.getElementsByClassName(classes);

let namePerson = id("name"),
  nameCompany = id("nameCompany"),
  email = id("email"),
  phoneNumber = id("phoneNumber"),
  studentSelect = id("studentSelect"),
  form = id("form"),
  errorMs = errorClasses("error"),
  successIcon = successIconClasses("success-icon"),
  failureIcon = failureIconClasses("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = true;

  isFormValid = validate(namePerson, 0, "Ве молиме внесете име и презиме") && isFormValid;
  isFormValid = validate(nameCompany, 1, "Ве молиме внесете го името на вашата компанија") && isFormValid;
  isFormValid = validate(email, 2, "Ве молиме внесете ја вашата е-пошта") && isFormValid;
  isFormValid = validate(phoneNumber, 3, "Ве молиме внесете го вашиот телефонски број") && isFormValid;
  isFormValid = validate(studentSelect, 4, "Ве молиме изберете тип на студент") && isFormValid;

  if (isFormValid) {
    location.href = location.href;
  }
});

let validate = (id, serial, message) => {
  let errorMsgElement = errorMsg[serial];
  let failureIconElement = failureIcon[serial];
  let successIconElement = successIcon[serial];

  if (!id || id.value.trim() === "") {
    if (errorMsgElement) errorMsgElement.innerHTML = message;
    if (id) id.style.border = "2px solid #ff1300";
    if (failureIconElement) failureIconElement.style.opacity = "1";
    if (successIconElement) successIconElement.style.opacity = "0";
    return false;
  } else {
    if (errorMsgElement) errorMsgElement.innerHTML = "";
    if (id) id.style.border = "2px solid #52c41a";
    if (failureIconElement) failureIconElement.style.opacity = "0";
    if (successIconElement) successIconElement.style.opacity = "1";
    return true;
  }
};
