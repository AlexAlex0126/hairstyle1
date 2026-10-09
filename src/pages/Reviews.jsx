const reviews = [
  {
    text: '„ძალიან კმაყოფილი ვარ AirTouch-ის შედეგით! ფერი ზუსტად ისეთია, როგორიც მინდოდა.“',
    author: 'მარიამი',
    service: 'AirTouch შეღებვა',
  },
  {
    text: '„საუკეთესო ოსტატი! თმა ძალიან გაჯანსაღდა და სტილიც იდეალურია.“',
    author: 'ანასტასია',
    service: 'თმის მოვლა',
  },
  {
    text: '„ძალიან ყურადღებიანი მიდგომა და საოცარი შედეგი. აუცილებლად დავბრუნდები!“',
    author: 'ელენე',
    service: 'შეჭრა და სტაილინგი',
  },
];

export default function Reviews() {
  return (
    <section className="page-section reviews-page">
      <p className="eyebrow">მათი სიტყვები</p>
      <h1>მომხმარებელთა შეფასებები</h1>
      <div className="reviews-grid">
        {reviews.map(({ text, author, service }) => (
          <article className="review-card" key={author}>
            <div className="review-stars" aria-label="5 ვარსკვლავი">★★★★★</div>
            <blockquote>{text}</blockquote>
            <div className="review-author"><span className="review-avatar" aria-hidden="true">{author[0]}</span><span><strong>{author}</strong><small>{service}</small></span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
