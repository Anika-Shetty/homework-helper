# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.delete_all;Submission.delete_all;TextBook.delete_all;Subject.delete_all;Grade.delete_all;State.delete_all;Country.delete_all;User.delete_all

c = Country.create!(name: 'United States of America', code: 'US')
s = State.create!(name: 'California', code: 'CA', country: c)
(1..12).each do |grade|
  grade = Grade.create!(name: "#{grade}", state: s)
  [
    "Language Arts",
    "Math",
  ].each do |subject_name|
    Subject.create!(name: subject_name, grade: grade)
  end
end
grade = Grade.find_by(name: '8')
subject = grade.subjects.find_by(name: 'Math')
text_book = subject.text_books.create!(name: 'Art of Problem Solving Prealgebra')
text_book.cover.attach(
  io: File.open(Rails.root.join('db', 'cover.jpg')),
  filename: 'cover.jpg',
  content_type: 'image/jpg'
)

user = User.create!(
  name: 'Anika Shetty',
  email: 'anika.ciana.shetty@gmail.com',
  password: '13861386',
  password_confirmation: '13861386',
  confirmed_at: Time.zone.now,
  country: c,
  state: s,
  grade: grade
)

user2 = User.create!(
  name: 'Harish Shetty',
  email: 'harish.kumar.shetty@gmail.com',
  password: '13861386',
  password_confirmation: '13861386',
  confirmed_at: Time.zone.now,
  country: c,
  state: s,
  grade: grade
)

user.avatar.attach(
  io: File.open(Rails.root.join('db', 'avatar.jpeg')),
  filename: 'avatar.jpeg',
  content_type: 'image/jpeg'
)

submission = text_book.submissions.create!(
  comment: 'Partial answer key',
  user: user,
  chapter: '3',
  page_number: '124'
)

submission.picture.attach(
  io: File.open(Rails.root.join('db', 'picture.jpg')),
  filename: 'picture.jpg',
  content_type: 'image/jpg'
)

comment = submission.comments.create(
  comment: 'I have checked. These are good answers!',
  user: user2
)
