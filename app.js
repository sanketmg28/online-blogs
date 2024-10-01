// get the blog post list element
const blogPostList = document.getElementById('blog-post-list');

// get the new post form element
const newPostForm = document.getElementById('new-post-form');

// get the submit post button element
const submitPostButton = document.getElementById('submit-post');

//define an array to store the blog posts
let blogPosts = [];

// Function to fetch blog posts from the server
function generateBlogPostHTML(post) {
    return `
        <li class="blog-post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </li>
    `;
}

// Function to add a new blog post to the list
function addBlogPost(post) {
    blogPosts.push(post);
    const blogPostHTML = generateBlogPostHTML(post);
    blogPostList.innerHTML += blogPostHTML;
}

// Function to submit a new blog post
function submitPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const post = { title, content };
}


