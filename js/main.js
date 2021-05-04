const contact_details = document.getElementsByClassName("contact-details")[0]
const employment_history = document.getElementsByClassName("employment-history")[0]
const offset = contact_details.offsetTop 
const circle = document.getElementsByClassName("circle")[0]

window.onscroll = function(event){
    if (window.pageYOffset >= offset){
        contact_details.style.position = "fixed";
        employment_history.style.paddingTop = `${contact_details.offsetHeight}px`
        circle.style.width = "6rem"
        circle.style.height = "6rem"
        circle.style.backgroundSize = "7rem"
    }
    else if (window.pageYOffset <= offset){
        circle.style.width = "12rem"
        circle.style.height = "12rem"
        circle.style.backgroundSize = "13rem"
        employment_history.style.padding = '2rem 0'
        contact_details.style.position = "unset";
    }
}