class CreateRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :roles do |t|
      t.string :user_id
      t.string :role_category_id

      t.timestamps
    end
    add_index :roles, :user_id
    add_index :roles, :role_category_id
  end
end
