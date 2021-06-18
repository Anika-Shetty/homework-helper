class Grade < ApplicationRecord
  belongs_to :state
  has_many :subjects
  has_many :text_books, through: :subjects
end
