export const selectPosts = (state) => state.posts.items;

export const selectPostsStatus = (state) => state.posts.status;

export const selectPostsError = (state) => state.posts.error;

export const selectTotalEngagement = (state) =>
  state.posts.items.reduce((total, post) => {
    return total + post.id;
  }, 0);

export const selectPlatformAnalytics = (state) => {
  const posts = state.posts.items;

  return {
    totalPosts: posts.length,
    totalEngagement: posts.reduce((total, post) => total + post.id, 0),
  };
};