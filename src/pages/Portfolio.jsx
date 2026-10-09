const portfolioItems = [
  { image: '/image1.jpeg', alt: 'წითელი თმის ელეგანტური შეღებვა', title: 'ინდივიდუალური ფერი', description: 'შენთვის შერჩეული ტონი' },
  { image: '/image14.jpeg', alt: 'ღია ფერის გრძელი თმა', title: 'AirTouch შეღებვა', description: 'ბუნებრივი, რბილი გადასვლები' },
  { image: '/image8.jpeg', alt: 'თმის პროფესიონალური სტაილინგი', title: 'სტაილინგი', description: 'მსუბუქი, ტექსტურირებული კულულები' },
  { image: '/image2.jpeg', alt: 'თმის ტექსტურა და ფერის გარდასახვა', title: 'ფერის გარდასახვა', description: 'თმის სიჯანსაღეზე ზრუნვით' },
  { image: '/image4.jpeg', alt: 'მოვლილი ვარცხნილობა', title: 'გლუვი ვარცხნილობა', description: 'ბზინვარე, მოვლილი თმა' },
  { image: '/image6.jpeg', alt: 'სილამაზის სალონის მომსახურება', title: 'სალონის გამოცდილება', description: 'ყურადღება ყველა დეტალში' },
  { image: '/image7.jpeg', alt: 'ნაზი მაკიაჟი და მოვლილი იერი', title: 'ახალი იერი', description: 'შენი ბუნებრივი სილამაზისთვის' },
  { image: '/image13.jpeg', alt: 'გრძელი, ბზინვარე თმა', title: 'თმის მოვლა', description: 'ჯანსაღი ბზინვარება' },
  { image: '/image9.jpeg', alt: 'ქალის ელეგანტური პორტრეტი', title: 'რბილი ტონირება', description: 'ფერი, რომელიც გიხდება' },
  { image: '/image10.jpeg', alt: 'თანამედროვე სილამაზის სტილი', title: 'თანამედროვე სტილი', description: 'შენზე მორგებული შედეგი' },
  { image: '/image11.jpeg', alt: 'ბუნებრივი იერი და თმის სტილი', title: 'ბუნებრივი სილამაზე', description: 'უბრალოდ შენ, შენი საუკეთესო ვერსიით' },
  { image: '/image12.jpeg', alt: 'თანამედროვე მოდური ვარცხნილობა', title: 'განსაკუთრებული იერი', description: 'შენი სტილის ახალი შტრიხი' },
];

export default function Portfolio() {
  return (
    <section className="section portfolio-section">
      <p className="eyebrow">VovaStyle — შთაგონება</p>
      <h1>ნამუშევრების პორტფოლიო</h1>
      <p className="portfolio-intro">თითოეული შედეგი იქმნება ინდივიდუალური მიდგომით, თმის სტრუქტურის გათვალისწინებით და ჯანმრთელობაზე ზრუნვით.</p>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <article className="portfolio-item" key={item.image}>
            <img
              src={item.image}
              alt={item.alt}
              loading={index < 4 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="portfolio-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
