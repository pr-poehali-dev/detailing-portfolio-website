import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BookingDialog from '@/components/BookingDialog';

const services = [
  { icon: 'Sparkles', title: 'Керамическое покрытие', desc: 'Защита кузова на 3–5 лет, зеркальный блеск и гидрофобный эффект.' },
  { icon: 'Droplets', title: 'Полировка кузова', desc: 'Убираем царапины, голограммы и мутность. Возвращаем глубину цвета.' },
  { icon: 'Armchair', title: 'Химчистка салона', desc: 'Глубокая чистка кожи, ткани, пластика и потолка с обработкой паром.' },
  { icon: 'Shield', title: 'Оклейка плёнкой', desc: 'Антигравийная и виниловая плёнка для защиты и стайлинга авто.' },
  { icon: 'Wind', title: 'Мойка премиум-класса', desc: 'Бесконтактная мойка в 2 фазы с сушкой и обработкой шин.' },
  { icon: 'Gem', title: 'Детейлинг фар', desc: 'Полировка и бронирование оптики — свет как с завода.' },
];

const prices = [
  { name: 'Экспресс', price: '2 900', unit: '₽', features: ['Мойка премиум-класса', 'Чистка стёкол', 'Обработка шин', 'Экспресс-полировка'], popular: false },
  { name: 'Детейлинг', price: '9 900', unit: '₽', features: ['Всё из «Экспресс»', 'Химчистка салона', 'Полировка кузова', 'Защитный воск'], popular: true },
  { name: 'Керамика Pro', price: '24 900', unit: '₽', features: ['Всё из «Детейлинг»', 'Керамическое покрытие', 'Гарантия 3 года', 'Детейлинг фар'], popular: false },
];

const gallery = [
  { before: 'https://cdn.poehali.dev/projects/06ec833f-32f5-4058-936d-76494e721d0a/files/564beb06-d7a3-4bb0-b159-c5f6b4ae9c1a.jpg', after: 'https://cdn.poehali.dev/projects/06ec833f-32f5-4058-936d-76494e721d0a/files/00c71cd6-fab8-42bf-be0a-02eb91bc8a3f.jpg', label: 'Полировка кузова' },
  { before: 'https://cdn.poehali.dev/projects/06ec833f-32f5-4058-936d-76494e721d0a/files/b3d7cc0e-20d1-4271-bef8-a76bc67e797c.jpg', after: 'https://cdn.poehali.dev/projects/06ec833f-32f5-4058-936d-76494e721d0a/files/00c71cd6-fab8-42bf-be0a-02eb91bc8a3f.jpg', label: 'Химчистка салона' },
];

const reviews = [
  { name: 'Алексей М.', car: 'BMW M5', text: 'Машину не узнать! Керамика держится второй год, вода скатывается сама. Работа ювелирная.', rating: 5 },
  { name: 'Марина К.', car: 'Audi Q7', text: 'Салон после детей был в ужасе — вернули как из салона. Пахнет новой машиной!', rating: 5 },
  { name: 'Дмитрий В.', car: 'Mercedes GLE', text: 'Профессионалы своего дела. Убрали все царапины, цвет стал глубоким. Рекомендую!', rating: 5 },
];

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#gallery' },
  { label: 'Цены', href: '#prices' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-xl tracking-wide">
            <Icon name="Zap" className="text-primary" size={22} />
            APEX<span className="text-primary">DETAIL</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
            ))}
          </nav>
          <BookingDialog trigger={<Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">Записаться</Button>} />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 animate-fade-up">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-primary">{l.label}</a>
            ))}
            <BookingDialog trigger={<Button className="bg-primary text-primary-foreground font-semibold">Записаться</Button>} />
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center grid-texture pt-16">
        <div className="absolute inset-0 z-0">
          <img src="https://cdn.poehali.dev/projects/06ec833f-32f5-4058-936d-76494e721d0a/files/00c71cd6-fab8-42bf-be0a-02eb91bc8a3f.jpg" alt="Детейлинг авто" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-medium mb-6">
              <Icon name="Star" size={14} /> Студия детейлинга №1 в городе
            </span>
            <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl sm:text-7xl lg:text-8xl mb-6">
              Твоё авто<br />как <span className="text-primary text-glow">новое</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Керамика, полировка, химчистка и защита кузова. Премиальный детейлинг с гарантией результата и вниманием к каждой детали.
            </p>
            <div className="flex flex-wrap gap-4">
              <BookingDialog trigger={
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base glow-cyan">
                  <Icon name="Calendar" size={18} /> Записаться онлайн
                </Button>
              } />
              <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold text-base" asChild>
                <a href="#prices">Смотреть цены</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-10 mt-14">
              {[['12', 'лет опыта'], ['5000+', 'авто в год'], ['3 года', 'гарантия']].map(([n, t]) => (
                <div key={t}>
                  <div className="font-display font-bold text-3xl text-primary">{n}</div>
                  <div className="text-sm text-muted-foreground">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <span className="text-primary font-display font-semibold uppercase tracking-widest text-sm">Услуги</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-2">Что мы делаем</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={s.icon} className="text-primary" size={26} />
                </div>
                <h3 className="font-display font-semibold text-xl uppercase mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY BEFORE / AFTER */}
      <section id="gallery" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <span className="text-primary font-display font-semibold uppercase tracking-widest text-sm">Галерея</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-2">До и после</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {gallery.map((g) => (
              <div key={g.label} className="rounded-2xl overflow-hidden border border-border bg-card">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={g.before} alt="До" className="w-full h-64 object-cover grayscale" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 text-xs font-semibold uppercase">До</span>
                  </div>
                  <div className="relative">
                    <img src={g.after} alt="После" className="w-full h-64 object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase">После</span>
                  </div>
                </div>
                <div className="p-5 font-display font-semibold uppercase tracking-wide flex items-center gap-2">
                  <Icon name="Camera" size={18} className="text-primary" /> {g.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <span className="text-primary font-display font-semibold uppercase tracking-widest text-sm">Цены</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-2">Пакеты услуг</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((p) => (
              <div key={p.name} className={`relative p-8 rounded-2xl border transition-all ${p.popular ? 'border-primary bg-card glow-cyan scale-[1.02]' : 'border-border bg-card hover:border-primary/40'}`}>
                {p.popular && <span className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">Популярный</span>}
                <h3 className="font-display font-bold text-2xl uppercase">{p.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-sm text-muted-foreground">от </span>
                  <span className="font-display font-bold text-4xl">{p.price}</span>
                  <span className="text-xl">{p.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Icon name="Check" size={16} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <BookingDialog defaultService={p.name} trigger={
                  <Button className={`w-full font-semibold ${p.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>Выбрать</Button>
                } />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <span className="text-primary font-display font-semibold uppercase tracking-widest text-sm">Отзывы</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-2">Клиенты о нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS + MAP */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <span className="text-primary font-display font-semibold uppercase tracking-widest text-sm">Контакты</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-2">Как нас найти</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { icon: 'MapPin', title: 'Адрес', text: 'г. Москва, ул. Автозаводская, 18, стр. 4' },
                { icon: 'Phone', title: 'Телефон', text: '+7 (999) 123-45-67' },
                { icon: 'Clock', title: 'Часы работы', text: 'Ежедневно с 9:00 до 21:00' },
                { icon: 'Mail', title: 'Почта', text: 'hello@apexdetail.ru' },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-display font-semibold uppercase text-sm text-muted-foreground">{c.title}</div>
                    <div className="text-lg font-medium">{c.text}</div>
                  </div>
                </div>
              ))}
              <BookingDialog trigger={
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full">
                  <Icon name="Calendar" size={18} /> Записаться на детейлинг
                </Button>
              } />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border min-h-[420px]">
              <iframe
                title="Карта проезда"
                src="https://yandex.ru/map-widget/v1/?ll=37.657%2C55.706&z=15&pt=37.657,55.706,pm2rdm"
                className="w-full h-full min-h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <Icon name="Zap" className="text-primary" size={20} /> APEX<span className="text-primary">DETAIL</span>
          </a>
          <p className="text-sm text-muted-foreground">© 2026 Apex Detail. Студия детейлинга.</p>
          <div className="flex gap-3">
            {['Instagram', 'Send', 'Youtube'].map((i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name={i} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;