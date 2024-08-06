import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

import imgSrc from "@/public/perfil.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] custom-bg text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">John Doe</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm John Doe
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Frontend Developer with 2 years of experience. Proficient in
                React, Next.js, Tailwind CSS, Git, and GitHub.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={imgSrc}
                width={400}
                height={400}
                alt="John Doe"
                className="rounded-full"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="container mx-auto py-16 px-4 md:px-6 lg:py-24"
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                I am a passionate frontend developer with a keen eye for design
                and a strong focus on creating user-friendly experiences. With 2
                years of experience, I have honed my skills in modern web
                technologies, including React, Next.js, and Tailwind CSS.
              </p>
              <p className="mt-4 text-muted-foreground md:text-lg">
                I am constantly learning and exploring new tools and techniques
                to improve my craft. I am a collaborative team player and enjoy
                working with designers and backend developers to bring projects
                to life.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={imgSrc}
                width={400}
                height={400}
                alt="About"
                className="rounded-xl"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="container mx-auto py-16 px-4 md:px-6 lg:py-24"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              My Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>
                    A modern web application built with React, Next.js, and
                    Tailwind CSS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 1"
                    className="rounded-xl"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>
                    A responsive website built with Next.js and Tailwind CSS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 2"
                    className="rounded-xl"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>Lorem ipsum</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 3"
                    className="rounded-xl"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="container mx-auto py-16 px-4 md:px-6 lg:py-24"
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                I'm always excited to connect with new people and discuss
                potential collaborations. Feel free to reach out to me using the
                form below.
              </p>
            </div>
            <Card>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <p className="text-sm">&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
