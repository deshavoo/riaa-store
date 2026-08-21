const Marquee = () => {
  return (
    <div className="w-full bg-black text-[#d7cea0] py-6 overflow-hidden border-t border-gray-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* بنكرر المحتوى عشان ميبانش فيه فراغ في الحركة */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center text-xl font-agency uppercase tracking-widest px-4"
          >
            <span>Shop The Sale</span>
            <span className="mx-8 text-[#d7cea0]">♦</span>
            <span>End Of Season Sale</span>
            <span className="mx-8 text-[#d7cea0]">♦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
