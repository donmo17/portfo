     
     const profil = `
     👋 Bonjour ! ceci est mon portfolio Je suis Mahamoud ou parfois momo ou il peut y avoir des erreurs en ecrivant mon nom , développeur junior de 29 ans, récemment diplômé en conception et développement d'applications.
     
     💡 Motivé à poursuivre mon évolution professionnelle, je recherche une alternance pour mon Master en Architecture Logicielle. Le rythme d'alternance d'une semaine par mois me permettra de m'investir pleinement dans vos projets tout en perfectionnant mes compétences techniques.
     
     👨‍💻 Mon profil en bref :
     - Formation en développement d'applications
     - Rigoureux et investi dans mon travail
     - Capacité d'adaptation rapide
     - Passionné par les nouvelles technologies
     
     📈 Avantage supplémentaire : mon profil ouvre droit à une aide à l'embauche de 6 000€.
     Je suis disponible pour échanger sur ma motivation et ma capacité.
     
     💼 Parcours :
     Depuis toujours passionné par les nouvelles technologies, j'ai commencé ma carrière en 2013 chez LA POSTE comme facteur pendant près de 4 ans (novembre 2013 - janvier 2017), où j’ai développé rigueur et organisation.
     
     Ensuite, en 2017, je me suis tourné vers la création numérique en tant que monteur vidéo, une expérience qui m'a permis d’explorer les outils numériques et de développer un esprit créatif technique.
     
     De 2019 à 2022, j'ai travaillé chez TORCYGSM comme maintenancier pendant 3 ans et 9 mois (mars 2019 - novembre 2022), où j'ai assuré la gestion, la sécurisation et le dépannage des systèmes, affinant mes compétences techniques et ma compréhension des enjeux technologiques.
     
     En 2022, j'ai choisi de me reconvertir en développeur, un domaine où je peux allier ma passion pour l’innovation à ma volonté de résoudre des problèmes techniques. Aujourd’hui, je continue à me perfectionner, avec l’ambition de relever de nouveaux défis dans le développement.
     
     🌐 Compétences techniques :
     
     Back-End:
     - Maîtrise des langages Python, Java et PHP
     - Expérience avec Spring Boot, Express.js, Symfony et Adonis.js
     - Gestion de bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB, Redis)
     
     Frontend:
     - Maîtrise de React.js, React Native, JavaScript, Tailwind CSS, Bootstrap, Twig, HTML, CSS
     - Expérience en développement d'applications de bureau avec Electron.js
     - Compétences en conception d'interfaces utilisateurs avec Figma et Adobe XD
     
     Cloud Computing et Déploiement:
     - Expérience avec AWS, Google Cloud Platform (GCP), Elastic Cloud
     - Expertise en conteneurisation avec Docker et Kubernetes
     - Déploiement de code sur serveurs avec GitHub et GitLab
     
     Sécurité Applicative:
     - Connaissance des bonnes pratiques de sécurité, incluant l’authentification, le chiffrement des données, et le respect des standards
     - Expérience en intégration de solutions de paiement en ligne avec Stripe
     - Maîtrise des méthodologies agiles, particulièrement Scrum
     voici mes formations :Actuel - Chef de projet en architecture logicielle (RNCP niveau 7)
    Gestion des processus, de la qualité, des ressources et des risques dans les projets informatiques, tout en adoptant les bonnes pratiques de communication et en coordonnant efficacement avec les différents acteurs, dans des environnements techniques incluant des architectures 3 tiers, N tiers et micro-services, avec des compétences en développement (Node.js, Angular, Java, C#, PHP) et en frameworks, ainsi que dans l'utilisation de solutions de conteneurisation et d'orchestration. (ASTON INSTITUT)

Juillet 2024 - Novembre 2024 : Stage de fin de formation en conception et développement d’applications
    Amélioration de l'application et de la base de données (FastAPI, Elasticsearch) ; création d'un workflow de transformation via des outils IA (Python) ; développement de solutions d'extraction et de transformation de données. (LEGOMNIA)

Janvier 2024 - Juillet 2024 : Concepteur et développeur d’applications (RNCP niveau 6)
    De la conception au déploiement : connaissances en cloud, sécurisation des applications et apprentissage des langages adaptés au développement desktop et mobile. (PREPAVENIR)

Novembre 2023 - Décembre 2023 : Formation en anglais à visée professionnelle
    Apprentissage de l'anglais dans un cadre professionnel. (RESSOURCES FORMATION)

Juillet 2023 - Septembre 2023 : Stage de fin de formation en développement web et web mobile
    Conception de web apps e-commerce avec recherche dynamique en TypeScript et Express.js ; intégration de Stripe pour les paiements et développement de dashboards interactifs. (POLYRION)

Décembre 2022 - Juillet 2023 : Développeur web et web mobile (RNCP niveau 5)
    Apprentissage des langages de programmation, des frameworks, des bases de données, ainsi que des outils de design tels qu'Adobe XD et Figma. (PREPAVENIR);
    mes informations pour me contacter sont :Email: doncoulybak@gmail.com, Téléphone: 0783208462, Adresse: Paris 18ème, Github: donmo17, LinkedIn: /mahamoudcoulibaly . voici d'autres qualités de moi :Leadership : Capacité à diriger et à motiver une équipe, en inspirant confiance et en encourageant la collaboration.
Communication : Aptitude à communiquer efficacement avec des parties prenantes diverses, des équipes techniques aux membres de la direction.
Gestion du temps : Compétence à prioriser les tâches et à gérer son emploi du temps et celui de son équipe de manière efficace.
Résolution de problèmes : Capacité à identifier les problèmes rapidement et à proposer des solutions créatives et pratiques.
Négociation : Savoir négocier avec des fournisseurs, des clients et des membres de l'équipe pour obtenir les meilleurs résultats.
Adaptabilité : Être flexible et capable de s'adapter aux changements rapides dans le domaine technologique.
Esprit stratégique : Vision à long terme pour aligner les initiatives informatiques avec les objectifs stratégiques de l'entreprise.
Gestion du stress : Capacité à rester calme et efficace sous pression.
Intelligence émotionnelle : Comprendre et gérer ses propres émotions ainsi que celles des autres pour améliorer les relations professionnelles.
Compétences interpersonnelles : Aptitude à travailler efficacement avec des personnes de tous niveaux et de toutes fonctions. // mon pays est en france .// je recherche une alternance avec un rythme de 3 semaine au boulot et une semaine a l'ecole 
     `;
     const API_KEY = 'AIzaSyCb6U2_Oxm1yZOyrjNUSKsYLmIsN2VxIfA';
     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
     
     // Instruction de départ pour guider les réponses de l'API
     const instruction = "Veuillez vérifier si la question posée est en rapport avec les informations suivantes sur moi. Si ce n'est pas le cas, indiquez poliment que vous ne pouvez pas répondre à cette question et repondez simplement a la question en faisant une phrase correcte et en developpant comme si c'était toi sans rien ajouter .";
     
     // Fonction pour générer la réponse de l'API
     const generateApiResponse = async (msg) => {
         try {
             // Concatène l'instruction, le profil et le message de l'utilisateur
             const prompt = `${instruction}\n\nProfil :\n${profil}\n\nQuestion : ${msg}`;
     
             console.log("Envoi de la requête à l'API avec le prompt : ", prompt); // Ajout d'un log pour le prompt
     
             const response = await fetch(API_URL, {
                 method: 'POST',
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify({
                     contents: [
                         {
                             role: "user",
                             parts: [{ text: prompt }]
                         }
                     ]
                 })
             });
     
             const data = await response.json();
             console.log("Réponse de l'API : ", data); 
     
             const apiResponse = data.candidates[0].content.parts[0].text;
             console.log("Réponse API traitée : ", apiResponse);
     
             saveToLocalStorage(msg, apiResponse);
             displayChatHistory(); 
     
         } catch (error) {
             console.log("Erreur lors de l'appel API:", error);
         }
     };

     function saveToLocalStorage(question, response) {
         let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
         chatHistory.push({ question: question, response: response });
         localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
     }
     

     function displayChatHistory() {
         const chatHistoryDisplay = document.getElementById('chatHistoryDisplay');
         chatHistoryDisplay.innerHTML = "";
     
         const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
     
        
         chatHistory.forEach((entry) => {
             const questionElement = document.createElement('p');
             questionElement.className = "font-bold text-gray-600 mt-4";
             questionElement.textContent = ` ${entry.question}`;
     
             const responseElement = document.createElement('p');
             responseElement.className = "text-gray-500 mt-2";
             responseElement.textContent = ` ${entry.response}`;
     
             chatHistoryDisplay.appendChild(questionElement);
             chatHistoryDisplay.appendChild(responseElement);
         });
     }
     
 
     document.getElementById("sendButton").addEventListener("click", function() {
         const msg = document.getElementById("messageInput").value;
         console.log("Message à envoyer : ", msg);
         if (msg.trim()) {
             generateApiResponse(msg);
             document.getElementById("messageInput").value = "";
         } else {
             console.log("Le message est vide !");
         }
     });
     

     window.addEventListener('load', displayChatHistory);

     const themeToggle = document.getElementById('themeToggle');
     const html = document.documentElement;
     const themeIcon = themeToggle.querySelector('i');

     themeToggle.addEventListener('click', () => {
         if (html.classList.contains('light')) {
             html.classList.remove('light');
             html.classList.add('dark');
             themeIcon.classList.remove('fa-cloud-sun');
             themeIcon.classList.add('fa-moon');
         } else {
             html.classList.remove('dark');
             html.classList.add('light');
             themeIcon.classList.remove('fa-moon');
             themeIcon.classList.add('fa-cloud-sun');
         }
     });

     document.querySelectorAll('.section-header').forEach(header => {
         header.addEventListener('click', () => {
             const content = header.nextElementSibling;
             
             document.querySelectorAll('.section-content').forEach(otherContent => {
                 if (otherContent !== content && otherContent.classList.contains('active')) {
                     otherContent.classList.remove('active');
                 }
             });

             content.classList.toggle('active');
             
             if (content.classList.contains('active')) {
                 gsap.from(content, {
                     duration: 0.5,
                     opacity: 0,
                     y: -20,
                     ease: "power2.out"
                 });
             }
         });
     });

     const burgerMenu = document.getElementById('burgerMenu');
     const sidebar = document.querySelector('.sidebar');
     const overlay = document.getElementById('overlay');

     function toggleMenu() {
         sidebar.classList.toggle('active');
         overlay.classList.toggle('active');
         
         const icon = burgerMenu.querySelector('i');
         if (sidebar.classList.contains('active')) {
             icon.classList.remove('fa-bars');
             icon.classList.add('fa-times');
         } else {
             icon.classList.remove('fa-times');
             icon.classList.add('fa-bars');
         }
     }

     burgerMenu.addEventListener('click', toggleMenu);
     overlay.addEventListener('click', toggleMenu);

     document.querySelectorAll('.sidebar-link').forEach(link => {
         link.addEventListener('click', () => {
             if (window.innerWidth <= 768) {
                 toggleMenu();
             }
         });
     });

     lucide.createIcons();

     