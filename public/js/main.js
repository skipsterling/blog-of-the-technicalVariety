const logout = async () => {
    const response = await fetch('/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
      document.location.assign('/');
    } else {
      console.log('error when logging out');
    }
  }