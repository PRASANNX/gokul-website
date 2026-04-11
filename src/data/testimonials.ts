export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Bhopal, MP",
    rating: 5,
    review:
      "The Indori sev is absolutely authentic — takes me straight back to my childhood. We order every month now. The packaging is also very neat and arrives fresh!",
    date: "March 2025",
  },
  {
    id: "t2",
    name: "Rohit Agarwal",
    location: "Mumbai, MH",
    rating: 5,
    review:
      "Ordered the Diwali gift hampers for our entire office — 45 boxes! The quality was outstanding and delivery was on time. Everyone loved it. Highly recommended for bulk gifting.",
    date: "November 2024",
  },
  {
    id: "t3",
    name: "Sunita Mehta",
    location: "Indore, MP",
    rating: 5,
    review:
      "Gokul's rawa ladoo is unmatched in the city. We've been buying from them for over 15 years. Pure ingredients, no shortcuts. A true family tradition!",
    date: "February 2025",
  },
  {
    id: "t4",
    name: "Karan Joshi",
    location: "Pune, MH",
    rating: 4,
    review:
      "Discovered Gokul Namkeen through a friend and now it's a staple. The mixture has the perfect spice level. Would love more variety in the sweet range.",
    date: "January 2025",
  },
  {
    id: "t5",
    name: "Anita Verma",
    location: "Delhi, DL",
    rating: 5,
    review:
      "Sent a gift pack to my family in Indore — they were thrilled! The online ordering experience was smooth and WhatsApp support was super quick. Will order again!",
    date: "December 2024",
  },
];
