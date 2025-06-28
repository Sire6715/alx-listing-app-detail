import Image from "next/image";
import { icons } from "@/constants";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="mt-5 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-2">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex items-center">
              <Image
                src={review.avatar}
                alt={review.name}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-black text-[23.27px]">
                  {review.name}
                </p>
                <div className="flex gap-0.4">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <Image
                      src={icons.star}
                      alt={icons.star}
                      height={16}
                      width={16}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-black text-[17.06px] md:text-[14px] font-medium md:font-light mt-4">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
