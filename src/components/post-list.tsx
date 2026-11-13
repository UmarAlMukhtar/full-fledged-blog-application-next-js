import { PostCard } from "@/components/post-card";
import type { Post } from "@/lib/posts";

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p className="empty-state" role="status">
        No stories found. Try another search.
      </p>
    );
  }

  return (
    <div className="post-grid">
      {posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </div>
  );
}
