import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
}
