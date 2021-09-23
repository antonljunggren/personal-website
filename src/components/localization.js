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

    mainSkills: 'Main skills',
    learningSkills:
      'I am good and fast at learning new things. I want to constantly improve but also understand the importance of immersing myself in the details.',
    backendSkills:
      'Backend development is the part that I feel most confident about. Where I have used SQL, Java, .NET & ASP Classic, among other things.',
    csharpSkills: 'C# is the language I have the most knowledge in as it is the language that I first started with.',

    myProjects: 'My Projects',
    kulturjakten: 'Kulturjakten (Culture-hunt) - Gästrikland',
    //Long
    aboutText:
      'Graduated computer engineer, currently working as a IT consultant. ' +
      'Always been interested in everything "Tech" and surrounding fields. ' +
      'Started programming at a young age, experimenting with making video games and programs. ' +
      'Main interests are building and tinkering with stuff, from computers and rc airplanes to embedded systems. ',

    kulturjaktenText:
      'The biggest project I have done is Kulturjakten Gästrikland. ' +
      'It was a project that was developed in a course in my education between 2019 - 2020. ' +
      'The course was about carrying out a project for a real customer, not the school. ' +
      'I and two others then chose to work with Naturkraft Gästrikland. ' +
      'They wanted a mobile application where users could look for cultural goals and learn from them areas. \n\n' +
      'My role in this work was a small version of a project manager. ' +
      'We were three people with good knowledge and ambition, I handled most of the communication customer and planning of the project. ' +
      'But the project was carried out in a democratic way and we all had different areas of responsibility. ' +
      'My area was mainly business logic in the application and the Android version. \n\n' +
      'There was already an application created by students the year before, but it was created in Android Studio and the cultural goals of hard-coded, ' +
      'so we chose to rebuild the entire application from scratch. ' +
      'This was done using Xamarin with .NET C #, so that the application could be exported to both iOS and Android. ' +
      'An interface was created in PHP, which linked to a MySQL database, so that the customer could add cultural goals dynamically. \n\n' +
      'During the summer of 2020, I carried out a continuation work on the application myself. ' +
      'The customer wanted the application to be launched on the App Store and Google Play Store, and that some bugs needed to be fixed. ' +
      'The work was performed as a consulting job on its own. ',
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

    mainSkills: 'Främsta kompetenser',
    learningSkills:
      'Jag är bra och snabb på att lära mig nya saker. Jag vill ständigt förbättras men förstår även vikten av att fördjupa sig i detaljerna.',
    backendSkills: 'Backend utveckling är den del som jag känner mig mest säker på. Där jag bland annat har använt SQL, Java, .NET & ASP Classic.',
    csharpSkills: 'C# är det språk som jag har mest kompetens inom då det är de språk jag började med tidigt.',

    myProjects: 'Mina projekt',
    kulturjakten: 'Kulturjakten Gästrikland',
    //Long
    aboutText:
      'Examinerad Dataingenjör, arbetar för nuvarande som IT-konsult. ' +
      'Har alltid varit intresserad av allt kring teknik och alla områden omkring. ' +
      'Började programmera vid 12 års åldern, främst experimentering kring datorspel men även program. ' +
      'Huvudsakliga intressen är att bygga och meka med saker, som datorer, RC-flygplan och inbyggda system.',

    kulturjaktenText:
      'Det största projekt som jag har gjort är Kulturjakten Gästrikland. ' +
      'Det var ett projekt som utvecklades i en kurs i min utbildning mellan 2019 - 2020. ' +
      'Kursen handlade om att utföra ett projekt mot en riktig kund, alltså inte skolan. ' +
      'Jag och två till valde då att arbeta med Naturkraft Gästrikland. ' +
      'De ville ha en mobil applikation där användare kunde leta efter kulturmål och ta lärdom om dessa områden. \n\n' +
      'Min roll i detta arbete var en liten version av en projektledare. ' +
      'Vi var tre personer med goda kunnskaper och ambition, jag skötte den stora delen av kommunikation till kund samt planering av projektet. ' +
      'Men projektet utfördes på ett demokratiskt sätt och vi alla hade olika ansvarsområden. ' +
      'Mitt område var främst buisness logic i applikationen samt Android versionen. \n\n' +
      'Det fanns redan en applikation som skapades av studenter året innan, men den var skapad i Android Studio och kulturmålen av hårdkodade, ' +
      'så vi valde att bygga om hela applikationen från grunden. ' +
      'Detta utfördes med hjälp av Xamarin med .NET C#, så att applikationen kunde exporteras både till iOS och Android. ' +
      'Ett gränssnitt skapades i PHP, som kopplade till en MySQL databas, detta så att kunden kunde lägga till kulturmål dynamiskt. \n\n' +
      'Under sommaren 2020 utförde jag ett fortsättningsarbete på applikationen själv. ' +
      'Kunden ville att applikationen skulle läggas ut på App Store och Google Play Store, samt att en del buggar behövdes fixas. ' +
      'Arbetet utfördes som ett konsultjobb på egen hand. ',
  },
});

export default Localize;
