function clickAlert() {
    alert('I was clicked!');
}
const input = document.getElementById('button');

function addingEventListener() {
    return input.addEventListener('click', clickAlert);
}


