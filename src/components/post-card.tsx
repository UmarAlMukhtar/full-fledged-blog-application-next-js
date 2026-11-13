import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  const date = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(post.publishedAt));

  return (
    <article className="post-card">
      <Link className="post-image-link" href={`/posts/${post.slug}`}>
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span className="image-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="post-card-copy">
        <div className="post-meta">
          <span>{post.category}</span>
          <time dateTime={post.publishedAt}>{date}</time>
        </div>
        <h3><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <span className="byline">By {post.author}</span>
      </div>
    </article>
  );
}
