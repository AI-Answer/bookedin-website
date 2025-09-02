import { TestimonialCarousel } from "@/components/ui/testimonial"

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Bradley Benner",
    avatar: "/bradley-pic.png",
    description: "This is amazing. All I have to do is sit back and market and let you guys take care of the tech, I do not need to hire anyone. We could reach to all our leads in seconds, converting a much higher percentage."
  },
  {
    id: 2,
    name: "Adam James",
    avatar: "/adam-pic.png",
    description: "I got a little emotional because if I had this before I would have been way ahead"
  },
  {
    id: 3,
    name: "Andrew Reveill",
    avatar: "/andrew-pic.png",
    description: "Best Investment we've made so far in AI"
  },
  {
    id: 4,
    name: "Jamie Paredes",
    avatar: "/jamie-pic.png",
    description: "BookedIn has transformed how we handle lead conversion. The automation is seamless and the results speak for themselves."
  },
  {
    id: 5,
    name: "Liam Ottley",
    avatar: "/liam-pic.png",
    description: "The AI-powered scheduling has saved us countless hours and dramatically improved our client satisfaction rates."
  }
]

export function TestimonialCarouselDemo() {
  return (
    <div className="w-full py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how BookedIn has transformed businesses and helped them convert more leads into meetings
        </p>
      </div>
      <TestimonialCarousel 
        testimonials={TESTIMONIAL_DATA}
        className="max-w-2xl mx-auto"
      />
    </div>
  )
}
