"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "@/lib/posts";
import { PostList } from "@/components/post-list";

const postsKey = ["posts"];

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("/api/posts");
  if (!response.ok) throw new Error("Could not load stories");
  return response.json();
}

export function PostSearch() {
  const [search, setSearch] = useState("");
  const { data: posts = [] } = useQuery({
    queryKey: postsKey,
    queryFn: fetchPosts,
    staleTime: 60_000,
  });
  const query = search.trim().toLowerCase();
  const filteredPosts = useMemo(
    () => posts.filter((post) =>
      [post.title, post.excerpt, post.author, post.category]
        .some((value) => value.toLowerCase().includes(query)),
    ),
    [posts, query],
  );
  const featured = !query ? filteredPosts[0] : undefined;
  const remainingPosts = featured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <section className="stories-section" id="latest" aria-labelledby="stories-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The latest</p>
          <h2 id="stories-title">Stories to stay with you.</h2>
        </div>
        <label className="search-box">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.2 4.2" />
          </svg>
          <span className="sr-only">Search stories</span>
          <input
            type="search"
            placeholder="Search stories…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <kbd aria-hidden="true">⌕</kbd>
        </label>
      </div>

      {featured && !query && (
        <article className="featured-story">
          <Link className="featured-image" href={`/posts/${featured.slug}`}>
            <Image
              src={featured.coverImage}
              alt={featured.coverImageAlt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
            />
            <span className="featured-image-label">Editor’s pick</span>
          </Link>
          <div className="featured-copy">
            <p className="eyebrow">{featured.category} <span>·</span> Featured story</p>
            <h3><Link href={`/posts/${featured.slug}`}>{featured.title}</Link></h3>
            <p className="featured-excerpt">{featured.excerpt}</p>
            <p className="featured-byline">Words by {featured.author}</p>
            <Link className="text-link" href={`/posts/${featured.slug}`}>
              Read the story <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      )}

      <div className="results-heading" aria-live="polite">
        <h3>{query ? "Search results" : "More to explore"}</h3>
        <span>{query ? `${filteredPosts.length} ${filteredPosts.length === 1 ? "story" : "stories"}` : "Take your time"}</span>
      </div>
      <PostList posts={remainingPosts} />
    </section>
  );
}
