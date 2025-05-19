// app/api/medicine/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
   
    {
      _id: "1",
        name: "Biaxin", 
        genericName: "Clarithromycin", 
        type: "Branded", // "Generic" or "Branded" 
        image: "/medicine/BIAXIN.jpg", 
        description: "A type of antibiotic that treats bacterial infections.", 
        uses: "Used to treat or prevent certain kinds of bacterial infections.", 
        sideEffects: "Feeling sick (nausea) or being sick (vomiting), stomach cramps, and diarrhoea.", 
        precautions: "This product may contain inactive ingredients, which can cause allergic  reactions or other problems.", 
        interactions: "May interact with blood thinners, colchicine, itraconazole, omeprazole, ranitidine, bismuth citrate, sildenafil, tadalafil, vardenafil, theophylline, tolterodine, other antibiotics." , 
        notFor: "Pregnant women and breastfeeding mothers unless the risk outweighs the benefits.", 
        form: "Tablet", // Tablet, Capsule, Syrup, etc. 
        storage: "Store at room temperature between 20 and 25 degrees C (68 and 77 degrees F).", 
        isOTC: true 
        } ,

          {
            _id: "2",
        name: "Clarithromycin",
          genericName: "Clarithromycin",
            type: "Generic",
            image: "/medicine/CLARITHROMYZINE.jpg",
            description: "A type of antibiotic that treats bacterial infections.",
            uses: "Used to treat or prevent certain kinds of bacterial infections.",
            sideEffects: "Feeling sick (nausea) or being sick (vomiting), stomach cramps, and diarrhoea.",
            precautions: "This product may contain inactive ingredients, which can cause allergic reactions or other problems.",
            interactions: "May interact with blood thinners, colchicine, itraconazole, omeprazole, ranitidine, bismuth citrate, sildenafil, tadalafil, vardenafil, theophylline, tolterodine, other antibiotics." ,
            notFor: "Pregnant women and breastfeeding mothers unless the risk outweighs the benefits.",
            form: "Tablet", // Tablet, Capsule, Syrup, etc.
            storage: "Store at room temperature between 20 and 25 degrees C (68 and 77 degrees F).",
            isOTC: true
            },
        

    {
      _id: "3",
        name: "Allegra", 
        genericName: "Fexofenadine", 
        type: "Branded", // "Generic" or "Branded" 
        image: "/medicine/ALLEGRA.jpg",  
        description: "It works by blocking histamine, a substance released by the body during an allergic reaction. It belongs to a group of medications called antihistamines.", "uses": "Used to treat and prevents allergy symptoms, such as red, itchy eyes, sneezing, a runny or stuffy nose, or hives.", 
        sideEffects: "Dizziness, trouble sleeping, nausea, or headache.", 
        precautions: "Do not take Allegra with fruit juice (such as apple, orange, or grapefruit). There may be other drugs that can affect Allegra.", 
        interactions: "May interact with Amiodarone. Amiodarone is predicted to increase the exposure to Fexofenadine." , 
        notFor: "if you have diabetes, phenylketonuria (PKU), or any other condition that requires you to limit/avoid these substances in your diet.", 
        form: "Tablet", // Tablet, Capsule, Syrup, etc. 
        storage: "Store at room temperature away from light and moisture.", 
        isOTC: true 
        } ,

             {
                    _id: "4",
          name: "Fexofenadine",
          genericName: "Fexofenadine",
          type: "Generic",
          image: "/medicine/FEXOFENADIN.jpg",
          description: "It works by blocking histamine, a substance released by the body during an allergic reaction. It belongs to a group of medications called antihistamines.",
          uses: "Used to treat and prevents allergy symptoms, such as red, itchy eyes, sneezing, a runny or stuffy nose, or hives.",
          sideEffects: "Dizziness, trouble sleeping, nausea, or headache.",
          precautions: "Do not take Allegra with fruit juice such as apple orange or grapefruit. There  may be other drugs that can affect Allegra",
          interactions: "May interact with Amiodarone. Amiodarone is predicted to increase the exposure to Fexofenadine." ,
          notFor: "if you have diabetes, phenylketonuria (PKU), or any other condition that requires you to limit/avoid these substances in your diet.",
          form: "Tablet", // Tablet, Capsule, Syrup, etc.
          storage: "Store at room temperature away from light and moisture.",
          isOTC: true
          },
      

        { 
          _id: "5",
          name: "Adrenalin", 
          genericName: "Epinephrine", 
          type: "Branded", // "Generic" or "Branded" 
          image: "/medicine/ADRENALIN.jpg",
          description: "A hormone and neurotransmitter produced by the adrenal glands.", 
          uses: "Used to treat a severe allergic reaction (anaphylaxis) in an emergency.", 
          sideEffects: "Tachycardia, hypertension, headache, anxiety, apprehension, palpitations, diaphoresis, nausea, vomiting, weakness, and tremors.", 
          precautions: "Injecting the medication intravenously or into the buttocks is not recommended.", 
          interactions: "May interact with digoxin, diuretics (water pills), levothyroxine, chlorpheniramine or diphenhydramine (antihistamines commonly contained in cold, allergy, or over-the-counter sleep medications), antidepressants, beta-blockers, ergot medicines, heart rhythm medications, or MAO inhibitors.", 
          notFor: "In the patient with a spontaneous circulation.", 
          form: "Tablet", // Tablet, Capsule, Syrup, etc. 
          storage: "In a cool dark place at room temperature, between 15-25°C, but not refrigerated, as temperatures below 15°C.", 
          isOTC: true 
          } ,


          {
            _id: "6",
                name: "Epinephrine",
                genericName: "Epinephrine",
                type: "Generic",
                image: "/medicine/EPINEPHRINE.jpg",
                description: "A hormone and neurotransmitter produced by the adrenal glands.",
                uses: "Used to treat a severe allergic reaction (anaphylaxis) in an emergency.",
                sideEffects: "Tachycardia, hypertension, headache, anxiety, apprehension, palpitations, diaphoresis, nausea, vomiting, weakness, and tremors.",
                precautions: "Injecting the medication intravenously or into the buttocks is not recommended.",
                interactions: "May interact with digoxin, diuretics (water pills), levothyroxine, chlorpheniramine or diphenhydramine (antihistamines commonly contained in cold, allergy, or over-the-countersleep medications), antidepressants, beta-blockers, ergot medicines, heart rhythm medications, or MAO inhibitors.",
                notFor: "In the patient with a spontaneous circulation.",
                form: "Tablet", // Tablet, Capsule, Syrup, etc.
                storage: "In a cool dark place at room temperature, between 15-25°C, but not refrigerated, a temperatures below 15°C.",
                isOTC: true
                },

          { 
            _id: "7",
            name: "Celexa", 
            genericName: "Citalopram", 
            type: "Branded", // "Generic" or "Branded" 
            image: "/medicine/CELEXA.jpg", 
            description: "A drug used to treat depression. It belongs to the families of drugs called antidepressant agents and selective serotonin reuptake inhibitors (SSRIs).", 
            uses: "Used for the treatment of anxiety. ", 
            sideEffects: "Dry mouth. Chew sugar-free gum or suck sugar-free sweets.",
             precautions: "This medicine may cause some people to become drowsy, have trouble thinking, or to have problems with movement.", 
            interactions: "May interact with selegiline (Emsam, Zelapar). ", 
            notFor: "CELEXA is not for use in children.", 
            form: "Tablet", // Tablet, Capsule, Syrup, etc. 
            storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
            isOTC: true 
            } ,

            {
              _id: "8",
            name: "Citalopram",
            genericName: "Citalopram",
            type: "Generic",
            image: "/medicine/CITALOPRAM.jpg",
            description: "A drug used to treat depression. It belongs to the families of drugs called antidepressant agents and selective serotonin reuptake inhibitors (SSRIs).",
            uses: "Used for the treatment of anxiety. ",
            sideEffects: "Dry mouth. Chew sugar-free gum or suck sugar-free sweets.",
            precautions: "This medicine may cause some people to become drowsy, have trouble thinking, or to have problems with movement.",
            interactions: "May interact with selegiline (Emsam, Zelapar). ",
            notFor: "CELEXA is not for use in children.",
            form: "Tablet", // Tablet, Capsule, Syrup, etc.
            storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).",
            isOTC: true
            },

            { 
              _id: "9",
              name: "Atrovent", 
              genericName: "Ipratropium", 
              type: "Branded", // "Generic" or "Branded" 
              image: "/medicine/ATROVENT.jpg", 
              description: "A bronchodilator that relaxes muscles in the airways and increases air flow to the lungs.", 
              uses: "used to treat and prevent bronchospasm, or narrowing airways in the lungs, in people with COPD (chronic obstructive pulmonary disease), including chronic bronchitis and emphysema.", 
              sideEffects: "Upset stomach, dry mouth, and drowsiness.", 
              precautions: "This medicine may cause eye pain or discomfort, irritation, blurred vision, or start seeing halos or odd colors when you look at things.",
              interactions: "May interact with revefenacin and aclidinium.", 
              notFor: "People with prostate disease.", 
              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
              storage: "Keep in a a cool, dry place where the temperature stays below 30°C.",
               isOTC: true 
              }, 

              {
                _id: "10",
              name: "Ipratropium",
              genericName: "Ipratropium",
              type: "Generic",
              image: "/medicine/IPRATROPIUM.jpg",
              description: "A bronchodilator that relaxes muscles in the airways and increases air flow to the lungs.",
              uses: "used to treat and prevent bronchospasm, or narrowing airways in the lungs, in people with COPD (chronic obstructive pulmonary disease), including chronic bronchitis and emphysema.",
              sideEffects: "Upset stomach, dry mouth, and drowsiness.",
              precautions: "This medicine may cause eye pain or discomfort, irritation, blurred vision, or start seeing halos or odd colors when you look at things.",
              interactions: "May interact with revefenacin and aclidinium.",
              notFor: "People with prostate disease.",
              form: "Tablet", // Tablet, Capsule, Syrup, etc.
              storage: "Keep in a a cool, dry place where the temperature stays below 30°C.",
              isOTC: true
              },

              { 
              _id: "11",
              name: "Glynase", 
              genericName: "Glibenclamide", 
              type: "Branded", // "Generic" or "Branded" 
              image: "/medicine/GLYNASE.jpg", 
              description: "This helps to prevent serious complications of diabetes like kidney damage and blindness.", 
              uses: "Used to treat type 2 diabetes mellitus in adults.", 
              sideEffects: "Hypoglycemia (low blood sugar level), altered taste, nausea, stomach pain, diarrhea, headache and upper respiratory tract infection.", 
              precautions: "May cause: hypoglycaemia, gastrointestinal disturbances, weight gain; rarely, allergic reactions.", 
              interactions: "May interact with clarithromycin, exenatide, probenecid, heart or blood pressure medications, nonsteroidal anti-inflammatory drugs (NSAIDs), aspirin or other salicylates, sulfa drugs, monoamine oxidase inhibitors (MAOIs), or other oral diabetes medications.", 
              notFor: "You should not take it if you have type 1 diabetes mellitus, if you have diabetic ketoacidosis.", 
              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
              storage: "Store at controlled room temperature 20° to 25°C (68° to 77°F).", 
              isOTC: true 
              } ,

              {
                _id:"12",
            name: "Glibenclamide",
            genericName: "Glibenclamide",
            type: "Generic",
            image: "/medicine/GLIBENCLAMIDE.jpg",
            description: "This helps to prevent serious complications of diabetes like kidney damage and blindness.",
            uses: "Used to treat type 2 diabetes mellitus in adults.",
            sideEffects: "Hypoglycemia (low blood sugar level), altered taste, nausea, stomach pain, diarrhea, headache and upper respiratory tract infection.",
            precautions: "May cause: hypoglycaemia, gastrointestinal disturbances, weight gain; rarely, allergic reactions.",
            interactions: "May interact with clarithromycin, exenatide, probenecid, heart or blood pressuremedications, nonsteroidal anti-inflammatory drugs (NSAIDs), aspirin or other salicylates, sulfa drugs, monoamine oxidase inhibitors (MAOIs), or other oral diabetes medications.",
            notFor: "You should not take it if you have type 1 diabetes mellitus, if you have diabetic ketoacidosis.",
            form: "Tablet", // Tablet, Capsule, Syrup, etc.
            storage: "Store at controlled room temperature 20° to 25°C (68° to 77°F).",
            isOTC: true
            },
              
              { 
                _id: "13",
                name: "Enbrel", 
                genericName: "Etanercept", 
                type: "Branded", // "Generic" or "Branded" 
                image: "/medicine/ENBREL.jpg", 
                description: "It's a type of biologic drug, specifically a TNF-alpha inhibitor, meaning it works by blocking a protein called tumor necrosis factor (TNF) that plays a role in inflammation.", 
                uses: "Used to treat several autoimmune and inflammatory conditions, including rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, and plaque psoriasis.", 
                sideEffects: "Infections, including colds and sinus infections.", 
                precautions: "Do not inject into an area where the skin is tender, bruised, red, hard, or where there are scars or stretch marks", 
                interactions: "May interact with antibiotis.", 
                notFor: "If you have psoriasis, do not inject into skin that is red, thick, raised, or scaly.", 
                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                storage: "Kept cool—between 36°F to 46°F (2°C to 8°C).", 
                isOTC: true 
                },

                {
                  _id: "14",
              name: "Etanercept",
              genericName: "Etanercept",
              type: "Generic",
              image: "/medicine/ETANERCEPT.jpg",
              description: "It's a type of biologic drug, specifically a TNF-alpha inhibitor, meaning it works by blocking a protein called tumor necrosis factor (TNF) that plays a role in inflammation.",
              uses: "Used to treat several autoimmune and inflammatory conditions, including rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, and plaque psoriasis.",
              sideEffects: "Infections, including colds and sinus infections.",
              precautions: "Do not inject into an area where the skin is tender, bruised, red, hard, or where there are scars or stretch marks",
              interactions: "May interact with antibiotis.",
              notFor: "If you have psoriasis, do not inject into skin that is red, thick, raised, or scaly.",
              form: "Tablet", // Tablet, Capsule, Syrup, etc.
              storage: "Kept cool—between 36°F to 46°F (2°C to 8°C).",
              isOTC: true
              },
                
                
                { 
                _id: "15",
                name: "Vasotec", 
                genericName: "Enalapril", 
                type: "Branded", // "Generic" or "Branded" 
                image: "/medicine/VASOTEC.jpg", 
                description: "An ACE (angiotensin converting enzyme) inhibitor used to treat high blood pressure (hypertension), congestive heart failure, kidney problems caused by diabetes, and to improve survival after a heart attack.", 
                uses: "Used to treat high blood pressure (hypertension), congestive heart failure, kidney problems caused by diabetes, and to improve survival after a heart attack.",
                 sideEffects: "Dry, tickly cough. Cough medicines do not usually help coughs caused by enalapril.", 
                precautions: "Call a doctor right away if you have a rash, itching, hoarseness, trouble breathing, trouble swallowing, or any swelling of your hands, face, or mouth while you are using this medicine.", 
                interactions: "May interact with gold injections to treat arthritis, lithium, potassium supplements, salt substitutes that contain potassium, aspirin or other NSAIDs (non-steroidal anti-inflammatory drugs), or diuretics (water pills). ", 
                notFor: "You should not use Vasotec if you have ever had angioedema.", 
                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                storage: "Store at 25°C (77°F); excursions permitted to 15-30°C (59-86°F).",
                 isOTC: true 
                } ,
                
                {
                  _id: "16",
                name: "Enalapril",
                genericName: "Enalapril",
                type: "Generic",
                image: "/medicine/ENALAPRIL.jpg",
                description: "An ACE (angiotensin converting enzyme) inhibitor used to treat high blood pressure (hypertension), congestive heart failure, kidney problems caused by diabetes, and to improve survival after a heart attack.",
                uses: "Used to treat high blood pressure (hypertension), congestive heart failure, kidney problems caused by diabetes, and to improve survival after a heart attack.",
                sideEffects: "Dry, tickly cough. Cough medicines do not usually help coughs caused by enalapril.",
                precautions: "Call a doctor right away if you have a rash, itching, hoarseness, trouble breathing, trouble swallowing, or any swelling of your hands, face, or mouth while you are using this medicine.",
                interactions: "May interact with gold injections to treat arthritis, lithium, potassium supplements,salt substitutes that contain potassium, aspirin or other NSAIDs (non-steroidal anti-inflammatory drugs), or diuretics (water pills). ",
                notFor: "You should not use Vasotec if you have ever had angioedema.",
                form: "Tablet", // Tablet, Capsule, Syrup, etc.
                storage: "Store at 25°C (77°F); excursions permitted to 15-30°C (59-86°F).",
                isOTC: true
                },

                { 
                  _id: "17",
                  name: "Synthroid", 
                  genericName: "Levothyroxine sodium ", 
                  type: "Branded", // "Generic" or "Branded" 
                  image: "/medicine/SYNTHROID.jpg", 
                  description: "A thyroid medicine that replaces a hormone normally produced by your thyroid gland to regulate the body's energy and metabolism", 
                  uses: "Used to treat hypothyroidism (low thyroid hormone).", 
                  sideEffects: "Weight gain or loss.", 
                  precautions: "Taking too much or too little SYNTHROID may lead to negative effects on growth and development, heart function, bone health, reproductive function, mental health, digestive function, and changes in blood sugar and cholesterol metabolism in adult or pediatric patients.", 
                  interactions: "May interact with high fiber foods, such as sweet potatoes, black beans, and avocado.", 
                  notFor: "Should not be used to treat obesity or to help with weight management.", 
                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                  storage: "Stored at or below 25°C, protected from light and moisture.", 
                  isOTC: true 
                  } ,

                  {
                    _id:"18",
                name: "Levothyroxine sodium",
                genericName: "Levothyroxine sodium ",
                type: "Generic",
                image: "/medicine/LEVOTHYROXINESODIUM.jpg",
                description: "A thyroid medicine that replaces a hormone normally produced by your thyroid gland to regulate the body's energy and metabolism",
                uses: "Used to treat hypothyroidism (low thyroid hormone).",
                sideEffects: "Weight gain or loss.",
                precautions: "Taking too much or too little SYNTHROID may lead to negative effects on growth and development, heart function, bone health, reproductive function, mental health, digestive function, and changes in blood sugar and cholesterol metabolism in adult or pediatric patients.",
                interactions: "May interact with high fiber foods, such as sweet potatoes, black beans, and avocado.",
                notFor: "Should not be used to treat obesity or to help with weight management.",
                form: "Tablet", // Tablet, Capsule, Syrup, etc.
                storage: "Stored at or below 25°C, protected from light and moisture.",
                isOTC: true
                }, 

                  { 
                  _id: "19",
                  name: "Prinivil", 
                  genericName: "Lisinopril",
                  type: "Branded", // "Generic" or "Branded" 
                  image: "/medicine/PRINIVIL.jpg", 
                  description: "It is a type of angiotensin-converting enzyme (ACE) inhibitor. Also called lisinopril and Zestril.", 
                  uses: "Used to treat high blood pressure and certain heart conditions.",
                   sideEffects: "Feeling dizzy or lightheaded, especially when you stand up or sit up quickly.", 
                   precautions: "Call your doctor right away if you have a rash, itching, hoarseness, trouble breathing, trouble swallowing, or any swelling of your hands, face, or mouth while you are using this medicine.", 
                  interactions: "May interact with supplement or salt-substitute containing potassium.",
                   notFor: "Patients with hyperkalemia, a history of angioedema, renal failure with prior lisinopril use, bilateral renal artery stenosis, concomitant use with aliskiren in patients with diabetes mellitus, and for patients receiving a neprilysin inhibitor or within 36 hours of taking one.", 
                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                  storage: "Stored at or below 25°C (77°F) and can be stored for up to four weeks. ", 
                  isOTC: true 
                  } ,

                  { 
                  _id: "20",
                  name: "Lisinopril", 
                  genericName: "Lisinopril",
                  type: "Generic", // "Generic" or "Branded" 
                  image: "/medicine/LISINOPRIL.jpg", 
                  description: "It is a type of angiotensin-converting enzyme (ACE) inhibitor. Also called lisinopril and Zestril.", 
                  uses: "Used to treat high blood pressure and certain heart conditions.",
                   sideEffects: "Feeling dizzy or lightheaded, especially when you stand up or sit up quickly.", 
                   precautions: "Call your doctor right away if you have a rash, itching, hoarseness, trouble breathing, trouble swallowing, or any swelling of your hands, face, or mouth while you are using this medicine.", 
                  interactions: "May interact with supplement or salt-substitute containing potassium.",
                   notFor: "Patients with hyperkalemia, a history of angioedema, renal failure with prior lisinopril use, bilateral renal artery stenosis, concomitant use with aliskiren in patients with diabetes mellitus, and for patients receiving a neprilysin inhibitor or within 36 hours of taking one.", 
                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                  storage: "Stored at or below 25°C (77°F) and can be stored for up to four weeks. ", 
                  isOTC: true 
                  } ,
                  
                  { 
                    _id: "21" ,
                    name: "Nasonex", 
                    genericName: "Mometasone", 
                    type: "Branded", // "Generic" or "Branded" 
                    image: "/medicine/NASONEX.jpg", 
                    description: "A corticosteroid nasal spray that decreases inflammation in your nose.", uses: "Used to treat nasal polyps in adults aged 18 and over.", 
                    sideEffects: "Unpleasant taste or smell. Rinsing your mouth out with water or brushing your teeth after you use your nasal spray may help.", 
                    precautions: "Continuously for more than 6 months without the advice of your doctor or pharmacist.", 
                    interactions: "May interact with several drugs.", 
                    notFor: "People who have or had infection, such as tuberculosis, herpes, or fungal infection.",
                     form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                    storage: "Store at 25ºC (77F); excursions permitted to 15-30ºC (59-86F).",
                     isOTC: true 
                    } ,

                     { 
                    _id: "22" ,
                    name: "Mometasone", 
                    genericName: "Mometasone", 
                    type: "Generic", // "Generic" or "Branded" 
                    image: "/medicine/MOMETASONE.jpg", 
                    description: "A corticosteroid nasal spray that decreases inflammation in your nose.", uses: "Used to treat nasal polyps in adults aged 18 and over.", 
                    sideEffects: "Unpleasant taste or smell. Rinsing your mouth out with water or brushing your teeth after you use your nasal spray may help.", 
                    precautions: "Continuously for more than 6 months without the advice of your doctor or pharmacist.", 
                    interactions: "May interact with several drugs.", 
                    notFor: "People who have or had infection, such as tuberculosis, herpes, or fungal infection.",
                     form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                    storage: "Store at 25ºC (77F); excursions permitted to 15-30ºC (59-86F).",
                     isOTC: true 
                    } ,

                    { 
                    _id: "23",
                    name: "Protonix", 
                    genericName: "Pantoprazole", 
                    type: "Branded", // "Generic" or "Branded" 
                    image: "/medicine/PROTONIX.jpg", 
                    description: "It works by reducing the amount of acid in the stomach. It belongs to a group of medications called PPIs.", 
                    uses: "Used to treat heartburn, stomach ulcers, reflux disease, or other conditions that cause too much stomach acid", 
                    sideEffects: "Headaches and diarrhoea", 
                    precautions: "Call your doctor right away if you have severe bone pain or are unable to walk or sit normally.",
                    interactions: "May interact with iron supplements.", 
                    notFor: "People with low levels of calcium, magnesium, or potassium in the blood.", 
                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                    storage: "Stored in glass vials was stable for 3 days at room temperature (20°C to 25°C) with exposure to light.", 
                    isOTC: true 
                    },

                     { 
                    _id: "24",
                    name: "Pantoprazole", 
                    genericName: "Pantoprazole", 
                    type: "Generic", // "Generic" or "Branded" 
                    image: "/medicine/PANTOPRAZOLE.jpg", 
                    description: "It works by reducing the amount of acid in the stomach. It belongs to a group of medications called PPIs.", 
                    uses: "Used to treat heartburn, stomach ulcers, reflux disease, or other conditions that cause too much stomach acid", 
                    sideEffects: "Headaches and diarrhoea", 
                    precautions: "Call your doctor right away if you have severe bone pain or are unable to walk or sit normally.",
                    interactions: "May interact with iron supplements.", 
                    notFor: "People with low levels of calcium, magnesium, or potassium in the blood.", 
                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                    storage: "Stored in glass vials was stable for 3 days at room temperature (20°C to 25°C) with exposure to light.", 
                    isOTC: true 
                    },
                    
                    
                    {
                      _id: "25",
                      name: "Crestor", 
                      genericName: "Rosuvastatin", 
                      type: "Branded", // "Generic" or "Branded" 
                      image: "/medicine/CRESTOR.jpg", 
                      description: "A drug used to lower the amount of cholesterol and other harmful substances, such as triglycerides, in the blood.", 
                      uses: "Used to treat and use to lower cholesterol if you have been diagnosed with high blood cholesterol.", 
                      sideEffects: "Headaches. Make sure you rest and drink plenty of fluids.", 
                      precautions: "Do not share rosuvastatin with other people, even if they have the same condition as you. It may harm them. ", 
                      interactions: "May interact with paxlovid (nirmatrelvir/ritonavir), some medications used to treat HIV, and warfarin (Coumadin, Jantoven).", 
                      notFor: "People who have certain liver problems.", 
                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                      storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light.", 
                      isOTC: true 
                      } ,

                      {
                      _id: "26",
                      name: "Rosuvastatin", 
                      genericName: "Rosuvastatin", 
                      type: "Generic", // "Generic" or "Branded" 
                      image: "/medicine/ROSUVASTATIN.jpg", 
                      description: "A drug used to lower the amount of cholesterol and other harmful substances, such as triglycerides, in the blood.", 
                      uses: "Used to treat and use to lower cholesterol if you have been diagnosed with high blood cholesterol.", 
                      sideEffects: "Headaches. Make sure you rest and drink plenty of fluids.", 
                      precautions: "Do not share rosuvastatin with other people, even if they have the same condition as you. It may harm them. ", 
                      interactions: "May interact with paxlovid (nirmatrelvir/ritonavir), some medications used to treat HIV, and warfarin (Coumadin, Jantoven).", 
                      notFor: "People who have certain liver problems.", 
                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                      storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light.", 
                      isOTC: true 
                      } ,

                      { 
                      _id: "27", 
                      name: "Diovan", 
                      genericName: "Valsartan", 
                      type: "Branded", // "Generic" or "Branded" 
                      image: "/medicine/DIOVAN.jpg", 
                      description: "A white to practically white fine powder. It is soluble in ethanol and methanol and slightly soluble in water.", 
                      uses: "Used to treat and control high blood pressure, which is also called hypertension.", 
                      sideEffects: "Feeling dizzy. If valsartan makes you feel dizzy when you stand up, try getting up very slowly or stay sitting down until you feel better.", 
                      precautions: "Tell your healthcare provider about any prescription or over-the-counter (OTC) medicines, vitamins/minerals, herbal products, and other supplements you are using.", interactions: "May interact with aliskiren, enalapril, captopril, lisinopril or ramipril. painkillers such as ibuprofen, naproxen, diclofenac, celecoxib or etoricoxib.", 
                      notFor: "Should not be taken while you are using certain other medicines and have diabetes.", 
                      form: "Tablet", // Tablet, Capsule, Syrup, etc.
                      storage: "Store carvedilol tablet at 20˚ to 25˚C (68˚ to 77˚ F).", 
                      isOTC: true 
                      } ,

                      { 
                        _id: "28", 
                        name: "Valsartan", 
                        genericName: "Valsartan", 
                        type: "Generic", // "Generic" or "Branded" 
                        image: "/medicine/VALSARTAN.jpg", 
                        description: "A white to practically white fine powder. It is soluble in ethanol and methanol and slightly soluble in water.", 
                        uses: "Used to treat and control high blood pressure, which is also called hypertension.", 
                        sideEffects: "Feeling dizzy. If valsartan makes you feel dizzy when you stand up, try getting up very slowly or stay sitting down until you feel better.", 
                        precautions: "Tell your healthcare provider about any prescription or over-the-counter (OTC) medicines, vitamins/minerals, herbal products, and other supplements you are using.", interactions: "May interact with aliskiren, enalapril, captopril, lisinopril or ramipril. painkillers such as ibuprofen, naproxen, diclofenac, celecoxib or etoricoxib.", 
                        notFor: "Should not be taken while you are using certain other medicines and have diabetes.", 
                        form: "Tablet", // Tablet, Capsule, Syrup, etc.
                        storage: "Store carvedilol tablet at 20˚ to 25˚C (68˚ to 77˚ F).", 
                        isOTC: true 
                        } ,
                       
                      { 
                        _id: "29",
                        name: "Ativan", 
                        genericName: "Meloxicam", 
                        type: "Branded", // "Generic" or "Branded" 
                        image: "/medicine/ATIVAN.jpg", 
                        description: "Belongs to a class of medications called benzodiazepines. It is thought that benzodiazepines work by enhancing the activity of certain neurotransmitters in the brain.", uses: "Used to treat insomnia caused by anxiety or temporary situational stress.", sideEffects: "Seizures, depression, thinking problems, thoughts of suicide or hurting yourself.", 
                        precautions: "Ativan can slow or stop your breathing, especially if you have recently used an opioid medication, alcohol, or other drugs that can slow your breathing.",
                         interactions: "May interact with various supplements.", 
                        notFor: "People who have sleep apnoea, a condition that causes breathing problems when you're asleep.", 
                        form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                        storage: "Stored in a refrigerator, between 36 F to 46 F (2 C to 8 C). Protect the medicine from exposure to light.", 
                        isOTC: true 
                        } ,

                        { 
                          _id: "30",
                          name: "Meloxicam", 
                          genericName: "Meloxicam", 
                          type: "Generic", // "Generic" or "Branded" 
                          image: "/medicine/MELOXICAM.jpg", 
                          description: "Belongs to a class of medications called benzodiazepines. It is thought that benzodiazepines work by enhancing the activity of certain neurotransmitters in the brain.", uses: "Used to treat insomnia caused by anxiety or temporary situational stress.", sideEffects: "Seizures, depression, thinking problems, thoughts of suicide or hurting yourself.", 
                          precautions: "Ativan can slow or stop your breathing, especially if you have recently used an opioid medication, alcohol, or other drugs that can slow your breathing.",
                           interactions: "May interact with various supplements.", 
                          notFor: "People who have sleep apnoea, a condition that causes breathing problems when you're asleep.", 
                          form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                          storage: "Stored in a refrigerator, between 36 F to 46 F (2 C to 8 C). Protect the medicine from exposure to light.", 
                          isOTC: true 
                          } ,
  
                      
                        { 
                        _id: "31",
                        name: "Mobic", 
                        genericName: "Lorazepam", 
                        type: "Branded", // "Generic" or "Branded" 
                        image: "/medicine/MOBIC.jpg", 
                        description: "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain or inflammation caused by arthritis.", 
                        uses: "Used to treat the symptoms of osteoarthritis and rheumatoid arthritis. Both diseases mainly affect the joints causing pain and swelling.", 
                        sideEffects: "Chest pain or discomfort, nausea or vomiting, pain or discomfort in the arms, jaw, back, or neck, trouble breathing, slurred speech, or weakness. Meloxicam may cause bleeding in your stomach or bowels. ", 
                        precautions: "This medication may increase your risk of developing stomach and intestinal problems.", 
                        interactions: "May interact with cyclosporine, lithium, diuretics (water pills), glyburide, methotrexate, blood thinners, steroids, ACE inhibitors, aspirin or other NSAIDs (nonsteroidal anti-inflammatory drugs).", 
                        notFor: "You should not take meloxicam for pain before, during, or after coronary artery bypass graft surgery.", 
                        form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                        storage: "Keep your tablets in a cool dry place where the temperature stays below 25°C.", 
                        isOTC: true 
                        },

                        { 
                          _id: "32",
                          name: "Lorazepam", 
                          genericName: "Lorazepam", 
                          type: "Generic", // "Generic" or "Branded" 
                          image: "/medicine/LORAZEPAM.jpg", 
                          description: "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain or inflammation caused by arthritis.", 
                          uses: "Used to treat the symptoms of osteoarthritis and rheumatoid arthritis. Both diseases mainly affect the joints causing pain and swelling.", 
                          sideEffects: "Chest pain or discomfort, nausea or vomiting, pain or discomfort in the arms, jaw, back, or neck, trouble breathing, slurred speech, or weakness. Meloxicam may cause bleeding in your stomach or bowels. ", 
                          precautions: "This medication may increase your risk of developing stomach and intestinal problems.", 
                          interactions: "May interact with cyclosporine, lithium, diuretics (water pills), glyburide, methotrexate, blood thinners, steroids, ACE inhibitors, aspirin or other NSAIDs (nonsteroidal anti-inflammatory drugs).", 
                          notFor: "You should not take meloxicam for pain before, during, or after coronary artery bypass graft surgery.", 
                          form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                          storage: "Keep your tablets in a cool dry place where the temperature stays below 25°C.", 
                          isOTC: true 
                          },
                        
                        {
                          _id: "33", 
                          name: "Lorazepam", 
                          genericName: "Ativan", 
                          type: "Branded", // "Generic" or "Branded" 
                          image: "/medicine/LORAZEPAM.jpg", 
                          description: "Lorazepam is a benzodiazepine medication approved by the US Food and Drug Administration (FDA) for short-term relief of anxiety symptoms associated with anxiety disorders, anxiety-related insomnia, anesthesia premedication in adults to relieve anxiety or induce sedation or amnesia, and treatment of status epilepticus.", 
                          uses: "Used to treat anxiety disorders.", 
                          sideEffects: "Dizziness, tiredness, weakness, unsteadiness.", 
                          precautions: "This medicine may cause drowsiness, trouble with thinking, trouble with controlling movements, or trouble with seeing clearly.", 
                          interactions: "May interact with sleeping medications such as Zolpidem.",
                           notFor: "People who have ever had an allergic reaction to lorazepam or any other medicine.", 
                           form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                          storage: "Stored in a refrigerator, between 36 F to 46 F (2 C to 8 C).", 
                          isOTC: true 
                          } ,

                          {
                            _id: "34", 
                            name: "Ativan", 
                            genericName: "Ativan", 
                            type: "Generic", // "Generic" or "Branded" 
                            image: "/medicine/ATIVAN.jpg", 
                            description: "Lorazepam is a benzodiazepine medication approved by the US Food and Drug Administration (FDA) for short-term relief of anxiety symptoms associated with anxiety disorders, anxiety-related insomnia, anesthesia premedication in adults to relieve anxiety or induce sedation or amnesia, and treatment of status epilepticus.", 
                            uses: "Used to treat anxiety disorders.", 
                            sideEffects: "Dizziness, tiredness, weakness, unsteadiness.", 
                            precautions: "This medicine may cause drowsiness, trouble with thinking, trouble with controlling movements, or trouble with seeing clearly.", 
                            interactions: "May interact with sleeping medications such as Zolpidem.",
                             notFor: "People who have ever had an allergic reaction to lorazepam or any other medicine.", 
                             form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                            storage: "Stored in a refrigerator, between 36 F to 46 F (2 C to 8 C).", 
                            isOTC: true 
                            } ,

                          { 
                          _id: "35",
                          name: "Levofloxacin", 
                          genericName: "Levofloxacin", 
                          type: "Branded", // "Generic" or "Branded" 
                          image: "/medicine/LEVOFLOXACIN.jpg", 
                          description: "Levofloxacin belongs to the class of medicines known as quinolone antibiotics. It works by killing bacteria or preventing their growth.", 
                          uses: "Used to treat bacterial infections in many different parts of the body.", 
                          sideEffects: "Pain, inflammation, or swelling in the calves of the legs, shoulders, or hands.",
                           precautions: "It is very important that your doctor check your or your child's progress at regular visits to make sure the medicine is working properly and to decide if you should continue to take it.", 
                          interactions: "May interact with Bepridil, cisapride, dronedarone.", 
                          notFor: "Should not be used for bronchitis and certain types of urinary tract infections if there are other treatment options available.", 
                          form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                          storage: "Store levofloxacin tablets and vials of levofloxacin injection solution at room temperature, 68°F to 77°F (20°C to 25°C).", 
                          isOTC: true 
                          } ,
                          
                          { 
                            _id: "36",
                            name: "Neurontin", 
                            genericName: "Gabapentin", 
                            type: "Branded", // "Generic" or "Branded" 
                            image: "/medicine/NEURONTIN.jpg", 
                            description: "Neurontin is an anti-epileptic drug, also called an anticonvulsant. It affects chemicals and nerves in the body that are involved in the cause of seizures and some types of pain.", 
                            uses: "Used to treat and help manage certain epileptic seizures. It also is used to relieve pain for some conditions, such as shingles.", 
                            sideEffects: "Feeling sick (nausea) Take gabapentin with or after a meal or snack.",
                             precautions: "Make sure you know how you react to this medicine before you drive, use machines, or do anything else that could be dangerous if you are not alert, well-coordinated, or able to think or see well.", 
                            interactions: "May interact with opioids like oxycodone (Roxicodone, Oxycontin), benzodiazepines like alprazolam (Xanax), and alcohol.", 
                            notFor: "People who have or had mood problems, depression, suicidal thoughts or behavior.", 
                            form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                            storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).",
                             isOTC: true 
                            } ,

                            { 
                              _id: "37",
                              name: "Gabapentin", 
                              genericName: "Gabapentin", 
                              type: "Generic", // "Generic" or "Branded" 
                              image: "/medicine/GABAPENTIN.jpg", 
                              description: "Neurontin is an anti-epileptic drug, also called an anticonvulsant. It affects chemicals and nerves in the body that are involved in the cause of seizures and some types of pain.", 
                              uses: "Used to treat and help manage certain epileptic seizures. It also is used to relieve pain for some conditions, such as shingles.", 
                              sideEffects: "Feeling sick (nausea) Take gabapentin with or after a meal or snack.",
                               precautions: "Make sure you know how you react to this medicine before you drive, use machines, or do anything else that could be dangerous if you are not alert, well-coordinated, or able to think or see well.", 
                              interactions: "May interact with opioids like oxycodone (Roxicodone, Oxycontin), benzodiazepines like alprazolam (Xanax), and alcohol.", 
                              notFor: "People who have or had mood problems, depression, suicidal thoughts or behavior.", 
                              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                              storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).",
                               isOTC: true 
                              } ,

                            { 
                            _id: "38",
                            name: "Diflucan", 
                            genericName: "Fluconazole", 
                            type: "Branded", // "Generic" or "Branded" 
                            image: "/medicine/DIFLUCAN.jpg", 
                            description: "A medication that prevents and treats fungal or yeast infections. It's a type of antifungal medication.", 
                            uses: "Used to treat infections caused by fungus, which can invade any part of the body including the mouth, throat, esophagus, lungs, bladder, genital area, and the blood.", sideEffects: "Headache, rest and drink plenty of fluids.", 
                            precautions: "Check with your doctor right away if you or your child start having a skin rash, itching, or any other skin changes while using this medicine.", 
                            interactions: "May interact with antibiotics like rifabutin, rifampin.", 
                            notFor: "You should not take Fluconazole if you are pregnant, think you may be pregnant, are trying to become pregnant or breastfeeding.", 
                            form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                            storage: "Store dry powder below 30°C (86°F).", 
                            isOTC: true 
                            } ,

                            { 
                              _id: "39",
                              name: "Fluconazole", 
                              genericName: "Fluconazole", 
                              type: "Generic", // "Generic" or "Branded" 
                              image: "/medicine/FLUCONAZOLE.jpg", 
                              description: "A medication that prevents and treats fungal or yeast infections. It's a type of antifungal medication.", 
                              uses: "Used to treat infections caused by fungus, which can invade any part of the body including the mouth, throat, esophagus, lungs, bladder, genital area, and the blood.", sideEffects: "Headache, rest and drink plenty of fluids.", 
                              precautions: "Check with your doctor right away if you or your child start having a skin rash, itching, or any other skin changes while using this medicine.", 
                              interactions: "May interact with antibiotics like rifabutin, rifampin.", 
                              notFor: "You should not take Fluconazole if you are pregnant, think you may be pregnant, are trying to become pregnant or breastfeeding.", 
                              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                              storage: "Store dry powder below 30°C (86°F).", 
                              isOTC: true 
                              } ,
                            
                            { 
                            _id: "40",
                            name: "Valium", 
                            genericName: "Diazepam", 
                            type: "Branded", // "Generic" or "Branded" 
                            image: "/medicine/VALIUM.jpg", 
                            description: "A drug used to treat mild to moderate anxiety and tension and to relax muscles. It is a type of benzodiazepine. Also called diazepam.", 
                            uses: "Used to treat anxiety, seizures, muscle spasms or twitches.", 
                            sideEffects: "Drowsy or dizzy.", 
                            precautions: "Never use Valium in larger amounts, or for longer than prescribed. Tell your doctor if you feel an increased urge to use more of this medicine.",
                            interactions: "May interact with alcohol, opioids, and various prescription drugs.", 
                            notFor: "People who have myasthenia gravis a condition that causes muscle weakness.", 
                            form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                            storage: "Store VALIUM in a tightly closed container between 68°F to 77°F (20°C to 25°C) and out of the light.", 
                            isOTC: true 
                            } ,
                            
                            { 
                              _id: "41",
                              name: "Diazepam", 
                              genericName: "Diazepam", 
                              type: "Generic", // "Generic" or "Branded" 
                              image: "/medicine/DIAZEPAM.jpg", 
                              description: "A drug used to treat mild to moderate anxiety and tension and to relax muscles. It is a type of benzodiazepine. Also called diazepam.", 
                              uses: "Used to treat anxiety, seizures, muscle spasms or twitches.", 
                              sideEffects: "Drowsy or dizzy.", 
                              precautions: "Never use Valium in larger amounts, or for longer than prescribed. Tell your doctor if you feel an increased urge to use more of this medicine.",
                              interactions: "May interact with alcohol, opioids, and various prescription drugs.", 
                              notFor: "People who have myasthenia gravis a condition that causes muscle weakness.", 
                              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                              storage: "Store VALIUM in a tightly closed container between 68°F to 77°F (20°C to 25°C) and out of the light.", 
                              isOTC: true 
                              } ,
                              

                            { 
                              _id:"42",
                              name: "Singulair", 
                              genericName: "Montelukast", 
                              type: "Branded", // "Generic" or "Branded" 
                              image: "/medicine/SINGULAIR.jpg", 
                              description: "A prescription medication that helps prevent asthma attacks in people aged 12 months and over.", 
                              uses: "Used to treat prevent asthma attacks in people aged 12 months and over.", 
                              sideEffects: "Upper respiratory infection, fever, headache, sore throat, cough, stomach pain, diarrhea, earache or ear infection, flu, runny nose, and sinus infection.", 
                              precautions: "Montelukast may cause some people to be agitated, disoriented, irritable, or display other abnormal behaviors.", 
                              interactions: "May interact with metronidazole, dexamethasone, amiodarone.", 
                              notFor: "People with liver disease.", 
                              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                              storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                              isOTC: true 
                              } ,

                              { 
                                _id:"43",
                                name: "Montelukast", 
                                genericName: "Montelukast", 
                                type: "Generic", // "Generic" or "Branded" 
                                image: "/medicine/MONTELUKAST.jpg", 
                                description: "A prescription medication that helps prevent asthma attacks in people aged 12 months and over.", 
                                uses: "Used to treat prevent asthma attacks in people aged 12 months and over.", 
                                sideEffects: "Upper respiratory infection, fever, headache, sore throat, cough, stomach pain, diarrhea, earache or ear infection, flu, runny nose, and sinus infection.", 
                                precautions: "Montelukast may cause some people to be agitated, disoriented, irritable, or display other abnormal behaviors.", 
                                interactions: "May interact with metronidazole, dexamethasone, amiodarone.", 
                                notFor: "People with liver disease.", 
                                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                isOTC: true 
                                } ,
                              
                              {
                              _id: "44", 
                              name: "Flomax", 
                              genericName: "Tamsulosin", 
                              type: "Branded", // "Generic" or "Branded" 
                              image: "/medicine/FLOMAX.jpg", 
                              description: "An alpha-blocker medication that treats the symptoms of an enlarged prostate.",
                               uses: "Used to treat the symptoms of an enlarged prostate.", 
                              sideEffects: "Less semen than usual or other problems with ejaculation.", 
                              precautions: "If you feel dizzy, lie down so you do not faint.", 
                              interactions: "May interact with nifedipine, atenolol, enalapril.", 
                              notFor: "People who have ever had an allergic reaction to tamsulosin or other similar medicines, such as alfuzosin, doxazosin, prazosin or terazosin.", 
                              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                              storage: "Store this drug at room temperature between 59°F and 86°F (15°C and 30°C).",
                               isOTC: true 
                              } ,

                              {
                                _id: "45", 
                                name: "Tamsulosin", 
                                genericName: "Tamsulosin", 
                                type: "Generic", // "Generic" or "Branded" 
                                image: "/medicine/TAMSULOSIN.jpg", 
                                description: "An alpha-blocker medication that treats the symptoms of an enlarged prostate.",
                                 uses: "Used to treat the symptoms of an enlarged prostate.", 
                                sideEffects: "Less semen than usual or other problems with ejaculation.", 
                                precautions: "If you feel dizzy, lie down so you do not faint.", 
                                interactions: "May interact with nifedipine, atenolol, enalapril.", 
                                notFor: "People who have ever had an allergic reaction to tamsulosin or other similar medicines, such as alfuzosin, doxazosin, prazosin or terazosin.", 
                                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                storage: "Store this drug at room temperature between 59°F and 86°F (15°C and 30°C).",
                                 isOTC: true 
                                } ,
  

                              { 
                              _id: "46",
                              name: "Zocor", 
                              genericName: "Simvastatin", 
                              type: "Branded", // "Generic" or "Branded"
                              image: "/medicine/ZOCOR.jpg", 
                              description: "This medicine works by stopping your liver from making cholesterol.",
                               uses: "Used together with a proper diet to treat high cholesterol and triglyceride (fat) levels in the blood.", 
                              sideEffects: "Dark-colored urine, loss of appetite, weight loss, general feeling of tiredness or weakness, light-colored stools, upper right stomach pain, or yellow eyes or skin.", 
                              precautions: "Do not drink large amounts of alcohol with simvastatin. This could cause unwanted effects on the liver.", 
                              interactions: "May interact with azole antifungals, antibiotics, and antivirals.", 
                              notFor: "People who have liver disease or if blood tests suggest that your liver may not be working properly.", 
                              form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                              storage: "Store the suspension at room temperature.", 
                              isOTC: true 
                              } ,
                              

                              { 
                                _id: "47",
                                name: "Simvastatin", 
                                genericName: "Simvastatin", 
                                type: "Generic", // "Generic" or "Branded"
                                image: "/medicine/SIMVASTATIN.jpg", 
                                description: "This medicine works by stopping your liver from making cholesterol.",
                                 uses: "Used together with a proper diet to treat high cholesterol and triglyceride (fat) levels in the blood.", 
                                sideEffects: "Dark-colored urine, loss of appetite, weight loss, general feeling of tiredness or weakness, light-colored stools, upper right stomach pain, or yellow eyes or skin.", 
                                precautions: "Do not drink large amounts of alcohol with simvastatin. This could cause unwanted effects on the liver.", 
                                interactions: "May interact with azole antifungals, antibiotics, and antivirals.", 
                                notFor: "People who have liver disease or if blood tests suggest that your liver may not be working properly.", 
                                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                storage: "Store the suspension at room temperature.", 
                                isOTC: true 
                                } ,
                                
                              { 
                                _id: "48",
                                name: "Tricor", 
                                genericName: "Fenofibrate", 
                                type: "Branded", // "Generic" or "Branded" 
                                image: "/medicine/TRICOR.jpg", 
                                description: "A drug used to treat high levels of cholesterol and triglycerides in the blood.", 
                                uses: "Used to treat high levels of these types of fat in the blood are associated with an increased risk of atherosclerosis (clogged arteries).", 
                                sideEffects: "Liver damage, muscle pain, gallstones, and pancreatitis.",
                                 precautions: "Avoid drinking alcohol before and during treatment with fenofibrate.",
                                  interactions: "May interact with aspirin, acetaminophen, ibuprofen, and naproxen, or injected antibiotics.", 
                                notFor: "People who are allergic to any of the following should not take fenofibrate.", 
                                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                storage: "Stored at room temperature, ideally between 68°F and 77°F (20°C and 25°C).", 
                                isOTC: true 
                                } ,

                                { 
                                  _id: "49",
                                  name: "Fenofibrate", 
                                  genericName: "Fenofibrate", 
                                  type: "Generic", // "Generic" or "Branded" 
                                  image: "/medicine/FENOFIBRATE.jpg", 
                                  description: "A drug used to treat high levels of cholesterol and triglycerides in the blood.", 
                                  uses: "Used to treat high levels of these types of fat in the blood are associated with an increased risk of atherosclerosis (clogged arteries).", 
                                  sideEffects: "Liver damage, muscle pain, gallstones, and pancreatitis.",
                                   precautions: "Avoid drinking alcohol before and during treatment with fenofibrate.",
                                    interactions: "May interact with aspirin, acetaminophen, ibuprofen, and naproxen, or injected antibiotics.", 
                                  notFor: "People who are allergic to any of the following should not take fenofibrate.", 
                                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                  storage: "Stored at room temperature, ideally between 68°F and 77°F (20°C and 25°C).", 
                                  isOTC: true 
                                  } ,

                                { 
                                _id: "50" ,
                                name: "Coreg", 
                                genericName: "Carvedilol", 
                                type: "Branded", // "Generic" or "Branded" 
                                image: "/medicine/COREG.jpg", 
                                description: "A drug used to treat high blood pressure and certain heart problems.", 
                                uses: "Used to treat and helps to lower the heart rate and make the heart pump better.", 
                                sideEffects: "Chest pain, discomfort, tightness, or heaviness.", 
                                precautions: "Make sure you know how you react to this medicine before you drive, use machines, or do anything else that could be dangerous if you are dizzy or not alert.", interactions: "May interact with allergy treatments, cimetidine, cyclosporine, fluconazole, insulin or oral diabetes medications, rifampin, antidepressants, heart or blood pressure medicines, heart rhythm medications.", 
                                notFor: "You should not take Coreg if you have asthma, bronchitis, emphysema, severe liveR  disease, or a serious heart condition such as heart block, or slow heart rate.", form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                storage: "Store carvedilol tablet at 20˚ to 25˚C (68˚ to 77˚ F).", 
                                isOTC: true 
                                } ,

                                { 
                                  _id: "51" ,
                                  name: "Carvedilol", 
                                  genericName: "Carvedilol", 
                                  type: "Generic", // "Generic" or "Branded" 
                                  image: "/medicine/CARVEDILOL.jpg", 
                                  description: "A drug used to treat high blood pressure and certain heart problems.", 
                                  uses: "Used to treat and helps to lower the heart rate and make the heart pump better.", 
                                  sideEffects: "Chest pain, discomfort, tightness, or heaviness.", 
                                  precautions: "Make sure you know how you react to this medicine before you drive, use machines, or do anything else that could be dangerous if you are dizzy or not alert.", interactions: "May interact with allergy treatments, cimetidine, cyclosporine, fluconazole, insulin or oral diabetes medications, rifampin, antidepressants, heart or blood pressure medicines, heart rhythm medications.", 
                                  notFor: "You should not take Coreg if you have asthma, bronchitis, emphysema, severe liveR  disease, or a serious heart condition such as heart block, or slow heart rate.", form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                  storage: "Store carvedilol tablet at 20˚ to 25˚C (68˚ to 77˚ F).", 
                                  isOTC: true 
                                  } ,

                                { 
                                _id: "52",
                                name: "Lipitor", 
                                genericName: "Atorvastatin", 
                                type: "Branded", // "Generic" or "Branded" 
                                image: "/medicine/LIPITOR.jpg", 
                                description: "A drug used to lower the amount of cholesterol in the blood and to prevent stroke, heart attack, and angina (chest pain).", 
                                uses: "Used to treat high cholesterol in certain adults and children, along with a balanced diet or other treatments to treat high cholesterol in certain adults and children, along with a balanced diet or other treatments.", 
                                sideEffects: "Muscle pain, joint pain, and diarrhea.", 
                                precautions: "Call a doctor right away if you have unexplained muscle pain, tenderness, or weakness especially if you also have fever, unusual tiredness, or dark urine.",
                                 interactions: "May interact with Cyclosporine (Gengraf, Neoral).", 
                                notFor: "You should not take Lipitor if you have liver disease or cirrhosis.", 
                                form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                storage: "Store atorvastatin at room temperature between 68°F (20°C) and 77°F (25°C).", 
                                isOTC: true 
                                } ,
                                
                                { 
                                  _id: "53",
                                  name: "Atorvastatin", 
                                  genericName: "Atorvastatin", 
                                  type: "Generic", // "Generic" or "Branded" 
                                  image: "/medicine/ATORVASTATIN.jpg", 
                                  description: "A drug used to lower the amount of cholesterol in the blood and to prevent stroke, heart attack, and angina (chest pain).", 
                                  uses: "Used to treat high cholesterol in certain adults and children, along with a balanced diet or other treatments to treat high cholesterol in certain adults and children, along with a balanced diet or other treatments.", 
                                  sideEffects: "Muscle pain, joint pain, and diarrhea.", 
                                  precautions: "Call a doctor right away if you have unexplained muscle pain, tenderness, or weakness especially if you also have fever, unusual tiredness, or dark urine.",
                                   interactions: "May interact with Cyclosporine (Gengraf, Neoral).", 
                                  notFor: "You should not take Lipitor if you have liver disease or cirrhosis.", 
                                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                  storage: "Store atorvastatin at room temperature between 68°F (20°C) and 77°F (25°C).", 
                                  isOTC: true 
                                  } ,
                                  

                                { 
                                  _id: "54",
                                  name: "Rheumatrex", 
                                  genericName: "Methotrexate", 
                                  type: "Branded", // "Generic" or "Branded" 
                                  image: "/medicine/RHEUMATREX.jpg", 
                                  description: "An antimetabolite drug that is used to treat some cancers, severe skin diseases such as severe psoriasis, and to treat forms of rheumatoid arthritis.", 
                                  uses: " Used to treat some cancers, severe skin diseases such as severe psoriasis, and to treat forms of rheumatoid arthritis.", 
                                  sideEffects: "Persistent cough, chest pain, difficulty breathing.", 
                                  precautions: "This medicine may make your skin more sensitive to sunlight.",
                                   interactions: "May interact with azathioprine, chloramphenicol, hydroxychloroquine, retinoids, steroids, sulfa drugs, phenytoin, probenecid, tetracycline, theophylline, gold treatments, oral diabetes medications, penicillin antibiotics.", 
                                  notFor: "Patients with psoriasis or rheumatoid arthritis with alcoholism, alcoholic liver disease or other chronic liver disease should not receive methotrexate.", 
                                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                  storage: "Store methotrexate at room temperature and away from heat or moisture.",
                                   isOTC: true 
                                  } ,

                                  { 
                                    _id: "55",
                                    name: "Methotrexate", 
                                    genericName: "Methotrexate", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/METHOTREXATE.jpg", 
                                    description: "An antimetabolite drug that is used to treat some cancers, severe skin diseases such as severe psoriasis, and to treat forms of rheumatoid arthritis.", 
                                    uses: " Used to treat some cancers, severe skin diseases such as severe psoriasis, and to treat forms of rheumatoid arthritis.", 
                                    sideEffects: "Persistent cough, chest pain, difficulty breathing.", 
                                    precautions: "This medicine may make your skin more sensitive to sunlight.",
                                     interactions: "May interact with azathioprine, chloramphenicol, hydroxychloroquine, retinoids, steroids, sulfa drugs, phenytoin, probenecid, tetracycline, theophylline, gold treatments, oral diabetes medications, penicillin antibiotics.", 
                                    notFor: "Patients with psoriasis or rheumatoid arthritis with alcoholism, alcoholic liver disease or other chronic liver disease should not receive methotrexate.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store methotrexate at room temperature and away from heat or moisture.",
                                     isOTC: true 
                                    } ,

                                  {
                                  _id:"56",
                                  name: "Apresoline", 
                                  genericName: "Hydralazine", 
                                  type: "Branded", // "Generic" or "Branded" 
                                  image: "/medicine/APRESOLINE.jpg", 
                                  description: "A medication that treat high blood pressure. It relaxes your blood vessels.", uses: "Used to treats high blood pressure", 
                                  sideEffects: "Swollen legs or ankles.", 
                                  precautions: "Do not take other medicines unless they have been discussed with your doctor.", 
                                  interactions: "May interact with calcium.", 
                                  notFor: "You should not use Apresoline if you have coronary artery disease, or rheumatic heart disease affecting the mitral valve.", 
                                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                  storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                  isOTC: true 
                                  } ,

                                  {
                                    _id:"57",
                                    name: "Hydralazine", 
                                    genericName: "Hydralazine", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/HYDRALAZINE.jpg", 
                                    description: "A medication that treat high blood pressure. It relaxes your blood vessels.", uses: "Used to treats high blood pressure", 
                                    sideEffects: "Swollen legs or ankles.", 
                                    precautions: "Do not take other medicines unless they have been discussed with your doctor.", 
                                    interactions: "May interact with calcium.", 
                                    notFor: "You should not use Apresoline if you have coronary artery disease, or rheumatic heart disease affecting the mitral valve.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                  { 
                                  _id: "58",
                                  name: "Lasix", 
                                  genericName: "Furosemide", 
                                  type: "Branded", // "Generic" or "Branded" 
                                  image: "/medicine/LASIX.jpg", 
                                  description: "An anthranilic acid derivative that is used as a strong diuretic in adults and children to treat excessive fluid accumulation (edema) caused by congestive heart failure, liver failure, renal failure, and nephritic syndrome.", 
                                  uses: "Used to treat swelling of the ankles, feet, legs or even the brain or lungs.", 
                                  sideEffects: "Feeling thirsty. It's important not to get dehydrated, but how much you drink will depend on why you're taking furosemide.", 
                                  precautions: "This medicine may cause an increase in blood sugar levels. If you are diabetic and notice a change in the results of your blood or urine sugar tests, check with your doctor.", interactions: "May interact with sucralfate, cisplatin, cyclosporine, ethacrynic acid, lithium, methotrexate, phenytoin, antibiotics, heart or blood pressure medications, laxatives, salicylates such as aspirin, or steroids.", 
                                  notFor: "You should not use Lasix if you are unable to urinate.", 
                                  form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                  storage: "Store at 20°C to 25°C (68°F to 77°F); excursions permitted to 15°C to 30°C (59°F to 86°F).", 
                                  isOTC: true 
                                  } ,
                                  
                                  { 
                                    _id: "59",
                                    name: "Furosemide", 
                                    genericName: "Furosemide", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/FUROSEMIDE.jpg", 
                                    description: "An anthranilic acid derivative that is used as a strong diuretic in adults and children to treat excessive fluid accumulation (edema) caused by congestive heart failure, liver failure, renal failure, and nephritic syndrome.", 
                                    uses: "Used to treat swelling of the ankles, feet, legs or even the brain or lungs.", 
                                    sideEffects: "Feeling thirsty. It's important not to get dehydrated, but how much you drink will depend on why you're taking furosemide.", 
                                    precautions: "This medicine may cause an increase in blood sugar levels. If you are diabetic and notice a change in the results of your blood or urine sugar tests, check with your doctor.", interactions: "May interact with sucralfate, cisplatin, cyclosporine, ethacrynic acid, lithium, methotrexate, phenytoin, antibiotics, heart or blood pressure medications, laxatives, salicylates such as aspirin, or steroids.", 
                                    notFor: "You should not use Lasix if you are unable to urinate.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at 20°C to 25°C (68°F to 77°F); excursions permitted to 15°C to 30°C (59°F to 86°F).", 
                                    isOTC: true 
                                    } ,
                                    

                                  { 
                                    _id: "60",
                                    name: "Plendil", 
                                    genericName: "Felodipine", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/PLENDIL.jpg", 
                                    description: "This medicine contains the active ingredient Felodipine.",
                                    uses: "Used to treat high blood pressure, also called hypertension", 
                                    sideEffects: "Swollen ankles. Raise your legs while you're sitting down.", 
                                    precautions: "This medicine may cause fluid retention edema in some patients.", 
                                    interactions: "May interact with medications for high blood pressure, intravenous (IV) calcium, azole antifungals, anti-seizure medications, cimetidine, macrolide antibiotics, or tacrolimus.", notFor: "Should not be used during pregnancy. It may affect your baby if you take it during pregnancy.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "61",
                                      name: "Felodipine", 
                                      genericName: "Felodipine", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/FELODIPINE.jpg", 
                                      description: "This medicine contains the active ingredient Felodipine.",
                                      uses: "Used to treat high blood pressure, also called hypertension", 
                                      sideEffects: "Swollen ankles. Raise your legs while you're sitting down.", 
                                      precautions: "This medicine may cause fluid retention edema in some patients.", 
                                      interactions: "May interact with medications for high blood pressure, intravenous (IV) calcium, azole antifungals, anti-seizure medications, cimetidine, macrolide antibiotics, or tacrolimus.", notFor: "Should not be used during pregnancy. It may affect your baby if you take it during pregnancy.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "62",
                                    name: "Cardizem", 
                                    genericName: "Diltiazem", 
                                    type: "Branded", 
                                    image: "/medicine/CARDIZEM.jpg", 
                                    description: "A calcium channel blocker. It works by affecting the movement of calcium into the cells of the heart and blood vessels.", 
                                    uses: "Used to treat high blood pressure and chest pain. It is in a class of medicines known as non-dihydropyridine calcium channel blockers.", 
                                    sideEffects: "Swollen hands, ankles or feet, headaches.", 
                                    precautions: "You should not use Cardizem if you have very low blood pressure, a serious heart condition such as sick sinus syndrome or AV block (unless you have a pacemaker), or if you have recently had a heart attack and you have a build-up of fluid in your lungs.", 
                                    interactions: "May interact with amiodarone, digoxin, atazanavir, cimetidine, quinidine, St. John's wort, azole antifungals, macrolide antibiotics, rifamycins, buspirone, cyclosporine, sirolimus, statins, anti-seizure drugs, benzodiazepines, caffeine, pseudoephedrine, phenylephrine.", 
                                    notFor: "People with sick sinus syndrome, which is a heart rhythm problem, should not take diltiazem unless they have a working pacemaker.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,
                                    { 
                                      _id: "63",
                                      name: "Diltiazem", 
                                      genericName: "Diltiazem", 
                                      type: "Generic", 
                                      image: "/medicine/DILTIAZEM.jpg", 
                                      description: "A calcium channel blocker. It works by affecting the movement of calcium into the cells of the heart and blood vessels.", 
                                      uses: "Used to treat high blood pressure and chest pain. It is in a class of medicines known as non-dihydropyridine calcium channel blockers.", 
                                      sideEffects: "Swollen hands, ankles or feet, headaches.", 
                                      precautions: "You should not use Cardizem if you have very low blood pressure, a serious heart condition such as sick sinus syndrome or AV block (unless you have a pacemaker), or if you have recently had a heart attack and you have a build-up of fluid in your lungs.", 
                                      interactions: "May interact with amiodarone, digoxin, atazanavir, cimetidine, quinidine, St. John's wort, azole antifungals, macrolide antibiotics, rifamycins, buspirone, cyclosporine, sirolimus, statins, anti-seizure drugs, benzodiazepines, caffeine, pseudoephedrine, phenylephrine.", 
                                      notFor: "People with sick sinus syndrome, which is a heart rhythm problem, should not take diltiazem unless they have a working pacemaker.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "64",
                                    name: "Norvasc", 
                                    genericName: "Amlodipine", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/NORVASC.jpg", 
                                    description: "A type of medicine known as a calcium channel blocker (CCB). It is used to treat high blood pressure (hypertension) and a type of chest pain called angina.", 
                                    uses: "Used to treat high blood pressure (hypertension), and certain types of chest pain (angina) and blocked arteries of the heart (coronary artery disease).", 
                                    sideEffects: "Feeling dizzy. If amlodipine makes you feel dizzy, stop what you're doing and sit or lie down until you feel better.", 
                                    precautions: "Check with your doctor right away if you or your child have pain or tenderness in the upper stomach, pale stools, dark urine, loss of appetite, nausea, vomiting, or yellow eyes or skin.", 
                                    interactions: "May interact with simvastatin, ketoconazole, itraconazole, ritonavir, diltiazem, and cyclosporine.", 
                                    notFor: "You should not take Norvasc if you are allergic to amlodipine.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "65",
                                      name: "Amlodipine", 
                                      genericName: "Amlodipine", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/AMLODIPINE.jpg", 
                                      description: "A type of medicine known as a calcium channel blocker (CCB). It is used to treat high blood pressure (hypertension) and a type of chest pain called angina.", 
                                      uses: "Used to treat high blood pressure (hypertension), and certain types of chest pain (angina) and blocked arteries of the heart (coronary artery disease).", 
                                      sideEffects: "Feeling dizzy. If amlodipine makes you feel dizzy, stop what you're doing and sit or lie down until you feel better.", 
                                      precautions: "Check with your doctor right away if you or your child have pain or tenderness in the upper stomach, pale stools, dark urine, loss of appetite, nausea, vomiting, or yellow eyes or skin.", 
                                      interactions: "May interact with simvastatin, ketoconazole, itraconazole, ritonavir, diltiazem, and cyclosporine.", 
                                      notFor: "You should not take Norvasc if you are allergic to amlodipine.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "66", 
                                    name: "Tenormin", 
                                    genericName: "Atenolol", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/TENORMIN.jpg", 
                                    description: "A beta-blocker that affects the heart and circulation (blood flow through arteries and veins). Tenormin is used to treat angina (chest pain) and hypertension (high blood pressure).", 
                                    uses: "Used to treat high blood pressure (hypertension) and irregular heartbeats (arrhythmia).", 
                                    sideEffects: "Dizziness, faintness, or lightheadedness when getting up suddenly from a lying or sitting position.", 
                                    precautions: "This medicine may cause heart failure in some patients.", 
                                    interactions: "May interact with amlodipine, prednisone, ibuprofen.", 
                                    notFor: "Should not be used if your heart is beating too slow (bradycardia).",
                                     form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store intact ampoules at room temperature. Protect from light.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "67", 
                                      name: "Atenolol", 
                                      genericName: "Atenolol", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/ATENOLOL.jpg", 
                                      description: "A beta-blocker that affects the heart and circulation (blood flow through arteries and veins). Tenormin is used to treat angina (chest pain) and hypertension (high blood pressure).", 
                                      uses: "Used to treat high blood pressure (hypertension) and irregular heartbeats (arrhythmia).", 
                                      sideEffects: "Dizziness, faintness, or lightheadedness when getting up suddenly from a lying or sitting position.", 
                                      precautions: "This medicine may cause heart failure in some patients.", 
                                      interactions: "May interact with amlodipine, prednisone, ibuprofen.", 
                                      notFor: "Should not be used if your heart is beating too slow (bradycardia).",
                                       form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store intact ampoules at room temperature. Protect from light.", 
                                      isOTC: true 
                                      } ,
  
                                    { 
                                    _id: "68",
                                    name: "Sectral", 
                                    genericName: "Acebutolol", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/SECTRAL.jpg", 
                                    description: "A selective, hydrophilic beta-adrenoreceptor blocking agent with mild intrinsic sympathomimetic activity for use in treating patients with hypertension and ventricular arrhythmias.", 
                                    uses: "Used to treat hypertension (high blood pressure) and heart rhythm disorders.", 
                                    sideEffects: "Blurred vision, chest tightness, cold hands or feet, confusion.", 
                                    precautions: "Do not give this medication to anyone else, even if they have the same symptoms as you do.", 
                                    interactions: "May interact with amlodipine, prednisone, ibuprofen.", 
                                    notFor: "You should not use Sectral if you are allergic to it, or if you have a serious heart condition.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store this drug at room temperature between 68°F and 77°F (20°C and 25°C).",
                                     isOTC: true
                                    } ,

                                    { 
                                      _id: "69",
                                      name: "Acebutolol", 
                                      genericName: "Acebutolol", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/ACEBUTOLOL.jpg", 
                                      description: "A selective, hydrophilic beta-adrenoreceptor blocking agent with mild intrinsic sympathomimetic activity for use in treating patients with hypertension and ventricular arrhythmias.", 
                                      uses: "Used to treat hypertension (high blood pressure) and heart rhythm disorders.", 
                                      sideEffects: "Blurred vision, chest tightness, cold hands or feet, confusion.", 
                                      precautions: "Do not give this medication to anyone else, even if they have the same symptoms as you do.", 
                                      interactions: "May interact with amlodipine, prednisone, ibuprofen.", 
                                      notFor: "You should not use Sectral if you are allergic to it, or if you have a serious heart condition.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store this drug at room temperature between 68°F and 77°F (20°C and 25°C).",
                                       isOTC: true
                                      } ,

                                    { 
                                    _id: "70",
                                    name: "Trandate", 
                                    genericName: "Labetalol", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/TRANDATE.jpg", 
                                    description: "Belongs to a group of medicines called beta blockers. Trandate works by causing the heart to beat more slowly and with less force.", 
                                    uses: "Used to treat high blood pressure (hypertension), including high blood pressure in pregnancy.", 
                                    sideEffects: "tingling scalp or skin, tiredness, headache, nausea, upset stomach, stuffy nose.", 
                                    precautions: "This medicine may cause heart failure in some patients.", 
                                    interactions: "May interact with diabetes medication, heart medication, medicine for asthma or other breathing disorders, cold medicines, stimulant medicines, or diet pills.", 
                                    notFor: "People who are allergic to labetalol hydrochloride.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at room temperature or under refrigeration (2-30°C [36-86°F]).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "71",
                                      name: "Labetalol", 
                                      genericName: "Labetalol", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/LABETALOL.jpg", 
                                      description: "Belongs to a group of medicines called beta blockers. Trandate works by causing the heart to beat more slowly and with less force.", 
                                      uses: "Used to treat high blood pressure (hypertension), including high blood pressure in pregnancy.", 
                                      sideEffects: "tingling scalp or skin, tiredness, headache, nausea, upset stomach, stuffy nose.", 
                                      precautions: "This medicine may cause heart failure in some patients.", 
                                      interactions: "May interact with diabetes medication, heart medication, medicine for asthma or other breathing disorders, cold medicines, stimulant medicines, or diet pills.", 
                                      notFor: "People who are allergic to labetalol hydrochloride.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at room temperature or under refrigeration (2-30°C [36-86°F]).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "72",
                                    name: "Micardis", 
                                    genericName: "Telmisartan", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/MICARDIS.jpg", 
                                    description: "An angiotensin II receptor blocker (sometimes called an ARB). Telmisartan keeps blood vessels from narrowing, which lowers blood pressure and improves blood flow.",
                                     uses: "Used to treat essential hypertension (high blood pressure) in adults.", 
                                    sideEffects: "sinus pain and congestion, back pain, diarrhea, sore throat.", 
                                    precautions: "Tell your doctor if you are breast-feeding. you should know that telmisartan may cause drowsiness, dizziness, lightheadedness, or fainting.", 
                                    interactions: "May interact with prednisone, ibuprofen, lisinopril.", 
                                    notFor: "Do not use if you are pregnant.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at temperatures not exceeding 30°C.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "73",
                                      name: "Telmisartan", 
                                      genericName: "Telmisartan", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/TELMISARTAN.jpg", 
                                      description: "An angiotensin II receptor blocker (sometimes called an ARB). Telmisartan keeps blood vessels from narrowing, which lowers blood pressure and improves blood flow.",
                                       uses: "Used to treat essential hypertension (high blood pressure) in adults.", 
                                      sideEffects: "sinus pain and congestion, back pain, diarrhea, sore throat.", 
                                      precautions: "Tell your doctor if you are breast-feeding. you should know that telmisartan may cause drowsiness, dizziness, lightheadedness, or fainting.", 
                                      interactions: "May interact with prednisone, ibuprofen, lisinopril.", 
                                      notFor: "Do not use if you are pregnant.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at temperatures not exceeding 30°C.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "74",
                                    name: "Avapro", 
                                    genericName: "Irbesartan", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/AVAPRO.jpg", 
                                    description: "This medicine contains the active ingredient irbesartan.", 
                                    uses: "Used to treat high blood pressure and is also used in the treatment of kidney disease in patients with high blood pressure and type 2 diabetes.",
                                    sideEffects: "dizziness or light- headedness.", 
                                    precautions: "Tell your doctor if you have or have ever had heart failure, or kidney disease.", 
                                    interactions: "May interact with diuretics (water pills), digoxin, or blood thinners.", 
                                    notFor: "People should not use Avapro if they are allergic to irbesartan.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "75",
                                      name: "Irbesartan", 
                                      genericName: "Irbesartan", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/IRBESARTAN.jpg", 
                                      description: "This medicine contains the active ingredient irbesartan.", 
                                      uses: "Used to treat high blood pressure and is also used in the treatment of kidney disease in patients with high blood pressure and type 2 diabetes.",
                                      sideEffects: "dizziness or light- headedness.", 
                                      precautions: "Tell your doctor if you have or have ever had heart failure, or kidney disease.", 
                                      interactions: "May interact with diuretics (water pills), digoxin, or blood thinners.", 
                                      notFor: "People should not use Avapro if they are allergic to irbesartan.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "76",
                                    name: "Cozaar", 
                                    genericName: "Losartan", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/COZAAR.jpg", 
                                    description: "The first of a new class of agents for the treatment of hypertension, is an angiotensin II receptor (type AT1) antagonist.", 
                                    uses: "Used to lower blood pressure. It's also shown to protect against stroke in certain people.", 
                                    sideEffects: "Kidney damage and very high potassium levels.", 
                                    precautions: "Tell your doctor if you have or have ever had heart failure or kidney or liver disease.", 
                                    interactions: "May interact with ibuprofen (Advil, Motrin).", 
                                    notFor: "People with diabetes.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "77",
                                      name: "Losartan", 
                                      genericName: "Losartan", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/LOSARTAN.jpg", 
                                      description: "The first of a new class of agents for the treatment of hypertension, is an angiotensin II receptor (type AT1) antagonist.", 
                                      uses: "Used to lower blood pressure. It's also shown to protect against stroke in certain people.", 
                                      sideEffects: "Kidney damage and very high potassium levels.", 
                                      precautions: "Tell your doctor if you have or have ever had heart failure or kidney or liver disease.", 
                                      interactions: "May interact with ibuprofen (Advil, Motrin).", 
                                      notFor: "People with diabetes.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "78",
                                    name: "Catapres", 
                                    genericName: "Clonidine", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/CATAPRES.jpg", 
                                    description: "Medicine that is used to treat high blood pressure (hypertension).", 
                                    uses: "Used to treat high blood pressure.", 
                                    sideEffects: "Feeling sleepy, tired and weak. Make sure you rest and allow your body time to get used to clonidine.", 
                                    precautions: "If you develop a skin rash, hives, or any allergic reaction to this medicine, stop taking the medicine and check with your doctor as soon as possible.", 
                                    interactions: "May interact with muscle relaxers, or medicines for anxiety, depression, or seizures.", 
                                    notFor: "People have ever had an allergic reaction to clonidine hydrochloride or any of the ingredients listed at the end of the CMI.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at 25°C (77°F); excursions permitted to 15°-30°C (59°-86°F).", 
                                    isOTC: true 
                                    },
                                    
                                    { 
                                      _id: "79",
                                      name: "Clonidine", 
                                      genericName: "Clonidine", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CLONIDINE.jpg", 
                                      description: "Medicine that is used to treat high blood pressure (hypertension).", 
                                      uses: "Used to treat high blood pressure.", 
                                      sideEffects: "Feeling sleepy, tired and weak. Make sure you rest and allow your body time to get used to clonidine.", 
                                      precautions: "If you develop a skin rash, hives, or any allergic reaction to this medicine, stop taking the medicine and check with your doctor as soon as possible.", 
                                      interactions: "May interact with muscle relaxers, or medicines for anxiety, depression, or seizures.", 
                                      notFor: "People have ever had an allergic reaction to clonidine hydrochloride or any of the ingredients listed at the end of the CMI.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at 25°C (77°F); excursions permitted to 15°-30°C (59°-86°F).", 
                                      isOTC: true 
                                      },
                                      

                                    {
                                    _id: "80", 
                                    name: "Vancocin", 
                                    genericName: "Vancomycin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/VANCOCIN.jpg", 
                                    description: "A class of medications called glycopeptide antibiotics. It works by killling bacteria in the intestines.", 
                                    uses: "Used to treat serious infections for which other medicines may not work.",
                                     sideEffects: "Continuing ringing or buzzing or other unexplained noise in the ears, and cough or hoarseness.", 
                                    precautions: "This medicine may cause diarrhea, and in some cases it can be severe. It may occur 2 months or more after you stop using this medicine.", 
                                    interactions: "May interact with Amikacin, aspirin, pentamicin, piperacillin, tobramycin.",
                                    notFor: "People with inflammatory bowel disease (including Crohn's disease or ulcerative colitis), kidney disease, or hearing loss.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store vancomycin hydrochloride capsules between 68°F and 77°F (20°C and 25°C).", 
                                    isOTC: true 
                                    } ,

                                    {
                                      _id: "81", 
                                      name: "Vancomycin", 
                                      genericName: "Vancomycin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/VANCOMYCIN.jpg", 
                                      description: "A class of medications called glycopeptide antibiotics. It works by killling bacteria in the intestines.", 
                                      uses: "Used to treat serious infections for which other medicines may not work.",
                                       sideEffects: "Continuing ringing or buzzing or other unexplained noise in the ears, and cough or hoarseness.", 
                                      precautions: "This medicine may cause diarrhea, and in some cases it can be severe. It may occur 2 months or more after you stop using this medicine.", 
                                      interactions: "May interact with Amikacin, aspirin, pentamicin, piperacillin, tobramycin.",
                                      notFor: "People with inflammatory bowel disease (including Crohn's disease or ulcerative colitis), kidney disease, or hearing loss.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store vancomycin hydrochloride capsules between 68°F and 77°F (20°C and 25°C).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "82",
                                    name: "Garamycin", 
                                    genericName: "Gentamicin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/GARAMYCIN.jpg", 
                                    description: "A type of antibiotic that treats infections caused by bacteria.", 
                                    uses: "Used to treat certain kinds of bacterial infections.", 
                                    sideEffects: "Respiratory depression, lethargy, confusion, depression, visual disturbances.",
                                     precautions: "Tell your doctor if you have or have ever had burning or tingling in the hands, arms, feet, or legs; muscle twitching or weakness; or seizures.", 
                                    interactions: "May interact with Aminohippuric acid.", 
                                    notFor: "People with kidney problems.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store vials of gentamicin injection solution at room temperature, 68°F to 77°F (20°C to 25°C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "83",
                                      name: "Gentamicin", 
                                      genericName: "Gentamicin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/GENTAMICIN.jpg", 
                                      description: "A type of antibiotic that treats infections caused by bacteria.", 
                                      uses: "Used to treat certain kinds of bacterial infections.", 
                                      sideEffects: "Respiratory depression, lethargy, confusion, depression, visual disturbances.",
                                       precautions: "Tell your doctor if you have or have ever had burning or tingling in the hands, arms, feet, or legs; muscle twitching or weakness; or seizures.", 
                                      interactions: "May interact with Aminohippuric acid.", 
                                      notFor: "People with kidney problems.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store vials of gentamicin injection solution at room temperature, 68°F to 77°F (20°C to 25°C).", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "84",
                                    name: "Cleocin", 
                                    genericName: "Clindamycin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/CLEOCIN.jpg", 
                                    description: "Treats infections caused by bacteria. It belongs to a group of medications called antibiotics.", 
                                    uses: "Used to treat many different serious bacterial infections, such as strep throat and skin infections.", 
                                    sideEffects: "Nausea, diarrhea, and a metallic taste in the mouth.", 
                                    precautions: " Tell your doctor if you have or have ever had asthma, allergies, eczema (sensitive skin that often becomes itchy or irritated) or kidney or liver disease.", 
                                    interactions: "May interact with Includes estradiol, carbamazepine, vancomycin.",
                                    notFor: "People with a history of pseudomembranous or ulcerative colitis should not take.",
                                     form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at controlled room temperature 20° to 25°C (68° to 77°F).",
                                     isOTC: true 
                                    } ,

                                    { 
                                      _id: "85",
                                      name: "Clindamycin", 
                                      genericName: "Clindamycin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CLINDAMYCIN.jpg", 
                                      description: "Treats infections caused by bacteria. It belongs to a group of medications called antibiotics.", 
                                      uses: "Used to treat many different serious bacterial infections, such as strep throat and skin infections.", 
                                      sideEffects: "Nausea, diarrhea, and a metallic taste in the mouth.", 
                                      precautions: " Tell your doctor if you have or have ever had asthma, allergies, eczema (sensitive skin that often becomes itchy or irritated) or kidney or liver disease.", 
                                      interactions: "May interact with Includes estradiol, carbamazepine, vancomycin.",
                                      notFor: "People with a history of pseudomembranous or ulcerative colitis should not take.",
                                       form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at controlled room temperature 20° to 25°C (68° to 77°F).",
                                       isOTC: true 
                                      } ,
                                  
                                    { 
                                    _id: "86",
                                    name: "Zithromax", 
                                    genericName: "Azithromycin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/ZITHROMAX.jpg", 
                                    description: "A macrolide antibacterial drug indicated for mild to moderate infections caused by designated, susceptible bacteria.", 
                                    uses: "Used to treats infections caused by bacteria.", 
                                    sideEffects: "Skin rash, itching, hives, swelling of the face, eyes, lips, tongue, arms, or legs, trouble swallowing or breathing. ", 
                                    precautions: "This medicine may increase the risk of serious heart or blood vessel problems.", 
                                    interactions: "May interact with atorvastatin, sertraline, trazodone.", 
                                    notFor: "People have liver or kidney problems, and heart problems, including irregular heartbeats (arrhythmia).", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored between 15° to 30°C (59° to 86°F).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "87",
                                      name: "Azithromycin", 
                                      genericName: "Azithromycin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/AZITHROMYCIN.jpg", 
                                      description: "A macrolide antibacterial drug indicated for mild to moderate infections caused by designated, susceptible bacteria.", 
                                      uses: "Used to treats infections caused by bacteria.", 
                                      sideEffects: "Skin rash, itching, hives, swelling of the face, eyes, lips, tongue, arms, or legs, trouble swallowing or breathing. ", 
                                      precautions: "This medicine may increase the risk of serious heart or blood vessel problems.", 
                                      interactions: "May interact with atorvastatin, sertraline, trazodone.", 
                                      notFor: "People have liver or kidney problems, and heart problems, including irregular heartbeats (arrhythmia).", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored between 15° to 30°C (59° to 86°F).", 
                                      isOTC: true 
                                      } ,
                                      
                                    { 
                                    _id:"88",
                                    name: "Rocephin", 
                                    genericName: "Ceftriaxone", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/ROCEPHIN.jpg", 
                                    description: "A sterile, semisynthetic, broad-spectrum cephalosporin antibiotic for intravenous or intramuscular administration.", 
                                    uses: "Used to treat many kinds of bacterial infections, including severe or life-threatening forms such as meningitis.", 
                                    sideEffects: "Injection site reactions (swelling, redness, pain, a hard lump, or soreness), loss of appetite.", 
                                    precautions: "Do not take any medicine or give medicine to your child to treat diarrhea without first checking with your doctor.", 
                                    interactions: "May interact with Antibiotics (dapsone, sulfonamides, nitrofurantoin, paraaminosalicylic acid.", 
                                    notFor: "Patients with known hypersensitivity to ceftriaxone, any of its excipients or to any other cephalosporin.",
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature 77°F (25°C) or below and protected from light.",
                                     isOTC: true 
                                    } ,

                                    { 
                                      _id:"89",
                                      name: "Ceftriaxone", 
                                      genericName: "Ceftriaxone", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CEFTRIAXONE.jpg", 
                                      description: "A sterile, semisynthetic, broad-spectrum cephalosporin antibiotic for intravenous or intramuscular administration.", 
                                      uses: "Used to treat many kinds of bacterial infections, including severe or life-threatening forms such as meningitis.", 
                                      sideEffects: "Injection site reactions (swelling, redness, pain, a hard lump, or soreness), loss of appetite.", 
                                      precautions: "Do not take any medicine or give medicine to your child to treat diarrhea without first checking with your doctor.", 
                                      interactions: "May interact with Antibiotics (dapsone, sulfonamides, nitrofurantoin, paraaminosalicylic acid.", 
                                      notFor: "Patients with known hypersensitivity to ceftriaxone, any of its excipients or to any other cephalosporin.",
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature 77°F (25°C) or below and protected from light.",
                                       isOTC: true 
                                      } ,

                                    { 
                                    _id: "90",
                                    name: "Suprax", 
                                    genericName: "Cefixime", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/SUPRAX.jpg", 
                                    description: "An antibiotic used to treat certain infections caused by bacteria. It works by killing the bacteria that cause the infection.", 
                                    uses: "Used to treat bacterial infections in many different parts of the body.", 
                                    sideEffects: "Trouble breathing, trouble swallowing, or any swelling of your hands, face, or mouth.", 
                                    precautions: "Do not take other medicines unless they have been discussed with your doctor.", 
                                    interactions: "May interact with furosemide, warfarin, nifedipine.", 
                                    notFor: "People who are allergic to cefixime or to other cephalosporin antibiotics",
                                     form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored in the refrigerator or at room temperature, between 36 F and 77 F (2 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "91",
                                      name: "Cefixime", 
                                      genericName: "Cefixime", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CEFIXIME.jpg", 
                                      description: "An antibiotic used to treat certain infections caused by bacteria. It works by killing the bacteria that cause the infection.", 
                                      uses: "Used to treat bacterial infections in many different parts of the body.", 
                                      sideEffects: "Trouble breathing, trouble swallowing, or any swelling of your hands, face, or mouth.", 
                                      precautions: "Do not take other medicines unless they have been discussed with your doctor.", 
                                      interactions: "May interact with furosemide, warfarin, nifedipine.", 
                                      notFor: "People who are allergic to cefixime or to other cephalosporin antibiotics",
                                       form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored in the refrigerator or at room temperature, between 36 F and 77 F (2 C to 25 C).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "92",
                                    name: "Zinacef", 
                                    genericName: "Cefuroxime", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/ZINACEF.jpg", 
                                    description: "An oral prodrug of the bactericidal cephalosporin antibiotic cefuroxime.",
                                     uses: "Used to treat a wide variety of bacterial infections.", 
                                    sideEffects: "Candida overgrowth, eosinophilia, headache, dizziness, gastrointestinal disturbances, and transient liver enzyme elevations.", 
                                    precautions: "Do not take any medicine or give medicine to your child to treat diarrhea without first checking with your doctor.", 
                                    interactions: "May interact with antacids such as aluminum hydroxide, calcium carbonate, magnesium hydroxide, or sodium bicarbonate.", 
                                    notFor: "Patients with known allergy to the cephalosporin group of antibiotics.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the tablets in a closed container at room temperature, away from heat, moisture, and direct light. Keep from freezing.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "93",
                                      name: "Cefuroxime", 
                                      genericName: "Cefuroxime", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CEFUROXIME.jpg", 
                                      description: "An oral prodrug of the bactericidal cephalosporin antibiotic cefuroxime.",
                                       uses: "Used to treat a wide variety of bacterial infections.", 
                                      sideEffects: "Candida overgrowth, eosinophilia, headache, dizziness, gastrointestinal disturbances, and transient liver enzyme elevations.", 
                                      precautions: "Do not take any medicine or give medicine to your child to treat diarrhea without first checking with your doctor.", 
                                      interactions: "May interact with antacids such as aluminum hydroxide, calcium carbonate, magnesium hydroxide, or sodium bicarbonate.", 
                                      notFor: "Patients with known allergy to the cephalosporin group of antibiotics.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store the tablets in a closed container at room temperature, away from heat, moisture, and direct light. Keep from freezing.", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "94",
                                    name: "Keflex", 
                                    genericName: "Cephalexin",
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/KEFLEX.jpg", 
                                    description: "It belongs to the class of medicines known as cephalosporin antibiotics. It works by killing bacteria or preventing their growth.", 
                                    uses: "Used to treat bacterial infections in many different parts of the body.",
                                     sideEffects: "Abdominal or stomach pain blistering, peeling, or loosening of the skin.", 
                                    precautions: "Do not take other medicines unless they have been discussed with your doctor.", 
                                    interactions: "May interact with certain medications and supplements, such as metformin, warfarin, and zinc.", 
                                    notFor: "People with kidney problems.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light. Keep from freezing.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "95",
                                      name: "Cephalexin", 
                                      genericName: "Cephalexin",
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CEFALEXIN.jpg", 
                                      description: "It belongs to the class of medicines known as cephalosporin antibiotics. It works by killing bacteria or preventing their growth.", 
                                      uses: "Used to treat bacterial infections in many different parts of the body.",
                                       sideEffects: "Abdominal or stomach pain blistering, peeling, or loosening of the skin.", 
                                      precautions: "Do not take other medicines unless they have been discussed with your doctor.", 
                                      interactions: "May interact with certain medications and supplements, such as metformin, warfarin, and zinc.", 
                                      notFor: "People with kidney problems.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light. Keep from freezing.", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "96",
                                    name: "Cloxapen", 
                                    genericName: "Cloxacillin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/CLOXAPEN.jpg", 
                                    description: "A type of penicillin antibiotic. It works by stopping the growth of bacteria.", 
                                    uses: "Used to treat a wide variety of bacterial infections.", 
                                    sideEffects: "Upset stomach, nausea, vomiting, diarrhea, gas, and mouth sores.",
                                    precautions: "This product may contain inactive ingredients, which can cause allergic reactions or other problems.", 
                                    interactions: "May interact with fusidic acid, methotrexate, tetracyclines, warfarin, khat, guar gum.", 
                                    notFor: "Patient with history of allergy.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the capsules at room temperature away from light and moisture.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "97",
                                      name: "Cloxacillin", 
                                      genericName: "Cloxacillin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CLOXACILLIN.jpg", 
                                      description: "A type of penicillin antibiotic. It works by stopping the growth of bacteria.", 
                                      uses: "Used to treat a wide variety of bacterial infections.", 
                                      sideEffects: "Upset stomach, nausea, vomiting, diarrhea, gas, and mouth sores.",
                                      precautions: "This product may contain inactive ingredients, which can cause allergic reactions or other problems.", 
                                      interactions: "May interact with fusidic acid, methotrexate, tetracyclines, warfarin, khat, guar gum.", 
                                      notFor: "Patient with history of allergy.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store the capsules at room temperature away from light and moisture.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "98",
                                    name: "Omnipen", 
                                    genericName: "Ampicillin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/OMNIPEN.jpg", 
                                    description: "It kills certain bacteria by preventing them from being able to create their cell wall.", 
                                    uses: "Used to treat bacterial infections.", 
                                    sideEffects: "Diarrhea, nausea, vomiting, or rash.", 
                                    precautions: "Do not use ampicillin unless it has been prescribed to you by a healthcare provider.", 
                                    interactions: "May interact with anticoagulants like warfarin.",
                                    notFor: "People who are allergic to any of the following should not use ampicillin.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,


                                    { 
                                      _id: "99",
                                      name: "Ampicillim", 
                                      genericName: "Ampicillin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/AMPICILLIN.jpg", 
                                      description: "It kills certain bacteria by preventing them from being able to create their cell wall.", 
                                      uses: "Used to treat bacterial infections.", 
                                      sideEffects: "Diarrhea, nausea, vomiting, or rash.", 
                                      precautions: "Do not use ampicillin unless it has been prescribed to you by a healthcare provider.", 
                                      interactions: "May interact with anticoagulants like warfarin.",
                                      notFor: "People who are allergic to any of the following should not use ampicillin.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "100",
                                    name: "Oxacillin", 
                                    genericName: "Oxacillin", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/OXACILLIN.jpg", 
                                    description: "A penicillin-type antibiotic indicated in the treatment of infections caused by penicillinase-producing staphylococci which have demonstrated susceptibility to the drug", uses: "Used to treat infections caused by certain bacteria.", 
                                    sideEffects: "Hives, rash, itching, fever, that may occur along with stomach, muscle, or joint pain.", 
                                    precautions: "Before using oxacillin, tell your doctor or pharmacist if you are allergic to it; or to other antibiotics.", 
                                    interactions: "May interact with tetracycline and probenecid.", 
                                    notFor: "People with a history of a hypersensitivity (anaphylactic) reaction to any penicillin.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the tablets at room temperature and away from excess heat and moisture.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                    _id: "101",
                                    name: "Ciprofloxacin", 
                                    genericName: "Ciprofloxacin", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/CIPROFLOXACIN.jpg", 
                                    description: "Ciprofloxacin belongs to the class of drugs known as quinolone antibiotics. It works by killing bacteria or preventing their growth.", 
                                    uses: "Used to treat bacterial infections in many different parts of the body.",
                                     sideEffects: "Redness or discomfort in the eye, and bad taste in the mouth.", 
                                    precautions: "This medicine may increase your risk for aortic aneurysm (bulge in the wall of the largest artery).", 
                                    interactions: "May interact with warfarin, theophylline or aminophylline for asthma, and tizanidine a medicine used for muscle stiffness.", 
                                    notFor: "People have problems with kidneys and diabetes.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored at room temperature, which is generally between 68 F to 77 F (20 C to 25 C) for 14 days.", 
                                    isOTC: true 
                                    } ,

                                    {
                                    _id: "102",
                                    name: "Dalmane", 
                                    genericName: "Flurazepam", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/DALMANE.jpg", 
                                    description: "A drug which is a benzodiazepine derivative.", 
                                    uses: "Used effectively in patients with recurring insomnia or poor sleeping habits, and in acute or chronic medical situations requiring restful sleep.", 
                                    sideEffects: "Upset stomach, dry mouth, and drowsiness.", 
                                    precautions: "Should not be taken for longer than 7 to 10 consecutive days unless otherwise directed by your doctor.", 
                                    interactions: "May interact with hydroxyzine, loratadine.", 
                                    notFor: "Older adults should not usually take flurazepam because it is not as safe as other medications that can be used to treat the same condition.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored in a dry place with a recommended maximum storage temperature of 25° C.", 
                                    isOTC: true 
                                    } ,

                                    {
                                      _id: "103",
                                      name: "Fluraxepam", 
                                      genericName: "Flurazepam", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/FLURAZEPAM.jpg", 
                                      description: "A drug which is a benzodiazepine derivative.", 
                                      uses: "Used effectively in patients with recurring insomnia or poor sleeping habits, and in acute or chronic medical situations requiring restful sleep.", 
                                      sideEffects: "Upset stomach, dry mouth, and drowsiness.", 
                                      precautions: "Should not be taken for longer than 7 to 10 consecutive days unless otherwise directed by your doctor.", 
                                      interactions: "May interact with hydroxyzine, loratadine.", 
                                      notFor: "Older adults should not usually take flurazepam because it is not as safe as other medications that can be used to treat the same condition.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Stored in a dry place with a recommended maximum storage temperature of 25° C.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "104",
                                    name: "Indocin", 
                                    genericName: "Indomethacin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/INDOCIN.jpg", 
                                    description: "Prescription nonsteroidal anti-inflammatory drug (NSAID) that reduces inflammation and relieves pain.", 
                                    uses: "Used to treat mild to moderate acute pain and relieve symptoms of arthritis.",
                                     sideEffects: "Stomach upset, nausea, or ulcers.", 
                                    precautions: "This product may contain inactive ingredients, which can cause allergic reactions or other problems.", 
                                    interactions: "May interact with Antacids, aspirin and aspirin-like medications.",
                                    notFor: " Do not take indomethacin right before or after a heart surgery called coronary artery bypass graft.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at 20° to 25°C (68° to 77°F).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "105",
                                      name: "Indomethacin", 
                                      genericName: "Indomethacin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/INDOMETHACIN.jpg", 
                                      description: "Prescription nonsteroidal anti-inflammatory drug (NSAID) that reduces inflammation and relieves pain.", 
                                      uses: "Used to treat mild to moderate acute pain and relieve symptoms of arthritis.",
                                       sideEffects: "Stomach upset, nausea, or ulcers.", 
                                      precautions: "This product may contain inactive ingredients, which can cause allergic reactions or other problems.", 
                                      interactions: "May interact with Antacids, aspirin and aspirin-like medications.",
                                      notFor: " Do not take indomethacin right before or after a heart surgery called coronary artery bypass graft.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at 20° to 25°C (68° to 77°F).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id:"106",
                                    name: "Toradol", 
                                    genericName: "Ketorolac", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/TORADOL.jpg", 
                                    description: "A widely used prescription nonsteroidal anti-inflammatory drug (NSAID).", 
                                    uses: "Used to relieve pain and reduce inflammation (swelling and soreness) that may occur surgery.", 
                                    sideEffects: "Stomach pain, indigestion, and nausea.", 
                                    precautions: "You should not use Toradol if you have any active or recent bleeding (include bleeding inside your body), a head injury, a stomach ulcer, severe kidney disease, a bleeding or blood clotting disorder.", 
                                    interactions: "May interact with amlodipine, prednisone, ibuprofen.", 
                                    notFor: "Patients with renal disease or renal failure.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light.", 
                                    isOTC: true 
                                    }, 

                                    { 
                                      _id:"107",
                                      name: "Ketorolac", 
                                      genericName: "Ketorolac", 
                                      type: "Gender", // "Generic" or "Branded" 
                                      image: "/medicine/KETOROLAC.jpg", 
                                      description: "A widely used prescription nonsteroidal anti-inflammatory drug (NSAID).", 
                                      uses: "Used to relieve pain and reduce inflammation (swelling and soreness) that may occur surgery.", 
                                      sideEffects: "Stomach pain, indigestion, and nausea.", 
                                      precautions: "You should not use Toradol if you have any active or recent bleeding (include bleeding inside your body), a head injury, a stomach ulcer, severe kidney disease, a bleeding or blood clotting disorder.", 
                                      interactions: "May interact with amlodipine, prednisone, ibuprofen.", 
                                      notFor: "Patients with renal disease or renal failure.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light.", 
                                      isOTC: true 
                                      }, 

                                    { 
                                    _id: "108",
                                    name: "Prilosec", 
                                    genericName: "Omeprazole", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/PRISOLEC.jpg", 
                                    description: "Can ease heartburn, while the prescription version can treat gastroesophageal reflux disease (GERD) and other conditions involving too much stomach acid.",
                                     uses: "Used to treat gastric and duodenal ulcers, erosive esophagitis, and gastroesophageal reflux disease.", 
                                    sideEffects: "Headaches and stomach-related side effects, such as nausea, gas, or diarrhea.", 
                                    precautions: "Taking Prilosec long-term may cause you to develop stomach growths called fundic gland polyps.", 
                                    interactions: "If you take Prilosec, know that it can potentially interact with warfarin, citalopram (Celexa), and digoxin.", 
                                    notFor: "People have ever had an allergic reaction to prilosec or any other medicine.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light. Keep from freezing.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "109",
                                      name: "Omeprazole", 
                                      genericName: "Omeprazole", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/OMEPRAZOLE.jpg", 
                                      description: "Can ease heartburn, while the prescription version can treat gastroesophageal reflux disease (GERD) and other conditions involving too much stomach acid.",
                                       uses: "Used to treat gastric and duodenal ulcers, erosive esophagitis, and gastroesophageal reflux disease.", 
                                      sideEffects: "Headaches and stomach-related side effects, such as nausea, gas, or diarrhea.", 
                                      precautions: "Taking Prilosec long-term may cause you to develop stomach growths called fundic gland polyps.", 
                                      interactions: "If you take Prilosec, know that it can potentially interact with warfarin, citalopram (Celexa), and digoxin.", 
                                      notFor: "People have ever had an allergic reaction to prilosec or any other medicine.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light. Keep from freezing.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "110",
                                    name: "Claritin", 
                                    genericName: "Loratadine", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/CLARITIN.jpg", 
                                    description: "An antihistamine used to treat the symptoms of allergies, such as sneezing, watery eyes, and runny nose.", 
                                    uses: "Used to treat sneezing, runny nose, watery eyes, hives, skin rash, hay fever, itching, and other cold or allergy symptoms.", 
                                    sideEffects: "Headache, dizziness, and digestive side effects such as nausea.", 
                                    precautions: " When using this product do not take more than directed.", 
                                    interactions: " Claritin interacts with alcohol, other oral antihistamines, and medications that cause drowsiness, such as muscle relaxers.", 
                                    notFor: "Claritin is generally avoided during pregnancy and nursing. Pregnant women may take Claritin only if it is clearly needed.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc.
                                    storage: "Store between 20º to 25º C (68º to 77º F). Protect from excessive moisture.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "111",
                                      name: "Loratadine", 
                                      genericName: "Loratadine", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/LORATADINE.jpg", 
                                      description: "An antihistamine used to treat the symptoms of allergies, such as sneezing, watery eyes, and runny nose.", 
                                      uses: "Used to treat sneezing, runny nose, watery eyes, hives, skin rash, hay fever, itching, and other cold or allergy symptoms.", 
                                      sideEffects: "Headache, dizziness, and digestive side effects such as nausea.", 
                                      precautions: " When using this product do not take more than directed.", 
                                      interactions: " Claritin interacts with alcohol, other oral antihistamines, and medications that cause drowsiness, such as muscle relaxers.", 
                                      notFor: "Claritin is generally avoided during pregnancy and nursing. Pregnant women may take Claritin only if it is clearly needed.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc.
                                      storage: "Store between 20º to 25º C (68º to 77º F). Protect from excessive moisture.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "112",
                                    name: "Celecoxib", 
                                    genericName: "Celecoxib", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/CELECOXIB.jpg", 
                                    description: "A medication that treats mild to moderate pain and inflammation.",
                                     uses: "Used to relieve some symptoms caused by arthritis, such as inflammation, swelling, stiffness, and joint pain.", 
                                    sideEffects: "Stomach upset, upper respiratory infection, and diarrhea. Gas, abdominal pain, and swelling are also possible.", 
                                    precautions: "This medication can cause serious ulcers and bleeding in the stomach. It can happen with no warning.", 
                                    interactions: "May interact with anticoagulants like warfarin.", 
                                    notFor: "Should not take this medicine if you already have bleeding in your stomach or intestines.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Stored in a refrigerator and used within 6 hours.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                    _id: "113",
                                    name: "Amoxil", 
                                    genericName: "Amoxicillin", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/AMOXIL.jpg", 
                                    description: "An antibiotic that is used for infections caused by certain bacteria.",
                                     uses: "Use to treat the infections of the ears, nose, throat, urinary tract, and skin.", 
                                     sideEffects: "Can cause a severe allergic reaction, trouble breathing. swelling of your throat or tongue.", 
                                    precautions: "Do not use Amoxil if you are allergic to amoxicillin or to any other penicillin antibiotic.", 
                                    interactions: "Amoxil interacts with medications like warfarin, allopurinol, and probenecid.", 
                                    notFor: "Amoxil is not suitable for everyone. Like people have liver or kidney problems.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store in a dry place at temperatures not exceeding 25°C.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "114",
                                      name: "Amoxicillin", 
                                      genericName: "Amoxicillin", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/AMOXICILLIN.jpg", 
                                      description: "An antibiotic that is used for infections caused by certain bacteria.",
                                       uses: "Use to treat the infections of the ears, nose, throat, urinary tract, and skin.", 
                                       sideEffects: "Can cause a severe allergic reaction, trouble breathing. swelling of your throat or tongue.", 
                                      precautions: "Do not use Amoxil if you are allergic to amoxicillin or to any other penicillin antibiotic.", 
                                      interactions: "Amoxil interacts with medications like warfarin, allopurinol, and probenecid.", 
                                      notFor: "Amoxil is not suitable for everyone. Like people have liver or kidney problems.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store in a dry place at temperatures not exceeding 25°C.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "115",
                                    name: "Clovix", 
                                    genericName: "Clopidogrel", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/CLOVIX.jpg", 
                                    description: "CLOVIX 75 belongs to a group of medicines called anti-platelet medicines.",
                                    uses: "To prevent blood clots forming in hardened blood vessels (a process known as atherothrombosis) which can lead to events such as stroke, heart attack or death.", sideEffects: "Stomach ache, diarrhoea, nausea (feeling sick), and indigestion.",
                                     precautions: "You may need to stop using this medicine at least 5 days before a surgery, medical procedure, or dental work.", 
                                    interactions: "May interact with Antiplatelet agents (such as eptifibatide, ticlopidine, tirofiban).", 
                                    notFor: "If you have recently been injured and if you have or have ever had liver or kidney disease or any condition that may cause bleeding, including stomach problems such as ulcers.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store clopidogrel at room temperature near 77°F (25°C).", 
                                    isOTC: true 
                                    } 
                                    ,
                                    { 
                                      _id: "116",
                                      name: "Clopidogrel", 
                                      genericName: "Clopidogrel", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/CLOPEDOGREL.jpg", 
                                      description: "CLOVIX 75 belongs to a group of medicines called anti-platelet medicines.",
                                      uses: "To prevent blood clots forming in hardened blood vessels (a process known as atherothrombosis) which can lead to events such as stroke, heart attack or death.", sideEffects: "Stomach ache, diarrhoea, nausea (feeling sick), and indigestion.",
                                       precautions: "You may need to stop using this medicine at least 5 days before a surgery, medical procedure, or dental work.", 
                                      interactions: "May interact with Antiplatelet agents (such as eptifibatide, ticlopidine, tirofiban).", 
                                      notFor: "If you have recently been injured and if you have or have ever had liver or kidney disease or any condition that may cause bleeding, including stomach problems such as ulcers.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store clopidogrel at room temperature near 77°F (25°C).", 
                                      isOTC: true 
                                      } ,
  

                                    { 
                                    _id: "117",
                                    name: "Bonamine", 
                                    genericName: "Meclizine", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/BONAMINE.jpg", 
                                    description: "Indicated for the prevention and relief of nausea, dizziness and vomiting associated with motion sickness.", 
                                    uses: "Commonly used to prevent or treat motion sickness and treat vertigo.",
                                     sideEffects: "Drowsiness, dizziness, and headaches.", 
                                    precautions: "This medicine may cause some people to become drowsy or less alert than they are normally.", 
                                    interactions: "Meclizine can interact with sleep medications, benzodiazepines, and allergy medications like Benadryl.", 
                                    notFor: "Persons with known hypersensitivity to meclizine hydrochloride.",
                                     form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store this medication at room temperature, protect it from light and moisture, and keep it ut of the reach of children.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "118",
                                      name: "Meclizine", 
                                      genericName: "Meclizine", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/MECLIZINE.jpg", 
                                      description: "Indicated for the prevention and relief of nausea, dizziness and vomiting associated with motion sickness.", 
                                      uses: "Commonly used to prevent or treat motion sickness and treat vertigo.",
                                       sideEffects: "Drowsiness, dizziness, and headaches.", 
                                      precautions: "This medicine may cause some people to become drowsy or less alert than they are normally.", 
                                      interactions: "Meclizine can interact with sleep medications, benzodiazepines, and allergy medications like Benadryl.", 
                                      notFor: "Persons with known hypersensitivity to meclizine hydrochloride.",
                                       form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store this medication at room temperature, protect it from light and moisture, and keep it ut of the reach of children.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "119",
                                    name: "Diatabs", 
                                    genericName: "Loperamide", 
                                    type: "Branded", // "Generic" or "Branded" 
                                    image: "/medicine/DIATABS.jpg", 
                                    description: "Taking these medicines together helps if you have diarrhoea with painful stomach cramps and bloating.", 
                                    uses: "Acute non-specific diarrhea. Chronic diarrhea associated with inflammatory bowel disease.", 
                                    sideEffects: "Dry mouth, abdominal pain, distention or discomfort, nausea, vomiting, fatigue, flatulence, dyspepsia, constipation.", 
                                    precautions: "This medication is contraindicated if the patient is pregnant or breastfeeding.",
                                     interactions: "Diatabs may interact with sertraline, trazodone, albuterol.", 
                                    notFor: "it is for a child under 12 years old. If the patient is pregnant or breastfeeding.",
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light.", 
                                    isOTC: true 
                                    } ,


                                    { 
                                      _id: "120",
                                      name: "Loperamide", 
                                      genericName: "Loperamide", 
                                      type: "Generic", // "Generic" or "Branded" 
                                      image: "/medicine/LOPERAMIDE.jpg", 
                                      description: "Taking these medicines together helps if you have diarrhoea with painful stomach cramps and bloating.", 
                                      uses: "Acute non-specific diarrhea. Chronic diarrhea associated with inflammatory bowel disease.", 
                                      sideEffects: "Dry mouth, abdominal pain, distention or discomfort, nausea, vomiting, fatigue, flatulence, dyspepsia, constipation.", 
                                      precautions: "This medication is contraindicated if the patient is pregnant or breastfeeding.",
                                       interactions: "Diatabs may interact with sertraline, trazodone, albuterol.", 
                                      notFor: "it is for a child under 12 years old. If the patient is pregnant or breastfeeding.",
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store the medicine in a closed container at room temperature, away from heat, moisture, and direct light.", 
                                      isOTC: true 
                                      } ,

                                      { 
                                        _id:"121",
                                        name: "Robitussin", 
                                        genericName: " Guaifenesin", 
                                        type: "branded", // "Generic" or "Branded" 
                                        image: "/medicine/ROBITUSSIN.jpg", 
                                        description: "It helps loosen congestion in your chest and throat, making it easier to cough out through your mouth.", 
                                        uses: "Robitussin is used to reduce chest congestion caused by the common cold, infections, or allergies.", 
                                        sideEffects: "A rash, or nausea, vomiting, or stomach upset.", 
                                        precautions: "You should not use this medicine if you are allergic to Robitussin.",
                                         interactions: "There may be other drugs that can interact with Robitussin.", 
                                         notFor: " Take every 6 hours or as directed by a doctor.", 
                                        form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                        storage: "Keep out of reach of children.", 
                                        isOTC: true 
                                        } ,

                                    { 
                                    _id:"122",
                                    name: "Guaifenesin", 
                                    genericName: " Guaifenesin", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/GUAIFENISINE.jpg", 
                                    description: "It helps loosen congestion in your chest and throat, making it easier to cough out through your mouth.", 
                                    uses: "Robitussin is used to reduce chest congestion caused by the common cold, infections, or allergies.", 
                                    sideEffects: "A rash, or nausea, vomiting, or stomach upset.", 
                                    precautions: "You should not use this medicine if you are allergic to Robitussin.",
                                     interactions: "There may be other drugs that can interact with Robitussin.", 
                                     notFor: " Take every 6 hours or as directed by a doctor.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Keep out of reach of children.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "123",
                                      name: "Zantac", 
                                      genericName: "Ranitidine", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/ZANTAC.jpg", 
                                      description: "It works by reducing the amount of acid your stomach produces.",
                                      uses: "Treat stomach and duodenal ulcer disease (also known as peptic ulcer).",
                                       sideEffects: "Headache, constipation or diarrhea may occur.", 
                                      precautions: "Ranitidine has been withdrawn from the market due to safety concerns.", 
                                      interactions: "A product that may interact with this drug is Fezolinetant.", 
                                      notFor: "Do not take this medicine for more than 14 days in a row without talking with your doctor.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at 4-30°C (39-86°F). And protect from light and excessive heat.",
                                       isOTC: true 
                                      } ,

                                    { 
                                    _id: "124",
                                    name: "Ranitidine", 
                                    genericName: "Ranitidine", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/RANITIDINE.jpg", 
                                    description: "It works by reducing the amount of acid your stomach produces.",
                                    uses: "Treat stomach and duodenal ulcer disease (also known as peptic ulcer).",
                                     sideEffects: "Headache, constipation or diarrhea may occur.", 
                                    precautions: "Ranitidine has been withdrawn from the market due to safety concerns.", 
                                    interactions: "A product that may interact with this drug is Fezolinetant.", 
                                    notFor: "Do not take this medicine for more than 14 days in a row without talking with your doctor.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at 4-30°C (39-86°F). And protect from light and excessive heat.",
                                     isOTC: true 
                                    } ,

                                    { 
                                      _id: "125",
                                      name: "Ventolin", 
                                      genericName: "Salbutamol", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/VENTOLIN.jpg", 
                                      description: "A prescription inhaled medicine used to treat or prevent bronchospasm in people aged 4 years and older with reversible obstructive airway disease.",
                                      uses: "To treat or prevent bronchospasm, or narrowing of the airways in the lungs, in people with asthma or certain types of chronic obstructive pulmonary disease.", 
                                      sideEffects: "Rash, hives, swelling of your face, mouth, and tongue breathing problems.", 
                                      precautions: "On demand use of Salbutamol (Ventolin) should not exceed four times daily.", 
                                      interactions: "Ventolin may interact with prednisone, metoprolol, sertraline.", 
                                      notFor: "Allergic to it or any of the ingredients in it.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Protect from frost and direct sunlight.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "126",
                                    name: "Salbutamol", 
                                    genericName: "Salbutamol", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/SALBUTAMOL.jpg", 
                                    description: "A prescription inhaled medicine used to treat or prevent bronchospasm in people aged 4 years and older with reversible obstructive airway disease.",
                                    uses: "To treat or prevent bronchospasm, or narrowing of the airways in the lungs, in people with asthma or certain types of chronic obstructive pulmonary disease.", 
                                    sideEffects: "Rash, hives, swelling of your face, mouth, and tongue breathing problems.", 
                                    precautions: "On demand use of Salbutamol (Ventolin) should not exceed four times daily.", 
                                    interactions: "Ventolin may interact with prednisone, metoprolol, sertraline.", 
                                    notFor: "Allergic to it or any of the ingredients in it.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Protect from frost and direct sunlight.", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id:"127",
                                      name: "Glumet", 
                                      genericName: "Metformin", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/GLUMET.jpg", 
                                      description: "A biguanide hypoglycemic agent used in the treatment of Non-Insulin-Dependent Diabetes Mellitus.", 
                                      uses: "It helps control blood sugar levels and thus prevents serious complications of diabetes.", 
                                      sideEffects: "Stomach ache, loss of appetite, and a metallic taste in the mouth.", 
                                      precautions: "Do not take if you are pregnant or have liver, kidney problems.", 
                                      interactions: "Metformin may interact with some diabetes medications.", 
                                      notFor: "Metformin does not help patients who have insulin-dependent or type 1 diabetes because they cannot produce insulin from their pancreas gland.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Keep in a cool and dry place, away from direct sunlight.", 
                                      isOTC: true 
                                      },
  

                                    { 
                                    _id:"128",
                                    name: "Metformin", 
                                    genericName: "Metformin", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/METFORMIN.jpg", 
                                    description: "A biguanide hypoglycemic agent used in the treatment of Non-Insulin-Dependent Diabetes Mellitus.", 
                                    uses: "It helps control blood sugar levels and thus prevents serious complications of diabetes.", 
                                    sideEffects: "Stomach ache, loss of appetite, and a metallic taste in the mouth.", 
                                    precautions: "Do not take if you are pregnant or have liver, kidney problems.", 
                                    interactions: "Metformin may interact with some diabetes medications.", 
                                    notFor: "Metformin does not help patients who have insulin-dependent or type 1 diabetes because they cannot produce insulin from their pancreas gland.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Keep in a cool and dry place, away from direct sunlight.", 
                                    isOTC: true 
                                    },

                                    { 
                                      _id: "129",
                                      name: "Zyrtec", 
                                      genericName: "Cetirizine", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/ZYRTEX.jpg", 
                                      description: "It belongs to a group of medications called antihistamines.",
                                       uses: "Itchy, red, watery eyes and itchy nose or throat.", 
                                      sideEffects: "Feeling sleepy or tired.", 
                                      precautions: "Avoid drinking alcoholic beverages while taking this medication.", 
                                      interactions: "Cetirizine may interact with zolpidem (Ambien) and alprazolam (Xanax).", 
                                      notFor: "Cetirizine is not suitable for some people.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Cetirizine tablets should be stored in the original container at room temperature, between 20-25°C (68-77°F). Oral syrups should be stored at room temperature or in the refrigerator.", 
                                      isOTC: true 
                                      },

                                    { 
                                    _id: "130",
                                    name: "Cetirizine", 
                                    genericName: "Cetirizine", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/CETIRIZINE.jpg", 
                                    description: "It belongs to a group of medications called antihistamines.",
                                     uses: "Itchy, red, watery eyes and itchy nose or throat.", 
                                    sideEffects: "Feeling sleepy or tired.", 
                                    precautions: "Avoid drinking alcoholic beverages while taking this medication.", 
                                    interactions: "Cetirizine may interact with zolpidem (Ambien) and alprazolam (Xanax).", 
                                    notFor: "Cetirizine is not suitable for some people.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Cetirizine tablets should be stored in the original container at room temperature, between 20-25°C (68-77°F). Oral syrups should be stored at room temperature or in the refrigerator.", 
                                    isOTC: true 
                                    },

                                    { 
                                      _id: "131",
                                      name: "Solmux", 
                                      genericName: "Carbocisteine", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/SOLMUX.jpg", 
                                      description: "It is scientifically proven to remove phlegm and bacteria that causes cough.",
                                      uses: "Treat cough with phlegm.", 
                                      sideEffects: "Nausea, stomach discomfort, diarrhea, and skin rashes.", 
                                      precautions: "If patient is pregnant or breastfeeding, consult her doctor before using this product.", 
                                      interactions: "Solmux may interact with ibuprofen, naproxen, diclofenac or high-dose aspirin.", 
                                      notFor: "Patients are allergic to any ingredient in the products.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at temperatures not exceeding 30°C.", 
                                      isOTC: true 
                                      }, 
                                    
                                    { 
                                    _id: "132",
                                    name: "Carbocisteine", 
                                    genericName: "Carbocisteine", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/CARBOCISTEINE.jpg", 
                                    description: "It is scientifically proven to remove phlegm and bacteria that causes cough.",
                                    uses: "Treat cough with phlegm.", 
                                    sideEffects: "Nausea, stomach discomfort, diarrhea, and skin rashes.", 
                                    precautions: "If patient is pregnant or breastfeeding, consult her doctor before using this product.", 
                                    interactions: "Solmux may interact with ibuprofen, naproxen, diclofenac or high-dose aspirin.", 
                                    notFor: "Patients are allergic to any ingredient in the products.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at temperatures not exceeding 30°C.", 
                                    isOTC: true 
                                    }, 

                                    { 
                                      _id: "133",
                                      name: "Advil", 
                                      genericName: "Ibuprofen", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/ADVIL.jpg", 
                                      description: "A drug used to treat fever, swelling, pain, and redness by preventing the body from making a substance that causes inflammation.", 
                                      uses: "Headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.", 
                                      sideEffects: "Heartburn, constipation, abdominal pain, bloating, dizziness, bleeding gums, diarrhea, and blurred vision.", 
                                      precautions: "Do not take advil if you have a stomach ulcer, or have had one in the past.", 
                                      interactions: "It's safe to take advil with paracetamol or codeine.", 
                                      notFor: "Do not use this medicine just before or after heart bypass surgery.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Store at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "134",
                                    name: "Ibuprofen", 
                                    genericName: "Ibuprofen", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/IBUPROFEN.jpg", 
                                    description: "A drug used to treat fever, swelling, pain, and redness by preventing the body from making a substance that causes inflammation.", 
                                    uses: "Headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.", 
                                    sideEffects: "Heartburn, constipation, abdominal pain, bloating, dizziness, bleeding gums, diarrhea, and blurred vision.", 
                                    precautions: "Do not take advil if you have a stomach ulcer, or have had one in the past.", 
                                    interactions: "It's safe to take advil with paracetamol or codeine.", 
                                    notFor: "Do not use this medicine just before or after heart bypass surgery.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Store at room temperature, between 68 F to 77 F (20 C to 25 C).", 
                                    isOTC: true 
                                    } ,

                                    { 
                                      _id: "135",
                                      name: "Ponstan", 
                                      genericName: "Mefenamic Acid", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/PONSTAN.jpg", 
                                      description: "A trusted painkillers.", 
                                      uses: "Period pain and treat heavy periods.", 
                                      sideEffects: "Dizziness, shortness of breath, diarrhea, hives.", 
                                      precautions: "Ponstan may cause dizziness or light-headedness in some people.",
                                       interactions: "Mefenamic acid may interact with anticoagulants.", 
                                      notFor: "Not to be used at all during the third trimester of pregnancy.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc.
                                      storage: "Store at room temperature or below 30°C.",
                                       isOTC: true 
                                      } ,
                                  
                                    { 
                                    _id: "136",
                                    name: "Mefenamic Acid", 
                                    genericName: "Mefenamic Acid", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/MEFENAMICACID.jpg", 
                                    description: "A trusted painkillers.", 
                                    uses: "Period pain and treat heavy periods.", 
                                    sideEffects: "Dizziness, shortness of breath, diarrhea, hives.", 
                                    precautions: "Ponstan may cause dizziness or light-headedness in some people.",
                                     interactions: "Mefenamic acid may interact with anticoagulants.", 
                                    notFor: "Not to be used at all during the third trimester of pregnancy.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc.
                                    storage: "Store at room temperature or below 30°C.",
                                     isOTC: true 
                                    } ,

                                    { 
                                      _id: "137",
                                      name: "Biogesic", 
                                      genericName: "Paracetamol", 
                                      type: "Branded", // "Generic" or "Branded" 
                                      image: "/medicine/BIOGESIC.jpg", 
                                      description: "A trusted pain and fever reliever.", 
                                      uses: "Headache, fever, muscle aches, arthritis, back pain.", 
                                      sideEffects: "Nausea, rash, allergic reactions.", 
                                      precautions: "Do not exceed 4g per day. Avoid alcohol.", 
                                      interactions: "May interact with anticoagulants like warfarin.",
                                       notFor: "People with severe liver problems.", 
                                      form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                      storage: "Keep in a cool, dry place away from direct sunlight.", 
                                      isOTC: true 
                                      } ,

                                    { 
                                    _id: "138",
                                    name: "Paracetamol", 
                                    genericName: "Paracetamol", 
                                    type: "Generic", // "Generic" or "Branded" 
                                    image: "/medicine/PARACETAMOL.jpg", 
                                    description: "A trusted pain and fever reliever.", 
                                    uses: "Headache, fever, muscle aches, arthritis, back pain.", 
                                    sideEffects: "Nausea, rash, allergic reactions.", 
                                    precautions: "Do not exceed 4g per day. Avoid alcohol.", 
                                    interactions: "May interact with anticoagulants like warfarin.",
                                     notFor: "People with severe liver problems.", 
                                    form: "Tablet", // Tablet, Capsule, Syrup, etc. 
                                    storage: "Keep in a cool, dry place away from direct sunlight.", 
                                    isOTC: true 
                                    } 
                                    
                                     


                                    
    
  ];

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(mockData);
}