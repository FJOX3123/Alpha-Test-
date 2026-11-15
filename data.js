// ================= MED26 F2 OSPE - Shared Database & Knowledge Base (data.js) =================
// تم فصل قاعدة البيانات في ملف مستقل لتخزينها في كاش المتصفح وتسريع فتح جميع صفحات الموقع

// ================= 6. قاعدة البيانات الكاملة لجميع تجميعات البنك (2020 - 2025) =================
        const questionsDB = [
            // ==================== MICROBIOLOGY - LAB 1: GRAM-POSITIVE ====================
            { id: 101, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 5, slot: 0,
              q: "An 8-year-old female child presenting with fever, pain in the throat and difficulty and pain during swallowing. Per speculum examination, enlarged, reddish, inflamed tonsils covered with exudate.\n1) What is the result of the pathogens on a Gram stain?\n2) What is the causative pathogen?",
              a: "1) <span class='kw-highlight'>Gram-positive (cocci in chains)</span><br>2) <span class='kw-highlight'>Streptococcus pyogenes</span>" },

            { id: 102, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 5, slot: 0, noSample: true,
              q: "An 8-year-old female child presenting with fever, pain in the throat and difficulty and pain during swallowing. Per speculum examination shows enlarged, reddish (inflamed tonsils) at places covered with exudate.\n1) What is the result of the pathogens on a Gram stain?\n2) What is the causative pathogen?",
              a: "1) <span class='kw-highlight'>Gram-positive (cocci in chains)</span><br>2) <span class='kw-highlight'>Streptococcus pyogenes</span>" },

            { id: 103, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 6, slot: 0,
              q: "1) What agar is used to distinguish between Staphylococcus species?\n2) What color would S. aureus give on this agar?",
              a: "1) <span class='kw-highlight'>Mannitol salt agar (MSA)</span><br>2) <span class='kw-highlight'>Yellow</span>" },

            { id: 104, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 6, slot: 1,
              q: "1) What is the name of this agar?\n2) What is the color of the colony produced by Staphylococcus aureus?",
              a: "1) <span class='kw-highlight'>Mannitol salt agar (MSA)</span><br>2) <span class='kw-highlight'>Yellow colony</span>" },

            { id: 105, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 6, slot: 2,
              q: "(CASE) of tonsillitis, what is the causative bacteria of this condition?",
              a: "<span class='kw-highlight'>Streptococcus pyogenes</span>" },

            { id: 106, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2022", category: "compilation", type: "mcq", highYield: false, page: 7, slot: 0,
              q: "What is the identification method for this organism?",
              options: ["A. Direct smear streptococci pyogenes", "B. Culture streptococci pyogenes", "C. Direct smear Staphylococcus aureus", "D. Culture Staphylococcus aureus"],
              correct: 2, a: "C. <span class='kw-highlight'>Direct smear Staphylococcus aureus</span>" },

            { id: 107, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 7, slot: 1,
              q: "Which of the following types of hemolysis occurred during the diagnosis of the disease in this picture (acute follicular tonsillitis)?",
              options: ["A. Alpha", "B. Beta", "C. Gamma"],
              correct: 1, a: "B. <span class='kw-highlight'>Beta</span> (Beta hemolysis by S. pyogenes)" },

            { id: 108, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 7, slot: 2,
              q: "Which of the following types of hemolysis occurred during the diagnosis of the disease in this picture (skin carbuncle/abscess)?",
              options: ["A. Alpha hemolysis", "B. Beta hemolysis", "C. Gamma hemolysis"],
              correct: 1, a: "B. <span class='kw-highlight'>Beta hemolysis</span>" },

            { id: 109, subject: "MICROBIOLOGY", lab: "Gram-positive Bacteria", year: "2020", category: "compilation", type: "mcq", highYield: false, page: 8, slot: 0,
              q: "The circle (A) shows which of the following bacteria (CAMP test)?",
              options: ["A. Streptococcus agalactiae", "B. S. pyogenes", "C. S. aureus"],
              correct: 0, a: "A. <span class='kw-highlight'>Streptococcus agalactiae</span>" },

            // ==================== MICROBIOLOGY - LAB 2: GRAM-NEGATIVE ====================
            { id: 110, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 9, slot: 0,
              q: "1) Name of the bacteria? (Indole -, Methyl red -, VP +)\n2) Name another test for it?",
              a: "1) <span class='kw-highlight'>Klebsiella pneumoniae (or Klebsiella spp.)</span><br>2) <span class='kw-highlight'>Gram stain / TSI (Triple Sugar Iron) agar</span>" },

            { id: 111, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 9, slot: 1,
              q: "The image indicates organism growth on MacConkey agar. After some tests, the results were: Indole test: +ve, Methyl red: +ve, Citrate test: -ve, Voges-Proskauer test: -ve.\n1) What is this organism?\n2) What other tests could be used to confirm the final diagnosis?",
              a: "1) <span class='kw-highlight'>Escherichia coli (E. coli)</span><br>2) <span class='kw-highlight'>Gram stain / TSI (Triple Sugar Iron) agar</span>" },

            { id: 112, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 9, slot: 2,
              q: "1) What is this test?\n2) Name one organism with a positive result of this test?",
              a: "1) <span class='kw-highlight'>Urease test</span><br>2) <span class='kw-highlight'>Proteus mirabilis</span>" },

            { id: 113, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 10, slot: 0,
              q: "1) What is the name of this test?\n2) Name one example of positive organism.",
              a: "1) <span class='kw-highlight'>Citrate utilisation test</span><br>2) <span class='kw-highlight'>Klebsiella pneumoniae</span>" },

            { id: 114, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 10, slot: 1,
              q: "What is the reaction of the TSI test shown in the picture?\nA - \nB - ",
              a: "A: <span class='kw-highlight'>A/A (Acid slant / Acid butt)</span><br>B: <span class='kw-highlight'>K/A + H2S (Alkaline slant / Acid butt with H2S blackening)</span>" },

            { id: 115, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2022", category: "compilation", type: "flashcard", highYield: false, page: 10, slot: 2,
              q: "Name of the organism identified by this API 20E strip:",
              a: "<span class='kw-highlight'>Klebsiella</span>" },

            { id: 116, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2022", category: "compilation", type: "mcq", highYield: false, page: 11, slot: 0,
              q: "Which of the following is a possible organism that can produce a greenish pigment when we put it in agar medium?",
              options: ["A. Pseudomonas aeruginosa", "B. Proteus vulgaris", "C. Shigella", "D. Salmonella"],
              correct: 0, a: "A. <span class='kw-highlight'>Pseudomonas aeruginosa</span>" },

            { id: 117, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 11, slot: 1,
              q: "Which of the following gives a positive result of this photo (Urease slant)?",
              options: ["A. Proteus", "B. E. coli", "C. Klebsiella", "D. Salmonella"],
              correct: 0, a: "A. <span class='kw-highlight'>Proteus</span>" },

            { id: 118, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 11, slot: 2,
              q: "What is the name of this bacterium (Indole negative, Citrate positive blue)?",
              options: ["A. Klebsiella", "B. E. coli", "C. Shigella"],
              correct: 0, a: "A. <span class='kw-highlight'>Klebsiella</span>" },

            { id: 119, subject: "MICROBIOLOGY", lab: "Gram-negative Bacteria", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 11, slot: 3,
              q: "What is the name of this test?",
              options: ["A. Indole test", "B. Citrate test", "C. Urease test"],
              correct: 1, a: "B. <span class='kw-highlight'>Citrate test</span>" },

            // ==================== MICROBIOLOGY - LAB 3: ANTIBIOTIC SUSCEPTIBILITY ====================
            { id: 120, subject: "MICROBIOLOGY", lab: "Antibiotic Susceptibility", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 12, slot: 0,
              q: "1) What is the name of this method?\n2) What does zone C stand for?",
              a: "1) <span class='kw-highlight'>Diffusion method (Disc diffusion method)</span><br>2) <span class='kw-highlight'>Zone of inhibition</span>" },

            { id: 121, subject: "MICROBIOLOGY", lab: "Antibiotic Susceptibility", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 12, slot: 1,
              q: "1) What is the name of this method?\n2) What does zone C stand for?",
              a: "1) <span class='kw-highlight'>Diffusion method</span><br>2) <span class='kw-highlight'>Zone of inhibition</span>" },

            { id: 122, subject: "MICROBIOLOGY", lab: "Antibiotic Susceptibility", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 12, slot: 2,
              q: "What is the name of this agar?",
              a: "<span class='kw-highlight'>Mueller-Hinton Agar / MH Agar</span>" },

            { id: 123, subject: "MICROBIOLOGY", lab: "Antibiotic Susceptibility", year: "2022", category: "compilation", type: "flashcard", highYield: true, page: 13, slot: 0,
              q: "What is the name of this Agar?",
              a: "<span class='kw-highlight'>Mueller-Hinton Agar / MH Agar</span>" },

            { id: 124, subject: "MICROBIOLOGY", lab: "Antibiotic Susceptibility", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 13, slot: 1,
              q: "Which of the following is the name of this medium?",
              options: ["A. Blood agar", "B. Disc Diffusion Method", "C. Nitrate agar"],
              correct: 1, a: "B. <span class='kw-highlight'>Disc Diffusion Method</span>",
              note: "هذا السؤال ورد في ميد 2021 بنفس الصيغة وكان يسأل عن الاسم وليس الطريقة، ولعدم توفر Mueller-Hinton Agar ضمن الخيارات تم اختيار الإجابة الأقرب B." },

            { id: 125, subject: "MICROBIOLOGY", lab: "Antibiotic Susceptibility", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 13, slot: 2,
              q: "WOTF is the name of this medium?",
              options: ["A. Blood agar", "B. Mueller-Hinton agar (MH)", "C. Nitrate agar"],
              correct: 1, a: "B. <span class='kw-highlight'>Mueller-Hinton agar (MH)</span>" },

            // ==================== MICROBIOLOGY - LAB 4: MOLECULAR TECHNIQUES ====================
            { id: 126, subject: "MICROBIOLOGY", lab: "Molecular Techniques", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 14, slot: 0,
              q: "1) Explain why we use reverse transcription for COVID-19 (SARS-CoV-2).\n2) What is the difference between PCR and q-PCR?",
              a: "1) We use reverse transcription because it <span class='kw-highlight'>converts viral RNA into DNA</span>, since SARS-CoV-2 is an RNA virus and PCR works only on DNA.<br>2) PCR amplifies DNA and gives a <span class='kw-highlight'>qualitative result</span> at the end (by gel electrophoresis), while q-PCR amplifies and <span class='kw-highlight'>quantifies DNA in real time</span> using fluorescence." },

            { id: 127, subject: "MICROBIOLOGY", lab: "Molecular Techniques", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 14, slot: 1,
              q: "1) RT-qPCR detects viruses such as COVID-19. Give another application of real-time PCR?\n2) This picture shows the curve of qPCR. What conditions will be met before starting the qPCR?",
              a: "1) <span class='kw-highlight'>Quantification of viral load</span><br>2) <span class='kw-highlight'>Conducting reverse transcription</span>" },

            { id: 128, subject: "MICROBIOLOGY", lab: "Molecular Techniques", year: "2023", category: "compilation", type: "flashcard", highYield: false, page: 14, slot: 2,
              q: "What is the name of the technique in this photo that is used for COVID-19 diagnosis?",
              a: "<span class='kw-highlight'>DNA Microarray (Microarray technique)</span>" },

            { id: 129, subject: "MICROBIOLOGY", lab: "Molecular Techniques", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 15, slot: 0,
              q: "This picture shows the curve of qPCR. Which of the following conditions should be performed before starting qPCR?",
              options: ["A. Insert the virus into human DNA", "B. Conduct reverse transcription", "C. Substitute ribose nucleotide triphosphate for deoxyribose nucleotide"],
              correct: 1, a: "B. <span class='kw-highlight'>Conduct reverse transcription</span>" },

            { id: 130, subject: "MICROBIOLOGY", lab: "Molecular Techniques", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 15, slot: 1,
              q: "Which of the following inclusion bodies is located at the cell level (in cytoplasm)?",
              options: ["A. Negri bodies", "B. Herpes"],
              correct: 0, a: "A. <span class='kw-highlight'>Negri bodies</span>" },

            { id: 131, subject: "MICROBIOLOGY", lab: "Molecular Techniques", year: "2020", category: "compilation", type: "mcq", highYield: false, page: 15, slot: 2,
              q: "What is the significance of the test shown in the image (Western Blot) that is used in HIV infection?",
              options: ["A. Screening test for HIV infection", "B. Confirmatory test for HIV infection", "C. Used to detect the viral load of the virus in HIV infection"],
              correct: 1, a: "B. <span class='kw-highlight'>Confirmatory test for HIV infection</span>" },

            // ==================== MICROBIOLOGY - LAB 5: PARASITIC DISEASES ====================
            { id: 132, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 16, slot: 0,
              q: "Regarding the Stool Container:\n1) What is the advice that you would give the patient?\n2) Why we make immediate examination?",
              a: "1) <span class='kw-highlight'>Collect stool in a clean, dry container</span>. Avoid contamination with urine or water. Send to the lab immediately. If delayed, keep at 4°C or use preservatives.<br>2) <span class='kw-highlight'>To preserve trophozoite motility</span>. Delay causes loss of motility and degeneration." },

            { id: 133, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 16, slot: 1,
              q: "1) Name of the test?\n2) Name two parasites detected by this test?",
              a: "1) <span class='kw-highlight'>Blood films (Thin and Thick blood smears)</span><br>2) <span class='kw-highlight'>Malaria</span>, <span class='kw-highlight'>Wuchereria bancrofti</span>, <span class='kw-highlight'>Trypanosoma brucei / Babesia</span>" },

            { id: 134, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 16, slot: 2,
              q: "1) What is the name of this method?\n2) Name one organism identified by this method?",
              a: "1) <span class='kw-highlight'>NIH swab</span><br>2) <span class='kw-highlight'>Enterobius vermicularis (Pinworm)</span>" },

            { id: 135, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 17, slot: 0,
              q: "1) Identify the organism?\n2) What is the best sample to obtain this pathogen?",
              a: "1) <span class='kw-highlight'>Ascaris lumbricoides</span><br>2) <span class='kw-highlight'>Stool sample</span>" },

            { id: 136, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 17, slot: 1,
              q: "What is the identification method (sample) for this organism?",
              a: "<span class='kw-highlight'>Urine sample</span> (for Schistosoma haematobium) / <span class='kw-highlight'>Stool sample (Faeces)</span>",
              note: "العينة المرفقة في تجميع 23 هي بويضة ذات شوكة طرفية واضحة (Terminal spine) أي بويضة بلهارسيا البول Schistosoma haematobium وتصبح الإجابة Urine sample." },

            { id: 137, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 17, slot: 2,
              q: "WOTF is the best method to diagnose the organism that you see under the microscope (Enterobius vermicularis)?",
              options: ["A. Blood test", "B. Look at the rash", "C. Collecting an egg from the perianal area", "D. Skin test"],
              correct: 2, a: "C. <span class='kw-highlight'>Collecting an egg from the perianal area</span>" },

            { id: 138, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 18, slot: 0,
              q: "What is the identification sample for this organism (Schistosoma haematobium egg with terminal spine)?",
              options: ["A. Urine", "B. Stool", "C. Blood"],
              correct: 0, a: "A. <span class='kw-highlight'>Urine</span>" },

            { id: 139, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 18, slot: 1,
              q: "Which of the following is the parasite that can be detected by the diagnostic method shown in the given image (Thin & Thick blood smear)?",
              options: ["A. Enterobius vermicularis", "B. W. bancrofti", "C. F. hepatica", "D. Paragonimus westermani"],
              correct: 1, a: "B. <span class='kw-highlight'>W. bancrofti</span>" },

            { id: 140, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 18, slot: 2,
              q: "What is the identification method for this organism (Giardia lamblia trophozoite)?",
              options: ["A. Direct wet mount for unpreserved stool", "B. Direct wet mount with 10% formalin for preserved stool", "C. Formol-ether concentration"],
              correct: 0, a: "A. <span class='kw-highlight'>Direct wet mount for unpreserved stool</span>" },

            { id: 141, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 19, slot: 0,
              q: "What is the type of detection method used by the diagnostic technique?",
              options: ["A. Rapid diagnostic detection", "B. Antigen detection and Antibody complex", "C. Molecular detection"],
              correct: 0, a: "A. <span class='kw-highlight'>Rapid diagnostic detection</span>" },

            { id: 142, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 19, slot: 1,
              q: "WOTF is the best method to diagnose the infection predicted by the parasite stage shown in the given image (Enterobius vermicularis ova)?",
              options: ["A. Blood test", "B. Look at the rash", "C. Detecting ova in a perianal swab", "D. Skin test"],
              correct: 2, a: "C. <span class='kw-highlight'>Detecting ova in a perianal swab</span>" },

            { id: 143, subject: "MICROBIOLOGY", lab: "Parasitic Diseases", year: "2020", category: "compilation", type: "mcq", highYield: false, page: 19, slot: 2,
              q: "What is the name of this sample?",
              options: ["A. Stool Sample", "B. Urine sample", "C. Blood sample"],
              correct: 0, a: "A. <span class='kw-highlight'>Stool Sample</span>" },

            // ==================== PATHOLOGY - LAB 1: CELL INJURY & ADAPTATION ====================
            { id: 201, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 21, slot: 0,
              q: "1) Describe the pathogenic condition in this organ?\n2) What is the diagnosis?",
              a: "1) <span class='kw-highlight'>One kidney is normal and the other is shrunken</span><br>2) <span class='kw-highlight'>Atrophy of the kidney (Renal atrophy)</span>" },

            { id: 202, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 21, slot: 1,
              q: "3) What is the diagnosis?\n4) Describe the pathogenic condition in this tissue?",
              a: "3) <span class='kw-highlight'>Lung Anthracosis (Pulmonary anthracosis)</span><br>4) Sections show lung tissue containing <span class='kw-highlight'>black pigment</span> due to accumulation of <span class='kw-highlight'>carbon particles</span>." },

            { id: 203, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 21, slot: 2,
              q: "5) What is the diagnosis?\n6) Describe the pathogenic condition in this tissue?",
              a: "5) <span class='kw-highlight'>Prostate hyperplasia (BPH)</span><br>6) Section shows: <span class='kw-highlight'>increase in number of prostatic glands</span>, <span class='kw-highlight'>proliferation of fibromuscular stroma</span>, and focal cystic dilation." },

            { id: 204, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 22, slot: 0,
              q: "1) Describe what happened to the kidney?\n2) What is the adaptive cellular mechanism?",
              a: "1) <span class='kw-highlight'>Decrease in the size of the kidney</span> (One kidney has a normal configuration, and the other kidney is shrunken)<br>2) <span class='kw-highlight'>Atrophy of the kidney</span>" },

            { id: 205, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 22, slot: 1,
              q: "3) Describe what is seen in the image?\n4) What is the diagnosis?",
              a: "3) Lung tissue containing <span class='kw-highlight'>black pigment due to accumulation of carbon particles</span><br>4) <span class='kw-highlight'>Lung Anthracosis</span>" },

            { id: 206, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 22, slot: 2,
              q: "5) Describe what is seen?\n6) What is the diagnosis?",
              a: "5) <span class='kw-highlight'>Increased number of prostatic glands</span>, dilation of most glands, increased lining epithelial cells, <span class='kw-highlight'>proliferation of fibromuscular stroma</span>.<br>6) <span class='kw-highlight'>Benign Prostatic Hyperplasia (BPH)</span>" },

            { id: 207, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2024", category: "compilation", type: "flashcard", highYield: false, page: 23, slot: 0,
              q: "1) Describe what are the changes in the cell size and nuclear size?\n2) What is the adaptive cellular mechanism?",
              a: "1) <span class='kw-highlight'>Hypertrophied Myocardium with an increase in cell size and nuclear size</span><br>2) <span class='kw-highlight'>Left ventricular hypertrophy (Myocardial hypertrophy)</span>" },

            { id: 208, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 23, slot: 1,
              q: "3) Describe the cellular adaptation shown in this tissue.\n4) What is the diagnosis?",
              a: "3) <span class='kw-highlight'>Increased number of prostatic glands</span>, dilation of most glands, and <span class='kw-highlight'>proliferation of fibromuscular stroma</span>.<br>4) <span class='kw-highlight'>Benign Prostatic Hyperplasia (BPH)</span>" },

            { id: 209, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 23, slot: 2,
              q: "5) Describe the cellular adaptation shown in the photo.\n6) What is the diagnosis?",
              a: "5) Cervical epithelium where <span class='kw-highlight'>all cells show dysplastic changes from the base till the surface</span>, causing severe dysplasia.<br>6) <span class='kw-highlight'>Dysplasia of the cervix (Cervical dysplasia)</span>" },

            { id: 210, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2023", category: "compilation", type: "flashcard", highYield: false, page: 24, slot: 0,
              q: "The pathogenic condition shown in the photo (Gout) is due to the deposition of what material?",
              a: "<span class='kw-highlight'>Deposition of uric acid salts (Monosodium urate crystals)</span>" },

            { id: 211, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 24, slot: 1,
              q: "Which type of cellular adaptation of the prostate is shown in the image?",
              options: ["A. Dysplasia", "B. Hyperplasia", "C. Atrophy", "D. Hypertrophy"],
              correct: 1, a: "B. <span class='kw-highlight'>Hyperplasia</span>" },

            { id: 212, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 24, slot: 2,
              q: "Which of the following pathological processes is seen in the slide (Cervix)?",
              options: ["A. Metaplasia", "B. Dysplasia", "C. Hyperplasia", "D. Neoplasm"],
              correct: 1, a: "B. <span class='kw-highlight'>Dysplasia</span>" },

            { id: 213, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 25, slot: 0,
              q: "Which of the following is the adaptive mechanism of the following tissue (Prostate)?",
              options: ["A. Hyperplasia", "B. Hypertrophy", "C. Dysplasia", "D. Metaplasia"],
              correct: 0, a: "A. <span class='kw-highlight'>Hyperplasia</span>" },

            { id: 214, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 25, slot: 1,
              q: "Which of the following pathological processes is seen in the slide?",
              options: ["A. Dysplasia", "B. Hyperplasia", "C. Atrophy", "D. Hypertrophy"],
              correct: 0, a: "A. <span class='kw-highlight'>Dysplasia</span>" },

            { id: 215, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 25, slot: 2,
              q: "This photo shows two skin nodules, slightly yellowish in color. Which of the following is the diagnosis?",
              options: ["A. Anthracosis", "B. Xanthoma", "C. Gout"],
              correct: 1, a: "B. <span class='kw-highlight'>Xanthoma</span>" },

            { id: 216, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 26, slot: 0,
              q: "This photo shows kidney tissue; the glomeruli show deposition of pink material replacing the glomerular tissue. Which of the following is the diagnosis?",
              options: ["A. Amyloid", "B. Xanthoma", "C. Gout"],
              correct: 0, a: "A. <span class='kw-highlight'>Amyloid</span>" },

            { id: 217, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 26, slot: 1,
              q: "This photo shows kidney tissue; the glomeruli show deposition of pink material replacing the glomerular tissue. Which of the following is the diagnosis?",
              options: ["A. Amyloid", "B. Xanthoma", "C. Gout"],
              correct: 0, a: "A. <span class='kw-highlight'>Amyloid</span>" },

            { id: 218, subject: "PATHOLOGY", lab: "Cell injury & Adaptation", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 26, slot: 2,
              q: "This photo shows two skin nodules, slightly yellowish in color. Which of the following is the diagnosis?",
              options: ["A. Anthracosis", "B. Xanthoma", "C. Gout"],
              correct: 1, a: "B. <span class='kw-highlight'>Xanthoma</span>" },

            // ==================== PATHOLOGY - LAB 2: INFLAMMATION ====================
            { id: 219, subject: "PATHOLOGY", lab: "Inflammation", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 27, slot: 0,
              q: "1) Describe the pathogenic condition in this tissue.\n2) What is the diagnosis?",
              a: "1) A cross-section of an inflamed appendix that shows an <span class='kw-highlight'>acute inflammatory process with predominance of neutrophils</span> involving all layers of the appendiceal wall and extending to peri-appendiceal fat.<br>2) <span class='kw-highlight'>Acute appendicitis (Acute suppurative appendicitis)</span>" },

            { id: 220, subject: "PATHOLOGY", lab: "Inflammation", year: "2023", category: "compilation", type: "flashcard", highYield: false, page: 27, slot: 1,
              q: "What is the diagnosis of the condition that you see?",
              a: "<span class='kw-highlight'>Liver Schistosomiasis</span>" },

            { id: 221, subject: "PATHOLOGY", lab: "Inflammation", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 27, slot: 2,
              q: "Case. What type of inflammatory cells are present in the inflamed appendix?",
              options: ["A. Lymphocytes", "B. Plasma cells", "C. Macrophages", "D. Neutrophils"],
              correct: 3, a: "D. <span class='kw-highlight'>Neutrophils</span>" },

            { id: 222, subject: "PATHOLOGY", lab: "Inflammation", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 28, slot: 0,
              q: "An old male patient came to the hospital with a lymph node and was diagnosed with Tuberculosis. Which of the following necrosis does he have?",
              options: ["A. Caseous necrosis", "B. Coagulative necrosis"],
              correct: 0, a: "A. <span class='kw-highlight'>Caseous necrosis</span>" },

            { id: 223, subject: "PATHOLOGY", lab: "Inflammation", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 28, slot: 1,
              q: "Which of the following pathological processes is seen in the slide?",
              options: ["A. Acute suppurative appendicitis", "B. Prostate hyperplasia", "C. Adenocarcinoma", "D. Endometrial Hyperplasia"],
              correct: 0, a: "A. <span class='kw-highlight'>Acute suppurative appendicitis</span>" },

            { id: 224, subject: "PATHOLOGY", lab: "Inflammation", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 28, slot: 2,
              q: "This photo shows a section of a lymph node, where two Langhans giant cells with peripheral nuclei are found. Which of the following is the diagnosis?",
              options: ["A. TB", "B. Keloid", "C. Gout"],
              correct: 0, a: "A. <span class='kw-highlight'>TB (Tuberculosis)</span>" },

            // ==================== PATHOLOGY - LAB 3: HEMODYNAMIC DISORDERS ====================
            { id: 225, subject: "PATHOLOGY", lab: "Hemodynamic Disorders", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 29, slot: 0,
              q: "1) What is the diagnosis?\n2) Describe the pathogenic condition in this tissue.",
              a: "1) <span class='kw-highlight'>Lung: Chronic venous congestion</span><br>2) <span class='kw-highlight'>Enlarged, reddish, and solid lung</span>" },

            { id: 226, subject: "PATHOLOGY", lab: "Hemodynamic Disorders", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 29, slot: 1,
              q: "3) Describe what is seen?\n4) What is the diagnosis?",
              a: "3) <span class='kw-highlight'>Reddish, enlarged, solid lung</span><br>4) <span class='kw-highlight'>Chronic venous congestion in the lung</span>" },

            { id: 227, subject: "PATHOLOGY", lab: "Hemodynamic Disorders", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 30, slot: 0,
              q: "1) What is the diagnosis?\n2) Describe the pathogenic condition in this tissue.",
              a: "1) <span class='kw-highlight'>Liver: Chronic venous congestion</span><br>2) Central regions of hepatic lobules are red-brown, surrounded by tan to light-brown areas. Overall appearance: <span class='kw-highlight'>nutmeg liver</span>." },

            { id: 228, subject: "PATHOLOGY", lab: "Hemodynamic Disorders", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 30, slot: 1,
              q: "3) Describe the pathogenic condition of this photo.\n4) What is the diagnosis?",
              a: "3) The photo shows the cut surface of the liver. There are <span class='kw-highlight'>alternating red and pale areas (nutmeg appearance)</span>.<br>4) <span class='kw-highlight'>Chronic venous congestion</span>" },

            { id: 229, subject: "PATHOLOGY", lab: "Hemodynamic Disorders", year: "2025", category: "compilation", type: "flashcard", highYield: false, page: 31, slot: 0,
              q: "1) What is the diagnosis?\n2) Describe the pathogenic condition in this tissue:",
              a: "1) <span class='kw-highlight'>Recent Thrombus (or Recent Thrombosis)</span><br>2) Sections of the artery show <span class='kw-highlight'>red blood cells along with fibrin and white blood cells (leukocytes)</span> within the lumen of the artery." },

            { id: 230, subject: "PATHOLOGY", lab: "Hemodynamic Disorders", year: "2024", category: "compilation", type: "flashcard", highYield: false, page: 31, slot: 1,
              q: "3) Describe what is seen?\n4) What is the diagnosis?",
              a: "3) <span class='kw-highlight'>Swelling due to accumulation of excess fluid in soft tissues</span>, usually localized to the lower or upper limbs.<br>4) <span class='kw-highlight'>Non-pitting edema (Hard edema)</span>" },

            // ==================== PATHOLOGY - LAB 4: NEOPLASIA ====================
            { id: 231, subject: "PATHOLOGY", lab: "Neoplasia", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 32, slot: 0,
              q: "1) What is the diagnosis?\n2) Describe the pathogenic condition in this tissue.",
              a: "1) <span class='kw-highlight'>Adenocarcinoma of the colon</span><br>2) <span class='kw-highlight'>Malignant glandular structures invade the muscularis mucosae layer and the submucosa</span>." },

            { id: 232, subject: "PATHOLOGY", lab: "Neoplasia", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 32, slot: 1,
              q: "3) What is the diagnosis?\n4) Describe the pathogenic condition in this tissue.",
              a: "3) <span class='kw-highlight'>Lipoma</span><br>4) A group of <span class='kw-highlight'>mature fat cells forming lobules</span>, separated by <span class='kw-highlight'>fine fibrovascular stroma</span>. The cells have cell membranes and peripheral, compressed nuclei." },

            { id: 233, subject: "PATHOLOGY", lab: "Neoplasia", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 32, slot: 2,
              q: "5) Describe what is seen?\n6) What is the diagnosis?",
              a: "5) <span class='kw-highlight'>Malignant glandular structures that invade the muscularis mucosae layer and the submucosa</span><br>6) <span class='kw-highlight'>Adenocarcinoma of the colon</span>" },

            { id: 234, subject: "PATHOLOGY", lab: "Neoplasia", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 33, slot: 0,
              q: "1) Describe what is seen in this condition?\n2) What is the diagnosis?",
              a: "1) <span class='kw-highlight'>Fine fibrovascular stroma</span> separating groups of mature fat cells forming lobules.<br>2) <span class='kw-highlight'>Lipoma</span>" },

            { id: 235, subject: "PATHOLOGY", lab: "Neoplasia", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 33, slot: 1,
              q: "3) Describe the pathogenic condition in this tissue.\n4) What is the diagnosis?",
              a: "3) The section shows <span class='kw-highlight'>groups of mature fat cells forming lobules, separated by fine fibrovascular stroma</span>. The cells have cell membranes and peripherally compressed nuclei. The fat dissolves during tissue preparation.<br>4) <span class='kw-highlight'>Lipoma</span>" },

            { id: 236, subject: "PATHOLOGY", lab: "Neoplasia", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 33, slot: 2,
              q: "5) From the intestine, describe the pathogenic condition?\n6) What is the diagnosis?",
              a: "5) A section of the colon shows a tumour formed of <span class='kw-highlight'>malignant glandular structures that invade the muscularis mucosae layer and the submucosa</span>.<br>6) <span class='kw-highlight'>Adenocarcinoma of the colon</span>" },

            { id: 237, subject: "PATHOLOGY", lab: "Neoplasia", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 34, slot: 0,
              q: "The photo shows colonic tissue; there is an area of normal mucosa and irregular atypical glandular structures invading the tissue. Which of the following is the diagnosis?",
              options: ["A. Adenocarcinoma", "B. TB", "C. Gout"],
              correct: 0, a: "A. <span class='kw-highlight'>Adenocarcinoma</span>" },

            { id: 238, subject: "PATHOLOGY", lab: "Neoplasia", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 34, slot: 1,
              q: "The photo shows colonic tissue; there is an area of normal mucosa and irregular atypical glandular structures invading the tissue. Which of the following is the diagnosis?",
              options: ["A. Adenocarcinoma", "B. TB", "C. Gout"],
              correct: 0, a: "A. <span class='kw-highlight'>Adenocarcinoma</span>" },

            { id: 239, subject: "PATHOLOGY", lab: "Neoplasia", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 34, slot: 2,
              q: "What is the type of condition in this slide (Uterine tumor)?",
              options: ["A. Cervical dysplasia", "B. Leiomyoma", "C. Atrophy of the testis"],
              correct: 1, a: "B. <span class='kw-highlight'>Leiomyoma</span>" },

            { id: 240, subject: "PATHOLOGY", lab: "Neoplasia", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 35, slot: 0,
              q: "In this photo section from a malignant ulcer of Squamous cell carcinoma, what is the best description for it?",
              options: ["A. Well-differentiated type", "B. Moderately-differentiated type", "C. Poorly differentiated type"],
              correct: 0, a: "A. <span class='kw-highlight'>Well-differentiated type</span>" },

            { id: 241, subject: "PATHOLOGY", lab: "Neoplasia", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 35, slot: 1,
              q: "The photo shows the uterine cavity; it is occupied by a large, round tumor. The surface of the tumor shows lobules. WOTF is the diagnosis?",
              options: ["A. TB", "B. Gout", "C. Leiomyoma"],
              correct: 2, a: "C. <span class='kw-highlight'>Leiomyoma</span>" },

            { id: 242, subject: "PATHOLOGY", lab: "Neoplasia", year: "2020", category: "compilation", type: "mcq", highYield: true, page: 35, slot: 2,
              q: "The photo shows colonic tissue; there is an area of normal mucosa and irregular atypical glandular structures invading the tissue. Which of the following is the diagnosis?",
              options: ["A. Adenocarcinoma", "B. TB", "C. Gout"],
              correct: 0, a: "A. <span class='kw-highlight'>Adenocarcinoma</span>" },

            // ==================== HISTOLOGY - LAB 1: LOOSE CONNECTIVE TISSUES ====================
            { id: 301, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 37, slot: 0,
              q: "Name each type of fiber:\nA:\nB:\nC:",
              a: "A: <span class='kw-highlight'>Collagen fibers</span><br>B: <span class='kw-highlight'>Elastic fibers</span><br>C: <span class='kw-highlight'>Reticular fibers</span>" },

            { id: 302, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 37, slot: 1,
              q: "Identify the structures labeled with arrows:\nA:\nB:\nC:",
              a: "A: <span class='kw-highlight'>Elastic fibers</span> (رفيعة متفرعة)<br>B: <span class='kw-highlight'>Collagen fibers</span> (حزم عريضة)<br>C: <span class='kw-highlight'>Reticular fibers</span> (شبكة باهتة)" },

            { id: 303, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 37, slot: 1, noSample: true,
              q: "Mention 2 examples of components of the ground substance:",
              a: "• <span class='kw-highlight'>Proteoglycans</span><br>• <span class='kw-highlight'>Glycosaminoglycans (GAGs)</span><br>• <span class='kw-highlight'>Multiadhesive glycoproteins</span>" },

            { id: 304, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 38, slot: 0, noSample: true,
              q: "Name 2 cells that belong to the resident cell population:",
              a: "• <span class='kw-highlight'>Fibroblast (or Fibrocyte)</span><br>• <span class='kw-highlight'>Mast cell</span><br>• <span class='kw-highlight'>Adipocyte (Fat cell)</span><br>• <span class='kw-highlight'>Macrophage</span><br>• <span class='kw-highlight'>Pericyte</span>" },

            { id: 305, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 38, slot: 0, noSample: true,
              q: "Name 2 cells that belong to the wandering cell population:",
              a: "• <span class='kw-highlight'>Monocyte</span><br>• <span class='kw-highlight'>Lymphocyte</span><br>• <span class='kw-highlight'>Neutrophil / Eosinophil / Basophil</span><br>• <span class='kw-highlight'>Plasma cell</span>" },

            { id: 306, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 39, slot: 0,
              q: "In this tissue, which of the following belongs to the resident cell population?",
              options: ["A. Monocyte", "B. Lymphocyte", "C. Macrophage", "D. Neutrophils"],
              correct: 2, a: "C. <span class='kw-highlight'>Macrophage</span>" },

            { id: 307, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 39, slot: 1,
              q: "In tissue, which of the following is a type of collagen III fibre?",
              options: ["A. Elastic", "B. Reticular", "C. Collagen"],
              correct: 1, a: "B. <span class='kw-highlight'>Reticular</span>" },

            { id: 308, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2021", category: "compilation", type: "mcq", highYield: false, page: 39, slot: 2,
              q: "In this tissue, which of the following structures belong to the proteoglycans of the ground substance?",
              options: ["A. Integrin", "B. Collagen", "C. Syndecan", "D. Fibronectin"],
              correct: 2, a: "C. <span class='kw-highlight'>Syndecan</span>" },

            { id: 309, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2020", category: "compilation", type: "mcq", highYield: false, page: 40, slot: 0,
              q: "In this tissue, which of the following structures belong to the proteoglycans of the ground substance?",
              options: ["A. Integrin", "B. Collagen", "C. Aggrecan", "D. Fibronectin"],
              correct: 2, a: "C. <span class='kw-highlight'>Aggrecan</span>" },

            { id: 310, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2020", category: "compilation", type: "mcq", highYield: false, page: 40, slot: 1,
              q: "What does the red circle show?",
              options: ["A. Fibroblast", "B. Adipocyte", "C. None"],
              correct: 0, a: "A. <span class='kw-highlight'>Fibroblast</span>" },

            { id: 311, subject: "HISTOLOGY", lab: "Loose Connective Tissues", year: "2020", category: "compilation", type: "mcq", highYield: false, page: 40, slot: 2,
              q: "The photo shows which type of WBC?",
              options: ["A. Eosinophil", "B. Basophil", "C. Neutrophil"],
              correct: 0, a: "A. <span class='kw-highlight'>Eosinophil</span>" },

            // ==================== HISTOLOGY - LAB 2: SMALL BLOOD VESSELS ====================
            { id: 312, subject: "HISTOLOGY", lab: "Small Blood Vessels", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 41, slot: 0,
              q: "Label the structures shown by the arrows:\nA:\nB:\nC:",
              a: "A: <span class='kw-highlight'>Endothelial cell</span><br>B: <span class='kw-highlight'>Capillary</span><br>C: <span class='kw-highlight'>Pericyte</span>" },

            { id: 313, subject: "HISTOLOGY", lab: "Small Blood Vessels", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 41, slot: 1,
              q: "Label the structures shown by the arrows:\nA:\nB:",
              a: "A: <span class='kw-highlight'>Venule</span><br>B: <span class='kw-highlight'>Arteriole</span>" },

            { id: 314, subject: "HISTOLOGY", lab: "Small Blood Vessels", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 41, slot: 2,
              q: "Identify the structures labeled with arrows:\nA:\nB:\nC:",
              a: "A: <span class='kw-highlight'>Continuous basal lamina</span><br>B: <span class='kw-highlight'>Endothelial cells</span><br>C: <span class='kw-highlight'>Pericyte</span>" },

            { id: 315, subject: "HISTOLOGY", lab: "Small Blood Vessels", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 42, slot: 0,
              q: "Identify the structures labeled with arrows:\nA:\nB:\nC:",
              a: "A: <span class='kw-highlight'>Arteriole</span><br>B: <span class='kw-highlight'>Smooth Muscle cell (or Endothelial cell)</span><br>C: <span class='kw-highlight'>Venule</span>" },

            // ==================== SURGERY - BREAST CANCER EXAMINATION ====================
            { id: 401, subject: "SURGERY", lab: "Breast Cancer", year: "2025", category: "compilation", type: "flashcard", highYield: true, page: 44, slot: 0,
              q: "Name two abnormalities from the picture shown:",
              a: "• <span class='kw-highlight'>Redness</span><br>• <span class='kw-highlight'>Peau d'orange</span><br>• <span class='kw-highlight'>Nipple retraction/depression</span>" },

            { id: 402, subject: "SURGERY", lab: "Breast Cancer", year: "2024", category: "compilation", type: "flashcard", highYield: true, page: 44, slot: 1,
              q: "Name two abnormalities from the picture shown:",
              a: "• <span class='kw-highlight'>Redness</span><br>• <span class='kw-highlight'>Peau d'orange</span><br>• <span class='kw-highlight'>Nipple retraction/depression</span>" },

            { id: 403, subject: "SURGERY", lab: "Breast Cancer", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 44, slot: 2,
              q: "Name two abnormalities from the picture shown:",
              a: "• <span class='kw-highlight'>Redness</span><br>• <span class='kw-highlight'>Peau d'orange</span><br>• <span class='kw-highlight'>Nipple discharge / new fluid</span>" },

            { id: 404, subject: "SURGERY", lab: "Breast Cancer", year: "2023", category: "compilation", type: "flashcard", highYield: true, page: 45, slot: 0,
              q: "1) What is the doctor trying to detect in position A (hands on waist)?\n2) What is the doctor trying to detect in position B (arms raised)?",
              a: "1) Position A: <span class='kw-highlight'>To contract the Pectoralis major muscle</span><br>2) Position B: <span class='kw-highlight'>To accentuate lumps, asymmetry, and skin tethering</span>" },

            { id: 405, subject: "SURGERY", lab: "Breast Cancer", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 45, slot: 0, noSample: true,
              q: "Most common site of breast cancer?",
              options: ["A. Upper outer", "B. Upper inner", "C. Lower outer", "D. Lower inner"],
              correct: 0, a: "A. <span class='kw-highlight'>Upper outer</span>" },

            { id: 406, subject: "SURGERY", lab: "Breast Cancer", year: "2022", category: "compilation", type: "mcq", highYield: true, page: 45, slot: 0, noSample: true,
              q: "The patient presents with a right breast mass. The doctor asks her to put her hands on her waist. What is the doctor trying to examine?",
              options: ["A. Show abdominal muscle", "B. Minor pectoralis muscle", "C. Major pectoralis muscle", "D. Serratus anterior muscle"],
              correct: 2, a: "C. <span class='kw-highlight'>Major pectoralis muscle</span>",
              note: "هذا السؤال ورد في ميد 2021 و 2022 بنفس الصيغة، ويُقصد به الوضعية (Position A) في تجميع 2023." },

            { id: 407, subject: "SURGERY", lab: "Breast Cancer", year: "2021", category: "compilation", type: "mcq", highYield: true, page: 46, slot: 0,
              q: "What type of breast abnormality is shown in the picture?",
              options: ["A. Peau d'Orange", "B. Nipple retraction", "C. Skin dimpling", "D. Paget's disease of the nipple"],
              correct: 0, a: "A. <span class='kw-highlight'>Peau d'Orange</span>" }
        ];

// ================= 1. بيانات لابات F2 OSPE الـ 12 الرسمية (Checklist & Sub-Labs) =================
    const F2_OSPE_LABS = [
        { id: 'mic_1', num: 1, subject: 'Microbiology', color: '#10b981', title: 'Identification of Gram + Bacteria', keywords: ['gram +', 'gram positive', 'gram-positive', 'staph', 'strep', 'catalase', 'coagulase', 'mannitol', 'msa', 'blood agar', 'hemolysis', 'bacillus', 'clostridium', 'clusters', 'chains', 'موجبة', 'عنقودية', 'سبحية'] },
        { id: 'mic_2', num: 2, subject: 'Microbiology', color: '#10b981', title: 'Identification of Gram - Bacteria', keywords: ['gram -', 'gram negative', 'gram-negative', 'macconkey', 'emb', 'tsi', 'indole', 'citrate', 'urease', 'oxidase', 'coli', 'klebsiella', 'salmonella', 'shigella', 'pseudomonas', 'proteus', 'neisseria', 'lactose', 'سالبة'] },
        { id: 'mic_3', num: 3, subject: 'Microbiology', color: '#10b981', title: 'Antibiotic Susceptibility Testing', keywords: ['antibiotic', 'susceptibility', 'kirby', 'bauer', 'disk', 'diffusion', 'mic', 'etest', 'e-test', 'mueller', 'hinton', 'zone', 'inhibition', 'sensitive', 'resistant', 'مضاد', 'حساسية'] },
        { id: 'mic_4', num: 4, subject: 'Microbiology', color: '#10b981', title: 'Molecular Techniques for Identification of Viruses', keywords: ['virus', 'viral', 'molecular', 'pcr', 'elisa', 'blot', 'electrophoresis', 'gel', 'cytopathic', 'cpe', 'hemagglutination', 'inclusion', 'فيروس', 'جزيئية'] },
        { id: 'mic_5', num: 5, subject: 'Microbiology', color: '#10b981', title: 'Diagnosis of Parasitic Diseases', keywords: ['parasit', 'ova', 'egg', 'cyst', 'trophozoite', 'malaria', 'plasmodium', 'schistosoma', 'entamoeba', 'giardia', 'leishmania', 'ascaris', 'taenia', 'trichuris', 'enterobius', 'طفيلي', 'بويضة', 'يرقة'] },
        { id: 'pat_6', num: 6, subject: 'Pathology', color: '#f43f5e', title: 'Cell injury & Adaptation', keywords: ['injury', 'adaptation', 'atrophy', 'hypertrophy', 'hyperplasia', 'metaplasia', 'necrosis', 'apoptosis', 'steatosis', 'fatty', 'calcification', 'coagulative', 'liquefactive', 'caseous', 'gangrene', 'تكيف', 'نخر', 'ضمور', 'تضخم', 'تدهن'] },
        { id: 'pat_7', num: 7, subject: 'Pathology', color: '#f43f5e', title: 'Inflammation', keywords: ['inflammation', 'acute', 'chronic', 'granuloma', 'abscess', 'appendicitis', 'cholecystitis', 'neutrophil', 'macrophage', 'giant cell', 'langhans', 'ulcer', 'granulation', 'fibrosis', 'التهاب', 'حبيبي', 'خراج', 'زائدة'] },
        { id: 'pat_8', num: 8, subject: 'Pathology', color: '#f43f5e', title: 'Hemodynamic disorders', keywords: ['hemodynamic', 'edema', 'congestion', 'hyperemia', 'hemorrhage', 'thrombus', 'thrombosis', 'embol', 'infarct', 'nutmeg', 'heart failure', 'zahn', 'احتقان', 'خثرة', 'جلطة', 'احتشاء', 'وذمة'] },
        { id: 'pat_9', num: 9, subject: 'Pathology', color: '#f43f5e', title: 'Neoplasia', keywords: ['neoplasia', 'tumor', 'tumour', 'benign', 'malignant', 'carcinoma', 'sarcoma', 'adenoma', 'lipoma', 'leiomyoma', 'fibroadenoma', 'papilloma', 'teratoma', 'metastasis', 'dysplasia', 'lymphoma', 'melanoma', 'ورم', 'سرطان', 'حميد', 'خبيث'] },
        { id: 'his_10', num: 10, subject: 'Histology', color: '#8b5cf6', title: 'Structure of Loose Connective Tissues', keywords: ['connective', 'loose', 'areolar', 'fibroblast', 'collagen', 'elastic', 'reticular', 'mast', 'plasma cell', 'adipose', 'fat', 'macrophage', 'ضام', 'ألياف', 'خلية بدينة'] },
        { id: 'his_11', num: 11, subject: 'Histology', color: '#8b5cf6', title: 'Structure of small vessels', keywords: ['vessel', 'artery', 'arteriole', 'vein', 'venule', 'capillary', 'endothelium', 'tunica', 'intima', 'media', 'adventitia', 'vascular', 'وعاء', 'أوعية', 'شريان', 'وريد', 'شعيرات'] },
        { id: 'sur_12', num: 12, subject: 'Surgery', color: '#f59e0b', title: 'Breast Cancer History & Examination', keywords: ['breast', 'nipple', 'axilla', 'lump', 'mastectomy', 'mammogram', 'peau', 'retraction', 'examination', 'history', 'surgery', 'ثدي', 'فحص', 'جراحة'] }
    ];

// ================= 5. قاعدة المعرفة الطبية الذكية لـ "المناضل" =================
    const labKnowledgeBase = {
        "Gram-positive Bacteria": {
            explain: "في محطات البكتيريا موجبة الجرام، المفتاح الأول هو شكل الترتيب والـ Hemolysis:\n• إذا ذكرت القصة التهاب لوزتين صديدي (Tonsillitis with exudate) وسلاسل بنفسجية (Cocci in chains) فالتشخيص فوراً هو Streptococcus pyogenes وتسبب Beta-hemolysis كامل.\n• إذا كانت العينة طبق Mannitol Salt Agar (MSA) وتحول لونه للأصفر، فالبكتيريا هي Staphylococcus aureus لأنها تخمر المانيتول وتظهر في المسحة كـ Cocci in clusters.",
            diff: "• التفريق المجهري: S. pyogenes تصطف في سلاسل (Chains)، بينما S. aureus تتجمع كعناقيد العنب (Clusters).\n• في اختبار الـ CAMP test: ظهور تحلل دم على شكل رأس سهم (Arrow-head hemolysis) يميز بكتيريا Streptococcus agalactiae (Group B).",
            mnemonic: "• اربط (S. pyogenes = Chains = سلاسل في الحلق).\n• اربط (S. aureus = Gold/Yellow on MSA = ذهبية تحول الوسط للأصفر)."
        },
        "Gram-negative Bacteria": {
            explain: "محطات البكتيريا سالبة الجرام تعتمد على تفاعلات IMViC وأنابيب TSI:\n• E. coli: تخمر اللاكتوز وتتميز بـ (Indole +ve, MR +ve, VP -ve, Citrate -ve).\n• Klebsiella pneumoniae: تتميز بكبسولة كبيرة ومخاطية وتكون عكس الإيكولاي (Indole -ve, MR -ve, VP +ve, Citrate +ve بلون أزرق).\n• Proteus mirabilis: تتميز بإيجابية اختبار اليورياز (Urease +ve باللون الوردي الفاقع) وإنتاج غاز H2S الأسود في أنبوب TSI.",
            diff: "• أنبوب Citrate: الأخضر = سلبي، الأزرق (Blue) = إيجابي (مثل Klebsiella).\n• أنبوب Urease: الوردي الفاقع (Pink) = إيجابي (Proteus)، البرتقالي/الأصفر = سلبي.\n• الصبغة الخضراء المزرقّة على الطبق تميز Pseudomonas aeruginosa.",
            mnemonic: "• اربط إيكولاي بـ (I-M): أول حرفين من IMViC موجبين (+ + - -).\n• اربط Citrate Blue = Kleb-siella (حرف B مع Blue)."
        },
        "Antibiotic Susceptibility": {
            explain: "هذه المحطة تختبر طريقة Kirby-Bauer Disc Diffusion لفحص حساسية البكتيريا للمضادات الحيوية:\n• الوسط المستخدم دائماً هو Mueller-Hinton Agar (MH Agar).\n• المنطقة الدائرية الشفافة حول القرص تسمى Zone of inhibition وتعني أن البكتيريا حساسة (Susceptible) للمضاد.",
            diff: "• ركز في صيغة السؤال: إذا سأل عن Method فاكتب (Diffusion method)، وإذا سأل عن Agar/Medium فاكتب (Mueller-Hinton Agar).",
            mnemonic: "• MH Agar = معيار الحساسية (Mueller-Hinton)."
        },
        "Molecular Techniques": {
            explain: "في تشخيص الفيروسات مثل SARS-CoV-2 (وهو فيروس RNA):\n• إنزيم الـ PCR يعمل فقط على الـ DNA، لذلك يجب أولاً إجراء خطوة Reverse Transcription لتحويل الـ RNA الفيروسي إلى cDNA.\n• الفرق الجوهري: الـ PCR العادي يعطي نتيجة نوعية (Qualitative) في نهاية التفاعل، بينما الـ q-PCR يقيس كمية الفيروس في الوقت الفعلي (Real-time quantification) باستخدام الوميض الفلوري.",
            diff: "• تقنية النقاط الملونة المضيئة في الشبكة هي DNA Microarray.\n• أشرطة البروتين المرقمة في تشخيص الـ HIV هي اختبار Western Blot وتستخدم كاختبار تأكيدي (Confirmatory test).\n• أجسام Negri bodies توجد داخل السيتوبلازم وهي مميزة لداء الكلب (Rabies).",
            mnemonic: "• RNA virus ➡️ يحتاج RT أولاً قبل الـ PCR.\n• q-PCR = Quantitative (رقمي وكمي في الوقت الفعلي)."
        },
        "Parasitic Diseases": {
            explain: "في تشخيص الطفيليات:\n• عينة البراز (Stool) يجب فحصها فوراً في وعاء جاف ونظيف للحفاظ على حركة الطور النشط (Preserve trophozoite motility).\n• مسحة الدم (Thin & Thick blood films) تكشف طفيليات الدم مثل Malaria و Wuchereria bancrofti.\n• مسحة السيلوفان حول الشرج (NIH perianal swab) تكشف بويضات الدودة الدبوسية Enterobius vermicularis.",
            diff: "• بويضة ذات شوكة طرفية واضحة (Terminal spine) = Schistosoma haematobium وعينتها دائماً البول (Urine sample).\n• بويضة مسطحة من جهة واحدة (D-shaped) = Enterobius vermicularis.\n• بويضة دائرية سميكة الجدار المتموج = Ascaris lumbricoides في البراز.",
            mnemonic: "• Terminal spine = بلهارسيا البول (Urine).\n• Pinworm (Enterobius) = Perianal swab (حرف P مع P)."
        },
        "Cell injury & Adaptation": {
            explain: "هذه المحطة تختبر آليات التكيف الخلوي والتراكمات المرضية:\n• كلية منكمشة وصغيرة بجانب كلية طبيعية = Renal Atrophy.\n• ترسبات سوداء في نسيج الرئة = Pulmonary Anthracosis بسبب استنشاق جزيئات الكربون.\n• زيادة عدد الغدد والسدى العضلي الليفي في البروستات مع توسع كيسي = Benign Prostatic Hyperplasia (BPH).\n• ترسب مادة وردية متجانسة في كبيبات الكلى = Renal Amyloidosis.",
            diff: "• عقيدات جلدية صفراء اللون (Yellowish skin nodules) = Xanthoma.\n• ترسب بلورات إبرية = Gout (Monosodium urate crystals).\n• فقدان انتظام الخلايا من القاعدة للسطح في عنق الرحم = Cervical Dysplasia.",
            mnemonic: "• Black Lung = Carbon = Anthracosis.\n• Pink Glomeruli = Amyloid.\n• Yellow Skin Nodule = Xanthoma."
        },
        "Inflammation": {
            explain: "محطات الالتهاب الحاد والمزمن:\n• في التهاب الزائدة الدودية الحاد (Acute suppurative appendicitis)، العلامة المميزة هي ارتشاح خلايا Neutrophils في جميع طبقات جدار الزائدة.\n• في درن الغدد اللمفاوية (TB)، نرى حبيبومات مع خلايا عملاقة متعددة الأنوية على الأطراف (Langhans giant cells) ونخر تجبني (Caseous necrosis).",
            diff: "• الخلية السائدة في الالتهاب الحاد الصديدي (Appendicitis) هي Neutrophils.\n• نوع النخر في الـ Tuberculosis هو دائماً Caseous necrosis.",
            mnemonic: "• Acute Appendicitis = Neutrophils.\n• TB = Caseous necrosis + Langhans giant cells."
        },
        "Hemodynamic Disorders": {
            explain: "في اضطرابات الدورة الدموية:\n• احتقان الكبد المزمن (CVC of Liver) يظهر عيانياً بمظهر جوزة الطيب (Nutmeg liver) بسبب تبادل المناطق الحمراء المحتقنة مع المناطق الباهتة.\n• الخثرة الحديثة (Recent thrombus) تظهر داخل لمعة الشريان مكونة من كريات دم حمراء وخيوط فايبرين وكريات بيضاء.",
            diff: "• CVC of Lung: رئة متضخمة، حمراء داكنة، وصلبة القوام.\n• CVC of Liver: سطح مقطعي منقط بالأحمر والبني الفاتح (Nutmeg appearance).\n• تورم الساق الصلب غير القابل للانضغاط = Non-pitting edema.",
            mnemonic: "• Nutmeg Liver = CVC Liver."
        },
        "Neoplasia": {
            explain: "في محطات الأورام الحميدة والخبيثة:\n• ورم القولون الخبيث (Adenocarcinoma of the colon) يتميز بوجود غدد خبيثة غير منتظمة تخترق طبقة Muscularis mucosae وتمتد إلى الـ Submucosa.\n• الورم الشحمي الحميد (Lipoma) يتكون من فصيصات خلايا دهنية ناضجة يفصلها Fine fibrovascular stroma مع أنوية مضغوطة في الطرف.",
            diff: "• Lipoma: خلايا دهنية فارغة المظهر ونواة طرفية.\n• Leiomyoma: ورم عضلي أملس حميد دائري ومفصص داخل تجويف الرحم.\n• Well-differentiated SCC: يتميز بوجود لآلئ الكيراتين (Keratin pearls) الوردية في المركز.",
            mnemonic: "• Invasion of submucosa by glands = Adenocarcinoma.\n• Keratin pearls = Well-differentiated Squamous Cell Carcinoma."
        },
        "Loose Connective Tissues": {
            explain: "في شرائح النسيج الضام الرخو:\n• الألياف الثلاثة هي: Collagen fibers (حزم سميكة متموجة وردية)، و Elastic fibers (خيوط رفيعة داكنة متفرعة)، و Reticular fibers (شبكة رقيقة من Collagen type III).\n• الخلايا تنقسم إلى خلايا مقيمة ثابتة (Resident: مثل Fibroblast, Macrophage, Mast cell, Adipocyte, Pericyte) وخلايا مهاجرة من الدم (Wandering: مثل Lymphocyte, Neutrophil, Eosinophil, Plasma cell).",
            diff: "• إذا سأل عن Proteoglycans في المادة الأساسية فاختر Syndecan أو Aggrecan.\n• كرية الدم البيضاء ذات الفصين والحبيبات الحمراء الكبيرة هي Eosinophil.",
            mnemonic: "• Reticular fibers = Collagen type III.\n• Resident cells = ثابتة في النسيج (Fibroblast & Macrophage)."
        },
        "Small Blood Vessels": {
            explain: "في شرائح الأوعية الدموية الدقيقة:\n• الـ Arteriole يتميز بجدار عضلي سميك نسبياً ولمعة دائرية ضيقة ومنتظمة.\n• الـ Venule يتميز بجدار رقيق جداً ولمعة واسعة غير منتظمة (Collapsed lumen).\n• خلية الـ Pericyte تحيط بالشعيرات الدموية (Capillaries) وتقع داخل نفس الصفيحة القاعدية (Continuous basal lamina).",
            diff: "• قارن دائماً سماكة الجدار: الدائري السميك = Arteriole، والواسع الرقيق = Venule.",
            mnemonic: "• Arteriole = Round & Muscular.\n• Venule = Wide & Thin."
        },
        "Breast Cancer": {
            explain: "في محطة فحص وسرطان الثدي:\n• العلامات الظاهرة في الصورة هي: مظهر قشر البرتقال (Peau d'orange) بسبب انسداد الأوعية اللمفاوية الجلدية، والاحمرار (Redness)، وانكماش الحلمة (Nipple retraction).\n• أكثر مكان شيوعاً لسرطان الثدي هو الربع العلوي الخارجي (Upper outer quadrant).",
            diff: "• Position A (وضع اليدين على الخصر والضغط): الهدف منه تقليص عضلة Pectoralis major.\n• Position B (رفع الذراعين للأعلى): الهدف منه إبراز أي عدم تناظر أو كتل أو شد في الجلد (Skin tethering).",
            mnemonic: "• Hands on waist = Contract Pectoralis major.\n• Upper Outer Quadrant = الأكثر شيوعاً."
        }
    };
