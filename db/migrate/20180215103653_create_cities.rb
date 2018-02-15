class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :region
      t.string :district
      t.string :city
      t.float :coordx
      t.float :coordy

      t.timestamps
    end
  end
end
