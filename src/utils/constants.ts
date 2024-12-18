import dayjs from "dayjs";

import TourPic1 from "../assets/images/tour-card-1.jpg";
import TourPic2 from "../assets/images/tour-card-2.jpg";
import TourPic3 from "../assets/images/tour-card-3.jpg";
import TourPic4 from "../assets/images/tour-card-4.jpg";
import TourPic5 from "../assets/images/tour-card-5.jpg";
import TourPic6 from "../assets/images/tour-card-6.jpg";
import TourPic7 from "../assets/images/tour-card-7.jpg";
import TourPic8 from "../assets/images/tour-card-8.jpg";

export const tourDetails = [
  {
    id: 1,
    name: "Pérez Art Museum Miami",
    description:
      "The Pérez Art Museum Miami — officially known as the Jorge M. Pérez Art Museum of Miami-Dade County—is a contemporary art museum that relocated in 2013 to the Museum Park in Downtown Miami, Florida. Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building designed by Herzog & de Meuron at 1103 Biscayne Boulevard.",
    city: "Miami",
    priceRange: "50 - 200",
    coverImage: TourPic1,
    images: [TourPic1, TourPic1, TourPic1, TourPic1, TourPic1],
    startDate: "2024-12-05",
    endDate: "2024-12-08",
    numOfDays: dayjs("2024-12-04").diff(dayjs("2024-12-01"), "day") + 1,
    included: {
      deptLocation: "2000 Brush St, Detroit, MI 48226, United States",
      return: "7:00 PM",
      features: [
        "Basic first aid kit",
        "Fuel Expense",
        "Detail Guided Maps",
        "Comfortable Private Booked Transport",
        "Mess Tent, Kitchen Utensils, and Cook",
        "Waterproof Tents on twin/triple Sharing",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Tours with American Sign Language",
          "Audio description group tours",
          "Large-print gallery notes",
          "Lunch Included",
        ],
      },
      {
        day: 2,
        weather: 23,
        schedule: [
          "Tours with American Sign Language",
          "Audio description group tours",
          "Large-print gallery notes",
          "Lunch Included",
        ],
      },
      {
        day: 3,
        weather: 21,
        schedule: [
          "Tours with American Sign Language",
          "Audio description group tours",
          "Large-print gallery notes",
          "Lunch Included",
        ],
      },
      {
        day: 4,
        weather: 19,
        schedule: [
          "Tours with American Sign Language",
          "Audio description group tours",
          "Large-print gallery notes",
          "Lunch Included",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Eiffel Tower",
    description:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognizable structures in the world.",
    city: "Paris",
    priceRange: "200 - 500",
    numOfDays: dayjs("2024-12-12").diff(dayjs("2024-12-10"), "day") + 1,
    coverImage: TourPic2,
    images: [TourPic2, TourPic2, TourPic2, TourPic2, TourPic2],
    startDate: "2024-12-10",
    endDate: "2024-12-12",
    included: {
      deptLocation:
        "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
      return: "6:00 PM",
      features: [
        "Guided tour",
        "Access to the summit",
        "Souvenir photos",
        "Lunch at the Eiffel Tower restaurant",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of the Eiffel Tower",
          "Access to the summit",
          "Lunch at the Eiffel Tower restaurant",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of the Eiffel Tower",
          "Access to the summit",
          "Lunch at the Eiffel Tower restaurant",
        ],
      },
      {
        day: 3,
        weather: 19,
        schedule: [
          "Guided tour of the Eiffel Tower",
          "Access to the summit",
          "Lunch at the Eiffel Tower restaurant",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Hagia Sophia",
    description:
      "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a Late Antique place of worship in Istanbul. Built in 537 as the patriarchal cathedral of the imperial capital of Constantinople, it was the largest Christian church of the eastern Roman Empire (the Byzantine Empire) and the Eastern Orthodox Church, except during the Latin Empire from 1204 to 1261, when it became the city's Latin Catholic cathedral.",
    city: "Istanbul",
    priceRange: "50 - 200",
    numOfDays: dayjs("2024-12-17").diff(dayjs("2024-12-15"), "day") + 1,
    coverImage: TourPic3,
    images: [TourPic3, TourPic3, TourPic3, TourPic3, TourPic3],
    startDate: "2024-12-15",
    endDate: "2024-12-17",
    included: {
      deptLocation:
        "Ayasofya Meydanı, Sultan Ahmet, 34122 Fatih/İstanbul, Turkey",
      return: "5:00 PM",
      features: [
        "Guided tour",
        "Access to the museum",
        "Lunch included",
        "Transportation",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of Hagia Sophia",
          "Visit to the museum",
          "Lunch included",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of Hagia Sophia",
          "Visit to the museum",
          "Lunch included",
        ],
      },
      {
        day: 3,
        weather: 19,
        schedule: [
          "Guided tour of Hagia Sophia",
          "Visit to the museum",
          "Lunch included",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Sagrada Familia",
    description:
      "The Basílica de la Sagrada Família, also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site.",
    city: "Barcelona",
    priceRange: "500 - 1000",
    numOfDays: dayjs("2024-12-21").diff(dayjs("2024-12-20"), "day") + 1,
    coverImage: TourPic4,
    images: [TourPic4, TourPic4, TourPic4, TourPic4, TourPic4],
    startDate: "2024-12-20",
    endDate: "2024-12-21",
    included: {
      deptLocation: "Carrer de Mallorca, 401, 08013 Barcelona, Spain",
      return: "4:00 PM",
      features: [
        "Guided tour",
        "Access to the basilica",
        "Lunch included",
        "Transportation",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of Sagrada Familia",
          "Visit to the basilica",
          "Lunch included",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of Sagrada Familia",
          "Visit to the basilica",
          "Lunch included",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Colosseum",
    description:
      "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.",
    city: "Rome",
    priceRange: "500 - 1000",
    numOfDays: dayjs("2024-12-26").diff(dayjs("2024-12-25"), "day") + 1,
    coverImage: TourPic5,
    images: [TourPic5, TourPic5, TourPic5, TourPic5, TourPic5],
    startDate: "2024-12-25",
    endDate: "2024-12-26",
    included: {
      deptLocation: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
      return: "3:00 PM",
      features: [
        "Guided tour",
        "Access to the Colosseum",
        "Lunch included",
        "Transportation",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of the Colosseum",
          "Visit to the Roman Forum",
          "Lunch included",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of the Colosseum",
          "Visit to the Roman Forum",
          "Lunch included",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Sydney Opera House",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.",
    city: "Sydney",
    priceRange: "500 - 1000",
    numOfDays: dayjs("2025-01-01").diff(dayjs("2024-12-30"), "day") + 1,
    coverImage: TourPic6,
    images: [TourPic6, TourPic6, TourPic6, TourPic6, TourPic6],
    startDate: "2024-12-30",
    endDate: "2025-01-01",
    included: {
      deptLocation: "Bennelong Point, Sydney NSW 2000, Australia",
      return: "8:00 PM",
      features: [
        "Guided tour",
        "Access to the opera house",
        "Lunch included",
        "Transportation",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of the Sydney Opera House",
          "Visit to the concert hall",
          "Lunch included",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of the Sydney Opera House",
          "Visit to the concert hall",
          "Lunch included",
        ],
      },
      {
        day: 3,
        weather: 19,
        schedule: [
          "Guided tour of the Sydney Opera House",
          "Visit to the concert hall",
          "Lunch included",
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Vizcaya Museum and Gardens",
    description:
      "The Vizcaya Museum and Gardens is the former villa and estate of businessman James Deering, of the Deering McCormick-International Harvester fortune, on Biscayne Bay in the present day Coconut Grove neighborhood of Miami, Florida.",
    city: "Miami",
    priceRange: "50 - 200",
    numOfDays: dayjs("2025-01-07").diff(dayjs("2025-01-05"), "day") + 1,
    coverImage: TourPic7,
    images: [TourPic7, TourPic7, TourPic7, TourPic7, TourPic7],
    startDate: "2025-01-05",
    endDate: "2025-01-07",
    included: {
      deptLocation: "3251 S Miami Ave, Miami, FL 33129, United States",
      return: "5:00 PM",
      features: [
        "Guided tour",
        "Access to the gardens",
        "Lunch included",
        "Transportation",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of Vizcaya Museum",
          "Visit to the gardens",
          "Lunch included",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of Vizcaya Museum",
          "Visit to the gardens",
          "Lunch included",
        ],
      },
      {
        day: 3,
        weather: 19,
        schedule: [
          "Guided tour of Vizcaya Museum",
          "Visit to the gardens",
          "Lunch included",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Louvre Museum",
    description:
      "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic landmark in Paris, France. It is the home of the Mona Lisa and many other famous works of art.",
    city: "Paris",
    priceRange: "200 - 500",
    numOfDays: dayjs("2025-01-13").diff(dayjs("2025-01-10"), "day") + 1,
    coverImage: TourPic8,
    images: [TourPic8, TourPic8, TourPic8, TourPic8, TourPic8],
    startDate: "2025-01-10",
    endDate: "2025-01-13",
    included: {
      deptLocation: "Rue de Rivoli, 75001 Paris, France",
      return: "6:00 PM",
      features: [
        "Guided tour",
        "Access to the museum",
        "Lunch included",
        "Transportation",
      ],
    },
    itinerary: [
      {
        day: 1,
        weather: 25,
        schedule: [
          "Guided tour of the Louvre",
          "Visit to the museum",
          "Lunch included",
        ],
      },
      {
        day: 2,
        weather: 22,
        schedule: [
          "Guided tour of the Louvre",
          "Visit to the museum",
          "Lunch included",
        ],
      },
      {
        day: 3,
        weather: 19,
        schedule: [
          "Guided tour of the Louvre",
          "Visit to the museum",
          "Lunch included",
        ],
      },
      {
        day: 4,
        weather: 16,
        schedule: [
          "Guided tour of the Louvre",
          "Visit to the museum",
          "Lunch included",
        ],
      },
    ],
  },
];

export const priceRanges = [
  {
    value: "50-200",
    label: "$50 - $200",
  },
  {
    value: "200-500",
    label: "$200 - $500",
  },
  {
    value: "500-1000",
    label: "$500 - $1000",
  },
  {
    value: "1000",
    label: "$1000 & Above",
  },
];

export const searchLocations = [
  "Istanbul",
  "Miami",
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Sydney",
  "Cape Town",
  "Rio de Janeiro",
  "Bali",
  "Dubai",
  "Santorini",
  "Barcelona",
  "Rome",
  "Venice",
  "Prague",
];
