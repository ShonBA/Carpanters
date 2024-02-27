

const aboutData = [
    {
        id: 1,
        header: "איכות",
        description: "מטבחים מחומרי גלם איכותיים, רמת גימור גבוהה ועיצובים עוצרי נשימה",
        imageName: "medal.png",
    },
    {
        id: 2,
        header: "חדשנות",
        description: "ווד ונדרס מביאים לכם את כל החידושים בתחום המטבחים",
        imageName: "bulb.png",
    },
    {
        id: 3,
        header: "מומחיות",
        description: "שילוב מנצח בין טכנולוגיות מתקדמות לבין אנשי מקצוע המתמחים בעיצוב מטבחים",
        imageName: "star.png",
    },
];

const projectsData = [
    {
        id: 1,
        title: "משפחת כהן",
        description: "מטבח יוקרה מושלם למשפחת כהן",
        imageName: "project1.jpg",
    },
    {
        id: 2,
        title: "משפחת לוי",
        description: "מטבח כפרי וארונות חדרים.",
        imageName: "project2.jpg",
    },
    {
        id: 3,
        title: "משפחת יצחק",
        description: "ריהוט כללי לכל הבית",
        imageName: "project3.jpg",
    },
    {
        id: 4,
        title: "משפחת ששון",
        description: "ארונות הביתה וקיר.",
        imageName: "project4.jpg",
    },

];

const recommendationsData = [
    {
        id: 1,
        clientName: "נתן כהן",
        rank: 4,
        comment: "שירות מעולה, ממליץ מאוד!",
        date: "17-03-2024",
    },
    {
        id: 2,
        clientName: "יצחק לוי",
        rank: 5,
        comment: "מחיר הוגן, מוצר איכותי ושירות של חבר! רק אצל ווד ונדרס",
        date: "21-02-2024",
    },
    {
        id: 3,
        clientName: "בארט סימפסון",
        rank: 5,
        comment: "מרגיש כמו בבית מלוכה! הצוות הכי מקצועי שנתקלתי בו!",
        date: "28-11-2023",
    },
    {
        id: 4,
        clientName: "דני יצחקי",
        rank: 2,
        comment: "תקעו אותי חודש בזמני אספקה",
        date: "16-08-2023",
    },
];
const galleryData =
{
    kitchens: {
        id: 1,
        type: ["מטבחים", "מטבחי"],
        materials: ["פורמיקה", "מלמין", "פולימר"],
        data: [{
            id: 1,
            caption: "מטבח פורמיקה",
            material: "פורמיקה",
            imageName: "gallery-HDF1.jpg",
        },
        {
            id: 2,
            caption: "מטבח פורמיקה",
            material: "פורמיקה",
            imageName: "gallery-HDF2.webp",
        },
        {
            id: 3,
            caption: "מטבח פורמיקה",
            material: "פורמיקה",
            imageName: "gallery-HDF3.webp",
        },
        {
            id: 4,
            caption: "מטבח פורמיקה",
            material: "פורמיקה",
            imageName: "gallery-HDF4.jpg",
        },
        {
            id: 5,
            caption: "מטבח מלמין",
            material: "מלמין",
            imageName: "gallery-malamin1.jpeg",
        },
        {
            id: 6,
            caption: "מטבח מלמין",
            material: "מלמין",
            imageName: "gallery-malamin2.jpeg",
        },
        {
            id: 7,
            caption: "מטבח מלמין",
            material: "מלמין",
            imageName: "gallery-malamin3.jpeg",
        },
        {
            id: 8,
            caption: "מטבח מלמין",
            material: "מלמין",
            imageName: "gallery-malamin4.jpg",
        },
        {
            id: 9,
            caption: "מטבח פולימר",
            material: "פולימר",
            imageName: "gallery-polimer1.jpeg",
        },
        {
            id: 10,
            caption: "מטבח פולימר",
            material: "פולימר",
            imageName: "gallery-polimer2.jpg",
        },
        {
            id: 11,
            caption: "מטבח פולימר",
            material: "פולימר",
            imageName: "gallery-polimer3.jpeg",
        },
        {
            id: 12,
            caption: "מטבח פולימר",
            material: "פולימר",
            imageName: "gallery-polimer4.jpg",
        }
        ],
    },
    closets: {
        id: 2,
        type: ["ארונות", "ארונות"],
        materials: ["מלמין"],
        data: [{
            id: 1,
            caption: "ארון מלמין",
            material: "מלמין",
            imageName: "closet-malamin1.jpeg",
        },
        {
            id: 2,
            caption: "ארון מלמין",
            material: "מלמין",
            imageName: "closet-malamin2.jpeg",
        },
        {
            id: 3,
            caption: "ארון מלמין",
            material: "מלמין",
            imageName: "closet-malamin3.jpg",
        },
        {
            id: 4,
            caption: "ארון מלמין",
            material: "מלמין",
            imageName: "closet-malamin4.jpg",
        },
        ],
    },
};

export default {
    recommendationsData, aboutData, projectsData, galleryData
}

