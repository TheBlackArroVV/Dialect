class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :article
      t.string :body
      t.string :category_id

      t.timestamps
    end
    add_index :posts, :category_id
  end
end
