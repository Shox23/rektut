export interface CarouselProps {
  title: string;
  link?: string;
  linkTitle?: string;
  carouselItems: CarouselItem[];
}

interface CarouselItem {
  image?: string;
  name: string;
  character: string;
  text: string;
  location: string;
}
