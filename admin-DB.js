function subscribers(array){
    let html_code = ""
    for(i= 0 ; i < array.length; i++ ){
        html_code += `<li>${array[i]}</li>`
    }
    return html_code
}

const subscriptionsString = localStorage.getItem("subscriptions");
const subscriber_List = JSON.parse(subscriptionsString)


document.getElementById("newsletter-list").innerHTML = subscribers(subscriber_List)


