/* EL CAPITOL BIENESTAR — idiomas y funcionalidades */
"use strict";

const translations = {
  es: {
    skip:"Saltar al contenido", menuOpen:"Abrir menú", menuClose:"Cerrar menú", languageLabel:"Seleccionar idioma",
    navHome:"Inicio",navServices:"Servicios",navAbout:"Sobre mí",navLocation:"Ubicación",navFaq:"Preguntas",navGallery:"Galería",navContact:"Contacto",book:"Reservar cita",
    heroEyebrow:"UN ESPACIO PARA VOLVER A TI",heroTitle:"El bienestar empieza<br><em>cuando te escuchas.</em>",heroText:"Un momento de calma, cuidado y atención personal a través del quiromasaje, en el corazón de Palma.",heroCta:"Reserva tu momento",heroMore:"Descubrir tratamientos",heroNote:"Atención personal · Palma de Mallorca",logoCaption:"Cuidado personal · Equilibrio · Bienestar",
    stripText:"Un trato cercano. Un espacio acogedor. Un tiempo dedicado a tu bienestar.",
    servicesEyebrow:"ELIGE TU MOMENTO",servicesTitle:"Tiempo para <em>cuidarte</em>",servicesText:"Sesiones de quiromasaje adaptadas al tiempo que quieras dedicarte.",
    duration30:"30 minutos",duration60:"60 minutos",duration90:"90 minutos",service30:"Pausa renovadora",service60:"Tiempo de bienestar",service90:"Ritual completo",desc30:"Un primer espacio para desconectar y dedicarte atención.",desc60:"Una sesión más amplia para disfrutar de un cuidado pausado.",desc90:"Más tiempo para regalarte una experiencia de cuidado sin prisas.",popular:"Una opción equilibrada",bookWhatsApp:"Consultar por WhatsApp ↗",priceNote:"Las sesiones se acuerdan previamente. Consulta disponibilidad y detalles al reservar.",
    aboutEyebrow:"QUIÉN TE ACOMPAÑA",aboutTitle:"Hola, soy <em>Miguel.</em>",aboutP1:"En El Capitol Bienestar quiero ofrecerte un espacio tranquilo donde puedas parar, respirar y dedicar un tiempo a cuidarte.",aboutP2:"Cada persona y cada día son diferentes. Por eso, antes de comenzar, hablamos de lo que necesitas y de tus preferencias para orientar la sesión con atención y respeto.",aboutVisual:"Atención cercana y personalizada",aboutCta:"Hablemos de tu sesión",
    locationEyebrow:"ESTAMOS EN PALMA",locationTitle:"Un rincón de calma <em>en la ciudad</em>",addressLabel:"Dirección",hoursLabel:"Horario orientativo",hoursText:"10:00–20:00. Confirma la disponibilidad al reservar.",mapCta:"Abrir ubicación en Maps ↗",
    faqEyebrow:"ANTES DE TU VISITA",faqTitle:"Preguntas <em>frecuentes</em>",faqQ1:"¿Cómo puedo reservar una sesión?",faqA1:"Puedes escribir directamente por WhatsApp. Acordaremos el día, la hora y la duración según disponibilidad.",faqQ2:"¿Qué duración puedo elegir?",faqA2:"Hay sesiones de 30, 60 y 90 minutos. Consulta cuál encaja mejor con lo que buscas.",faqQ3:"¿Qué debo hacer antes de la sesión?",faqA3:"Ven con ropa cómoda y comenta antes de empezar cualquier preferencia, molestia o circunstancia relevante para adaptar la sesión con prudencia.",faqQ4:"¿El quiromasaje sustituye un tratamiento médico?",faqA4:"No. El quiromasaje es una práctica de bienestar y no sustituye el diagnóstico ni el tratamiento de profesionales sanitarios. Si tienes dudas de salud, consulta con tu profesional sanitario.",faqQ5:"¿Cuál es el horario?",faqA5:"El horario orientativo es de 10:00 a 20:00. Es necesario confirmar la disponibilidad al solicitar cita.",
    reviewsEyebrow:"TU EXPERIENCIA CUENTA",reviewsTitle:"Opiniones <em>reales</em>",reviewsText:"Este espacio está preparado para compartir las experiencias de clientes que quieran dejar su opinión. Próximamente podrás leer aquí reseñas verificadas.",reviewsPlaceholder:"Las opiniones de clientes se publicarán con su autorización.",
    galleryEyebrow:"EL ESPACIO",galleryTitle:"Un ambiente para <em>desconectar</em>",galleryText:"Próximamente, fotografías reales de El Capitol Bienestar.",gallerySpace:"El espacio",galleryRoom:"La sala",galleryDetails:"Los detalles",galleryNote:"Los paneles son espacios reservados para tus fotografías; no son imágenes de stock.",
    tipsEyebrow:"PEQUEÑOS GESTOS, GRANDES PAUSAS",tipsTitle:"Consejos para tu <em>bienestar</em>",tip1Title:"Haz una pausa",tip1Text:"Reserva unos minutos para respirar con calma y apartarte de las pantallas.",tip2Title:"Cambia de postura",tip2Text:"Si pasas mucho tiempo sentado, levántate y mueve suavemente el cuerpo de vez en cuando.",tip3Title:"Respeta tu ritmo",tip3Text:"Descansa, hidrátate y adapta tus actividades a cómo te encuentras cada día.",tipsDisclaimer:"Estos consejos son generales y no sustituyen recomendaciones médicas individualizadas.",
    contactEyebrow:"TU MOMENTO TE ESPERA",contactTitle:"Regálate un momento <em>para ti.</em>",contactText:"Escríbeme y buscamos el momento que mejor te venga.",contactCta:"Reservar por WhatsApp ↗",footerPhrase:"Quiromasaje y cuidado personal en Palma de Mallorca.",backTop:"Volver arriba ↑"
  },
  ca: {
    skip:"Ves al contingut",menuOpen:"Obrir menú",menuClose:"Tancar menú",languageLabel:"Selecciona l'idioma",navHome:"Inici",navServices:"Serveis",navAbout:"Sobre mi",navLocation:"Ubicació",navFaq:"Preguntes",navGallery:"Galeria",navContact:"Contacte",book:"Reserva cita",
    heroEyebrow:"UN ESPAI PER TORNAR A TU",heroTitle:"El benestar comença<br><em>quan t'escoltes.</em>",heroText:"Un moment de calma, cura i atenció personal a través del quiromassatge, al cor de Palma.",heroCta:"Reserva el teu moment",heroMore:"Descobreix els tractaments",heroNote:"Atenció personal · Palma de Mallorca",logoCaption:"Cura personal · Equilibri · Benestar",stripText:"Un tracte proper. Un espai acollidor. Un temps dedicat al teu benestar.",
    servicesEyebrow:"TRIA EL TEU MOMENT",servicesTitle:"Temps per <em>cuidar-te</em>",servicesText:"Sessions de quiromassatge adaptades al temps que et vulguis dedicar.",duration30:"30 minuts",duration60:"60 minuts",duration90:"90 minuts",service30:"Pausa renovadora",service60:"Temps de benestar",service90:"Ritual complet",desc30:"Un primer espai per desconnectar i dedicar-te atenció.",desc60:"Una sessió més àmplia per gaudir d'una cura sense presses.",desc90:"Més temps per regalar-te una experiència de cura tranquil·la.",popular:"Una opció equilibrada",bookWhatsApp:"Consulta per WhatsApp ↗",priceNote:"Les sessions es concreten prèviament. Consulta la disponibilitat i els detalls en reservar.",
    aboutEyebrow:"QUI T'ACOMPANYA",aboutTitle:"Hola, soc <em>Miguel.</em>",aboutP1:"A El Capitol Bienestar vull oferir-te un espai tranquil on puguis parar, respirar i dedicar un temps a cuidar-te.",aboutP2:"Cada persona i cada dia són diferents. Per això, abans de començar, parlem del que necessites i de les teves preferències per orientar la sessió amb atenció i respecte.",aboutVisual:"Atenció propera i personalitzada",aboutCta:"Parlem de la teva sessió",
    locationEyebrow:"SOM A PALMA",locationTitle:"Un racó de calma <em>a la ciutat</em>",addressLabel:"Adreça",hoursLabel:"Horari orientatiu",hoursText:"10:00–20:00. Confirma la disponibilitat en reservar.",mapCta:"Obre la ubicació a Maps ↗",
    faqEyebrow:"ABANS DE LA VISITA",faqTitle:"Preguntes <em>freqüents</em>",faqQ1:"Com puc reservar una sessió?",faqA1:"Pots escriure directament per WhatsApp. Acordarem el dia, l'hora i la durada segons la disponibilitat.",faqQ2:"Quina durada puc triar?",faqA2:"Hi ha sessions de 30, 60 i 90 minuts. Consulta quina s'adapta millor al que busques.",faqQ3:"Què he de fer abans de la sessió?",faqA3:"Vine amb roba còmoda i comenta abans de començar qualsevol preferència, molèstia o circumstància rellevant per adaptar la sessió amb prudència.",faqQ4:"El quiromassatge substitueix un tractament mèdic?",faqA4:"No. El quiromassatge és una pràctica de benestar i no substitueix el diagnòstic ni el tractament de professionals sanitaris. Si tens dubtes de salut, consulta el teu professional sanitari.",faqQ5:"Quin és l'horari?",faqA5:"L'horari orientatiu és de 10:00 a 20:00. Cal confirmar la disponibilitat en demanar cita.",
    reviewsEyebrow:"LA TEVA EXPERIÈNCIA COMPTA",reviewsTitle:"Opinions <em>reals</em>",reviewsText:"Aquest espai està preparat per compartir les experiències dels clients que vulguin deixar la seva opinió. Ben aviat hi podràs llegir ressenyes verificades.",reviewsPlaceholder:"Les opinions dels clients es publicaran amb la seva autorització.",
    galleryEyebrow:"L'ESPAI",galleryTitle:"Un ambient per <em>desconnectar</em>",galleryText:"Ben aviat, fotografies reals d'El Capitol Bienestar.",gallerySpace:"L'espai",galleryRoom:"La sala",galleryDetails:"Els detalls",galleryNote:"Els plafons són espais reservats per a les teves fotografies; no són imatges d'estoc.",
    tipsEyebrow:"PETITS GESTOS, GRANS PAUSES",tipsTitle:"Consells per al teu <em>benestar</em>",tip1Title:"Fes una pausa",tip1Text:"Reserva uns minuts per respirar amb calma i allunyar-te de les pantalles.",tip2Title:"Canvia de postura",tip2Text:"Si passes molta estona assegut, aixeca't i mou suaument el cos de tant en tant.",tip3Title:"Respecta el teu ritme",tip3Text:"Descansa, hidrata't i adapta les activitats a com et trobis cada dia.",tipsDisclaimer:"Aquests consells són generals i no substitueixen recomanacions mèdiques individualitzades.",
    contactEyebrow:"EL TEU MOMENT T'ESPERA",contactTitle:"Regala't un moment <em>per a tu.</em>",contactText:"Escriu-me i trobarem el moment que et vagi millor.",contactCta:"Reserva per WhatsApp ↗",footerPhrase:"Quiromassatge i cura personal a Palma de Mallorca.",backTop:"Torna a dalt ↑"
  },
  en: {
    skip:"Skip to content",menuOpen:"Open menu",menuClose:"Close menu",languageLabel:"Select language",navHome:"Home",navServices:"Services",navAbout:"About me",navLocation:"Location",navFaq:"FAQ",navGallery:"Gallery",navContact:"Contact",book:"Book an appointment",
    heroEyebrow:"A SPACE TO RECONNECT WITH YOURSELF",heroTitle:"Wellbeing begins<br><em>when you listen to yourself.</em>",heroText:"A moment of calm, care and personal attention through massage, in the heart of Palma.",heroCta:"Book your moment",heroMore:"Explore treatments",heroNote:"Personal care · Palma de Mallorca",logoCaption:"Personal care · Balance · Wellbeing",stripText:"A warm welcome. A peaceful space. Time dedicated to your wellbeing.",
    servicesEyebrow:"CHOOSE YOUR MOMENT",servicesTitle:"Time to <em>take care</em>",servicesText:"Massage sessions tailored to the time you would like to set aside for yourself.",duration30:"30 minutes",duration60:"60 minutes",duration90:"90 minutes",service30:"A refreshing pause",service60:"Time for wellbeing",service90:"The complete ritual",desc30:"A first opportunity to switch off and give yourself some attention.",desc60:"A longer session to enjoy unhurried personal care.",desc90:"More time to enjoy a relaxing care experience without rushing.",popular:"A balanced choice",bookWhatsApp:"Enquire on WhatsApp ↗",priceNote:"Sessions are arranged in advance. Please ask about availability and details when booking.",
    aboutEyebrow:"YOUR PRACTITIONER",aboutTitle:"Hello, I'm <em>Miguel.</em>",aboutP1:"At El Capitol Bienestar, I want to offer you a peaceful space where you can pause, breathe and take time to look after yourself.",aboutP2:"Every person and every day is different. Before we begin, we talk about your needs and preferences so the session can be approached with care and respect.",aboutVisual:"Personal and attentive care",aboutCta:"Let's talk about your session",
    locationEyebrow:"FIND US IN PALMA",locationTitle:"A peaceful corner <em>in the city</em>",addressLabel:"Address",hoursLabel:"Indicative hours",hoursText:"10:00–20:00. Please confirm availability when booking.",mapCta:"Open location in Maps ↗",
    faqEyebrow:"BEFORE YOUR VISIT",faqTitle:"Frequently asked <em>questions</em>",faqQ1:"How can I book a session?",faqA1:"Send a message directly on WhatsApp. We will agree on a day, time and session length subject to availability.",faqQ2:"What session lengths are available?",faqA2:"Sessions are available for 30, 60 or 90 minutes. Ask which option best suits what you are looking for.",faqQ3:"What should I do before the session?",faqA3:"Wear comfortable clothing and let me know beforehand about any preferences, discomfort or relevant circumstances so the session can be adapted carefully.",faqQ4:"Does massage replace medical treatment?",faqA4:"No. Massage is a wellbeing practice and does not replace diagnosis or treatment by healthcare professionals. If you have health concerns, consult your healthcare professional.",faqQ5:"What are the opening hours?",faqA5:"The indicative hours are 10:00 to 20:00. Availability must be confirmed when requesting an appointment.",
    reviewsEyebrow:"YOUR EXPERIENCE MATTERS",reviewsTitle:"Genuine <em>reviews</em>",reviewsText:"This space is ready to share feedback from clients who wish to leave a review. Verified reviews will appear here in due course.",reviewsPlaceholder:"Client reviews will be published with their permission.",
    galleryEyebrow:"THE SPACE",galleryTitle:"An atmosphere to <em>unwind</em>",galleryText:"Real photographs of El Capitol Bienestar will be added here soon.",gallerySpace:"The space",galleryRoom:"The room",galleryDetails:"The details",galleryNote:"These panels are reserved for your own photographs; they are not stock images.",
    tipsEyebrow:"SMALL HABITS, MEANINGFUL PAUSES",tipsTitle:"Wellbeing <em>tips</em>",tip1Title:"Take a pause",tip1Text:"Set aside a few minutes to breathe calmly and step away from screens.",tip2Title:"Change position",tip2Text:"If you sit for long periods, stand up and gently move your body from time to time.",tip3Title:"Respect your pace",tip3Text:"Rest, stay hydrated and adapt your activities to how you feel each day.",tipsDisclaimer:"These are general tips and do not replace individual medical advice.",
    contactEyebrow:"YOUR MOMENT IS WAITING",contactTitle:"Give yourself a moment <em>for you.</em>",contactText:"Send me a message and we can find a time that suits you.",contactCta:"Book on WhatsApp ↗",footerPhrase:"Massage and personal care in Palma de Mallorca.",backTop:"Back to top ↑"
  },
  fr: {
    skip:"Aller au contenu",menuOpen:"Ouvrir le menu",menuClose:"Fermer le menu",languageLabel:"Choisir la langue",navHome:"Accueil",navServices:"Prestations",navAbout:"À propos",navLocation:"Adresse",navFaq:"Questions",navGallery:"Galerie",navContact:"Contact",book:"Prendre rendez-vous",
    heroEyebrow:"UN ESPACE POUR SE RETROUVER",heroTitle:"Le bien-être commence<br><em>quand on s'écoute.</em>",heroText:"Un moment de calme, de soin et d'attention personnelle grâce au massage, au cœur de Palma.",heroCta:"Réservez votre moment",heroMore:"Découvrir les soins",heroNote:"Attention personnalisée · Palma de Majorque",logoCaption:"Soin personnel · Équilibre · Bien-être",stripText:"Un accueil chaleureux. Un espace apaisant. Du temps consacré à votre bien-être.",
    servicesEyebrow:"CHOISISSEZ VOTRE MOMENT",servicesTitle:"Du temps pour <em>prendre soin de vous</em>",servicesText:"Des séances de massage adaptées au temps que vous souhaitez vous accorder.",duration30:"30 minutes",duration60:"60 minutes",duration90:"90 minutes",service30:"Pause revitalisante",service60:"Temps de bien-être",service90:"Rituel complet",desc30:"Un premier moment pour déconnecter et prendre soin de vous.",desc60:"Une séance plus longue pour profiter d'un soin sans précipitation.",desc90:"Plus de temps pour profiter d'une expérience de détente à votre rythme.",popular:"Un choix équilibré",bookWhatsApp:"Demander sur WhatsApp ↗",priceNote:"Les séances sont convenues à l'avance. Veuillez demander les disponibilités et les détails lors de la réservation.",
    aboutEyebrow:"QUI VOUS ACCOMPAGNE",aboutTitle:"Bonjour, je suis <em>Miguel.</em>",aboutP1:"Chez El Capitol Bienestar, je souhaite vous offrir un espace paisible où vous pourrez faire une pause, respirer et prendre du temps pour vous.",aboutP2:"Chaque personne et chaque journée sont différentes. Avant de commencer, nous échangeons sur vos besoins et vos préférences afin d'aborder la séance avec attention et respect.",aboutVisual:"Une attention personnelle et attentive",aboutCta:"Parlons de votre séance",
    locationEyebrow:"NOUS SOMMES À PALMA",locationTitle:"Un havre de calme <em>en ville</em>",addressLabel:"Adresse",hoursLabel:"Horaires indicatifs",hoursText:"10 h–20 h. Veuillez confirmer les disponibilités lors de la réservation.",mapCta:"Ouvrir l'adresse dans Maps ↗",
    faqEyebrow:"AVANT VOTRE VISITE",faqTitle:"Questions <em>fréquentes</em>",faqQ1:"Comment réserver une séance ?",faqA1:"Vous pouvez envoyer directement un message sur WhatsApp. Nous conviendrons du jour, de l'heure et de la durée selon les disponibilités.",faqQ2:"Quelles durées sont proposées ?",faqA2:"Des séances de 30, 60 et 90 minutes sont proposées. Demandez quelle option correspond le mieux à vos attentes.",faqQ3:"Que dois-je faire avant la séance ?",faqA3:"Portez des vêtements confortables et signalez avant de commencer vos préférences, gênes ou toute circonstance utile afin d'adapter la séance avec prudence.",faqQ4:"Le massage remplace-t-il un traitement médical ?",faqA4:"Non. Le massage est une pratique de bien-être et ne remplace ni le diagnostic ni le traitement par des professionnels de santé. En cas de question médicale, consultez votre professionnel de santé.",faqQ5:"Quels sont les horaires ?",faqA5:"Les horaires indicatifs sont de 10 h à 20 h. Les disponibilités doivent être confirmées lors de la demande de rendez-vous.",
    reviewsEyebrow:"VOTRE EXPÉRIENCE COMPTE",reviewsTitle:"Avis <em>authentiques</em>",reviewsText:"Cet espace est prévu pour partager les retours des clients qui souhaitent donner leur avis. Des avis vérifiés seront publiés ici prochainement.",reviewsPlaceholder:"Les avis des clients seront publiés avec leur autorisation.",
    galleryEyebrow:"LE LIEU",galleryTitle:"Une atmosphère pour <em>déconnecter</em>",galleryText:"Des photos réelles d'El Capitol Bienestar seront bientôt ajoutées.",gallerySpace:"L'espace",galleryRoom:"La salle",galleryDetails:"Les détails",galleryNote:"Ces emplacements sont réservés à vos propres photos ; ce ne sont pas des images de banque d'images.",
    tipsEyebrow:"PETITS GESTES, GRANDES PAUSES",tipsTitle:"Conseils de <em>bien-être</em>",tip1Title:"Faites une pause",tip1Text:"Prenez quelques minutes pour respirer calmement et vous éloigner des écrans.",tip2Title:"Changez de posture",tip2Text:"Si vous restez longtemps assis, levez-vous et bougez doucement de temps en temps.",tip3Title:"Respectez votre rythme",tip3Text:"Reposez-vous, hydratez-vous et adaptez vos activités à votre forme du jour.",tipsDisclaimer:"Ces conseils sont généraux et ne remplacent pas un avis médical personnalisé.",
    contactEyebrow:"VOTRE MOMENT VOUS ATTEND",contactTitle:"Offrez-vous un moment <em>à vous.</em>",contactText:"Écrivez-moi et nous trouverons un moment qui vous convient.",contactCta:"Réserver sur WhatsApp ↗",footerPhrase:"Massage et soin personnel à Palma de Majorque.",backTop:"Retour en haut ↑"
  },
  de: {
    skip:"Zum Inhalt springen",menuOpen:"Menü öffnen",menuClose:"Menü schließen",languageLabel:"Sprache auswählen",navHome:"Start",navServices:"Angebote",navAbout:"Über mich",navLocation:"Standort",navFaq:"Fragen",navGallery:"Galerie",navContact:"Kontakt",book:"Termin buchen",
    heroEyebrow:"EIN ORT, UM ZU SICH ZU FINDEN",heroTitle:"Wohlbefinden beginnt,<br><em>wenn du auf dich hörst.</em>",heroText:"Ein Moment der Ruhe, Achtsamkeit und persönlichen Betreuung durch Massage – im Herzen von Palma.",heroCta:"Deinen Moment buchen",heroMore:"Anwendungen entdecken",heroNote:"Persönliche Betreuung · Palma de Mallorca",logoCaption:"Persönliche Pflege · Balance · Wohlbefinden",stripText:"Ein herzlicher Empfang. Ein angenehmer Ort. Zeit ganz für dein Wohlbefinden.",
    servicesEyebrow:"WÄHLE DEINEN MOMENT",servicesTitle:"Zeit, um auf dich <em>zu achten</em>",servicesText:"Massagesitzungen passend zu der Zeit, die du dir gönnen möchtest.",duration30:"30 Minuten",duration60:"60 Minuten",duration90:"90 Minuten",service30:"Erfrischende Pause",service60:"Zeit für Wohlbefinden",service90:"Das vollständige Ritual",desc30:"Ein erster Moment zum Abschalten und um dir Aufmerksamkeit zu schenken.",desc60:"Eine längere Sitzung für eine entspannte Pflege ohne Eile.",desc90:"Mehr Zeit für ein wohltuendes Erlebnis ganz ohne Zeitdruck.",popular:"Eine ausgewogene Wahl",bookWhatsApp:"Per WhatsApp anfragen ↗",priceNote:"Termine werden im Voraus vereinbart. Bitte frage bei der Buchung nach Verfügbarkeit und Einzelheiten.",
    aboutEyebrow:"WER DICH BEGLEITET",aboutTitle:"Hallo, ich bin <em>Miguel.</em>",aboutP1:"Bei El Capitol Bienestar möchte ich dir einen ruhigen Ort bieten, an dem du innehalten, durchatmen und dir Zeit für dich nehmen kannst.",aboutP2:"Jeder Mensch und jeder Tag ist anders. Deshalb sprechen wir vor Beginn über deine Bedürfnisse und Wünsche, damit die Sitzung achtsam und respektvoll gestaltet werden kann.",aboutVisual:"Persönliche und aufmerksame Betreuung",aboutCta:"Lass uns über deine Sitzung sprechen",
    locationEyebrow:"WIR SIND IN PALMA",locationTitle:"Ein ruhiger Ort <em>mitten in der Stadt</em>",addressLabel:"Adresse",hoursLabel:"Ungefähre Öffnungszeiten",hoursText:"10:00–20:00 Uhr. Bitte bestätige die Verfügbarkeit bei der Buchung.",mapCta:"Standort in Maps öffnen ↗",
    faqEyebrow:"VOR DEINEM BESUCH",faqTitle:"Häufige <em>Fragen</em>",faqQ1:"Wie kann ich eine Sitzung buchen?",faqA1:"Schreib mir direkt über WhatsApp. Wir vereinbaren je nach Verfügbarkeit einen Tag, eine Uhrzeit und die Dauer.",faqQ2:"Welche Dauer kann ich wählen?",faqA2:"Es gibt Sitzungen von 30, 60 und 90 Minuten. Frag nach, welche Option am besten zu deinen Wünschen passt.",faqQ3:"Was sollte ich vor der Sitzung beachten?",faqA3:"Komm in bequemer Kleidung und teile vor Beginn Wünsche, Beschwerden oder wichtige Umstände mit, damit die Sitzung umsichtig angepasst werden kann.",faqQ4:"Ersetzt die Massage eine medizinische Behandlung?",faqA4:"Nein. Massage ist eine Wellness-Anwendung und ersetzt weder die Diagnose noch die Behandlung durch medizinisches Fachpersonal. Bei gesundheitlichen Fragen wende dich bitte an medizinisches Fachpersonal.",faqQ5:"Wie sind die Öffnungszeiten?",faqA5:"Die ungefähren Öffnungszeiten sind 10:00 bis 20:00 Uhr. Die Verfügbarkeit muss bei der Terminanfrage bestätigt werden.",
    reviewsEyebrow:"DEINE ERFAHRUNG ZÄHLT",reviewsTitle:"Echte <em>Bewertungen</em>",reviewsText:"Dieser Bereich ist für Rückmeldungen von Kundinnen und Kunden vorgesehen. Verifizierte Bewertungen werden hier veröffentlicht, sobald sie vorliegen.",reviewsPlaceholder:"Kundenbewertungen werden nur mit Zustimmung veröffentlicht.",
    galleryEyebrow:"DIE RÄUMLICHKEITEN",galleryTitle:"Eine Atmosphäre zum <em>Abschalten</em>",galleryText:"Demnächst findest du hier echte Fotos von El Capitol Bienestar.",gallerySpace:"Der Raum",galleryRoom:"Der Behandlungsraum",galleryDetails:"Die Details",galleryNote:"Diese Felder sind für deine eigenen Fotos vorgesehen und enthalten keine Stockbilder.",
    tipsEyebrow:"KLEINE GESTEN, WERTVOLLE PAUSEN",tipsTitle:"Tipps für dein <em>Wohlbefinden</em>",tip1Title:"Mach eine Pause",tip1Text:"Nimm dir ein paar Minuten Zeit zum ruhigen Atmen und leg die Bildschirme beiseite.",tip2Title:"Wechsle deine Haltung",tip2Text:"Wenn du lange sitzt, steh zwischendurch auf und bewege deinen Körper sanft.",tip3Title:"Achte auf deinen Rhythmus",tip3Text:"Ruh dich aus, trink ausreichend und passe deine Aktivitäten daran an, wie du dich fühlst.",tipsDisclaimer:"Diese Hinweise sind allgemein und ersetzen keine individuelle medizinische Beratung.",
    contactEyebrow:"DEIN MOMENT WARTET",contactTitle:"Schenke dir einen Moment <em>für dich.</em>",contactText:"Schreib mir, dann finden wir einen passenden Termin.",contactCta:"Über WhatsApp buchen ↗",footerPhrase:"Massage und persönliche Pflege in Palma de Mallorca.",backTop:"Nach oben ↑"
  }
};

const languageSelect = document.getElementById("language-select");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");

function applyLanguage(language) {
  const selected = translations[language] ? language : "es";
  document.documentElement.lang = selected;
  document.documentElement.dataset.language = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[selected][key];
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    const value = translations[selected][key];
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  if (languageSelect) languageSelect.value = selected;
  try {
    localStorage.setItem("elCapitolLanguage", selected);
  } catch (error) {
    console.warn("No se pudo guardar el idioma.");
  }
  updateMenuLabel();
}

function updateMenuLabel() {
  if (!menuToggle) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  const language = document.documentElement.lang || "es";
  menuToggle.setAttribute("aria-label", translations[language][isOpen ? "menuClose" : "menuOpen"]);
}

function closeMenu() {
  if (!menuToggle || !nav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  updateMenuLabel();
}

/* CAMBIO DE IDIOMA: guardar selección y recargar la página */
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = translations[event.target.value]
      ? event.target.value
      : "es";

    try {
      localStorage.setItem("elCapitolLanguage", selectedLanguage);
    } catch (error) {
      console.warn("No se pudo guardar el idioma.");
    }

    window.location.reload();
  });
}

/* MENÚ DE NAVEGACIÓN */
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    updateMenuLabel();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

/* AÑO AUTOMÁTICO DEL FOOTER */
const currentYear = document.getElementById("current-year");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* ANIMACIONES AL DESPLAZARSE */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(
    ".section-heading, .service-card, .about-visual, .about-copy, .location-info, .map-wrap, .faq-item, .reviews-inner, .gallery-tile, .tip-card, .contact-cta > *"
  );

  revealItems.forEach((item) => item.classList.add("js-reveal"));

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

/* IDIOMA INICIAL: preferencia guardada, idioma del navegador o español */
let initialLanguage = "es";

try {
  const savedLanguage = localStorage.getItem("elCapitolLanguage");

  if (savedLanguage && translations[savedLanguage]) {
    initialLanguage = savedLanguage;
  } else {
    const browserLanguage = (navigator.language || "es").slice(0, 2).toLowerCase();

    if (translations[browserLanguage]) {
      initialLanguage = browserLanguage;
    }
  }
} catch (error) {
  const browserLanguage = (navigator.language || "es").slice(0, 2).toLowerCase();

  if (translations[browserLanguage]) {
    initialLanguage = browserLanguage;
  }
}

/* Aplicar el idioma al cargar la página */
applyLanguage(initialLanguage);
