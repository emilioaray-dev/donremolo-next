// pages/posts/[id].js

function Post({ listaPizza }) {
  // Render listaPizza...
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((listaPizza) => ({
    params: { id: listaPizza.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the listaPizza `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const listaPizza = await res.json()

  // Pass listaPizza data to the page via props
  return { props: { listaPizza } }
}

export default Post