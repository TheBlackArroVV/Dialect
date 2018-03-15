class CreateUserInformations < ActiveRecord::Migration[5.1]
  def change
    create_table :user_informations do |t|
      t.string :name
      t.string :user_id
      t.string :surname
      t.date   :birthday
      t.string :activity
      t.string :education
      t.string :university
      t.string :position
      t.string :degree
      t.string :about

      t.timestamps
    end
    add_index :user_informations, :user_id
  end
end
