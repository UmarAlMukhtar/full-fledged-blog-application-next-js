import "server-only";

import { seedPosts } from "@/data/posts";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  coverImageAlt: string;
  category: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" && value.trim().length > 0 && value.length <= maxLength
    ? value.trim()
    : null;

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const fallbackImage = seedPosts[0].coverImage;

function parsePost(value: unknown): Post | null {
  if (!isRecord(value)) return null;

  const slug = text(value.slug, 80);
  const title = text(value.title, 160);
  const publishedAt = text(value.publishedAt, 40);
  if (!slug || !slugPattern.test(slug) || !title || !publishedAt) return null;

  const date = new Date(publishedAt);
  if (Number.isNaN(date.getTime())) return null;

  const rawContent = text(value.content, 12_000);
  const rawExcerpt = text(value.excerpt, 240);
  const content = rawContent ?? rawExcerpt ?? title;
  const excerpt = rawExcerpt ?? content.split("\n")[0].slice(0, 180);
  let coverImage = fallbackImage;

  try {
    const url = new URL(String(value.coverImage ?? ""));
    if (url.protocol === "https:" && url.hostname === "images.unsplash.com") {
      coverImage = url.toString();
    }
  } catch {
    // A missing or unsupported image uses the bundled seed image.
  }

  return {
    slug,
    title,
    excerpt,
    content,
    author: text(value.author, 80) ?? "The Margin",
    publishedAt: date.toISOString(),
    coverImage,
    coverImageAlt: text(value.coverImageAlt, 240) ?? title,
    category: text(value.category, 40) ?? "Journal",
  };
}

function parsePosts(value: unknown): Post[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 100) return null;

  const posts = value.map(parsePost);
  if (posts.some((post) => post === null)) return null;

  const validPosts = posts as Post[];
  return new Set(validPosts.map((post) => post.slug)).size === validPosts.length
    ? validPosts
    : null;
}

export async function getPosts(): Promise<Post[]> {
  const endpoint = process.env.MOCK_API_URL;
  if (!endpoint) return seedPosts;

  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || url.username || url.password) return seedPosts;

    const response = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(5_000),
    });
    if (!response.ok) return seedPosts;

    return parsePosts(await response.json()) ?? seedPosts;
  } catch {
    return seedPosts;
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!slugPattern.test(slug)) return null;
  return (await getPosts()).find((post) => post.slug === slug) ?? null;
}
