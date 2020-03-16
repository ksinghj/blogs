import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data});
}

export const fetchUsers = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USERS', payload: response.data});
}
