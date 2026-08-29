export const CLINIC_INFO = {
  name: "Malliga Health Care, Complete Family Care",
  shortName: "Malliga Health Care",
  tagline: "Complete Family Care",
  phoneDisplay: "+91 97422 55887",
  phoneTel: "tel:+919742255887",
  phoneRaw: "+919742255887",
  whatsappUrl: "https://wa.me/919742255887?text=Hello%20Malliga%20Health%20Care%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment",
  address: {
    line1: "54, 7th Cross Road, adjacent to Udupi Upahaar Hotel",
    area: "V. V. Nagar, HMT Layout, Dinnur, RT Nagar",
    cityState: "Bengaluru, Karnataka 560032",
    full: "54, 7th Cross Road, adjacent to Udupi Upahaar Hotel, V. V. Nagar, HMT Layout, Dinnur, RT Nagar, Bengaluru, Karnataka 560032",
    landmark: "Adjacent to Udupi Upahaar Hotel"
  },
  rating: {
    score: "5.0",
    scale: "5.0 out of 5",
    totalReviews: "Google Reviews",
    verifiedReviewCount: "Verified Patient Reviews",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Malliga+Health+Care+54+7th+Cross+Road+RT+Nagar+Bengaluru+Karnataka+560032",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Malliga+Health+Care+54+7th+Cross+Road+RT+Nagar+Bengaluru+Karnataka+560032",
  consultationHours: [
    { 
      days: "Monday – Saturday", 
      time: "8:00 AM – 2:30 PM & 5:00 PM – 9:00 PM",
      morning: "8:00 AM – 2:30 PM",
      evening: "5:00 PM – 9:00 PM"
    },
    { 
      days: "Sunday", 
      time: "8:00 AM – 2:30 PM & 5:00 PM – 9:00 PM",
      morning: "8:00 AM – 2:30 PM",
      evening: "5:00 PM – 9:00 PM"
    },
  ]
};

export const SERVICES_DATA = [
  {
    id: "family-consultations",
    title: "Complete Family Healthcare",
    shortDesc: "Attentive routine check-ups, patient-friendly health consultations, and preventive medical care for every family member.",
    iconName: "Stethoscope",
    tag: "Family Care"
  },
  {
    id: "fever-infections",
    title: "Fever & Infection Care",
    shortDesc: "Prompt diagnosis and evidence-based care for viral fevers, seasonal infections, and acute illnesses.",
    iconName: "Thermometer",
    tag: "Acute Care"
  },
  {
    id: "diabetes-management",
    title: "Diabetes & Chronic Health",
    shortDesc: "Routine blood glucose monitoring, individualized lifestyle advice, and regular follow-up consultations.",
    iconName: "Activity",
    tag: "Chronic Care"
  },
  {
    id: "blood-pressure-care",
    title: "Blood Pressure & Wellness",
    shortDesc: "Comprehensive blood pressure tracking, cardiovascular wellness guidance, and routine health evaluations.",
    iconName: "HeartPulse",
    tag: "Routine Care"
  },
  {
    id: "in-house-facilities",
    title: "In-House Lab & Observation",
    shortDesc: "Equipped with in-house diagnostic lab support, ECG, observation beds, and supportive clinical care.",
    iconName: "ShieldCheck",
    tag: "Clinic Facility"
  },
  {
    id: "respiratory-care",
    title: "Respiratory & Allergy Care",
    shortDesc: "Attentive medical consultation for seasonal allergies, persistent cough, cold, and respiratory discomfort.",
    iconName: "Wind",
    tag: "General Care"
  }
];

export const BENEFITS_DATA = [
  {
    id: "patient-friendly-care",
    title: "Patient-Friendly Consultations",
    description: "Unrushed consultations where the doctor dedicates time to listen carefully, answer questions, and explain medical care in simple terms.",
    iconName: "UserCheck"
  },
  {
    id: "complete-family-care",
    title: "Complete Family Care",
    description: "Reliable healthcare for all age groups under one roof, focusing on comfort, mild medications, and long-term well-being.",
    iconName: "FileHeart"
  },
  {
    id: "in-house-facilities",
    title: "In-House Lab & Facilities",
    description: "Conveniently equipped with an in-house laboratory, observation beds for ECG, IV support, and essential day-care services.",
    iconName: "ShieldCheck"
  },
  {
    id: "convenient-rt-nagar",
    title: "Accessible RT Nagar Location",
    description: "Conveniently situated at 7th Cross Road, adjacent to Udupi Upahaar Hotel in Dinnur, RT Nagar for easy neighborhood access.",
    iconName: "MapPin"
  }
];

export const REVIEWS_DATA = [
  {
    id: "rev-1",
    author: "Mridusmita Sana",
    rating: 5,
    date: "Google Review",
    condition: "Patient Consultation & Checkup",
    text: "My visit was perfect. Dr gives time to see every patient, is very much polite & friendly. I was very comfortable throughout the checkup. I will recommend everyone who's near around RT Nagar or if it's from far also, it's worth visiting. Staffs are helpful also. Neat & clean area. Thank you so much.",
    verifiedGoogle: true,
  },
  {
    id: "rev-2",
    author: "Amarnath Dixit",
    rating: 5,
    date: "Google Review",
    condition: "Family Healthcare & In-House Lab",
    text: "I am in the RT Nagar area more than a decade. I was unable to find a suitable doctor who listens and is approachable. The medicines suggested are easily available. The facility is equipped with in-house lab, 2 beds in case of ECG, IV drips etc. Our family visits Dr. Uvaraj, his medicines suits us and are mild. I recommend Malliga Health Care.",
    verifiedGoogle: true,
  },
  {
    id: "rev-3",
    author: "sanu singh",
    rating: 5,
    date: "Google Review",
    condition: "Family Physician Care",
    text: "I got my Family Physician. Wonderful clinic, with all facilities available, Doctor Uvaraj is so good he has a healing touch. Thank you Doctor.",
    verifiedGoogle: true,
  }
];
