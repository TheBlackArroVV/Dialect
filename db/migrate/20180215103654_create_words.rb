class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :official_word
      t.string :dialect_word
      t.string :city_id

      t.timestamps
    end
    add_index :words, :city_id
  end
end
