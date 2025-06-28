export * from "./index";
import { PropertyProps } from "@/interfaces";
import { useState, useEffect } from "react";

// constants/index.ts

export const icons = {
  search: "/assets/icons/search.svg",
  filter: "/assets/icons/Filter.svg",
  bed: "/assets/Icons/bed_1.svg",
  bathtub: "/assets/icons/bathtub_1.svg",
  people: "/assets/icons/people_1.svg",
  star: "/assets/icons/star2.svg",
  arrowDown: "/assets/Icons/Linear/Arrows/Alt_Arrow_Down.svg",
  arrow_right: "/assets/Icons/Linear/Arrows/Arrow_Right.svg",
  location: "/assets/Icons/Bold/Map&Location/Map_Point.svg",
  profile1: "/assets/Icons/Profile1.svg",
};

export const amenityIconsMap: Record<string, string> = {
  "Mountain view": "/assets/Icons/Amenities/mountain_1.svg",
  "Chef": "/assets/Icons/Amenities/chef_1.svg",
  "Pool - infinity": "/assets/Icons/Amenities/pool_1.svg",
  "Wifi": "/assets/Icons/Amenities/wifi_1.svg",
  "Kitchen": "/assets/Icons/Amenities/kitchen_1.svg",
  "Cleaning available during stay": "/assets/Icons/Amenities/broom_1.svg",
  "Hot tub": "/assets/Icons/Amenities/hot-ub_1.svg",
  "Shared beach access": "/assets/Icons/Amenities/beach_1.svg",
};

export const IMAGE_PATHS = {
  bgImg: "/assets/images/Hero/Image1.png",
  propertyImages: {
    image1: "/assets/images/Listing/List_1.png",
    image2: "/assets/images/Listing/List_2.png",
    image3: "/assets/images/Listing/List_3.png",
    image4: "/assets/images/Listing/List_4.png",
    image4a: "/assets/images/Listing/List_4a.png",
    image5: "/assets/images/Listing/List_5.png",
    image6: "/assets/images/Listing/List_6.png",
    image7: "/assets/images/Listing/List_7.png",
    image8: "/assets/images/Listing/List_8.png",
    image9: "/assets/images/Listing/List_9.png",
    image10: "/assets/images/Listing/List_10.png",
    image11: "/assets/images/Listing/List_11.png",
    image12: "/assets/images/Listing/List_12.png",
    image13: "/assets/images/Listing/List_13.png",
    image14: "/assets/images/Listing/List_14.png",
    image15: "/assets/images/Listing/List_15.png",
    image16: "/assets/images/Listing/List_16.png",
  },
};

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: [
      "Mountain view",
      "Pool - infinity",
      "Cleaning available during stay",
    ],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: IMAGE_PATHS.propertyImages.image1,
    discount: "",
    description: `Wake up to the sound of waves and the scent of tropical blossoms at Villa Ocean Breeze. Nestled in the heart of Seminyak, this luxurious coastal hideaway blends traditional Balinese charm with contemporary comfort. Spend your days basking in the sun by your private pool or exploring the vibrant nearby beach scene. With ample space for up to six guests, it's the perfect spot for families or couples seeking an upscale island escape.

The space
BEDROOM & BATHROOM
• 3 Bedrooms — Spacious, breezy, and well-furnished
• 3 Ensuite Bathrooms — Walk-in rain showers, modern fixtures
HIGHLIGHTS
• Private pool, lush garden, and free parking
• Close to world-class dining, shopping, and surf spots`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sophia Chen",
        rating: 5,
        comment:
          "The infinity pool with direct ocean views was absolutely breathtaking. We spent every morning swimming while watching the sunrise. The staff was incredibly attentive and even prepared a special anniversary dinner for us on the beach.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "James Wilson",
        rating: 4,
        comment:
          "The location can't be beat - just steps from Seminyak Beach. The villa was spotless when we arrived, though the kitchen knives could use an upgrade for serious cooking. The outdoor shower was our favorite feature!",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Emma Johnson",
        rating: 5,
        comment:
          "Perfect for our girls' trip! The cleaning service came daily and kept everything immaculate. The garden was so peaceful for morning yoga sessions. We'll definitely be back next year.",
      },
    ],
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain view", "Hot tub", "Kitchen"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: IMAGE_PATHS.propertyImages.image2,
    discount: "30",
    description: `Tucked away in the majestic Rockies, Mountain Escape Chalet offers breathtaking mountain views and cozy alpine elegance. Start your morning with coffee by the stone fireplace, then hit the slopes or enjoy scenic hiking trails just outside your door. As evening sets in, watch the sun dip behind snow-covered peaks from the warmth of your wraparound deck.

The space
BEDROOM & BATHROOM
• 4 Bedrooms — Rustic yet refined with mountain-style décor
• 2 Bathrooms — Soaking tubs and plush linens
HIGHLIGHTS
• Self-check-in for ultimate privacy
• Fireplace, panoramic views, and 30% off your stay`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "Michael Roberts",
        rating: 5,
        comment:
          "The hot tub with unobstructed mountain views was worth the trip alone! After skiing all day at Aspen Mountain (just 15 minutes away), soaking in the tub while watching sunset was pure magic. The kitchen had high-end appliances that made cooking a joy.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Emma Davis",
        rating: 4,
        comment:
          "We loved the cozy fireplace and rustic decor. The WiFi was occasionally spotty in the bedrooms, but that just encouraged us to disconnect and enjoy nature. The 30% discount made this luxury chalet surprisingly affordable!",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/82.jpg",
        name: "David Thompson",
        rating: 5,
        comment:
          "Our family of six had plenty of space. The kids loved the bunk room, and we adults appreciated the master suite with its private balcony. The kitchen was fully stocked with everything we needed to prepare meals after long days of hiking.",
      },
    ],
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Mountain view", "Wifi", "Kitchen"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: IMAGE_PATHS.propertyImages.image3,
    discount: "",
    description: `Experience peace and simplicity in this charming desert hideaway. Ideal for couples or small groups, Cozy Desert Retreat invites you to unwind beneath endless blue skies. Stroll through nearby cactus gardens or relax under the stars on your private patio with a chilled drink in hand. Designed for comfort and minimal fuss, this retreat is a true oasis in the California desert.

The space
BEDROOM & BATHROOM
• 2 Bedrooms — Cool-toned, sunlit rooms with boho details
• 1 Bathroom — Sleek design with spa-inspired touches
HIGHLIGHTS
• Pet-friendly, self check-in, and unbeatable views`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        name: "Mia Garcia",
        rating: 5,
        comment:
          "The night sky from our private patio was absolutely breathtaking - we've never seen so many stars! The WiFi worked perfectly for my remote work needs during the day. The modern kitchen had all the essentials for preparing simple meals.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Ethan Martinez",
        rating: 4,
        comment:
          "Perfect weekend getaway from LA. The minimalist design was soothing and the mountain views were incredible at sunrise. The bathroom's rainfall showerhead was luxurious. Only minor complaint was the lack of blackout curtains in the bedroom.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
        name: "Charlotte Wilson",
        rating: 5,
        comment:
          "We brought our small dog and he loved the fenced-in patio area! The property was even more charming in person than in photos. The host left us a welcome basket with local dates and wine - such a thoughtful touch!",
      },
    ],
  },

  // Property 4
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["Chef", "Wifi", "Cleaning available during stay"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: IMAGE_PATHS.propertyImages.image4,
    discount: "15",
    description: `Live like a true urbanite in this chic New York penthouse that offers sweeping views of the city skyline. Whether you're sipping espresso on the terrace or streaming movies with lightning-fast WiFi, you're surrounded by comfort and convenience. With elegant interiors and proximity to the best NYC spots, this penthouse is perfect for business travelers, couples, or stylish explorers.

The space
BEDROOM & BATHROOM
• 2 Bedrooms — Contemporary furniture, high-rise views
• 2 Bathrooms — Marble countertops, rain showers
HIGHLIGHTS
• City view balcony, 24h check-in, 15% discount`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
        name: "Olivia Martinez",
        rating: 5,
        comment:
          "The skyline view from bed is worth every penny. Butler service was impeccable - they even secured last-minute Broadway tickets for us! The cleaning staff came daily and kept everything spotless.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Daniel Kim",
        rating: 4,
        comment:
          "Incredible location steps from Central Park. The WiFi was blazing fast for my video calls. Only downside was some street noise at night, but the blackout curtains helped. The 15% discount made this luxury stay more reasonable.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        name: "Sophie Brown",
        rating: 5,
        comment:
          "Our private chef prepared the most amazing meals right in the penthouse kitchen. Watching the city lights from the terrace with a cocktail in hand was magical. Already planning our next stay!",
      },
    ],
  },

  // Property 5
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Mountain view", "Hot tub", "Kitchen"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: IMAGE_PATHS.propertyImages.image4a,
    discount: "20",
    description: `Trade city noise for the tranquil rush of river waters at this scenic riverside cabin. With a private dock and complimentary kayaks, your days are made for paddling through crystal-clear streams or lounging with a book by the fireplace. The rustic-chic interior makes it a favorite among families and nature lovers.

The space
BEDROOM & BATHROOM
• 3 Bedrooms — Timber walls, cozy blankets, warm lighting
• 2 Bathrooms — Simple and elegant
HIGHLIGHTS
• Free kayaks, riverside serenity, 20% off`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
        name: "William Clark",
        rating: 5,
        comment:
          "Morning coffee by the river was divine. We loved taking the kayaks out at dawn when the water was like glass. The hot tub under the stars was the perfect way to end each day. The 20% discount made this luxury affordable.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
        name: "Charlotte Lewis",
        rating: 5,
        comment:
          "The outdoor hot tub under the stars? Perfection. The kitchen was well-stocked for cooking meals, and we loved dining on the deck overlooking the river. Saw so many native birds right from our window!",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        name: "Henry Wilson",
        rating: 4,
        comment:
          "Perfect family getaway. Our kids loved spotting fish from the dock. The cabin was cozy but could use some brighter lighting in the living area. The fireplace made up for it though - so warm and inviting.",
      },
    ],
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Shared beach access", "Chef", "Pool - infinity"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: IMAGE_PATHS.propertyImages.image4a,
    discount: "",
    description: `Step into paradise at the Modern Beachfront Villa, where the ocean meets opulence in the tranquil haven of Sidemen, Bali. Enjoy direct beach access and a private pool set against tropical gardens. With space for up to 10 guests and chef services available, this villa is ideal for hosting unforgettable getaways with friends or family.

The space
BEDROOM & BATHROOM
• 5 Bedrooms — Luxuriously styled, spacious, each with a view
• 4 Bathrooms — Elegant, modern, with premium toiletries
HIGHLIGHTS
• Beachfront luxury, chef service, and complete privacy`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        name: "Ava Johnson",
        rating: 5,
        comment:
          "Chef-prepared Balinese feasts by the infinity pool were unforgettable! Our group of 8 had plenty of space. The staff anticipated our every need - they even decorated for my birthday surprise.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        name: "Liam Brown",
        rating: 5,
        comment:
          "The bartender made the best cocktails we've ever had. Waking up to waves crashing just steps from our bedroom was magical. The beach was pristine and never crowded.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/37.jpg",
        name: "Chloe Garcia",
        rating: 5,
        comment:
          "Perfect for our multi-generational family reunion. The infinity pool was a hit with kids and grandparents alike. Chef accommodated all our dietary restrictions beautifully.",
      },
    ],
  },

  // Property 7 - Lakeside Chalet
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Mountain view", "Hot tub", "Wifi"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: IMAGE_PATHS.propertyImages.image6,
    discount: "10",
    description: `Reconnect with nature at the Lakeside Chalet in the heart of Banff. Wake up to tranquil water views and spend your days exploring mountain trails or kayaking across crystal lakes. Ideal for nature enthusiasts, this cozy yet stylish chalet is your perfect basecamp.

The space
BEDROOM & BATHROOM
• 3 Bedrooms — Rustic charm, lake and mountain views
• 3 Bathrooms — Functional with warm, natural finishes
HIGHLIGHTS
• Lakeside serenity, 10% off, and outdoor adventure at your doorstep`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
        name: "Harper Scott",
        rating: 4,
        comment:
          "Kayaking at dawn was magical. The hot tub overlooking the lake was perfect after hiking. WiFi was weak in the bedrooms but strong in the main living area.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/60.jpg",
        name: "Benjamin Young",
        rating: 5,
        comment:
          "The 10% discount made this luxury affordable. Morning coffee on the dock with mountain reflections in the lake? Priceless. Kitchen had everything we needed.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
        name: "Scarlett Adams",
        rating: 5,
        comment:
          "Spotless and cozy. We saw elk right from our window! The heated bathroom floors were a luxurious touch after cold days outdoors.",
      },
    ],
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["Wifi", "Kitchen", "Cleaning available during stay"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: IMAGE_PATHS.propertyImages.image8,
    discount: "",
    description: `Experience Berlin from the stylish comfort of this centrally located urban loft. Ideal for couples or business travelers, this modern space puts you steps away from nightlife, culture, and public transport. 

The space 
BEDROOM & BATHROOM 
• 2 Bedrooms — Industrial flair with urban views 
• 1 Bathroom — Compact, modern, efficient 
HIGHLIGHTS 
• Heart of Berlin, strong WiFi, and effortless 24h check-in`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        name: "Thomas Müller",
        rating: 5,
        comment:
          "The WiFi was blazing fast - perfect for my remote work needs. Location couldn't be better, right between Mitte and Kreuzberg. The kitchen had everything for simple meals after exploring Berlin's food scene.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        name: "Anna Schmidt",
        rating: 4,
        comment:
          "Loved the industrial design and huge windows. Cleaning service came weekly and did an excellent job. Only downside was some street noise on weekends, but the provided earplugs helped.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        name: "Daniel Weber",
        rating: 5,
        comment:
          "Perfect base for our Berlin adventure. The loft was even cooler in person than in photos. Host provided excellent recommendations for local cafes and galleries. Would definitely stay again!",
      },
    ],
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Mountain view", "Hot tub", "Cleaning available during stay"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: IMAGE_PATHS.propertyImages.image9,
    discount: "40",
    description: `Escape into the wilderness at this secluded forest cabin near Whistler. Unwind in the outdoor hot tub beneath a canopy of trees, or cozy up indoors with a good book and a warm drink. 

The space 
BEDROOM & BATHROOM 
• 4 Bedrooms — Wood finishes, soft lighting, serene 
• 2 Bathrooms — Earth-toned, welcoming 
HIGHLIGHTS 
• Deep forest privacy, self check-in, and 40% discount`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/40.jpg",
        name: "Noah Taylor",
        rating: 5,
        comment:
          "The cedar hot tub under the stars was magical. 40% discount made this luxury cabin affordable for our group. The kitchen had everything we needed for hearty mountain meals.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        name: "Isabella Lee",
        rating: 5,
        comment:
          "Perfect digital detox spot! WiFi worked well when needed, but we mostly enjoyed the mountain views and board games by the fire. Cleaning service came mid-week and refreshed everything.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        name: "Jacob Martin",
        rating: 4,
        comment:
          "Incredibly peaceful location. Saw deer right outside our window! Hot tub was cleaned daily. Only minor issue was the narrow driveway in winter conditions.",
      },
    ],
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Pool - infinity", "Chef", "Mountain view"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: IMAGE_PATHS.propertyImages.image10,
    discount: "50",
    description: `Perched high above the Amalfi coastline, this breathtaking villa invites you to soak in panoramic sea views from the infinity pool. The interiors combine Italian elegance with breezy coastal design, making it a dream for romantic getaways or stylish family vacations.

The space
BEDROOM & BATHROOM
• 4 Bedrooms — Elegant design, full of light and charm
• 4 Bathrooms — Marble details, sea-view soaking tubs
HIGHLIGHTS
• Cliffside location, infinity pool, 50% discount`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        name: "Lucas Hall",
        rating: 5,
        comment:
          "50% off for this infinity pool with Amalfi views? Unreal. Chef prepared authentic Italian meals that were better than any restaurant. Waking up to those coastal vistas was worth every euro.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/51.jpg",
        name: "Amelia White",
        rating: 5,
        comment:
          "Watching sunset from the soaking tub was life-changing. The villa staff arranged private boat tours along the coast. 10/10 would return for the views alone!",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
        name: "Oliver Harris",
        rating: 4,
        comment:
          "Stunning property though the mountain roads to reach it were quite narrow. Once there, the infinity pool made all the travel worthwhile. Chef's seafood pasta was unforgettable.",
      },
    ],
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Shared beach access", "Kitchen", "Pool - infinity"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: IMAGE_PATHS.propertyImages.image11,
    discount: "",
    description: `Unwind at Coastal Escape Villa, where golden sand meets easy luxury in Noosa. Enjoy long beach walks, outdoor dining, and cozy evenings by the fireplace. Perfect for families or pet lovers seeking coastal calm.

The space
BEDROOM & BATHROOM
• 3 Bedrooms — Airy, with coastal-inspired design
• 3 Bathrooms — Clean and calming
HIGHLIGHTS
• Pet friendly, beachfront charm, and total relaxation`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        name: "Zoe Anderson",
        rating: 5,
        comment:
          "Our golden retriever loved the dog-friendly beach access! The infinity pool blended seamlessly with ocean views. Kitchen was perfect for seafood barbecues with local catches.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/53.jpg",
        name: "Jack Wilson",
        rating: 5,
        comment:
          "Morning swims in the pristine beach right outside our door were magical. Villa had everything our family needed - even beach toys and coolers for picnics.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        name: "Ruby Thompson",
        rating: 4,
        comment:
          "Perfect location but bring mosquito repellent at dusk. The outdoor shower after beach days was our favorite feature. Beds were incredibly comfortable.",
      },
    ],
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Mountain view", "Chef", "Wifi"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: IMAGE_PATHS.propertyImages.image12,
    discount: "35",
    description: `Step back in time at this restored historical villa tucked into the hills of Tuscany. Surrounded by vineyards and Renaissance charm, it's an idyllic base for culture lovers and foodies.

The space
BEDROOM & BATHROOM
• 2 Bedrooms — Antique furnishings with modern comfort
• 2 Bathrooms — Period touches with contemporary amenities
HIGHLIGHTS
• Authentic Tuscan experience, free breakfast, 35% off`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/58.jpg",
        name: "Sophia Romano",
        rating: 5,
        comment:
          "The chef's cooking classes using ingredients from the villa's garden were unforgettable. 35% discount made this luxury accessible. WiFi worked perfectly despite the historic thick walls.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        name: "Marco Ferrari",
        rating: 5,
        comment:
          "Waking up to mist rolling over the vineyards from our bedroom window was like a painting. The mountain views during breakfast on the terrace were worth the trip alone.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/39.jpg",
        name: "Isla Bennett",
        rating: 4,
        comment:
          "Magical setting though some stairs might challenge mobility-limited guests. The antique four-poster beds were incredibly comfortable. Chef's wine pairings were exceptional.",
      },
    ],
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["Wifi", "Kitchen", "Cleaning available during stay"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: IMAGE_PATHS.propertyImages.image13,
    discount: "",
    description: `Live like a local in Tokyo at this compact and smartly designed apartment. Walk to vibrant markets, tranquil gardens, and high-tech hotspots. Great for solo travelers or couples.

The space
BEDROOM & BATHROOM
• 1 Bedroom — Minimalist and efficient
• 1 Bathroom — Sleek and modern
HIGHLIGHTS
• City central, public transport access, full connectivity`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        name: "Hana Takahashi",
        rating: 5,
        comment:
          "The pocket WiFi provided was a lifesaver for navigation. Tiny but perfectly designed kitchen made preparing simple meals easy. Cleaning service kept the space immaculate.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/28.jpg",
        name: "Kenji Sato",
        rating: 4,
        comment:
          "Incredible location steps from Shinjuku Station. The apartment was spotless though quite compact for two large suitcases. Host provided excellent ramen recommendations.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
        name: "Emily Chen",
        rating: 5,
        comment:
          "Perfect Tokyo crash pad! Loved the high-tech toilet and smart lighting. Despite being downtown, the double-paned windows blocked all street noise. Would definitely book again.",
      },
    ],
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Mountain view", "Chef", "Pool - infinity"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: IMAGE_PATHS.propertyImages.image14,
    discount: "20",
    description: `Wake up to the sounds of nature in the Serengeti at this luxury safari lodge. Enjoy daily guided tours, gourmet meals, and majestic sunsets over the savanna.

The space
BEDROOM & BATHROOM
• 4 Bedrooms — Tented elegance, comfortable and wild
• 4 Bathrooms — Stylish and spacious
HIGHLIGHTS
• Authentic safari adventure, all-inclusive comfort, 20% discount`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
        name: "Joseph Nyerere",
        rating: 5,
        comment:
          "The infinity pool overlooking watering holes where animals came to drink was surreal. Chef prepared both Western and Tanzanian dishes to perfection. 20% discount was a steal for this luxury.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "Waking to lions roaring in the distance was thrilling yet safe. The mountain views at sunrise were breathtaking. Our guide Jackson spotted the Big Five within two days!",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/59.jpg",
        name: "David Wilson",
        rating: 5,
        comment:
          "Once-in-a-lifetime experience. The tented suites were more luxurious than most hotels. Nightly campfires under the stars with the chef's bush cuisine were unforgettable.",
      },
    ],
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Mountain view", "Kitchen", "Wifi"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: IMAGE_PATHS.propertyImages.image15,
    discount: "25",
    description: `Escape to the English countryside at this charming stone cottage in the Cotswolds. Ideal for writers, walkers, and weekenders, it's warm, quiet, and wonderfully inviting.

The space
BEDROOM & BATHROOM
• 2 Bedrooms — Quaint, with cottage charm
• 1 Bathroom — Cozy with a clawfoot tub
HIGHLIGHTS
• Fireplace evenings, 25% off, storybook surroundings`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/47.jpg",
        name: "Elizabeth Bennett",
        rating: 5,
        comment:
          "The thatched roof and flower-filled garden looked straight from a fairytale. Kitchen was perfect for preparing hearty meals after long walks. WiFi worked perfectly for my remote writing sessions.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
        name: "Charles Winston",
        rating: 4,
        comment:
          "25% discount made this Cotswolds gem affordable. The mountain views from the garden were stunning. Only minor gripe was low water pressure in the shower.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/71.jpg",
        name: "Margaret Atwood",
        rating: 5,
        comment:
          "Perfect writing retreat! The cottage had every comfort while maintaining historic charm. Local pub just a 10-minute walk served excellent ale and pies.",
      },
    ],
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Chef", "Pool - infinity", "Wifi"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: IMAGE_PATHS.propertyImages.image16,
    discount: "30",
    description: `Make your Parisian dream come true in this stately riverfront mansion with manicured gardens and timeless interiors. A grand yet intimate stay awaits near iconic sites.

The space
BEDROOM & BATHROOM
• 4 Bedrooms — Lavish, with river views
• 3 Bathrooms — Elegant, with soaking tubs
HIGHLIGHTS
• Garden retreat, 30% off, and Paris outside your window`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Camille Laurent",
        rating: 5,
        comment:
          "Our private chef prepared the most exquisite French meals in the gourmet kitchen. The infinity pool in the garden was heavenly after days of museum hopping. 30% discount made this splurge possible.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/70.jpg",
        name: "Jean Dubois",
        rating: 5,
        comment:
          "Watching boats glide along the Seine from our bedroom window was magical. The mansion's WiFi was impressively fast for such a historic property. Staff arranged unforgettable private tours.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/38.jpg",
        name: "Claire Martin",
        rating: 4,
        comment:
          "Breathtaking property though some rooms could use brighter lighting. The heated marble floors in the bathrooms were divine. Location near Musée d'Orsay was perfect.",
      },
    ],
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain view", "Hot tub", "Chef"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: IMAGE_PATHS.propertyImages.image1,
    discount: "",
    description: `Hit the slopes in style at this elegant ski chalet in Zermatt. Featuring warm wood interiors and direct access to the pistes, it's perfect for winter sport lovers.

The space
BEDROOM & BATHROOM
• 3 Bedrooms — Cozy, alpine-style comfort
• 3 Bathrooms — Heated floors, mountain views
HIGHLIGHTS
• Prime ski location, fireplace charm, après-ski ready`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/66.jpg",
        name: "Hans Müller",
        rating: 5,
        comment:
          "Ski-in/ski-out access can't be beat! The private chef prepared incredible Swiss fondue and raclette. Hot tub with Matterhorn views was the perfect end to ski days.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/59.jpg",
        name: "Anna Weber",
        rating: 5,
        comment:
          "Our family loved the boot warmers and ski storage room. Mountain views from every window were breathtaking. Chef's apple strudel was the best we've ever tasted.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/74.jpg",
        name: "Thomas Schmidt",
        rating: 4,
        comment:
          "Fantastic location though some bathrooms could use updating. The heated floors were heavenly after cold days on the slopes. Kitchen was fully equipped for serious cooking.",
      },
    ],
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Shared beach access", "Chef", "Pool - infinity"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: IMAGE_PATHS.propertyImages.image2,
    discount: "60",
    description: `Bask in the tropical beauty of Seychelles at this stunning island villa. With white sand beaches at your feet and a chef at your service, luxury has never felt this relaxed.

The space
BEDROOM & BATHROOM
• 5 Bedrooms — Light-filled, dreamy, tropical elegance
• 5 Bathrooms — Rainfall showers, spa details
HIGHLIGHTS
• Oceanfront serenity, 60% off, and curated service`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/73.jpg",
        name: "Isabelle Laurent",
        rating: 5,
        comment:
          "60% discount for paradise? Yes please! The infinity pool blending into the Indian Ocean was surreal. Chef prepared fresh seafood daily from the morning's catch.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/80.jpg",
        name: "Raj Patel",
        rating: 5,
        comment:
          "Our multi-generational family vacation was perfect here. Private beach access meant the kids could play safely. Chef accommodated all our dietary needs with creative island dishes.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
        name: "Sophie Martin",
        rating: 5,
        comment:
          "Honeymoon perfection! The villa staff arranged a private sunset cruise and beach dinner. Waking up to waves gently crashing just meters away was magical every morning.",
      },
    ],
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Mountain view", "Pool - infinity", "Wifi"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: IMAGE_PATHS.propertyImages.image3,
    discount: "",
    description: `Find peace and perspective at this clifftop villa overlooking the Atlantic. Take a dip in the pool with the ocean stretching beyond, or explore Cape Town's wonders just a drive away.

The space
BEDROOM & BATHROOM
• 3 Bedrooms — Sleek, clean, and view-focused
• 3 Bathrooms — Indoor-outdoor shower access
HIGHLIGHTS
• Dramatic ocean setting, contemporary design, ultimate privacy`,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/women/77.jpg",
        name: "Zoe Adams",
        rating: 5,
        comment:
          "That infinity pool overlooking the Atlantic Ocean was worth every penny! We spent hours just floating and watching the waves crash below. The WiFi was surprisingly fast considering the remote location.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/81.jpg",
        name: "Nathan King",
        rating: 5,
        comment:
          "Waking up to panoramic views of both mountains and ocean was absolutely surreal. The outdoor shower with its cliffside position made us feel like we were in a movie. Perfect romantic getaway.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        name: "Isabella Clark",
        rating: 4,
        comment:
          "The design of this villa is architectural perfection. Every window frames an incredible view. The only reason I'm not giving 5 stars is because the road up to the property is quite steep.",
      },
    ],
  },
];


export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("md");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("xs");
      } else if (window.innerWidth < 768) {
        setScreenSize("sm");
      } else if (window.innerWidth < 1024) {
        setScreenSize("md");
      } else if (window.innerWidth < 1280) {
        setScreenSize("lg");
      } else if (window.innerWidth < 1536) {
        setScreenSize("xl");
      } else {
        setScreenSize("2xl");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
