import { AboutMe } from "src/app/interfaces";

const pathCertificate: string = 'assets/certificates';
const extension: string = 'certificate.pdf';

export const EXPERIENCIA: AboutMe[] = [
  {
    date: '2023(Julio) - 2023(Octubre)',
    title: 'Sistema de Inventario',
    subtitle: 'Participé en la creación del sistema',
  },{
    date: '2023 - 2024',
    title: 'Sistema de Almacen',
    subtitle: 'Implementando sistema de organización de Racks',
  },{
    date: '2024',
    title: 'Diseño de Portafolio Empresarial',
    subtitle: 'Participación en La parte de diseño web',
  },{
    date: '2024',
    title: 'Diseño de Reportes',
    subtitle: 'Utilizando JasperReports, reportes para los sistemas hechos',
  },{
    date: '2024 - Presente',
    title: 'Sistema de reservas y gestión',
    subtitle: 'Sitio web de reserva de hospedajes con método de pago QR con Banco nacional. Como también sitio de administración',
  }
];

export const EDUCATION: AboutMe[] = [
  {
    date: '2020 - 2022',
    title: 'Cursos de YouTube',
    subtitle: 'de Html, Css y JavaScript',
  },{
    date: '2022(Diciembre) - 2023(Junio)',
    title: 'Programa One Alura',
    subtitle: 'Especialización en BackEnd con Java',
    href: 'https://app.aluracursos.com/user/mikicuellar20/program/5/certificate',
  },{
    date: '2023(Marzo) - 2023(Julio)',
    title: 'Programación con JavaScript (Cisco)',
    subtitle: 'Curso avanzado con JavaScript',
  },{
    date: '2024',
    title: 'BootCamp BackEnd con Java',
    subtitle: 'BootCamp con Alura Latam',
  }
];

export const CERTIFICATES: AboutMe[] = [
  {
    title: 'Java-SpringBoot',
    href: `${pathCertificate}/alura/java-springboot-delante.${extension}`,
  },{
    title: 'ProgramaOne Alura',
    href: `${pathCertificate}/alura/programa-one-delante.${extension}`,
  },{
    title: 'JavaScript',
    href: `${pathCertificate}/cisco/js.${extension}`,
  },{
    title: 'Solid CleanCode',
    href: `${pathCertificate}/devtalles/solid-cleancode.${extension}`,
  },{
    title: 'VS Code',
    href: `${pathCertificate}/devtalles/vscode.${extension}`,
  },{
    title: 'Node.Js: De cero a experto',
    href: `${pathCertificate}/devtalles/node.${extension}`,
  },{
    title: 'Nest: Desarrollo backend escalable con Node',
    href: `${pathCertificate}/devtalles/nest.${extension}`,
  },{
    title: 'Docker',
    href: `${pathCertificate}/devtalles/docker.${extension}`,
  },
];