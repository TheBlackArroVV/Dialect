class CreateLetters < ActiveRecord::Migration[5.1]
  def change
    create_table :letters do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :body

      t.timestamps
    end
  end
end
