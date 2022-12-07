class Todo < ApplicationRecord
  belongs_to :list
  has_many :notes, dependent: :destroy
  validates :title, :rating, presence: true
end