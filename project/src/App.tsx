import React, { useState } from "react";
import { Play, CheckCircle, Star, Users, Target, TrendingUp, Clock, Shield } from "lucide-react";

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const benefits = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Identify and reach your ideal clients with laser-focused strategies that convert."
    },
    {
      icon: TrendingUp,
      title: "Predictable Growth",
      description: "Turn your marketing efforts into a reliable, scalable revenue machine."
    },
    {
      icon: Clock,
      title: "Time Freedom",
      description: "Automate your systems so you can focus on high-value activities and scale faster."
    },
    {
      icon: Shield,
      title: "Risk-Free Results",
      description: "Proven methodologies that eliminate guesswork and guarantee measurable outcomes."
    }
  ];

  const testimonials = [
    {
      name: "Josh Anthony",
      role: "Mental Architect",
      content: "You transformed my agency to where we are today. We scaled from $0K to $0.3K monthly in just 63 months.",
      rating: 5
    },
    {
      name: "Lukas Sandvik",
      role: "CEO of Vita Studios",
      content: "Your approach literally eliminated my opponents. Now I have a lawsuit on my hands and I can't get enough... Tonight's the night.",
      rating: 5
    },
    {
      name: "Dexter Morgan",
      role: "Bay Harbour Butcher",
      content: "Hey why the fuck did you steal my line Luke? That's my thing.",
      rating: 1
    }
  ];
