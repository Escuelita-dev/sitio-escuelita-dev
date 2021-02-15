import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://ghost.escuelita.dev',
    key: '111f68823250f45092ea8d720a',
    version: "v3"
  });

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }