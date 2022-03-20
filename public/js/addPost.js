const postForm = document.getElementById('add-post-form');
const titleInput = document.getElementById('title-text');
const contentInput = document.getElementById('content-text');

const addPost = async event => {
  event.preventDefault();

  try {
    const title = titleInput.value;
    const content = contentInput.value;

    const response = await fetch('/posts/add', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ title, content })
    });

    if(response.ok) {
      location.assign('/dashboard');
    }

  } catch (err) {console.log(err)}
};

postForm.addEventListener('submit', addPost);