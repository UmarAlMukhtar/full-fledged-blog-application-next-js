import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-wrap not-found-page">
      <p className="eyebrow">404 <span>·</span> Page not found</p>
      <h1>That story<br /><em>isn’t here.</em></h1>
      <p>It may have moved on. There are plenty more good things to read.</p>
      <Link className="text-link" href="/#latest">Explore the journal <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
