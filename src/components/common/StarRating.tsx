import { StarRatingProps } from "./StarRating";

export default function StarRating({ rating, count, showCount = true }: StarRatingProps) {
  return (
    <div className="flex items-center gap-[6px]">
      <div className="inline-flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-[16px] leading-none ${
              star <= Math.round(rating) ? "text-brand-saffron" : "text-[#D1C4A8]"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      {showCount && (
        <div className="flex items-center gap-[4px] mt-[1px]">
          <span className="font-sans text-[13px] font-semibold text-brand-dark leading-none">
            {rating}
          </span>
          <span className="font-sans text-[12px] text-brand-brown-light leading-none">
            ({count})
          </span>
        </div>
      )}
    </div>
  );
}
