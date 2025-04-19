const fetcher = (url: string, postData: any) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  }).then((res) => res.json());

export default fetcher;
