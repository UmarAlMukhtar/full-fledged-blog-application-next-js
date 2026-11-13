import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export function ArticleContent({ post }: { post: Post }) {
  const date = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(post.publishedAt));
  const paragraphs = post.content.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);

  return (
    <main className="page-wrap article-main">
      <nav className="article-breadcrumb" aria-label="Breadcrumb">
        <Link href="/#latest">All stories</Link>
        <span aria-hidden="true">/</span>
        <span>{post.category}</span>
      </nav>

      <article>
        <header className="article-header">
          <p className="eyebrow">{post.category} <span>·</span> {date}</p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <p className="article-author">Words by <strong>{post.author}</strong></p>
        </header>

        <figure className="article-cover">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 1280px"
          />
        </figure>

        <div className="article-body">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <div className="article-endmark" aria-hidden="true">✳</div>
          <Link className="text-link" href="/#latest">Back to all stories <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
    </main>
  );
}
