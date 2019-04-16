json.array! @theaters.each do |theater|
  json.partial! "theater.json.jbuilder", theater: theater
end