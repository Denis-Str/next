import {useState} from "react";

export default function OrderView({handleSend}) {
  const initForm = {
    phone: "",
    address: "",
    agree: false
  };
  const [form, setForm] = useState(initForm);
  const handleChangeForm = (key, value) => {
    setForm(prevState => ({...prevState, ...{[key]: value}}));
  };
  const validateForm = () => form.phone && form.address && form.agree;
  const sendForm = () => {
    if (validateForm()) handleSend(form);
  };

  return (
    <div className="card">
      <form className="card-body">
        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            value={form.phone}
            className="form-control"
            id="phone"
            placeholder="Ваш телефон"
            onChange={(event) => handleChangeForm('phone', event.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес доставки</label>
          <input
            value={form.address}
            className="form-control"
            id="address"
            placeholder="Адрес доставки"
            onChange={(event) => handleChangeForm('address', event.target.value)}/>
        </div>
        <div className="form-group form-check">
          <input
            value={form.agree}
            type="checkbox"
            className="form-check-input"
            id="agreement"
            onChange={(event) => handleChangeForm('agree', event.target.checked)}/>
          <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
        </div>
        <button type="button" className={`btn btn-outline-secondary ${validateForm() ? '' : 'disabled'}`.trim()} onClick={() => sendForm()}>Оформить</button>
      </form>
    </div>
  )
}
