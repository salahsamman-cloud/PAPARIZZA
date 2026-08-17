// Menu content is kept separate from the EJS layout for easier updates.
const menuData = [
  {
    id: "breakfast-pizza",
    mainSection: "breakfast",
    categoryEn: "Pizza Breakfast",
    categoryAr: "بيتزا فطور",
    items: [
      { nameEn: "Zaatar", nameAr: "زعتر", descriptionEn: "Traditional zaatar blend.", descriptionAr: "خلطة زعتر تقليدية.", price: "250", image: "/images/زعتر.jpeg" },
      { nameEn: "Zaatar with Kashkaval", nameAr: "زعتر وقشقوان", descriptionEn: "Zaatar topped with kashkaval cheese.", descriptionAr: "زعتر مع جبنة قشقوان.", price: "350", image: "/images/زعتر  مع قشقوان.jpeg" },
      { nameEn: "Zaatar & Labneh", nameAr: "زعتر ولبنة", descriptionEn: "Zaatar with creamy labneh.", descriptionAr: "زعتر مع لبنة كريمية.", price: "300", image: "/images/لبنة وزعتر --14.jpg" },
      { nameEn: "Labneh & Olives", nameAr: "لبنة وزيتون", descriptionEn: "Creamy labneh served with olives.", descriptionAr: "لبنة كريمية مع زيتون.", price: "300", image: "/images/لبنة وزيتون --12.jpg" }
    ]
  },
  {
    id: "breakfast-panuzzo",
    mainSection: "breakfast",
    categoryEn: "Panuzzo Breakfast",
    categoryAr: "بانوتزو الفطور",
    items: [
      { nameEn: "Zaatar with Vegetables", nameAr: "زعتر مع خضرة", descriptionEn: "Zaatar with fresh vegetables.", descriptionAr: "زعتر مع خضرة طازجة.", price: "350", image: "/images/زعتر مع خضرة-36.jpg" },
      { nameEn: "Labneh with Vegetables", nameAr: "لبنة مع خضرة", descriptionEn: "Creamy labneh with fresh vegetables.", descriptionAr: "لبنة كريمية مع خضرة طازجة.", price: "350", image: "/images/لبنة مع خضرة --35.jpg" },
      { nameEn: "Cheese", nameAr: "جبنة", descriptionEn: "", descriptionAr: "", price: "350", image: "/images/جبنة.jpeg" },
      { nameEn: "Halloumi with Pesto", nameAr: "حلوم مع بيستو", descriptionEn: "Grilled halloumi with pesto.", descriptionAr: "حلوم مشوي مع بيستو.", price: "450", image: "/images/حلوم مع بيستو-29.jpg" },
      { nameEn: "Turkey with Mushroom & Rocket", nameAr: "حبش وفطر وجرجير", descriptionEn: "Turkey, mushroom and fresh rocket.", descriptionAr: "حبش مع فطر وجرجير طازج.", price: "400", image: "/images/حبش وفطر-30.jpg" }
    ]
  },
  {
    id: "lunch-pizza",
    mainSection: "lunch",
    categoryEn: "Pizza",
    categoryAr: "بيتزا",
    items: [
      { nameEn: "Napoletana", nameAr: "نابوليتان", descriptionEn: "Napoletana sauce, mozzarella and parmesan.", descriptionAr: "صوص نابوليتان، موزاريلا وبارميزان.", smallPrice: "350", largePrice: "700", image: "/images/بيتزا نابوليتان.jpeg" },
      { nameEn: "Vegetables", nameAr: "خضار", descriptionEn: "Neapolitan sauce, mozzarella, mushroom, olives, bell pepper", descriptionAr: "صوص نابوليتان، موزريلا، فطر، زيتون، فليفلة", smallPrice: "400", largePrice: "800", image: "/images/بيتزا خضار --1.jpg" },
      { nameEn: "Mushroom", nameAr: "فطر", descriptionEn: "Mushroom sauce, mushroom, mozzarella, parmesan", descriptionAr: "صوص الفطر، فطر، موزريلا، بارمزان", smallPrice: "400", largePrice: "800", image: "/images/بيتزا ماشروم--3.jpg" },
      { nameEn: "Truffle", nameAr: "ترافل", descriptionEn: "Truffle sauce, mushroom, mozzarella", descriptionAr: "صوص ترافل، فطر، موزريلا", smallPrice: "500", largePrice: "1000", image: "/images/بيتزا ترفل.jpeg" },
      { nameEn: "Pepperoni", nameAr: "بيروني", descriptionEn: "", descriptionAr: "", smallPrice: "400", largePrice: "800", image: "/images/بيتزا ببروني --8.jpg" },
      { nameEn: "Turkey", nameAr: "حبش", descriptionEn: "", descriptionAr: "", smallPrice: "350", largePrice: "700", image: "/images/بيتزا حبش--5.jpg" },
      { nameEn: "Pesto", nameAr: "بيستو", descriptionEn: "", descriptionAr: "", smallPrice: "400", largePrice: "800", image: "/images/بيتزا بيستو.jpeg" },
      { nameEn: "Four Cheese", nameAr: "فور تشيز", descriptionEn: "", descriptionAr: "", smallPrice: "400", largePrice: "800", image: "/images/بيتزا فورتشيز.jpeg" },
      { nameEn: "Smoky Chicken", nameAr: "سموكي تشكن", descriptionEn: "", descriptionAr: "", smallPrice: "550", largePrice: "1000", image: "/images/بيتزا سموك تشيكن -_-7.jpg" }
    ]
  },
  {
    id: "lunch-panuzzo",
    mainSection: "lunch",
    categoryEn: "Panuzzo",
    categoryAr: "بانوتزو",
    items: [
      { nameEn: "Classic Chicken", nameAr: "كلاسيك تشكن", descriptionEn: "Fried chicken, chicken sauce, lettuce and mayonnaise.", descriptionAr: "دجاج مقلي، صوص تشكن، خس ومايونيز.", price: "400", image: "/images/تشيكن كلاسيك --15.jpg" },
      { nameEn: "Chicken Barbecue", nameAr: "تشكن باربكيو", descriptionEn: "Chicken, barbecue sauce, lettuce and mayonnaise.", descriptionAr: "دجاج، صوص باربكيو، خس ومايونيز.", price: "450", image: "/images/تشكن باربركيو --20.jpg" },
      { nameEn: "Chicken Honey Mustard", nameAr: "تشكن هني ماسترد", descriptionEn: "Chicken, honey mustard, lettuce and mayonnaise.", descriptionAr: "دجاج، هني ماسترد، خس ومايونيز.", price: "450", image: "/images/تشكن هاني ماستر --16.jpg" },
      { nameEn: "Spicy Chicken", nameAr: "سبايسي تشكن", descriptionEn: "", descriptionAr: "", price: "420", image: "/images/تشكن سبايسي--18.jpg" },
      { nameEn: "Chicken Pesto", nameAr: "تشكن بيستو", descriptionEn: "", descriptionAr: "", price: "500", image: "/images/تشكن بيستو.jpeg" },
      { nameEn: "Classic Steak", nameAr: "كلاسيك ستيك", descriptionEn: "Steak, barbecue sauce, cheese and mayonnaise.", descriptionAr: "ستيك لحم، صوص باربيكيو، جبنة ومايونيز.", price: "650", image: "/images/كلاسيك ستيك--19.jpg" },
      { nameEn: "Cheese Steak", nameAr: "تشيز ستيك", descriptionEn: "Steak, mozzarella and special sauce.", descriptionAr: "ستيك، جبنة موزاريلا وصوص خاص.", price: "750", image: "/images/تشيز ستيك--23.jpg" },
      { nameEn: "Truffle Steak", nameAr: "ترافل ستيك", descriptionEn: "Steak, truffle sauce and cheese.", descriptionAr: "ستيك، صوص ترافل وجبنة.", price: "800", image: "/images/ترافل ستيك --17.jpg" },
      { nameEn: "Barbecue Steak", nameAr: "باربكيو ستيك", descriptionEn: "", descriptionAr: "", price: "750", image: "/images/باربكيو ستيك --24.jpg" },
      { nameEn: "Escalope", nameAr: "اسكالوب", descriptionEn: "Escalope, special sauce, mayonnaise and cheese.", descriptionAr: "اسكالوب، صوص خاص، مايونيز وجبنة.", price: "450" },
      { nameEn: "Chicken Caesar", nameAr: "تشكن سيزر", descriptionEn: "Chicken, Caesar sauce and parmesan.", descriptionAr: "تشكن، صوص سيزر وبارميزان.", price: "500", image: "/images/تشكن سيزر +سكالوب--22.jpg" },
      { nameEn: "Escalope Milanese", nameAr: "اسكالوب ميلانيز", descriptionEn: "Escalope, Milanese sauce and cheese.", descriptionAr: "اسكالوب، صوص ميلانيز وجبنة.", price: "500", image: "/images/سكالوب ميلانيز --25.jpg" },
      { nameEn: "Cheesy Escalope", nameAr: "تشيزي اسكالوب", descriptionEn: "", descriptionAr: "", price: "500" },
      { nameEn: "Pesto Escalope", nameAr: "بيستو اسكالوب", descriptionEn: "", descriptionAr: "", price: "500" }
    ]
  },
  {
    id: "lunch-appetizers",
    mainSection: "lunch",
    categoryEn: "Appetizers",
    categoryAr: "المقبلات",
    items: [
      { nameEn: "Fries", nameAr: "فرايز", descriptionEn: "Crispy golden fries.", descriptionAr: "بطاطا ذهبية مقرمشة.", price: "300", image: "/images/فرايز-31.jpg" },
      { nameEn: "Cheese Fries", nameAr: "تشيزي فرايز", descriptionEn: "Crispy fries with melted cheese.", descriptionAr: "بطاطا مقرمشة مع جبنة ذائبة.", price: "450", image: "/images/فرايز تشيزي --34.jpg" },
      { nameEn: "Truffle Fries", nameAr: "ترافل فرايز", descriptionEn: "", descriptionAr: "", price: "450", image: "/images/ترافل فرايز --21.jpg" },
      { nameEn: "Mozzarella Sticks", nameAr: "موزريلا ستيكس", descriptionEn: "Golden mozzarella sticks.", descriptionAr: "أصابع موزاريلا ذهبية.", price: "400" },
      { nameEn: "Caesar", nameAr: "سيزر", descriptionEn: "Crisp greens with Caesar dressing.", descriptionAr: "خضار طازجة مع صوص سيزر.", price: "450", image: "/images/سيزر --33.jpg" },
      { nameEn: "Rocket", nameAr: "روكا", descriptionEn: "", descriptionAr: "", price: "400", image: "/images/روكا_-32.jpg" }
    ]
  },
  {
    id: "drinks",
    mainSection: "drinks",
    categoryEn: "Drinks",
    categoryAr: "المشروبات",
    items: [
      { nameEn: "Water", nameAr: "ماء", descriptionEn: "Still mineral water.", descriptionAr: "مياه معدنية.", price: "50" },
      { nameEn: "Cola", nameAr: "كولا", descriptionEn: "Chilled cola.", descriptionAr: "كولا باردة.", price: "" }
    ]
  }
];

export default menuData;
