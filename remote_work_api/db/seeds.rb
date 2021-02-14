# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Office.create([
#   {location: 'Mount Pleasant, New York', cell: '4', bathrooms: '0', peace_index: '10', description: 'Could not find a more peaceful place on earth if you tried'},
#   {location: 'Gold Coast, Nigeria', cell: '6', bathrooms: '5', peace_index: '7', description: 'Cell service was ok, and it was pretty, but I have seen better'},
#   {location: 'Humbolt State Beach, California', cell: '9', bathrooms: '7', peace_index: '3', description: 'Really noisy, there is a playground nearby and the kids are quite active. Cell service is great though'}
#   ])

Comment.create([
  {statement: "I loved this place", user_name: "Neil E", office_id: 10},
  {statement: "It was really noisy when I was there", user_name: "Jane Doe", office_id: 11},
  {statement: "Perfect, absolutely perfect place to work for the day", user_name: "Tom Robbins", office_id: 12},
  {statement: "Scary, lots of crime", user_name: "Jake P", office_id: 10}
  ])
