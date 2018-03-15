class Post < ApplicationRecord
  has_many :attachments
  belongs_to :category
  belongs_to :user
  has_attached_file :mainphoto, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :mainphoto, content_type: /\Aimage\/.*\z/
end
