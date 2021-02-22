import skreenbeImg from "../img/skreenbe.svg";
import conferenceImg from "../img/conference.jpg";
import runnersImg from "../img/runners.jpeg";
import bankImg from "../img/bank.jpg";

export default [
  {
    id: 1,
    name: "project1",
    technologies: ["React", "Node.js", "MongoDb"],
    isThesis: false,
    img: skreenbeImg,
    links: [
      {
        href: "http://www.skreenbe.com/",
        desc: "seeApplication",
      },
    ],
  },
  {
    id: 2,
    name: "project2",
    technologies: ["JavaScript", "Node.js", "MongoDb"],
    isThesis: true,
    img: conferenceImg,
    links: [
      {
        href:
          "http://www.st.fmph.uniba.sk/~mizerik1/thesis/bakalarskaPracaMizerik.pdf",
        desc: "readTheThesis",
      },
      {
        href:
          "http://www.st.fmph.uniba.sk/~mizerik1/thesis/posudokSkolitela.pdf",
        desc: "readSupervisor",
      },
      {
        href:
          "http://www.st.fmph.uniba.sk/~mizerik1/thesis/posudokOponenta.pdf",
        desc: "readOpponent",
      },
      {
        href:
          "http://www.st.fmph.uniba.sk/~mizerik1/thesis/CONFERENCE_MANAGEMENT_SYSTEM.zip",
        desc: "sourceCode",
      },
    ],
  },
  {
    id: 3,
    name: "project3",
    technologies: ["Java", "XML", "Git"],
    isThesis: false,
    img: runnersImg,
    links: [
      {
        href:
          "http://www.st.fmph.uniba.sk/~mizerik1/technicka-dokumentacia.pdf",
        desc: "readDocumentation",
      },
      {
        href: "https://github.com/TIS2018-FMFI/rebricek-bezcov",
        desc: "githubRepo",
      },
      {
        href:
          "http://www.st.fmph.uniba.sk/~mizerik1/liga_orientacneho_behu.zip",
        desc: "sourceCode",
      },
    ],
  },
  {
    id: 4,
    name: "project4",
    technologies: ["Java", "PostgreSQL"],
    isThesis: false,
    img: bankImg,
    links: [
      {
        href: "http://www.st.fmph.uniba.sk/~mizerik1/zaverecnaSprava.pdf",
        desc: "readDocumentation",
      },
      {
        href: "http://www.st.fmph.uniba.sk/~mizerik1/databazyZadanie.pdf",
        desc: "assignment",
      },
      {
        href: "http://www.st.fmph.uniba.sk/~mizerik1/banka.html",
        desc: "aboutProject",
      },
      {
        href: "http://www.st.fmph.uniba.sk/~mizerik1/aplikacia.zip",
        desc: "sourceCode",
      },
    ],
  },
];
