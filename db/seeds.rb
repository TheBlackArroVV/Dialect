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
User.create(email: 'guest@example.com', password: 'password')
User.create(email: 'user@test.com', password: 'password')
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
User.create(email: 'moder@test.com', password: 'password')
User.create(email: 'admin@test.com', password: 'password')
Role.create(role_category_id: 1, user_id: 2)
Role.create(role_category_id: 2, user_id: 3)
