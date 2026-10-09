import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/image1.jpeg',
    alt: 'ნაზი, ბუნებრივი თმის ფერი',
    eyebrow: 'შენი სილამაზის ახალი ისტორია',
    title: 'სტილი, რომელიც შენ გგავს',
    description: 'ინდივიდუალური შეღებვა და მოვლა — შენი თმის სილამაზისა და ჯანმრთელობისთვის.',
  },
  {
    image: '/image2.jpeg',
    alt: 'თმის პროფესიონალური შეღებვა',
    eyebrow: 'შენი თმისთვის შექმნილი',
    title: 'ფერი, რომელიც გიხდება',
    description: 'შევარჩიოთ ისეთი ტონი და ტექნიკა, რომელიც შენს ბუნებრივ სილამაზეს გამოკვეთს.',
  },
  {
    image: '/image4.jpeg',
    alt: 'ლამაზი და მოვლილი ვარცხნილობა',
    eyebrow: 'ზრუნვა ყველა დეტალში',
    title: 'ლამაზი თმა იწყება ზრუნვით',
    description: 'თანამედროვე ტექნიკა, ხარისხიანი მოვლა და შედეგი, რომლითაც თავს კარგად იგრძნობ.',
  },
];

const services = [
  { number: '01', title: 'AirTouch შეღებვა', description: 'რბილი, ბუნებრივი გადასვლები და ფერი, რომელიც თანდათან იზრდება.', price: '250 ₾-დან', duration: '4–5 საათი' },
  { number: '02', title: 'ფერიდან ფერში გადასვლა', description: 'მუქი პიგმენტის ფრთხილი მოცილება და სასურველი ტონის მიღება.', price: '220 ₾-დან', duration: '3–4 საათი' },
  { number: '03', title: 'შეჭრა და სტაილინგი', description: 'შენი სახის ფორმასა და ყოველდღიურობას მორგებული ვარცხნილობა.', price: '70 ₾-დან', duration: '1–1.5 საათი' },
  { number: '04', title: 'თმის მოვლა და აღდგენა', description: 'ღრმა დატენიანება და თმის ბუნებრივი ბზინვარების დაბრუნება.', price: '90 ₾-დან', duration: 'დაახლოებით 1.5 საათი' },
];

const testimonials = [
  { quote: 'ძალიან კმაყოფილი ვარ AirTouch-ის შედეგით! ფერი ზუსტად ისეთია, როგორიც მინდოდა — ბუნებრივი და ძალიან ლამაზი.', name: 'მარიამი', service: 'AirTouch შეღებვა' },
  { quote: 'საუკეთესო გამოცდილება მქონდა. ყურადღებით მომისმინა, ზუსტად ამიხსნა პროცესი და თმა საოცრად გამოიყურება.', name: 'ანასტასია', service: 'შეჭრა და სტაილინგი' },
  { quote: 'თმა უფრო ჯანსაღი და ბზინვარეა. აუცილებლად დავბრუნდები და ყველას ვურჩევ!', name: 'ელენე', service: 'თმის მოვლა' },
];

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  function showSlide(index) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  const slide = slides[activeSlide];

  return (
    <section className="hero" aria-label="VovaStyle სალონის პრეზენტაცია">
      {slides.map((item, index) => (
        <img
          key={item.image}
          className={`hero-image${index === activeSlide ? ' is-active' : ''}`}
          src={item.image}
          alt={item.alt}
          aria-hidden={index !== activeSlide}
        />
      ))}
      <div className="hero-shade" />
      <div className="hero-content" key={slide.title}>
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>
        <a className="button button-light" href="#services">აღმოაჩინე სერვისები <span aria-hidden="true">↗</span></a>
      </div>
      <div className="slider-controls" aria-label="სლაიდერის მართვა">
        <button type="button" className="slider-arrow" aria-label="წინა სლაიდი" onClick={() => showSlide(activeSlide - 1)}>←</button>
        <div className="slider-dots">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={`slider-dot${index === activeSlide ? ' is-active' : ''}`}
              aria-label={`${index + 1}-ე სლაიდზე გადასვლა`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button type="button" className="slider-arrow" aria-label="შემდეგი სლაიდი" onClick={() => showSlide(activeSlide + 1)}>→</button>
      </div>
      <span className="hero-counter" aria-live="polite">{String(activeSlide + 1).padStart(2, '0')} <span>/ 03</span></span>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="about-photo">
        <img src="/image0.jpeg" alt="თმის სტილისტი მუშაობის პროცესში" loading="lazy" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">VovaStyle — შენი სტილისტი</p>
        <h2>სილამაზე, რომელიც შენს ბუნებრივობას უსვამს ხაზს</h2>
        <p>გამარჯობა, მე ვოვა ვარ. თმის სტილი ჩემთვის მხოლოდ ფერი ან ფორმა არ არის — ეს არის შესაძლებლობა, თავი საკუთარ თავთან უფრო ახლოს იგრძნო.</p>
        <p>ყოველ ვიზიტს ვიწყებ შენი სურვილების მოსმენითა და თმის მდგომარეობის შეფასებით. ერთად ვირჩევთ შენთვის შესაფერის, თმის ჯანმრთელობაზე მზრუნველ შედეგს.</p>
        <div className="about-facts">
          <div><strong>ინდივიდუალური</strong><span>მიდგომა ყველა სტუმრისთვის</span></div>
          <div><strong>გულით შექმნილი</strong><span>შედეგი და ყურადღება დეტალებზე</span></div>
        </div>
        <Link to="/about" className="text-link">გაიგე მეტი ჩემს შესახებ <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <div><p className="eyebrow">სილამაზე და ზრუნვა</p><h2>სერვისები და ფასები</h2></div>
        <p>საბოლოო ღირებულება დამოკიდებულია თმის სიგრძესა და მდგომარეობაზე. ზუსტ ფასს კონსულტაციისას შევათანხმებთ.</p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-main"><h3>{service.title}</h3><p>{service.description}</p></div>
            <span className="service-duration">{service.duration}</span>
            <strong className="service-price">{service.price}</strong>
          </article>
        ))}
      </div>
      <Link to="/calculator" className="button button-dark">გამოითვალე სავარაუდო ფასი <span aria-hidden="true">↗</span></Link>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="section-heading">
        <div><p className="eyebrow">მათი სიტყვები</p><h2>რას ამბობენ სტუმრები</h2></div>
        <Link to="/reviews" className="text-link">ყველა შეფასება <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="reviews-grid">
        {testimonials.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-stars" aria-label="5 ვარსკვლავი">★★★★★</div>
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-author"><span className="review-avatar" aria-hidden="true">{review.name[0]}</span><span><strong>{review.name}</strong><small>{review.service}</small></span></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-copy">
        <p className="eyebrow">მოდი, შევხვდეთ</p>
        <h2>შენი ახალი სტილი აქ იწყება</h2>
        <p>მოდი სალონში, გაგიზიარებ იდეებს და ერთად შევარჩევთ შენთვის სასურველ ცვლილებას.</p>
        <div className="contact-details">
          <div><span className="contact-label">მისამართი</span><a href="https://www.google.com/maps/search/?api=1&query=Davidoff+Beauty+Salon+Tbilisi">თბილისი, ცაგარელის ქ. 100 <span aria-hidden="true">↗</span></a></div>
          <div><span className="contact-label">სალონი</span><span>Davidoff Beauty Salon</span></div>
          <div><span className="contact-label">ვიზიტი</span><span>წინასწარი ჩაწერით</span></div>
        </div>
        <a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=Davidoff+Beauty+Salon+Tbilisi">იხილე რუკაზე <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-map">
        <iframe
          title="Davidoff Beauty Salon-ის მდებარეობა თბილისში"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47645.69871962277!2d44.683866348632804!3d41.72362239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473a4f7a7bf73%3A0x8720b3a9bde3648b!2sDAVIDOFF%20BEAUTY%20SALON!5e0!3m2!1ska!2sge!4v1790897819098!5m2!1ska!2sge"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
