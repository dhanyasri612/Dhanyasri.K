import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Figma,
  MessageCircle,
} from "lucide-react";

const profileLinks = [
  {
    icon: Github,
    href: "https://github.com/dhanyasri612",
    label: "GitHub",
    className: "top-[2%] left-1/2 -translate-x-1/2",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/dhanyasri-k-6b6902299",
    label: "LinkedIn",
    className: "top-[22%] right-[1%]",
  },
  {
    icon: Figma,
    href: "https://www.figma.com/design/fECgy3WOUzc8MnWM0aH6cN/Untitled?t=WDxTV7tfcdZaQOQd-1",
    label: "Figma",
    className: "bottom-[22%] right-[1%]",
  },
  {
    icon: MessageCircle,
    href: "#contact",
    label: "Contact",
    className: "bottom-[2%] left-1/2 -translate-x-1/2",
  },
  {
    icon: Mail,
    href: "mailto:dhanyasrikalisamy@gmail.com",
    label: "Email",
    className: "bottom-[22%] left-[1%]",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/u/dhanyasrikalisamy",
    label: "LeetCode",
    className: "top-[22%] left-[1%]",
  },
];

const ProfileOrbit = () => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="profile-orbit absolute left-1/2 top-1/2 h-[420px] w-[340px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-[50%] border border-primary/20" />
        <div className="absolute inset-[18px] rounded-[50%] border border-primary/10" />

        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className={`pointer-events-auto absolute ${link.className}`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-card/90 text-muted-foreground shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary">
              <link.icon className="h-[18px] w-[18px]" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileOrbit;
