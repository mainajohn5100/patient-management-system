export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Shamsidin Ali",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Delight",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Hillary OKi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan-Peter Oluoch",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Wanjiku",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Kipruto",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee Hassan",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Chege",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hannington Maloba",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
