// 1. API ta fetch kore ansi 
const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
// array function show korer jonno hoy button create kore click korte hoito nahole function call kora lagto ami aikhane function call korse

loadPosts();

// api ar vitor ja kisu ase ta display korrer jonno aita kora hoise

//  2. display kora dynamic vabe
const displayPost = (posts) => {
    // display kon jaiga theke korbo tar jonno nao hoise
    const allPost = document.getElementById('post');
    // css a grid korer jonno akta class add korse
    allPost.classList.add('gridkoro');
    // akta array ar vitore sob obj akare chilo direct obj paoar jonno for each korse sadharon for loop aoo kora jaito

    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
        <p>   user id: ${post.userId}  </p>
        <p>id:${post.id} </p>
         <button  onclick = "loadDetails(${post.id})" >Details </button>

        `;
        // r akta class list add korse style korer jonno
        div.classList.add('postDiv')
        allPost.appendChild(div);
    })
}

// 3. url ta id onujai nia asa  dynamic vabe
const loadDetails = (id) => {

    // aikhkane id onujai posts ar sobkisu pabe
    const url = `
    https://jsonplaceholder.typicode.com/posts/${id}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))

}

// 4 aita abr show kora dynamic vabe
const showDetails = (posts) => {

    const showDetails = document.getElementById('show-details');
    const show = document.createElement('p');

    show.innerHTML = `
    <p>userId: ${posts.userId}</p>
    <h1>id: ${posts.id}</h1>
    <p>title: ${posts.title}</p>
    <p>body: ${posts.body.slice(0, 200)}</p>
    `
    showDetails.appendChild(show);




}

