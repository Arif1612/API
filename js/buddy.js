const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy.name.first);
        const para = document.createElement('p');
        para.innerText = `
        Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}
    `
        buddiesDiv.appendChild(para);
    }
}