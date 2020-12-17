const ItemList = ({ post }) => {
  return (
    <div className="item-list w-full mb-4 border-b border-gray-200 dark:border-gray-600 hover:bg-cyan-100 hover:border-cyan-100 cursor-pointer dark:hover:bg-gray-900 dark:hover:border-gray-900 hover:rounded-lg lg:px-4 pt-2">
      <h3 className="text-gray-800 font-semibold text-xl dark:text-white">
        {post.title}
      </h3>
      <div className="flex justify-between flex-col lg:flex-row mb-2">
        <p className="text-gray-600 dark:text-gray-400">{post.subtitle}</p>
        <span className="text-gray-600 dark:text-gray-400">
          {post.createdAt}
        </span>
      </div>
    </div>
  );
};

export default ItemList;
