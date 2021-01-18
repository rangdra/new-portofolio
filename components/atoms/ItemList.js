import Link from "next/link";

const ItemList = ({ post }) => {
  return (
    <div className="item-list w-full mb-4 hover:bg-cyan-100  cursor-pointer dark:hover:bg-gray-900 pt-2 pl-2">
      <Link href={`${post.link}`}>
        <a className="text-gray-800 font-semibold text-xl dark:text-white">
          {post.title}
        </a>
      </Link>
      <div className="flex justify-between flex-col lg:flex-row mb-2">
        <p className="text-gray-600 dark:text-gray-400 text-item-list">
          {post.subtitle}
        </p>
        <span className="text-gray-600 dark:text-gray-400">
          {post.createdAt}
        </span>
      </div>
      <div id="borderB"></div>
    </div>
  );
};

export default ItemList;
