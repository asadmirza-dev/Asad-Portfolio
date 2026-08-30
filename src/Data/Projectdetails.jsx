import agency_img from '../assets/agency_site.png';
import twitter_site from '../assets/twitter_site.png';
import e_commernce_site from '../assets/e_commernce_site.png';
import education_site from '../assets/education_site.png'

export const Projectsdetails =
    [
        {
            id: 1,
            title: "Twitter / X Clone",
            category: "React.js & Tailwind CSS",
            badge: "Featured App",
            description: "A full-featured Twitter/X frontend clone featuring custom routing, dark mode UI, responsive tweet feeds, and dynamic user interaction components.",
            tags: ["React.js", "Tailwind CSS", "React Router", "Lucide Icons"],
            image: twitter_site,
            liveLink: "https://twitter-clone-using-tailwind-or-rea.vercel.app/",
            githubLink: "https://github.com/asadmirza-dev/Twitter-Clone-using-tailwind-or-react-js",
            accentColor: "from-cyan-500/10 via-cyan-500/5 to-transparent",
            borderColor: "hover:border-cyan-500/50",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
        },
        {
            id: 2,
            title: "E-Commerce Web Application",
            category: "HTML5, CSS3 & JavaScript",
            badge: "Vanilla Stack",
            description: "Interactive e-commerce storefront with dynamic product filtering, cart management, responsive grid layouts, and custom JavaScript state handling.",
            tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation"],
            image: e_commernce_site,
            liveLink: "https://e-commerence-website.vercel.app/",
            githubLink: "https://github.com/asadmirza-dev/e-commerence-website",
            accentColor: "from-emerald-500/10 via-emerald-500/5 to-transparent",
            borderColor: "hover:border-emerald-500/50",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
        },
        {
            id: 3,
            title: "Education Website",
            category: "HTML5, CSS3 & JavaScript",
            badge: "Academic UI",
            description: "A clean, responsive educational platform interface designed for course viewing, structured curriculum presentation, and student portal layouts. ",
            tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            image: education_site,
            liveLink: "https://learn-ui-web-page.vercel.app/",
            githubLink: "https://github.com/asadmirza-dev/learn-ui-web-page",
            accentColor: "from-amber-500/10 via-amber-500/5 to-transparent",
            borderColor: "hover:border-amber-500/50",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]"
        },
        {
            id: 4,
            title: "Modern Agency Website",
            category: "React.js & Tailwind CSS",
            badge: "Client Agency",
            description: "High-converting corporate agency landing page with modern dark layout aesthetics, smooth section transitions, and responsive grid structures.",
            tags: ["React.js", "Tailwind CSS", "GSAP ScrollTrigger", "Vercel"],
            image: agency_img,
            liveLink: "https://agency-website-by-react.vercel.app/",
            githubLink: "https://github.com/asadmirza-dev/agency-website-by-react",
            accentColor: "from-purple-500/10 via-purple-500/5 to-transparent",
            borderColor: "hover:border-purple-500/50",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
        }
    ]
