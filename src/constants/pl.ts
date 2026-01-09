export const CONTACT = {
  email: "contact@sysflow.one",
  phone: "+48 692 311 723",
  phoneLink: "tel:+48692311723",
  emailLink: "mailto:contact@sysflow.one",
  address: "Warszawa, Polska",
  linkedin: "https://www.linkedin.com/company/sysflow-one",
};

export const TRAINING_PRICE: number = 12000;

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Michał Kurdziel",
    role: "CEO & Founder",
    image: `${import.meta.env.BASE_URL}image/kurdziel.jpg`,
  },
  {
    name: "Ricardo Ribeiro",
    role: "Automation Manager",
    image: `${import.meta.env.BASE_URL}image/ribeiro.jpg`,
  },
];

export const TRAINING_FEATURES = [
  "Praktyczne podejście – minimum teorii",
  "Wsparcie po szkoleniu – dostęp do zespołu dwa tygodniu po zakończeniu",
  "2 Konsultacje case study – 1,5h dedykowane konkretnym wyzwaniom Twojej firmy",
  "Grupowy czat – bieżące odpowiedzi na pytania podczas trwania programu",
  "Materiały do samodzielnej pracy",
];

export const AGENDA_ITEMS = [
  {
    number: "01",
    title: "Wprowadzenie i Mindset",
    description:
      "Dlaczego optymalizacja pracy ma znaczenie i jak osiągać realne efekty. Organizacja szkolenia i pierwsze aplikacje.",
  },
  {
    number: "02",
    title: "Organizacja Stanowiska Pracy",
    description:
      "Ergonomia, cyfrowy minimalizm i struktury folderów – fundament efektywności.",
  },
  {
    number: "03",
    title: "Narzędzia Efektywności",
    description:
      "Metody wspierające głęboką pracę i zarządzanie uwagą w świecie rozpraszaczy.",
  },
  {
    number: "04",
    title: "Globalne Skróty Klawiaturowe",
    description:
      "Konfiguracja i praktyczne zastosowania, które oszczędzą godziny tygodniowo.",
  },
  {
    number: "05",
    title: "Rekomendowany Stack Narzędzi",
    description:
      "Zestaw aplikacji, z których korzystamy na co dzień i które sprawdziły się w praktyce.",
  },
  {
    number: "06",
    title: "Automatyzacje",
    description:
      "Make, Zapier i inne platformy no-code do automatyzacji powtarzalnych zadań.",
  },
  {
    number: "07",
    title: "Bazy Danych",
    description:
      "Praktyczna praca z Airtable, Notion i innymi systemami zarządzania informacją.",
  },
  {
    number: "08",
    title: "Prywatność i Bezpieczeństwo",
    description:
      "Ochrona danych firmowych, anonimowość online i zabezpieczenia przed zagrożeniami.",
  },
  {
    number: "09",
    title: "Konsultacje Case Study",
    description:
      "Dedykowane 1,5h na rozwiązanie konkretnych wyzwań w Twojej organizacji.",
  },
];

export const PROCESS_STEPS = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    title: "Audyt i Analiza",
    description:
      "Diagnozujemy obecne systemy, identyfikujemy procesy do automatyzacji i ustalamy priorytety według najlepszego zwrotu z inwestycji.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Migracja Danych",
    description:
      "Transfer danych z istniejących systemów zunifikowanej platformy - tworzymy źródło prawdy dla danych w Twojej firmie.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    title: "Automatyzacja Procesów",
    description:
      "Implementacja automatyzacji według priorytetów – zaczynamy od działań przynoszących największą wartość dodaną.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    title: "Iteracyjne Doskonalenie",
    description:
      "Ciągłe udoskonalanie systemu na podstawie feedbacku, aż osiągnie pełną funkcjonalność odpowiadającą potrzebom firmy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    title: "Transfer Wiedzy",
    description:
      "Szkolimy zespół, tłumaczymy mechanizmy działania – zyskujecie autonomię w rozwoju systemu.",
  },
];

export const AUTOMATION_AREAS = [
  {
    title: "Finanse i Księgowość",
    description:
      "Automatyczne śledzenie kosztów i przychodów z portfeli krypto, fintechów (Revolut, Wise, Zen). Monitoring wartości majątku w czasie rzeczywistym. Generowanie raportów finansowych bez ręcznej pracy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    title: "Zarządzanie HR",
    description:
      "Centralna baza danych pracowników, automatyzacja procesów onboardingowych, śledzenie urlopów i czasu pracy. Wszystkie informacje kadrowe w jednym miejscu.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
  },
  {
    title: "Workflow Dokumentów",
    description:
      "Automatyczny obieg dokumentów, elektroniczne obiegi zatwierdzania, inteligentne archiwizowanie. Koniec z gubionymi dokumentami i niejasnym statusem spraw.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    title: "Raportowanie i Analityka",
    description:
      "Wizualizacja kluczowych metryk biznesowych, automatyczne dashboardy, alerty o istotnych zdarzeniach. Podejmuj decyzje w oparciu o aktualne dane.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Procesy Sprzedażowe oraz marketingowe",
    description:
      "Automatyzacja działań sprzedażowych, integracja CRM z innymi systemami, śledzenie leadów i konwersji. Maksymalizuj efektywność zespołu sprzedaży.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Integracje Custom",
    description:
      "Każda firma jest inna – możemy zautomatyzować praktycznie każdy powtarzalny proces w Twojej organizacji. Zapytaj o możliwości!",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: "💼",
    title: "Praktyczne doświadczenie",
    description: "wdrażamy działające systemy, które ułatwiają życie",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: "🎓",
    title: "Edukacja",
    description: "nie tylko wdrażamy, ale uczymy",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
  },
  {
    icon: "🚀",
    title: "Najnowsze technologie",
    description: "AI, Low-Code/No-Code",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
  },
  {
    icon: "🔄",
    title: "Iteracyjne podejście",
    description: "system rośnie razem z firmą",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

export const PROBLEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    text: "Szukasz dokumentów po chatach, mailach, innych aplikacjach?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    text: "Masz nowoczesne narzędzia, ale masz poczucie, że nie wykorzystujecie ich potencjału.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    text: "Jak sprawić, żeby AI było efektywne?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    text: "Masz nadmiar systemów w firmie, a każdy dział korzysta z osobnych aplikacji?",
  },
];

export const PROBLEMS_WDROZENIA = [
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    text: "Twój zespół traci godziny na ręczne przepisywanie danych między systemami?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    text: "Raporty i zestawienia wymagają żmudnej pracy w Excelu każdego tygodnia?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    text: "Brakuje Ci jednego źródła prawdy dla danych w firmie?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    text: "Procesy biznesowe są zbyt wolne i podatne na błędy ludzkie?",
  },
];

export const TESTIMONIALS = [
  {
    content: "Serdecznie polecam współpracę z GoFlow. Praca z zespołem przebiega w bardzo dobrej, partnerskiej atmosferze, przy jednoczesnym zachowaniu wysokiego poziomu profesjonalizmu. Dużą wartością jest ich podejście nastawione na realne potrzeby organizacji, skupienie na porządkowaniu i upraszczaniu procesów, a nie narzucaniu jednego „gotowego" rozwiązania. Dzięki wdrożonym automatyzacjom i rozwiązaniom opartym o AI udało nam się usprawnić wiele kluczowych obszarów operacyjnych, finansowych i biznesowych w Cookie3.",
    author: "Wojtek Mrówka",
    role: "Chief Operating Officer",
    company: "Cookie3",
    image: `${import.meta.env.BASE_URL}image/goryla-wojtek-mrowka.jpeg`,
  },
];

export const HOME_PAGE = {
  HERO: {
    LABEL: "SysFlow /",
    TITLE: "Automatyzacja, AI, bezpieczeństwo i systemy zarządzania danymi",
    SUBTITLE: "SysFlow.One to software house, który przekształca sposób pracy firm poprzez automatyzację, AI, bezpieczeństwo i systemy zarządzania danymi.",
    BUTTON_PRIMARY: "Umów spotkanie",
    BUTTON_SECONDARY: "Zobacz projekty",
  },
  SOLUTIONS: {
    TITLE: "Nasze Rozwiązania",
    DESCRIPTION: "Też przez to przechodziliśmy — i odpowiedź znaleźliśmy w technologiach oraz mądrej automatyzacji. Poświęciliśmy czas na analizę narzędzi, przetestowaliśmy je w praktyce i zostawiliśmy tylko te, które realnie upraszczają pracę. Porządkujemy procesy, łączymy systemy, wprowadzamy AI tam, gdzie ma sens — aż w końcu układamy spójny, działający ekosystem pracy. Efekt? Mniej chaosu, szybsze decyzje i więcej czasu na kluczowe zadania.",
    SUBHEADING: "Jak możemy pomóc?",
    CARDS: {
      TRAINING: {
        TITLE: "Szkolenie",
        DESCRIPTION: "Kompleksowy program edukacyjny z optymalizacji pracy, automatyzacji, bezpieczeństwa i prywatności oraz AI",
        LINK: "Dowiedz się więcej",
        URL: "/szkolenie",
      },
      FLOWONE: {
        TITLE: "FlowOne SYSTEM",
        DESCRIPTION: "Wdrożenie zaawansowanego systemu do zarządzania danymi i automatyzacji procesów biznesowych przy wykorzystaniu narzędzi typu low-code.",
        LINK: "Dowiedz się więcej",
        URL: "/wdrozenia",
      },
    },
  },
  TESTIMONIALS: {
    TITLE: "Co mówią nasi klienci",
  },
  CTA: {
    TITLE: "Skontaktuj się z nami",
    DESCRIPTION: "Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej firmie.",
    BUTTON_PRIMARY: "Umów spotkanie",
  },
};

export const NAV = {
  TRAINING: "Szkolenie",
  IMPLEMENTATIONS: "FlowOne",
  TEAM: "Zespół",
  CONTACT: "Kontakt",
  URLS: {
    TRAINING: "szkolenie",
    IMPLEMENTATIONS: "wdrozenia",
  }
};

export const TRAINING_PAGE = {
  HERO: {
    LABEL: "SysFlow / Szkolenie",
    TITLE: "Przekształć Sposób Pracy Swojego Zespołu",
    SUBTITLE: "Kompleksowy program szkoleniowy: 8 spotkań, które wyposażą Twój zespół w praktyczną wiedzę i narzędzia do natychmiastowego zastosowania.",
    BUTTON_PRIMARY: "Umów spotkanie",
    BUTTON_SECONDARY: "Szkolenie",
  },
  CTA: {
    TITLE: "Zarezerwuj szkolenie dla swojego zespołu",
    DESCRIPTION: "Skontaktuj się z nami, aby omówić szczegóły programu i dostosować go do potrzeb Twojej firmy.",
    BUTTON_PRIMARY: "Umów spotkanie",
  }
};

export const IMPLEMENTATIONS_PAGE = {
  HERO: {
    LABEL: "SysFlow / FlowOne",
    TITLE: "Automatyzacja i Systemy Zarządzania Danymi",
    SUBTITLE: "Kompleksowe wdrożenia systemów automatyzacji. Od audytu, przez migrację danych, po pełną automatyzację procesów w Twojej firmie.",
    BUTTON_PRIMARY: "Umów spotkanie",
    BUTTON_SECONDARY: "Zobacz proces",
  },
  CTA: {
    TITLE: "Rozpocznij transformację swojej firmy",
    DESCRIPTION: "Umów bezpłatną konsultację i dowiedz się, jak możemy zautomatyzować procesy w Twojej organizacji.",
    BUTTON_PRIMARY: "Umów spotkanie",
  }
};

export const PROBLEMS_COMPONENT = {
  TITLE: "Czy w firmie w której pracujesz…",
};

export const FLOW_ONE_COMPONENT = {
  TITLE: "FlowOne SYSTEM: Inteligentne Centrum Danych",
  DESCRIPTION: "FlowOne SYSTEM to kompleksowe rozwiązanie, które centralizuje dane z wszystkich systemów firmowych i automatyzuje kluczowe procesy. Wykorzystujemy technologie AI oraz platformy Low-Code/No-Code, aby dostarczyć system idealnie dopasowany do Twojej firmy.",
  GOAL: {
    TITLE: "Cel wdrożenia",
    DESCRIPTION: "Usprawnienie pracy poprzez automatyzację powtarzalnych zadań i scentralizowanie danych w jednym, intuicyjnym systemie. Koniec z przeskakiwaniem między dziesiątkami aplikacji – wszystko w jednym miejscu.",
    BILLING: "Model rozliczeniowy: FTE/success fee"
  },
  PROCESS_TITLE: "Proces Wdrożenia FlowOne SYSTEM",
  AREAS: {
    TITLE: "Przykładowe Obszary Automatyzacji",
    SUBTITLE: "FlowOne SYSTEM można dostosować do niemal każdego procesu biznesowego. Oto najczęściej automatyzowane obszary:"
  }
};

export const WHY_CHOOSE_COMPONENT = {
  TITLE: "Dlaczego wybrać?",
  PHILOSOPHY: {
    TITLE: "Nasza Filozofia",
    DESCRIPTION: "Wierzymy, że technologia powinna służyć ludziom, a nie na odwrót. Dlatego projektujemy systemy intuicyjne, które realnie oszczędzają czas i redukują frustrację."
  }
};

export const TRAINING_COMPONENT = {
  TITLE: "Szkolenie: Przekształć Sposób Pracy Zespołu",
  DESCRIPTION: "Nasze kompleksowe szkolenie to 8 spotkań, które wyposażą Twój zespół w praktyczną wiedzę i narzędzia do natychmiastowego zastosowania. Każde spotkanie trwa 60 minut i kończy się konkretnymi wskazówkami implementacyjnymi. Celem jest znaczący efekt po każdym spotkaniu.",
  FEATURES_TITLE: "Co wyróżnia nasze szkolenie?",
  PRICE: {
    TITLE: "Koszt",
    VALUE: 12000,
    NOTE: "Niektóre prezentowane aplikacje są płatne – decyzja o ich zakupie należy do uczestników."
  },
  AGENDA: {
    TITLE: "Agenda Szkolenia",
    SUBTITLE: "Program dostosowujemy do specyfiki Twojej firmy, ale standardowa agenda obejmuje następujące moduły:"
  }
};

export const TEAM_COMPONENT = {
  TITLE: "Zespół SysFlow",
  DESCRIPTION: "Za sukcesem firmy stoją doświadczeni specjaliści z pasją do optymalizacji i automatyzacji."
};

export const CTA_COMPONENT = {
  TITLE: "Zacznij Transformację Już Dziś",
  DESCRIPTION: "Czy Twoja firma jest gotowa na kolejny poziom efektywności? Niezależnie od tego, czy interesuje Cię kompleksowe szkolenie zespołu, czy wdrożenie zaawansowanego systemu automatyzacji – jesteśmy tutaj, aby pomóc.",
  STEPS_TITLE: "Następne Kroki:",
  STEPS: [
    { BOLD: "Umów bezpłatną konsultację", TEXT: "porozmawiajmy o Twoich potrzebach" },
    { BOLD: "Otrzymaj spersonalizowaną propozycję", TEXT: "dostosowaną do Twojej firmy" },
    { BOLD: "Rozpocznij transformację", TEXT: "zacznij oszczędzać czas już teraz" }
  ],
  BUTTON_PRIMARY: "Umów spotkanie",
  BUTTON_SECONDARY: "Zadzwoń"
};
