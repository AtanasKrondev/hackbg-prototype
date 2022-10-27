const API_URL = import.meta.env.PUBLIC_API_URL;

export async function fetchAPI(query = '') {
  const res = await fetch(`${API_URL}/${query}`);

  if (res.ok) {
    return res.json();
  } else {
    const error = await res.json();

    throw new Error(
      '❗ Failed to fetch API for ' +
        query +
        '\n' +
        'Code: ' +
        error.code +
        '\n' +
        'Message: ' +
        error.message +
        '\n'
    );
  }
}

export async function getArticles() {
  const data = await fetchAPI('posts/?per_page=50');

  return data;
}

export async function getFeaturedMedia(id: string) {
  const data = await fetchAPI(`media/${id}`);
  return data;
}

export async function getCategories(id: string) {
  const data = await fetchAPI(`categories?post=${id}`);
  return data;
}

export async function getTags(id: string) {
  const data = await fetchAPI(`tags?post=${id}`);
  return data;
}

export async function getAuthor(id: string) {
  const data = await fetchAPI(`users/${id}`);
  return data;
}
