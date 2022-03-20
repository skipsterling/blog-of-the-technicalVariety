const form = document.getElementById('comment-form');

const addComment = async event => {
  event.preventDefault();
  const errorDiv = document.getElementById('comment-error');
  const commentInput = document.getElementById('comment');
  const post = window.location.pathname.split('/')[2];
  const comment = commentInput.value;
  try {
    const response = await fetch('/comment/add', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({ comment, post }),
    });

    if (response.ok) {
      commentInput.value = "";
      window.location.reload();
    } else if (response.status === 302) {
      location.assign('/login');
    } else {
      const res = await response.json();
      if(res.error) {
        errorDiv.classList.remove('hidden');
      }
      console.log('could not add comment');
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', addComment);