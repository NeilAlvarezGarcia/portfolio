import Link from "next/link";

const custom404 = () => (
  <div
    className="container d-flex align-items-center justify-content-center"
    style={{ height: "100vh" }}
  >
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        This page does not exists. Please return to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  </div>
);

export default custom404;
