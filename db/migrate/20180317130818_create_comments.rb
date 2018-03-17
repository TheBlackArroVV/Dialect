class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :user_id
      t.string :post_id
      t.string :text

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :post_id
  end
end
