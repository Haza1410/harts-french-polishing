import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="grain flex min-h-[80vh] items-center bg-espresso">
      <div className="container-page text-center">
        <p className="font-serif text-7xl text-brass sm:text-8xl">404</p>
        <h1 className="mt-4 !text-ivory text-4xl sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ivory/70">
          Sorry, we couldn&rsquo;t find the page you were looking for. Let&rsquo;s
          get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="light" withArrow>
            Back to home
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            className="!text-ivory border border-ivory/30 hover:bg-ivory/10"
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
