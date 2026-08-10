export type OwnerResponse = {
  time: string;
  text: string;
};

export type Review = {
  name: string;
  rating: number;
  time: string;
  text: string;
  meta?: string;
  localGuide?: boolean;
  ownerResponse?: OwnerResponse;
  avatarColor: string;
};

/** Google-style patient reviews shown on /reviews/. */
export const reviews: Review[] = [
  {
    name: "David Bristow",
    rating: 5,
    time: "a year ago",
    text: "It was quick, easy and I got the recommendation in minutes.",
    meta: "8 reviews",
    avatarColor: "#EA4335",
  },
  {
    name: "Kevin Stewart",
    rating: 5,
    time: "a year ago",
    text: "Quick easy and pain free.",
    meta: "3 reviews",
    avatarColor: "#4285F4",
  },
  {
    name: "tay dunahoo",
    rating: 5,
    time: "a year ago",
    text: "Super easy, great custom service! Highly recommend.",
    meta: "Local Guide · 12 reviews",
    localGuide: true,
    avatarColor: "#34A853",
  },
  {
    name: "Juan R Delgado II",
    rating: 5,
    time: "2 years ago",
    text: "I went to site chose document format, scheduled appt., and received consultation call within 2-3 minutes. Spent 5 min. on the interview, and had recommendation within minutes!",
    meta: "6 reviews · 2 photos",
    avatarColor: "#FBBC04",
  },
  {
    name: "larry daugherty",
    rating: 5,
    time: "2 years ago",
    text: "Quick and easy.",
    meta: "2 reviews",
    avatarColor: "#46BDC6",
  },
  {
    name: "James Madison",
    rating: 5,
    time: "6 years ago",
    text: 'I went to the Redbud Medical Marijuana Dispensary looking for a job, because they are one of the closest dispensaries to where I live. When you first walk in it smells delicious, even in the waiting room. Christy the manager is very cordial and knows the product line well. When I asked about a recommendation for my arthritis pain she said "CBD Dream" would be best because it is a 50% CBD 50% THC mix. They also carry my favorite flavor, "Girl Scout Cookie". They have everything you could want, flower, pre-rolls, edibles, cartridges and even have a small selection of pipes, bongs and papers. It is a convenient location on the South side of Hwy 240, and there is a convenience store right next door so you can get munchies too.',
    meta: "7 reviews · 1 photo",
    avatarColor: "#F538A0",
  },
  {
    name: "Sherri Cable",
    rating: 5,
    time: "a year ago",
    text: "I like the place it was nice",
    meta: "Local Guide · 17 reviews",
    localGuide: true,
    avatarColor: "#1A73E8",
  },
  {
    name: "Prem Sheskar",
    rating: 5,
    time: "2 years ago",
    text: "Very good",
    meta: "4 reviews · 6 photos",
    avatarColor: "#188038",
    ownerResponse: {
      time: "2 years ago",
      text: "Thank you",
    },
  },
  {
    name: "TAYLOR-MICHEAL thompson",
    rating: 5,
    time: "2 years ago",
    text: "Get bud",
    meta: "Local Guide · 11 reviews · 1 photo",
    localGuide: true,
    avatarColor: "#F9AB00",
  },
  {
    name: "Karan Singh",
    rating: 5,
    time: "2 years ago",
    text: "",
    meta: "3 reviews",
    avatarColor: "#5F6368",
    ownerResponse: {
      time: "2 years ago",
      text: "Thank you",
    },
  },
];

export const REVIEWS_SUMMARY = {
  label: "Excellent",
  average: 4.9,
  count: reviews.length,
  googleMapsUrl: "https://maps.app.goo.gl/93bMfCu8LaZ78Eb8A",
} as const;
