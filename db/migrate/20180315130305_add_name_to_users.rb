class AddNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :surname, :string
    add_column :users, :birthdate, :date
    add_column :users, :activity, :string
    add_column :users, :education, :string
    add_column :users, :university, :string
    add_column :users, :postition, :string
    add_column :users, :degree, :string
    add_column :users, :about, :string
    add_column :users, :country, :string
    add_column :users, :city, :string
  end
end
