const gotoPost = id => {
    location.assign(`/posts/${id}`);
  };
  const getPostForm = () => {
    location.assign(`/posts/add`);
  };
  const getPostEditForm = id => {
    location.assign(`/posts/update/${id}`);
  }