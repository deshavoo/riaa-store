const BrandStory = () => {
  return (
    <section className="w-full bg-[#EAEAEA] py-20 px-6 md:px-16 lg:px-24 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-start space-y-8 max-w-xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase font-mono leading-relaxed">
            A FEMALE OWNED & RUN BASED IN MELBOURNE, THE ESSENCE TRAVEL &
            CELEBRATING THE DIVERSITY OF WOMEN THOUGHUT THE WORLD.
          </h2>
          <button className="border border-neutral-900 px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-900 hover:text-white transition duration-300 rounded-lg">
            LEARN MORE
          </button>
        </div>

        <div className="w-full h-112.5 md:h-137.5 overflow-hidden bg-neutral-300 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
            alt="Brand Story Team"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
