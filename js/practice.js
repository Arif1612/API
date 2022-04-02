const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

const displayPosts = posts => {
    // console.log(data);
    const divPost = document.getElementById('shownPost');
    for (const post of posts) {
        const displayPara = document.createElement('p');
        displayPara.innerHTML = `
        userId: ${post.userId} id: ${post.id} title: ${post.title} body: ${post.body}
       `
        divPost.appendChild(displayPara);
        console.log(post);

    }
}