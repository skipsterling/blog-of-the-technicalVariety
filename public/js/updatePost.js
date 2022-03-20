const updateForm = document.getElementById('update-post-form');
const deleteBtn = document.getElementById('delete-btn');

const updatePost = async event => {
  event.preventDefault();

  const id = location.pathname.split('/')[3];
  const title = document.getElementById('title-text').value;
  const content = document.getElementById('content-text').value;

  try {
    const response = await fetch(`/posts/update/${id}`, {
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ id, title, content })
    });

    if(response.ok) {
      location.assign('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async event => {
  event.preventDefault();

  const id = location.pathname.split('/')[3];

  try {

    const response = await fetch(`/posts/delete/${id}`, {
      method: 'DELETE',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ id })
    });

    if(response.ok) {
      location.assign('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

updateForm.addEventListener('submit', updatePost);
deleteBtn.addEventListener('click', deletePost);