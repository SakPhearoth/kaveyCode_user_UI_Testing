"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/hero-background.jpg" // replace with your local hero image
          alt="About Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            អំពី KaveyCode
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            សូមស្វាមន៏មកកាន់ពិភពនៃភាសាកូដជាមួយ kaveyCode ដែលជាកន្លែង
            សម្រាប់សិស្សានុសិស្សកម្ពុជាទទួលបានចំណេះដឹងយ៉ាងមានប្រសិទ្ធភាព។
          </p>
        </div>
      </section>

      {/* Section 1: Text Left, Image Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            We aim to empower students with free, high-quality coding education.
            Our courses and tutorials help learners build real-world skills to
            succeed in technology careers.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/mission-image.jpg" // replace with your local image
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Section 2: Image Left, Text Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
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
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">ក្រុម KaveyCode</h2>

        {/* Mentors */}
        <div className="flex justify-center gap-12 mb-12">
          {/* Mentor 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="images/Mr.Chhaya.png" // replace with your local image
              alt="Mentor 1"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">John Doe</p>
            <p className="text-sm text-muted-foreground">Lead Mentor</p>
          </div>

          {/* Mentor 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/Mr.Davann.png"
              alt="Mentor 2"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">Jane Smith</p>
            <p className="text-sm text-muted-foreground">Technical Mentor</p>
          </div>

          {/* Mentor 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/Mr.Sokpheng.png"
              alt="Mentor 3"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">Alex Kim</p>
            <p className="text-sm text-muted-foreground">Design Mentor</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Repeat for 10 team members */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/team-member${index + 1}.jpg`} // replace with your local images
                alt={`Team Member ${index + 1}`}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <p className="mt-2 font-semibold">Member {index + 1}</p>
              <p className="text-sm text-muted-foreground">Role</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
