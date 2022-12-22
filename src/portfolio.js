const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Brendan Ryan',
  role: 'Front End Engineer',
  description:
    'Software developer fluent in Ruby on Rails, Javascript, React, Git, Node.js, Express, and Electron eager to continue a career in the field. I worked at Visible Body on an educational web app based in Ruby on Rails. I was a professional librarian for over a decade, working in academic, public, and special interest libraries. Throughout this career, I incorporated software development in my work whenever possible, building mobile websites, digital collections archives, ebook archives of scholarly materials, and other digital tools to improve workflow. I really enjoyed this work and wrote a book about ebooks and tablets. I viewed it as an extension of library work, organizing information to present it. When the opportunity presented itself to learn coding professionally, I jumped at the chance. I wanted a new challenge and General Assembly provided the perfect program in software engineering that I could complete on a part-time basis remotely while continuing to work full-time as a librarian. After completing this program and gaining a foundation in JavaScript, React, Ruby on Rails, Git, and other languages ',
  resume: 'https://drive.google.com/file/d/1dEQx0dT3Y6RimdfnpMAG9KtX-MIP0k91/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/brendan-r-ryan',
    github: 'https://github.com/3rendan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
]

const smallProjects = [
  // SmallProjects can be added an removed
  // if there are no projects, SmallProjects section won't show up
  {
    name: 'ATH | SPA',
    description:
      'A React.js single page application using the API from http://digital.provath.org/api to display the art collection of the Providence Athenaeum available at dpa.brendanryan.xyz. Now updated to use ContextAPI and custom hooks to pull data from the API and populate the state. The project is presently being revised to incorporate SASS styling. Throughout the process of instituting new styles the focus will be on making the project more responsive to different screen sizes.',
    stack: ['ContextAPI', 'SASS', 'React', 'API'],
    sourceCode: 'https://github.com/3rendan/ATHtest',
    livePreview: 'http://dpa.brendanryan.xyz',
  },
  {
    name: 'House Marketplace',
    description:
      'A React.js single page application using Google Firebase to collect and store data, featuring Google SSO. Deployed with Vercel.',
    stack: ['Federated SSO', 'Google Firebase', 'React', 'Geolocation'],
    sourceCode: 'https://github.com/3rendan/house-marketplace',
    livePreview: 'http://hm.brendanryan.xyz',
  },
  {
    name: 'Skeumorph',
    description:
      'Electron app based on React.js for organinzing digital collections.',
    stack: ['Electron', 'Ruby on Rails', 'React'],
    sourceCode: 'https://github.com/3rendan/skeuomorph',
    livePreview: '',
  },
  {
    name: 'MODS Expanded',
    description:
      'A MODS metadata plugin for Omeka with the full complement of categories as used by the Digital Commonwealth. The live preview links to the page the project is deployed in.',
    stack: ['PHP', 'CMS', 'Omeka'],
    sourceCode: 'https://github.com/3rendan/MODS-Expanded',
    livePreview: 'https://digital.provat.org',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Ruby on Rails',
  'React',
  'ContextAP',
  'SASS',
  'Material UI',
  'Git',
  'Webpack',
  'PHP',
  'MySQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'brendan.ryan@pm.me',
}

export { header, about, projects, smallProjects, skills, contact }

