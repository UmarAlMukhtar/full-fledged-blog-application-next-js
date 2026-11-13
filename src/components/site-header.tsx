import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="The Margin home">
        the margin<span aria-hidden="true">.</span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        <Link href="/#latest">Stories</Link>
        <Link href="/#about">About</Link>
      </nav>
      <Link href="/#latest" className="issue-link">
        A journal for curious minds <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
