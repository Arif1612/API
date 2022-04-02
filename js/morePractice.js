const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

const displayPosts = (posts) => {
    const showPost = document.getElementById('post');

    posts.forEach(post => {

        const div = document.createElement('div');
        div.classList.add('postStyle');
        div.innerHTML = `
        <h3> user Id: ${post.userId} </h3>
        <h4> ID: ${post.id} </h4>
        <br>
        <br>
        <button onclick="loadPostByID('${post.id} ')"> Details</button>
     `;
        showPost.appendChild(div);

    })
}

const loadPostByID = id => {

    displayIDDetail(id);

}

const displayIDDetail = id => {


    const chooseDiv = document.getElementById
        ('choose');
    const giveId = document.createElement('p');
    giveId.innerHTML = `
         <h3> ${id} </h3>
     `;


    chooseDiv.appendChild(giveId);


}