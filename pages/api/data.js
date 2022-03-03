import axios from 'axios'

const projects = [
  'facebook/flipper', 'vuejs/vuepress', 'rust-lang/rust', 'vercel/next.js'
]

export default function api(req, res) {
  if (req.query.id) {
    // a slow endpoint for getting repo data
    axios(`https://donremolo-next.vercel.app/api/dataAll`)
    .then(resp => resp.data)
    .then(data => {
      setTimeout(() => {
        res.json(data)
      }, 2000)
    })
    return
  }
  setTimeout(() => {
    res.json(projects)
  }, 2000)
} 