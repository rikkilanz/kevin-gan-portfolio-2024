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

export async function wpGetPostsByCategory(
  categoryId: number,
  limit: number = 5,
  page: number = 1
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/posts?_embed&categories=${categoryId}&per_page=${limit}&orderby=date&page=${page}`
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    // Get pagination metadata from headers
    const totalPages = parseInt(
      response.headers.get("X-WP-TotalPages") || "0",
      10
    );

    // Parse the posts data
    const posts = await response.json();

    // Return both posts and pagination metadata
    return { posts, totalPages };
  } catch (error) {
    console.error("Error fetching posts:", error);
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

export async function wpGetTagById(tagId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/tags/${tagId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch tags");
  }
}
