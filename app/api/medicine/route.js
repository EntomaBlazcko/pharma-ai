// app/api/medicine/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
    {
      _id: "1",
      name: "Paracetamol",
      genericName: "Acetaminophen",
      image: "/medicine-images/paracetamol.jpg",
      type: "Analgesic",
      form: "Tablet",
      uses: "Fever and mild to moderate pain relief",
      sideEffects: "Rare at recommended doses",
      precautions: "Do not exceed 4g per day",
      interactions: "Alcohol may increase liver damage risk",
      notFor: "People with severe liver impairment",
      storage: "Store below 25°C in a dry place",
      isOTC: true,
      dosage: "500mg every 4-6 hours as needed"
    },
    {
      _id: "2",
      name: "Ibuprofen",
      genericName: "Ibuprofen",
      image: "/medicine-images/ibuprofen.jpg",
      type: "NSAID",
      form: "Tablet",
      uses: "Pain, inflammation, fever",
      sideEffects: "May cause stomach upset",
      precautions: "Take with food or milk",
      interactions: "May interact with blood pressure medications",
      notFor: "People with stomach ulcers or severe kidney disease",
      storage: "Store at room temperature",
      isOTC: true,
      dosage: "200-400mg every 4-6 hours"
    },
    {
      _id: "3",
      name: "Cetirizine",
      genericName: "Cetirizine Hydrochloride",
      image: "/medicine-images/cetirizine.jpg",
      type: "Antihistamine",
      form: "Tablet",
      uses: "Allergy relief, hay fever",
      sideEffects: "Drowsiness (less common than older antihistamines)",
      precautions: "May impair reaction skills",
      interactions: "Alcohol may increase drowsiness",
      notFor: "Children under 2 years",
      storage: "Store below 30°C",
      isOTC: true,
      dosage: "10mg once daily"
    },
    
  ];

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(mockData);
}