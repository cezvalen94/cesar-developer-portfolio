"use client";

import { FaReact, FaNodeJs } from "@/node_modules/react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiCplusplus,
  SiRemix,
  SiVuedotjs,
  SiCss3,
  SiCsharp,
  SiAngular,
  SiExpo,
  SiElectron,
  SiNuxtdotjs,
  SiRedux,
  SiRecoil,
  SiMobx,
  SiD3Dotjs,
  SiChartdotjs,
  SiApacheecharts,
  SiShadcnui,
  SiRadixui,
  SiNextui,
  SiStorybook,
  SiChakraui,
  SiAntdesign,
  SiMui,
  SiIonic,
  SiFigma,
  SiSketch,
  SiNestjs,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiGin,
  SiGraphql,
  SiSwagger,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiRedis,
  SiAmazondynamodb,
  SiPrisma,
  SiSqlalchemy,
  SiAmazonaws,
  SiGooglecloud,
  SiSupabase,
  SiKubernetes,
  SiElasticsearch,
  SiJest,
  SiPlaywright,
  SiGithubactions,
  SiJenkins,
  SiCircleci,
  SiApachekafka,
  SiRabbitmq,
  SiDatadog,
  SiSentry,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

// about data
const about = {
  title: "About me",
  description:
    "I’m a Senior Software Engineer with expertise in building scalable, cross-platform applications using React, Next.js, and Python. With experience across various industries like AI and E-commerce, I focus on creating efficient, user-friendly solutions while maintaining high coding standards through Test-Driven Development. I thrive on tackling complex challenges and delivering impactful results.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Cesar Valencia",
    },
    {
      fieldName: "Experience",
      fieldValue: "10 Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 206 647 7441",
    },
    {
      fieldName: "Email",
      fieldValue: "cvalencia9443@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Kent, WA, USA 98042",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// education data
const education = {
  title: "My education",
  description: "Solid academic foundation in computer science.",
  items: [
    {
      image: "/assets/education/nus.png",
      institution: "National University of Singapore (NUS)",
      degree: "Master of Computing (Computer Science Specialisation)",
      duration: "01/2014 - 06/2015",
    },
    {
      image: "/assets/education/nus.png",
      institution: "National University of Singapore (NUS)",
      degree: "Bachelor of Computing (Computer Science)",
      duration: "01/2010 - 01/2014",
    },
  ],
};

// experience data
const experience = {
  title: "My experience",
  description:
    "Motivated startup-growth contributing the big impact on full-stack basis.",
  items: [
    {
      company: "CodeBright",
      image: "/assets/experience/codebright.png",
      position: "Senior Software Engineer (Lead)",
      duration: "09/2022 - Current",
      description: "Remote",
    },
    {
      company: "Refersion",
      image: "/assets/experience/refersion.png",
      position: "Senior Software Engineer",
      duration: "08/2019 - 09/2022",
      description: "Remote",
    },
    {
      company: "Goldman Sachs",
      image: "/assets/experience/gs.png",
      position: "Software Engineer",
      duration: "02/2017 - 08/2019",
      description: "Hybrid",
    },
    {
      company: "Amazon",
      image: "/assets/experience/amazon.png",
      position: "Frontend Developer",
      duration: "06/2015 - 02/2017",
      description: "On-Site",
    },
  ],
};

// skills data
const skills = {
  title: "My technical skills",
  description:
    "I'm confident modern frameworks and libraries in full-stack basis for fast-quality delivery.",
  skillList: [
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiGo />,
      name: "Go",
    },
    {
      icon: <SiCplusplus />,
      name: "C/C++",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRemix />,
      name: "Remix",
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue.js",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "Nuxt.js",
    },
    {
      icon: <SiAngular />,
      name: "Angular",
    },
    {
      icon: <FaReact />,
      name: "React Native",
    },
    {
      icon: <SiExpo />,
      name: "Expo",
    },
    {
      icon: <SiElectron />,
      name: "Electron",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiRecoil />,
      name: "Recoil",
    },
    {
      icon: <SiMobx />,
      name: "MobX",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCN",
    },
    {
      icon: <SiRadixui />,
      name: "RadixUI",
    },
    {
      icon: <SiNextui />,
      name: "NextUI",
    },
    {
      icon: <SiStorybook />,
      name: "Storybook",
    },
    {
      icon: <SiChakraui />,
      name: "ChakraUI",
    },
    {
      icon: <SiAntdesign />,
      name: "AntD",
    },
    {
      icon: <SiIonic />,
      name: "Ionic",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <SiSketch />,
      name: "Sketch",
    },
    {
      icon: <SiD3Dotjs />,
      name: "D3.js",
    },
    {
      icon: <SiChartdotjs />,
      name: "Chart.js",
    },
    {
      icon: <SiApacheecharts />,
      name: "Apache EChart",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiGin />,
      name: "Gin",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiSwagger />,
      name: "Swagger",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiAmazondynamodb />,
      name: "DynamoDB",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <SiSqlalchemy />,
      name: "SQLAlchemy",
    },
    {
      icon: <SiAmazonaws />,
      name: "AWS",
    },
    {
      icon: <SiGooglecloud />,
      name: "GCP",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiElasticsearch />,
      name: "ElasticSearch",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
    {
      icon: <SiPlaywright />,
      name: "Playwright",
    },
    {
      icon: <SiGithubactions />,
      name: "Github Actions",
    },
    {
      icon: <SiJenkins />,
      name: "Jenkins",
    },
    {
      icon: <SiCircleci />,
      name: "CircleCI",
    },
    {
      icon: <SiApachekafka />,
      name: "Kafka",
    },
    {
      icon: <SiRabbitmq />,
      name: "RabbitMQ",
    },
    {
      icon: <SiDatadog />,
      name: "Datadog",
    },
    {
      icon: <SiSentry />,
      name: "Sentry",
    },
    {
      icon: <SiGrafana />,
      name: "Grafana",
    },
    {
      icon: <SiPrometheus />,
      name: "Prometheus",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] xl:h-[582px] h-[78vh] overflow-hidden"
        >
          {/* list */}
          <TabsList className="flex flex-row md:flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6 overflow-x-auto whitespace-nowrap">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{about.title}</h3>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base tracking-tight text-white/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{education.title}</h3>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-[30px] md:text-left items-center">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] w-[700px] py-6 px-10 rounded-xl flex flex-row justify-start items-center md:items-start gap-10"
                        >
                          <Image
                            src={item.image}
                            alt={item.institution}
                            priority
                            quality={100}
                            width={100}
                            height={100}
                            className="object-contain rounded-full"
                          />
                          <div>
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="w-full min-h-[60px] flex items-center justify-start">
                              {item.institution}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.degree}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-[30px] md:text-left items-center">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] w-[700px] py-6 px-10 rounded-xl flex flex-row justify-start items-center md:items-start gap-10"
                        >
                          <Image
                            src={item.image}
                            alt={item.company}
                            priority
                            quality={100}
                            width={100}
                            height={100}
                            className="object-contain rounded-full"
                          />
                          <div>
                            <span className="text-accent">{item.company}</span>
                            <h3 className="min-h-[60px] flex items-center justify-center">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.duration}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-4 md:grid-cols-6 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[90px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                                <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                                {/* Display the skill name directly on smaller screens */}
                                <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                  {skill.name}
                                </p>
                              </TooltipTrigger>
                              {/* Tooltip content only visible on xl screens and larger */}
                              <TooltipContent className="hidden xl:block">
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
