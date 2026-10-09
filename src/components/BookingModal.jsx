import { useEffect, useRef, useState } from 'react';

const services = [
  'AirTouch შეღებვა',
  'ფერიდან ფერში გადასვლა',
  'შეჭრა და სტაილინგი',
  'თმის მოვლა და აღდგენა',
];

const today = new Date();
const localToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dialogRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    function openBooking() {
      setIsSubmitted(false);
      setIsOpen(true);
    }

    window.addEventListener('open-booking', openBooking);
    return () => window.removeEventListener('open-booking', openBooking);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    nameRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll('button, input, select, textarea, a[href]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (!isOpen) return null;

  return (
    <div className="booking-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setIsOpen(false);
    }}>
      <section
        className="booking-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        ref={dialogRef}
      >
        <button className="booking-close" type="button" aria-label="ფანჯრის დახურვა" onClick={() => setIsOpen(false)}>×</button>
        {!isSubmitted ? (
          <>
            <p className="eyebrow">VovaStyle · თბილისი</p>
            <h2 id="booking-title">დაგეგმე შენი ვიზიტი</h2>
            <p className="booking-intro">შეავსე ფორმა და მიუთითე სასურველი თარიღი და მომსახურება.</p>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="booking-name">სახელი</label>
                <input ref={nameRef} id="booking-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="booking-phone">ტელეფონის ნომერი</label>
                <input id="booking-phone" name="phone" type="tel" autoComplete="tel" placeholder="+995 5XX XX XX XX" required />
              </div>
              <div className="form-group">
                <label htmlFor="booking-service">მომსახურება</label>
                <select id="booking-service" name="service" defaultValue="" required>
                  <option value="" disabled>აირჩიე მომსახურება</option>
                  {services.map((service) => <option key={service}>{service}</option>)}
                </select>
              </div>
              <div className="booking-datetime">
                <div className="form-group">
                  <label htmlFor="booking-date">სასურველი თარიღი</label>
                  <input id="booking-date" name="date" type="date" min={localToday} required />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-time">სასურველი დრო</label>
                  <input id="booking-time" name="time" type="time" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="booking-note">დამატებითი ინფორმაცია <span>(არასავალდებულო)</span></label>
                <textarea id="booking-note" name="note" rows="3" placeholder="მოგვწერე სურვილების ან თმის შესახებ" />
              </div>
              <button className="button button-dark booking-submit" type="submit">დაჯავშნის მოთხოვნის ჩვენება <span aria-hidden="true">↗</span></button>
            </form>
            <p className="booking-demo-note">დემო ვერსია: ფორმის გაგზავნა მოთხოვნას მხოლოდ ამ გვერდზე აჩვენებს; სალონში შეტყობინება არ იგზავნება.</p>
          </>
        ) : (
          <div className="booking-success" role="status">
            <span className="booking-success-icon" aria-hidden="true">✓</span>
            <p className="eyebrow">ფორმის დემო</p>
            <h2 id="booking-title">მადლობა შევსებისთვის!</h2>
            <p>ეს დემო ფორმაა — მოთხოვნა შენახული ან სალონში გაგზავნილი არ არის. რეალური დაჯავშნისთვის საჭიროა საიტის დაჯავშნის სერვისთან დაკავშირება.</p>
            <button className="button button-dark" type="button" onClick={() => setIsOpen(false)}>დახურვა</button>
          </div>
        )}
      </section>
    </div>
  );
}
