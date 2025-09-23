"use client";

import TeamSection from "@/components/TeamSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      {/* Hero Section with aspect ratio control */}
      <section className="relative w-full">
        {/* Container with aspect ratio */}
        <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
          <Image
            src="/images/About-HeroSection-Background.png"
            alt="About Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content positioned over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            អំពី KaveyCode
          </h1>
          <p className="text-white text-base md:text-xl max-w-2xl mx-auto px-4">
            {/* សូមស្វាមន៏មកកាន់ពិភពនៃភាសាកូដជាមួយ kaveyCode ដែលជាកន្លែង
          សម្រាប់សិស្សានុសិស្សកម្ពុជាទទួលបានចំណេះដឹងយ៉ាងមានប្រសិទ្ធភាព។ */}
            សូមស្វាគមន៍មកកាន់ពិភពនៃមេរៀនកូដជាមួយ KaveyCode ដែលជាកន្លែង
            <br />
            សម្រាប់សិស្សានុសិស្សកម្ពុជាទទួលបានចំណេះដឹងយ៉ាងមានប្រសិទ្ធភាព។
          </p>
        </div>
      </section>

      {/* Section 1: Text Left, Image Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">គោលដៅរបស់យើង</h2>
          <p className="text-muted-foreground">
            We aim to empower students with free, high-quality coding education.
            Our courses and tutorials help learners build real-world skills to
            succeed in technology careers.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="images/our-mission.png"
            alt="Our Mission"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Section 2: Image Left, Text Right */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/vision-image.jpg" // replace with your local image
            alt="Our Vision"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            We envision a world where everyone can access quality programming
            education regardless of location or financial means. Our team is
            dedicated to making this vision a reality.
          </p>
        </div>
      </section> */}

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
