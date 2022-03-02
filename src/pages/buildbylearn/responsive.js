/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Responsive() {
  return (
    <div className="overflow-hidden max-w-md mx-auto rounded-xl shadow-md bg-white border-2 border-red-200 md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/resp.jpeg"
            alt="res picture"
          />
        </div>

        <div className="p-8">
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case Study
            </div>
            <a
              href="#"
              className="font-medium text-black hover:underline block mt-2 text-lg leading-tight"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
