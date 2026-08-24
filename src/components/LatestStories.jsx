const LatestStories = () => {
  const stories = [
    {
      id: 1,
      title: "INSIDE THE STUDIO",
      date: "JUN 21, 2022",
      description:
        "All product imagery and descriptions belong to and have been graciously provided by Boskemper and are displayed for demonstration purposes only. You can buy their products on their online store...",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "MEET THE DESIGNER",
      date: "JUN 21, 2022",
      description:
        "All product imagery and descriptions belong to and have been graciously provided by Boskemper and are displayed for demonstration purposes only. You can buy their products on their online store...",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-16 lg:px-24 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        {/* رأس السكشن: العنوان وزرار عرض الكل */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase font-mono mb-4">
            LATEST STORIES
          </h2>
          <button className="border border-neutral-900 px-6 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-900 hover:text-white transition duration-300">
            VIEW ALL POSTS
          </button>
        </div>

        {/* شبكة القصص بأبعاد مطابقة لفيجما */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative flex flex-col group cursor-pointer"
            >
              {/* صورة الكارد بمقاس ثابت وعرض كامل */}
              <div className="w-full h-90 md:h-100 overflow-hidden bg-neutral-200 z-0">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* صندوق النص المتداخل بعرض ونسبة تداخل مطابقة للتصميم */}
              <div className="w-[88%] sm:w-[80%] bg-white border border-neutral-300 p-7 md:p-9 relative z-10 -mt-24 sm:-mt-28 ml-auto shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-xl md:text-2xl font-light tracking-widest uppercase font-mono text-neutral-900">
                    {story.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 block pb-1">
                    {story.date}
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed font-agency line-clamp-4">
                    {story.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold tracking-widest uppercase underline underline-offset-4 hover:text-neutral-600 transition">
                    Read more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestStories;
