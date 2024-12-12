async function loadPosts() {
    try {
        const response = await fetch('posts/posts.json');
        const posts = await response.json();
        
        // Sort posts by date (most recent first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        const postsContainer = document.getElementById('posts-container');
        
        posts.forEach(post => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `posts/${post.filename}`;
            a.textContent = post.title;
            li.appendChild(a);
            postsContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadPosts);