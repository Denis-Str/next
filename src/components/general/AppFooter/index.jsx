import Link from "next/link";
import style from "@/components/general/AppFooter/footer.module.scss";

export default function AppFooter() {
  return (
    <footer className={`container bg-light ${style.footer}`}>
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <Link href="/about" className="nav-link">О магазине</Link>
              </li>
              <li className="nav-item">
                <Link href="/catalog" className="nav-link">Каталог</Link>
              </li>
              <li className="nav-item">
                <Link href="/contacts" className="nav-link">Контакты</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className={style.pay}>
              <div className={`${style['pay-systems']} ${style['pay-systems-paypal']}`}/>
              <div className={`${style['pay-systems']} ${style['pay-systems-master-card']}`}/>
              <div className={`${style['pay-systems']} ${style['pay-systems-visa']}`}/>
              <div className={`${style['pay-systems']} ${style['pay-systems-yandex']}`}/>
              <div className={`${style['pay-systems']} ${style['pay-systems-webmoney']}`}/>
              <div className={`${style['pay-systems']} ${style['pay-systems-qiwi']}`}/>
            </div>
          </section>
          <section>
            <div className={style.copyright}>2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены.<br/>Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="contacts">
            <h5>Контакты:</h5>
            <a className={style.phone} href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
            <a className={style.email} href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
            <div className={style['social-links']}>
              <div className={style.twitter}/>
              <div className={style.vk}/>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}
