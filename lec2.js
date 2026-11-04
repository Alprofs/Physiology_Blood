allLectures.push({
    id: "sec2_fragility",
    title: {
        en: "Section 2: Osmotic Fragility Test",
        ar: "السكشن الثاني: اختبار الهشاشة الأسموزية لكرات الدم"
    },
    revision: [
        {
            title: {
                en: "1. Core Definitions (Viva & Written)",
                ar: "١. التعريفات الأساسية (أسئلة شفوية ومقالية)"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: { en: "Osmosis & Tonicity", ar: "الأسموزية والتوترية" },
                    content: {
                        en: "*Osmosis:* Transport of water molecules from high to low water concentration without energy through a semi-permeable membrane.\n*Tonicity:* Adaptation of cell volume to changes in solution concentration by altering its water content.",
                        ar: "*الأسموزية (Osmosis):* انتقال جزيئات الماء من التركيز العالي للماء للأقل عبر غشاء شبه منفذ دون الحاجة لطاقة.\n*التوترية (Tonicity):* تكيف حجم الخلية مع تغير تركيز المحلول عبر تعديل محتواها المائي."
                    }
                },
                {
                    type: "info",
                    nodeTitle: { en: "Erythrocyte Fragility & Hemolysis", ar: "هشاشة الكرات وتكسر الدم" },
                    content: {
                        en: "*Fragility:* Tendency of erythrocytes (RBCs) to hemolyse (rupture) under osmotic stress.\n*Hemolysis:* Rupture of RBCs and release of hemoglobin into the surrounding fluid.",
                        ar: "*الهشاشة (Fragility):* ميل كرات الدم الحمراء للانفجار والتمزق تحت الضغط الأسموزي.\n*تكسير الدم (Hemolysis):* تمزق كرات الدم الحمراء وخروج الهيموجلوبين للسائل المحيط."
                    }
                },
                {
                    type: "tree",
                    nodeTitle: { en: "RBCs Fate in Different Solutions", ar: "مصير كرات الدم الحمراء في المحاليل" },
                    leafs: [
                        { en: "Isotonic (0.9% NaCl): Water in = Water out (No size change)", ar: "متعادل (0.9%): الماء الداخل = الخارج (لا تغيير في الحجم)" },
                        { en: "Hypotonic (< 0.9% NaCl): Water moves IN -> RBCs swell and burst", ar: "منخفض (< 0.9%): يدخل الماء للخلية -> تنتفخ الكرات وتنفجر" },
                        { en: "Hypertonic (> 0.9% NaCl): Water moves OUT -> RBCs shrink (crenate)", ar: "مرتفع (> 0.9%): يخرج الماء من الخلية -> تنكمش الكرات (Crenate)" }
                    ]
                }
            ]
        },
        {
            title: {
                en: "2. The Test: Principle, Procedure & Interpretation",
                ar: "٢. التجربة: الأساس العلمي والخطوات والنتائج"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: { en: "Principle of Osmotic Fragility Test", ar: "الأساس العلمي للاختبار" },
                    content: {
                        en: "Quantitatively measures the ability of RBCs to resist hemolysis by placing them in decreasing strengths of hypotonic saline (NaCl) so they absorb water and rupture.",
                        ar: "قياس قدرة كرات الدم الحمراء كمياً على مقاومة التكسر عبر وضعها في تركيزات متناقصة من محلول ملحي ناقص التوتر، فتمتص الماء بالأسموزية حتى تنفجر."
                    }
                },
                {
                    type: "steps",
                    nodeTitle: { en: "Test Details & Reading", ar: "تفاصيل التجربة وقراءة النتائج" },
                    steps: [
                        { en: "Use *8 test tubes* containing NaCl concentrations: 0.9%, 0.55%, 0.50%, 0.45%, 0.40%, 0.35%, 0.30%, and 8th tube has *distilled water*.", ar: "استخدام *8 أنابيب اختبار* بتركيزات كلوريد صوديوم متناقصة، والأنبوبة الثامنة تحتوي على *ماء مقطر*." },
                        { en: "Add drops of *heparinized venous blood*, invert gently (do not shake!), and let stand for *30 minutes*.", ar: "إضافة قطرات من *دم وريدي مهبْرَن*، وقلب الأنابيب برفق دون رج، وتركها لمدة *30 دقيقة*." },
                        { en: "*No Hemolysis:* Clear saline + red cells sedimented at bottom (0.50% and above).", ar: "*لا يوجد تكسير:* المحلول رائق ورسوب الكرات في القاع (0.50% فأعلى)." },
                        { en: "*Partial Hemolysis:* Pink supernatant + some cells at bottom (0.45% - 0.35%).", ar: "*تكسير جزئي:* المحلول وردي مع وجود راسب في القاع." },
                        { en: "*Complete Hemolysis:* Uniform red solution with NO cells at bottom (0.30% and tube 8).", ar: "*تكسير كامل:* المحلول أحمر قاتم تماماً بدون أي راسب في القاع (0.30% والماء المقطر)." }
                    ]
                },
                {
                    type: "compare",
                    val1Title: { en: "Normal RBCs Hemolysis", ar: "كرات الدم الطبيعية" },
                    val1: { en: "*Begins at:* 0.45% NaCl\n*Completes at:* 0.30% NaCl\n*No lysis:* ≥ 0.50% NaCl", ar: "*يبدأ عند:* 0.45% NaCl\n*يكتمل عند:* 0.30% NaCl\n*لا تكسير:* 0.50% فأعلى" },
                    val2Title: { en: "Hereditary Spherocytosis", ar: "مرض كرات الدم الكروية" },
                    val2: { en: "*Begins early:* > 0.50% NaCl\nCells are spherical and less able to expand.", ar: "*يبدأ مبكراً:* فوق 0.50% NaCl\nالكرات كروية الشكل وأقل قدرة على التمدد." }
                },
                {
                    type: "reveal",
                    nodeTitle: { en: "Clinical Significance of the Test", ar: "الأهمية الإكلينيكية للاختبار" },
                    content: {
                        en: "Diagnoses *Hereditary Spherocytosis*. RBCs have a defect in membrane proteins (spectrin), taking a spherical shape with reduced surface area-to-volume ratio, making them unable to expand and extremely fragile.",
                        ar: "تشخيص مرض *كرات الدم الكروية الوراثي (Hereditary Spherocytosis)*، حيث يوجد خلل في بروتينات الغشاء فتفقد شكلها المقعر وتصبح كروية، مما يقلل مساحة سطحها ويجعلها عاجزة عن التمدد وسريعة الانفجار."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                en: "At which NaCl concentration does hemolysis of normal RBCs begin?",
                ar: "عند أي تركيز لمحلول كلوريد الصوديوم يبدأ تكسير كرات الدم الحمراء الطبيعية؟"
            },
            opts: {
                en: ["0.45%", "0.30%", "0.50%", "0.90%"],
                ar: ["0.45%", "0.30%", "0.50%", "0.90%"]
            },
            correct: 0,
            hint: {
                en: "Normally, hemolysis begins at 0.45% NaCl.",
                ar: "يبدأ تكسر كرات الدم الحمراء الطبيعية عند تركيز 0.45%."
            }
        },
        {
            q: {
                en: "At which NaCl concentration is hemolysis of normal RBCs completely finished?",
                ar: "عند أي تركيز لمحلول ملح الطعام يكتمل تكسير كرات الدم الحمراء تماماً؟"
            },
            opts: {
                en: ["0.30%", "0.45%", "0.55%", "0.00%"],
                ar: ["0.30%", "0.45%", "0.55%", "0.00%"]
            },
            correct: 0,
            hint: {
                en: "Normally, hemolysis is complete at 0.30% NaCl (all cells burst).",
                ar: "يكتمل تكسير كرات الدم الحمراء تماماً عند تركيز 0.30% كلوريد صوديوم."
            }
        },
        {
            q: {
                en: "Name the clinical disease where RBC osmotic fragility is significantly increased:",
                ar: "ما اسم المرض الإكلينيكي الذي تزداد فيه هشاشة وتكسر كرات الدم الحمراء أسموزياً؟"
            },
            opts: {
                en: ["SPHEROCYTOSIS", "PURPURA", "HEMOPHILIA", "POLYCYTHEMIA"],
                ar: ["سفيروسيتوزيس", "فرفرية", "هيموفيليا", "بولي سيثيميا"]
            },
            correct: 0,
            hint: {
                en: "Hereditary spherocytosis makes RBCs spherical, rigid, and highly fragile.",
                ar: "مرض كرات الدم الكروية الوراثي (Hereditary Spherocytosis) يجعل الكرات هشة وسريعة الانفجار."
            }
        },
        {
            q: {
                en: "In hereditary spherocytosis, at what NaCl concentration does hemolysis begin?",
                ar: "في مريض كرات الدم الكروية الوراثي، عند أي تركيز يبدأ تكسير كرات الدم مبكراً؟"
            },
            opts: {
                en: ["> 0.50%", "0.30%", "0.20%", "0.40%"],
                ar: ["أعلى من 0.50%", "0.30%", "0.20%", "0.40%"]
            },
            correct: 0,
            hint: {
                en: "In hereditary spherocytosis, RBCs hemolyze early at concentrations > 0.50% NaCl.",
                ar: "في مرضى السفيروسيتوزيس، يبدأ التكسير مبكراً جداً عند تركيزات أعلى من 0.50%."
            }
        },
        {
            q: {
                en: "What happens to RBCs when placed in a hypotonic NaCl solution (< 0.9%)?",
                ar: "ماذا يحدث لكرات الدم الحمراء عند وضعها في محلول منخفض التوتر (< 0.9%)؟"
            },
            opts: {
                en: ["SWELL AND BURST", "SHRINK", "CRENATE", "NO CHANGE"],
                ar: ["تنتفخ وتنفجر", "تنكمش", "تتغضن", "لا تتغير"]
            },
            correct: 0,
            hint: {
                en: "Water moves inside the cell causing it to swell and eventually rupture (hemolysis).",
                ar: "يدخل الماء داخل كرات الدم الحمراء فتنتفخ حتى تنفجر مسببة تكسر الدم."
            }
        },
        {
            q: {
                en: "What happens to RBCs when placed in a hypertonic NaCl solution (> 0.9%)?",
                ar: "ماذا يحدث لكرات الدم الحمراء عند وضعها في محلول عالي التوتر (> 0.9%)؟"
            },
            opts: {
                en: ["SHRINK", "SWELL", "HEMOLYZE", "BURST"],
                ar: ["تنكمش", "تنتفخ", "تتحلل", "تنفجر"]
            },
            correct: 0,
            hint: {
                en: "Water leaves the cell by osmosis causing the RBC to shrink (crenate).",
                ar: "يخرج الماء من الخلية بفعل الأسموزية فتنكمش كرات الدم (Crenation)."
            }
        },
        {
            q: {
                en: "What type of blood is used to perform the osmotic fragility test?",
                ar: "ما هو نوع عينة الدم المستخدمة لإجراء اختبار الهشاشة الأسموزية في المعمل؟"
            },
            opts: {
                en: ["HEPARINIZED", "CITRATED", "CLOTTED", "SERUM"],
                ar: ["دم مهبرن", "دم بسترات الصوديوم", "دم متجلط", "سيرم"]
            },
            correct: 0,
            hint: {
                en: "Heparinized venous blood is officially used for this experiment.",
                ar: "يستخدم دم وريدي مضاف إليه الهيبارين لمنع التجلط دون التأثير على الأسموزية."
            }
        },
        {
            q: {
                en: "What is placed in the 8th test tube during the osmotic fragility test?",
                ar: "ماذا يوضع في الأنبوبة رقم 8 كضابط للتجربة في اختبار الهشاشة الأسموزية؟"
            },
            opts: {
                en: ["DISTILLED WATER", "0.9% NACL", "0.1 N HCL", "ALCOHOL"],
                ar: ["ماء مقطر", "محلول ملح 0.9%", "حمض هيدروكلوريك", "كحول"]
            },
            correct: 0,
            hint: {
                en: "Tube 8 contains 5 ml distilled water causing 100% complete hemolysis.",
                ar: "توضع 5 مل ماء مقطر في الأنبوبة الثامنة لتمثل التكسير الكامل بنسبة 100%."
            }
        },
        {
            q: {
                en: "What is the primary clinical significance of the osmotic fragility test?",
                ar: "ما هي الأهمية الإكلينيكية الرئيسية لإجراء اختبار الهشاشة الأسموزية؟"
            },
            opts: {
                en: ["SPHEROCYTOSIS", "DIABETES", "HYPERTENSION", "HEMOPHILIA"],
                ar: ["تشخيص السفيروسيتوزيس", "تشخيص السكر", "ضغط الدم", "الهيموفيليا"]
            },
            correct: 0,
            hint: {
                en: "Clinical significance: to detect Hereditary Spherocytosis.",
                ar: "الأهمية الإكلينيكية هي الكشف عن وتشخيص مرض كرات الدم الكروية الوراثي."
            }
        },
        {
            q: {
                en: "What is the term for the rupture of RBCs and release of hemoglobin into plasma?",
                ar: "ما هو المصطلح الدال على تمزق كرات الدم الحمراء وخروج الهيموجلوبين للسائل المحيط؟"
            },
            opts: {
                en: ["HEMOLYSIS", "CRENATION", "ROULEAUX", "AGGLUTINATION"],
                ar: ["تكسر الدم", "انكماش الخلية", "تراص الكرات", "التلازن"]
            },
            correct: 0,
            hint: {
                en: "Hemolysis is the rupture of RBCs and release of hemoglobin into surrounding fluid.",
                ar: "انحلال أو تكسير الدم (Hemolysis) هو تمزق الغشاء الخلوي وخروج الهيموجلوبين."
            }
        },
        {
            q: {
                en: "What does a clear supernatant with red cells at the bottom indicate in this test?",
                ar: "ماذا يعني وجود سائل رائق مع ترسب كرات الدم الحمراء في قاع الأنبوبة؟"
            },
            opts: {
                en: ["NO HEMOLYSIS", "COMPLETE HEMOLYSIS", "PARTIAL HEMOLYSIS", "SPHEROCYTOSIS"],
                ar: ["عدم حدوث تكسير", "تكسير كامل", "تكسير جزئي", "سفيروسيتوزيس"]
            },
            correct: 0,
            hint: {
                en: "RBCs intact at the bottom with clear solution means NO hemolysis (≥ 0.50% NaCl).",
                ar: "بقاء الكرات سليمة في القاع والمحلول رائق يعني عدم حدوث أي تكسير."
            }
        },
        {
            q: {
                en: "How long should the tubes be allowed to stand before reading osmotic fragility?",
                ar: "كم دقيقة يجب ترك الأنابيب في الحامل قبل تسجيل قراءة الهشاشة الأسموزية؟"
            },
            opts: {
                en: ["30 MINUTES", "10 MINUTES", "5 MINUTES", "60 MINUTES"],
                ar: ["30 دقيقة", "10 دقائق", "5 دقائق", "60 دقيقة"]
            },
            correct: 0,
            hint: {
                en: "Procedure: Allow the tubes to stand undisturbed for 30 minutes.",
                ar: "خطوات العمل: تترك الأنابيب ثابتة لمدة 30 دقيقة قبل أخذ القراءة."
            }
        }
    ]
});