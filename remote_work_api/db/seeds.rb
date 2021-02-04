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

Office.create([
  {location: '43.407864, -115.490790', cell: '4', bathrooms: '0', peace_index: '10', description: 'Could not find a more peaceful place on earth if you tried'},
  {location: '43.518259, -115.488521', cell: '6', bathrooms: '5', peace_index: '7', description: 'Cell service was ok, and it was pretty, but I have seen better'},
  {location: '44.098021, -114.396202', cell: '9', bathrooms: '7', peace_index: '3', description: 'Really noisy, there is a playground nearby and the kids are quite active. Cell service is great though'}
  ])
