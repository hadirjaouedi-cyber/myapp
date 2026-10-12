export default async function PostDetails({ postId }) {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revalidate: 120,
    },
  });
  const post= await response.json();
  console.log('Post ID:', postId);

  return (
    <div >

      <div style={{
            width: "100vw",
            backgroundColor: "teal",
            padding: "10px",
            borderRadius: "15px",
            marginTop: "20px",
            color: "black",
          }}>
        <h1  >{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}