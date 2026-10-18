(() => {
  'use strict';

  // Read-only, browser-based virtual filesystem. No commands run on a real computer.
  const file = content => ({ type: 'file', content });
  const dir = children => ({ type: 'dir', children });
  const fs = dir({
    home: dir({
      visitor: dir({
        'README.md': file('Welcome to the portfolio shell.\nTry: cd karthi && ls\nThen: cat README.md\nYou can also use tree, pwd, cd .. and help.'),
        karthi: dir({
          'README.md': file('# Karthikeyan Thanigaivelu\nNative Desktop / Systems Developer at Zoho Corporation since June 2022.\nFocused on Linux, macOS, Windows, cross-platform native apps, system services, diagnostics and technical research.\n\nExplore folders: experience/ projects/ technologies/ education/ certifications/ achievements/ testimonials/ contact/'),
          experience: dir({
            'README.md': file('# Experience\nZoho Corporation (June 2022 - Present)\nRaisein Ventures (June - August 2020)\nBennett University (December 2019)\n\nRun: ls, cd zoho, cat README.md'),
            zoho: dir({ 'README.md': file('# Zoho Corporation\nRole: Native Desktop / Systems Developer\nPeriod: June 2022 - Present | Chennai\nTeams: ManageEngine Remote Access Plus & Zoho Assist\n\n- Native desktop apps and system/user services across Linux, macOS and Windows\n- Cross-platform diagnostic tools and UI components\n- Session operations, recording components and service-management work\n- Research, proof-of-concept development and feasibility analysis\n- Performance work and unit/integration testing\n\nPublic summary; proprietary details are intentionally omitted.') }),
            raisein: dir({ 'README.md': file('# Raisein Ventures\nMachine Learning Intern | June-August 2020\n\n- Implemented face detection with Haar cascades and skin-tone detection using k-nearest neighbors (k-NN).\n- Deployed a production-ready Flask container on AWS Elastic Beanstalk.\n- Built a Firebase Cloud Firestore backend using the Python SDK and integrated it with Flutter.') }),
            bennett: dir({ 'README.md': file('# Bennett University\nStudent Intern | December 2019\n\n- Worked with object detection and segmentation techniques, including Deep Extreme Cut, Faster R-CNN and fast online object tracking.\n- Developed and deployed fast online object tracking with deep video inpainting on NVIDIA supercomputing infrastructure.') })
          }),
          projects: dir({
            'README.md': file('# Selected Projects\nFolders: deep_object_removal/ covid_tester/ waste_segregation/ collegare/\n\nEnter a project folder and use cat README.md.'),
            deep_object_removal: dir({ 'README.md': file('# Deep Object Removal From Video\nResearch on detecting, tracking and removing selected video objects using deep video inpainting.\n\nTech: Python, computer vision, object tracking, segmentation, deep learning.\nCode: github.com/karthikeyanthanigai/Deep-Object-Removal-From-Video') }),
            covid_tester: dir({ 'README.md': file('# Contactless COVID Tester\nFlask-based health assessment prototype with symptom analysis and diet recommendations.\n\nTech: Python, Flask, CNNs, Random Forest, machine learning.\nCode: github.com/karthikeyanthanigai/Contactless_Covid_Tester_Web_App') }),
            waste_segregation: dir({ 'README.md': file('# AI-IoT Waste Segregation\nAI prototype for paper, plastic and metal classification with connected services.\n\nTech: AI/ML, Azure IoT, REST APIs, Cosmos DB.\nDemo: dharineeshramtp2000.github.io/BinTez/') }),
            collegare: dir({ 'README.md': file('# Collegare | November 2020\nFlutter app connecting pharmaceutical companies, hospitals, medical stores, patients and doctors.\n\nTech: Flutter, Dart, Firebase Cloud Firestore.') })
          }),
          technologies: dir({
            'README.md': file('# Technology Stack\nLanguages: Go, Swift, Objective-C, C, Rust, C++, Python, JavaScript, Java, SQL, Dart\nSystems: Linux, macOS, Windows, native UI, system services, IPC, WebRTC, diagnostics\nEngineering: POCs, feasibility analysis, performance, unit/integration testing\nML/DL: CNN, object detection, object tracking, segmentation, Random Forest, k-NN, video inpainting\nCloud & Apps: Flask, AWS Elastic Beanstalk, Azure IoT, Cosmos DB, REST APIs, Firebase, Firestore, Flutter, NVIDIA DeepStream.'),
            languages: dir({ 'README.md': file('Go (Golang)\nSwift\nObjective-C\nC and C++\nRust\nPython\nJavaScript\nJava\nSQL\nDart') }),
            native_systems: dir({ 'README.md': file('Linux · macOS · Windows\nNative desktop development\nSystem and user services\nInterprocess communication\nWebRTC\nDiagnostic utilities\nNative UI\nPerformance optimization\nUnit and integration testing\nPlatform POCs and feasibility studies') }),
            ml_dl: dir({ 'README.md': file('Machine learning / Deep learning\nPython\nComputer vision\nConvolutional neural networks (CNN)\nRandom Forest\nk-nearest neighbors (k-NN)\nHaar cascades\nFaster R-CNN\nDeep Extreme Cut\nObject tracking and segmentation\nDeep video inpainting') }),
            cloud_apps: dir({ 'README.md': file('Flask\nAWS Elastic Beanstalk\nAzure IoT\nAzure Cosmos DB\nREST APIs\nFirebase Cloud Firestore\nFlutter / Dart\nNVIDIA DeepStream\nPython SDKs') })
          }),
          education: dir({ 'README.md': file('Rajalakshmi Engineering College, Chennai\nB.E. Computer Science and Engineering\n2018 - 2022\nCGPA: 8.96/10') }),
          certifications: dir({ 'README.md': file('AlgoExpert: SystemsExpert & InfraExpert (courses and quizzes completed)\nKaggle: Python (2021)\nHackerRank: Problem Solving - Basic (2020)\nNVIDIA DLI: DeepStream Video Analytics on Jetson Nano (2020)\nNVIDIA DLI: Deep Learning Fundamentals for Computer Vision (2019)') }),
          achievements: dir({ 'README.md': file('Microsoft Azure Hack-1: 1st place (September 2020)\nMicrosoft Azure Hack-3: 3rd place (November 2020)\nIIC National Innovation Contest: among 127 national pre-finalists (May 2021)') }),
          contact: dir({ 'README.md': file('Email: ktv0303@gmail.com\nPhone: +91 99627 23050\nGitHub: github.com/karthikeyanthanigai\nWebsite: karthikeyanthanigai.github.io/Website/\nLinkedIn: linkedin.com/in/karthikeyanthanigai/\nResume: use the command "resume"') }),
          testimonials: dir({
            'README.md': file('Recommendations from former mentors and teammates.\n\nRead: cat anshuman.md\n      cat naveen.md\n\nOriginal testimonials are also displayed on the page under Testimonials.'),
            'anshuman.md': file('Anshuman Agarwal | DE at LupaPets | MS at UCL | Former Googler\nMentor | June 5, 2021\n\nI had the opportunity to mentor Karthikeyan in an internship program at Leading India AI, and am pleased to say that he is an excellent, highly motivated student who is always hungry to learn more. In the time that we worked together, I saw first-hand how adept he at the research, and always yearns to dive deep into the concepts needed to solve a particular problem. He is an asset to anyone looking for a sincere employee with a zeal for Machine Learning.\n\nlinkedin.com/in/anshuman73/'),
            'naveen.md': file('Naveen Nanda Mohan | Senior AI Consultant at STERIS\nFormer teammate | June 22, 2020\n\nKarthi worked on Inpainting during his time at Bennett where he isolated a specified object from a video using CNN. He is a brilliant student who is very quick to solving tasks and is very prompt in his work. He is also working on understanding ML deployment and other applications of AI and is priming himself to be a ML practitioner with high standards\n\nlinkedin.com/in/naveen-nanda-mohan-3a1b40133/')
          })
        })
      })
    })
  });

  const home = ['home', 'visitor'];
  let cwd = [...home];
  const history = [];
  let historyPosition = 0;
  const output = document.querySelector('#terminal-output');
  const form = document.querySelector('#terminal-form');
  const input = document.querySelector('#command-input');
  const prompt = document.querySelector('#terminal-prompt');
  const shortcuts = document.querySelectorAll('[data-terminal-command]');
  const helpText = [
    'PORTFOLIO SHELL · read-only virtual filesystem',
    'ls [path]       list directory contents',
    'cd [path]       change directory (.., ~, / supported)',
    'pwd             print current path',
    'cat FILE        read README.md and other text files',
    'tree [path]     show the folder tree',
    'find [path]     list all files recursively',
    'open SECTION    scroll to experience, projects, testimonials, skills, about or contact',
    'help            show commands',
    'clear           clear terminal output',
    'history         show previous commands',
    'whoami          show profile',
    'resume          download resume PDF',
    'github          open GitHub',
    'Tab: autocomplete   ↑/↓: command history'
  ].join('\n');

  function nodeAt(parts) {
    return parts.reduce((node, part) => node?.type === 'dir' ? node.children[part] : undefined, fs);
  }
  function resolve(path = '.') {
    const pieces = path.startsWith('/') ? [] : path.startsWith('~') ? [...home] : [...cwd];
    const raw = path.startsWith('~') ? path.slice(1) : path;
    for (const segment of raw.split('/')) {
      if (!segment || segment === '.') continue;
      if (segment === '..') pieces.pop();
      else pieces.push(segment);
    }
    return pieces;
  }
  function absolute(parts) { return '/' + parts.join('/'); }
  function displayPath(parts) {
    const withinHome = home.every((part, index) => parts[index] === part);
    return withinHome ? '~' + (parts.length > home.length ? '/' + parts.slice(home.length).join('/') : '') : absolute(parts);
  }
  function updatePrompt() {
    if (prompt) prompt.innerHTML = `<span class="green">visitor@portfolio</span>:<span class="blue">${displayPath(cwd)}</span>$`;
  }
  function addLine(text, className = 'command-output') {
    if (!output) return;
    const item = document.createElement('div');
    item.className = className;
    item.textContent = text;
    output.appendChild(item);
    output.scrollTop = output.scrollHeight;
  }
  function list(parts, long = false) {
    const node = nodeAt(parts);
    if (!node) return `ls: cannot access '${absolute(parts)}': No such file or directory`;
    if (node.type === 'file') return parts.at(-1);
    const names = Object.keys(node.children).sort((a, b) => a === 'README.md' ? 1 : b === 'README.md' ? -1 : a.localeCompare(b));
    return names.map(name => {
      const item = node.children[name];
      return long ? `${item.type === 'dir' ? 'dr-xr-xr-x' : '-r--r--r--'}  ${item.type === 'dir' ? name + '/' : name}` : `${item.type === 'dir' ? '📁 ' : '📄 '}${name}${item.type === 'dir' ? '/' : ''}`;
    }).join('\n') || '(empty directory)';
  }
  function tree(parts, depth = 0, limit = 50) {
    const node = nodeAt(parts);
    if (!node) return 'tree: path not found';
    if (node.type === 'file') return parts.at(-1);
    let lines = [parts.at(-1) || '/'];
    let count = 0;
    function walk(item, indent) {
      if (indent.length > 25) return;
      const entries = Object.entries(item.children);
      entries.forEach(([name, child], i) => {
        if (count >= limit) return;
        count++;
        const last = i === entries.length - 1;
        lines.push(indent + (last ? '└── ' : '├── ') + name + (child.type === 'dir' ? '/' : ''));
        if (child.type === 'dir') walk(child, indent + (last ? '    ' : '│   '));
      });
    }
    walk(node, '');
    if (count >= limit) lines.push('... (output limited; use cd to explore further)');
    return lines.join('\n');
  }
  function findFiles(parts) {
    const node = nodeAt(parts);
    if (!node) return 'find: path not found';
    const files = [];
    function walk(item, path) {
      if (files.length >= 50) return;
      if (item.type === 'file') { files.push(path); return; }
      Object.entries(item.children).forEach(([name, child]) => walk(child, `${path}/${name}`));
    }
    walk(node, absolute(parts).replace(/\/$/, ''));
    return files.join('\n') + (files.length >= 50 ? '\n... results limited' : '');
  }
  function downloadResume() {
    const a = document.createElement('a');
    a.href = 'Karthikeyan_Resume.pdf';
    a.download = 'Karthikeyan_Resume.pdf';
    a.click();
  }
  function runCommand(raw) {
    const line = raw.trim();
    if (!line) return;
    history.push(line);
    historyPosition = history.length;
    addLine(`visitor@portfolio:${displayPath(cwd)}$ ${line}`, 'terminal-line command-echo');
    const [command, ...args] = line.split(/\s+/);
    const key = command.toLowerCase();
    const first = args[0];
    let result = '';
    switch (key) {
      case 'help': result = helpText; break;
      case 'pwd': result = absolute(cwd); break;
      case 'ls': result = list(resolve(first?.startsWith('-') ? (args[1] || '.') : (first || '.')), args.includes('-l') || args.includes('-la') || args.includes('-al')); break;
      case 'cd': {
        const target = resolve(first || '~');
        const node = nodeAt(target);
        if (!node) result = `cd: ${first}: No such file or directory`;
        else if (node.type !== 'dir') result = `cd: ${first}: Not a directory`;
        else { cwd = target; updatePrompt(); result = `→ ${displayPath(cwd)}`; }
        break;
      }
      case 'cat': {
        if (!first) { result = 'cat: missing filename (try cat README.md)'; break; }
        const node = nodeAt(resolve(first));
        result = !node ? `cat: ${first}: No such file` : node.type === 'dir' ? `cat: ${first}: Is a directory` : node.content;
        break;
      }
      case 'tree': result = tree(resolve(first || '.')); break;
      case 'find': result = findFiles(resolve(first || '.')); break;
      case 'clear': output?.replaceChildren(); return;
      case 'history': result = history.map((x, i) => `${String(i + 1).padStart(3)}  ${x}`).join('\n'); break;
      case 'whoami': result = 'Karthikeyan Thanigaivelu\nNative Desktop / Systems Developer @ Zoho\nLinux · macOS · Windows'; break;
      case 'echo': result = args.join(' '); break;
      case 'date': result = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }); break;
      case 'open': {
        const target = { experience: 'experience', projects: 'projects', testimonials: 'testimonials', skills: 'stack', technologies: 'stack', education: 'credentials', certifications: 'credentials', credentials: 'credentials', about: 'about', contact: 'about' }[first?.toLowerCase()];
        if (!target) result = 'Usage: open experience|projects|testimonials|skills|education|contact';
        else {
          result = `Opening #${target}...`;
          document.getElementById(target)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        }
        break;
      }
      case 'resume': downloadResume(); result = 'Downloading resume PDF...'; break;
      case 'github': window.open('https://github.com/karthikeyanthanigai', '_blank', 'noopener,noreferrer'); result = 'Opening GitHub...'; break;
      case 'about': result = nodeAt(resolve('~/karthi/README.md')).content; break;
      case 'projects': result = nodeAt(resolve('~/karthi/projects/README.md')).content; break;
      case 'experience': result = nodeAt(resolve('~/karthi/experience/README.md')).content; break;
      case 'skills': result = nodeAt(resolve('~/karthi/technologies/README.md')).content; break;
      case 'testimonials': result = nodeAt(resolve('~/karthi/testimonials/README.md')).content; break;
      case 'sudo': result = 'Permission denied. This is a read-only portfolio, not a real OS :)'; break;
      default: result = `Command not found: ${command}\nType help for available commands.`;
    }
    if (result) addLine(result);
  }
  function autocomplete() {
    const parts = input.value.split(/\s+/);
    const fragment = parts.pop() || '';
    if (!parts.length) {
      const known = ['ls', 'cd', 'pwd', 'cat', 'tree', 'find', 'help', 'clear', 'history', 'whoami', 'resume', 'github', 'open', 'about', 'projects', 'experience', 'skills', 'testimonials'];
      const matches = known.filter(x => x.startsWith(fragment));
      if (matches.length === 1) input.value = matches[0] + ' ';
      else if (matches.length > 1) addLine(matches.join('   '));
      return;
    }
    const separator = fragment.lastIndexOf('/');
    const parent = separator < 0 ? '.' : fragment.slice(0, separator) || '/';
    const prefix = separator < 0 ? '' : fragment.slice(0, separator + 1);
    const segment = separator < 0 ? fragment : fragment.slice(separator + 1);
    const node = nodeAt(resolve(parent));
    if (node?.type !== 'dir') return;
    const matches = Object.keys(node.children).filter(x => x.toLowerCase().startsWith(segment.toLowerCase()));
    if (matches.length === 1) {
      const item = node.children[matches[0]];
      input.value = parts.join(' ') + ' ' + prefix + matches[0] + (item.type === 'dir' ? '/' : ' ');
    } else if (matches.length > 1) addLine(matches.join('   '));
  }

  form?.addEventListener('submit', event => { event.preventDefault(); runCommand(input.value); input.value = ''; input.focus(); });
  input?.addEventListener('keydown', event => {
    if (event.key === 'Tab') { event.preventDefault(); autocomplete(); }
    if (event.key === 'ArrowUp' && history.length) { event.preventDefault(); historyPosition = Math.max(0, historyPosition - 1); input.value = history[historyPosition]; }
    if (event.key === 'ArrowDown' && history.length) { event.preventDefault(); historyPosition = Math.min(history.length, historyPosition + 1); input.value = history[historyPosition] || ''; }
  });
  shortcuts.forEach(button => button.addEventListener('click', () => { runCommand(button.dataset.terminalCommand); input?.focus(); }));
  document.querySelector('.hero-terminal')?.addEventListener('click', event => { if (!event.target.closest('button') && !event.target.closest('a')) input?.focus(); });
  updatePrompt();

  // Intersection animations with reduced-motion support.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const elements = document.querySelectorAll('.section-heading, .experience-feature, .timeline-item, .project-card, .stack-card, .about-card, .ml-panel, .testimonial-card');
    elements.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    elements.forEach(el => observer.observe(el));
  }
})();
