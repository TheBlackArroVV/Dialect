class AddUserIdToWords < ActiveRecord::Migration[5.1]
  def change
    add_column :words, :user_id, :string
    add_index :words, :user_id
  end
end
