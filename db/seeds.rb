# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create(name: 'Новина')
Category.create(name: 'Стаття')
RoleCategory.create(name: 'Модератор')
RoleCategory.create(name: 'Адміністратор')
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
User.create(email: 'guest@example.com', password: 'password')
User.create(email: 'theblackarrovv@gmail.com', password: '$2a$11$.5kxM3XgftwpiP7SKL.qpOLhUy1SdPtPawKHBz8rbLBZ1B7eA9jh.')
