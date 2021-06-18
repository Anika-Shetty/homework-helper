class Subject < ApplicationRecord
  belongs_to :grade
  has_many :text_books
end
