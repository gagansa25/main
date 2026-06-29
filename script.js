    //TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('i');

function applyTheme(isLightMode) {
    document.body.classList.toggle('light-mode', isLightMode);
    themeToggle?.setAttribute('aria-pressed', String(isLightMode));

    if (themeIcon) {
        themeIcon.className = isLightMode ? 'bx bx-sun' : 'bx bx-moon';
    }
}

const savedTheme = localStorage.getItem('theme');
const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(savedTheme ? savedTheme === 'light' : prefersLightTheme);

themeToggle?.addEventListener('click', () => {
    const isLightMode = !document.body.classList.contains('light-mode');
    applyTheme(isLightMode);
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-projects': 'Project',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'home-tag': 'Frontend & Web Developer',
        'home-heading': "Hi, I'm <span>Gagan</span>",
        'home-subtitle': 'Building Modern Web Experiences',
        'home-desc': 'Passionate Frontend & Web Developer specializing in React.js, Next.js, Node.js, MongoDB, Express.js and MySQL.',
        'home-btn-1': 'Hire Me',
        'home-btn-2': "Let's Talk",
        'profile-name': 'Gagan',
        'home-role': 'Frontend & Web Developer',
        'home-tagline': 'Turning ideas into responsive, scalable, and visually appealing web experiences with modern technologies.',
        'about-title': 'About <span>Me</span>',
        'about-p1': "Hi, I'm Gagan, a passionate Frontend & Web Developer who enjoys building modern, responsive, and user-friendly web applications.",
        'about-p2': 'I specialize in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL. I focus on creating clean, efficient, and scalable solutions that provide excellent user experiences.',
        'about-p3': 'With hands-on project experience and a strong foundation in software development, I continuously explore new technologies and improve my skills to stay updated with industry trends.',
        'about-p4': 'My goal is to contribute to impactful projects, solve real-world problems through technology, and grow as a professional software developer.',
        'education-title': 'My <span>Journey</span>',
        'edu-title-1': 'B.Tech Computer Science',
        'edu-text-1': 'Vikash Institute of Technology, Bargarh<br>BPUT University<br>Currently Pursuing',
        'edu-title-2': 'Higher Secondary (12th)',
        'edu-text-2': 'Vikash Higher Secondary School<br>CHSE Board<br>Score: 58%',
        'edu-title-3': 'Secondary School (10th)',
        'edu-text-3': 'Janta Govt. High School<br>BSE Board<br>Score: 70%',
        'edu-title-4': 'Frontend Development',
        'edu-text-4': 'Learning and building projects using HTML, CSS, JavaScript, React.js, and modern web technologies.',
        'edu-title-5': 'Communication Skills',
        'edu-text-5': 'Developed communication and teamwork skills through academics and practical collaboration.',
        'edu-title-6': 'Content Creation Volunteer',
        'edu-text-6': 'Created social content, blogs, graphics, and collaborated with teams on creative projects.',
        'projects-title': 'My <span>Projects</span>',
        'project-title-1': 'E-Commerce Website',
        'project-text-1': 'Developed a responsive E-Commerce platform with product listings, category filtering, shopping cart, and user-friendly interface. Designed to provide a seamless online shopping experience.',
        'project-title-2': 'Employee Management System',
        'project-text-2': 'Built an Employee Management System for managing employee records, task assignments, attendance, and performance tracking with an intuitive dashboard.',
        'project-title-3': 'TalentBridge - College Placement Management System',
        'project-text-3': 'Designed and developed a full-stack Placement Management System that streamlines campus recruitment by connecting students, companies, and administrators. Features include secure registration and login, resume upload, job posting, job applications, placement status tracking, company and student management, and an interactive admin dashboard with analytics.',
        'skills-title': 'My <span>Skills</span>',
        'contact-title': 'Contact <span>me!</span>',
        'contact-name': 'Full Name',
        'contact-email': 'Email Address',
        'contact-mobile': 'Mobile Number',
        'contact-subject': 'Email Subject',
        'contact-message': 'Your message',
        'contact-submit': 'Submit',
        'footer-heading': 'Let\'s Build Something Amazing',
        'footer-text': 'Passionate Frontend Developer creating modern, responsive and user-friendly web experiences.',
        'footer-btn': "Let's Talk",
        'footer-links-title': 'Quick Links',
        'footer-link-home': 'Home',
        'footer-link-about': 'About',
        'footer-link-education': 'Education',
        'footer-link-projects': 'Project',
        'footer-link-skills': 'Skills',
        'footer-link-contact': 'Contact',
        'footer-tech-title': 'Tech Stack',
        'footer-highlights-title': 'Highlights',
        'highlight-1': '✓ Frontend Developer',
        'highlight-2': '✓ React Projects',
        'highlight-3': '✓ Responsive Design Expert',
        'highlight-4': '✓ Internship Completed',
        'footer-bottom': 'Crafted with ❤️ by Gagan | © 2026'
    },
    hi: {
        'nav-home': 'होम',
        'nav-about': 'मेरे बारे में',
        'nav-education': 'शिक्षा',
        'nav-projects': 'परियोजनाएँ',
        'nav-skills': 'कौशल',
        'nav-contact': 'संपर्क',
        'home-tag': 'फ्रंटएंड और वेब डेवलपर',
        'home-heading': 'नमस्ते, मैं <span>गगन</span> हूँ',
        'home-subtitle': 'आधुनिक वेब अनुभव बना रहा हूँ',
        'home-desc': 'React.js, Next.js, Node.js, MongoDB, Express.js और MySQL में विशेषज्ञता वाला उत्साही फ्रंटएंड और वेब डेवलपर।',
        'home-btn-1': 'मुझसे बात करें',
        'home-btn-2': 'बातचीत शुरू करें',
        'profile-name': 'गगन',
        'home-role': 'फ्रंटएंड और वेब डेवलपर',
        'home-tagline': 'रचनात्मक विचारों को उत्तरदायी, मापनीय और सुंदर वेब अनुभवों में बदलता हूँ।',
        'about-title': 'मेरे बारे में',
        'about-p1': 'नमस्ते, मैं गगन हूँ, एक उत्साही फ्रंटएंड और वेब डेवलपर जो आधुनिक, उत्तरदायी और उपयोगकर्ता-अनुकूल वेब एप्लिकेशन बनाना पसंद करता है।',
        'about-p2': 'मैं HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB और MySQL में काम करता हूँ। मैं साफ़, कुशल और मापनीय समाधान बनाकर बेहतरीन उपयोगकर्ता अनुभव प्रदान करने पर ध्यान केंद्रित करता हूँ।',
        'about-p3': 'प्रोजेक्ट अनुभव और सॉफ्टवेयर डेवलपमेंट की मजबूत नींव के साथ मैं नई तकनीकों का लगातार अध्ययन करता हूँ और अपने कौशल को अद्यतन रखता हूँ।',
        'about-p4': 'मेरा लक्ष्य प्रभावशाली परियोजनाओं में योगदान देना, तकनीक के माध्यम से वास्तविक समस्याओं का समाधान करना और एक पेशेवर डेवलपर के रूप में विकसित होना है।',
        'education-title': 'मेरी <span>यात्रा</span>',
        'edu-title-1': 'बी.टेक कंप्यूटर साइंस',
        'edu-text-1': 'विकाश इंस्टीट्यूट ऑफ टेक्नोलॉजी, बड़गढ़<br>बीपीयूटी विश्वविद्यालय<br>वर्तमान में अध्ययनरत',
        'edu-title-2': 'हायर सेकेंडरी (12वीं)',
        'edu-text-2': 'विकाश हायर सेकेंडरी स्कूल<br>सीएचएसई बोर्ड<br>स्कोर: 58%',
        'edu-title-3': 'सेकेंडरी स्कूल (10वीं)',
        'edu-text-3': 'जनता सरकारी हाई स्कूल<br>बीएसई बोर्ड<br>स्कोर: 70%',
        'edu-title-4': 'फ्रंटएंड डेवलपमेंट',
        'edu-text-4': 'HTML, CSS, JavaScript, React.js और आधुनिक वेब तकनीकों का प्रयोग करके परियोजनाएँ सीख रहा हूँ और बना रहा हूँ।',
        'edu-title-5': 'संचार कौशल',
        'edu-text-5': 'शैक्षणिक और व्यावहारिक सहयोग के माध्यम से संचार और टीमवर्क कौशल विकसित किए।',
        'edu-title-6': 'कंटेंट क्रिएशन स्वयंसेवक',
        'edu-text-6': 'सामाजिक सामग्री, ब्लॉग, ग्राफिक्स बनाए और टीमों के साथ रचनात्मक परियोजनाओं पर सहयोग किया।',
        'projects-title': 'मेरी <span>परियोजनाएँ</span>',
        'project-title-1': 'ई-कॉमर्स वेबसाइट',
        'project-text-1': 'उत्पाद सूची, श्रेणी फ़िल्टरिंग, शॉपिंग कार्ट और उपयोगकर्ता-अनुकूल इंटरफ़ेस के साथ एक उत्तरदायी ई-कॉमर्स प्लेटफ़ॉर्म बनाया।',
        'project-title-2': 'कर्मी प्रबंधन प्रणाली',
        'project-text-2': 'कर्मचारी रिकॉर्ड, कार्य असाइनमेंट, उपस्थिति और प्रदर्शन ट्रैकिंग के लिए एक कर्मचारी प्रबंधन प्रणाली बनाई।',
        'project-title-3': 'TalentBridge - कॉलेज प्लेसमेंट प्रबंधन प्रणाली',
        'project-text-3': 'छात्रों, कंपनियों और प्रशासकों को जोड़कर कैंपस भर्ती को सरल बनाने वाली पूर्ण-स्टैक प्लेसमेंट प्रबंधन प्रणाली डिजाइन और विकसित की।',
        'skills-title': 'मेरे <span>कौशल</span>',
        'contact-title': 'मुझसे <span>संपर्क करें!</span>',
        'contact-name': 'पूरा नाम',
        'contact-email': 'ईमेल पता',
        'contact-mobile': 'मोबाइल नंबर',
        'contact-subject': 'ईमेल विषय',
        'contact-message': 'आपका संदेश',
        'contact-submit': 'भेजें',
        'footer-heading': 'आइए कुछ अद्भुत बनाएं',
        'footer-text': 'आधुनिक, उत्तरदायी और उपयोगकर्ता-अनुकूल वेब अनुभव बनाने वाला उत्साही फ्रंटएंड डेवलपर।',
        'footer-btn': 'बातचीत शुरू करें',
        'footer-links-title': 'त्वरित लिंक',
        'footer-link-home': 'होम',
        'footer-link-about': 'मेरे बारे में',
        'footer-link-education': 'शिक्षा',
        'footer-link-projects': 'परियोजनाएँ',
        'footer-link-skills': 'कौशल',
        'footer-link-contact': 'संपर्क',
        'footer-tech-title': 'टेक स्टैक',
        'footer-highlights-title': 'मुख्य बिंदु',
        'highlight-1': '✓ फ्रंटएंड डेवलपर',
        'highlight-2': '✓ React परियोजनाएँ',
        'highlight-3': '✓ उत्तरदायी डिज़ाइन विशेषज्ञ',
        'highlight-4': '✓ इंटर्नशिप पूरी हुई',
        'footer-bottom': 'गगन द्वारा ❤️ के साथ बनाया गया | © 2026'
    },
    or: {
        'nav-home': 'ଗୃହ',
        'nav-about': 'ମୋତେ ବିଷୟରେ',
        'nav-education': 'ଶିକ୍ଷା',
        'nav-projects': 'ପ୍ରୋଜେକ୍ଟ',
        'nav-skills': 'କୌଶଳ',
        'nav-contact': 'ଯୋଗାଯୋଗ',
        'home-tag': 'ଫ୍ରଣ୍ଟେଣ୍ଡ ଏବଂ ୱେବ ଡେଭେଲପର',
        'home-heading': 'ନମସ୍କାର, ମୁଁ <span>ଗଗନ</span>',
        'home-subtitle': 'ଆଧୁନିକ ୱେବ ଅନୁଭବ ନିର୍ମାଣ କରୁଛି',
        'home-desc': 'React.js, Next.js, Node.js, MongoDB, Express.js ଏବଂ MySQL ଉପରେ ନିଶ୍ଚିତ ଜ୍ଞାନ ଧାରଣ କରୁଥିବା ଏକ ଉତ୍ସୁକ୍ଷୁ ଫ୍ରଣ୍ଟେଣ୍ଡ ଏବଂ ୱେବ ଡେଭେଲପର।',
        'home-btn-1': 'ମୋତେ ଯୋଗାଯୋଗ କରନ୍ତୁ',
        'home-btn-2': 'ବାତ୍ଚାର୍ତ୍ତା ଆରମ୍ଭ କରନ୍ତୁ',
        'profile-name': 'ଗଗନ',
        'home-role': 'ଫ୍ରଣ୍ଟେଣ୍ଡ ଏବଂ ୱେବ ଡେଭେଲପର',
        'home-tagline': 'ଧାରଣାଗୁଡ଼ିକୁ ଉତ୍ତରଦାୟୀ, ମାପନୀୟ ଏବଂ ସୁନ୍ଦର ୱେବ ଅନୁଭବରେ ପରିବର୍ତ୍ତନ କରେ।',
        'about-title': 'ମୋ ବିଷୟରେ',
        'about-p1': 'ନମସ୍କାର, ମୁଁ ଗଗନ, ଏକ ଉତ୍ସୁକ୍ଷୁ ଫ୍ରଣ୍ଟେଣ୍ଡ ଏବଂ ୱେବ ଡେଭେଲପର ଯିଏ ଆଧୁନିକ, ଉତ୍ତରଦାୟୀ ଏବଂ ଉପଭୋକ୍ତା-ଅନୁକୂଳ ୱେବ ଅପ୍ରେସନ ନିର୍ମାଣ କରିବା ପସନ୍ଦ କରେ।',
        'about-p2': 'ମୁଁ HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB ଏବଂ MySQL ଉପରେ କାର୍ଯ୍ୟ କରେ। ମୁଁ ସଫ୍ଟ, କାର୍ଯ୍ୟକ୍ଷମ ଏବଂ ମାପଗୋଚର ସମାଧାନ ନିର୍ମାଣ କରି ଉତ୍ତମ ଉପଭୋକ୍ତା ଅନୁଭବ ପ୍ରଦାନ କରିବା ଉପରେ ଧ୍ୟାନ ଦେଉଛି।',
        'about-p3': 'ପ୍ରୋଜେକ୍ଟ ଅନୁଭବ ଏବଂ ସଫ୍ଟୱେର ଡେଭେଲପମେଣ୍ଟର ମଜବୁତ ଆଧାର ସହିତ ମୁଁ ନୂତନ ପ୍ରଯୁକ୍ତିଗୁଡ଼ିକୁ ନିରନ୍ତର ଅଧ୍ୟୟନ କରେ ଏବଂ ମୋର କୌଶଳକୁ ଅଦ୍ୟତନ ରଖେ।',
        'about-p4': 'ମୋର ଲକ୍ଷ୍ୟ ଉପକରଣ ଶକ୍ତିଶାଳୀ ପ୍ରକଳ୍ପଗୁଡ଼ିକୁ ଅବଦାନ କରି, ପ୍ରଯୁକ୍ତି ସାହାୟ୍ୟରେ ବାସ୍ତବିକ ସମସ୍ୟାଗୁଡ଼ିକର ସମାଧାନ କରି, ଏବଂ ଏକ ପ୍ରେସେସନଲ୍ ଡେଭେଲପର ଭାବେ ବୃଦ୍ଧି କରିବା।',
        'education-title': 'ମୋ <span>ଯାତ୍ରା</span>',
        'edu-title-1': 'ବି.ଟେକ୍ କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ',
        'edu-text-1': 'ବିକାଶ ଇନଷ୍ଟିଚ୍ୟୁଟ୍ ଅଫ୍ ଟେକ୍ନୋଲୋଜି, ବରଗର୍ହ<br>ବି.ପି.ୟୁ.ଟି. ବିଶ୍ୱବିଦ୍ୟାଳୟ<br>ବର୍ତ୍ତମାନ ଅଧ୍ୟୟନ କରୁଛନ୍ତି',
        'edu-title-2': 'ହାଇୟାର୍ ସେକେଣ୍ଡ୍ଯାରୀ (12 ଶ୍ରେଣୀ)',
        'edu-text-2': 'ବିକାଶ ହାଇୟାର୍ ସେକେଣ୍ଡାରୀ ସ୍କୁଲ୍<br>ସି.ଏଚ.ଏସ.ଇ. ବୋର୍ଡ୍<br>ସ୍କୋର: 58%',
        'edu-title-3': 'ସେକେଣ୍ଡାରୀ ସ୍କୁଲ୍ (10 ଶ୍ରେଣୀ)',
        'edu-text-3': 'ଜନତା ସରକାରୀ ହାଇ ସ୍କୁଲ୍<br>ବି.ଏସ.ଇ. ବୋର୍ଡ୍<br>ସ୍କୋର: 70%',
        'edu-title-4': 'ଫ୍ରଣ୍ଟେଣ୍ଡ ଡେଭେଲପମେଣ୍ଟ',
        'edu-text-4': 'HTML, CSS, JavaScript, React.js ଏବଂ ଆଧୁନିକ ୱେବ ପ୍ରଯୁକ୍ତିଗୁଡ଼ିକ ବ୍ୟବହାର କରି ପ୍ରୋଜେକ୍ଟ ଶିଖୁଛି ଏବଂ ନିର୍ମାଣ କରୁଛି।',
        'edu-title-5': 'ସଂଚାର କୌଶଳ',
        'edu-text-5': 'ଶିକ୍ଷା ଏବଂ ଅଭ୍ୟାସମୂଳକ ସହଯୋଗ ମାଧ୍ୟମରେ ସଂଚାର ଏବଂ ଦଳ କାର୍ଯ୍ୟକଳାପକୁ ବିକଶିତ କରିଛି।',
        'edu-title-6': 'ସମଗ୍ର ବିଷୟ ସୃଷ୍ଟି ସେବକ',
        'edu-text-6': 'ସାମାଜିକ ବିଷୟବସ୍ତୁ, ବ୍ଲଗ୍, ଗ୍ରାଫିକ୍ସ ସୃଷ୍ଟି କରି ଦଳ ସହିତ ସୃଜନଶୀଳ ପ୍ରୋଜେକ୍ଟରେ ସହଯୋଗ କରିଛି।',
        'projects-title': 'ମୋ <span>ପ୍ରୋଜେକ୍ଟ</span>',
        'project-title-1': 'ଇ-କମର୍ସ ୱେବସାଇଟ୍',
        'project-text-1': 'ଉତ୍ପାଦ ତାଲିକା, ବର୍ଗ ଫିଲ୍ଟରିଂ, ଶପିଙ୍ଗ୍ କାର୍ଟ ଏବଂ ଉପଭୋକ୍ତା-ଅନୁକୂଳ ଇଣ୍ଟରଫେସ୍ ସହିତ ଏକ ଉତ୍ତରଦାୟୀ ଇ-କମର୍ସ ପ୍ଲାଟଫର୍ମ ନିର୍ମାଣ କରିଛି।',
        'project-title-2': 'କର୍ମଚାରୀ ପରିଚାଳନା ପ୍ରଣାଳୀ',
        'project-text-2': 'କର୍ମଚାରୀ ରେକର୍ଡ, କାର୍ଯ୍ୟ ନିର୍ନ୍ଣୟ, ଅନୁପସ୍ଥିତି ଏବଂ ପ୍ରଦର୍ଶନ ଟ୍ରାକିଂ ପାଇଁ ଏକ କର୍ମଚାରୀ ପରିଚାଳନା ସିଷ୍ଟମ୍ ନିର୍ମାଣ କରିଛି।',
        'project-title-3': 'TalentBridge - କଲେଜ୍ ପ୍ଲେସମେଣ୍ଟ ପରିଚାଳନା ସିଷ୍ଟମ୍',
        'project-text-3': 'ଛାତ୍ର, କମ୍ପାନୀ ଏବଂ ପ୍ରଶାସନକୁ ଯୋଗ କରି କ୍ୟାମ୍ପସ୍ ନିବେଶକୁ ସହଜ କରିବା ପାଇଁ ଏକ ଫୁଲ-ଷ୍ଟାକ୍ ପ୍ଲେସମେଣ୍ଟ ପରିଚାଳନା ସିଷ୍ଟମ୍ ଡିଜାଇନ୍ ଏବଂ ବିକଶିତ କରିଛି।',
        'skills-title': 'ମୋ <span>କୌଶଳ</span>',
        'contact-title': 'ମୋତେ <span>ଯୋଗାଯୋଗ କରନ୍ତୁ!</span>',
        'contact-name': 'ସଂପୂର୍ଣ୍ଣ ନାମ',
        'contact-email': 'ଇମେଲ୍ ଠିକଣା',
        'contact-mobile': 'ମୋବାଇଲ୍ ନମ୍ବର',
        'contact-subject': 'ଇମେଲ୍ ବିଷୟ',
        'contact-message': 'ଆପଣଙ୍କର ସନ୍ଦେଶ',
        'contact-submit': 'ପଠାନ୍ତୁ',
        'footer-heading': 'ଆସୋ ଏକ ନୂତନ ଜିନିଷ ନିର୍ମାଣ କରିବା',
        'footer-text': 'ଆଧୁନିକ, ଉତ୍ତରଦାୟୀ ଏବଂ ଉପଭୋକ୍ତା-ଅନୁକୂଳ ୱେବ ଅନୁଭବ ନିର୍ମାଣ କରୁଥିବା ଏକ ଉତ୍ସୁକ୍ଷୁ ଫ୍ରଣ୍ଟେଣ୍ଡ ଡେଭେଲପର।',
        'footer-btn': 'ବାତ୍ଚାର୍ତ୍ତା ଆରମ୍ଭ କରନ୍ତୁ',
        'footer-links-title': 'ଦ୍ରୁତ ଲିଙ୍କ୍',
        'footer-link-home': 'ଗୃହ',
        'footer-link-about': 'ମୋ ବିଷୟରେ',
        'footer-link-education': 'ଶିକ୍ଷା',
        'footer-link-projects': 'ପ୍ରୋଜେକ୍ଟ',
        'footer-link-skills': 'କୌଶଳ',
        'footer-link-contact': 'ଯୋଗାଯୋଗ',
        'footer-tech-title': 'ଟେକ୍ ସ୍ଟାକ୍',
        'footer-highlights-title': 'ସୂଚନା',
        'highlight-1': '✓ ଫ୍ରଣ୍ଟେଣ୍ଡ ଡେଭେଲପର',
        'highlight-2': '✓ React ପ୍ରୋଜେକ୍ଟ',
        'highlight-3': '✓ ଉତ୍ତରଦାୟୀ ଡିଜାଇନ୍ ନିଶ୍ଚିତକର୍ତ୍ତା',
        'highlight-4': '✓ ଇଣ୍ଟର୍ନଶିପ୍ ସମ୍ପୂର୍ଣ୍ଣ',
        'footer-bottom': 'ଗଗନ ଦ୍ୱାରା ❤️ ସହିତ ନିର୍ମିତ | © 2026'
    },
    te: {
        'nav-home': 'హోమ్',
        'nav-about': 'నా గురించి',
        'nav-education': 'విద్య',
        'nav-projects': 'ప్రాజెక్టులు',
        'nav-skills': 'నైపుణ్యాలు',
        'nav-contact': 'సంప్రదించండి',
        'home-tag': 'ఫ్రంటెండ్ మరియు వెబ్ డెవలపర్',
        'home-heading': 'హలో, నేను <span>గగన్</span>',
        'home-subtitle': 'ఆధునిక వెబ్ అనుభవాలను నిర్మిస్తున్నాను',
        'home-desc': 'React.js, Next.js, Node.js, MongoDB, Express.js మరియు MySQLలో నైపుణ్యం కలిగిన ఒక ఉత్సాహభరిత ఫ్రంటెండ్ మరియు వెబ్ డెవలపర్.',
        'home-btn-1': 'నన్ను నియమించండి',
        'home-btn-2': 'మాతో మాట్లాడండి',
        'profile-name': 'గగన్',
        'home-role': 'ఫ్రంటెండ్ మరియు వెబ్ డెవలపర్',
        'home-tagline': 'ఆలోచనలను స్పందనశీలమైన, స్కేలబుల్ మరియు అద్భుతమైన వెబ్ అనుభవాలుగా మార్చుతున్నాను.',
        'about-title': 'నా గురించి',
        'about-p1': 'హలో, నేను గగన్, ఒక ఉత్సాహభరిత ఫ్రంటెండ్ మరియు వెబ్ డెవలపర్, who enjoys building modern, responsive, and user-friendly web applications.',
        'about-p2': 'నేను HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB మరియు MySQLలో పని చేస్తాను. శుభ్రమైన, సమర్థవంతమైన మరియు స్కేలబుల్ పరిష్కారాలను రూపొందించి, అద్భుతమైన వినియోగదారు అనుభవాన్ని అందించడం నా లక్ష్యం.',
        'about-p3': 'ప్రాజెక్ట్ అనుభవం మరియు సాఫ్ట్‌వేర్ డెవలప్మెంట్‌లో బలమైన పునాదితో, నేను కొత్త సాంకేతికతలను నిరంతరం పరిశోధిస్తాను మరియు నా నైపుణ్యాలను అప్‌డేట్ చేస్తాను.',
        'about-p4': 'నా లక్ష్యం ప్రభావవంతమైన ప్రాజెక్టులకు సహకరించడం, సాంకేతికతద్వారా వాస్తవ సమస్యలను పరిష్కరించడం మరియు ఒక వృత్తిపరమైన డెవలపర్‌గా ఎదగడం.',
        'education-title': 'నా <span>ప్రయాణం</span>',
        'edu-title-1': 'బి.టెక్ కంప్యూటర్ సైన్స్',
        'edu-text-1': 'వికాష్ ఇన్‌స్టిట్యూట్ ఆఫ్ టెక్నాలజీ, బార్గర్<br>బిపియుৎ విశ్వవిద్యాలయం<br>ప్రస్తుతం చదువుతున్నాను',
        'edu-title-2': 'హయ్యర్ సెకండరీ (12వ)',
        'edu-text-2': 'వికాష్ హయ్యర్ సెకండరీ స్కూల్<br>సిహెచ్ఎస్సె బోర్డ్<br>స్కోరు: 58%',
        'edu-title-3': 'సెకండరీ స్కూల్ (10వ)',
        'edu-text-3': 'జనతా ప్రభుత్వ ఉన్నత పాఠశాల<br>బిఎస్‌ఇ బోర్డ్<br>స్కోరు: 70%',
        'edu-title-4': 'ఫ్రంటెండ్ డెవలప్మెంట్',
        'edu-text-4': 'HTML, CSS, JavaScript, React.js మరియు ఆధునిక వెబ్ టెక్నాలజీలను ఉపయోగించి ప్రాజెక్టులు నేర్చుకుంటూ నిర్మిస్తున్నాను.',
        'edu-title-5': 'కమ్యూనికేషన్ నైపుణ్యాలు',
        'edu-text-5': 'విద్యా మరియు ఆచరణాత్మక సహకారాల ద్వారా కమ్యూనికేషన్ మరియు టీమ్‌వర్క్ నైపుణ్యాలు అభివృద్ధి చేశాను.',
        'edu-title-6': 'కంటెంట్ క్రియేషన్ వాలంటీర్',
        'edu-text-6': 'సామాజిక కంటెంట్, బ్లాగులు, గ్రాఫిక్స్ సృష్టించి, క్రియేటివ్ ప్రాజెక్టులపై జట్లతో సహకరించాను.',
        'projects-title': 'నా <span>ప్రాజెక్టులు</span>',
        'project-title-1': 'ఇ-కామర్స్ వెబ్‌సైట్',
        'project-text-1': 'ఉత్పత్తి జాబితాలు, వర్గ ఫిల్టరింగ్, షాపింగ్ కార్ట్ మరియు వినియోగదారు-స్నేహపూర్వక ఇంటర్ఫేస్ కలిగి ఒక స్పందనశీల ఇ-కామర్స్ ప్లాట్‌ఫారమ్ నిర్మించాను.',
        'project-title-2': 'ఎంప్లాయీ మేనేజ్‌మెంట్ సిస్టమ్',
        'project-text-2': 'ఎంప్లాయీ రికార్డులు, టాస్క్ అసైన్మెంట్లు, హాజరు మరియు పనితీరు ట్రాకింగ్ కోసం ఒక సిస్టమ్ నిర్మించాను.',
        'project-title-3': 'TalentBridge - కాలేజ్ ప్లేస్‌మెంట్ మేనేజ్‌మెంట్ సిస్టమ్',
        'project-text-3': 'విద్యార్థులు, కంపెనీలు మరియు అడ్మినిస్ట్రేటర్లను కలుపుతూ క్యాంపస్ రిక్రూట్మెంట్‌ను సులభతరం చేసే పూర్తి-స్టాక్ ప్లేస్‌మెంట్ మేనేజ్‌మెంట్ సిస్టమ్‌ను డిజైన్ చేసి అభివృద్ధి చేశాను.',
        'skills-title': 'నా <span>నైపుణ్యాలు</span>',
        'contact-title': 'నన్ను <span>సంప్రదించండి!</span>',
        'contact-name': 'పూర్తి పేరు',
        'contact-email': 'ఇమెయిల్ చిరునామా',
        'contact-mobile': 'మొబైల్ నంబర్',
        'contact-subject': 'ఇమెయిల్ విషయం',
        'contact-message': 'మీ సందేశం',
        'contact-submit': 'పంపండి',
        'footer-heading': 'చాలా అద్భుతమైనదాన్ని నిర్మిద్దాం',
        'footer-text': 'ఆధునిక, స్పందనశీలమైన మరియు వినియోగదారు-స్నేహపూర్వక వెబ్ అనుభవాలను సృష్టించే ఉత్సాహభరిత ఫ్రంటెండ్ డెవలపర్.',
        'footer-btn': 'మాతో మాట్లాడండి',
        'footer-links-title': 'త్వరిత లింకులు',
        'footer-link-home': 'హోమ్',
        'footer-link-about': 'నా గురించి',
        'footer-link-education': 'విద్య',
        'footer-link-projects': 'ప్రాజెక్టులు',
        'footer-link-skills': 'నైపుణ్యాలు',
        'footer-link-contact': 'సంప్రదించండి',
        'footer-tech-title': 'టెక్ స్ట్యాక్',
        'footer-highlights-title': 'హైలైట్ల్',
        'highlight-1': '✓ ఫ్రంటెండ్ డెవలపర్',
        'highlight-2': '✓ React ప్రాజెక్టులు',
        'highlight-3': '✓ స్పందనశీలమైన డిజైన్ నిపుణుడు',
        'highlight-4': '✓ ఇంటర్న్‌షిప్ పూర్తయింది',
        'footer-bottom': 'గగన్ చేత ❤️ తో నిర్మించబడింది | © 2026'
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    Object.entries(dict).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (!element) return;

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else if (element.tagName === 'BUTTON') {
            element.textContent = value;
        } else {
            element.innerHTML = value;
        }
    });

    document.documentElement.lang = lang === 'or' ? 'or' : lang === 'hi' ? 'hi' : lang === 'te' ? 'te' : 'en';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}

const translateToggle = document.getElementById('translate-toggle');
const langMenu = document.getElementById('lang-menu');

function toggleLanguageMenu() {
    langMenu.classList.toggle('open');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
        langMenu.classList.remove('open');
    });
});

translateToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleLanguageMenu();
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.lang-switcher')) {
        langMenu.classList.remove('open');
    }
});


applyLanguage('en');

// scroll secaion
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar link
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            //active section for animation on scroll
            sec.classList.add('show-animate');
        } 
        // if want to use nimation on scrtoll
        else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky headderr
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scrool)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}