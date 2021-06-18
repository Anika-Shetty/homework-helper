class User < ApplicationRecord
  validates :name, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  belongs_to :country
  belongs_to :state
  belongs_to :grade
  has_many :text_books, through: :grade
  has_many :submissions, through: :text_books

  has_one_attached :avatar
end
