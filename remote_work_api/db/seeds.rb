# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {name: 'Neil', email: 'nempey2000@yahoo.com', password: 'pizza'},
  {name: 'Tiffany', email: 'tiffanysimpson@aol.net', password: 'girlpower'},
  {name: 'Chris', email: 'reebmp@yahoo.com', password: 'chubbyburgers'},
  {name: 'Sarah', email: 'sarahcrouton@gmail.com', password: 'miningforever'}
  ])
