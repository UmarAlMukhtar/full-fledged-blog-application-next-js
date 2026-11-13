import type { Post } from "@/lib/posts";

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;

export const seedPosts: Post[] = [
  {
    slug: "what-we-keep-when-the-noise-fades",
    title: "What we keep when the noise fades",
    excerpt: "A quieter internet starts with the things we choose to notice.",
    content:
      `The internet used to feel like a place you visited. Now it follows us from room to room, asking for a little attention each time we unlock a screen. The answer is not to disappear. It is to be more deliberate about what gets to stay.

Small rituals help. Read one thing all the way through. Keep a list of links you actually want to return to. Let a conversation finish before reaching for another tab. None of these gestures are dramatic, and that is their strength: they make attention feel like something we can practice again.

When the noise fades, there is more room for curiosity. We can follow an idea past the headline, remember the shape of a day, and make something without measuring it against everything else. A quieter internet begins with one open space.`,
    author: "Maya Chen",
    publishedAt: "2026-11-12T09:00:00.000Z",
    coverImage: image("photo-1470770841072-f978cf4d019e"),
    coverImageAlt: "A still lake reflecting the mountains at sunrise",
    category: "Culture",
  },
  {
    slug: "a-slower-way-to-build",
    title: "A slower way to build",
    excerpt: "Good tools leave space for thought, craft, and a useful pause.",
    content:
      `Speed is easy to measure. A project starts on Monday, ships on Friday, and the calendar gives us a neat story about progress. The harder question is whether the thing we shipped made the next day any better for the people using it.

Slower work is not the same as endless work. It means choosing a small number of promises and giving them enough time to become real. It means making room for the sentence that does not fit, the rough edge someone notices, and the quiet repair that keeps a tool dependable.

The best tools do not demand that we admire them. They help us do the work, then get out of the way. Building that kind of tool takes patience, and patience is still a practical skill.`,
    author: "Dev Patel",
    publishedAt: "2026-11-10T09:00:00.000Z",
    coverImage: image("photo-1497366216548-37526070297c"),
    coverImageAlt: "A sunlit studio with a long shared work table",
    category: "Technology",
  },
  {
    slug: "rooms-that-make-room",
    title: "Rooms that make room",
    excerpt: "The most generous spaces are shaped around how people really live.",
    content:
      `A room can be beautiful and still ask too much of us. The chair is precious, the table is too narrow, and the good light lands just out of reach. A generous room begins with a more ordinary question: what happens here, on a Tuesday?

Designers often talk about objects, but the spaces we love are made from relationships. A lamp puts light where a book is read. A shelf leaves a little room for the next thing. A window makes the afternoon visible even when we are busy.

When we begin with the rhythms of a life, decoration becomes less about filling space and more about making space. The result is not always dramatic. It is usually better to live in.`,
    author: "Elena Rossi",
    publishedAt: "2026-11-08T09:00:00.000Z",
    coverImage: image("photo-1497366754035-f200968a6e72"),
    coverImageAlt: "A calm workspace arranged beside a large bright window",
    category: "Design",
  },
  {
    slug: "the-case-for-a-second-draft",
    title: "The case for a second draft",
    excerpt: "A first attempt gets the thought onto the page. The next one lets it breathe.",
    content:
      `The first draft is a place to put the thought before it vanishes. It can be clumsy. It can contradict itself. It only needs to exist long enough for us to see what we meant.

The second draft has a different job. It asks which parts are carrying the idea and which parts are only carrying the weight of our first attempt. Often the most useful edit is a subtraction: a paragraph we liked, a clever phrase, an explanation the reader no longer needs.

Writing gets clearer when we stop asking every sentence to be impressive. We can let one sentence lead to another, and trust that a small, honest idea has its own momentum.`,
    author: "Sam Okafor",
    publishedAt: "2026-11-05T09:00:00.000Z",
    coverImage: image("photo-1455390582262-044cdead277a"),
    coverImageAlt: "An open notebook and pen on a wooden desk",
    category: "Writing",
  },
  {
    slug: "learning-to-notice-small-things",
    title: "Learning to notice small things",
    excerpt: "Attention grows when we give ordinary moments a second look.",
    content:
      `Most days are made of details we do not think to save: the sound of rain on the bus shelter, a neighbour carrying home too many flowers, the way the kitchen changes colour at five o'clock.

Noticing does not require a notebook or a perfect morning routine. It asks us to pause long enough for the world to become specific again. A walk becomes a collection of small observations instead of a gap between two appointments.

We do not need to turn every moment into a lesson. Sometimes it is enough to see it clearly. That is a modest kind of attention, and it makes a day feel more like our own.`,
    author: "Nia Williams",
    publishedAt: "2026-11-02T09:00:00.000Z",
    coverImage: image("photo-1500530855697-b586d89ba3ee"),
    coverImageAlt: "A quiet path winding through a green landscape",
    category: "Living",
  },
  {
    slug: "tools-should-get-out-of-the-way",
    title: "Tools should get out of the way",
    excerpt: "The most thoughtful interface is sometimes the one we barely notice.",
    content:
      `A good interface tells us what we can do without asking to become the subject of the experience. It gives the important action enough room, makes the next step legible, and leaves the rest quiet.

That restraint takes work. Every option carries a cost. Every label is a small promise about what will happen next. The designer's job is not to hide complexity from people who need it, but to keep the routine path from feeling like a puzzle.

When a tool gets out of the way, it gives us something rare: the feeling that the work belongs to us. That is a useful measure of good design.`,
    author: "Leo Martin",
    publishedAt: "2026-10-29T09:00:00.000Z",
    coverImage: image("photo-1497366811353-6870744d04b2"),
    coverImageAlt: "A tidy desk with a notebook and a warm pool of light",
    category: "Design",
  },
];
