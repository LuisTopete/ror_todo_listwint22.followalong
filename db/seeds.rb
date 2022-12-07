Todo.delete_all
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

@ratings = [ 1, 2, 3, 4, 5]

10.times do 
  @list = List.create(
    title: Faker::Restaurant.name,
    desc: Faker::Restaurant.description
  )

  3.times do 
    @todo = Todo.create(
      title: Faker::Books::TheKingkillerChronicle.book,
      rating: @ratings.sample,
      complete: Faker::Boolean.boolean,
      list_id: @list.id
    )
    2.times do
      Note.create(
        subject: Faker::Movies::PrincessBride.character,
        body: Faker::Movies::PrincessBride.quote,
        todo_id: @todo.id
      )
    end
  end
end


puts 'Lists'
List.all.each do |l|
  puts l.title
  puts l.desc 
  puts
end

puts 'Todos'
Todo.all.each do |t|
  puts t.title
  puts t.rating 
  puts t.complete 
  puts t.price 
  puts
end

puts 'Notes'
Note.all.each do |n|
  puts n.subject
  puts n.body 
  puts
end

puts "Lists # #{List.count}" 
puts "Todos # #{Todo.count}" 
puts "Notes # #{Note.count}" 

puts "Seeded Data done"