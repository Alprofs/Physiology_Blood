allLectures.push({
    id: "sec6_blood_groups",
    title: {
        en: "Section 6: Blood Groups & Rh System",
        ar: "السكشن السادس: فصائل الدم وعامل ريسوس (Blood Typing)"
    },
    revision: [
        {
            title: {
                en: "1. The ABO System & Landsteiner's Rule",
                ar: "١. نظام ABO وقاعدة لاندشتاينر الذهبية"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: { en: "Antigens & Antibodies Definition", ar: "تعريف مولدات الالتصاق والأجسام المضادة" },
                    content: {
                        en: "• **Agglutinogens (Antigens):** Located on the outer surface of RBC membrane (A and B).\n• **Agglutinins (Antibodies):** Present in the blood plasma (Anti-A and Anti-B).\n• **Agglutination:** When an agglutinogen meets its corresponding agglutinin (e.g. Antigen A + Anti-A), clumping and hemolysis occur.",
                        ar: "• **الأنتيجين (Agglutinogen):** يوجد على السطح الخارجي لغشاء كرات الدم الحمراء (A أو B).\n• **الأجسام المضادة (Agglutinins):** توجد ذائبة في بلازما الدم (Anti-A و Anti-B).\n• **التلازن (Agglutination):** يحدث عند التقاء الأنتيجين بالجسم المضاد المماثل له (مثل A مع Anti-A) فيحدث تجمع للكرات وتكسير حاد للدم."
                    }
                },
                {
                    type: "reveal",
                    nodeTitle: { en: "Landsteiner's General Rule", ar: "قاعدة لاندشتاينر العامة" },
                    content: {
                        en: "The blood of any healthy individual **DOES NOT contain** an agglutinogen on RBCs and its **corresponding agglutinin** in plasma (e.g., if RBCs have Antigen A, plasma will NEVER contain Anti-A).",
                        ar: "لا يمكن أن يحتوي دم أي شخص طبيعي على **أنتيجين** في كرات الدم وجسمه المضاد **المناظر له** في البلازما في نفس الوقت (مثلاً إذا كانت كراته تحمل A يستحيل أن تحتوي بلازماه على Anti-A)."
                    }
                },
                {
                    type: "compare",
                    val1Title: { en: "Group A", ar: "الفصيلة A" },
                    val1: { en: "RBCs have **Antigen A**\nPlasma has **Anti-B**", ar: "الكرات تحمل **أنتيجين A**\nالبلازما بها **Anti-B**" },
                    val2Title: { en: "Group B", ar: "الفصيلة B" },
                    val2: { en: "RBCs have **Antigen B**\nPlasma has **Anti-A**", ar: "الكرات تحمل **أنتيجين B**\nالبلازما بها **Anti-A**" }
                },
                {
                    type: "compare",
                    val1Title: { en: "Group AB (Universal Recipient)", ar: "الفصيلة AB (مستقبل عام)" },
                    val1: { en: "RBCs have **Both A & B**\nPlasma has **NO Antibodies**", ar: "الكرات تحمل **كلا الأنتيجينين A و B**\nالبلازما **خالية تماماً من الأجسام المضادة**" },
                    val2Title: { en: "Group O (Universal Donor)", ar: "الفصيلة O (معطي عام)" },
                    val2: { en: "RBCs have **NO Antigens**\nPlasma has **Both Anti-A & Anti-B**", ar: "الكرات **خالية تماماً من الأنتيجينات**\nالبلازما بها **كلا الجسمين Anti-A و Anti-B**" }
                }
            ]
        },
        {
            title: {
                en: "2. Rh Factor & Erythroblastosis Fetalis",
                ar: "٢. عامل ريسوس (Rh) ومرض تحلل دم المواليد"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: { en: "The Rh System Characteristics", ar: "خصائص نظام عامل ريسوس (Rh)" },
                    content: {
                        en: "• **Rh +ve (85%):** Possess **D antigen** on RBCs.\n• **Rh -ve (15%):** Lack D antigen.\n• **Crucial Rule:** Both Rh+ and Rh- individuals normally have **NO naturally occurring anti-D antibodies** in their plasma (they only develop in Rh- persons if exposed to Rh+ blood).",
                        ar: "• **موجب الـ Rh (85%):** تحمل كراتهم **أنتيجين D**.\n• **سالب الـ Rh (15%):** تخلو كراتهم من أنتيجين D.\n• **قاعدة هامة جداً:** كلا الشخصين موجب أو سالب الـ Rh **لا يمتلكان أجساماً مضادة طبيعية Anti-D** في البلازما (تتكون فقط في دم الشخص السالب إذا تم حقنه بدم موجب)."
                    }
                },
                {
                    type: "steps",
                    nodeTitle: { en: "Erythroblastosis Fetalis Mechanism (HDN)", ar: "آلية حدوث مرض تكسر دم المواليد" },
                    steps: [
                        { en: "Occurs ONLY when an **Rh-negative mother** marries an **Rh-positive father** and carries an **Rh-positive fetus**.", ar: "يحدث فقط عندما تتزوج **أم سالبة Rh** من **أب موجب Rh** ويكون الجنين **موجب Rh**." },
                        { en: "**First Pregnancy:** Child is born healthy, but during delivery fetal Rh+ blood escapes into maternal circulation, inducing production of *anti-Rh antibodies* in mother's blood.", ar: "**الحمل الأول:** يولد الطفل سليماً، ولكن أثناء انفصال المشيمة يتسرب دم موجب للأم فتنتج أجساماً مضادة *Anti-Rh*." },
                        { en: "**Subsequent Pregnancies (Rh+ Fetus):** Maternal Anti-Rh antibodies cross the placenta into the fetus, causing massive hemolysis (*Erythroblastosis Fetalis* or intrauterine death).", ar: "**الحمل التالي (بجنين موجب):** تعبر الأجسام المضادة المشيمة لجسم الجنين وتكسر كرات دمه مسببة اليرقان الحاد وموت الجنين." },
                        { en: "**Prevention:** Administer **Anti-Rh gamma globulin (Anti-D)** to the mother within 72 hours after every delivery, abortion, or miscarriage.", ar: "**الوقاية:** إعطاء الأم حقنة **Anti-D** خلال 72 ساعة بعد كل ولادة أو إجهاض لمعادلة أي خلايا تسربت." }
                    ]
                },
                {
                    type: "reveal",
                    nodeTitle: { en: "Why does ABO incompatibility rarely cause HDN? (Top Exam Question)", ar: "لماذا لا يسبب عدم توافق ABO تكسر دم المواليد؟ (سؤال خطير)" },
                    content: {
                        en: "**Answer:** Because Anti-A and Anti-B antibodies belong to the **IgM** class of immunoglobulins, which are large pentamer molecules that **DO NOT cross the placenta**.\nIn contrast, Anti-Rh antibodies belong to **IgG**, which is small and easily crosses the placenta.",
                        ar: "**الإجابة الشافية:** لأن الأجسام المضادة Anti-A و Anti-B هي من نوع **IgM** كبير الحجم خماسي الجزيئات **ولا يستطيع عبور المشيمة**.\nأما الأجسام المضادة لعامل ريسوس Anti-Rh فهي من نوع **IgG** صغير الحجم الذي يعبر المشيمة بسهولة."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                en: "Which blood group is medically termed the 'Universal Donor'?",
                ar: "أي من فصائل الدم تسمى طبياً 'المعطي العام' (Universal Donor)؟"
            },
            opts: {
                en: ["GROUP O", "GROUP AB", "GROUP A", "GROUP B"],
                ar: ["الفصيلة O", "الفصيلة AB", "الفصيلة A", "الفصيلة B"]
            },
            correct: 0,
            hint: {
                en: "Group O RBCs lack both A and B antigens, so they are not attacked by recipient agglutinins.",
                ar: "الفصيلة O خالية من أنتيجينات A و B على كراتها لذا لا تهاجمها بلازما المستقبل."
            }
        },
        {
            q: {
                en: "Which blood group is medically termed the 'Universal Recipient'?",
                ar: "أي من فصائل الدم تسمى طبياً 'المستقبل العام' (Universal Recipient)؟"
            },
            opts: {
                en: ["GROUP AB", "GROUP O", "GROUP A", "GROUP B"],
                ar: ["الفصيلة AB", "الفصيلة O", "الفصيلة A", "الفصيلة B"]
            },
            correct: 0,
            hint: {
                en: "Group AB plasma lacks both anti-A and anti-B antibodies, so it will not attack donor RBCs.",
                ar: "الفصيلة AB خالية بلازما دمها من الأجسام المضادة فيمكنها استقبال كرات أي دم."
            }
        },
        {
            q: {
                en: "Agglutinogens (blood group antigens) are biochemically located on which part of the blood?",
                ar: "أين توجد مولدات الالتصاق والأنتيجينات المسؤولة عن تحديد فصيلة الدم؟"
            },
            opts: {
                en: ["RBC MEMBRANE", "BLOOD PLASMA", "INSIDE NUCLEUS", "PLATELET COAT"],
                ar: ["غشاء كرات الدم الحمراء", "بلازما الدم", "داخل النواة", "غلاف الصفائح"]
            },
            correct: 0,
            hint: {
                en: "Agglutinogens are glycolipids/glycoproteins situated on the outer surface of RBC membrane.",
                ar: "توجد الأنتيجينات متمركزة على السطح الخارجي لغشاء كرات الدم الحمراء."
            }
        },
        {
            q: {
                en: "In a blood typing test, if clumping occurs with Anti-A and Anti-D, but NOT with Anti-B, what is the blood type?",
                ar: "إذا حدث تجلط مع Anti-A ومع Anti-D ولم يحدث مع Anti-B، فما هي فصيلة الدم؟"
            },
            opts: {
                en: ["A POSITIVE", "B POSITIVE", "AB POSITIVE", "O NEGATIVE"],
                ar: ["A موجب", "B موجب", "AB موجب", "O سالب"]
            },
            correct: 0,
            hint: {
                en: "Agglutination with Anti-A = Antigen A. Agglutination with Anti-D = Rh positive. Blood is A+.",
                ar: "التجلط مع Anti-A يعني وجود أنتيجين A، والتجلط مع Anti-D يعني موجب الـ Rh فتكون الفصيلة A+."
            }
        },
        {
            q: {
                en: "Erythroblastosis fetalis occurs when the mother is Rh-negative and the fetus is what?",
                ar: "يحدث مرض تكسر دم المواليد عندما تكون الأم سالبة العامل الريسوسي والجنين:"
            },
            opts: {
                en: ["RH POSITIVE", "RH NEGATIVE", "GROUP O", "GROUP AB"],
                ar: ["موجب Rh", "سالب Rh", "فصيلة O", "فصيلة AB"]
            },
            correct: 0,
            hint: {
                en: "Disease occurs only when an Rh-negative mother carries an Rh-positive fetus.",
                ar: "يشترط لحدوث المرض أن تكون الأم سالبة وتتعرض لدم جنين موجب العامل الريسوسي."
            }
        },
        {
            q: {
                en: "What injection is given to an Rh-negative mother after delivery to prevent Rh isoimmunization?",
                ar: "ما الحقنة الوقائية التي تعطى للأم سالبة الـ Rh بعد الولادة لمنع تكون الأجسام المضادة؟"
            },
            opts: {
                en: ["ANTI-D", "VITAMIN K", "HEPARIN", "INSULIN"],
                ar: ["حقنة Anti-D", "فيتامين ك", "هيبارين", "إنسولين"]
            },
            correct: 0,
            hint: {
                en: "Giving anti-Rh antibodies (Anti-D gamma globulin) within 72 hours destroys fetal RBCs before the mother's immune system reacts.",
                ar: "تعطى الأم حقنة Anti-D لتدمير أي كرات جنينية متسربة قبل أن يتعرف عليها جهازها المناعي."
            }
        },
        {
            q: {
                en: "Why do ABO antibodies (anti-A and anti-B) rarely cross the placenta to harm the fetus?",
                ar: "لماذا نادراً ما تسبب الأجسام المضادة لنظام ABO تكسيراً لدم الجنين عبر المشيمة؟"
            },
            opts: {
                en: ["THEY ARE IGM", "THEY ARE IGG", "THEY ARE HORMONES", "DESTROYED BY ACID"],
                ar: ["لأنها من نوع IgM كبير الحجم", "لأنها من نوع IgG", "لأنها هرمونات", "تتكسر بالحموضة"]
            },
            correct: 0,
            hint: {
                en: "Anti-A and Anti-B belong to the IgM class which cannot cross the placenta due to its large size.",
                ar: "أجسام Anti-A و Anti-B هي من نوع IgM ضخمة الحجم التي تعجز عن عبور حاجز المشيمة."
            }
        },
        {
            q: {
                en: "What class of immunoglobulin do Anti-Rh antibodies belong to?",
                ar: "إلى أي فئة من الأجسام المناعية تنتمي الأجسام المضادة لعامل ريسوس (Anti-Rh)؟"
            },
            opts: {
                en: ["IGG", "IGM", "IGA", "IGE"],
                ar: ["IgG", "IgM", "IgA", "IgE"]
            },
            correct: 0,
            hint: {
                en: "Anti-Rh antibodies belong to the IgG class, which is small and readily crosses the placenta.",
                ar: "تنتمي أجسام Anti-Rh إلى نوع IgG صغير الحجم الذي يعبر المشيمة بحرية."
            }
        },
        {
            q: {
                en: "What antibodies are found in the plasma of a person with blood group O?",
                ar: "ما هي الأجسام المضادة الموجودة طبيعياً في بلازما شخص فصيلة دمه O؟"
            },
            opts: {
                en: ["ANTI-A AND ANTI-B", "ANTI-A ONLY", "ANTI-B ONLY", "NO ANTIBODIES"],
                ar: ["كلا الجسمين Anti-A و Anti-B", "جسم Anti-A فقط", "جسم Anti-B فقط", "لا توجد أجسام مضادة"]
            },
            correct: 0,
            hint: {
                en: "Group O individuals have both anti-A and anti-B antibodies in their plasma.",
                ar: "شخص فصيلة دمه O تخلو كراته من الأنتيجين فتحتوي بلازماه على كلا الجسمين Anti-A و Anti-B."
            }
        },
        {
            q: {
                en: "What specific antigen on RBCs determines whether a person is Rh-positive or Rh-negative?",
                ar: "ما هو الأنتيجين المحدد لكون الشخص موجب أو سالب العامل الريسوسي؟"
            },
            opts: {
                en: ["ANTIGEN D", "ANTIGEN A", "ANTIGEN B", "ANTIGEN H"],
                ar: ["أنتيجين D", "أنتيجين A", "أنتيجين B", "أنتيجين H"]
            },
            correct: 0,
            hint: {
                en: "Presence of the D antigen confers Rh positivity; its absence denotes Rh negativity.",
                ar: "وجود أنتيجين D يعني أن الشخص موجب Rh وعدم وجوده يعني أنه سالب."
            }
        }
    ]
});