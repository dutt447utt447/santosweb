import PageHero from "../components/PageHero.jsx";
import { Link } from "../lib/router.jsx";

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page Not Found"
        title="This page is not available"
        description="The requested SAMBHAV page could not be found. Return to the homepage or use the navigation above."
      >
        <Link className="button button--primary" to="/">
          Back to Home
        </Link>
      </PageHero>
    </>
  );
}
