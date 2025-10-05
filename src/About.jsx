import React from 'react';

export default function About() {
  return (
    <div
      dir='rtl'
      style={{
        textAlign: "center",
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#bbbbbbff',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px', color: '#2c7a7b' }}>
        من نحن
      </h1>
      <p className='mb-3'>
        في واجهة اموقع يوجد اوقات الصلاة بتوقيت دمشق
      </p>
      <p>
        هذا التطبيق مخصص لتسهيل تصفح القرآن الكريم بطريقة سهلة وسريعة. هدفنا هو تقديم تجربة مستخدم سلسة،
        مع واجهة بسيطة تسمح بالوصول إلى الصفحات والأجزاء المختلفة دون تعقيد.
      </p>

      <p>
        تم تطوير التطبيق باستخدام React لتوفير أداء سريع وتجربة ديناميكية. يمكن للمستخدمين الانتقال بين الصفحات،
        البحث عن الآيات، ومعرفة معلومات إضافية بطريقة مباشرة.
      </p>

      <p>
        نأمل أن يكون هذا التطبيق مفيدًا لجميع مستخدميه، وأن يسهم في تسهيل الوصول إلى النصوص القرآنية
        بشكل منظم وجذاب.
      </p>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#2c7a7b' }}>تواصل معنا</h2>
        <p className="">البريد الإلكتروني: <a style={{ textDecoration: "underline" }} href="mailto:apo.zouher@gmail.com">apo.zouher@gmail.com</a></p>
      </div>
    </div>
  );
}
