
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
}





