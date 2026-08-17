// نستورد مكتبة Express
import express from "express";

// نستورد path للتعامل مع مسارات الملفات
import path from "path";

// نحتاج هذا الاستيراد لأن __dirname غير موجود مباشرة مع import
import { fileURLToPath } from "url";

// نستورد بيانات المينو من ملف منفصل
import menuData from "./data/menuData.js";

// إنشاء تطبيق Express
const app = express();

// تجهيز __filename و __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تحديد EJS كمحرك صفحات
app.set("view engine", "ejs");

// تحديد مجلد views
app.set("views", path.join(__dirname, "views"));

// تحديد مجلد public للصور و CSS
app.use(express.static(path.join(__dirname, "public")));

// الصفحة الرئيسية
app.get("/", (req, res) => {
  // نرسل بيانات المينو إلى صفحة index.ejs
  res.render("index", {
    restaurantName: "PAPARIZZA",
    menuData: menuData
  });
});

// البورت
const PORT = process.env.PORT || 3000;

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`PAPARIZZA menu is running on http://localhost:${PORT}`);
});
