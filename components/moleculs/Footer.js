import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:mt-44 mt-32 bg-gradient-to-br from-cyan-200 to-cyan-100 lg:pb-10 pb-8 dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-5 ">
        <div className="text-center py-12">
          <h1 className="text-3xl font-semibold  text-gray-800 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-gray-500 dark:text-gray-300 lg:px-44 text-lg my-4">
            Feel free to email me about anything. Want some advice? Give some
            feedback? You can also reach me around the web: GitHub, Twitter,
            Instagram
          </p>
          <button className="px-14 mt-4 rounded-lg py-3 bg-gradient-to-bl from-cyan-500 to-teal-400 text-2xl text-white dark:text-gray-800 hover:bg-gradient-to-bl hover:from-cyan-600 hover:to-teal-500">
            Say Hello
          </button>
        </div>
        <div className="mt-10">
          <div className="w-full lg:flex justify-end items-center hidden">
            <Link href="/">
              <a className="mr-4 text-gray-500 dark:text-gray-300 text-lg hover:underline hover:opacity-50">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a className="mr-4 text-gray-500 dark:text-gray-300 text-lg hover:underline hover:opacity-50">
                Blog
              </a>
            </Link>
            <Link href="/projects">
              <a className="mr-4 text-gray-500 dark:text-gray-300 text-lg hover:underline hover:opacity-50">
                Projects
              </a>
            </Link>
            <Link href="/about">
              <a className="mr-4 text-gray-500 dark:text-gray-300 text-lg hover:underline hover:opacity-50">
                About
              </a>
            </Link>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-300 lg:mt-0 mt-2">
              &copy; 2020 Rangdra Pangestu. All Rights Reserved.
            </span>
            <div className="flex">
              <a href="#" className="mr-4">
                <Image src="/email.svg" width={32} height={32} />
              </a>
              <a
                href="https://github.com/rangdra"
                target="_blank"
                className="mr-4"
              >
                <Image src="/github.svg" width={32} height={32} />
              </a>
              <a href="#" className="mr-4">
                <Image src="/twitter.svg" width={32} height={32} />
              </a>
              <a href="#" className="mr-4">
                <Image src="/instagram.svg" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
