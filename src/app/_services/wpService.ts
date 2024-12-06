export async function wpGetPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/posts`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
}

export async function wpGetPostsByCategory(categoryId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/posts?_embed&categories=${categoryId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
}

export async function wpGetPostsBySlug(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
}
