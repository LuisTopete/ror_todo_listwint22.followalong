List.delete_all
# List.create(
#   title: 'List1',
#   desc: 'desc1'
# )
# List.create(
#   title: 'List2',
#   desc: 'desc2'
# )
# List.create(
#   title: 'List3',
#   desc: 'desc3'
# )


10.times do 
  List.create(
    title: Faker::Restaurant.name,
    desc: Faker::Restaurant.description,
  )
end