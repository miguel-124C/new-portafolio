const sizeIcon = 'fa-xl';

export enum IconTecnology {
  "HTML" = `devicon-html5-plain colored ${sizeIcon}`,
  "CSS" = `devicon-css3-plain colored ${sizeIcon}`,
  "JS" = `devicon-javascript-plain colored ${sizeIcon}`,
  "TS" = `devicon-typescript-plain colored ${sizeIcon}`,
  "ANGULAR" = `devicon-angularjs-plain colored ${sizeIcon}`,
  "SASS" = `devicon-sass-original colored ${sizeIcon}`,
  "BOOTSTRAP" = `devicon-bootstrap-plain colored ${sizeIcon}`,
  "NEST" = `devicon-nestjs-original colored ${sizeIcon}`,
  "JAVA" = `devicon-java-plain-wordmark ${sizeIcon}`,
  "NODE" = `devicon-nodejs-plain-wordmark colored ${sizeIcon}`,
  "EXPRESS" = `devicon-express-original-wordmark ${sizeIcon}`,
  "PYTHON" = `devicon-python-plain-wordmark colored ${sizeIcon}`,
  "TAILWIND" = `devicon-tailwindcss-original colored ${sizeIcon}`,
  "POSTGRESQL" = `devicon-postgresql-plain-wordmark colored ${sizeIcon}`,
  "DOCKER" = `devicon-docker-plain-wordmark colored ${sizeIcon}`
}

export type CategoryWork = 'All' | 'Game' | 'Apis' | 'Crud' | 'Style' | 'Otros' | 'Consola' | 'inProgress';

export interface Tecnologys {
  name: string,
  classIcon: IconTecnology,
  color?: string;
}

export interface Wokrs {
  name          : string;
  srcImg        : string;
  hrefCode      : string;
  hrefDemo      : string;
  useTecnology  : Tecnologys[];
  category      : CategoryWork;
  description?  : string;
}