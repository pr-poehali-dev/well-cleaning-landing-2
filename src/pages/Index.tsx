import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Droplet',
      title: 'Откачка септиков и колодцев',
      description: 'Профессиональная откачка септиков, выгребных ям, колодцев. Работаем круглосуточно.',
      image: 'https://cdn.poehali.dev/files/285d34a1-76b0-4188-878c-57e0e983dfc7.jpeg'
    },
    {
      icon: 'Waves',
      title: 'Очистка канализации',
      description: 'Гидродинамическая очистка канализационных систем и насосных станций.',
      image: 'https://cdn.poehali.dev/files/63f02a30-7bad-47f2-abc4-bc54e42c6ec2.jpeg'
    },
    {
      icon: 'Factory',
      title: 'Обслуживание автомоек',
      description: 'Откачка и очистка автомоек, гидроабразивного оборудования.'
    },
    {
      icon: 'Camera',
      title: 'Телеинспекция',
      description: 'Видеодиагностика и телеинспекция систем коммуникаций.'
    }
  ];

  const benefits = [
    {
      icon: 'Percent',
      title: 'Скидки и акции',
      description: 'Регулярные акции для постоянных клиентов и специальные предложения.'
    },
    {
      icon: 'Clock',
      title: 'Быстрый выезд',
      description: 'Выезд на объект в течение 1-2 часов после заявки. Работаем 24/7.'
    },
    {
      icon: 'FileText',
      title: 'Налоговые льготы',
      description: 'Предоставляем полный пакет документов для бухгалтерии и налоговой.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Stoki-Ekb</h1>
          <a href="tel:+73432000000" className="text-white hover:text-accent transition-colors flex items-center gap-2">
            <Icon name="Phone" size={20} />
            <span className="font-semibold">+7 (343) 200-00-00</span>
          </a>
        </div>
      </header>

      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Профессиональная очистка и откачка в Екатеринбурге
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Современная спецтехника КО-560 для любых задач
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Заказать услугу
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/49d8b041-44fb-4f58-b25a-14b69e426c3a.jpg"
              alt="КО-560 спецтехника"
              className="w-full h-auto drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг по обслуживанию канализационных систем
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-6">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  ) : (
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Преимущества работы с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Почему нам доверяют сотни клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={benefit.icon} size={36} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">О компании Stoki-Ekb</h2>
            <p className="text-xl mb-6 text-blue-100 leading-relaxed">
              Мы специализируемся на профессиональном обслуживании канализационных систем в Екатеринбурге. 
              Наша компания работает с использованием современной спецтехники КО-560, что позволяет нам 
              решать задачи любой сложности быстро и качественно.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              В нашем арсенале: откачка септиков, колодцев и выгребных ям, гидродинамическая очистка 
              канализационных систем, обслуживание автомоек и промышленного оборудования, телеинспекция 
              коммуникаций. Работаем круглосуточно, предоставляем полный пакет документов.
            </p>
          </div>
        </div>
      </section>

      <section id="form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Заполните форму и мы свяжемся с вами в течение 15 минут
            </p>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      type="tel"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите вашу задачу..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ТЕХСЕРВИС</h3>
              <p className="text-blue-100">
                Профессиональные услуги по обслуживанию канализационных систем в Екатеринбурге
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (343) 200-00-00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@tehservis-ekb.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Екатеринбург</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Режим работы</h4>
              <p className="text-blue-100">
                Круглосуточно, без выходных
              </p>
              <p className="text-blue-100 mt-4">
                Аварийная служба 24/7
              </p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 ТЕХСЕРВИС. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}