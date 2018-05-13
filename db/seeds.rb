Category.create(name: 'Новина')
Category.create(name: 'Стаття')

RoleCategory.create(name: 'Модератор')
RoleCategory.create(name: 'Адміністратор')

City.create(region: 'Закарпатська', district: 'Ужгород', city: 'Ужгород', coordx: 0, coordy: 0) if Rails.env.development?
