class List < ApplicationRecord

  validates :title, :desc, presence: true
end