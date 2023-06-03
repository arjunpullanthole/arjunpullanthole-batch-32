
var hobbies = [];

addHobbies = hobby => (hobbies.indexOf(hobby) == -1) ? hobbies.push(hobby): 0;
removeHobbies = hobby => (hobbies.indexOf(hobby) == -1) ? 0 : hobbies.splice(hobbies.indexOf(hobby), 1);

function updatePage()
{
    document.getElementById('display').innerHTML = hobbies;
    
}
function add()
{
    ret = document.getElementById('input').value;
    if (ret == '')
        return;
    addHobbies(ret);
    updatePage();
}
function remove()
{
    ret = document.getElementById('input').value;
    if (ret == '')
        return;
    removeHobbies(ret);
    updatePage();
}

var alloc = {
    hobby: ["hello","value"],
    name: "Arjun",
    class: "12"
}

console.log(Object.entries(alloc)[0][1]);