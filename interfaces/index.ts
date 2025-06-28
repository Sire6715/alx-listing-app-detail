
export interface CardProps {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
}


export interface buttonProps {
    text: string; 
    onClick?: () => void;
    style: string;
}

export interface PillProps {
  pillText: string[];
  style?: string;
filterProperties: (category: string) => void;
setItems: (items: PropertyProps[]) => void;
activeCategories: string[];
}


export interface PropertyProps{
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
      bed: string;
      shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
  reviews: ReviewProps[];
}

export interface FeaturePillProps{
  text: string;
  icon: string;
  alt?: string;
}

export interface AmenityIconRenderer{
  iconString: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface ReviewProps {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}



