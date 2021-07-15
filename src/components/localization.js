import LocalizedStrings from 'react-localization';

const Localize = new LocalizedStrings({
  en: {
    //Short
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    hello: 'Hello, World!',
    language: 'Language',
    error: 'Something went wrong',
    go_back: 'Go back to home',
    computerEngineer: 'Computer Engineer',
    itConsultant: 'IT Consultant',
    cv: 'CV',
    //Long
    aboutText:
      'Graduated computer engineer, currently working as a IT consultant. ' +
      'Always been interested in everything "Tech" and surrounding fields. ' +
      'Started programming at a young age, experimenting with making video games and programs. ' +
      'Main interests are building and tinkering with stuff, from computers and rc airplanes to embedded systems. ',
  },
  sv: {
    //Short
    home: 'Hem',
    about: 'Om',
    projects: 'Projekt',
    hello: 'Hej, Världen!',
    language: 'Språk',
    error: 'Något gick fel',
    go_back: 'Gå tillbaka till hemsidan',
    computerEngineer: 'Dataingenjör',
    itConsultant: 'IT Konsult',
    cv: 'CV',
    //Long
    aboutText:
      'Examinerad Dataingenjör, arbetar för nuvarande som IT-konsult. \n' +
      'Har alltid varit intresserad av allt kring teknik och alla områden omkring. ' +
      'Började programmera vid 12 års åldern, främst experimentering kring datorspel men även program. ' +
      'Huvudsakliga intressen är att bygga och meka med saker, som datorer, RC-flygplan och inbyggda system.',
  },
});

export default Localize;
