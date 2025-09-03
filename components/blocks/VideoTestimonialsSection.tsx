import React from 'react';
import { Testimonial } from '@/components/ui/testimonial-card';
import { Particles } from '@/components/ui/particles';

const VideoTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Nehemiah",
      role: "Business Owner",
      testimonial: "You guys implemented a well oiled machine and you are still adding new features.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/z4PWdrWDWts"
    },
    {
      name: "Cary",
      role: "Entrepreneur",
      testimonial: "Saved 3 days out of his whole week using this AI System",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/N64ed7LFglU"
    },
    {
      name: "Jim",
      role: "Client",
      testimonial: "Anything I needed, your team was there. The quality of the system is exceptional.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/L9lxcrVrl-4"
    },
    {
      name: "Dini",
      role: "User",
      testimonial: "This shit is f**king fire.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/5Ny-1ElxD14"
    },
    {
      name: "Jahan",
      role: "Industry Expert",
      testimonial: "I've seen everything in the market and by far, but no question about it. There's not even close comparison to a second best.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/5yURZXh7NBc"
    },
    {
      name: "Adam",
      role: "Client",
      testimonial: "He literally gives you the plan on what to do - it's not that hard. I got a little emotional because if I had that information I would have been way ahead.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/rq9FNr2O8_I"
    },
    {
      name: "Jamie",
      role: "Non-Technical User",
      testimonial: "Helped us develop agents in days. For someone like myself who is not very technical they go out of their way to explain it in a way that helps me understand.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/MpXSq9yf10M"
    },
    {
      name: "Andrew",
      role: "Business Owner",
      testimonial: "I went from zero to $15K a month using the software.",
      rating: 5,
      image: "/api/placeholder/48/48",
      videoUrl: "https://www.youtube.com/embed/x3RCe4Xefdg"
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#305AE3"
        refresh
      />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients are saying about BookedIn.ai and the results they're achieving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
              videoUrl={testimonial.videoUrl}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
