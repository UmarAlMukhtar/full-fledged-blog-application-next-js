import { getPost } from "@/lib/posts";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = await getPost(slug);

  return post
    ? Response.json(post)
    : Response.json({ error: "Post not found" }, { status: 404 });
}
