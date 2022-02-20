export type FaunaFetcher = {
  [x: string]: any;
};
export default function fetcher(
  action: string,
  { name, email, website, message }: FaunaFetcher
) {
  fetch(action, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      website: website,
      email: email,
      message: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        res.json();
      } else {
        Promise.reject(res).catch(() => false);
      }
    })
    .catch((data) => console.log(data));
}
