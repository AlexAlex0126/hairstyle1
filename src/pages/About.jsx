export default function About() {
  return (
    <>
      <section className="section about-page">
        <div className="about-grid">
          <div className="about-img">
            <img src="/image0.jpeg" alt="სტილისტი ვოვა მუშაობის პროცესში" />
          </div>
          <div className="about-text">
            <p className="eyebrow">VovaStyle — თმის სტილის სტუდია თბილისში</p>
            <h1>გამარჯობა, მე შენი სტილისტი ვარ!</h1>
            <p>ვარ ვოვა — თმის სტილისტი, რომელსაც სჯერა, რომ კარგი შედეგი იწყება ყურადღებით მოსმენით. თითოეულ სტუმართან ერთად ვარჩევ ფერსა და სტილს, რომელიც მის სურვილებსა და თმის ბუნებრივ სტრუქტურას ერგება.</p>
            <p> Davidoff Beauty Salon-ში, გთავაზობ შეღებვას, შეჭრას, სტაილინგსა და თმის მოვლას. ვმუშაობ ფრთხილად, ხარისხიან მასალებთან და შენთვის სასურველი შედეგის მიღწევას თმის ჯანმრთელობაზე ზრუნვით ვუთავსებ.</p>
            <button type="button" className="btn about-contact" onClick={() => window.dispatchEvent(new Event('open-booking'))}>ჩაეწერე ვიზიტზე <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      </section>
     
    </>
  );
}
