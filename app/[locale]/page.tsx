"use client"

import Image from "next/image"
import { Code, Monitor, User, Users, Laptop, Smartphone, ImageIcon } from "lucide-react"
import { useCounter } from "@/hooks/useCounter"

export default function Page() {
  const projectCount = useCounter(300)
  const pleasureScore = useCounter(8.9)
  const customerCount = useCounter(3000)
  const teamCount = useCounter(23)

  return (
    <div className="min-h-screen text-foreground mt-32">
      {/* Who Are We Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl custom-font">
                WHO ARE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WE</span>?
              </h2>
              <p className="text-muted-foreground font-space-grotesk">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="group p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold custom-font mb-2">Clean Code</h3>
                    <p className="text-sm text-muted-foreground font-space-grotesk">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold custom-font mb-2">Modern Design</h3>
                    <p className="text-sm text-muted-foreground font-space-grotesk">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[2/3] w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-transparent blur-3xl -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent blur-3xl -z-10" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <Image
                src="https://posterjack.ca/cdn/shop/articles/Tips_for_Taking_Photos_at_the_Beach_55dd7d25-11df-4acf-844f-a5b4ebeff4df.jpg?v=1563409972&width=1500"
                alt="Profile"
                fill
                className="object-cover"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(39, 230, 236, 0.3))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl custom-font">
              WHAT WE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DO</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl font-space-grotesk">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-md hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 custom-font">
              VIEW ALL
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Website Design",
                icon: Monitor,
                description: "We can assist you with all of our apps.",
              },
              {
                title: "Mobile & Desktop",
                icon: Smartphone,
                description: "We can assist you with all of our apps.",
              },
              {
                title: "UI & UX Design",
                icon: Laptop,
                description: "We can assist you with all of our apps.",
              },
              {
                title: "Editing Photo",
                icon: ImageIcon,
                description: "We can assist you with all of our apps.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 custom-font">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-space-grotesk">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Monitor, label: "PROJECT", value: projectCount, suffix: "+" },
            { icon: Code, label: "PLEASURE", value: pleasureScore, suffix: "" },
            { icon: User, label: "CUSTOMER", value: customerCount, suffix: "+" },
            { icon: Users, label: "TEAM MEMBERS", value: teamCount, suffix: "" },
          ].map(({ icon: Icon, label, value, suffix }) => (
            <div
              key={label}
              className="group text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mx-auto">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground custom-font">{label}</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary custom-font">
                {value}
                {suffix}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

