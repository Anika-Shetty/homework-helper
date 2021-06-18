class Submission < ApplicationRecord
  belongs_to :text_book
  belongs_to :user
  has_many :comments
  has_one_attached :picture
end
