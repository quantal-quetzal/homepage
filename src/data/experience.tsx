import type { ReactNode } from "react";

export interface Experience {
  period: string;
  company: ReactNode;
  description: ReactNode;
}

const experience: Experience[] = [
  {
    period: "since 01/2025",
    company: "Volkswagen Financial Services, Braunschweig",
    description: (
      <>
        Development of an internal, AWS-hosted vehicle financing campaign platform. My
        work focuses on integrating calculation, dealer inventory, and online platform
        systems and on delivering an intuitive web interface.
      </>
    ),
  },
  {
    period: "05/2022 - 07/2024",
    company: "SODEFA, Leverkusen",
    description: (
      <>
        Development of a real estate platform with CMS and DocuSign integration and
        serverless services using <strong>AWS Lambda</strong>, <strong>SQS</strong>, and{" "}
        <strong>S3</strong>. I also contributed to TeamPilot.ai, building AI workflows and
        APIs with <strong>Next.js</strong>, <strong>GraphQL</strong>, <strong>tRPC</strong>,{" "}
        <strong>Hasura</strong>, and <strong>PostgreSQL</strong>.
      </>
    ),
  },
  {
    period: "12/2021 - 04/2022",
    company: "BDK Bank, Hamburg",
    description: (
      <>
        Migration of a managed database into an internal AWS environment and development
        of its data management front end and back end with <strong>React</strong>,{" "}
        <strong>PostgreSQL</strong>, and <strong>Hasura</strong>. Data was provided to
        surrounding systems through GraphQL and CSV exports.
      </>
    ),
  },
  {
    period: "07/2020 - 11/2021",
    company: (
      <>
        <a href="https://aleno.me/" target="_blank" rel="noopener noreferrer">
          aleno AG
        </a>
        , Zurich
      </>
    ),
    description: (
      <>
        Lead back-end development for a new microservice-based product using{" "}
        <strong>AWS Lambda</strong> and <strong>Node.js</strong>, with a focus on external{" "}
        <strong>REST</strong> and <strong>SOAP</strong> integrations. The wider platform also
        used <strong>Next.js</strong> and <strong>GraphQL</strong>.
      </>
    ),
  },
  {
    period: "2012 - 2020",
    company: "Projects across several industries",
    description: (
      <>
        Java, Spring Boot, Eclipse RCP, Swing, ASP.NET Core, and Angular development for
        clients including Allianz, Trust International, Deutsche Bahn Systel, and Innogy.
        Responsibilities ranged from modernizing legacy applications and building REST,
        GraphQL, and SOAP interfaces to coordinating an international development team.
      </>
    ),
  },
];

export default experience;
