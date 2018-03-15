class User < ApplicationRecord
  has_one  :role
  has_many :posts
  has_one  :user_information
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
