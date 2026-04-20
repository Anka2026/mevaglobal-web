import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]">
        NOT FOUND
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-3xl">
        This page could not be found.
      </h1>
      <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
        Please return to the homepage.
      </p>
      <Link
        href="/en"
        className="mt-7 inline-flex h-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--brand-primary-hover)]"
      >
        Go to Home
      </Link>
    </div>
  );
}

