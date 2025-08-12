import eye from '../assets/eye.jpg'
import magic from '../assets/magic.webp'
import download from '../assets/download.jpg'
import testi from '../assets/testi.png'

export const plans = [
  {
    name: "Basic",
    price: "Free",
    credit:10,
    description: "Perfect for trying out basic image generation."
  },
  {
    name: "Premium",
    price: "$9.99/mo",
    credit:100,
    description: "Ideal for creators needing high-quality images daily."
  },
  {
    name: "Pro",
    price: "$19.99/mo",
    credit:500,
    description: "Unlimited image generation with premium support."
  }
];

export const testimonials = [
  {
    name: "Aarav Sharma",
    title: "Content Creator",
    feedback:
      "This app is absolutely mind-blowing! I simply describe what I imagine, and it turns it into stunning visuals. It's like having an artist in my pocket.",
    avatar:testi 
  },
  {
    name: "Riya Kapoor",
    title: "UI/UX Designer",
    feedback:
      "As a designer, this tool has saved me hours. The AI-generated images are high-quality and match my vision perfectly. Highly recommended!",
    avatar:testi
     
  },
  {
    name: "Dev Mehta",
    title: "Startup Founder",
    feedback:
      "Using this app to pitch ideas visually has been a game changer for our team. Investors love the clarity it brings. Super impressed!",
    avatar:testi 

  }
];

export const steps = [
  {
    step: 1,
    title: "Describe Your Vision",
    description: "Type in your imagination — whether it's a dreamy landscape, futuristic city, or surreal creature.",
    icon: eye // placeholder for custom icon
  },
  {
    step: 2,
    title: "Watch the Magic",
    description: "Our AI turns your words into stunning visuals right before your eyes. Sit back and be amazed.",
    icon: magic
  },
  {
    step: 3,
    title: "Download & Share",
    description: "Save your creation or share it with the world. Your imagination deserves the spotlight.",
    icon: download
  }
];
