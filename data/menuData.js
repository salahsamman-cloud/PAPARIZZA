// هذا الملف يحتوي على بيانات المينو
// لاحقاً رح نضيف الأصناف الحقيقية هون فقط

const menuData = [
  {
    category: "PANUZZO",
    items: [
      {
        nameEn: "Chicken Panuzzo",
        nameAr: "بانوتزو دجاج",
        descriptionEn: "Chicken, mozzarella, lettuce, special sauce",
        descriptionAr: "دجاج، موزاريلا، خس، صوص خاص",
        price: "€12.90",
        image: "/images/panuzzo.jpg"
      }
    ]
  },
  {
    category: "PIZZA",
    items: [
      {
        nameEn: "Margherita",
        nameAr: "مارغريتا",
        descriptionEn: "Tomato sauce, mozzarella, basil",
        descriptionAr: "صلصة طماطم، موزاريلا، ريحان",
        price: "€10.90",
        image: "/images/pizza.jpg"
      }
    ]
  },
  {
    category: "APPETIZERS",
    items: []
  },
  {
    category: "DRINKS",
    items: []
  },
  
];

export default menuData;