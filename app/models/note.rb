class Note < ApplicationRecord
  belongs_to :todo

  validates :subject, :body, presence: true
end