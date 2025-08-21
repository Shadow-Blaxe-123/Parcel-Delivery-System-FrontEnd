import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-background">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              <strong className="text-primary"> Welcome to Swift </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Your go to platform for all your parcel delivery needs in
              Bangladesh.
            </p>
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Want to send a parcel? We got you covered.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <Link
                to={"/register"}
                className="inline-block rounded border border-primary bg-primary/80 px-5 py-3 font-medium text-foreground shadow-sm transition-colors hover:bg-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
