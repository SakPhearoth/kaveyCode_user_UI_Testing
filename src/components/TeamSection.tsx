"use client";

import Image from "next/image";

export default function TeamSection() {
  // 1. Mentors array
  const mentors = [
    {
      name: "Chan Chhaya",
      role: "Mentor",
      image: "/images/mentor/Mr.Chhaya.png",
    },
    {
      name: "Ing Davann",
      role: "Mentor",
      image: "/images/mentor/Mr.Davann.png",
    },
    {
      name: "Kim Chansokpheng",
      role: "Mentor",
      image: "/images/mentor/Mr.Sokpheng.png",
    },
  ];

  // 2. Team members array
  const teamMembers = [
    {
      name: "Nim Sokvathana",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Vathana.png",
    },
    {
      name: "Sok Sovichea",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Vichea.png",
    },
    {
      name: "Ek Sithiroth",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Sithroth.png",
    },
    {
      name: "Pich Lyheang",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Lyheang.png",
    },
    {
      name: "Khin Sakphearoth",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Phearoth.png",
    },
    {
      name: "Chan Samnang",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Samnang.png",
    },
    {
      name: "Leuk Somaly",
      role: "Full-Stack Dev",
      image: "/images/team/Ms.Maly.png",
    },
    {
      name: "Lay Oudom",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Oudom.png",
    },
    {
      name: "Chhorn Sav Veoun",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Savoeun.png",
    },
    {
      name: "Dul Devith",
      role: "Full-Stack Dev",
      image: "/images/team/Mr.Devith.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
      <h2 className="text-3xl font-bold mb-12">ក្រុម KaveyCode</h2>

      {/* Mentors */}
      <div className="flex flex-wrap justify-center gap-12 mb-12">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="flex flex-col items-center">
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">{mentor.name}</p>
            <p className="text-sm text-muted-foreground">{mentor.role}</p>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">{member.name}</p>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
