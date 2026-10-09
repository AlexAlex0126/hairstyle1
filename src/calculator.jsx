import { useState } from 'react';

const prices = {
  airtouch: { short: 250, medium: 320, long: 400, time: '4-5 სთ' },
  'black to brown': { short: 220, medium: 290, long: 370, time: '3-4 სთ' },
  haircut: { short: 70, medium: 90, long: 120, time: '1-1.5 სთ' },
  care: { short: 90, medium: 120, long: 150, time: '1.5 სთ' },
};

export default function Calculator() {
  const [calcService, setCalcService] = useState('airtouch');
  const [calcLength, setCalcLength] = useState('medium');
  const currentPrice = prices[calcService][calcLength];
  const currentTime = prices[calcService].time;

  return (
    <section className="section calc-section">
      <h1>ღირებულების კალკულატორი</h1>
      <div className="calc-container">
        <p className="calc-desc">აირჩიეთ სასურველი სერვისი და თმის სიგრძე, რომ გაიგოთ პირობები და ხანგრძლივობა.</p>
        
        <div className="calc-group">
          <label htmlFor="calc-service">აირჩიეთ მომსახურება</label>
          <select id="calc-service" value={calcService} onChange={(e) => setCalcService(e.target.value)}>
            <option value="airtouch">AirTouch რთული შეღებვა</option>
            <option value="black to brown">შავიდან ყავისფერში გადასვლა</option>
            <option value="haircut">თმის შეჭრა და სტაილინგი</option>
            <option value="care">თმის მოვლა და აღდგენა</option>
          </select>
        </div>

        <div className="calc-group">
          <label htmlFor="calc-length">თმის სიგრძე</label>
          <select id="calc-length" value={calcLength} onChange={(e) => setCalcLength(e.target.value)}>
            <option value="short">მოკლე (მანამ ყურამდე / კარე)</option>
            <option value="medium">საშუალო (მხრებამდე)</option>
            <option value="long">გრძელი (ბეჭებს ქვემოთ)</option>
          </select>
        </div>

        <div className="calc-result">
          <div className="result-item">
            <span>სავარაუდო დრო:</span>
            <strong>{currentTime}</strong>
          </div>
          <div className="result-item price-item">
            <span>სავარაუდო ფასი:</span>
            <strong>{currentPrice} ₾</strong>
          </div>
        </div>
      </div>
    </section>
  );
}