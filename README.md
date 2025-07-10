# پروژه مدیریت درآمد و هزینه

این پروژه شامل دو بخش است:
- **بک‌اند:** Django + Django REST Framework (دیتابیس SQLite)
- **فرانت‌اند:** React + Vite
- **اجرای همزمان:** با Docker و docker-compose

## راه‌اندازی سریع

۱. نصب وابستگی‌های بک‌اند:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

۲. نصب وابستگی‌های فرانت‌اند:
```bash
cd frontend
npm install
```

۳. اجرای پروژه با Docker:
```bash
docker-compose up --build
```

## ساختار پوشه‌ها
- backend: کدهای Django
- frontend: کدهای React
- docker-compose.yml: اجرای همزمان

---

فونت فارسی و ظاهر شبیه تصویر نمونه رعایت خواهد شد.
