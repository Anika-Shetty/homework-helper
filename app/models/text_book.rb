class TextBook < ApplicationRecord
  belongs_to :subject
  has_many :submissions
  has_one_attached :cover
end
