import { ServiceItem, BeforeAfterCase, ReviewItem, ExperienceStep } from '../types';

export const CLINIC_INFO = {
  nameEn: "Khan Dental & Physiotherapy Centre",
  nameBn: "খান ডেন্টাল ক্লিনিক ও ফিজিওথেরাপি সেন্টার",
  branchEn: "Sayed Nagar Branch, Vatara, Dhaka",
  branchBn: "সায়েদ নগর ব্রাঞ্চ, ভাটারা, ঢাকা",
  rating: 4.6,
  reviewCount: 18,
  phone: "01921-553385",
  phoneRaw: "01921553385",
  whatsappUrl: "https://wa.me/8801921553385?text=Hello%20Khan%20Dental%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation",
  addressEn: "House no-25, Road no-11/1, Block-A, Sayed Nagar, Vatara, Dhaka-1212",
  addressBn: "বাড়ি নং-২৫, রোড নং-১১/১, ব্লক-এ, সায়েদ নগর, ভাটারা, ঢাকা-১২১২",
  landmarkEn: "Cumilla para, at the circle of doshtala, near Boro Mosjid, Dhaka 1212",
  landmarkBn: "কুমিল্লা পাড়া, দশতলা মোড়ে, বড় মসজিদের কাছে, ঢাকা ১২১২",
  plusCode: "QCWP+WV Dhaka",
  status: "Closed · Opens 5 PM",
  hoursEn: "Daily: 5:00 PM – 10:30 PM (Friday & Saturday consultations available)",
  hoursBn: "প্রতিদিন: বিকাল ৫:০০ টা – রাত ১০:৩০ টা (শুক্র ও শনিবারেও খোলা)",
  taglineEn: "Crafting Unforgettable Smiles with Precision & Comfort.",
  taglineBn: "নিখুঁত যত্ন ও পরম স্বাচ্ছন্দ্যে আপনার হাসির নতুন রূপায়ন।",
  ownershipEn: "Identifies as Women-Owned & Specialist Operated",
  ownershipBn: "নারী চিকিৎসকদের বিশেষায়িত তত্ত্বাবধানে পরিচালিত",
};

export const SERVICES_LIST: ServiceItem[] = [
  // 1. Cosmetic Dentistry
  {
    id: "veneers",
    category: "cosmetic",
    titleEn: "Custom Porcelain Veneers",
    titleBn: "কাস্টম পোরসেলিন ভেনিয়ার",
    subtitleEn: "Ultra-thin, handcrafted ceramic laminates for a symmetrical Hollywood smile",
    subtitleBn: "দাঁতের উজ্জ্বলতা ও সমান্তরাল রূপায়নে সূক্ষ্ম সিরামিক কোটিং",
    descriptionEn: "Individually sculpted porcelain veneers that correct gaps, chipping, discoloration, and minor misalignment while preserving healthy enamel structure.",
    descriptionBn: "দাঁতের ফাঁক, ভাঙা অংশ ও দীর্ঘস্থায়ী দাগ দূর করে প্রাকৃতিক উজ্জ্বল হাসি নিশ্চিত করার প্রিমিয়াম ভেনিয়ার ট্রিটমেন্ট।",
    benefitsEn: [
      "Natural translucency matching your unique facial tones",
      "Stain-resistant medical porcelain with 15+ year longevity",
      "Minimally invasive preparation with zero nerve sensitivity"
    ],
    benefitsBn: [
      "চেহারার সাথে মানানসই প্রাকৃতিক উজ্জ্বলতা",
      "চা-কফির দাগ প্রতিরোধক দীর্ঘস্থায়ী সিরামিক",
      "কোনোরকম শিরশির ভাব ছাড়া আরামদায়ক ট্রিটমেন্ট"
    ],
    duration: "2-3 Sessions",
    painLevel: "Zero-Pain",
    priceRange: "BDT 12,000 – 18,000 / tooth",
    procedureStepsEn: [
      "Digital smile design and photographic aesthetic mapping",
      "Subtle micro-enamel conditioning and precise impressions",
      "Custom boutique ceramic fabrication in high-end laboratory",
      "Seamless bonded placement and luminous high-gloss polish"
    ],
    procedureStepsBn: [
      "ডিজিটাল স্মাইল ডিজাইন ও প্রাথমিক এক্স-রে পর্যালোচনা",
      "দাঁতের সূক্ষ্ম প্রস্তুতি ও নির্ভুল মাপ গ্রহণ",
      "বিশেষায়িত ল্যাবে কাস্টম ভেনিয়ার তৈরি",
      "দৃঢ় বন্ডিং ও নিখুঁত ফিনিশিং পলিশ"
    ],
    icon: "Sparkles",
    isPopular: true
  },
  {
    id: "laser-whitening",
    category: "cosmetic",
    titleEn: "Cold-Light Laser Teeth Whitening",
    titleBn: "কোল্ড-লাইট লেজার টিথ হোয়াইটেনিং",
    subtitleEn: "6 to 8 shades brighter in a single 45-minute gentle session",
    subtitleBn: "মাত্র ৪৫ মিনিটে দাঁতের রঙ ৬ থেকে ৮ শেড পর্যন্ত উজ্জ্বল করুন",
    descriptionEn: "Advanced cold-blue phototherapy combined with a gentle pH-neutral hydrogen peroxide matrix to eliminate deep nicotine, food, and age-related stains safely.",
    descriptionBn: "আধুনিক লেজার প্রযুক্তির মাধ্যমে এনামেলের কোনো ক্ষতি না করে দাঁতকে করুন ধবধবে সাদা ও উজ্জ্বল।",
    benefitsEn: [
      "Immediate visible brightening in under an hour",
      "Enamel-safe desensitizing formulation prevents tooth shock",
      "Includes complimentary at-home maintenance gold pen"
    ],
    benefitsBn: [
      "এক সেশনেই তাৎক্ষণিক উজ্জ্বলতার ফলাফল",
      "দাঁতের সংবেদনশীলতা রোধে বিশেষ জেল ব্যবহার",
      "বাসায় ব্যবহারের জন্য কমপ্লিমেন্টারি টাচ-আপ গাইড"
    ],
    duration: "45 Minutes",
    painLevel: "Zero-Pain",
    priceRange: "BDT 6,000 – 10,000 / full arch",
    procedureStepsEn: [
      "Protective gum isolation with medical barrier gel",
      "Even application of luxury medical whitening matrix",
      "Three 15-minute cycles of calibrated cold-light activation",
      "Fluoride mineral replenishment for enamel protection"
    ],
    procedureStepsBn: [
      "মাড়ি সুরক্ষার জন্য বিশেষ প্রটেক্টিভ জেল প্রয়োগ",
      "প্রিমিয়াম হোয়াইটেনিং ম্যাট্রিক্সের প্রলেপ",
      "লেজার অ্যাক্টিভেশনের মাধ্যমে দাগ দূরীকরণ",
      "ফ্লোরাইড কোটিং দিয়ে এনামেল সুরক্ষিত রাখা"
    ],
    icon: "Sun",
    isPopular: true
  },
  {
    id: "composite-bonding",
    category: "cosmetic",
    titleEn: "Aesthetic Composite Bonding",
    titleBn: "কম্পোজিট রেজিন বন্ডিং",
    subtitleEn: "Seamless single-visit artistry for chips, cracks, and midline diastemas",
    subtitleBn: "এক ভিজিটেই দাঁতের ফাঁক বা ভাঙা অংশ স্বাভাবিক করে তোলা",
    descriptionEn: "Direct artistic layering using nano-hybrid composite materials that mimic the light refraction and dentin gradation of natural teeth.",
    descriptionBn: "দাঁতের মাঝখানের ফাঁক কিংবা কোনো কোণা ভেঙে গেলে নিখুঁত কালার ম্যাচিং করে ঠিক করা।",
    benefitsEn: [
      "Completed in a single pleasant afternoon session",
      "Preserves 100% of your natural tooth structure",
      "Cost-effective aesthetic enhancement with immediate results"
    ],
    benefitsBn: [
      "একই দিনে ঝামেলাহীন সমাধান",
      "দাঁত ক্ষয় না করেই সুন্দর আকার দেওয়া",
      "বাজেট-বান্ধব ও তাৎক্ষণিক আত্মবিশ্বাস বৃদ্ধি"
    ],
    duration: "40-60 Minutes",
    painLevel: "Zero-Pain",
    priceRange: "BDT 2,500 – 4,500 / tooth",
    procedureStepsEn: [
      "Spectrophotometer shade matching",
      "Gentle surface preparation without drilling",
      "Artisanal micro-layering of resin",
      "Diamond bur contouring and diamond paste polishing"
    ],
    procedureStepsBn: [
      "দাঁতের সঠিক রঙের সাথে শেড ম্যাচিং",
      "পৃষ্ঠতল প্রস্তুতকরণ",
      "রেজিন লেয়ারিং ও আকৃতি প্রদান",
      "ডায়মন্ড পলিশিং ফিনিশ"
    ],
    icon: "ShieldCheck"
  },

  // 2. General & Restorative Dentistry
  {
    id: "painless-rct",
    category: "general",
    titleEn: "Rotary Pain-Free Root Canal (RCT)",
    titleBn: "ব্যথামুক্ত রোটারি রুট ক্যানেল (RCT)",
    subtitleEn: "Save your natural tooth with computerized apex localization and micro-rotary instruments",
    subtitleBn: "আধুনিক রোটারি পদ্ধতিতে ব্যথা ছাড়া নষ্ট দাঁত সংরক্ষণ",
    descriptionEn: "Gone are the days of painful dental treatments. Our computerized rotary endodontic system gently cleans and seals deep infections with zero procedural discomfort.",
    descriptionBn: "কম্পিউটারাইজড এপেক্স লোকেটার ও রোটারি ফাইলের সাহায্যে গভীর সংক্রমণ দূর করে নিজস্ব দাঁত সারাজীবন সুস্থ রাখুন।",
    benefitsEn: [
      "Double-buffered computer anesthesia ensures zero pain",
      "Completed in 1-2 smooth visits using rotary precision",
      "High-resolution digital X-rays with 90% reduced radiation"
    ],
    benefitsBn: [
      "বিশেষ অ্যানেসথেসিয়ার কারণে কোনো ব্যথা হয় না",
      "রোটারি টেকনোলজিতে দ্রুত ১-২ সেশনেই সম্পন্ন",
      "কম রেডিয়েশনের ডিজিটাল এক্স-রে প্রযুক্তি"
    ],
    duration: "45-60 Minutes",
    painLevel: "Zero-Pain",
    priceRange: "BDT 3,500 – 6,000 / tooth",
    procedureStepsEn: [
      "Topical soothing gel followed by computer-guided local numbing",
      "Isolation with rubber dam for sterile field protection",
      "Computerized rotary debridement of infected nerve canal",
      "Hermetic thermo-plasticized gutta-percha seal and permanent core"
    ],
    procedureStepsBn: [
      "ব্যথাহীন অবশ করার আধুনিক প্রযুক্তি",
      "ইনফেকশন জীবাণুমুক্ত করার জন্য রাবার ড্যাম সুরক্ষা",
      "রোটারি যন্ত্রে ক্যানেল পরিষ্কার ও জীবাণুমুক্তকরণ",
      "স্থায়ী সিলিং ও ক্যাপের প্রস্তুতি"
    ],
    icon: "Zap",
    isPopular: true
  },
  {
    id: "ultrasonic-scaling",
    category: "general",
    titleEn: "Ultrasonic Deep Scaling & Air Polishing",
    titleBn: "আল্ট্রাসনিক স্কেলিং ও এয়ার পলিশিং",
    subtitleEn: "Sub-gingival calculus removal, stain elimination, and healthy pink gum restoration",
    subtitleBn: "মাড়ির রক্ত পড়া ও দুর্গন্ধ দূর করে স্বাস্থ্যকর দাঁতের পরিচ্ছন্নতা",
    descriptionEn: "Piezoelectric ultrasonic vibration gently dislodges hardened tartar without scratching enamel, followed by bicarbonate air polishing for stain-free freshness.",
    descriptionBn: "দাঁতের পাথর ও জমে থাকা ময়লা নিরাপদে দূর করে মাড়ি থেকে রক্ত পড়া চিরতরে বন্ধ করার হাই-টেক চিকিৎসা।",
    benefitsEn: [
      "Stops gum bleeding, gingivitis, and bad breath immediately",
      "Air-powder polish cleans tight interdental spaces",
      "Strengthens tooth anchoring and gum reattachment"
    ],
    benefitsBn: [
      "মাড়ি থেকে রক্ত পড়া ও মুখের দুর্গন্ধ দূর করে",
      "দাঁতের ফাঁকফোকরের লুকানো দাগ দূর করে",
      "দাঁতের গোড়া শক্ত ও সুস্থ রাখে"
    ],
    duration: "30-40 Minutes",
    painLevel: "Comfortable",
    priceRange: "BDT 1,500 – 2,500",
    procedureStepsEn: [
      "Periodontal pocket depth mapping",
      "Ultrasonic cavitation to dissolve hard tartar deposits",
      "Subgingival irrigation with antibacterial rinse",
      "Micro-fine bicarbonate air abrasion polish"
    ],
    procedureStepsBn: [
      "মাড়ির সুস্থতা পর্যবেক্ষণ",
      "আল্ট্রাসনিক ভাইব্রেশনে পাথর পরিষ্কার",
      "অ্যান্টিব্যাকটেরিয়াল মাউথওয়াশ ফ্লাশিং",
      "স্মুথ পলিশিং যাতে পুনরায় ময়লা না জমে"
    ],
    icon: "Droplets"
  },
  {
    id: "zirconia-crowns",
    category: "general",
    titleEn: "All-Ceramic Zirconia Crowns & Bridges",
    titleBn: "জারকোনিয়া ডেন্টাল ক্রাউন ও ব্রিজ",
    subtitleEn: "Biocompatible, metal-free strength with natural light-transmitting beauty",
    subtitleBn: "মেটালবিহীন প্রাকৃতিক দেখতে শতভাগ টেকসই দাঁতের ক্যাপ",
    descriptionEn: "CAD/CAM milled solid zirconia crowns provide exceptional fracture resistance and zero black metal margins around your gumline.",
    descriptionBn: "ভাঙা বা রুট ক্যানেল করা দাঁতের উপর মেটাল ছাড়া জারকোনিয়া ক্যাপ যা দেখতে অবিকল আসল দাঁতের মতো।",
    benefitsEn: [
      "100% metal-free: no grey margin darkening over time",
      "Diamond-like durability with gentle opposing-tooth wear",
      "5 to 10-year clinic warranty on premium CAD/CAM crowns"
    ],
    benefitsBn: [
      "মাড়ির পাশে কোনো কালো দাগ পড়ে না",
      "খাবার চিবানোর শতভাগ প্রাকৃতিক অনুভূতি ও দীর্ঘ স্থায়িত্ব",
      "ওয়ারেন্টি সহ প্রিমিয়াম কোয়ালিটি"
    ],
    duration: "2 Visits",
    painLevel: "Comfortable",
    priceRange: "BDT 5,000 – 12,000 / unit",
    procedureStepsEn: [
      "Precision 3D optical scanning of the prepared tooth",
      "Custom shade and translucency matching with neighboring teeth",
      "Robotic CAD/CAM milling and high-temperature sintering",
      "Permanent resin cementation and occlusal harmony check"
    ],
    procedureStepsBn: [
      "দাঁতের ৩ডি ডিজিটাল মাপ গ্রহণ",
      "পাশের দাঁতের সাথে রঙ ও আকারের নিখুঁত মিল",
      "সিএডি/সিএএম আধুনিক প্রযুক্তিতে তৈরি",
      "স্থায়ী সিমেন্টেশন ও কামড়ের ব্যালেন্সিং"
    ],
    icon: "ShieldAlert"
  },

  // 3. Orthodontics & Alignment
  {
    id: "clear-aligners",
    category: "ortho",
    titleEn: "Invisible Clear Aligners",
    titleBn: "স্বচ্ছ ক্লিয়ার অ্যালাইনার্স (অদৃশ্য ব্রেসেস)",
    subtitleEn: "Straighten your smile discreetly without metal wires or food restrictions",
    subtitleBn: "কোনো তার বা মেটাল ছাড়া আধুনিক স্বচ্ছ ট্রে দিয়ে আঁকাবাঁকা দাঁত সোজা করুন",
    descriptionEn: "Custom medical-grade thermo-plastic aligners that gently guide your teeth into ideal alignment. Removable for eating, brushing, and important presentations.",
    descriptionBn: "মেটাল ব্রেসিসের যন্ত্রণা ছাড়া সম্পূর্ণ স্বচ্ছ অ্যালাইনারের মাধ্যমে যেকোনো বয়সেই আঁকাবাঁকা দাঁত সোজা করার আধুনিক পদ্ধতি।",
    benefitsEn: [
      "Virtually invisible from normal conversation distance",
      "Removable at will for meals, photos, and hygiene",
      "3D digital progression simulation shows final smile before starting"
    ],
    benefitsBn: [
      "বাইরে থেকে বোঝা যায় না বললেই চলে",
      "খাওয়ার সময় খুলে রাখা যায়, খাবারের কোনো বিধিনিষেধ নেই",
      "শুরু করার আগেই কম্পিউটারে দেখে নিন ফাইনাল রেজাল্ট"
    ],
    duration: "6 - 12 Months",
    painLevel: "Minimal / Mild",
    priceRange: "BDT 45,000 – 90,000 / treatment",
    procedureStepsEn: [
      "High-precision intraoral digital scan and photo profile",
      "Custom algorithmic tooth movement trajectory planning",
      "Delivery of sequential set of custom-milled trays",
      "Bi-weekly aligner swap with periodic clinic reviews"
    ],
    procedureStepsBn: [
      "মুখের ভেতরের ডিজিটাল ৩ডি স্ক্যান",
      "দাঁতের নড়াচড়ার নিখুঁত কম্পিউটার সিমুলেশন",
      "পর্যায়ক্রমিক অ্যালাইনার ট্রে প্রদান",
      "প্রতি ২ সপ্তাহ পর পর নতুন ট্রে ব্যবহার"
    ],
    icon: "Smile"
  },
  {
    id: "dental-implants",
    category: "ortho",
    titleEn: "Titanium Dental Implants",
    titleBn: "টাইটানিয়াম ডেন্টাল ইমপ্ল্যান্ট",
    subtitleEn: "Permanent root replacement for missing teeth with lifelong bone preservation",
    subtitleBn: "হারিয়ে যাওয়া দাঁতের জায়গায় স্থায়ী আসল দাঁতের মতো নতুন দাঁত বসানো",
    descriptionEn: "Grade-4 medical titanium implants fuse seamlessly with the jawbone, restoring full chewing power and preventing facial bone collapse.",
    descriptionBn: "পাশের সুস্থ দাঁত না কেটে শুধু ফাঁকা জায়গায় স্থায়ীভাবে নতুন দাঁত প্রতিস্থাপন।",
    benefitsEn: [
      "Permanent solution that feels and chews like a natural tooth",
      "Prevents bone loss and premature facial sagging",
      "Preserves adjacent healthy teeth without cutting them"
    ],
    benefitsBn: [
      "আসল দাঁতের মতো শক্ত খাবার চিবানোর ক্ষমতা",
      "চোয়ালের হাড় ক্ষয় রোধ করে মুখের তারুণ্য বজায় রাখে",
      "পাশের কোনো দাঁত কাটার প্রয়োজন হয় না"
    ],
    duration: "2-3 Months Total",
    painLevel: "Zero-Pain",
    priceRange: "BDT 35,000 – 60,000",
    procedureStepsEn: [
      "CBCT 3D bone density assessment",
      "Computer-guided micro-surgical titanium placement",
      "Osseointegration healing phase (8-12 weeks)",
      "Custom abutment attachment and permanent crown screw/cement"
    ],
    procedureStepsBn: [
      "৩ডি এক্স-রে ও হাড়ের ঘনত্ব পরীক্ষা",
      "ব্যথাহীন মাইক্রো-সার্জারিতে ইমপ্ল্যান্ট স্থাপন",
      "হাড়ের সাথে ইমপ্ল্যান্টের প্রাকৃতিক সংযোগ কাল",
      "স্থায়ী দাঁতের ক্যাপ স্থাপন"
    ],
    icon: "Anchor"
  },

  // 4. Physiotherapy & Rehabilitation
  {
    id: "tmj-physio",
    category: "physio",
    titleEn: "TMJ Jaw Pain & Craniofacial Physiotherapy",
    titleBn: "টিএমজে (TMJ) চোয়ালের ব্যথা ও ক্র্যানিওফেসিয়াল থেরাপি",
    subtitleEn: "Targeted neuromuscular therapy for jaw clicking, lockjaw, and tension headaches",
    subtitleBn: "মুখ খুলতে বা বন্ধ করতে চোয়ালের ব্যথা, ক্লিক শব্দ ও মাথাব্যথার বিশেষ থেরাপি",
    descriptionEn: "Our specialized dual-care protocol uniquely bridges dental occlusion and craniomandibular physiotherapy to relieve myofascial jaw pain, bruxism, and chronic neck-jaw tension.",
    descriptionBn: "খান সেন্টারের বিশেষ সুবিধা—ডেন্টাল ও ফিজিওথেরাপির যৌথ সমন্বয়ে চোয়াল আটকানো, কানের পাশের ব্যথা ও রাতের দাঁত কাটার স্থায়ী আরামদায়ক চিকিৎসা।",
    benefitsEn: [
      "Eliminates jaw clicking, stiffness, and chewing soreness",
      "Relieves secondary migraine and cervicogenic headaches",
      "Includes personalized night guard adjustment & mobilization"
    ],
    benefitsBn: [
      "চোয়ালের খটখট শব্দ ও আড়ষ্ট ভাব দূর করে",
      "চোয়াল থেকে মাথা ও ঘাড়ে ছড়িয়ে পড়া ব্যথা উপশম",
      "বিশেষ ম্যানুয়াল এক্সারসাইজ ও রিলাক্সেশন কৌশল"
    ],
    duration: "45 Minutes",
    painLevel: "Zero-Pain",
    priceRange: "BDT 1,200 – 2,000 / session",
    procedureStepsEn: [
      "Cranio-mandibular range of motion and joint palpation",
      "Deep tissue intraoral and extraoral pterygoid mobilization",
      "Therapeutic ultrasound or micro-current electrotherapy",
      "Posture retraining and isometric stabilization exercise plan"
    ],
    procedureStepsBn: [
      "চোয়ালের নড়াচড়া ও পেশীর টান পুঙ্খানুপুঙ্খ পরীক্ষা",
      "চোয়ালের পেশীর বিশেষ ম্যানুয়াল রিলিজ থেরাপি",
      "থেরাপিউটিক আল্ট্রাসাউন্ড বা ইলেক্টোথেরাপি প্রয়োগ",
      "দৈনন্দিন অভ্যাস ও ঘাড়-চোয়ালের ভঙ্গি সংশোধনের ব্যায়াম"
    ],
    icon: "Activity",
    isPopular: true
  },
  {
    id: "cervical-spine-rehab",
    category: "physio",
    titleEn: "Cervical & Lumbar Spine Rehabilitation",
    titleBn: "ঘাড় ও কোমরের স্পাইন রিহ্যাবিলিটেশন",
    subtitleEn: "Non-surgical relief for slipped disc, sciatica, text-neck, and chronic back spasm",
    subtitleBn: "অপারেশন ছাড়া ঘাড়-কোমরের ডিস্ক সমস্যা, সায়াটিকা ও ব্যথার বৈজ্ঞানিক থেরাপি",
    descriptionEn: "Evidence-based manual therapy, gentle mechanical traction, and clinical exercise regimens designed to decompress spinal nerve roots and restore fluid mobility.",
    descriptionBn: "দীর্ঘক্ষণ কম্পিউটারে বসে কাজ করার কারণে ঘাড় ও পিঠের শক্ত হয়ে যাওয়া এবং স্পাইনাল নার্ভের চাপের জন্য আধুনিক রিহ্যাবিলিটেশন।",
    benefitsEn: [
      "Reduces nerve compression without systemic pharmaceuticals",
      "Restores natural lordotic curve and pain-free bending",
      "Women-specialist guided therapeutic posture coaching"
    ],
    benefitsBn: [
      "ওষুধের পার্শ্বপ্রতিক্রিয়া ছাড়াই নার্ভের চাপ হ্রাস",
      "ঘাড় ও কোমর ঘোরানোর স্বাভাবিক ক্ষমতা পুনরুদ্ধার",
      "নারী চিকিৎসকের নিবিড় ব্যক্তিগত যত্ন"
    ],
    duration: "50 Minutes",
    painLevel: "Comfortable",
    priceRange: "BDT 1,000 – 1,800 / session",
    procedureStepsEn: [
      "Neurological screening and dermatome/myotome reflex test",
      "Gentle manual spinal mobilization and facet release",
      "Interferential therapy (IFT) and focused deep heat",
      "Core muscle reactivation and ergonomic workstation guidance"
    ],
    procedureStepsBn: [
      "স্নায়বিক পরীক্ষা ও ব্যথার মূল উৎস শনাক্তকরণ",
      "কোমল ম্যানুয়াল থেরাপির মাধ্যমে স্পাইন রিলিজ",
      "আইএফটি (IFT) ও আধুনিক হিট থেরাপি প্রয়োগ",
      "মেরুদণ্ডের কোর মাসল শক্তিশালী করার বিশেষ ব্যায়াম"
    ],
    icon: "HeartPulse"
  },
  {
    id: "paralysis-neuro-rehab",
    category: "physio",
    titleEn: "Stroke & Neurological Rehabilitation",
    titleBn: "স্ট্রোক ও নিউরো রিহ্যাবিলিটেশন",
    subtitleEn: "Compassionate re-education of motor skills, balance, and daily living independence",
    subtitleBn: "প্যারালাইসিস বা ব্রেইন স্ট্রোক পরবর্তী হাত-পায়ের স্বাভাবিক ক্ষমতা ফিরে পাওয়ার থেরাপি",
    descriptionEn: "Structured Bobath and PNF neuromuscular facilitation to restore muscle tone, combat spasticity, and help recovering patients regain personal autonomy.",
    descriptionBn: "স্ট্রোক পরবর্তী শরীরের একপাশ অবশ হওয়া রোগীদের আবার নিজের পায়ে দাঁড় করানো ও স্বাভাবিক জীবনে ফেরানোর বিশেষায়িত সেবা।",
    benefitsEn: [
      "Individualized 1-on-1 therapist dedicated sessions",
      "Gait trainer and balance coordination exercises",
      "Family coaching for home care and mobility assistance"
    ],
    benefitsBn: [
      "১-অন-১ নিবেদিত থেরাপিস্টের নিবিড় তত্ত্বাবধান",
      "হাঁটার ব্যালেন্স ও সমন্বয় ফিরিয়ে আনার বিশেষ এক্সারসাইজ",
      "রোগীর পরিবারের সদস্যদের বাসায় যত্নের সঠিক দিকনির্দেশনা"
    ],
    duration: "60 Minutes",
    painLevel: "Comfortable",
    priceRange: "BDT 1,200 – 2,200 / session",
    procedureStepsEn: [
      "Functional motor assessment and baseline score",
      "Proprioceptive neuromuscular facilitation (PNF)",
      "Passive and active-assisted range of motion drill",
      "Balance platform training and fine-motor coordination"
    ],
    procedureStepsBn: [
      "রোগীর বর্তমান শারীরিক সক্ষমতা মূল্যায়ন",
      "পেশীর স্টিফনেস দূর করার নিউরো ফেসিলেশন",
      "হাত ও পায়ের সক্রিয় ও সহায়ক ব্যায়াম",
      "হাঁটা ও দৈনন্দিন কাজ করার রিহ্যাবিলিটেশন"
    ],
    icon: "UserCheck"
  }
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    titleEn: "Personalized Digital Consultation",
    titleBn: "ডিজিটাল পর্যবেক্ষণ ও কাউন্সেলিং",
    subtitleEn: "We listen first, photograph in high definition, and co-plan your care",
    subtitleBn: "আগে মন দিয়ে শোনা, হাই-ডেফিনিশন স্ক্যান এবং আপনার সাথে যৌথ পরিকল্পনা",
    descriptionEn: "No rushed appointments. We sit together in our quiet consultation suite, review intraoral 3D scans on a private screen, discuss your goals, and answer every single question with transparent pricing upfront.",
    descriptionBn: "কোনো তাড়াহুড়ো নয়। শান্ত ও পরিচ্ছন্ন পরিবেশে আপনার সমস্যার কথা শোনা হবে, স্ক্রিনে দাঁতের অবস্থা দেখানো হবে এবং চিকিৎসার বিস্তারিত খরচ ও ধাপ পরিষ্কারভাবে জানানো হবে।",
    amenitiesEn: [
      "Intraoral HD visual camera display",
      "Zero-pressure diagnostic breakdown",
      "Complimentary herbal tea or bottled mineral water"
    ],
    amenitiesBn: [
      "এইচডি ইন্ট্রাঅরাল ক্যামেরায় লাইভ অবস্থা দেখা",
      "কোনো জোরজবরদস্তি ছাড়া সঠিক পরামর্শ",
      "পরিচ্ছন্ন ও শান্ত রিসেপশন লাউঞ্জ"
    ],
    icon: "MessageSquare"
  },
  {
    step: "02",
    titleEn: "Pain-Free Precision Gentle Care",
    titleBn: "ব্যথাহীন আল্ট্রা-জেন্টল ট্রিটমেন্ট",
    subtitleEn: "Modern buffering anesthetics & delicate touch from empathetic doctors",
    subtitleBn: "বিশেষ অ্যানেসথেসিয়া ও নারী চিকিৎসকদের আন্তরিক ও কোমল হাতের সেবা",
    descriptionEn: "Fear of dental drills or painful physio is a relic of the past. Our women-led team uses topical numbing before any injection, gentle vibration dampeners, and ergonomic body-support positioning.",
    descriptionBn: "ইনজেকশন দেওয়ার আগেই বিশেষ জেল দিয়ে মাড়ি অবশ করা হয়, ফলে সুইয়ের কোনো কামড়ও অনুভূত হয় না। আমাদের নারী ডাক্তারদের কোমল হাতের স্পর্শে রোগীরা সম্পূর্ণ নিশ্চিন্ত বোধ করেন।",
    amenitiesEn: [
      "Topical micro-anesthetic gel (zero needle sting)",
      "Rotary micro-instruments with whisper-quiet motors",
      "Patient stop-signal hand control at all times"
    ],
    amenitiesBn: [
      "ইনজেকশন ব্যথাহীন করার বিশেষ অবশ জেল",
      "শব্দহীন শান্ত আধুনিক রোটারি মেশিন",
      "ট্রিটমেন্টের মাঝে রোগীর সুবিধা অনুযায়ী বিরতি"
    ],
    icon: "Feather"
  },
  {
    step: "03",
    titleEn: "Relaxing Spa-Inspired Amenities",
    titleBn: "রিলাক্সিং স্পা-সদৃশ পরিবেশ",
    subtitleEn: "Soothing acoustic ambiance, memory foam chairs, and calm lighting",
    subtitleBn: "মনোরম শান্ত সঙ্গীত, নরম মেমোরি ফোম চেয়ার ও সুবাসিত পরিচ্ছন্নতা",
    descriptionEn: "Step into an ambient atmosphere that feels like a wellness spa rather than a clinical hospital. Ergonomic memory foam dental chairs relieve spinal pressure while gentle ambient acoustic playlists melt away anxiety.",
    descriptionBn: "হাসপাতালের চেনা গন্ধ বা ভয়ের পরিবেশের বদলে আমাদের সেন্টারে পাবেন প্রশান্তিময় সুবাসিত পরিবেশ ও স্বস্তিদায়ক চেয়ার, যাতে আপনি পুরোপুরি শিথিল থাকতে পারেন।",
    amenitiesEn: [
      "Contoured cervical memory foam neck pillows",
      "Noise-cancelling headsets with ambient relaxation audio",
      "Sterile hospital-grade Class-B autoclave hygiene"
    ],
    amenitiesBn: [
      "ঘাড়ের আরামদায়ক মেমোরি ফোম পিলো",
      "শব্দরোধক হেডফোনে পছন্দের শান্ত সুর",
      "আন্তর্জাতিক মানের ক্লাস-বি অটোক্লেভ জীবাণুমুক্তকরণ"
    ],
    icon: "Sparkle"
  },
  {
    step: "04",
    titleEn: "Dedicated Aftercare & Support",
    titleBn: "আফটারকেয়ার ও আজীবন সহায়তা",
    subtitleEn: "Direct WhatsApp check-ins, recovery guides, and preventative wellness",
    subtitleBn: "হোয়াটসঅ্যাপে ফলো-আপ, সুনির্দিষ্ট রিকভারি নির্দেশিকা ও নিয়মিত খোঁজ",
    descriptionEn: "Your journey doesn't end when you leave our doors. Every patient receives a follow-up check-in, detailed printed & digital care instructions, and priority direct access to your treating doctor for any questions.",
    descriptionBn: "ট্রিটমেন্ট শেষেই আমাদের দায়িত্ব শেষ হয় না। পরবর্তীতে রোগী কেমন আছেন তা জানতে সরাসরি ফলো-আপ এবং যেকোনো প্রয়োজনে সার্বক্ষণিক জরুরি পরামর্শের সুবিধা থাকে।",
    amenitiesEn: [
      "Direct 24/7 emergency WhatsApp line (01921-553385)",
      "Complimentary follow-up assessment within 14 days",
      "Clear warranty certificates on crowns and implants"
    ],
    amenitiesBn: [
      "সরাসরি হোয়াটসঅ্যাপে চিকিৎসকের সাথে যোগাযোগ",
      "১৪ দিনের মধ্যে ফ্রি ফলো-আপ চেকআপ",
      "ক্যাপ ও ইমপ্ল্যান্টের ক্ষেত্রে নিশ্চয়তাপত্র"
    ],
    icon: "Heart"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    titleEn: "Porcelain Veneer Smile Transformation",
    titleBn: "পোরসেলিন ভেনিয়ার স্মাইল রিমেক",
    procedureEn: "6 Upper Aesthetic Porcelain Veneers & Edge Alignment",
    procedureBn: "উপরের ৬টি দাঁতের সিরামিক ভেনিয়ার ও নিখুঁত অ্যালাইনমেন্ট",
    timeframeEn: "Completed in 2 appointments (7 days total)",
    timeframeBn: "মাত্র ২ ভিজিটে (মোট ৭ দিনে সম্পন্ন)",
    detailsEn: "Patient arrived with noticeable enamel yellowing, minor crowding, and uneven incisal edges. Six custom-layered porcelain veneers restored a bright, youthful, and harmonious smile curve.",
    detailsBn: "দাঁতের হলুদ ভাব ও অমসৃণ কিনারা দূর করে প্রিমিয়াম পোরসেলিন ভেনিয়ারের মাধ্যমে ঝকঝকে ও নিখুঁত প্রাকৃতিক হাসির রূপায়ন।",
    beforeImg: "/src/assets/images/before_teeth_smile_1793873791474.jpg",
    afterImg: "/src/assets/images/after_teeth_smile_1793873790802.jpg",
    doctorNoteEn: "Preserved over 95% of natural enamel with micro-prep techniques. Beautiful natural translucency.",
    doctorNoteBn: "দাঁতের নিজস্ব এনামেল অক্ষুণ্ণ রেখে মাইক্রো-প্রিপারেশনে তৈরি। শতভাগ প্রাকৃতিক সৌন্দর্য।"
  },
  {
    id: "case-2",
    titleEn: "Laser Teeth Whitening & Deep Stain Removal",
    titleBn: "লেজার টিথ হোয়াইটেনিং ও দাগ অপসারণ",
    procedureEn: "Cold-Light Phototherapy Whitening (Full Mouth)",
    procedureBn: "কোল্ড-লাইট লেজার থেরাপির মাধ্যমে গভীর দাগ মুক্তকরণ",
    timeframeEn: "Single 45-minute clinic session",
    timeframeBn: "একক ৪৫ মিনিটের শান্ত সেশন",
    detailsEn: "Severe tetracycline and tea staining treated with a non-acidic desensitizing cold laser matrix. Achieved 7 full VITA shades of brightness with zero post-treatment tingling.",
    detailsBn: "চা-কফির জেদি দাগ ও বয়সের কারণে হওয়া বিবর্ণ ভাব সম্পূর্ণ দূর করে দাঁতকে করা হয়েছে প্রাকৃতিক উজ্জ্বল ও ধবধবে।",
    beforeImg: "/src/assets/images/before_teeth_smile_1793873791474.jpg",
    afterImg: "/src/assets/images/after_teeth_smile_1793873790802.jpg",
    doctorNoteEn: "Enamel luster maintained with our proprietary post-whitening remineralizing treatment.",
    doctorNoteBn: "হোয়াইটেনিংয়ের পর বিশেষ রিমিনারেলাইজিং কোটিং প্রয়োগ করায় কোনো শিরশির ভাব হয়নি।"
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Tanzina Hossain",
    authorLocation: "Sayed Nagar, Vatara, Dhaka",
    rating: 5,
    date: "2 weeks ago",
    serviceCategory: "dental",
    textEn: "Khan Dental is truly exceptional. As a woman, I was so relieved to find such experienced female doctors who handle everything with extreme gentleness. My root canal was 100% painless! The clinic is spotless and feels like a luxury lounge. Highly recommend to everyone in Vatara & Baridhara.",
    textBn: "খান ডেন্টাল ক্লিনিক সত্যিই অসাধারণ। নারী চিকিৎসকদের এত বিনয়ী ও যত্নশীল ব্যবহার দেখে খুব ভালো লেগেছে। আমার রুট ক্যানেলে বিন্দুমাত্র ব্যথা লাগেনি! ক্লিনিকটি অত্যন্ত পরিষ্কার ও অভিজাত। ভাটারা ও সাঈদ নগরের সবার জন্য সেরা ঠিকানা।",
    verified: true,
    highlight: "100% Painless Root Canal & Caring Female Doctors"
  },
  {
    id: "rev-2",
    author: "Ashraful Islam",
    authorLocation: "Vatara, Dhaka",
    rating: 5,
    date: "1 month ago",
    serviceCategory: "physio",
    textEn: "I was suffering from severe lower back pain and stiffness from sitting at a desk all day. The physiotherapy team here diagnosed the exact nerve trigger and treated me with ultrasound and manual therapy. Within 4 sessions I am completely pain-free and back to my gym routine.",
    textBn: "অনেকদিন ধরে অফিসে দীর্ঘক্ষণ বসে থাকার কারণে কোমরের তীব্র ব্যথায় ভুগছিলাম। এখানকার ফিজিওথেরাপিস্ট খুব নিখুঁতভাবে পরীক্ষা করে আল্ট্রাসাউন্ড ও এক্সারসাইজ করান। মাত্র ৪ সেশনেই আমি সম্পূর্ণ সুস্থ।",
    verified: true,
    highlight: "Back Pain Relieved in 4 Sessions"
  },
  {
    id: "rev-3",
    author: "Farhana Yasmin",
    authorLocation: "Sayed Nagar (Near Boro Mosjid)",
    rating: 5,
    date: "2 months ago",
    serviceCategory: "dental",
    textEn: "Got my scaling and teeth whitening done right here at the Sayed Nagar branch near doshtala circle. The doctors explained every step patiently. No bleeding, no discomfort, and my smile looks so clean and radiant now. And their evening hours starting from 5 PM are so convenient after office!",
    textBn: "দশভাঙ্গা/দশতোলা মোড়ের কাছেই সায়েদ নগর ব্রাঞ্চে গিয়ে স্কেলিং ও হোয়াইটেনিং করিয়েছি। ডাক্তার আপারা অত্যন্ত ধৈর্য সহকারে বুঝিয়েছেন। কোনো ব্যথা নেই, কোনো অস্বস্তি নেই। অফিস শেষে বিকাল ৫টার পর যাওয়া যায়—এটা অনেক বড় সুবিধা!",
    verified: true,
    highlight: "Convenient Evening Clinic Hours After Work"
  },
  {
    id: "rev-4",
    author: "Mahmudul Hasan",
    authorLocation: "Madani Avenue / 100 Feet, Dhaka",
    rating: 4,
    date: "3 months ago",
    serviceCategory: "dental",
    textEn: "Great modern dental center in the Vatara area. Got a tooth cap (zirconia crown) and it fits seamlessly like my real tooth. Staff is courteous, prices are very reasonable compared to big corporate hospitals in Gulshan.",
    textBn: "ভাটারা এলাকায় অত্যন্ত আধুনিক মানের ডেন্টাল সেন্টার। জারকোনিয়া ক্রাউন করিয়েছি যা দেখতে আসল দাঁতের মতো। গুলশানের বড় হাসপাতালের চেয়ে খরচ অনেক সাশ্রয়ী কিন্তু সেবার মান অসাধারণ।",
    verified: true,
    highlight: "Premium Zirconia Crown at Fair Pricing"
  },
  {
    id: "rev-5",
    author: "Shamima Akhter",
    authorLocation: "Cumilla Para, Vatara",
    rating: 5,
    date: "3 months ago",
    serviceCategory: "physio",
    textEn: "I had clicking sound and terrible pain in my jaw while chewing (TMJ). Most doctors only suggested painkillers, but Khan Clinic provided specialized jaw physiotherapy combined with dental checkup. It worked like a miracle! The female physiotherapist is so knowledgeable.",
    textBn: "আমার চোয়াল খুলতে গেলে খটখট শব্দ হতো এবং খাবার চিবানো অসম্ভব ছিল। খান ক্লিনিকে ডেন্টাল ও ফিজিওথেরাপির যৌথ সমন্বিত চিকিৎসার ফলে আমি এখন স্বাভাবিকভাবে খেতে পারছি। অসাধারণ আন্তরিক সেবা।",
    verified: true,
    highlight: "Miraculous TMJ Jaw Pain Treatment"
  },
  {
    id: "rev-6",
    author: "Rezaul Karim",
    authorLocation: "Block-A, Sayed Nagar",
    rating: 5,
    date: "4 months ago",
    serviceCategory: "dental",
    textEn: "My daughter had intense toothache in the evening. Called their hotline 01921-553385 and they gave us an emergency slot at 6:30 PM. The doctors treated her with so much warmth that she didn't cry at all. Blessed to have such a reliable clinic right in our neighborhood.",
    textBn: "সন্ধ্যায় মেয়ের প্রচণ্ড দাঁতের ব্যথায় হটলাইন ০১৯২১-৫৫৩৩৮৫ তে কল করতেই সাড়ে ৬টায় জরুরি অ্যাপয়েন্টমেন্ট পাই। ডাক্তাররা এত আদর করে চিকিৎসা করলেন যে ও একটুও কাঁদেনি। আমাদের এলাকায় এমন ক্লিনিক পাওয়া সৌভাগ্যের।",
    verified: true,
    highlight: "Quick Emergency Response & Kid-Friendly Care"
  }
];

export const CLINIC_FAQS = [
  {
    qEn: "What are your exact clinic hours at Sayed Nagar, Vatara?",
    qBn: "সায়েদ নগর ব্রাঞ্চের চেম্বার সময়সূচী কী?",
    aEn: "We operate as an exclusive evening outpatient boutique clinic from 5:00 PM to 10:30 PM every day, including Friday and Saturday consultations. This makes it effortless for professionals, students, and families to visit after office hours without taking leave.",
    aBn: "আমরা প্রতিদিন বিকাল ৫:০০ টা থেকে রাত ১০:৩০ টা পর্যন্ত খোলা রাখি (শুক্র ও শনিবারেও)। অফিস বা কাজের পর সহজেই কোনো ছুটি না নিয়ে স্বাচ্ছন্দ্যে চিকিৎসা গ্রহণ করা যায়।"
  },
  {
    qEn: "How do I reach Khan Dental & Physiotherapy Centre from nearby areas?",
    qBn: "নিকটবর্তী এলাকা থেকে ক্লিনিকে কীভাবে আসা যাবে?",
    aEn: "Our location is House no-25, Road no-11/1, Block-A, Sayed Nagar, Vatara, Dhaka-1212. Landmark: Cumilla para, right at the circle of doshtala (দশতোলা মোড়), adjacent to Boro Mosjid. From Madani Avenue (100 Feet) or Notun Bazar / Baridhara, it takes only 5-8 minutes by rickshaw or CNG. Plus Code: QCWP+WV Dhaka.",
    aBn: "ঠিকানা: বাড়ি নং-২৫, রোড নং-১১/১, ব্লক-এ, সায়েদ নগর, ভাটারা, ঢাকা-১২১২। ল্যান্ডমার্ক: কুমিল্লা পাড়া, দশতোলা মোড় সংলগ্ন বড় মসজিদের কাছে। নতুন বাজার বা মাদানী এভিনিউ (১০০ ফিট) থেকে রিকশায় মাত্র ৫-৮ মিনিটে পৌঁছানো যায়।"
  },
  {
    qEn: "Is root canal treatment (RCT) really pain-free at your clinic?",
    qBn: "আপনাদের ক্লিনিকে রুট ক্যানেল ট্রিটমেন্ট কি আসলেই ব্যথামুক্ত?",
    aEn: "Yes, absolutely. We use computerized local anesthesia and micro-rotary instruments. We first numb the area with a sweet topical gel, so even the needle sensation is eliminated. Patients frequently relax and even listen to music during the entire 45-minute procedure.",
    aBn: "হ্যাঁ, সম্পূর্ণ ব্যথামুক্ত। ইনজেকশন দেওয়ার পূর্বে বিশেষ ফ্লেভারের অবশ করার জেল লাগানো হয়, ফলে সূঁচের অনুভূতিও হয় না। আধুনিক রোটারি মেশিনের সাহায্যে অত্যন্ত নিখুঁত ও আরামদায়কভাবে রুট ক্যানেল সম্পন্ন হয়।"
  },
  {
    qEn: "Why is having Physiotherapy and Dental Care in the same center beneficial?",
    qBn: "একই সেন্টারে ডেন্টাল ও ফিজিওথেরাপি থাকার সুবিধা কী?",
    aEn: "Many conditions—such as TMJ (jaw joint pain), bruxism (night teeth grinding), postural text-neck, and tension headaches—involve both dental bite occlusion and neck muscles. Having expert dentists and specialized physiotherapists working collaboratively provides holistic, lasting relief without unnecessary medications.",
    aBn: "চোয়ালের ব্যথা (TMJ), রাতে ঘুমের মধ্যে দাঁত কিড়মিড় করা, ঘাড় ও মাথার ব্যথা—এগুলো দাঁতের কামড় এবং ঘাড়ের পেশীর সাথে ঘনিষ্ঠভাবে সম্পর্কিত। আমাদের দুই বিভাগের চিকিৎসকরা একসাথে মিলে সমস্যার মূল কারণ চিহ্নিত করে সমন্বিত চিকিৎসা দেন।"
  },
  {
    qEn: "Do you offer priority care or comfort accommodations for female patients?",
    qBn: "নারী রোগীদের জন্য কি বিশেষ কোনো সুবিধা রয়েছে?",
    aEn: "Yes. Khan Dental & Physiotherapy Centre proudly identifies as a women-owned and specialist-led practice. Female patients enjoy complete privacy, respectful compassionate communication, and direct treatment by highly skilled female doctors and therapists.",
    aBn: "হ্যাঁ। আমাদের প্রতিষ্ঠানটি নারী চিকিৎসকদের নিবেদিত পরিচালনায় পরিচালিত। নারী রোগীদের জন্য রয়েছে শতভাগ গোপনীয়তা, মার্জিত ও মমতাময়ী পরিবেশ এবং নারী ডাক্তারদের সরাসরি সেবা।"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    titleEn: "Modern Examination Suite",
    titleBn: "আধুনিক এক্সামিনেশন স্যুট",
    category: "Clinic",
    img: "/src/assets/images/clinic_spa_suite_1793873791511.jpg",
    descEn: "Clean architectural ergonomics, soft warm cove illumination & Class-B autoclave sterilizers."
  },
  {
    id: "g2",
    titleEn: "Cosmetic Smile Makeover",
    titleBn: "কসমেটিক স্মাইল রূপায়ন",
    category: "Smiles",
    img: "/src/assets/images/hero_luxury_smile_1793873790288.jpg",
    descEn: "Radiant, natural smile balance achieved through precision aesthetic dentistry."
  },
  {
    id: "g3",
    titleEn: "Porcelain Veneer Precision",
    titleBn: "পোরসেলিন ভেনিয়ার ফিনিশিং",
    category: "Cosmetic",
    img: "/src/assets/images/after_teeth_smile_1793873790802.jpg",
    descEn: "Ultra-thin ceramic margins seamlessly mirroring natural enamel light refraction."
  },
  {
    id: "g4",
    titleEn: "Clinical Diagnostic Mapping",
    titleBn: "ক্লিনিক্যাল ডায়াগনস্টিক ম্যাপিং",
    category: "Procedures",
    img: "/src/assets/images/before_teeth_smile_1793873791474.jpg",
    descEn: "High-resolution micro-imaging ensuring thorough and transparent pre-treatment planning."
  }
];
