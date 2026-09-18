(() => {
  const GALLERY = [
    "image_01.png", "image_02.png", "image_03.png", "image_04.png",
    "image_05.png", "image_06.png", "image_07.png", "image_08.png",
    "image_09.png", "image_10.png", "image_11.png",
  ];

  const T = {
    sk: {
      brandSub: "Automatizácia",
      claim: "PLC · elektrikári · commissioning.<br>Európa vrátane Nemecka.",
      navFirma: "Firma",
      navSluzby: "Služby",
      navRef: "Referencie",
      navKontakt: "Kontakt",
      navImpressum: "Impressum",
      navPrivacy: "Ochrana údajov",
      sideName: "thedesigns.org",
      sideLine: "Staff augmentation · PLC & elektro",
      sidePhone: "E-mail",
      sideMore: "viac",
      sideContact: "Kontakt",
      foot: "© 2026 thedesigns.org — PLC & priemyselná automatizácia · SK/CZ/DE",
      // firma
      fTitle: "Firma",
      fLead: "Poskytujeme skúsených PLC programátorov a priemyselných elektrikárov do vášho projektu — nie ako generálny dodávateľ linky, ale ako posila vášho tímu.",
      fP1: "Špecialisti sa okamžite zapoja do TIA Portal, TwinCAT, Rockwell, robotiky a commissioning v celej EÚ vrátane Nemecka. Nasadenie jednotlivca alebo malého tímu typicky do 2–4 týždňov.",
      fTeam: "Tím",
      fTeamP: "Flexibilní ľudia, ktorí zvládajú elektro aj automatizačné úlohy. Programovacie systémy Siemens Step 7 / TIA Portal, Beckhoff TwinCAT a Allen-Bradley / Rockwell čítame a upravujeme. K dispozícii sú aj A1, SCC a zodpovednostné poistenie pre audity zákazníka.",
      fCta1: "Služby",
      fCta2: "Kontakt",
      // služby
      sTitle: "Služby",
      sIntro: "Staff augmentation pre priemyselnú automatizáciu — prenájom špecialistov na rozbehnuté linky, SAT/FAT a retrofit.",
      sField: "Oblasť nasadenia",
      sFieldP: "Automotive, strojárstvo, system integrácia, montážne a dopravníkové linky v SK · CZ · DE · AT a ďalších krajinách EÚ.",
      sPlc: "PLC programátori & automatizéri",
      sPlcP: "Integrácia do vášho interného tímu na bežiacich projektoch.",
      sPlcL1: "Siemens TIA Portal V13–V19, Step 7, WinCC, PCS7",
      sPlcL2: "Beckhoff TwinCAT 2/3, Allen-Bradley / Rockwell, Schneider, Omron",
      sPlcL3: "HMI/SCADA: WinCC Unified, Ignition, InTouch",
      sPlcL4: "Siete: PROFINET, EtherCAT, Modbus, Ethernet/IP",
      sPlcL5: "Pohony: SINAMICS, SEW, ABB, Danfoss",
      sPlcL6: "Robotika: KUKA, ABB, Fanuc — programovanie a commissioning",
      sEl: "Priemyselní elektrikári & commissioning",
      sElP: "Montáž, oživovanie, redlining — s certifikáciou pre EÚ (A1, SCC).",
      sElL1: "Hardware commissioning: loop checky, I/O testy, parametrizácia meničov",
      sElL2: "Rozvádzače, trasovanie, diagnostika, retrofit liniek",
      sElL3: "Normy: EN 60204-1, CE, STN / DIN VDE",
      sElL4: "Dokumentácia na stavbe: EPLAN P8 / AutoCAD",
      sProc: "Priebeh",
      sProcP: "Brief (počet, rola, platforma, lokalita, termín) → profily a dokumenty (CV, NDA, A1) → nasadenie u zákazníka alebo remote → handover s dokumentáciou a zaškolením.",
      // referencie
      rTitle: "Referencie",
      rIntro: "Projekty a nasadenia v nemeckom a európskom priemysle — príklady partnerstiev a prostredí, v ktorých naši špecialisti pôsobia:",
      // kontakt
      kTitle: "Kontakt",
      kIntro: "Pošlite kapacitný brief: počet ľudí, rola (PLC / elektrikár), platforma, lokalita (DE/CZ/SK), termín a či potrebujete A1/SCC. Odpoveď do 24 h.",
      kAddr: "Adresa",
      kAddrV: "Online · nasadenie v EÚ",
      kMail: "E-mail",
      kWeb: "Web",
      kCta: "Napísať brief",
      // impressum
      iTitle: "Impressum",
      iOp: "Prevádzkovateľ",
      iOpV: "thedesigns.org",
      iContact: "Kontakt",
      iNote: "Tento web je informačná prezentácia služby staff augmentation v oblasti priemyselnej automatizácie. Pre zmluvné podmienky a fakturačné údaje nás kontaktujte e-mailom.",
      // privacy
      pTitle: "Ochrana údajov",
      pLead: "Ochrana osobných údajov je pre nás dôležitá. Nižšie je stručný prehľad, aké údaje spracúvame.",
      pCtrl: "Prevádzkovateľ",
      pCtrlP: "Prevádzkovateľom spracúvania údajov na tomto webe je thedesigns.org (kontakt: hello@thedesigns.org).",
      pLog: "Log súbory",
      pLogP: "Hosting môže ukladať anonymizované prístupové logy (čas, cesta, typ prehliadača) na zabezpečenie prevádzky. Cookies na tomto webe nepoužívame na sledovanie.",
      pMail: "E-mail / kontakt",
      pMailP: "Ak nás kontaktujete e-mailom, údaje z vašej správy použijeme len na vybavenie dopytu.",
    },
    de: {
      brandSub: "Automatisierung",
      claim: "SPS · Elektriker · Inbetriebnahme.<br>Europa inklusive Deutschland.",
      navFirma: "Unternehmen",
      navSluzby: "Leistungen",
      navRef: "Referenzen",
      navKontakt: "Kontakt",
      navImpressum: "Impressum",
      navPrivacy: "Datenschutz",
      sideName: "thedesigns.org",
      sideLine: "Staff Augmentation · SPS & Elektro",
      sidePhone: "E-Mail",
      sideMore: "mehr",
      sideContact: "Kontakt",
      foot: "© 2026 thedesigns.org — SPS & industrielle Automation · SK/CZ/DE",
      fTitle: "Unternehmen",
      fLead: "Wir stellen erfahrene SPS-Programmierer und Industrieelektriker für Ihr Projekt bereit — nicht als Generalunternehmer der Linie, sondern als Verstärkung Ihres Teams.",
      fP1: "Die Spezialisten integrieren sich sofort in TIA Portal, TwinCAT, Rockwell, Robotik und Inbetriebnahme in der gesamten EU inklusive Deutschland. Einsatz einer Einzelperson oder eines kleinen Teams typischerweise in 2–4 Wochen.",
      fTeam: "Team",
      fTeamP: "Qualifiziertes Personal für Elektro- und Automatisierungsaufgaben. Programmiersysteme Siemens Step 7 / TIA Portal, Beckhoff TwinCAT und Allen-Bradley / Rockwell können gelesen und bearbeitet werden. A1, SCC und Haftpflichtversicherung stehen für Kunden-Audits bereit.",
      fCta1: "Leistungen",
      fCta2: "Kontakt",
      sTitle: "Leistungen",
      sIntro: "Staff Augmentation für industrielle Automation — Spezialisten für laufende Linien, SAT/FAT und Retrofit.",
      sField: "Einsatzfelder",
      sFieldP: "Automotive, Maschinenbau, Systemintegration, Montage- und Förderlinien in SK · CZ · DE · AT und weiteren EU-Ländern.",
      sPlc: "SPS-Programmierer & Automatisierer",
      sPlcP: "Integration in Ihr internes Team auf laufenden Projekten.",
      sPlcL1: "Siemens TIA Portal V13–V19, Step 7, WinCC, PCS7",
      sPlcL2: "Beckhoff TwinCAT 2/3, Allen-Bradley / Rockwell, Schneider, Omron",
      sPlcL3: "HMI/SCADA: WinCC Unified, Ignition, InTouch",
      sPlcL4: "Netze: PROFINET, EtherCAT, Modbus, Ethernet/IP",
      sPlcL5: "Antriebe: SINAMICS, SEW, ABB, Danfoss",
      sPlcL6: "Robotik: KUKA, ABB, Fanuc — Programmierung und Inbetriebnahme",
      sEl: "Industrieelektriker & Inbetriebnahme",
      sElP: "Montage, Inbetriebnahme, Redlining — mit EU-Zertifizierung (A1, SCC).",
      sElL1: "Hardware-Inbetriebnahme: Loop-Checks, I/O-Tests, Umrichter-Parametrisierung",
      sElL2: "Schaltschränke, Verlegung, Diagnose, Linien-Retrofit",
      sElL3: "Normen: EN 60204-1, CE, STN / DIN VDE",
      sElL4: "Dokumentation vor Ort: EPLAN P8 / AutoCAD",
      sProc: "Ablauf",
      sProcP: "Briefing (Anzahl, Rolle, Plattform, Ort, Termin) → Profile und Dokumente (CV, NDA, A1) → Einsatz vor Ort oder remote → Übergabe mit Dokumentation und Schulung.",
      rTitle: "Referenzen",
      rIntro: "Projekte und Einsätze in der deutschen und europäischen Industrie — Beispiele von Umfeldern, in denen unsere Spezialisten tätig sind:",
      kTitle: "Kontakt",
      kIntro: "Senden Sie ein Kapazitäts-Briefing: Anzahl, Rolle (SPS / Elektriker), Plattform, Ort (DE/CZ/SK), Termin und ob A1/SCC benötigt wird. Antwort innerhalb von 24 h.",
      kAddr: "Adresse",
      kAddrV: "Online · Einsatz in der EU",
      kMail: "E-Mail",
      kWeb: "Web",
      kCta: "Briefing senden",
      iTitle: "Impressum",
      iOp: "Betreiber",
      iOpV: "thedesigns.org",
      iContact: "Kontakt",
      iNote: "Diese Website ist eine Informationsdarstellung des Staff-Augmentation-Angebots im Bereich industrielle Automation. Für Vertrags- und Rechnungsdaten kontaktieren Sie uns per E-Mail.",
      pTitle: "Datenschutz",
      pLead: "Der Schutz personenbezogener Daten ist uns wichtig. Nachfolgend eine kurze Übersicht.",
      pCtrl: "Verantwortlicher",
      pCtrlP: "Verantwortlich für die Datenverarbeitung auf dieser Website ist thedesigns.org (Kontakt: hello@thedesigns.org).",
      pLog: "Logfiles",
      pLogP: "Das Hosting kann anonymisierte Zugriffsprotokolle speichern (Zeit, Pfad, Browser) zur Betriebssicherheit. Tracking-Cookies setzen wir nicht ein.",
      pMail: "E-Mail / Kontakt",
      pMailP: "Wenn Sie uns per E-Mail kontaktieren, nutzen wir Ihre Angaben nur zur Bearbeitung der Anfrage.",
    },
    en: {
      brandSub: "Automation",
      claim: "PLC · electricians · commissioning.<br>Europe including Germany.",
      navFirma: "Company",
      navSluzby: "Services",
      navRef: "References",
      navKontakt: "Contact",
      navImpressum: "Legal notice",
      navPrivacy: "Privacy",
      sideName: "thedesigns.org",
      sideLine: "Staff augmentation · PLC & electrical",
      sidePhone: "E-mail",
      sideMore: "more",
      sideContact: "Contact",
      foot: "© 2026 thedesigns.org — PLC & industrial automation · SK/CZ/DE",
      fTitle: "Company",
      fLead: "We supply experienced PLC programmers and industrial electricians for your project — not as a turnkey line contractor, but as reinforcement for your team.",
      fP1: "Specialists plug straight into TIA Portal, TwinCAT, Rockwell, robotics and commissioning across the EU including Germany. Typical deployment of one person or a small team within 2–4 weeks.",
      fTeam: "Team",
      fTeamP: "Flexible people covering electrical and automation work. Siemens Step 7 / TIA Portal, Beckhoff TwinCAT and Allen-Bradley / Rockwell can be read and edited. A1, SCC and liability insurance are ready for customer audits.",
      fCta1: "Services",
      fCta2: "Contact",
      sTitle: "Services",
      sIntro: "Staff augmentation for industrial automation — specialists for running lines, SAT/FAT and retrofit.",
      sField: "Fields of work",
      sFieldP: "Automotive, machine building, system integration, assembly and conveyor lines in SK · CZ · DE · AT and other EU countries.",
      sPlc: "PLC programmers & automation engineers",
      sPlcP: "Integration into your internal team on live projects.",
      sPlcL1: "Siemens TIA Portal V13–V19, Step 7, WinCC, PCS7",
      sPlcL2: "Beckhoff TwinCAT 2/3, Allen-Bradley / Rockwell, Schneider, Omron",
      sPlcL3: "HMI/SCADA: WinCC Unified, Ignition, InTouch",
      sPlcL4: "Networks: PROFINET, EtherCAT, Modbus, Ethernet/IP",
      sPlcL5: "Drives: SINAMICS, SEW, ABB, Danfoss",
      sPlcL6: "Robotics: KUKA, ABB, Fanuc — programming and commissioning",
      sEl: "Industrial electricians & commissioning",
      sElP: "Installation, bring-up, redlining — with EU certification (A1, SCC).",
      sElL1: "Hardware commissioning: loop checks, I/O tests, drive parametrization",
      sElL2: "Cabinets, cabling, diagnostics, line retrofit",
      sElL3: "Standards: EN 60204-1, CE, STN / DIN VDE",
      sElL4: "On-site documentation: EPLAN P8 / AutoCAD",
      sProc: "Process",
      sProcP: "Brief (headcount, role, platform, site, date) → profiles and documents (CV, NDA, A1) → on-site or remote deployment → handover with docs and training.",
      rTitle: "References",
      rIntro: "Projects and deployments in German and European industry — examples of environments where our specialists work:",
      kTitle: "Contact",
      kIntro: "Send a capacity brief: headcount, role (PLC / electrician), platform, location (DE/CZ/SK), date and whether you need A1/SCC. Reply within 24 h.",
      kAddr: "Address",
      kAddrV: "Online · EU deployment",
      kMail: "E-mail",
      kWeb: "Web",
      kCta: "Send brief",
      iTitle: "Legal notice",
      iOp: "Operator",
      iOpV: "thedesigns.org",
      iContact: "Contact",
      iNote: "This site presents staff-augmentation services in industrial automation. For contract and invoicing details, contact us by e-mail.",
      pTitle: "Privacy",
      pLead: "We take personal data protection seriously. Below is a short overview.",
      pCtrl: "Controller",
      pCtrlP: "The controller for data processing on this website is thedesigns.org (contact: hello@thedesigns.org).",
      pLog: "Log files",
      pLogP: "Hosting may store anonymized access logs (time, path, browser) for operations. We do not use tracking cookies.",
      pMail: "E-mail / contact",
      pMailP: "If you contact us by e-mail, we use your details only to handle the enquiry.",
    },
  };

  function assetBase() {
    const script = document.currentScript || document.querySelector('script[src*="site.js"]');
    if (!script) return ".";
    const src = script.getAttribute("src") || "";
    return src.replace(/\/js\/site\.js.*$/, "") || ".";
  }

  function applyLang(lang) {
    const dict = T[lang] || T.sk;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!dict[key]) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    });
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem("elektro-lang", lang); } catch (_) {}
  }

  function initGallery() {
    const slots = document.querySelectorAll("[data-gallery] img");
    if (!slots.length) return;
    const base = document.body.dataset.assetRoot || ".";
    const imgs = GALLERY.slice();
    for (let i = imgs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
    }
    slots.forEach((img, i) => {
      img.src = `${base}/images/gallery/${imgs[i]}`;
      img.alt = `Maschinenbau ${i + 1}`;
    });
    let cur = 0;
    setInterval(() => {
      const neu = 3 + Math.floor(Math.random() * (imgs.length - 3));
      const tmp = imgs[cur];
      imgs[cur] = imgs[neu];
      imgs[neu] = tmp;
      const slot = slots[cur];
      if (!slot) return;
      slot.style.opacity = "0.35";
      setTimeout(() => {
        slot.src = `${base}/images/gallery/${imgs[cur]}`;
        slot.style.opacity = "1";
      }, 280);
      cur = (cur + 1) % slots.length;
    }, 5000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    let lang = "sk";
    try {
      const saved = localStorage.getItem("elektro-lang");
      if (saved && T[saved]) lang = saved;
    } catch (_) {}
    applyLang(lang);
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
    initGallery();
  });
})();
