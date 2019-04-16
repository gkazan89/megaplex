# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create(title: "Detective Pikachu", runtime: 90)
Movie.create(title: "Avengers Endgame", runtime: 180)
Movie.create(title: "Captain Marvel", runtime: 120)

Theater.create(capacity: 4)
Theater.create(capacity: 6)
Theater.create(capacity: 8)